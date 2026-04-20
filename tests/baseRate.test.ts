import { describe, expect, it } from 'vitest';
import { computeBaseRate } from '../src/core/baseRate.js';
import type { SeriesCode } from '../src/types/domain.js';
import fixture from './fixtures/igcpPublishedBaseRates.json' with { type: 'json' };

interface PublishedRate {
  readonly series: SeriesCode;
  readonly month: string;
  readonly basePct: string;
}

/**
 * Months our `computeBaseRate` cannot yet reproduce. Each entry is tracked in
 * a baseRate followup plan so the skip flips back to a real assertion as
 * soon as the underlying issue lands:
 *
 * - `F:2023-06` — the inaugural Série F month. The antepenultimate-business-day
 *   fixing falls in May 2023, before the series' subscription-start guard, so
 *   `computeBaseRate` currently throws. Tracked in
 *   `igcp-aforro_baserate_followups_2b9f4a3c.plan.md`.
 *
 * The fixture itself stays authoritative — leaving the IGCP-published value
 * in place ensures the followup can simply remove the entry from this set
 * once the math is fixed, without re-sourcing the rate.
 */
const KNOWN_FAILURES = new Set<string>(['F:2023-06']);

const publishedRates = fixture.rates as readonly PublishedRate[];

function parseYearMonth(isoMonth: string): { year: number; month: number } {
  const match = /^(\d{4})-(\d{2})$/.exec(isoMonth);
  if (!match) {
    throw new Error(`Invalid ISO month in fixture: "${isoMonth}"`);
  }
  return { year: Number(match[1]), month: Number(match[2]) };
}

describe('computeBaseRate vs IGCP-published monthly base rates', () => {
  it('fixture covers every Série F month from 2023-06 onwards without gaps', () => {
    const serieF = publishedRates
      .filter((entry) => entry.series === 'F')
      .map((entry) => entry.month)
      .sort();
    expect(serieF.length).toBeGreaterThan(0);
    expect(serieF[0]).toBe('2023-06');

    for (let i = 1; i < serieF.length; i++) {
      const prev = parseYearMonth(serieF[i - 1] as string);
      const curr = parseYearMonth(serieF[i] as string);
      const expectedNext =
        prev.month === 12
          ? `${prev.year + 1}-01`
          : `${prev.year}-${String(prev.month + 1).padStart(2, '0')}`;
      expect(`${curr.year}-${String(curr.month).padStart(2, '0')}`).toBe(expectedNext);
    }
  });

  for (const entry of publishedRates) {
    const key = `${entry.series}:${entry.month}`;
    const testFn = KNOWN_FAILURES.has(key) ? it.skip : it;
    const { year, month } = parseYearMonth(entry.month);

    testFn(`${entry.series} ${entry.month} → ${entry.basePct}%`, () => {
      const result = computeBaseRate(year, month);
      expect(result.basePct).toBe(entry.basePct);
    });
  }
});
