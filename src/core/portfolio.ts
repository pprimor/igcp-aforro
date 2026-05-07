import type {
  PortfolioResult,
  PortfolioSeriesBreakdown,
  SeriesCode,
  SimulatePortfolioInput,
  SimulateResult,
} from '../types/domain.js';
import { simulatePortfolioInputSchema } from '../types/schemas.js';
import { type SimulateOptions, simulate } from './calculator.js';
import { todayIsoUtc } from './dateMath.js';
import { type Big, formatCents, toBig } from './money.js';

const SERIES_ORDER: readonly SeriesCode[] = ['D', 'E', 'F'];

/**
 * Simulates a portfolio made of multiple subscription cohorts.
 *
 * The function composes {@link simulate} for each cohort (same `asOfDate`
 * across all rows) and only owns aggregation: totals and per-series
 * breakdowns are sums of the already-cent-quantized cohort headline fields.
 */
export function simulatePortfolio(
  input: SimulatePortfolioInput,
  options: SimulateOptions = {},
): PortfolioResult {
  const parsed = simulatePortfolioInputSchema.parse(input);
  const asOfDate = parsed.asOfDate ?? todayIsoUtc();
  const includeSchedule = parsed.includeSchedule === true;

  const cohorts: SimulateResult[] = parsed.subscriptions.map((subscription) =>
    simulate(
      {
        series: subscription.series,
        subscriptionDate: subscription.subscriptionDate,
        units: subscription.units,
        asOfDate,
        includeSchedule,
        ...(subscription.irsRate !== undefined ? { irsRate: subscription.irsRate } : {}),
      },
      options,
    ),
  );

  const totals = cohorts.reduce(
    (acc, cohort) => ({
      totalUnits: acc.totalUnits + cohort.units,
      totalValueGross: acc.totalValueGross.plus(toBig(cohort.currentValueGross)),
      totalValueNet: acc.totalValueNet.plus(toBig(cohort.currentValueNet)),
      totalInterestGross: acc.totalInterestGross.plus(toBig(cohort.totalInterestGross)),
      totalInterestNet: acc.totalInterestNet.plus(toBig(cohort.totalInterestNet)),
      totalIrsWithheld: acc.totalIrsWithheld.plus(toBig(cohort.totalIrsWithheld)),
      totalAccruedGross: acc.totalAccruedGross.plus(toBig(cohort.accruedSinceLastCapitalization)),
    }),
    {
      totalUnits: 0,
      totalValueGross: toBig(0),
      totalValueNet: toBig(0),
      totalInterestGross: toBig(0),
      totalInterestNet: toBig(0),
      totalIrsWithheld: toBig(0),
      totalAccruedGross: toBig(0),
    },
  );

  const bySeriesAccumulator: Record<
    SeriesCode,
    { units: number; cohortCount: number; valueNet: Big; interestNet: Big; irsWithheld: Big }
  > = {
    D: {
      units: 0,
      cohortCount: 0,
      valueNet: toBig(0),
      interestNet: toBig(0),
      irsWithheld: toBig(0),
    },
    E: {
      units: 0,
      cohortCount: 0,
      valueNet: toBig(0),
      interestNet: toBig(0),
      irsWithheld: toBig(0),
    },
    F: {
      units: 0,
      cohortCount: 0,
      valueNet: toBig(0),
      interestNet: toBig(0),
      irsWithheld: toBig(0),
    },
  };

  for (const cohort of cohorts) {
    const slot = bySeriesAccumulator[cohort.series];
    slot.units += cohort.units;
    slot.cohortCount += 1;
    slot.valueNet = slot.valueNet.plus(toBig(cohort.currentValueNet));
    slot.interestNet = slot.interestNet.plus(toBig(cohort.totalInterestNet));
    slot.irsWithheld = slot.irsWithheld.plus(toBig(cohort.totalIrsWithheld));
  }

  const bySeries: PortfolioSeriesBreakdown[] = SERIES_ORDER.flatMap((series) => {
    const slot = bySeriesAccumulator[series];
    if (slot.cohortCount === 0) return [];
    return [
      {
        series,
        units: slot.units,
        cohortCount: slot.cohortCount,
        valueNet: formatCents(slot.valueNet),
        interestNet: formatCents(slot.interestNet),
        irsWithheld: formatCents(slot.irsWithheld),
      },
    ];
  });

  const allMatured = cohorts.every((cohort) => cohort.matured);
  const anyMatured = cohorts.some((cohort) => cohort.matured);

  return {
    asOfDate,
    totalUnits: totals.totalUnits,
    totalValueGross: formatCents(totals.totalValueGross),
    totalValueNet: formatCents(totals.totalValueNet),
    totalInterestGross: formatCents(totals.totalInterestGross),
    totalInterestNet: formatCents(totals.totalInterestNet),
    totalIrsWithheld: formatCents(totals.totalIrsWithheld),
    totalAccruedGross: formatCents(totals.totalAccruedGross),
    allMatured,
    anyMatured,
    bySeries,
    cohorts,
  };
}
