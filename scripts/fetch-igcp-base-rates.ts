#!/usr/bin/env tsx
/**
 * Refresh the bundled IGCP-published Série F monthly base-rate fixture
 * from the IGCP press releases listed under
 * `https://www.igcp.pt/pt/noticias/`.
 *
 * The script is invoked by:
 *   - the `data-refresh.yml` GitHub Actions cron (`--month current`)
 *   - developers running `pnpm fetch:igcp-base-rates` locally to refresh
 *     a single month or smoke-test a slug change
 *
 * Behavioural contract (per the data-sourcing subplan and the
 * `igcp_base_rates_fetcher_*` plan):
 *
 *   - `--month current` resolves to the current UTC month. `--month
 *     YYYY-MM` targets a specific month; only one month per run.
 *   - The slug is built from the month's Portuguese name (no accents,
 *     `marco` not `março`) and year, matching IGCP's canonical URL
 *     pattern: `taxas-de-juro-dos-certificados-de-aforro-das-series-b-
 *     d-e-e-f-em-<mes>-de-<ano>`. A `--url` override is accepted so
 *     the test suite can point at an msw-mocked endpoint without
 *     reverse-engineering the slug helper.
 *   - The page HTML is parsed by {@link parseArticle} (in
 *     `igcpArticleParser.ts`); a markup change or missing Série F
 *     sentence throws `IgcpParseError` and the workflow step fails
 *     loud so a human eyeballs the cron log.
 *   - The fixture merge is **idempotent**:
 *       - month exists, value matches  -> no-op, fixture untouched
 *       - month exists, value differs  -> throw (do NOT silently
 *         overwrite an IGCP-published rate; needs human review)
 *       - month missing                -> insert in sort order, bump
 *         `_meta.lastVerifiedAt` to today's UTC date
 *   - When the fixture changes (or the month is freshly inserted), the
 *     raw HTML response is mirrored under `raw/igcp/<YYYY-MM>.html` so
 *     a future markup audit doesn't require curl-replaying.
 *
 * `runFetch` is exported separately from `writeOutputs` so the test
 * suite can exercise the fetch + parse + merge pipeline against a
 * msw-mocked HTTP server without ever touching disk -- and so
 * `--dry-run` short-circuits cleanly.
 */

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { argv, exit } from 'node:process';
import { fileURLToPath } from 'node:url';

import { type ParsedIgcpArticle, parseArticle } from './igcpArticleParser.js';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(HERE, '..');
const FIXTURE_FILE = resolve(REPO_ROOT, 'tests/fixtures/igcpPublishedBaseRates.json');
const RAW_DIR = resolve(REPO_ROOT, 'raw/igcp');

/**
 * IGCP press-release URL prefix. The slug builder appends the
 * Portuguese month name + year to compose the full notice URL.
 */
const IGCP_NEWS_PREFIX = 'https://www.igcp.pt/pt/noticias/';

/**
 * Portuguese month names used by IGCP in the slug. Diacritics are
 * stripped (`marco`, not `março`) because the canonical URL on
 * `igcp.pt` follows the same convention -- e.g.
 * `.../em-abril-de-2026`. Indexed 0..11 to match `Date#getUTCMonth()`.
 */
const PT_MONTH_SLUGS = [
  'janeiro',
  'fevereiro',
  'marco',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
] as const;

interface CliArgs {
  /** Resolved `YYYY-MM` (after `current` -> today). */
  readonly month: string;
  /** Optional explicit URL; bypasses slug building. */
  readonly url?: string;
  readonly dryRun: boolean;
  readonly quiet: boolean;
}

const HELP_TEXT = `Usage: tsx scripts/fetch-igcp-base-rates.ts [options]

Options:
  --month <value>   Required. One of:
                      current   Resolve to the current UTC month.
                      YYYY-MM   Fetch the IGCP notice for that month.
  --url <url>       Override the IGCP notice URL (testing/staging).
                    When set, the slug is not derived from --month.
  --dry-run         Fetch and parse, but do not write any files.
  --quiet           Suppress informational logs.
  -h, --help        Show this help.

Behaviour:
  - Idempotent: if the parsed value matches the existing fixture entry
    for the month, no files are written.
  - If a month is already present with a *different* value, the script
    throws — IGCP-published rates are never silently overwritten.
  - On success with changes, writes
      tests/fixtures/igcpPublishedBaseRates.json  (rate inserted/no-op)
      raw/igcp/<YYYY-MM>.html                     (verbatim notice)
`;

const MONTH_PATTERN = /^\d{4}-(0[1-9]|1[0-2])$/;

