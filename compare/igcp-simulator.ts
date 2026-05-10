#!/usr/bin/env tsx
/**
 * `pnpm compare:igcp` — comparison harness that pits our local
 * `simulate()` against the IGCP web simulator's value endpoint and reports
 * any drift. By default it sweeps Série D, Série E, and Série F; the
 * `--series` flag narrows to a single series.
 *
 * The IGCP "Simulador Certificados de Aforro" page (Drupal Webform) loads a
 * `Drupal.behaviors.simulatorFetchResults` jQuery handler that intercepts the
 * Calcular submit and instead issues a GET to `/api/simulator-value/query`
 * (a Drupal Views REST endpoint). The endpoint returns one row of
 * `{ field_value, field_acquisition_value }` — exactly the **net current
 * value** of the cohort and the principal — for the requested
 * `(field_serie, field_field_acquisition_date, field_field_date, quantity)`
 * tuple. That API has two important quirks worth pinning here:
 *
 *   1. Both the acquisition date and the as-of "field_field_date" are
 *      normalized client-side to `01/MM/YYYY` (the JS strips the day) before
 *      being sent. The endpoint is therefore strictly **monthly**: passing a
 *      mid-month day yields `{"message":"No entities found"}`.
 *   2. The endpoint only stores entities for the current and immediately
 *      previous calendar month. Any other `field_field_date` returns 404.
 *      The IGCP page replicates that with a small "if the cohort's
 *      day-of-month hasn't elapsed yet this month, ask for last month"
 *      heuristic; we mirror it in {@link igcpAsOfMonth}.
 *
 * ## Why we compare **per-unit**, not totals
 *
 * Every scenario asks the IGCP endpoint for the same canonical quantity
 * ({@link COMPARE_UNITS}) and divides both sides by that quantity before
 * diffing. The IGCP endpoint returns the cohort's net current value
 * already rounded to the cent at the requested quantity, so comparing
 * totals at large quantities folds that single cent-rounding step into
 * the diff and amplifies it into a multi-EUR artifact that has nothing
 * to do with the underlying interest formula. Dividing both sides by
 * {@link COMPARE_UNITS} spreads that one-cent quantization across the
 * full quantity, yielding a clean per-unit comparison whose only
 * residual is `≤ 0.005 / COMPARE_UNITS` EUR/unit (5 µEUR at the default
 * 1000 units). Any drift above that floor is genuine formula divergence
 * worth catching.
 *
 * Output is a left-aligned table with one row per scenario (`--verbose`
 * shows PASS rows too; the default elides them) and a summary footer with
 * counts and the max absolute per-unit diff. Exit code is non-zero when
 * any scenario FAILed or ERRORed so the script is wired-up safely in CI.
 */

import { writeFile } from 'node:fs/promises';
import process from 'node:process';

import { cac } from 'cac';

import { simulate } from '../src/core/calculator.js';
import { todayIsoUtc } from '../src/core/dateMath.js';
import { getSeries } from '../src/core/series.js';
import type { SeriesCode } from '../src/types/domain.js';

const IGCP_API_URL = 'https://www.igcp.pt/pt/api/simulator-value/query';

/** Default per-request pause; the IGCP endpoint is unmetered but we play nice. */
const DEFAULT_DELAY_MS = 250;

/**
 * Default ±EUR/unit window inside which a row is still considered a PASS.
 *
 * IGCP returns values rounded to the cent at our chosen quantity, so the
 * worst-case quantization residual after dividing by {@link COMPARE_UNITS}
 * is `0.005 / COMPARE_UNITS = 5e-6` EUR/unit. Now that `simulate()`
 * follows IGCP's per-unit quote model, rounded to 5 decimals after each
 * quarterly capitalization, this is the tightest tolerance the comparison
 * can meaningfully enforce — anything larger would be genuine formula drift.
 */
const DEFAULT_TOLERANCE_EUR_PER_UNIT = 5e-6;

/**
 * Canonical quantity used for every IGCP request.
 *
 * 1000 units gives us the cleanest per-unit precision out of the IGCP
 * endpoint (cent-rounded total ÷ 1000 = 5 decimals per unit) without
 * landing in a regime where IGCP's apparent end-of-calculation rounding
 * snaps to suspiciously round numbers. It also keeps every request
 * inside the public min/max account window.
 */
