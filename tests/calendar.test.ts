import { describe, expect, it } from 'vitest';
import {
  antepenultimateBusinessDay,
  easterSunday,
  isTarget2BusinessDay,
  previousBusinessDay,
  target2Holidays,
} from '../src/core/calendar.js';

/**
 * Calendar regression tests focused on the TARGET2 edge cases that drive
 * the antepenultimate-business-day fixing rule:
 *
 * - **December** carries Christmas Day + Christmas Holiday adjacent to
 *   the month's tail, which is exactly where the antepenultimate walk-back
 *   needs to skip multiple non-business days.
 * - **April / May** carry Good Friday, Easter Monday, and Labour Day —
 *   which fall mid-month but still influence `previousBusinessDay` calls
 *   from quarterly anchors landing on the months' first week.
 * - **Easter** itself moves between March and April; the algorithm has to
 *   land on the canonical Sundays going back as far as 1818 and forward
 *   to 2038 (the Meeus/Jones/Butcher span we exercise in the fetcher's
 *   range tests).
 */

describe('easterSunday', () => {
  // Reference values lifted directly from the Catholic liturgical calendar;
  // these are the years exercised end-to-end by the bundled Euribor data
  // (2023 onwards) plus a deep historical and forward-looking spot check.
  const knownEasters: ReadonlyArray<readonly [number, string]> = [
    [1818, '1818-03-22'],
    [2000, '2000-04-23'],
    [2023, '2023-04-09'],
    [2024, '2024-03-31'],
    [2025, '2025-04-20'],
    [2026, '2026-04-05'],
    [2027, '2027-03-28'],
    [2038, '2038-04-25'],
  ];

  for (const [year, expected] of knownEasters) {
    it(`${year} → ${expected}`, () => {
      expect(easterSunday(year)).toBe(expected);
    });
  }

  it('rejects non-integer years', () => {
    expect(() => easterSunday(2024.5)).toThrow(/Invalid year/);
  });
});

describe('target2Holidays', () => {
  it('returns exactly six closing dates per year', () => {
    for (const year of [2023, 2024, 2025, 2026]) {
      expect(target2Holidays(year).size).toBe(6);
    }
  });

  it('includes all four fixed holidays plus Good Friday and Easter Monday for 2024', () => {
    const holidays = target2Holidays(2024);
    expect(holidays.has('2024-01-01')).toBe(true);
    expect(holidays.has('2024-03-29')).toBe(true);
    expect(holidays.has('2024-04-01')).toBe(true);
    expect(holidays.has('2024-05-01')).toBe(true);
    expect(holidays.has('2024-12-25')).toBe(true);
    expect(holidays.has('2024-12-26')).toBe(true);
  });

  it('returns the same Set instance per year (memoization)', () => {
    expect(target2Holidays(2024)).toBe(target2Holidays(2024));
  });
});

describe('isTarget2BusinessDay', () => {
  it('flags weekends as non-business days', () => {
    expect(isTarget2BusinessDay('2024-03-30')).toBe(false);
    expect(isTarget2BusinessDay('2024-03-31')).toBe(false);
  });

  it('flags TARGET2 holidays as non-business days', () => {
    expect(isTarget2BusinessDay('2024-01-01')).toBe(false);
    expect(isTarget2BusinessDay('2024-03-29')).toBe(false);
    expect(isTarget2BusinessDay('2024-04-01')).toBe(false);
    expect(isTarget2BusinessDay('2024-05-01')).toBe(false);
    expect(isTarget2BusinessDay('2024-12-25')).toBe(false);
    expect(isTarget2BusinessDay('2024-12-26')).toBe(false);
  });

  it('flags ordinary weekdays as business days', () => {
    expect(isTarget2BusinessDay('2024-03-28')).toBe(true);
    expect(isTarget2BusinessDay('2024-04-02')).toBe(true);
    expect(isTarget2BusinessDay('2024-12-27')).toBe(true);
  });

  it('rejects malformed ISO dates', () => {
    expect(() => isTarget2BusinessDay('2024/01/01')).toThrow(/Invalid ISO date/);
    expect(() => isTarget2BusinessDay('2024-13-01')).toThrow(/Invalid calendar date/);
  });
});

describe('previousBusinessDay', () => {
  // The "long Easter weekend" — Good Friday (Mar 29) + Easter Monday (Apr 1)
  // span 4 consecutive non-business days when the Saturday/Sunday wrap is
  // included; the previous business day from Apr 2 is therefore Mar 28.
  it('skips the full Easter weekend (2024)', () => {
    expect(previousBusinessDay('2024-04-02')).toBe('2024-03-28');
  });

  it('skips Christmas closures (2024)', () => {
    // Dec 25 Wed and Dec 26 Thu are TARGET2 holidays, so the previous
    // business day before Dec 27 Fri is Dec 24 Tue.
    expect(previousBusinessDay('2024-12-27')).toBe('2024-12-24');
  });

  it('handles a single weekend skip', () => {
    expect(previousBusinessDay('2024-03-25')).toBe('2024-03-22');
  });

  it('crosses a year boundary for Jan 2nd', () => {
    // Jan 1 2024 (Mon) is a holiday, Dec 30/31 2023 fall on Sat/Sun, so
    // the previous business day before Jan 2 2024 is Dec 29 2023 (Fri).
    expect(previousBusinessDay('2024-01-02')).toBe('2023-12-29');
  });
});

describe('antepenultimateBusinessDay', () => {
  // Each row is `(year, month)` of the *fixing month* (= the month
  // immediately preceding the IGCP target month). The expected ISO date
  // is the antepenultimate TARGET2 business day of that fixing month.
  const cases: ReadonlyArray<{ year: number; month: number; expected: string; note: string }> = [
    {
      year: 2023,
      month: 4,
      expected: '2023-04-26',
      note: 'April 2023 — Easter inside the month, no holidays in the tail',
    },
    {
      year: 2023,
      month: 12,
      expected: '2023-12-27',
      note: 'Dec 2023 — Christmas Mon/Tue precede the tail',
    },
    {
      year: 2024,
      month: 2,
      expected: '2024-02-27',
      note: 'Feb 2024 leap year — 29 days, no holidays',
    },
    {
      year: 2024,
      month: 5,
      expected: '2024-05-29',
      note: 'May 2024 — Labour Day Wed at the start',
    },
    {
      year: 2024,
      month: 12,
      expected: '2024-12-27',
      note: 'Dec 2024 — Christmas Wed/Thu push the count',
    },
    { year: 2025, month: 5, expected: '2025-05-28', note: 'May 2025 — Labour Day Thursday' },
    {
      year: 2025,
      month: 12,
      expected: '2025-12-29',
      note: 'Dec 2025 — Christmas Thu/Fri compress the tail',
    },
    { year: 2026, month: 3, expected: '2026-03-27', note: 'March 2026 — no holidays in tail' },
  ];

  for (const { year, month, expected, note } of cases) {
    it(`${year}-${String(month).padStart(2, '0')} → ${expected}  // ${note}`, () => {
      expect(antepenultimateBusinessDay(year, month)).toBe(expected);
    });
  }

  it('rejects out-of-range months', () => {
    expect(() => antepenultimateBusinessDay(2024, 0)).toThrow(/Invalid month/);
    expect(() => antepenultimateBusinessDay(2024, 13)).toThrow(/Invalid month/);
  });

  it('rejects non-integer years', () => {
    expect(() => antepenultimateBusinessDay(2024.5, 1)).toThrow(/Invalid year/);
  });
});
