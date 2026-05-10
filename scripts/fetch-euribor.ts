#!/usr/bin/env tsx
/**
 * Refresh the bundled Euribor 3M dataset from Deutsche Bundesbank's BBIG1
 * time-series (the daily EMMI EURIBOR® 3M fixings, redistributed under
 * non-commercial terms with a one-business-day publication lag).
 *
 * The script is invoked both by:
 *   - the `data-refresh.yml` GitHub Actions cron (mode: `incremental`)
 *   - developers running `aforro fetch-euribor` (mode: forwarded)
 *   - the `seed` job that bootstraps `src/data/euribor3m.json` from scratch
 *
 * The Bundesbank BBIG1 endpoint always returns the *full* daily series
 * (back to 1998-12-30) -- `startPeriod`/`endPeriod` query parameters are
 * silently ignored on this dataflow. So filtering is always client-side,
 * with the `--mode` flag only changing what we keep / merge:
 *
 *   - `seed`        -> Replace `src/data/euribor3m.json` with the upstream
 *                      payload filtered to `[--from, --to]`. `--from`
 *                      defaults to {@link SEED_START_DATE} (before the
 *                      first Série D fixing windows this package supports).
 *   - `incremental` -> Default cron mode. Merge upstream into the existing
 *                      dataset, dedup by date, keep both. Incoming wins
 *                      on conflict (Bundesbank/EMMI is authoritative).
 *   - `range`       -> Like incremental, but restrict the upstream slice
 *                      to `[--from, --to]` first. Useful for backfilling
 *                      a known gap without disturbing dates outside it.
 *
 * In every mode the script writes:
 *   - `src/data/euribor3m.json`     -- merged EMMI EURIBOR® 3M fixings
 *   - `src/data/euribor12m.json`    -- merged EMMI EURIBOR® 12M fixings
 *   - `src/data/_meta.json`         -- `euribor` + `euribor12m` metadata blocks
 *   - `raw/euribor/<YYYY-MM>-3m.csv` and `...-12m.csv` -- verbatim snapshots
 */

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { argv, exit } from 'node:process';
import { fileURLToPath } from 'node:url';

import type { RateEntry } from '../src/types/domain.js';
import {
  BUNDESBANK_BBIG1_M12_URL,
  BUNDESBANK_BBIG1_URL,
  type MergeStats,
  mergeObservations,
  parseBundesbankCsv,
} from './fetchEuriborCore.js';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(HERE, '..');
const DATA_FILE_3M = resolve(REPO_ROOT, 'src/data/euribor3m.json');
const DATA_FILE_12M = resolve(REPO_ROOT, 'src/data/euribor12m.json');
const META_FILE = resolve(REPO_ROOT, 'src/data/_meta.json');
const RAW_DIR = resolve(REPO_ROOT, 'raw/euribor');

/**
 * Earliest date we keep in the bundled dataset on a fresh `seed` run.
 * Série C (Jan 2008–Jan 2015) needs Euribor from 2007 fixing windows, so the
 * default floor is 1999-01-01 (BBIG1 coverage). Incremental/range merges may
 * still layer in earlier rows without re-seeding the whole file.
 */
const SEED_START_DATE = '1999-01-01';

const META_SOURCE_LABEL_3M =
  'Deutsche Bundesbank time-series (BBIG1) — EMMI EURIBOR® 3-month daily fixings';
const META_SOURCE_LABEL_12M =
  'Deutsche Bundesbank time-series (BBIG1) — EMMI EURIBOR® 12-month daily fixings';
const META_SERIES_ID_3M = 'BBIG1.D.D0.EUR.MMKT.EURIBOR.M03.BID._Z';
const META_SERIES_ID_12M = 'BBIG1.D.D0.EUR.MMKT.EURIBOR.M12.BID._Z';
const META_LICENSE =
  'EMMI EURIBOR® data redistributed by Deutsche Bundesbank under non-commercial terms; ' +
  'commercial use requires an EMMI licence (https://www.emmi-benchmarks.eu/terms-of-use).';

/** Validated CLI inputs, after defaults are applied. */
type Mode = 'seed' | 'incremental' | 'range';

interface CliArgs {
  readonly mode: Mode;
  readonly from?: string;
  readonly to?: string;
  readonly url: string;
  readonly url12m: string;
  readonly dryRun: boolean;
  readonly quiet: boolean;
}

