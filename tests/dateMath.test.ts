import { describe, expect, it } from 'vitest';
import {
  daysBetween,
  enumerateMonths,
  floorYearsBetween,
  formatIsoMonth,
  isoMonthOf,
  pad2,
  parseIsoDateParts,
  parseIsoMonthParts,
  shiftMonths,
  todayIsoUtc,
} from '../src/core/dateMath.js';

describe('dateMath ISO formatting helpers', () => {
  it('pads single-digit date parts and leaves two-digit parts unchanged', () => {
    expect(pad2(4)).toBe('04');
    expect(pad2(12)).toBe('12');
  });

  it('parses and formats ISO date and month strings', () => {
    expect(parseIsoDateParts('2024-02-29')).toEqual({ year: 2024, month: 2, day: 29 });
    expect(parseIsoMonthParts('2024-02')).toEqual({ year: 2024, month: 2 });
    expect(formatIsoMonth(2024, 2)).toBe('2024-02');
    expect(isoMonthOf('2024-02-29')).toBe('2024-02');
  });

  it('returns today as a UTC ISO date string', () => {
    expect(todayIsoUtc()).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });
});

describe('enumerateMonths', () => {
  it('lists months inclusively across year boundaries', () => {
    expect(enumerateMonths('2023-11', '2024-02')).toEqual([
      '2023-11',
      '2023-12',
      '2024-01',
      '2024-02',
    ]);
  });

  it('returns an empty list when the end month is before the start month', () => {
    expect(enumerateMonths('2024-03', '2024-02')).toEqual([]);
  });
});

describe('shiftMonths', () => {
  it('preserves the day of month when the target month contains it', () => {
    expect(shiftMonths('2024-01-15', 13)).toBe('2025-02-15');
    expect(shiftMonths('2024-03-15', -2)).toBe('2024-01-15');
  });

  it('rolls forward when the target month does not contain the original day', () => {
    expect(shiftMonths('2024-08-31', 1)).toBe('2024-10-01');
    expect(shiftMonths('2024-12-31', 2)).toBe('2025-03-01');
  });
});

describe('floorYearsBetween', () => {
  it('counts complete anniversaries only', () => {
    expect(floorYearsBetween('2020-04-30', '2024-04-29')).toBe(3);
    expect(floorYearsBetween('2020-04-30', '2024-04-30')).toBe(4);
  });

  it('floors out-of-order dates at zero', () => {
    expect(floorYearsBetween('2024-04-30', '2020-04-30')).toBe(0);
  });
});

describe('daysBetween', () => {
  it('returns signed whole-day differences in UTC', () => {
    expect(daysBetween('2024-02-28', '2024-03-01')).toBe(2);
    expect(daysBetween('2024-03-01', '2024-02-28')).toBe(-2);
  });
});