const COMPARE_UNITS = 1000;

interface Scenario {
  readonly id: string;
  readonly series: SeriesCode;
  readonly subscriptionMonth: string;
}

/**
 * Per-series window of subscription months that the harness sweeps.
 *
 * - Série D starts at `2017-10` — the bundled Euribor dataset begins in
 *   September 2017, so this is the first clean subscription month currently
 *   comparable with the local simulator.
 * - Série F starts at `2023-09` — one month after the inaugural Série F
 *   subscription month (June 2023's base rate is currently un-derivable
 *   from our bundled Euribor window, see the `baseRate followups`
 *   subplan).
 * - Série E starts at `2018-01` — one month after the inaugural Série E
 *   subscription month (November 2017), giving a clean ≥1-year history of
 *   Euribor 3M fixings before the first fixing-window we exercise.
 *
 * The end date is two months before `today`, capped by any series-specific
 * subscription close date, so every cohort has at least one completed
 * quarterly capitalization to compare against and only valid subscription
 * months are sent to IGCP.
 */
/**
 * Subscription-month sweep lower bounds for series the IGCP
 * `/api/simulator-value/query` endpoint actually materializes.
 *
 * **Série C** is intentionally omitted: the public simulator (and aforro.net)
 * only cover Séries D/E/F in the comparison matrix, mirroring how Série A is
 * out of scope in IGCP's own client-side code paths.
 */
const SERIES_WINDOW_START: Readonly<Partial<Record<SeriesCode, { year: number; month: number }>>> =
  {
    D: { year: 2017, month: 10 },
    E: { year: 2018, month: 1 },
    F: { year: 2023, month: 9 },
  };

export type CompareSeries = SeriesCode | 'all';

/**
 * Builds the scenario matrix exercised by the harness.
 *
 * Each cohort is exercised once at the canonical {@link COMPARE_UNITS}
 * quantity. We deliberately do *not* sweep across multiple unit amounts:
 * IGCP's per-unit value is invariant to quantity (modulo their final
 * rounding-to-cents), and exercising several unit amounts per cohort just
 * re-tests that invariant rather than the underlying interest formula.
 * The per-month sweep is what gives us coverage across every fixing-window
 * for the requested series.
 *
 * When `series === 'all'`, the matrix is the concatenation of the per-series
 * sweeps in `D, E, F` order — `--filter` and `--limit` operate on the merged
 * list.
 */
export function buildScenarios(
  series: CompareSeries = 'all',
  today: string = todayIsoUtc(),
): readonly Scenario[] {
  const [yearStr, monthStr] = today.split('-');
  const todayYear = Number(yearStr);
  const todayMonth = Number(monthStr);
  const latestComparableMonth = monthIndex(todayYear, todayMonth) - 2;

  const codes: readonly SeriesCode[] = series === 'all' ? ['D', 'E', 'F'] : [series];

  const scenarios: Scenario[] = [];
  for (const code of codes) {
    const metadata = getSeries(code);
    const start = SERIES_WINDOW_START[code];
    if (!start) {
      continue;
    }
    const end = metadata.subscriptionEndDate
      ? Math.min(latestComparableMonth, monthIndexFromDate(metadata.subscriptionEndDate))
      : latestComparableMonth;
    let year = start.year;
    let month = start.month;
    while (monthIndex(year, month) <= end) {
      const subscriptionMonth = `${year}-${pad2(month)}`;
      scenarios.push({
        id: `${code}:${subscriptionMonth}`,
        series: code,
        subscriptionMonth,
      });
      month += 1;
      if (month > 12) {
        month = 1;
        year += 1;
      }
    }
  }

  return scenarios;
}

function monthIndex(year: number, month: number): number {
  return year * 12 + month;
}

function monthIndexFromDate(date: string): number {
  const [year, month] = date.split('-');
  return monthIndex(Number(year), Number(month));
}

/**
 * Reproduces the `getCurrentDate` heuristic baked into the IGCP page's
 * `simulatorFetchResults` jQuery behavior: when the cohort's day-of-month
 * has not yet elapsed this calendar month, IGCP asks for the previous
 * month's snapshot instead. Series A is exempt in their JS, but the
 * series we compare against (D, E, and F) all flow through this same branch.
 *
 * Our scenarios all use `01` as the day-of-month, so the "ask for previous
 * month" branch is never taken — we keep the helper anyway so the request
 * shape stays identical to the browser's, which insulates the comparison
 * from any future server-side coupling between the two date fields.
 */
