import { expect } from 'vitest';
import { formatCents, quantizeCents, toBig } from '../../src/core/money.js';
import type { SimulateResult } from '../../src/types/domain.js';

/** Cent-level slack when comparing `units × quote` to booked net value (float noise). */
const NET_VALUE_TOLERANCE_EUR = 0.005 + 1e-9;

/** Parses a banker's-rounded EUR string into integer cents. */
export function cents(amount: string): number {
  const [euros, centsPart = ''] = amount.split('.');
  return Number(euros) * 100 + Number(centsPart.padEnd(2, '0').slice(0, 2));
}

/**
 * Structural invariants every successful {@link simulate} result must satisfy.
 * Shared by golden loops and property-based tests to avoid assertion drift.
 */
export function assertSimulateInvariants(result: SimulateResult, units: number): void {
  expect(cents(result.currentValueGross)).toBe(units * 100 + cents(result.totalInterestGross));
  expect(cents(result.totalInterestNet)).toBe(
    cents(result.totalInterestGross) - cents(result.totalIrsWithheld),
  );

  const unroundedNetValue = units * Number(result.currentUnitQuote);
  expect(Math.abs(unroundedNetValue - Number(result.currentValueNet))).toBeLessThanOrEqual(
    NET_VALUE_TOLERANCE_EUR,
  );

  const sched = result.schedule;
  if (!sched || sched.length === 0) return;

  const sumGross = sched.reduce((sum, row) => sum + cents(row.interestGross), 0);
  const sumNet = sched.reduce((sum, row) => sum + cents(row.interestNet), 0);
  const sumIrs = sched.reduce((sum, row) => sum + cents(row.irsWithheld), 0);
  expect(sumGross).toBe(cents(result.totalInterestGross));
  expect(sumNet).toBe(cents(result.totalInterestNet));
  expect(sumIrs).toBe(cents(result.totalIrsWithheld));

  for (let i = 1; i < sched.length; i++) {
    const prev = sched[i - 1];
    const curr = sched[i];
    expect(
      prev !== undefined && curr !== undefined && curr.quarterEndDate > prev.quarterEndDate,
    ).toBe(true);
  }

  for (const row of sched) {
    const expectedBalance = quantizeCents(toBig(row.unitQuoteAfter).times(units));
    expect(cents(row.balanceAfter)).toBe(cents(formatCents(expectedBalance)));
  }
}