function parseArgs(rawArgs: readonly string[]): CliArgs {
  if (rawArgs.includes('-h') || rawArgs.includes('--help')) {
    process.stdout.write(HELP_TEXT);
    exit(0);
  }

  let monthRaw: string | undefined;
  let url: string | undefined;
  let dryRun = false;
  let quiet = false;

  for (let i = 0; i < rawArgs.length; i += 1) {
    const arg = rawArgs[i];
    switch (arg) {
      case '--month':
        monthRaw = expectValue(arg, rawArgs[++i]);
        break;
      case '--url':
        url = expectValue(arg, rawArgs[++i]);
        break;
      case '--dry-run':
        dryRun = true;
        break;
      case '--quiet':
        quiet = true;
        break;
      default:
        throw new Error(`Unknown argument: "${arg}". Run with --help for usage.`);
    }
  }

  if (monthRaw === undefined) {
    throw new Error('--month is required (use "current" or YYYY-MM). Run with --help for usage.');
  }

  const month = monthRaw === 'current' ? currentUtcMonth() : monthRaw;
  if (!MONTH_PATTERN.test(month)) {
    throw new Error(`--month must be "current" or YYYY-MM, got "${monthRaw}"`);
  }

  return { month, url, dryRun, quiet };
}

function expectValue(flag: string, value: string | undefined): string {
  if (value === undefined || value.startsWith('--')) {
    throw new Error(`${flag} requires a value`);
  }
  return value;
}

/** UTC-stable `YYYY-MM` for the current month. */
function currentUtcMonth(): string {
  const now = new Date();
  return `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}`;
}

