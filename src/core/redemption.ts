import type { RedemptionInput, RedemptionResult } from '../types/domain.js';
import { redemptionInputSchema } from '../types/schemas.js';
import { type SimulateOptions, simulate } from './calculator.js';
import { shiftMonths } from './dateMath.js';
import { formatCents, quantizeCents, toBig } from './money.js';
import { getSeries } from './series.js';

/**
 * Computes the payable value of an early redemption (full or partial) for a
 * Aforro certificate cohort at a specific redemption date.
 *
 * The booked quote and accrued math are delegated to `simulate()` with
 * `asOfDate = redemptionDate`, so quote cadence and schedule reconciliation
 * stay identical to the canonical simulation flow.
 */
export function simulateRedemption(
  input: RedemptionInput,
  options: SimulateOptions = {},
): RedemptionResult {
  const parsed = redemptionInputSchema.parse(input);
  const series = getSeries(parsed.series);
  const unitsToRedeem = parsed.unitsToRedeem ?? parsed.units;
  const remainingUnits = parsed.units - unitsToRedeem;
  const earliestRedemptionDate = shiftMonths(parsed.subscriptionDate, series.minimumHoldingMonths);

  const simulation = simulate(
    {
      series: parsed.series,
      subscriptionDate: parsed.subscriptionDate,
      units: parsed.units,
      asOfDate: parsed.redemptionDate,
      includeSchedule: true,
      ...(parsed.irsRate !== undefined ? { irsRate: parsed.irsRate } : {}),
    },
    options,
  );

  const unitQuoteAtRedemption = simulation.currentUnitQuote;
  const redemptionValue = quantizeCents(toBig(unitsToRedeem).times(unitQuoteAtRedemption));
  const remainingValueAtRedemption = quantizeCents(
    toBig(remainingUnits).times(unitQuoteAtRedemption),
  );
  const forfeitedAccruedGross = toBig(simulation.accruedSinceLastCapitalization).times(
    toBig(unitsToRedeem).div(parsed.units),
  );

  return {
    series: parsed.series,
    subscriptionDate: parsed.subscriptionDate,
    redemptionDate: parsed.redemptionDate,
    units: parsed.units,
    unitsToRedeem,
    unitQuoteAtRedemption,
    redemptionValue: formatCents(redemptionValue),
    remainingUnits,
    remainingValueAtRedemption: formatCents(remainingValueAtRedemption),
    forfeitedAccruedGross: formatCents(forfeitedAccruedGross),
    earliestRedemptionDate,
    simulation,
  };
}
