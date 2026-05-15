import { describe, expect, it } from 'vitest';
import { simulate } from '../src/core/calculator.js';
import { simulatePortfolio } from '../src/core/portfolio.js';
import {
  getPortfolioTaxYearRollup,
  getTaxYearRollup,
  getTaxYearRollupFromSchedule,
  rollupTaxYears,
  rollupTaxYearsFromPortfolio,
  rollupTaxYearsFromSchedule,
} from '../src/core/taxYear.js';
import { toBig } from '../src/core/money.js';
import type { ScheduleRow } from '../src/types/domain.js';

function sumScheduleYear(schedule: readonly ScheduleRow[], taxYear: number) {
  const rows = schedule.filter((row) => row.quarterEndDate.startsWith(`${taxYear}-`));
  return rows.reduce(
    (acc, row) => ({
      interestGross: acc.interestGross.plus(row.interestGross),
      irsWithheld: acc.irsWithheld.plus(row.irsWithheld),
      interestNet: acc.interestNet.plus(row.interestNet),
      count: acc.count + 1,
    }),
    {
      interestGross: toBig(0),
      irsWithheld: toBig(0),
      interestNet: toBig(0),
      count: 0,
    },
  );
}

describe('tax year roll-up', () => {
  const spanning = simulate({
    series: 'F',
    subscriptionDate: '2024-03-15',
    units: 1000,
    asOfDate: '2026-04-19',
    includeSchedule: true,
  });

  it('per-year totals match manual sums of schedule rows by quarterEndDate year', () => {
    const schedule = spanning.schedule;
    if (!schedule) {
      throw new Error('expected schedule');
    }
    const rollups = rollupTaxYears(spanning);

    expect(rollups.length).toBeGreaterThan(0);
    for (const rollup of rollups) {
      const manual = sumScheduleYear(schedule, rollup.taxYear);
      expect(rollup.interestGross).toBe(manual.interestGross.toFixed(2));
      expect(rollup.irsWithheld).toBe(manual.irsWithheld.toFixed(2));
      expect(rollup.interestNet).toBe(manual.interestNet.toFixed(2));
      expect(rollup.capitalizationCount).toBe(manual.count);
    }
  });

  it('rollupTaxYearsFromSchedule returns years sorted ascending', () => {
    const schedule = spanning.schedule;
    if (!schedule) {
      throw new Error('expected schedule');
    }
    const rollups = rollupTaxYearsFromSchedule(schedule);
    const years = rollups.map((r) => r.taxYear);
    expect(years).toEqual([...years].sort((a, b) => a - b));
  });

  it('all years reconcile with headline totals when as-of is on a quarter end and accrued is zero', () => {
    const onQuarterEnd = simulate({
      series: 'F',
      subscriptionDate: '2024-03-15',
      units: 1000,
      asOfDate: '2025-06-15',
      includeSchedule: true,
    });
    expect(onQuarterEnd.accruedSinceLastCapitalization).toBe('0.00');

    const rollups = rollupTaxYears(onQuarterEnd);
    const sumGross = rollups.reduce((acc, r) => acc.plus(r.interestGross), toBig(0));
    const sumIrs = rollups.reduce((acc, r) => acc.plus(r.irsWithheld), toBig(0));
    const sumNet = rollups.reduce((acc, r) => acc.plus(r.interestNet), toBig(0));

    expect(sumGross.toFixed(2)).toBe(onQuarterEnd.totalInterestGross);
    expect(sumIrs.toFixed(2)).toBe(onQuarterEnd.totalIrsWithheld);
    expect(sumNet.toFixed(2)).toBe(onQuarterEnd.totalInterestNet);
  });

  it('getTaxYearRollup returns zero rollup for a year with no capitalizations', () => {
    const rollup = getTaxYearRollup(spanning, 1999);
    expect(rollup).toEqual({
      taxYear: 1999,
      interestGross: '0.00',
      irsWithheld: '0.00',
      interestNet: '0.00',
      capitalizationCount: 0,
    });
  });

  it('getTaxYearRollupFromSchedule on empty schedule returns zero rollup', () => {
    expect(getTaxYearRollupFromSchedule([], 2025)).toEqual({
      taxYear: 2025,
      interestGross: '0.00',
      irsWithheld: '0.00',
      interestNet: '0.00',
      capitalizationCount: 0,
    });
  });

  it('rollupTaxYears throws when schedule is missing', () => {
    const withoutSchedule = simulate({
      series: 'F',
      subscriptionDate: '2024-03-15',
      units: 1000,
      asOfDate: '2026-04-19',
    });
    expect(() => rollupTaxYears(withoutSchedule)).toThrow(/non-empty schedule/);
  });

  it('portfolio merge equals sum of cohort rollups for the same year', () => {
    const portfolio = simulatePortfolio({
      subscriptions: [
        { series: 'F', subscriptionDate: '2024-03-15', units: 1000 },
        { series: 'F', subscriptionDate: '2024-06-15', units: 500 },
      ],
      asOfDate: '2026-04-19',
      includeSchedule: true,
    });

    const taxYear = 2025;
    const merged = getPortfolioTaxYearRollup(portfolio, taxYear);
    const [firstCohort, secondCohort] = portfolio.cohorts;
    if (!firstCohort || !secondCohort) {
      throw new Error('expected two cohorts');
    }
    const cohortA = getTaxYearRollup(firstCohort, taxYear);
    const cohortB = getTaxYearRollup(secondCohort, taxYear);

    expect(merged.interestGross).toBe(
      toBig(cohortA.interestGross).plus(cohortB.interestGross).toFixed(2),
    );
    expect(merged.irsWithheld).toBe(
      toBig(cohortA.irsWithheld).plus(cohortB.irsWithheld).toFixed(2),
    );
    expect(merged.interestNet).toBe(
      toBig(cohortA.interestNet).plus(cohortB.interestNet).toFixed(2),
    );
    expect(merged.capitalizationCount).toBe(
      cohortA.capitalizationCount + cohortB.capitalizationCount,
    );
    expect(merged.cohortCount).toBe(2);
    expect(rollupTaxYearsFromPortfolio(portfolio).map((r) => r.taxYear)).toContain(taxYear);
  });
});
