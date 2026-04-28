#!/usr/bin/env tsx
/**
 * Precompute a single, self-contained `rates.json` artifact covering
 * every series registered in {@link listSeries} (currently Série E and
 * Série F), with one block per series enumerating every published month
 * and every anchored-quarter cohort, then write it to
 * `public/rates.json` (the path published with the docs site).
 *
 * The artifact exists so non-JS consumers (Python, Java, Excel,
 * spreadsheets) can use the same numbers the npm library returns
 * without re-implementing the IGCP methodology themselves: they fetch
 * one JSON file, pick the series block (`series.E` or `series.F`),
 * then look up `monthlyBaseRates[month]` for the monthly base rate or
 * `cohortRates` filtered by cohort and quarter for the composite
 * annual rate.
 *
 * The script is invoked by:
 *   - the release workflow (after a version bump and npm publish)
 *   - the `data-refresh.yml` cron (after Euribor/IGCP base-rate refresh)
 *   - developers running `pnpm build:rates-json`
 *
 * Schema (versioned via `schemaVersion` so future shape changes are
 * detectable downstream). The shape is identical for every series; the
 * Série F block is shown for illustration:
 *
 *   {
 *     "schemaVersion": 1,
 *     "generatedAt": "YYYY-MM-DDTHH:MM:SSZ",
 *     "libraryVersion": "YYYY.MMDD.PATCH",
 *     "euriborSourceMeta": { ...src/data/_meta.json["euribor"] },
 *     "series": {
 *       "E": { "metadata": { ...SeriesMetadata }, "monthlyBaseRates": [...], "cohortRates": [...] },
 *       "F": {
 *         "metadata": { ...SeriesMetadata },
 *         "monthlyBaseRates": [
 *           { "month": "YYYY-MM", "fixingDate": "YYYY-MM-DD", "basePct": "2.500" }
 *         ],
 *         "cohortRates": [
 *           {
 *             "subscribed": "YYYY-MM",
 *             "subscriptionDate": "YYYY-MM-01",
 *             "quarterIndex": 0,
 *             "quarterStartDate": "YYYY-MM-DD",
 *             "quarterEndDate": "YYYY-MM-DD",
 *             "yearsSinceSubscription": 0,
 *             "basePct": "2.500",
 *             "premiumTierYearsRange": "1-1",
 *             "premiumPct": "0.00",
 *             "annualRatePct": "2.500"
 *           }
 *         ]
 *       }
 *     }
 *   }
 *
 * Conventions:
 *
 * - `subscribed` is a calendar month and resolves to `YYYY-MM-01`.
 *   IGCP's anchored-quarter rule keys off the subscription day, so a
 *   precomputed table cannot represent every possible day-of-month
 *   without exploding in size; consumers needing day-precision should
 *   use the npm library or replicate the math from `monthlyBaseRates`
 *   plus the premium tiers in `metadata`.
 * - `cohortRates` rows enumerate every anchored quarter from
 *   subscription through `min(maturity, last published month)`.
 *   `quarterStartDate` is the start of that quarter (= subscription
 *   day shifted by `quarterIndex × 3` months) and `quarterEndDate` is
 *   the next quarter's start; both follow `shiftMonths`' end-of-month
 *   roll-forward semantics.
 * - All percentage fields are decimal strings (e.g. `"2.500"`) to
 *   preserve precision across the JSON boundary -- exactly the same
 *   convention the npm library uses on its public API.
 */

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { argv, exit } from 'node:process';
import { fileURLToPath } from 'node:url';

import { computeBaseRate } from '../src/core/baseRate.js';
import {
  enumerateMonths,
  formatIsoMonth,
  isoMonthOf,
  parseIsoMonthParts,
  shiftMonths,
} from '../src/core/dateMath.js';
import { formatPercent, toBig } from '../src/core/money.js';
import { listSeries, premiumTierForYear } from '../src/core/series.js';
import { VERSION } from '../src/index.js';
import type { IsoDate, IsoMonth, SeriesCode, SeriesMetadata } from '../src/types/domain.js';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(HERE, '..');
const META_FILE = resolve(REPO_ROOT, 'src/data/_meta.json');
const DEFAULT_OUT_FILE = resolve(REPO_ROOT, 'public/rates.json');

const SCHEMA_VERSION = 1;

/** Mirrors the `euribor` block of `src/data/_meta.json`. */
interface EuriborMeta {
  readonly lastRefreshedAt: string;
  readonly source: string;
  readonly sourceUrl: string;
  readonly seriesId: string;
  readonly upstreamLastUpdate: string | null;
  readonly earliestObservation: string | null;
  readonly latestObservation: string | null;
  readonly observationCount: number;
  readonly license: string;
}

interface MonthlyBaseRateRow {
  readonly month: IsoMonth;
  readonly fixingDate: IsoDate;
  readonly basePct: string;
}

