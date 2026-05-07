import euribor3mObservations from '../data/euribor3m.json' with { type: 'json' };
import type { IsoDate, RateEntry, SeriesMetadata } from '../types/domain.js';
import { antepenultimateBusinessDay, previousBusinessDay } from './calendar.js';
import { Big, ROUND_HALF_EVEN, formatPercent, toBig } from './money.js';
import { getSeries } from './series.js';

/**
 * Monthly base-rate computation for IGCP Certificados de Aforro.
 *
 * For a given `(year, month)` (the month for which the base rate applies),
 * IGCP's published methodology — codified for Série F in Portaria n.º 149-A/2023
 * of 2 June 2023 (Diário da República, 1.ª série, n.º 107, suplemento) and for
 * Série E in Portaria n.º 329-A/2017 of 30 October 2017 — is:
 *
 *   1. Determine the **fixing date**: the antepenultimate (third-from-last)
 *      TARGET2 business day of the *previous* calendar month.
 *   2. Take the Euribor 3M fixings for the **10 TARGET2 business days
 *      strictly preceding the fixing date** ("os 10 dias úteis anteriores"),
 *      i.e. `[fixingDate − 10 business days, fixingDate − 1 business day]`
 *      inclusive. The fixing date itself is **not** part of the averaging
 *      window — it only anchors which 10 prior observations are averaged.
 *   3. Compute the arithmetic mean and round it to **3 decimal places** using
 *      banker's rounding (`ROUND_HALF_EVEN`).
 *   4. Add the series' additive spread (`baseRateSpreadPct`): `0pp` for
 *      Série F (the formula is just E3) or `+1pp` for Série E (the formula
 *      is `E3 + 1%`). The "sendo o resultado arredondado à terceira casa
 *      decimal" clause applies to the *mean*, so rounding happens before
 *      the spread, not after.
 *   5. Clamp the result into the series' published window:
 *      `[0%, 2.5%]` for Série F and `[0%, 3.5%]` for Série E.
 *
 * The bundled dataset (`src/data/euribor3m.json`) only contains TARGET2
 * business days for which Bundesbank actually published a fixing —
 * "no value available" rows and TARGET2 holidays are filtered out at fetch
 * time. We therefore implement step 2 as "the 10 most recent observations
 * with `date < fixingDate`", which is equivalent under that invariant and
 * additionally tolerant of the rare day Bundesbank skips a publication.
 */

const DEFAULT_SERIES = 'F' as const;

/**
 * Bundled Euribor 3M observations, sorted ascending by `date`. Built once at
 * module load and reused across calls; the source array is sorted by the
 * fetcher and never re-sorted at runtime.
 *
 * Values are coerced to strings here so the rest of the module can rely on
 * the canonical `RateEntry` shape (decimal-as-string) rather than the raw
 * JSON `number` representation, which would lose precision on edge cases
 * such as `3.250` arriving as `3.25`.
 */
const BUNDLED_OBSERVATIONS: readonly RateEntry[] = (
  euribor3mObservations as readonly { date: string; ratePct: number }[]
).map((row) => ({
  date: row.date,
  ratePct: String(row.ratePct),
}));

export interface BaseRateOptions {
  /**
   * Override the bundled Euribor 3M dataset. Must be sorted ascending by date
   * and contain only business days with published fixings.
   */
  readonly observations?: readonly RateEntry[];
  /**
   * Override the series whose averaging window and clamp are applied.
   * Defaults to Série F.
   */
  readonly series?: SeriesMetadata;
  /**
   * When `true` (default), require a Euribor fixing on the TARGET2 business day
   * immediately before the IGCP fixing date so the 10-day average matches the
   * published methodology. Set to `false` only for isolated tests with synthetic
   * observation gaps.
   */
  readonly strictWindowEnd?: boolean;
}

/** Rich result of a base-rate computation, useful for audit and diagnostics. */
export interface BaseRateResult {
  readonly year: number;
  readonly month: number;
  /** Antepenultimate TARGET2 business day of `(year, month - 1)`. */
  readonly fixingDate: IsoDate;
  /**
   * The 10 Euribor 3M observations that contributed to the average — the
   * business days strictly preceding {@link fixingDate}.
   */
  readonly observations: readonly RateEntry[];
  /** Arithmetic mean of {@link observations}, before rounding or clamping. */
  readonly rawAveragePct: string;
  /** Mean rounded to 3 decimals (`ROUND_HALF_EVEN`), pre-spread, pre-clamp. */
  readonly roundedAveragePct: string;
  /**
   * {@link roundedAveragePct} after adding the series' additive spread
   * ({@link SeriesMetadata.baseRateSpreadPct}), pre-clamp. For Série F the
   * spread is `"0"` so this equals {@link roundedAveragePct} byte-for-byte;
   * for Série E the published formula is `E3 + 1%` so this is the rounded
   * Euribor mean plus `1`.
   */
  readonly roundedPlusSpreadPct: string;
  /**
   * Final published base rate after clamping
   * {@link roundedPlusSpreadPct} into the series'
   * `[baseRateClampMinPct, baseRateClampMaxPct]` window.
   */
  readonly basePct: string;
  /** Whether the clamp altered {@link roundedPlusSpreadPct}. */
  readonly clamped: boolean;
}

/**
 * January (`month === 1`) wraps to December of the previous year; every other
 * month decrements normally.
 */
function previousMonth(year: number, month: number): { year: number; month: number } {
  if (month === 1) {
    return { year: year - 1, month: 12 };
  }
  return { year, month: month - 1 };
}

/**
 * Returns the index in `observations` of the last entry with `date <= cutoff`,
 * or `-1` when no such entry exists. `observations` must be sorted ascending
 * by `date`. Implemented as a binary search because the dataset grows daily
 * and `baseRate()` is called once per quarter per cohort by `simulate()`.
 */
