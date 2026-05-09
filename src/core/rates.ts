import type {
  CohortRateInput,
  CohortRateResult,
  CurrentRateInput,
  IsoDate,
  MonthlyBaseRate,
  PremiumTierAnnualRate,
  RateTableInput,
  SeriesCode,
  SeriesMetadata,
} from '../types/domain.js';
import {
  cohortRateInputSchema,
  currentRateInputSchema,
  rateTableInputSchema,
} from '../types/schemas.js';
import { type BaseRateOptions, computeBaseRate } from './baseRate.js';
import {
  enumerateMonths,
  floorYearsBetween,
  formatIsoMonth,
  parseIsoDateParts,
  parseIsoMonthParts,
  shiftMonths,
  todayIsoUtc,
} from './dateMath.js';
import { formatPercent, toBig } from './money.js';
import { getSeries, premiumTierForYear } from './series.js';

/**
 * Annual-rate composition for Série F (and any future series following the
 * same pattern):
 *
 *   annualRate(asOfDate) = baseRate(quarterStartMonth)
 *                        + premium(yearsSinceSubscription + 1)
 *
 * - `baseRate` is the IGCP-published Série F rate for the quarter-start month
 *   (resolved by {@link computeBaseRate}, which already clamps and rounds).
 * - `premium` is the permanence-tier add-on, indexed 1-based by the contract
 *   year (year 1 = subscription → 1st anniversary, year 2 = 1st → 2nd, etc.).
 *
 * Quarter cycles are anchored to the subscription date — quarter `n` starts at
 * `subscriptionDate + 3·n months` and ends at `subscriptionDate + 3·(n+1)
 * months`. Day-of-month is preserved when it exists in the target month, and
 * otherwise rolls forward to the first day of the following month per IGCP's
 * rule for missing calendar days.
 */

const DEFAULT_SERIES: SeriesCode = 'F';

/**
 * Index of the quarter that contains `asOfDate`, where quarter 0 starts on
 * `subscriptionDate`. Quarters are 3-month intervals anchored to the
 * subscription's day-of-month; an `asOfDate` strictly before `subscriptionDate`
 * resolves to quarter 0.
 */
function quartersElapsed(subscriptionDate: IsoDate, asOfDate: IsoDate): number {
  if (asOfDate <= subscriptionDate) {
    return 0;
  }
  const sub = parseIsoDateParts(subscriptionDate);
  const at = parseIsoDateParts(asOfDate);
  let monthsDiff = (at.year - sub.year) * 12 + (at.month - sub.month);
  if (at.day < sub.day) {
    monthsDiff -= 1;
  }
  return Math.max(0, Math.floor(monthsDiff / 3));
}

function toMonthlyBaseRate(
  series: SeriesMetadata,
  year: number,
  month: number,
  options?: BaseRateOptions,
): MonthlyBaseRate {
  const result = computeBaseRate(year, month, { ...options, series });
  return {
    series: series.code,
    month: formatIsoMonth(year, month),
    fixingDate: result.fixingDate,
    basePct: result.basePct,
  };
}

/** Optional overrides shared by every public function in this module. */
export interface RatesOptions extends BaseRateOptions {}

/**
 * Returns the IGCP-published Série F base rate for the calendar month of
 * `asOfDate` (defaults to today, UTC). The result carries the fixing date
 * used to derive it so the caller can audit the value end-to-end.
 *
 * @throws when the bundled Euribor 3M dataset does not yet cover the fixing
 *   window for the requested month, or when the requested month precedes
 *   the series' subscription start.
 */
export function getCurrentRate(
  input: CurrentRateInput = {},
  options: RatesOptions = {},
): MonthlyBaseRate {
  const parsed = currentRateInputSchema.parse(input);
  const series = getSeries(parsed.series ?? DEFAULT_SERIES);
  const asOf = parsed.asOfDate ?? todayIsoUtc();
  const { year, month } = parseIsoDateParts(asOf);
  return toMonthlyBaseRate(series, year, month, options);
}

