import { describe, expect, it } from 'vitest';
import { ZodError } from 'zod';
import { simulate } from '../src/core/calculator.js';
import { toBig } from '../src/core/money.js';
import { simulatePortfolio } from '../src/core/portfolio.js';
import { syntheticEuriborFlat } from './helpers/syntheticEuribor.js';

const LONG_HORIZON_EURIBOR = syntheticEuriborFlat('2015-01-01', '2045-12-31', '2.500');

describe('simulatePortfolio — reconciliation and composition', () => {
  it('single-cohort portfolio matches simulate() headline fields', () => {
    const subscription = { series: 'F' as const, subscriptionDate: '2024-03-15', units: 1000 };
    const asOfDate = '2026-04-19';
    const single = simulate({ ...subscription, asOfDate, includeSchedule: true });
    const portfolio = simulatePortfolio({
      subscriptions: [subscription],
      asOfDate,
      includeSchedule: true,
    });

    expect(portfolio.cohorts).toHaveLength(1);
    expect(portfolio.cohorts[0]).toEqual(single);
    expect(portfolio.totalUnits).toBe(single.units);
    expect(portfolio.totalValueNet).toBe(single.currentValueNet);
    expect(portfolio.totalInterestNet).toBe(single.totalInterestNet);
    expect(portfolio.totalIrsWithheld).toBe(single.totalIrsWithheld);
    expect(portfolio.totalAccruedGross).toBe(single.accruedSinceLastCapitalization);
  });

  it('aggregates two cohorts in same series and collapses bySeries into one row', () => {
    const input = {
      asOfDate: '2026-04-19',
      subscriptions: [
        { series: 'F' as const, subscriptionDate: '2024-03-15', units: 1000 },
        { series: 'F' as const, subscriptionDate: '2024-10-15', units: 500 },
      ],
    };
    const result = simulatePortfolio(input);

    expect(result.bySeries).toHaveLength(1);
    expect(result.bySeries[0]).toMatchObject({ series: 'F', cohortCount: 2, units: 1500 });
    expect(result.totalValueNet).toBe(
      result.cohorts
        .reduce((sum, row) => sum.plus(toBig(row.currentValueNet)), toBig(0))
        .toFixed(2),
    );
    expect(result.totalInterestNet).toBe(
      result.cohorts
        .reduce((sum, row) => sum.plus(toBig(row.totalInterestNet)), toBig(0))
        .toFixed(2),
    );
  });

  it('keeps bySeries in canonical B, C, D, E, F order (omitting empty series)', () => {
    const result = simulatePortfolio({
      asOfDate: '2026-04-19',
      subscriptions: [
        { series: 'F', subscriptionDate: '2024-03-15', units: 1000 },
        { series: 'D', subscriptionDate: '2017-10-01', units: 1000 },
        { series: 'E', subscriptionDate: '2018-01-15', units: 1000 },
        { series: 'C', subscriptionDate: '2010-06-01', units: 1000 },
      ],
    });

    expect(result.bySeries.map((row) => row.series)).toEqual(['C', 'D', 'E', 'F']);
  });

  it('allows reforco rows with same series and same subscription date', () => {
    const single = simulate({
      series: 'F',
      subscriptionDate: '2024-03-15',
      units: 1000,
      asOfDate: '2026-04-19',
    });
    const result = simulatePortfolio({
      subscriptions: [
        { series: 'F', subscriptionDate: '2024-03-15', units: 1000 },
        { series: 'F', subscriptionDate: '2024-03-15', units: 1000 },
      ],
      asOfDate: '2026-04-19',
    });

    expect(result.cohorts).toHaveLength(2);
    expect(result.totalValueNet).toBe(toBig(single.currentValueNet).times(2).toFixed(2));
    expect(result.totalInterestNet).toBe(toBig(single.totalInterestNet).times(2).toFixed(2));
  });

  it('is deterministic for the same input', () => {
    const input = {
      subscriptions: [
        { series: 'F' as const, subscriptionDate: '2024-03-15', units: 1000 },
        { series: 'E' as const, subscriptionDate: '2018-01-15', units: 2000, irsRate: 0 },
      ],
      asOfDate: '2026-04-19',
      includeSchedule: true,
    };
    expect(JSON.stringify(simulatePortfolio(input))).toBe(JSON.stringify(simulatePortfolio(input)));
  });
});

