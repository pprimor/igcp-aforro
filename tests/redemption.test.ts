import { describe, expect, it } from 'vitest';
import { ZodError } from 'zod';
import { simulateRedemption } from '../src/core/redemption.js';

function cents(amount: string): number {
  const [euros, centsPart = ''] = amount.split('.');
  return Number(euros) * 100 + Number(centsPart.padEnd(2, '0').slice(0, 2));
}

describe('simulateRedemption — validation', () => {
  it('rejects redemptions before the 3-month holding minimum', () => {
    expect(() =>
      simulateRedemption({
        series: 'F',
        subscriptionDate: '2024-03-15',
        units: 1000,
        redemptionDate: '2024-06-14',
      }),
    ).toThrowError(ZodError);
  });

  it('accepts redemption exactly at the 3-month boundary', () => {
    expect(() =>
      simulateRedemption({
        series: 'F',
        subscriptionDate: '2024-03-15',
        units: 1000,
        redemptionDate: '2024-06-15',
      }),
    ).not.toThrow();
  });

  it('rejects redemption on or after maturity', () => {
    expect(() =>
      simulateRedemption({
        series: 'F',
        subscriptionDate: '2024-03-15',
        units: 1000,
        redemptionDate: '2039-03-15',
      }),
    ).toThrowError(ZodError);
  });

  it('rejects unitsToRedeem outside [1, units]', () => {
    expect(() =>
      simulateRedemption({
        series: 'F',
        subscriptionDate: '2024-03-15',
        units: 1000,
        redemptionDate: '2024-06-15',
        unitsToRedeem: 0,
      }),
    ).toThrowError(ZodError);
    expect(() =>
      simulateRedemption({
        series: 'F',
        subscriptionDate: '2024-03-15',
        units: 1000,
        redemptionDate: '2024-06-15',
        unitsToRedeem: 1001,
      }),
    ).toThrowError(ZodError);
  });

  it('rejects partial redemption when remaining units fall below minUnits', () => {
    expect(() =>
      simulateRedemption({
        series: 'F',
        subscriptionDate: '2024-03-15',
        units: 1000,
        redemptionDate: '2024-06-15',
        unitsToRedeem: 901,
      }),
    ).toThrowError(ZodError);
  });

  it('accepts full redemption with remainingUnits = 0', () => {
    const result = simulateRedemption({
      series: 'F',
      subscriptionDate: '2024-03-15',
      units: 1000,
      redemptionDate: '2024-06-15',
      unitsToRedeem: 1000,
    });
    expect(result.remainingUnits).toBe(0);
  });
});

describe('simulateRedemption — math contracts', () => {
  it('full redemption mid-quarter matches booked net value and reports forfeited accrued', () => {
    const result = simulateRedemption({
      series: 'F',
      subscriptionDate: '2024-03-15',
      units: 1000,
      redemptionDate: '2024-07-10',
    });

    expect(result.redemptionValue).toBe(result.simulation.currentValueNet);
    expect(Number(result.forfeitedAccruedGross)).toBeGreaterThan(0);
    expect(cents(result.redemptionValue)).toBe(
      cents(result.simulation.currentValueNet) - cents(result.remainingValueAtRedemption),
    );
  });

  it('full redemption on capitalization day has zero forfeited accrued', () => {
    const result = simulateRedemption({
      series: 'F',
      subscriptionDate: '2024-03-15',
      units: 1000,
      redemptionDate: '2024-09-15',
    });
    expect(result.forfeitedAccruedGross).toBe('0.00');
  });

  it('partial redemption reconciles to within one cent', () => {
    const result = simulateRedemption({
      series: 'F',
      subscriptionDate: '2024-03-15',
      units: 1000,
      redemptionDate: '2024-09-20',
      unitsToRedeem: 500,
    });
    const reconciled = cents(result.redemptionValue) + cents(result.remainingValueAtRedemption);
    const target = cents(result.simulation.currentValueNet);
    expect(Math.abs(reconciled - target)).toBeLessThanOrEqual(1);
  });
});

describe('simulateRedemption — per-series coverage and determinism', () => {
  it.each([
    ['D', '2017-10-01', '2023-11-01'],
    ['E', '2018-01-15', '2024-07-20'],
    ['F', '2024-03-15', '2030-09-18'],
  ] as const)('supports series %s', (series, subscriptionDate, redemptionDate) => {
    const result = simulateRedemption({
      series,
      subscriptionDate,
      units: 1000,
      redemptionDate,
      unitsToRedeem: 400,
    });
    expect(result.series).toBe(series);
    expect(result.unitsToRedeem).toBe(400);
  });

  it('is deterministic for identical inputs', () => {
    const input = {
      series: 'F' as const,
      subscriptionDate: '2024-03-15',
      units: 1000,
      redemptionDate: '2026-04-19',
      unitsToRedeem: 650,
    };
    const first = simulateRedemption(input);
    const second = simulateRedemption(input);
    expect(JSON.stringify(first)).toBe(JSON.stringify(second));
  });
});
