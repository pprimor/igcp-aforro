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

/** Safety cap so a perpetual series cannot spin for unbounded quarters on bad inputs. */
const MAX_PERPETUAL_QUARTERS = 2000;

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
 *      holding level each quarter: gross = `units × unitFaceValueEur × previousUnitQuote ×
 *      quarterlyRate`, rounded to cents; IRS = `gross × irsRate`, rounded to
 *      cents; net = gross − IRS.
 *
 * The displayed booked value is derived from the rounded quote:
 * `currentValueNet = round(units × unitFaceValueEur × currentUnitQuote, 2)`. Because the
 * headline total fields are sums of cent-quantized quarterly EUR amounts,
 * they reconcile exactly with the schedule rows.
 *
 * The loop terminates at `min(asOfDate, maturityDate)` for finite maturities,
 * or at `asOfDate` for perpetual series (Série B). If `asOfDate` falls
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
  const tier = premiumTierForYear(series, yearsSince + 1, quarterStart);
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

  const principalEur = toBig(parsed.units).times(toBig(series.unitFaceValueEur));
  const maturityDate =
    series.maturityYears === null ? null : shiftMonths(subscriptionDate, series.maturityYears * 12);
  const maxQuarters =
    series.maturityYears === null ? MAX_PERPETUAL_QUARTERS : series.maturityYears * 4;

  let unitQuote = new Big(1);
  // The booked value each quarter's net interest is measured against. Opens at
  // the principal, the quote being 1 before any capitalization.
  let previousBalance = quantizeCents(principalEur);
  let totalInterestGross = new Big(0);
  let totalInterestNet = new Big(0);
  let totalIrsWithheld = new Big(0);

  const schedule: ScheduleRow[] = [];
  let quarterIndex = 0;

  while (quarterIndex < maxQuarters) {
    const quarterStart = shiftMonths(subscriptionDate, quarterIndex * 3);
    const quarterEnd = shiftMonths(subscriptionDate, (quarterIndex + 1) * 3);

    if (quarterEnd > asOfDate) {
      break;
    }
    if (maturityDate !== null && quarterEnd > maturityDate) {
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

    // The booked value is what IGCP pays and what aforro.net displays, and it
    // comes from the rounded per-unit quote. So the net interest of a quarter is
    // the movement in that value — not a second, separately rounded reckoning of
    // the same thing. Computing it independently let the two drift apart by the
    // quote's own rounding, half a unit in the fifth decimal multiplied by the
    // unit count, which is euros rather than cents at a large holding.
    const balanceAfter = quantizeCents(nextUnitQuote.times(principalEur));
    const interestNet = balanceAfter.minus(previousBalance);

    // The gross is IGCP's own figure, matched exactly against a declaration
    // issued under CIRS Article 119º nº 3. The withholding is what it kept back,
    // which is the gross less what reached the holder — and demonstrably not the
    // rate applied to the gross: that declaration reports 55,95 EUR withheld on
    // 199,75 EUR of income, where 28% of the gross would be 55,93.
    const grossAtRate = quantizeCents(grossPerUnit.times(principalEur));
    const withheld = grossAtRate.minus(interestNet);

    // The quote rounds per unit at five decimals while the gross rounds to cents
    // over the whole holding, so the two carry a residue at every rate. A real
    // withholding is tens of euros and absorbs it without noticing, which is what
    // the declaration confirms. But an `irsRate` low enough — 0, for a holder who
    // pays nothing — leaves the residue larger than the withholding itself, and a
    // negative amount withheld is not a thing that can happen. There the gross
    // gives way instead: with nothing withheld the gross *is* what was credited.
    const noWithholding = withheld.lt(0);
    const irs = noWithholding ? new Big(0) : withheld;
    const interestGross = noWithholding ? interestNet : grossAtRate;

    totalInterestGross = totalInterestGross.plus(interestGross);
    totalInterestNet = totalInterestNet.plus(interestNet);
    totalIrsWithheld = totalIrsWithheld.plus(irs);
    unitQuote = nextUnitQuote;
    previousBalance = balanceAfter;

    if (includeSchedule) {
      schedule.push({
        quarterEndDate: quarterEnd,
        annualRate: formatRate(annualRate),
        quarterlyRate: formatRate(quarterlyRate),
        interestGross: formatCents(interestGross),
        irsWithheld: formatCents(irs),
        interestNet: formatCents(interestNet),
        balanceAfter: formatCents(balanceAfter),
        unitQuoteAfter: formatDecimal(unitQuote, series.unitQuoteDecimals),
        premiumTier: tier,
      });
    }

    quarterIndex += 1;
  }

  const matured = maturityDate !== null && asOfDate >= maturityDate;

  let accruedGross = new Big(0);
  if (!matured && quarterIndex < maxQuarters) {
    const quarterStart = shiftMonths(subscriptionDate, quarterIndex * 3);
    const quarterEnd = shiftMonths(subscriptionDate, (quarterIndex + 1) * 3);
    const totalDays = daysBetween(quarterStart, quarterEnd);
    const elapsedDays = daysBetween(quarterStart, asOfDate);

    if (totalDays > 0 && elapsedDays > 0 && elapsedDays < totalDays) {
      const { quarterlyRate } = rateForQuarter(series, subscriptionDate, quarterStart, options);
      const fraction = toBig(elapsedDays).div(totalDays);
      accruedGross = unitQuote.times(quarterlyRate).times(fraction).times(principalEur);
    }
  }

  const currentValueGross = principalEur.plus(totalInterestGross);
  const currentValueNet = quantizeCents(unitQuote.times(principalEur));

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