describe('simulatePortfolio — validation guards', () => {
  it('enforces the per-series cap matrix', () => {
    expect(() =>
      simulatePortfolio({
        subscriptions: [
          { series: 'F', subscriptionDate: '2024-03-15', units: 40_000 },
          { series: 'F', subscriptionDate: '2024-03-16', units: 60_000 },
        ],
      }),
    ).not.toThrow();
    expect(() =>
      simulatePortfolio({
        subscriptions: [
          { series: 'F', subscriptionDate: '2024-03-15', units: 40_000 },
          { series: 'F', subscriptionDate: '2024-03-16', units: 60_001 },
        ],
      }),
    ).toThrowError(/sum of Série F units \(100001\) exceeds the per-Conta-Aforro cap of 100000/);

    expect(() =>
      simulatePortfolio({
        subscriptions: [
          { series: 'D', subscriptionDate: '2017-10-01', units: 100_000 },
          { series: 'D', subscriptionDate: '2017-10-02', units: 150_000 },
        ],
      }),
    ).not.toThrow();
    expect(() =>
      simulatePortfolio({
        subscriptions: [
          { series: 'E', subscriptionDate: '2018-01-15', units: 100_000 },
          { series: 'E', subscriptionDate: '2018-01-16', units: 150_001 },
        ],
      }),
    ).toThrowError(/per-Conta-Aforro cap of 250000/);

    expect(() =>
      simulatePortfolio({
        subscriptions: [
          { series: 'D', subscriptionDate: '2017-10-01', units: 200_000 },
          { series: 'F', subscriptionDate: '2024-03-15', units: 80_000 },
        ],
      }),
    ).not.toThrow();
  });

  it('rejects empty subscriptions array with canonical message', () => {
    expect(() => simulatePortfolio({ subscriptions: [] })).toThrowError(
      /subscriptions must contain at least one entry/,
    );
  });

  it('rejects asOfDate earlier than a subscription date', () => {
    expect(() =>
      simulatePortfolio({
        asOfDate: '2024-03-14',
        subscriptions: [{ series: 'F', subscriptionDate: '2024-03-15', units: 1000 }],
      }),
    ).toThrowError(/asOfDate must be on or after subscriptions\[0\].subscriptionDate/);
  });

  it('throws a ZodError for validation failures', () => {
    expect(() =>
      simulatePortfolio({
        subscriptions: [{ series: 'F', subscriptionDate: '2024-03-15', units: 1 }],
      }),
    ).toThrowError(ZodError);
  });
});

describe('simulatePortfolio — maturity rollups and schedule propagation', () => {
  it('rolls up allMatured/anyMatured correctly', () => {
    const allMatured = simulatePortfolio(
      {
        asOfDate: '2039-03-15',
        subscriptions: [{ series: 'F', subscriptionDate: '2024-03-15', units: 1000 }],
      },
      { observations: LONG_HORIZON_EURIBOR },
    );
    expect(allMatured.allMatured).toBe(true);
    expect(allMatured.anyMatured).toBe(true);

    const mixed = simulatePortfolio(
      {
        asOfDate: '2030-03-15',
        subscriptions: [
          { series: 'E', subscriptionDate: '2018-01-15', units: 1000 },
          { series: 'F', subscriptionDate: '2024-03-15', units: 1000 },
        ],
      },
      { observations: LONG_HORIZON_EURIBOR },
    );
    expect(mixed.allMatured).toBe(false);
    expect(mixed.anyMatured).toBe(true);
  });

  it('propagates includeSchedule=true to all cohorts', () => {
    const withSchedule = simulatePortfolio({
      subscriptions: [
        { series: 'F', subscriptionDate: '2024-03-15', units: 1000 },
        { series: 'E', subscriptionDate: '2018-01-15', units: 1000 },
      ],
      asOfDate: '2026-04-19',
      includeSchedule: true,
    });
    expect(withSchedule.cohorts.every((row) => Array.isArray(row.schedule))).toBe(true);

    const withoutSchedule = simulatePortfolio({
      subscriptions: [{ series: 'F', subscriptionDate: '2024-03-15', units: 1000 }],
      asOfDate: '2026-04-19',
    });
    expect(withoutSchedule.cohorts[0]?.schedule).toBeUndefined();
  });
});