const HELP_TEXT = `Usage: tsx scripts/fetch-euribor.ts [options]

Options:
  --mode <mode>     One of: seed | incremental | range. Default: incremental.
  --from <date>     ISO date (YYYY-MM-DD) lower bound (inclusive).
                    Defaults to ${SEED_START_DATE} for seed/incremental.
                    Required for range mode.
  --to <date>       ISO date (YYYY-MM-DD) upper bound (inclusive).
                    Required for range mode.
  --url <url>       Override the Bundesbank BBIG1 3M endpoint (testing/staging).
  --url-12m <url>   Override the Bundesbank BBIG1 12M endpoint (testing/staging).
  --dry-run         Fetch and parse, but do not write any files.
  --quiet           Suppress informational logs.
  -h, --help        Show this help.

Modes:
  seed         Replace both JSON files with the upstream payloads filtered
               to [--from, --to]. Use this for first-time bootstrap.
  incremental  Default. Merge upstream into each existing dataset; incoming
               wins on conflict. Used by the daily cron.
  range        Like incremental, but filter each upstream slice to
               [--from, --to] before merging.
`;

function parseArgs(rawArgs: readonly string[]): CliArgs {
  if (rawArgs.includes('-h') || rawArgs.includes('--help')) {
    process.stdout.write(HELP_TEXT);
    exit(0);
  }

  let mode: Mode = 'incremental';
  let from: string | undefined;
  let to: string | undefined;
  let url = BUNDESBANK_BBIG1_URL;
  let url12m = BUNDESBANK_BBIG1_M12_URL;
  let dryRun = false;
  let quiet = false;

  for (let i = 0; i < rawArgs.length; i += 1) {
    const arg = rawArgs[i];
    switch (arg) {
      case '--mode': {
        const value = rawArgs[++i];
        if (value !== 'seed' && value !== 'incremental' && value !== 'range') {
          throw new Error(`Invalid --mode: "${value}"; expected seed | incremental | range`);
        }
        mode = value;
        break;
      }
      case '--from':
        from = expectValue(arg, rawArgs[++i]);
        break;
      case '--to':
        to = expectValue(arg, rawArgs[++i]);
        break;
      case '--url':
        url = expectValue(arg, rawArgs[++i]);
        break;
      case '--url-12m':
        url12m = expectValue(arg, rawArgs[++i]);
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

  const isoDate = /^\d{4}-\d{2}-\d{2}$/;
  if (from !== undefined && !isoDate.test(from)) {
    throw new Error(`--from must be YYYY-MM-DD, got "${from}"`);
  }
  if (to !== undefined && !isoDate.test(to)) {
    throw new Error(`--to must be YYYY-MM-DD, got "${to}"`);
  }
  if (from && to && from > to) {
    throw new Error(`--from (${from}) must be <= --to (${to})`);
  }
  if (mode === 'range' && (!from || !to)) {
    throw new Error('range mode requires both --from and --to');
  }

  return { mode, from, to, url, url12m, dryRun, quiet };
}

function expectValue(flag: string, value: string | undefined): string {
  if (value === undefined || value.startsWith('--')) {
    throw new Error(`${flag} requires a value`);
  }
  return value;
}

/**
 * Reads the existing `src/data/euribor3m.json` and normalises every row
 * to the canonical `{ date: string, ratePct: string }` shape used
 * internally by `mergeObservations`. The bundled file stores `ratePct`
 * as JSON numbers for compactness; we coerce here so the merge step has
 * a single source of truth on the wire format.
 *
 * Returns an empty array when the file does not exist (first-run /
 * post-clean state).
 */
async function readExistingObservations(dataFile: string): Promise<readonly RateEntry[]> {
  let raw: string;
  try {
    raw = await readFile(dataFile, 'utf8');
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') {
      return [];
    }
    throw err;
  }
  const parsed = JSON.parse(raw) as readonly { date: string; ratePct: number | string }[];
  return parsed.map((row) => ({ date: row.date, ratePct: String(row.ratePct) }));
}

/**
 * Serializes the dataset back to the on-disk format: one observation per
 * line, no indentation inside each row, JSON-array brackets on their own
 * lines. The line-per-entry layout keeps `git diff` of the cron PR small
 * enough to skim, while still being valid JSON.
 *
 * `ratePct` is written as a JSON number to match the existing file. We
 * deliberately preserve at least one decimal place for whole numbers
 * (e.g. `2.0` instead of `2`) so the column visually reads as a rate
 * percentage rather than a count -- and so a row like `2.000` from
 * Bundesbank does not cosmetically diff into `2` on a quiet day.
 * Sub-decimal trailing zeros are still dropped (`2.150` -> `2.15`), in
 * line with how `JSON.stringify` would serialize the same value; this is
 * harmless for the math and matches the existing checked-in dataset.
 */
function serializeObservations(observations: readonly RateEntry[]): string {
  if (observations.length === 0) {
    return '[]\n';
  }
  const lines = observations.map(
    (row) => `{"date": "${row.date}", "ratePct": ${formatRatePct(row.ratePct)}}`,
  );
  return `[\n${lines.join(',\n')}\n]\n`;
}

function formatRatePct(value: string): string {
  const n = Number(value);
  if (!Number.isFinite(n)) {
    throw new Error(`Cannot serialize non-finite ratePct: "${value}"`);
  }
  return Number.isInteger(n) ? `${n}.0` : String(n);
}

/**
 * `Date#toISOString()` always emits milliseconds (`...01.234Z`), which
 * is more precision than we need in `_meta.json` and would create churn
 * in every cron PR diff. Strip them to match the existing checked-in
 * timestamp shape (`YYYY-MM-DDTHH:MM:SSZ`).
 */
function nowIsoSeconds(): string {
  return new Date().toISOString().replace(/\.\d+Z$/, 'Z');
}

/** UTC-stable `YYYY-MM` for the current month, used as the raw-CSV filename. */
function currentUtcMonth(): string {
  const now = new Date();
  return `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}`;
}

type EuriborMetaBlock = {
  readonly lastRefreshedAt: string;
  readonly source: string;
  readonly sourceUrl: string;
  readonly seriesId: string;
  readonly upstreamLastUpdate: string | null;
  readonly earliestObservation: string | null;
  readonly latestObservation: string | null;
  readonly observationCount: number;
  readonly license: string;
};

interface MetaPayload {
  readonly euribor: EuriborMetaBlock;
  readonly euribor12m: EuriborMetaBlock;
}

function buildMetaBlock(
  observations: readonly RateEntry[],
  upstreamLastUpdate: string | null,
  source: string,
  sourceUrl: string,
  seriesId: string,
): EuriborMetaBlock {
  return {
    lastRefreshedAt: nowIsoSeconds(),
    source,
    sourceUrl,
    seriesId,
    upstreamLastUpdate,
    earliestObservation: observations[0]?.date ?? null,
    latestObservation: observations[observations.length - 1]?.date ?? null,
    observationCount: observations.length,
    license: META_LICENSE,
  };
}

async function readExistingMetaRoot(): Promise<Record<string, unknown>> {
  try {
    const raw = await readFile(META_FILE, 'utf8');
    return JSON.parse(raw) as Record<string, unknown>;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') {
      return {};
    }
    throw err;
  }
}

