import fc from 'fast-check';
import { describe, it } from 'vitest';
import {
  daysBetween,
  enumerateMonths,
  floorYearsBetween,
  pad2,
  shiftMonths,
} from '../../src/core/dateMath.js';
import type { IsoDate, IsoMonth } from '../../src/types/domain.js';
import './setup.js';

const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function isValidIsoDate(year: number, month: number, day: number): boolean {
  if (month < 1 || month > 12 || day < 1) return false;
  const utc = Date.UTC(year, month - 1, day);
  const d = new Date(utc);
  return d.getUTCFullYear() === year && d.getUTCMonth() === month - 1 && d.getUTCDate() === day;
}

function formatIsoDate(year: number, month: number, day: number): IsoDate {
  return `${year}-${pad2(month)}-${pad2(day)}`;
}

const isoDateArb: fc.Arbitrary<IsoDate> = fc
  .tuple(
    fc.integer({ min: 1990, max: 2040 }),
    fc.integer({ min: 1, max: 12 }),
    fc.integer({ min: 1, max: 31 }),
  )
  .filter(([y, m, d]) => isValidIsoDate(y, m, d))
  .map(([y, m, d]) => formatIsoDate(y, m, d));

const isoMonthArb: fc.Arbitrary<IsoMonth> = fc
  .tuple(fc.integer({ min: 1990, max: 2040 }), fc.integer({ min: 1, max: 12 }))
  .map(([y, m]) => `${y}-${pad2(m)}` as IsoMonth);

function monthAfter(month: IsoMonth): IsoMonth {
  const [y, m] = month.split('-').map(Number);
  if (m === 12) return `${y + 1}-01` as IsoMonth;
  return `${y}-${pad2(m + 1)}` as IsoMonth;
}

describe('dateMath — property tests', () => {
  it('shiftMonths(d, 0) === d', () => {
    fc.assert(
      fc.property(isoDateArb, (d) => {
        return shiftMonths(d, 0) === d;
      }),
    );
  });

  it('shiftMonths returns YYYY-MM-DD', () => {
    fc.assert(
      fc.property(isoDateArb, fc.integer({ min: -240, max: 240 }), (d, months) => {
        return ISO_DATE_RE.test(shiftMonths(d, months));
      }),
    );
  });

  it('daysBetween is antisymmetric', () => {
    fc.assert(
      fc.property(isoDateArb, isoDateArb, (a, b) => {
        return daysBetween(a, b) === -daysBetween(b, a);
      }),
    );
  });

  it('daysBetween is reflexive on zero', () => {
    fc.assert(
      fc.property(isoDateArb, (d) => {
        return daysBetween(d, d) === 0;
      }),
    );
  });

  it('floorYearsBetween is non-negative', () => {
    fc.assert(
      fc.property(isoDateArb, isoDateArb, (a, b) => {
        return floorYearsBetween(a, b) >= 0;
      }),
    );
  });

  it('enumerateMonths is empty when from > to', () => {
    fc.assert(
      fc.property(isoMonthArb, isoMonthArb, (from, to) => {
        if (from <= to) return true;
        return enumerateMonths(from, to).length === 0;
      }),
    );
  });

  it('enumerateMonths is consecutive and bounded when from <= to', () => {
    fc.assert(
      fc.property(isoMonthArb, isoMonthArb, (from, to) => {
        if (from > to) return true;
        const months = enumerateMonths(from, to);
        if (months.length === 0) return false;
        if (months[0] !== from || months[months.length - 1] !== to) return false;
        for (let i = 1; i < months.length; i++) {
          const prev = months[i - 1];
          if (prev === undefined || monthAfter(prev) !== months[i]) return false;
        }
        return true;
      }),
    );
  });

  it('shiftMonths roll-forward keeps day at 1 or not above original when day > 28', () => {
    fc.assert(
      fc.property(
        isoDateArb.filter((d) => Number(d.slice(8, 10)) > 28),
        (d) => {
          const shifted = shiftMonths(d, 1);
          const newDay = Number(shifted.slice(8, 10));
          const oldDay = Number(d.slice(8, 10));
          return newDay === 1 || newDay <= oldDay;
        },
      ),
    );
  });
});