function igcpAsOfMonth(subscriptionMonth: string, today: string): string {
  const subscriptionDay = 1;
  const [todayYear, todayMonthStr, todayDayStr] = today.split('-');
  const todayDay = Number(todayDayStr);

  if (subscriptionDay > todayDay) {
    let year = Number(todayYear);
    let month = Number(todayMonthStr) - 1;
    if (month === 0) {
      month = 12;
      year -= 1;
    }
    return `${year}-${pad2(month)}`;
  }

  return `${todayYear}-${todayMonthStr}`;
}

/** `01/MM/YYYY` formatter — the only date shape the IGCP endpoint accepts. */
function toIgcpDate(month: string): string {
  const [year, monthPart] = month.split('-');
  return `01/${monthPart}/${year}`;
}

function pad2(n: number): string {
  return n < 10 ? `0${n}` : String(n);
}

interface IgcpResponse {
  readonly fieldValue: number;
  readonly fieldAcquisitionValue: number;
}

/**
 * Hits the IGCP `/api/simulator-value/query` endpoint for a single scenario
 * and unwraps the single-element array it returns.
 *
 * Throws on:
 *   - any non-2xx HTTP response (signals an upstream outage worth
 *     surfacing rather than silently masking as a comparison failure),
 *   - the `{"message":"No entities found"}` payload that IGCP returns when
 *     the query tuple does not match a stored entity (typically a
 *     too-recent subscription month or a stale/future as-of month — both
 *     should never happen for scenarios this harness generates, so we treat
 *     them as bugs in the harness rather than data drift).
 */