type Logger = (message: string) => void;

interface SingleSeriesRun {
  readonly merged: readonly RateEntry[];
  readonly stats: MergeStats;
  readonly upstreamLastUpdate: string | null;
}

export interface FetchEuriborRunResult {
  readonly result3m: SingleSeriesRun;
  readonly result12m: SingleSeriesRun;
  readonly csvText3m: string;
  readonly csvText12m: string;
}

async function fetchMergeOneSeries(args: CliArgs, log: Logger, fetchImpl: typeof fetch, label: string, url: string, dataFile: string): Promise<{ result: SingleSeriesRun; csvText: string }> {
  log(`[fetch-euribor] ${label} url=${url}`);
  const response = await fetchImpl(url);
  if (!response.ok) {
    throw new Error(
      `Bundesbank BBIG1 ${label} fetch failed: HTTP ${response.status} ${response.statusText}`,
    );
  }
  const csvText = await response.text();
  const parsed = parseBundesbankCsv(csvText);
  log(
    `[fetch-euribor] ${label} parsed ${parsed.observations.length} observations ` +
      `(skipped ${parsed.skippedPreambleRows} preamble + ${parsed.skippedEmptyValueRows} no-value rows); ` +
      `upstream last update: ${parsed.upstreamLastUpdate ?? '(unknown)'}`,
  );

  const filterFrom = args.from ?? (args.mode === 'range' ? undefined : SEED_START_DATE);
  const filterTo = args.to;
  const sliced = parsed.observations.filter((row) => {
    if (filterFrom !== undefined && row.date < filterFrom) return false;
    if (filterTo !== undefined && row.date > filterTo) return false;
    return true;
  });
  log(
    `[fetch-euribor] ${label} kept ${sliced.length} observations in window ` +
      `[${filterFrom ?? '-∞'}, ${filterTo ?? '+∞'}]`,
  );

  if (sliced.length === 0) {
    throw new Error(
      `[fetch-euribor] ${label}: refusing to write an empty dataset. Check --from/--to bounds or upstream availability.`,
    );
  }

  let merged: readonly RateEntry[];
  let stats: MergeStats;
  if (args.mode === 'seed') {
    merged = sliced;
    stats = { added: sliced.length, updated: 0, unchanged: 0 };
    log(`[fetch-euribor] ${label} seed mode: replacing existing dataset`);
  } else {
    const existing = await readExistingObservations(dataFile);
    log(`[fetch-euribor] ${label} existing dataset: ${existing.length} observations`);
    const result = mergeObservations(existing, sliced);
    merged = result.merged;
    stats = result.stats;
  }
  log(
    `[fetch-euribor] ${label} merge stats: added=${stats.added} updated=${stats.updated} unchanged=${stats.unchanged}; ` +
      `final: ${merged.length} observations (${merged[0]?.date ?? '∅'} .. ${merged[merged.length - 1]?.date ?? '∅'})`,
  );

  return {
    result: { merged, stats, upstreamLastUpdate: parsed.upstreamLastUpdate },
    csvText,
  };
}

