import type {
  IsoDate,
  PremiumTier,
  ScheduleRow,
  SeriesMetadata,
  SimulateInput,
  SimulateResult,
} from '../types/domain.js';
import { simulateInputSchema } from '../types/schemas.js';
import { type BaseRateOptions, computeBaseRate } from './baseRate.js';
import {
  daysBetween,
  floorYearsBetween,
  parseIsoDateParts,
  shiftMonths,
  todayIsoUtc,
} from './dateMath.js';
import {
  Big,
  ROUND_HALF_EVEN,
  formatCents,
  formatDecimal,
  formatRate,
  percentToRate,
  quantizeCents,
  toBig,
} from './money.js';
import { getSeries, premiumTierForYear } from './series.js';

/**
 * Quarterly-compounding simulator for IGCP Aforro certificates.
 *
 * The contract loop mirrors the IGCP technical sheet and the quote cadence
 * exposed by aforro.net:
 *
 *   1. Quarters are anchored to the **subscription day-of-month**: quarter `n`
 *      runs from `subscriptionDate + 3·n months` (inclusive) to
 *      `subscriptionDate + 3·(n+1) months` (exclusive). When the target month
 *      lacks the original day-of-month (e.g. 31 Aug + 1 month → September has
 *      only 30 days), the date rolls forward to the first day of the *next*
 *      month, matching IGCP's "vencimento on the first day of the next month"
 *      rule. {@link shiftMonths} encapsulates that.
 *   2. For each completed quarter, the annual rate is the IGCP-published base
 *      rate for the **quarter-start month** plus the permanence premium for
 *      the contract year that the quarter falls into (1-indexed: year 1 has
 *      no premium, year 2 starts the +0.25% tier, etc.).
 *   3. The booked net state is a per-unit quote. Each capitalization computes
 *      gross and net interest per unit, then rounds the resulting unit quote
 *      to the series' configured quote precision (5 decimals for Séries D/E/F)
 *      using banker's rounding.
 *   4. Gross interest and IRS withholding are also booked in real EUR at the
 *      holding level each quarter: gross = `units × previousUnitQuote ×
 *      quarterlyRate`, rounded to cents; IRS = `gross × irsRate`, rounded to
 *      cents; net = gross − IRS.
 *
 * The displayed booked value is derived from the rounded quote:
 * `currentValueNet = round(units × currentUnitQuote, 2)`. Because the
 * headline total fields are sums of cent-quantized quarterly EUR amounts,
 * they reconcile exactly with the schedule rows.
 *
 * The loop terminates at `min(asOfDate, maturityDate)`. If `asOfDate` falls
 * mid-quarter, the partial quarter is reported separately as
 * {@link SimulateResult.accruedSinceLastCapitalization} (gross, pro-rated by
 * elapsed calendar days inside the current quarter) — it is **not** rolled
 * into `currentValue*` or the `totalInterest*` totals, which only reflect
 * already-capitalized amounts.
 */

/** Optional overrides for {@link simulate}. */
export interface SimulateOptions extends BaseRateOptions {}

interface QuarterRate {
  readonly annualPct: Big;
  readonly annualRate: Big;
  readonly quarterlyRate: Big;
  readonly tier: PremiumTier;
}

function rateForQuarter(
  series: SeriesMetadata,
  subscriptionDate: IsoDate,
  quarterStart: IsoDate,
  options: SimulateOptions,
): QuarterRate {
  const { year, month } = parseIsoDateParts(quarterStart);
  const base = computeBaseRate(year, month, { ...options, series });
  const yearsSince = floorYearsBetween(subscriptionDate, quarterStart);
  const tier = premiumTierForYear(series, yearsSince + 1);
  const annualPct = toBig(base.basePct).plus(toBig(tier.ratePct));
  const annualRate = percentToRate(annualPct);
  const quarterlyRate = annualRate.div(4);
  return { annualPct, annualRate, quarterlyRate, tier };
}

/**
 * Simulates the value of an IGCP Aforro Série F certificate for a given
 * cohort up to `asOfDate` (defaults to today, UTC).
 *
 * Returns the capitalized totals plus, when the as-of date falls between two
 * quarterly capitalizations, the gross interest accrued (pro-rated by
 * calendar days) since the last capitalization. The returned `units` echoes
 * the input principal — every other amount is a banker's-rounded decimal
 * string so callers can JSON-serialize without precision loss.
 *
 * When `includeSchedule` is `true`, every completed quarter is materialized
 * in {@link SimulateResult.schedule} with the rate components, gross / IRS /
 * net interest, and the running balance after capitalization.
 *
 * @throws when input fails Zod validation, when the Euribor 3M series (bundled
 *   dataset or {@link BaseRateOptions.observations} override) cannot resolve
 *   the IGCP fixing window for any quarter the loop must process (including
 *   the in-flight quarter when computing accrued), or when the resolved series
 *   has no premium tier for the contract year.
 */