interface CohortRateRow {
  readonly subscribed: IsoMonth;
  readonly subscriptionDate: IsoDate;
  readonly quarterIndex: number;
  readonly quarterStartDate: IsoDate;
  readonly quarterEndDate: IsoDate;
  readonly yearsSinceSubscription: number;
  readonly basePct: string;
  readonly premiumTierYearsRange: string;
  readonly premiumPct: string;
  readonly annualRatePct: string;
}

interface SeriesPayload {
  readonly metadata: SeriesMetadata;
  readonly monthlyBaseRates: readonly MonthlyBaseRateRow[];
  readonly cohortRates: readonly CohortRateRow[];
}

interface RatesArtifact {
  readonly schemaVersion: number;
  readonly generatedAt: string;
  readonly libraryVersion: string;
  readonly euriborSourceMeta: EuriborMeta;
  readonly series: Readonly<Record<SeriesCode, SeriesPayload>>;
}

interface CliArgs {
  readonly out: string;
  readonly quiet: boolean;
}

const HELP_TEXT = `Usage: tsx scripts/build-rates-json.ts [options]

Options:
  --out <path>   Output file. Defaults to public/rates.json.
  --quiet        Suppress informational logs.
  -h, --help     Show this help.
`;

function parseArgs(rawArgs: readonly string[]): CliArgs {
  if (rawArgs.includes('-h') || rawArgs.includes('--help')) {
    process.stdout.write(HELP_TEXT);
    exit(0);
  }

  let out = DEFAULT_OUT_FILE;
  let quiet = false;

  for (let i = 0; i < rawArgs.length; i += 1) {
    const arg = rawArgs[i];
    switch (arg) {
      case '--out': {
        const value = rawArgs[++i];
        if (value === undefined || value.startsWith('--')) {
          throw new Error('--out requires a value');
        }
        out = resolve(value);
        break;
      }
      case '--quiet':
        quiet = true;
        break;
      default:
        throw new Error(`Unknown argument: "${arg}". Run with --help for usage.`);
    }
  }

  return { out, quiet };
}

async function readEuriborMeta(): Promise<EuriborMeta> {
  const raw = await readFile(META_FILE, 'utf8');
  const parsed = JSON.parse(raw) as { euribor: EuriborMeta };
  if (!parsed.euribor) {
    throw new Error(`${META_FILE} is missing the "euribor" block`);
  }
  return parsed.euribor;
}

/**
 * `Date#toISOString()` always emits milliseconds (`...01.234Z`); strip
 * them to match the timestamp shape used in `src/data/_meta.json` so
 * downstream diff tooling stays consistent across artifacts.
 */
function nowIsoSeconds(): string {
  return new Date().toISOString().replace(/\.\d+Z$/, 'Z');
}

interface ComputedMonthlyBaseRate {
  readonly month: IsoMonth;
  readonly row: MonthlyBaseRateRow;
}

/**
 * Walk every month from the series subscription start through the
 * latest month whose fixing date is covered by the bundled Euribor
 * dataset. The fixing-date cap matters: `computeBaseRate` will happily
 * average the *most recent 10 observations <= fixingDate* even when
 * `fixingDate` is months past the last observation, which would bake
 * a stale rate into the artifact. We refuse to publish anything past
 * the data horizon and let the next data refresh extend the table.
 */
function buildMonthlyBaseRates(
  series: SeriesMetadata,
  latestObservation: IsoDate | null,
): ComputedMonthlyBaseRate[] {
  if (latestObservation === null) {
    return [];
  }

  const startMonth = isoMonthOf(series.subscriptionStartDate);
  // Walk one extra year past the latest observation so the loop's
  // own fixing-date check (below) is the binding cutoff, not the
  // candidate-window length. The fixing date for month X falls in
  // (X-1), so we never need more than ~1 month of headroom in
  // practice; we add a year to be obviously safe.
  const latest = parseIsoMonthParts(isoMonthOf(latestObservation));
  const candidateMonths = enumerateMonths(
    startMonth,
    formatIsoMonth(latest.year + 1, latest.month),
  );

  const rows: ComputedMonthlyBaseRate[] = [];
  for (const m of candidateMonths) {
    const { year, month } = parseIsoMonthParts(m);
    let result: ReturnType<typeof computeBaseRate>;
    try {
      result = computeBaseRate(year, month, { series });
    } catch {
      // Fixing date precedes the series start, or the bundled dataset
      // doesn't yet cover the fixing window. Skipping is correct in
      // both cases -- the table grows naturally with the dataset.
      continue;
    }
    if (result.fixingDate > latestObservation) {
      // We have a value, but it was averaged from observations strictly
      // older than `fixingDate`'s neighborhood -- i.e. the dataset has
      // not yet caught up to this month's fixing window. Stop here so
      // we don't ship stale rates; the loop is monotonic in fixingDate
      // so every later month would also be stale.
      break;
    }
    rows.push({
      month: m,
      row: { month: m, fixingDate: result.fixingDate, basePct: result.basePct },
    });
  }
  return rows;
}

/**
 * Enumerate every anchored quarter for `cohort` from subscription
 * through the latest quarter whose start month appears in
 * `monthlyBaseRateByMonth`, capped at `series.maturityYears`.
 */
