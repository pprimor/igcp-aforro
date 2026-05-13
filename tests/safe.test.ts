import { describe, expect, it } from 'vitest';
import { ZodError } from 'zod';
import { simulate } from '../src/core/calculator.js';
import {
  safeGetRateTable,
  safeSimulate,
} from '../src/safe.js';

describe('safeSimulate', () => {
  it('returns validation failure for invalid units (below series minimum)', () => {
    const result = safeSimulate({
      series: 'F',
      subscriptionDate: '2024-03-15',
      units: 99,
    });
    expect(result.ok).toBe(false);
    if (result.ok || result.kind !== 'validation') return;
    expect(result.error).toBeInstanceOf(ZodError);
  });

  it('matches throwing simulate() for a golden fixture (headline fields)', () => {
    const input = {
      series: 'F' as const,
      subscriptionDate: '2024-03-15',
      units: 1000,
      asOfDate: '2024-06-15',
    };
    const expected = simulate(input);
    const result = safeSimulate(input);
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.value.series).toBe(expected.series);
    expect(result.value.units).toBe(expected.units);
    expect(result.value.currentValueNet).toBe(expected.currentValueNet);
    expect(result.value.currentUnitQuote).toBe(expected.currentUnitQuote);
    expect(result.value.totalInterestNet).toBe(expected.totalInterestNet);
  });

  it('returns runtime failure when Euribor observations are empty (no throw)', () => {
    const input = {
      series: 'F' as const,
      subscriptionDate: '2024-03-15',
      units: 1000,
      asOfDate: '2024-06-15',
    };
    const result = safeSimulate(input, { observations: [] });
    expect(result.ok).toBe(false);
    if (result.ok || result.kind !== 'runtime') return;
    expect(result.message).toMatch(/Insufficient Euribor|Euribor/i);
  });
});

describe('safeGetRateTable', () => {
  it('returns validation failure for invalid month string', () => {
    const result = safeGetRateTable({
      fromMonth: 'not-a-month',
      toMonth: '2024-06',
    });
    expect(result.ok).toBe(false);
    if (result.ok || result.kind !== 'validation') return;
    expect(result.error).toBeInstanceOf(ZodError);
  });
});
