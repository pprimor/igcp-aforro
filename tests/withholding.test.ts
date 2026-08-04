import { describe, expect, it } from 'vitest';
import { simulate } from '../src/core/calculator.js';

/**
 * `irsRate` is an override for hypotheticals — no real Aforro certificate is
 * untaxed. But the quote is rounded per unit at five decimals while the gross is
 * rounded to cents for the whole holding, so the two disagree by a residue at
 * every rate. At 28% that residue is what the withholding absorbs, which IGCP's
 * own declaration confirms. At 0% there is no withholding to absorb it, and the
 * library must not invent one.
 */
describe('simulate — a rate of zero withholds nothing', () => {
  const result = simulate({
    series: 'F',
    subscriptionDate: '2024-01-01',
    units: 2031,
    asOfDate: '2024-07-01',
    includeSchedule: true,
    irsRate: 0,
  });

  it('reports no withholding in any quarter', () => {
    for (const row of result.schedule ?? []) {
      expect(row.irsWithheld).toBe('0.00');
    }
    expect(result.totalIrsWithheld).toBe('0.00');
  });

  it('leaves the net equal to the gross', () => {
    expect(result.totalInterestNet).toBe(result.totalInterestGross);
  });
});

describe('simulate — the withholding is never negative', () => {
  it('holds across rates that strain the quote rounding', () => {
    for (const irsRate of [0, 0.05, 0.28, 0.5, 1]) {
      const result = simulate({
        series: 'F',
        subscriptionDate: '2023-07-03',
        units: 99_999,
        asOfDate: '2026-08-04',
        includeSchedule: true,
        irsRate,
      });

      for (const row of result.schedule ?? []) {
        expect(Number(row.irsWithheld)).toBeGreaterThanOrEqual(0);
      }
    }
  });
});