async function fetchIgcp(
  scenario: Scenario,
  today: string,
  fetchImpl: typeof fetch,
): Promise<IgcpResponse> {
  const params = new URLSearchParams({
    field_serie: scenario.series,
    field_field_date: toIgcpDate(igcpAsOfMonth(scenario.subscriptionMonth, today)),
    field_field_acquisition_date: toIgcpDate(scenario.subscriptionMonth),
    quantity: String(COMPARE_UNITS),
  });
  const url = `${IGCP_API_URL}?${params.toString()}`;

  const response = await fetchImpl(url, {
    headers: {
      Accept: 'application/json, text/javascript, */*; q=0.01',
      'X-Requested-With': 'XMLHttpRequest',
      Referer: 'https://www.igcp.pt/pt/aforristas/simuladores/simulador-certificados-de-aforro',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText} for ${url}`);
  }

  const payload = (await response.json()) as
    | readonly { field_value: number; field_acquisition_value: number }[]
    | { message: string };

  if (!Array.isArray(payload)) {
    throw new Error(`IGCP returned non-array payload: ${JSON.stringify(payload)}`);
  }
  const row = payload[0];
  if (!row) {
    throw new Error(`IGCP returned empty array for ${url}`);
  }

  return {
    fieldValue: row.field_value,
    fieldAcquisitionValue: row.field_acquisition_value,
  };
}

type ScenarioStatus = 'pass' | 'fail' | 'error';

interface ScenarioResult {
  readonly scenario: Scenario;
  readonly status: ScenarioStatus;
  /** IGCP's per-unit net current value (`field_value / COMPARE_UNITS`). */
  readonly igcpPerUnit: number | null;
  /** Our per-unit `simulate().currentValueNet` (parsed back to a JS number). */
  readonly oursPerUnit: number | null;
  /** Signed per-unit diff `ours - igcp`, in EUR/unit; `null` if either side errored. */
  readonly diffPerUnit: number | null;
  /** `null` when `igcpPerUnit` is `0` (avoid division-by-zero on edge cases). */
  readonly diffPct: number | null;
  readonly error?: string;
}

/**
 * Runs a single scenario end-to-end: fetches IGCP, runs `simulate()`,
 * computes the per-unit diff. Captures any thrown error as a row-level
 * "error" status so a transient HTTP blip doesn't abort the whole sweep.
 */
async function runScenario(
  scenario: Scenario,
  today: string,
  fetchImpl: typeof fetch,
): Promise<ScenarioResult> {
  try {
    const igcp = await fetchIgcp(scenario, today, fetchImpl);
    const ours = simulate({
      series: scenario.series,
      subscriptionDate: `${scenario.subscriptionMonth}-01`,
      units: COMPARE_UNITS,
      asOfDate: today,
    });
    const igcpPerUnit = igcp.fieldValue / COMPARE_UNITS;
    const oursPerUnit = Number(ours.currentValueNet) / COMPARE_UNITS;
    const diffPerUnit = oursPerUnit - igcpPerUnit;
    const diffPct = igcpPerUnit === 0 ? null : (diffPerUnit / igcpPerUnit) * 100;
    return {
      scenario,
      status: 'pass',
      igcpPerUnit,
      oursPerUnit,
      diffPerUnit,
      diffPct,
    };
  } catch (error) {
    return {
      scenario,
      status: 'error',
      igcpPerUnit: null,
      oursPerUnit: null,
      diffPerUnit: null,
      diffPct: null,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

function classify(result: ScenarioResult, tolerancePerUnit: number): ScenarioResult {
  if (result.status === 'error' || result.diffPerUnit === null) {
    return result;
  }
  return {
    ...result,
    status: Math.abs(result.diffPerUnit) <= tolerancePerUnit ? 'pass' : 'fail',
  };
}

interface CompareOptions {
  readonly series: CompareSeries;
  readonly tolerance: number;
  readonly verbose: boolean;
  readonly limit?: number;
  readonly filter?: RegExp;
  readonly delayMs: number;
  readonly today: string;
  readonly fetchImpl: typeof fetch;
  readonly out?: string;
  readonly json: boolean;
  readonly write: (chunk: string) => void;
  readonly writeErr: (chunk: string) => void;
}

/**
 * Top-level orchestrator: filters the scenario matrix, runs each scenario
 * sequentially with the configured delay, classifies the diff, and renders
 * the summary table. Returns a process-style exit code (0 = all green,
 * 1 = drift or transport error) so callers can wire this straight into CI.
 */
export async function runCompareSuite(options: CompareOptions): Promise<number> {
  const allScenarios = buildScenarios(options.series, options.today);
  const filtered = allScenarios
    .filter((scenario) => !options.filter || options.filter.test(scenario.id))
    .slice(0, options.limit ?? allScenarios.length);

  if (filtered.length === 0) {
    if (options.series === 'C' || options.series === 'B') {
      options.writeErr(
        'Série B and Série C are skipped: the IGCP simulator API does not expose them ' +
          'in the same query surface as D/E/F. Use the IGCP-published golden tests in ' +
          '`tests/fixtures/igcpPublishedBaseRates.json` and `tests/baseRate.test.ts` instead.\n',
      );
      return 0;
    }
    options.writeErr('No scenarios matched the supplied filters.\n');
    return 1;
  }

  options.write(
    `Running ${filtered.length} scenario(s) against ${IGCP_API_URL}\n` +
      `  today=${options.today}  series=${options.series}  units=${COMPARE_UNITS}  tolerance=±${formatPerUnit(options.tolerance)}\n\n`,
  );

  const results: ScenarioResult[] = [];
  for (let i = 0; i < filtered.length; i += 1) {
    const scenario = filtered[i];
    if (!scenario) continue;
    const raw = await runScenario(scenario, options.today, options.fetchImpl);
    const classified = classify(raw, options.tolerance);
    results.push(classified);
    if (options.delayMs > 0 && i < filtered.length - 1) {
      await sleep(options.delayMs);
    }
  }

  if (options.json) {
    const payload = JSON.stringify(buildJsonReport(results, options), null, 2);
    options.write(`${payload}\n`);
    if (options.out) {
      await writeFile(options.out, `${payload}\n`, 'utf8');
    }
  } else {
    renderTable(results, options);
    if (options.out) {
      const payload = JSON.stringify(buildJsonReport(results, options), null, 2);
      await writeFile(options.out, `${payload}\n`, 'utf8');
      options.write(`\nWrote JSON report to ${options.out}\n`);
    }
  }

  const failures = results.filter((r) => r.status !== 'pass').length;
  return failures === 0 ? 0 : 1;
}

interface JsonReport {
  readonly today: string;
  readonly series: CompareSeries;
  readonly units: number;
  readonly tolerancePerUnit: number;
  readonly counts: { readonly pass: number; readonly fail: number; readonly error: number };
  readonly maxAbsDiffPerUnit: number;
  readonly results: readonly ScenarioResult[];
}

function buildJsonReport(results: readonly ScenarioResult[], options: CompareOptions): JsonReport {
  const counts = {
    pass: results.filter((r) => r.status === 'pass').length,
    fail: results.filter((r) => r.status === 'fail').length,
    error: results.filter((r) => r.status === 'error').length,
  };
  const maxAbsDiffPerUnit = results.reduce(
    (max, r) => (r.diffPerUnit === null ? max : Math.max(max, Math.abs(r.diffPerUnit))),
    0,
  );
  return {
    today: options.today,
    series: options.series,
    units: COMPARE_UNITS,
    tolerancePerUnit: options.tolerance,
    counts,
    maxAbsDiffPerUnit,
    results,
  };
}

function renderTable(results: readonly ScenarioResult[], options: CompareOptions): void {
  const headers = [
    'status',
    'series',
    'subscribed',
    'igcp_eur_per_unit',
    'ours_eur_per_unit',
    'diff_eur_per_unit',
    'diff_pct',
  ];
  const visible = results.filter((r) => options.verbose || r.status !== 'pass');

  if (visible.length === 0) {
    options.write('All scenarios PASS.\n');
  } else {
    const rows = visible.map((r) => [
      r.status.toUpperCase(),
      r.scenario.series,
      r.scenario.subscriptionMonth,
      r.igcpPerUnit === null ? '-' : formatPerUnit(r.igcpPerUnit),
      r.oursPerUnit === null ? '-' : formatPerUnit(r.oursPerUnit),
      r.diffPerUnit === null ? '-' : formatSignedPerUnit(r.diffPerUnit),
      r.diffPct === null ? '-' : `${r.diffPct >= 0 ? '+' : ''}${r.diffPct.toFixed(4)}%`,
    ]);
    writeTable(headers, rows, options.write);

    const errored = visible.filter((r) => r.status === 'error');
    if (errored.length > 0) {
      options.write('\nErrors:\n');
      for (const row of errored) {
        options.write(`  ${row.scenario.id}: ${row.error ?? 'unknown error'}\n`);
      }
    }
  }

  const counts = {
    pass: results.filter((r) => r.status === 'pass').length,
    fail: results.filter((r) => r.status === 'fail').length,
    error: results.filter((r) => r.status === 'error').length,
  };
  const maxAbsDiff = results.reduce(
    (max, r) => (r.diffPerUnit === null ? max : Math.max(max, Math.abs(r.diffPerUnit))),
    0,
  );
  options.write(
    `\n${results.length} scenarios: ${counts.pass} PASS · ${counts.fail} FAIL · ${counts.error} ERROR · max |diff| = ${formatPerUnit(maxAbsDiff)}\n`,
  );
}

function writeTable(
  headers: readonly string[],
  rows: readonly (readonly string[])[],
  write: (chunk: string) => void,
): void {
  const widths = headers.map((header, columnIndex) =>
    rows.reduce((max, row) => Math.max(max, (row[columnIndex] ?? '').length), header.length),
  );
  const renderRow = (cells: readonly string[]): string =>
    cells.map((cell, i) => padRight(cell, widths[i] ?? 0)).join('  ');

  write(`${renderRow(headers)}\n`);
  write(`${widths.map((w) => '-'.repeat(w)).join('  ')}\n`);
  for (const row of rows) {
    write(`${renderRow(row)}\n`);
  }
}

function padRight(value: string, width: number): string {
  return value.length >= width ? value : value + ' '.repeat(width - value.length);
}

/** Per-unit values are shown to 6 decimals: 5 from IGCP precision + 1 of headroom. */
function formatPerUnit(value: number): string {
  return `${value.toFixed(6)} €/u`;
}

function formatSignedPerUnit(value: number): string {
  const sign = value >= 0 ? '+' : '';
  return `${sign}${value.toFixed(6)} €/u`;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function parseToleranceFlag(raw: unknown): number {
  if (raw === undefined) return DEFAULT_TOLERANCE_EUR_PER_UNIT;
  const value = Number(raw);
  if (!Number.isFinite(value) || value < 0) {
    throw new Error(`--tolerance must be a non-negative number (got ${String(raw)})`);
  }
  return value;
}

function parseLimitFlag(raw: unknown): number | undefined {
  if (raw === undefined) return undefined;
  const value = Number(raw);
  if (!Number.isInteger(value) || value < 1) {
    throw new Error(`--limit must be a positive integer (got ${String(raw)})`);
  }
  return value;
}

function parseDelayFlag(raw: unknown): number {
  if (raw === undefined) return DEFAULT_DELAY_MS;
  const value = Number(raw);
  if (!Number.isInteger(value) || value < 0) {
    throw new Error(`--delay must be a non-negative integer (got ${String(raw)})`);
  }
  return value;
}

function parseSeriesFlag(raw: unknown): CompareSeries {
  if (raw === undefined) return 'all';
  const value = String(raw).toUpperCase();
  if (value === 'B' || value === 'C' || value === 'D' || value === 'E' || value === 'F')
    return value;
  if (value === 'ALL' || value === 'BOTH') return 'all';
  throw new Error(`--series must be one of B, C, D, E, F, all (got ${String(raw)})`);
}

function parseFilterFlag(raw: unknown): RegExp | undefined {
  if (raw === undefined) return undefined;
  try {
    return new RegExp(String(raw));
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    throw new Error(`--filter is not a valid regex: ${reason}`);
  }
}

interface CliFlags {
  readonly series?: string;
  readonly tolerance?: string | number;
  readonly verbose?: boolean;
  readonly limit?: string | number;
  readonly filter?: string;
  readonly delay?: string | number;
  readonly out?: string;
  readonly json?: boolean;
}

async function main(): Promise<void> {
  const cli = cac('compare:igcp');
  cli
    .command('[...args]', 'Compare local simulate() output against the IGCP web simulator')
    .option(
      '--series <code>',
      'Series to compare: D, E, F, or all (B and C are accepted but skipped — no IGCP API coverage)',
      { default: 'all' },
    )
    .option('--tolerance <eur-per-unit>', 'Max absolute per-unit EUR diff to count as PASS', {
      default: DEFAULT_TOLERANCE_EUR_PER_UNIT,
    })
    .option('--verbose', 'Print PASS rows in addition to FAIL/ERROR rows')
    .option('--limit <n>', 'Run at most N scenarios (after --filter)')
    .option('--filter <regex>', 'Keep only scenarios whose id matches the regex')
    .option('--delay <ms>', 'Delay between IGCP requests in milliseconds', {
      default: DEFAULT_DELAY_MS,
    })
    .option('--out <file>', 'Also write the JSON report to <file>')
    .option('--json', 'Emit the JSON report to stdout instead of the table')
    .example('pnpm compare:igcp')
    .example('pnpm compare:igcp -- --series D --verbose')
    .example('pnpm compare:igcp -- --series E --verbose')
    .example('pnpm compare:igcp -- --tolerance 0.0005 --verbose')
    .example('pnpm compare:igcp -- --filter ^F:2024- --limit 5')
    .action(async (_args: string[], flags: CliFlags) => {
      const exitCode = await runCompareSuite({
        series: parseSeriesFlag(flags.series),
        tolerance: parseToleranceFlag(flags.tolerance),
        verbose: flags.verbose === true,
        limit: parseLimitFlag(flags.limit),
        filter: parseFilterFlag(flags.filter),
        delayMs: parseDelayFlag(flags.delay),
        today: todayIsoUtc(),
        fetchImpl: fetch,
        out: flags.out,
        json: flags.json === true,
        write: (chunk) => process.stdout.write(chunk),
        writeErr: (chunk) => process.stderr.write(chunk),
      });
      process.exitCode = exitCode;
    });

  cli.help();

  const argv = process.argv.slice();
  if (argv[2] === '--') {
    argv.splice(2, 1);
  }
  cli.parse(argv);
}

const isMainModule =
  typeof process !== 'undefined' &&
  Array.isArray(process.argv) &&
  process.argv[1] !== undefined &&
  import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
  await main().catch((error: unknown) => {
    process.stderr.write(`error: ${error instanceof Error ? error.message : String(error)}\n`);
    process.exit(1);
  });
}