/** UTC-stable `YYYY-MM-DD` for today. */
function todayUtcDate(): string {
  const now = new Date();
  const yyyy = now.getUTCFullYear();
  const mm = String(now.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(now.getUTCDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

/**
 * Builds the IGCP notice URL for a given `YYYY-MM`. Mirrors the
 * canonical slug pattern observed on `igcp.pt` (verified against the
 * 2026-04 snapshot):
 *
 *   https://www.igcp.pt/pt/noticias/taxas-de-juro-dos-certificados-de-aforro-das-series-b-d-e-e-f-em-<mes>-de-<ano>
 */
export function buildIgcpUrl(month: string): string {
  const match = MONTH_PATTERN.exec(month);
  if (!match) {
    throw new Error(`buildIgcpUrl: invalid month "${month}", expected YYYY-MM`);
  }
  const [yearStr, monthStr] = month.split('-');
  const year = Number(yearStr);
  const monthIdx = Number(monthStr) - 1;
  const slug = `taxas-de-juro-dos-certificados-de-aforro-das-series-b-d-e-e-f-em-${PT_MONTH_SLUGS[monthIdx]}-de-${year}`;
  return `${IGCP_NEWS_PREFIX}${slug}`;
}

interface FixtureRate {
  readonly series: 'F';
  readonly month: string;
  readonly basePct: string;
}

interface FixtureMeta {
  readonly source: string;
  readonly sourceUrl: string;
  readonly channel: string;
  readonly lastVerifiedAt: string;
  readonly notes: string;
}

interface FixtureFile {
  readonly _meta: FixtureMeta;
  readonly rates: readonly FixtureRate[];
}

async function readFixture(): Promise<FixtureFile> {
  const raw = await readFile(FIXTURE_FILE, 'utf8');
  return JSON.parse(raw) as FixtureFile;
}

interface MergeResult {
  readonly fixture: FixtureFile;
  /** True when the on-disk fixture should be rewritten. */
  readonly changed: boolean;
  /** True when the row was newly added (vs. just `lastVerifiedAt` bumped). */
  readonly inserted: boolean;
}

/**
 * Idempotent merge of `newRow` into `existing`:
 *
 *   - month present, value matches  -> no-op, fixture untouched
 *   - month present, value differs  -> throw (refuse to overwrite)
 *   - month missing                 -> insert (sorted ascending),
 *                                      bump `lastVerifiedAt` to today
 */
export function mergeFixture(existing: FixtureFile, newRow: FixtureRate): MergeResult {
  const idx = existing.rates.findIndex(
    (r) => r.series === newRow.series && r.month === newRow.month,
  );
  if (idx !== -1) {
    const previous = existing.rates[idx];
    if (previous.basePct === newRow.basePct) {
      return { fixture: existing, changed: false, inserted: false };
    }
    throw new Error(
      `IGCP rate for ${newRow.month} (Série ${newRow.series}) changed: ` +
        `fixture=${previous.basePct} igcp=${newRow.basePct}. ` +
        'Refusing to overwrite a published rate; review manually before updating the fixture.',
    );
  }

  const rates = [...existing.rates, newRow].sort((a, b) =>
    a.month < b.month ? -1 : a.month > b.month ? 1 : a.series < b.series ? -1 : 1,
  );

  return {
    fixture: {
      _meta: { ...existing._meta, lastVerifiedAt: todayUtcDate() },
      rates,
    },
    changed: true,
    inserted: true,
  };
}

/**
 * Serializes the fixture using the on-disk layout the project commits:
 *   - `_meta` is pretty-printed with 2-space indent
 *   - each rate row is inlined on its own line for readable diffs
 *
 * `JSON.stringify(..., 2)` would explode every rate object across four
 * lines, blowing up the diff for a one-row insert; the inline-row
 * layout matches `tests/fixtures/igcpPublishedBaseRates.json` as
 * checked into the repo.
 */
function serializeFixture(fixture: FixtureFile): string {
  const metaJson = JSON.stringify(fixture._meta, null, 2)
    .split('\n')
    .map((line, i) => (i === 0 ? line : `  ${line}`))
    .join('\n');

  if (fixture.rates.length === 0) {
    return `{\n  "_meta": ${metaJson},\n  "rates": []\n}\n`;
  }

  const rateLines = fixture.rates
    .map((r) => `    { "series": "${r.series}", "month": "${r.month}", "basePct": "${r.basePct}" }`)
    .join(',\n');

  return `{\n  "_meta": ${metaJson},\n  "rates": [\n${rateLines}\n  ]\n}\n`;
}

type Logger = (message: string) => void;

interface RunResult {
  readonly month: string;
  readonly url: string;
  readonly parsed: ParsedIgcpArticle;
  readonly merge: MergeResult;
  readonly html: string;
}

/**
 * Core orchestration: resolve URL -> fetch -> parse -> merge against
 * the on-disk fixture. File writes are deferred to {@link writeOutputs}
 * so this function is trivially testable and `--dry-run` short-circuits
 * cleanly without hitting the filesystem.
 */
export async function runFetch(
  args: CliArgs,
  log: Logger,
  fetchImpl: typeof fetch = fetch,
): Promise<RunResult> {
  const url = args.url ?? buildIgcpUrl(args.month);
  log(`[fetch-igcp-base-rates] month=${args.month} url=${url}`);

  const response = await fetchImpl(url);
  if (!response.ok) {
    throw new Error(
      `IGCP notice fetch failed: HTTP ${response.status} ${response.statusText} (url=${url})`,
    );
  }
  const html = await response.text();
  const parsed = parseArticle(html);
  log(`[fetch-igcp-base-rates] parsed Série F basePct=${parsed.basePct}`);

  const fixture = await readFixture();
  const merge = mergeFixture(fixture, {
    series: 'F',
    month: args.month,
    basePct: parsed.basePct,
  });

  if (merge.changed) {
    log(
      `[fetch-igcp-base-rates] inserted new rate for ${args.month}; fixture now has ${merge.fixture.rates.length} rows`,
    );
  } else {
    log(
      `[fetch-igcp-base-rates] no-op: ${args.month} already at ${parsed.basePct}; fixture unchanged`,
    );
  }

  return { month: args.month, url, parsed, merge, html };
}

/**
 * Writes the merged fixture and mirrors the raw HTML notice. When the
 * merge was a no-op (`changed === false`), nothing is written: the
 * fixture is byte-identical and rewriting it would create a spurious
 * `lastVerifiedAt` diff in every cron PR even when IGCP hasn't
 * republished.
 */
async function writeOutputs(result: RunResult, log: Logger): Promise<void> {
  if (!result.merge.changed) {
    log('[fetch-igcp-base-rates] nothing to write (no-op merge)');
    return;
  }

  await mkdir(dirname(FIXTURE_FILE), { recursive: true });
  await mkdir(RAW_DIR, { recursive: true });

  await writeFile(FIXTURE_FILE, serializeFixture(result.merge.fixture));
  log(`[fetch-igcp-base-rates] wrote ${FIXTURE_FILE}`);

  const rawPath = resolve(RAW_DIR, `${result.month}.html`);
  await writeFile(rawPath, result.html);
  log(`[fetch-igcp-base-rates] wrote ${rawPath}`);
}

async function main(): Promise<void> {
  const args = parseArgs(argv.slice(2));
  const log: Logger = args.quiet ? () => {} : (msg) => process.stderr.write(`${msg}\n`);

  const result = await runFetch(args, log);

  if (args.dryRun) {
    log('[fetch-igcp-base-rates] --dry-run: not writing any files');
    return;
  }

  await writeOutputs(result, log);
  log('[fetch-igcp-base-rates] done');
}

// `tsx scripts/fetch-igcp-base-rates.ts` runs this file as the entry
// point. Guard against accidental execution when imported (e.g. from a
// test file that exercises `runFetch` directly).
const isEntryPoint = (() => {
  const entry = argv[1];
  if (!entry) return false;
  return resolve(entry) === fileURLToPath(import.meta.url);
})();

if (isEntryPoint) {
  main().catch((err: unknown) => {
    const message = err instanceof Error ? err.message : String(err);
    process.stderr.write(`fetch-igcp-base-rates failed: ${message}\n`);
    exit(1);
  });
}