/**
 * Core orchestration: fetch 3M + 12M -> parse -> filter -> merge each. File
 * writes are deferred to {@link writeFetchOutputs}.
 */
export async function runFetch(
  args: CliArgs,
  log: Logger,
  fetchImpl: typeof fetch = fetch,
): Promise<FetchEuriborRunResult> {
  log(`[fetch-euribor] mode=${args.mode}`);
  const r3 = await fetchMergeOneSeries(args, log, fetchImpl, '3M', args.url, DATA_FILE_3M);
  const r12 = await fetchMergeOneSeries(args, log, fetchImpl, '12M', args.url12m, DATA_FILE_12M);
  return {
    result3m: r3.result,
    result12m: r12.result,
    csvText3m: r3.csvText,
    csvText12m: r12.csvText,
  };
}

export async function writeFetchOutputs(
  result: FetchEuriborRunResult,
  args: CliArgs,
  log: Logger,
): Promise<void> {
  await mkdir(dirname(DATA_FILE_3M), { recursive: true });
  await mkdir(RAW_DIR, { recursive: true });

  await writeFile(DATA_FILE_3M, serializeObservations(result.result3m.merged));
  log(`[fetch-euribor] wrote ${DATA_FILE_3M}`);

  await writeFile(DATA_FILE_12M, serializeObservations(result.result12m.merged));
  log(`[fetch-euribor] wrote ${DATA_FILE_12M}`);

  const metaRoot = await readExistingMetaRoot();
  const payload: MetaPayload = {
    euribor: buildMetaBlock(
      result.result3m.merged,
      result.result3m.upstreamLastUpdate,
      META_SOURCE_LABEL_3M,
      args.url,
      META_SERIES_ID_3M,
    ),
    euribor12m: buildMetaBlock(
      result.result12m.merged,
      result.result12m.upstreamLastUpdate,
      META_SOURCE_LABEL_12M,
      args.url12m,
      META_SERIES_ID_12M,
    ),
  };
  await writeFile(
    META_FILE,
    `${JSON.stringify({ ...metaRoot, ...payload }, null, 2)}\n`,
  );
  log(`[fetch-euribor] wrote ${META_FILE}`);

  const month = currentUtcMonth();
  await writeFile(resolve(RAW_DIR, `${month}-3m.csv`), result.csvText3m);
  await writeFile(resolve(RAW_DIR, `${month}-12m.csv`), result.csvText12m);
  log(`[fetch-euribor] wrote raw/euribor/${month}-{{3m,12m}}.csv`);
}

async function main(): Promise<void> {
  const args = parseArgs(argv.slice(2));
  const log: Logger = args.quiet ? () => {} : (msg) => process.stderr.write(`${msg}\n`);

  const run = await runFetch(args, log);

  if (args.dryRun) {
    log('[fetch-euribor] --dry-run: not writing any files');
    return;
  }

  await writeFetchOutputs(run, args, log);
  log('[fetch-euribor] done');
}

// `tsx scripts/fetch-euribor.ts` runs this file as the entry point.
// Guard against accidental execution when the module is imported (e.g.
// from a future test file that exercises `runFetch` directly).
const isEntryPoint = (() => {
  const entry = argv[1];
  if (!entry) return false;
  return resolve(entry) === fileURLToPath(import.meta.url);
})();

if (isEntryPoint) {
  main().catch((err: unknown) => {
    const message = err instanceof Error ? err.message : String(err);
    process.stderr.write(`fetch-euribor failed: ${message}\n`);
    exit(1);
  });
}