function buildCohortRows(
  series: SeriesMetadata,
  cohortMonth: IsoMonth,
  monthlyBaseRateByMonth: ReadonlyMap<IsoMonth, MonthlyBaseRateRow>,
): CohortRateRow[] {
  const subscriptionDate: IsoDate = `${cohortMonth}-01`;
  const rows: CohortRateRow[] = [];
  const maxQuarters = series.maturityYears * 4;

  for (let quarterIndex = 0; quarterIndex < maxQuarters; quarterIndex += 1) {
    const quarterStartDate = shiftMonths(subscriptionDate, quarterIndex * 3);
    const quarterStartMonth = isoMonthOf(quarterStartDate);
    const baseRow = monthlyBaseRateByMonth.get(quarterStartMonth);
    if (!baseRow) {
      // Quarter start lies past the data horizon; stop emitting rows
      // for this cohort -- subsequent quarters are equally undefined.
      break;
    }

    const quarterEndDate = shiftMonths(subscriptionDate, (quarterIndex + 1) * 3);
    const yearsSinceSubscription = Math.floor(quarterIndex / 4);
    if (yearsSinceSubscription >= series.maturityYears) {
      break;
    }

    const tier = premiumTierForYear(series, yearsSinceSubscription + 1);
    const annualPct = toBig(baseRow.basePct).plus(toBig(tier.ratePct));

    rows.push({
      subscribed: cohortMonth,
      subscriptionDate,
      quarterIndex,
      quarterStartDate,
      quarterEndDate,
      yearsSinceSubscription,
      basePct: baseRow.basePct,
      premiumTierYearsRange: `${tier.fromYear}-${tier.toYear}`,
      premiumPct: tier.ratePct,
      annualRatePct: formatPercent(annualPct, series.baseRateDecimals),
    });
  }

  return rows;
}

function buildSeriesPayload(
  series: SeriesMetadata,
  latestObservation: IsoDate | null,
  log: Logger,
): SeriesPayload {
  const monthlyBaseRates = buildMonthlyBaseRates(series, latestObservation);
  log(
    `[build-rates-json] series=${series.code} monthlyBaseRates=${monthlyBaseRates.length} ` +
      `(${monthlyBaseRates[0]?.month ?? '∅'} .. ${
        monthlyBaseRates[monthlyBaseRates.length - 1]?.month ?? '∅'
      })`,
  );

  const baseRateByMonth = new Map<IsoMonth, MonthlyBaseRateRow>(
    monthlyBaseRates.map(({ month, row }) => [month, row]),
  );

  const cohortMonths = monthlyBaseRates.map(({ month }) => month);
  const cohortRates: CohortRateRow[] = [];
  for (const cohortMonth of cohortMonths) {
    cohortRates.push(...buildCohortRows(series, cohortMonth, baseRateByMonth));
  }
  log(
    `[build-rates-json] series=${series.code} cohortRates=${cohortRates.length} ` +
      `(${cohortMonths.length} cohorts × up to ${series.maturityYears * 4} quarters)`,
  );

  return {
    metadata: series,
    monthlyBaseRates: monthlyBaseRates.map(({ row }) => row),
    cohortRates,
  };
}

type Logger = (message: string) => void;

export async function buildArtifact(log: Logger): Promise<RatesArtifact> {
  const euriborSourceMeta = await readEuriborMeta();
  // Build via tuples + Object.fromEntries so the `code` property
  // (typed as `SeriesCode`) carries through to the resulting record
  // type without an `as` cast at the end.
  const seriesEntries = listSeries().map(
    (meta) =>
      [meta.code, buildSeriesPayload(meta, euriborSourceMeta.latestObservation, log)] as const,
  );
  const series = Object.fromEntries(seriesEntries) as Record<SeriesCode, SeriesPayload>;
  return {
    schemaVersion: SCHEMA_VERSION,
    generatedAt: nowIsoSeconds(),
    libraryVersion: VERSION,
    euriborSourceMeta,
    series,
  };
}

async function writeArtifact(artifact: RatesArtifact, outPath: string, log: Logger): Promise<void> {
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, `${JSON.stringify(artifact, null, 2)}\n`);
  log(`[build-rates-json] wrote ${outPath}`);
}

async function main(): Promise<void> {
  const args = parseArgs(argv.slice(2));
  const log: Logger = args.quiet ? () => {} : (msg) => process.stderr.write(`${msg}\n`);

  const artifact = await buildArtifact(log);
  await writeArtifact(artifact, args.out, log);
  log('[build-rates-json] done');
}

const isEntryPoint = (() => {
  const entry = argv[1];
  if (!entry) return false;
  return resolve(entry) === fileURLToPath(import.meta.url);
})();

if (isEntryPoint) {
  main().catch((err: unknown) => {
    const message = err instanceof Error ? err.message : String(err);
    process.stderr.write(`build-rates-json failed: ${message}\n`);
    exit(1);
  });
}
