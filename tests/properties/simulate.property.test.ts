import fc from 'fast-check';
import { describe, expect, it } from 'vitest';
import { simulate } from '../../src/core/calculator.js';
import { daysBetween, pad2, parseIsoDateParts, shiftMonths } from '../../src/core/dateMath.js';
import { simulatePortfolio } from '../../src/core/portfolio.js';
import { toBig } from '../../src/core/money.js';
import type { IsoDate, SimulateInput } from '../../src/types/domain.js';
import { assertSimulateInvariants } from '../helpers/simulateInvariants.js';
import { syntheticEuriborFlat } from '../helpers/syntheticEuribor.js';
import './setup.js';

const PROPERTY_EURIBOR = syntheticEuriborFlat('2015-01-01', '2040-12-31', '2.500');

function requireAsOfDate(input: SimulateInput): IsoDate {
  const { asOfDate } = input;
  if (asOfDate === undefined) {
    throw new Error('property input must include asOfDate');
  }
  return asOfDate;
}
const SERIE_F_OPEN = '2023-06-01';
const EURIBOR_END = '2040-12-31';

function isValidIsoDate(year: number, month: number, day: number): boolean {
  if (month < 1 || month > 12 || day < 1) return false;
  const utc = Date.UTC(year, month - 1, day);
  const d = new Date(utc);
  return d.getUTCFullYear() === year && d.getUTCMonth() === month - 1 && d.getUTCDate() === day;
}

function formatIsoDate(year: number, month: number, day: number): IsoDate {
  return `${year}-${pad2(month)}-${pad2(day)}`;
}

function addDays(date: IsoDate, offset: number): IsoDate {
  const { year, month, day } = parseIsoDateParts(date);
  const t = new Date(Date.UTC(year, month - 1, day + offset));
  return formatIsoDate(t.getUTCFullYear(), t.getUTCMonth() + 1, t.getUTCDate());
}

function maxAsOfForSubscription(subscriptionDate: IsoDate): IsoDate {
  const eightYearsOut = shiftMonths(subscriptionDate, 96);
  return eightYearsOut <= EURIBOR_END ? eightYearsOut : EURIBOR_END;
}

/** Earliest as-of that completes the first quarter (avoids pre-subscription fixing lookups). */
function minAsOfOffsetDays(subscriptionDate: IsoDate): number {
  return daysBetween(subscriptionDate, shiftMonths(subscriptionDate, 3));
}

const subscriptionDateArb: fc.Arbitrary<IsoDate> = fc
  .tuple(
    fc.integer({ min: 2023, max: 2035 }),
    fc.integer({ min: 1, max: 12 }),
    fc.integer({ min: 1, max: 31 }),
  )
  .filter(([y, m, d]) => isValidIsoDate(y, m, d))
  .map(([y, m, d]) => formatIsoDate(y, m, d))
  .filter((d) => {
    if (d < SERIE_F_OPEN || d > '2035-01-01') return false;
    return daysBetween(d, maxAsOfForSubscription(d)) >= minAsOfOffsetDays(d);
  });

const simulateInputArb: fc.Arbitrary<SimulateInput> = fc
  .record({
    subscriptionDate: subscriptionDateArb,
    dayOffset: fc.nat(),
    units: fc.integer({ min: 100, max: 10_000 }),
    irsRate: fc.oneof(
      { weight: 7, arbitrary: fc.constant(undefined) },
      {
        weight: 3,
        arbitrary: fc.double({ min: 0, max: 0.5, noNaN: true, noDefaultInfinity: true }),
      },
    ),
  })
  .map(({ subscriptionDate, dayOffset, units, irsRate }) => {
    const maxAsOf = maxAsOfForSubscription(subscriptionDate);
    const minOffset = minAsOfOffsetDays(subscriptionDate);
    const span = daysBetween(subscriptionDate, maxAsOf);
    const slack = span - minOffset;
    const offset = minOffset + (slack === 0 ? 0 : dayOffset % (slack + 1));
    const asOfDate = addDays(subscriptionDate, offset);
    return {
      series: 'F' as const,
      subscriptionDate,
      units,
      asOfDate,
      includeSchedule: true as const,
      ...(irsRate === undefined ? {} : { irsRate }),
    };
  });

describe('simulate — property tests (Série F + synthetic Euribor)', () => {
  it('satisfies structural invariants for randomized inputs', () => {
    fc.assert(
      fc.property(simulateInputArb, (input) => {
        const result = simulate(input, { observations: PROPERTY_EURIBOR });
        assertSimulateInvariants(result, input.units);
        return true;
      }),
    );
  });
});

describe('simulatePortfolio — property tests', () => {
  it('aggregate totals equal the sum of cohort headline fields', () => {
    fc.assert(
      fc.property(fc.array(simulateInputArb, { minLength: 1, maxLength: 4 }), (inputs) => {
        const first = inputs[0];
        if (first === undefined) return true;
        const asOfDate = inputs.reduce((max, row) => {
          const date = requireAsOfDate(row);
          return date > max ? date : max;
        }, requireAsOfDate(first));
        const portfolio = simulatePortfolio(
          {
            subscriptions: inputs.map(({ series, subscriptionDate, units, irsRate }) => ({
              series,
              subscriptionDate,
              units,
              ...(irsRate === undefined ? {} : { irsRate }),
            })),
            asOfDate,
            includeSchedule: true,
          },
          { observations: PROPERTY_EURIBOR },
        );

        const sumNet = portfolio.cohorts
          .reduce((sum, row) => sum.plus(toBig(row.currentValueNet)), toBig(0))
          .toFixed(2);
        const sumInterestNet = portfolio.cohorts
          .reduce((sum, row) => sum.plus(toBig(row.totalInterestNet)), toBig(0))
          .toFixed(2);
        const sumIrs = portfolio.cohorts
          .reduce((sum, row) => sum.plus(toBig(row.totalIrsWithheld)), toBig(0))
          .toFixed(2);
        const sumUnits = portfolio.cohorts.reduce((sum, row) => sum + row.units, 0);

        expect(portfolio.totalValueNet).toBe(sumNet);
        expect(portfolio.totalInterestNet).toBe(sumInterestNet);
        expect(portfolio.totalIrsWithheld).toBe(sumIrs);
        expect(portfolio.totalUnits).toBe(sumUnits);
        return true;
      }),
    );
  });
});