export function simulate(input: SimulateInput, options: SimulateOptions = {}): SimulateResult {
  const parsed = simulateInputSchema.parse(input);
  const series = getSeries(parsed.series);

  const subscriptionDate = parsed.subscriptionDate;
  const asOfDate = parsed.asOfDate ?? todayIsoUtc();
  const includeSchedule = parsed.includeSchedule === true;

  const irsRate = parsed.irsRate ?? Number(series.defaultIrsRate);
  const irsRateBig = toBig(irsRate);

  const principal = toBig(parsed.units);
  const maturityDate = shiftMonths(subscriptionDate, series.maturityYears * 12);
  const maxQuarters = series.maturityYears * 4;

  let unitQuote = new Big(1);
  let totalInterestGross = new Big(0);
  let totalInterestNet = new Big(0);
  let totalIrsWithheld = new Big(0);

  const schedule: ScheduleRow[] = [];
  let quarterIndex = 0;

  while (quarterIndex < maxQuarters) {
    const quarterStart = shiftMonths(subscriptionDate, quarterIndex * 3);
    const quarterEnd = shiftMonths(subscriptionDate, (quarterIndex + 1) * 3);

    if (quarterEnd > asOfDate || quarterEnd > maturityDate) {
      break;
    }

    const { annualRate, quarterlyRate, tier } = rateForQuarter(
      series,
      subscriptionDate,
      quarterStart,
      options,
    );

    const grossPerUnit = unitQuote.times(quarterlyRate);
    const netPerUnit = grossPerUnit.times(new Big(1).minus(irsRateBig));
    const nextUnitQuote = unitQuote
      .plus(netPerUnit)
      .round(series.unitQuoteDecimals, ROUND_HALF_EVEN);

    const interestGross = quantizeCents(grossPerUnit.times(principal));
    const irs = quantizeCents(interestGross.times(irsRateBig));
    const interestNet = interestGross.minus(irs);

    totalInterestGross = totalInterestGross.plus(interestGross);
    totalInterestNet = totalInterestNet.plus(interestNet);
    totalIrsWithheld = totalIrsWithheld.plus(irs);
    unitQuote = nextUnitQuote;

    if (includeSchedule) {
      schedule.push({
        quarterEndDate: quarterEnd,
        annualRate: formatRate(annualRate),
        quarterlyRate: formatRate(quarterlyRate),
        interestGross: formatCents(interestGross),
        irsWithheld: formatCents(irs),
        interestNet: formatCents(interestNet),
        balanceAfter: formatCents(quantizeCents(unitQuote.times(principal))),
        unitQuoteAfter: formatDecimal(unitQuote, series.unitQuoteDecimals),
        premiumTier: tier,
      });
    }

    quarterIndex += 1;
  }

  const matured = asOfDate >= maturityDate;

  let accruedGross = new Big(0);
  if (!matured && quarterIndex < maxQuarters) {
    const quarterStart = shiftMonths(subscriptionDate, quarterIndex * 3);
    const quarterEnd = shiftMonths(subscriptionDate, (quarterIndex + 1) * 3);
    const totalDays = daysBetween(quarterStart, quarterEnd);
    const elapsedDays = daysBetween(quarterStart, asOfDate);

    if (totalDays > 0 && elapsedDays > 0 && elapsedDays < totalDays) {
      const { quarterlyRate } = rateForQuarter(series, subscriptionDate, quarterStart, options);
      const fraction = toBig(elapsedDays).div(totalDays);
      accruedGross = unitQuote.times(quarterlyRate).times(fraction).times(principal);
    }
  }

  const currentValueGross = principal.plus(totalInterestGross);
  const currentValueNet = quantizeCents(unitQuote.times(principal));

  const result: SimulateResult = {
    series: series.code,
    subscriptionDate,
    asOfDate,
    units: parsed.units,
    irsRate: formatDecimal(irsRateBig, 4),
    currentValueGross: formatCents(currentValueGross),
    currentUnitQuote: formatDecimal(unitQuote, series.unitQuoteDecimals),
    currentValueNet: formatCents(currentValueNet),
    totalInterestGross: formatCents(totalInterestGross),
    totalInterestNet: formatCents(totalInterestNet),
    totalIrsWithheld: formatCents(totalIrsWithheld),
    matured,
    maturityDate,
    accruedSinceLastCapitalization: formatCents(accruedGross),
    seriesMetadata: series,
    ...(includeSchedule ? { schedule } : {}),
  };

  return result;
}