function findLastIndexAtOrBefore(observations: readonly RateEntry[], cutoff: IsoDate): number {
  let lo = 0;
  let hi = observations.length - 1;
  let result = -1;
  while (lo <= hi) {
    const mid = (lo + hi) >>> 1;
    const entry = observations[mid];
    if (entry !== undefined && entry.date <= cutoff) {
      result = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return result;
}

/**
 * Computes the monthly base rate for the given series (defaults to Série F)
 * and returns the full audit trail (fixing date, contributing observations,
 * raw mean, rounded mean, mean+spread, final clamped value). Use this when
 * building `rates.json` or surfacing diagnostics; for a plain `Big`
 * percentage, prefer {@link baseRate}.
 *
 * @throws {Error} when `(year, month)` is invalid, when the bundled dataset
 *   does not yet cover the fixing window, or when the requested month
 *   precedes the series' subscription start.
 */
export function computeBaseRate(
  year: number,
  month: number,
  options: BaseRateOptions = {},
): BaseRateResult {
  if (!Number.isInteger(year)) {
    throw new Error(`Invalid year: ${year}`);
  }
  if (!Number.isInteger(month) || month < 1 || month > 12) {
    throw new Error(`Invalid month: ${month}; expected an integer in 1..12`);
  }

  const series = options.series ?? getSeries(DEFAULT_SERIES);
  const observations = options.observations ?? BUNDLED_OBSERVATIONS;
  const windowSize = series.euribor3mAveragingDays;

  const { year: fixingYear, month: fixingMonth } = previousMonth(year, month);
  const fixingDate = antepenultimateBusinessDay(fixingYear, fixingMonth);

  if (fixingDate < series.subscriptionStartDate) {
    const targetMonth = `${year}-${String(month).padStart(2, '0')}`;
    throw new Error(
      `No base rate available for ${targetMonth}: fixing date ${fixingDate} precedes ` +
        `${series.name} subscription start ${series.subscriptionStartDate}`,
    );
  }

  // Per Portaria 149-A/2023 the window is the 10 TARGET2 business days strictly
  // preceding the fixing date — i.e. ending on the business day immediately
  // before `fixingDate`. Anchoring on "last row ≤ fixingDate" alone is unsafe
  // when the dataset omits late-month fixings: the mean would otherwise use the
  // wrong 10 days (see May 2026: missing 23–27 Apr shifted the average by 0.005pp).
  const windowEndDate = previousBusinessDay(fixingDate);
  const lastWindowIndex = findLastIndexAtOrBefore(observations, windowEndDate);
  const lastSeen = lastWindowIndex >= 0 ? observations[lastWindowIndex]?.date : undefined;
  const strictWindowEnd = options.strictWindowEnd ?? true;

  if (strictWindowEnd && lastSeen !== windowEndDate) {
    const targetMonth = `${year}-${String(month).padStart(2, '0')}`;
    throw new Error(
      `Insufficient Euribor 3M data to compute base rate for ${targetMonth}: ` +
        `need a fixing on ${windowEndDate} (last TARGET2 day before fixing ${fixingDate}) ` +
        `but the latest observation on or before that date is ${lastSeen ?? 'none'}`,
    );
  }
  if (lastWindowIndex < windowSize - 1) {
    const targetMonth = `${year}-${String(month).padStart(2, '0')}`;
    throw new Error(
      `Insufficient Euribor 3M data to compute base rate for ${targetMonth}: ` +
        `fixing date ${fixingDate} requires ${windowSize} observations on or before ${windowEndDate} ` +
        `but only ${lastWindowIndex + 1} are available in the bundled dataset`,
    );
  }

  const window = observations.slice(lastWindowIndex - windowSize + 1, lastWindowIndex + 1);

  let sum = new Big(0);
  for (const entry of window) {
    sum = sum.plus(toBig(entry.ratePct));
  }
  const rawAverage = sum.div(windowSize);
  const rounded = rawAverage.round(series.baseRateDecimals, ROUND_HALF_EVEN);
  // Per the Série E ficha técnica ("E3+1%, sendo o resultado arredondado à
  // terceira casa decimal"), the +1pp spread is added *after* the mean is
  // rounded and *before* the [0%, 3.5%] clamp is applied. Série F sets
  // `baseRateSpreadPct: '0'`, making this a no-op for the existing formula.
  const withSpread = rounded.plus(toBig(series.baseRateSpreadPct));

  const min = toBig(series.baseRateClampMinPct);
  const max = toBig(series.baseRateClampMaxPct);
  let clamped = false;
  let final = withSpread;
  if (final.lt(min)) {
    final = min;
    clamped = true;
  } else if (final.gt(max)) {
    final = max;
    clamped = true;
  }

  return {
    year,
    month,
    fixingDate,
    observations: window,
    rawAveragePct: rawAverage.toString(),
    roundedAveragePct: formatPercent(rounded, series.baseRateDecimals),
    roundedPlusSpreadPct: formatPercent(withSpread, series.baseRateDecimals),
    basePct: formatPercent(final, series.baseRateDecimals),
    clamped,
  };
}

/**
 * Returns the IGCP-published Série F base rate for `(year, month)` as a
 * `Big` percentage value (e.g. `Big(2.5)` for 2.5%). The result is already
 * rounded to {@link SeriesMetadata.baseRateDecimals} and clamped into the
 * series' `[min, max]` window, so it composes directly with the permanence
 * premium in `rates.ts`.
 *
 * For the audit trail (fixing date, contributing observations, pre-clamp
 * average) call {@link computeBaseRate} instead.
 */
export function baseRate(year: number, month: number, options: BaseRateOptions = {}): Big {
  return toBig(computeBaseRate(year, month, options).basePct);
}
