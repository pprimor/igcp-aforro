import type {
  CohortTaxYearRollup,
  PortfolioResult,
  PortfolioTaxYearRollup,
  ScheduleRow,
  SimulateResult,
  TaxYearRollup,
} from '../types/domain.js';
import { formatCents, toBig } from './money.js';

const ZERO_CENTS = formatCents(0);

function taxYearFromQuarterEnd(quarterEndDate: string): number {
  return Number(quarterEndDate.slice(0, 4));
}

function emptyRollup(taxYear: number): TaxYearRollup {
  return {
    taxYear,
    interestGross: ZERO_CENTS,
    irsWithheld: ZERO_CENTS,
    interestNet: ZERO_CENTS,
    capitalizationCount: 0,
  };
}

function accumulateRow(
  acc: {
    interestGross: ReturnType<typeof toBig>;
    irsWithheld: ReturnType<typeof toBig>;
    interestNet: ReturnType<typeof toBig>;
    count: number;
  },
  row: ScheduleRow,
): void {
  acc.interestGross = acc.interestGross.plus(toBig(row.interestGross));
  acc.irsWithheld = acc.irsWithheld.plus(toBig(row.irsWithheld));
  acc.interestNet = acc.interestNet.plus(toBig(row.interestNet));
  acc.count += 1;
}

function finalizeRollup(
  taxYear: number,
  acc: {
    interestGross: ReturnType<typeof toBig>;
    irsWithheld: ReturnType<typeof toBig>;
    interestNet: ReturnType<typeof toBig>;
    count: number;
  },
): TaxYearRollup {
  return {
    taxYear,
    interestGross: formatCents(acc.interestGross),
    irsWithheld: formatCents(acc.irsWithheld),
    interestNet: formatCents(acc.interestNet),
    capitalizationCount: acc.count,
  };
}

function requireSchedule(result: SimulateResult): readonly ScheduleRow[] {
  if (!result.schedule || result.schedule.length === 0) {
    throw new Error(
      'rollupTaxYears requires a non-empty schedule; run simulate with includeSchedule: true',
    );
  }
  return result.schedule;
}

/**
 * Rolls up capitalized schedule rows by calendar year of `quarterEndDate`
 * (UTC, year from the ISO date string). Empty schedule returns `[]`.
 */
export function rollupTaxYearsFromSchedule(schedule: readonly ScheduleRow[]): TaxYearRollup[] {
  if (schedule.length === 0) {
    return [];
  }

  const byYear = new Map<
    number,
    {
      interestGross: ReturnType<typeof toBig>;
      irsWithheld: ReturnType<typeof toBig>;
      interestNet: ReturnType<typeof toBig>;
      count: number;
    }
  >();

  for (const row of schedule) {
    const year = taxYearFromQuarterEnd(row.quarterEndDate);
    let acc = byYear.get(year);
    if (!acc) {
      acc = {
        interestGross: toBig(0),
        irsWithheld: toBig(0),
        interestNet: toBig(0),
        count: 0,
      };
      byYear.set(year, acc);
    }
    accumulateRow(acc, row);
  }

  return [...byYear.entries()]
    .sort(([a], [b]) => a - b)
    .map(([taxYear, acc]) => finalizeRollup(taxYear, acc));
}

/**
 * Single calendar year from a schedule. Missing years return zero amounts and
 * `capitalizationCount: 0` (stable for CLI and playground consumers).
 *
 * Only capitalized quarters appear; mid-quarter `accruedSinceLastCapitalization`
 * is excluded.
 */
export function getTaxYearRollupFromSchedule(
  schedule: readonly ScheduleRow[],
  taxYear: number,
): TaxYearRollup {
  const match = rollupTaxYearsFromSchedule(schedule).find((rollup) => rollup.taxYear === taxYear);
  return match ?? emptyRollup(taxYear);
}

/**
 * Calendar-year roll-ups from a simulation result. Requires a non-empty
 * {@link SimulateResult.schedule}.
 */
export function rollupTaxYears(result: SimulateResult): TaxYearRollup[] {
  return rollupTaxYearsFromSchedule(requireSchedule(result));
}

/** Single calendar year from a simulation result. */
export function getTaxYearRollup(result: SimulateResult, taxYear: number): TaxYearRollup {
  return getTaxYearRollupFromSchedule(requireSchedule(result), taxYear);
}

function cohortRollupsForYear(cohort: SimulateResult, taxYear: number): CohortTaxYearRollup | null {
  if (!cohort.schedule || cohort.schedule.length === 0) {
    return null;
  }
  const rollup = getTaxYearRollupFromSchedule(cohort.schedule, taxYear);
  if (rollup.capitalizationCount === 0) {
    return null;
  }
  return {
    ...rollup,
    series: cohort.series,
    subscriptionDate: cohort.subscriptionDate,
  };
}

/**
 * Merges per-cohort calendar-year roll-ups across a portfolio. Cohorts without
 * a schedule or with no capitalizations in a year are omitted from that year's
 * `cohorts` list.
 */
export function rollupTaxYearsFromPortfolio(portfolio: PortfolioResult): TaxYearRollup[] {
  const byYear = new Map<
    number,
    {
      interestGross: ReturnType<typeof toBig>;
      irsWithheld: ReturnType<typeof toBig>;
      interestNet: ReturnType<typeof toBig>;
      count: number;
    }
  >();

  for (const cohort of portfolio.cohorts) {
    if (!cohort.schedule) {
      continue;
    }
    for (const rollup of rollupTaxYearsFromSchedule(cohort.schedule)) {
      let acc = byYear.get(rollup.taxYear);
      if (!acc) {
        acc = {
          interestGross: toBig(0),
          irsWithheld: toBig(0),
          interestNet: toBig(0),
          count: 0,
        };
        byYear.set(rollup.taxYear, acc);
      }
      acc.interestGross = acc.interestGross.plus(toBig(rollup.interestGross));
      acc.irsWithheld = acc.irsWithheld.plus(toBig(rollup.irsWithheld));
      acc.interestNet = acc.interestNet.plus(toBig(rollup.interestNet));
      acc.count += rollup.capitalizationCount;
    }
  }

  return [...byYear.entries()]
    .sort(([a], [b]) => a - b)
    .map(([taxYear, acc]) => finalizeRollup(taxYear, acc));
}

/** One merged calendar year plus per-cohort breakdown. */
export function getPortfolioTaxYearRollup(
  portfolio: PortfolioResult,
  taxYear: number,
): PortfolioTaxYearRollup {
  const cohorts = portfolio.cohorts
    .map((cohort) => cohortRollupsForYear(cohort, taxYear))
    .filter((rollup): rollup is CohortTaxYearRollup => rollup !== null);

  const totals = cohorts.reduce(
    (acc, cohort) => ({
      interestGross: acc.interestGross.plus(toBig(cohort.interestGross)),
      irsWithheld: acc.irsWithheld.plus(toBig(cohort.irsWithheld)),
      interestNet: acc.interestNet.plus(toBig(cohort.interestNet)),
      count: acc.count + cohort.capitalizationCount,
    }),
    {
      interestGross: toBig(0),
      irsWithheld: toBig(0),
      interestNet: toBig(0),
      count: 0,
    },
  );

  return {
    ...finalizeRollup(taxYear, totals),
    cohortCount: cohorts.length,
    cohorts,
  };
}