/**
 * For a published monthly {@link MonthlyBaseRate.basePct}, returns the gross
 * annual rate in each permanence band (`base + premium`) for the series.
 */
export function annualRatesByPremiumTier(
  series: SeriesMetadata,
  basePct: string,
): readonly PremiumTierAnnualRate[] {
  return series.premiumTiers.map((tier) => ({
    fromContractYear: tier.fromYear,
    toContractYear: tier.toYear,
    premiumPct: tier.ratePct,
    annualRatePct: formatPercent(toBig(basePct).plus(toBig(tier.ratePct)), series.baseRateDecimals),
  }));
}

/**
 * Resolves the annual rate that applies to a cohort (defined by
 * `subscriptionDate`) for the quarter that contains `asOfDate` (defaults to
 * today, UTC).
 *
 * The quarter is anchored to the subscription date: the first quarter starts
 * on `subscriptionDate` and ends 3 months later, and so on. The annual rate
 * is the sum of the base rate for the quarter-start month and the permanence
 * premium for the contract year that the quarter falls into.
 *
 * @throws when `asOfDate` lies on or after `subscriptionDate + maturityYears`
 *   (the certificate has matured), or when the input fails Zod validation.
 */
export function getRateForCohort(
  input: CohortRateInput,
  options: RatesOptions = {},
): CohortRateResult {
  const parsed = cohortRateInputSchema.parse(input);
  const series = getSeries(parsed.series);
  const asOf = parsed.asOfDate ?? todayIsoUtc();

  const quarterIndex = quartersElapsed(parsed.subscriptionDate, asOf);
  const quarterStartDate = shiftMonths(parsed.subscriptionDate, quarterIndex * 3);
  const quarterEndDate = shiftMonths(parsed.subscriptionDate, (quarterIndex + 1) * 3);

  const yearsSinceSubscription = floorYearsBetween(parsed.subscriptionDate, quarterStartDate);
  if (yearsSinceSubscription >= series.maturityYears) {
    throw new Error(
      `Cohort subscribed on ${parsed.subscriptionDate} has matured by ${quarterStartDate} ` +
        `(${series.name} maturity is ${series.maturityYears} years)`,
    );
  }

  const { year, month } = parseIsoDateParts(quarterStartDate);
  const base = computeBaseRate(year, month, { ...options, series });
  const premiumTier = premiumTierForYear(series, yearsSinceSubscription + 1, quarterStartDate);

  const annualPct = toBig(base.basePct).plus(toBig(premiumTier.ratePct));

  return {
    series: series.code,
    subscriptionDate: parsed.subscriptionDate,
    asOfDate: asOf,
    quarterStartDate,
    quarterEndDate,
    quarterIndex,
    yearsSinceSubscription,
    baseRatePct: base.basePct,
    premiumTier,
    annualRatePct: formatPercent(annualPct, series.baseRateDecimals),
  };
}

/**
 * Returns the published monthly base rates between `fromMonth` and `toMonth`
 * (inclusive). Months for which the bundled Euribor 3M dataset cannot yet
 * support a fixing are skipped silently — the returned list contains only
 * months for which {@link computeBaseRate} succeeds — so callers can request a
 * forward-looking range without having to special-case the tail.
 */
export function getRateTable(
  input: RateTableInput,
  options: RatesOptions = {},
): readonly MonthlyBaseRate[] {
  const parsed = rateTableInputSchema.parse(input);
  const series = getSeries(parsed.series ?? DEFAULT_SERIES);
  const months = enumerateMonths(parsed.fromMonth, parsed.toMonth);

  const rates: MonthlyBaseRate[] = [];
  for (const m of months) {
    const { year, month } = parseIsoMonthParts(m);
    try {
      rates.push(toMonthlyBaseRate(series, year, month, options));
    } catch {
      // Insufficient Euribor data or pre-subscription month: skip rather
      // than fail the whole table — the caller can detect gaps by month.
    }
  }
  return rates;
}
