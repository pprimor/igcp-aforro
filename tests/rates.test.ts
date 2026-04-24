import { describe, expect, it } from 'vitest';
import { getCurrentRate, getRateForCohort, getRateTable } from '../src/core/rates.js';
import { getSeries, premiumTierForYear } from '../src/core/series.js';

/**
 * Tier-boundary regression tests for the Série F permanence premium and the
 * cohort-rate composition surface.
 *
 * The IGCP technical sheet defines the tiers inclusively on both ends:
 *
 *   year 1        → +0.00% (no premium during the first contract year)
 *   years 2 – 5   → +0.25%
 *   years 6 – 9   → +0.50%
 *   years 10 – 11 → +1.00%
 *   years 12 – 13 → +1.50%
 *   years 14 – 15 → +1.75%
 *
 * "Year n" is the n-th contract year, 1-based: year 1 runs from the
 * subscription date to the first anniversary, year 2 from the first to the
 * second anniversary, and so on. The cohort-rate path resolves the tier as
 * `premiumTierForYear(yearsSince + 1)` because `yearsSince` is the *floor*
 * count of complete anniversaries.
 */

const serieF = getSeries('F');

describe('premiumTierForYear', () => {
  // Each row is (contract year, expected ratePct, expected fromYear-toYear).
  // Boundary years are picked at the two endpoints of every tier so a
  // one-off in the lookup loop trips at least two assertions.
  const cases: ReadonlyArray<{ year: number; ratePct: string; from: number; to: number }> = [
    { year: 1, ratePct: '0.00', from: 1, to: 1 },
    { year: 2, ratePct: '0.25', from: 2, to: 5 },
    { year: 5, ratePct: '0.25', from: 2, to: 5 },
    { year: 6, ratePct: '0.50', from: 6, to: 9 },
    { year: 9, ratePct: '0.50', from: 6, to: 9 },
    { year: 10, ratePct: '1.00', from: 10, to: 11 },
    { year: 11, ratePct: '1.00', from: 10, to: 11 },
    { year: 12, ratePct: '1.50', from: 12, to: 13 },
    { year: 13, ratePct: '1.50', from: 12, to: 13 },
    { year: 14, ratePct: '1.75', from: 14, to: 15 },
    { year: 15, ratePct: '1.75', from: 14, to: 15 },
  ];

  for (const { year, ratePct, from, to } of cases) {
    it(`year ${year} → +${ratePct}% (tier y${from}-y${to})`, () => {
      const tier = premiumTierForYear(serieF, year);
      expect(tier.ratePct).toBe(ratePct);
      expect(tier.fromYear).toBe(from);
      expect(tier.toYear).toBe(to);
    });
  }

  it('throws past maturity (year 16)', () => {
    expect(() => premiumTierForYear(serieF, 16)).toThrow(/No premium tier defined for year 16/);
  });

  it('throws on year 0 (defensive guard against bad floor math)', () => {
    expect(() => premiumTierForYear(serieF, 0)).toThrow(/No premium tier defined for year 0/);
  });
});

describe('getRateForCohort — premium-tier boundary integration', () => {
  // The same subscription date is exercised across consecutive contract
  // years so the only thing changing between assertions is the resolved
  // permanence premium. Quarterly anchoring is on day-of-month 15 of
  // 2024-03-15, which dodges every TARGET2 holiday + month-end edge case
  // and keeps the test focused on tier resolution.
  const subscribed = '2024-03-15';

  const tierCases: ReadonlyArray<{
    asOf: string;
    contractYear: number;
    expectedTierPct: string;
    yearsSince: number;
  }> = [
    // First quarter complete, still inside contract year 1 → no premium.
    { asOf: '2024-06-16', contractYear: 1, expectedTierPct: '0.00', yearsSince: 0 },
    // One day before the 1st anniversary: quarter starts 2024-12-15, still
    // year 1, no premium yet.
    { asOf: '2025-03-14', contractYear: 1, expectedTierPct: '0.00', yearsSince: 0 },
    // Exactly on the 1st anniversary: the new quarter starts 2025-03-15,
    // floorYearsBetween → 1 → contract year 2 (+0.25%).
    { asOf: '2025-03-15', contractYear: 2, expectedTierPct: '0.25', yearsSince: 1 },
    // Mid-year-2 sanity check: still +0.25%.
    { asOf: '2026-03-14', contractYear: 2, expectedTierPct: '0.25', yearsSince: 1 },
  ];

  for (const { asOf, contractYear, expectedTierPct, yearsSince } of tierCases) {
    it(`asOf=${asOf} → tier for contract year ${contractYear} (+${expectedTierPct}%)`, () => {
      const result = getRateForCohort({
        series: 'F',
        subscriptionDate: subscribed,
        asOfDate: asOf,
      });
      expect(result.premiumTier.ratePct).toBe(expectedTierPct);
      expect(result.yearsSinceSubscription).toBe(yearsSince);
      // annualRatePct = baseRatePct + tierPct, formatted to baseRateDecimals.
      const expectedAnnual = (Number(result.baseRatePct) + Number(expectedTierPct)).toFixed(
        serieF.baseRateDecimals,
      );
      expect(result.annualRatePct).toBe(expectedAnnual);
    });
  }

  it('rejects matured cohorts (yearsSince >= maturity)', () => {
    expect(() =>
      getRateForCohort({
        series: 'F',
        subscriptionDate: '2023-06-01',
        asOfDate: '2038-06-01',
      }),
    ).toThrow(/has matured/);
  });
});

describe('getCurrentRate', () => {
  it('returns the IGCP-published rate for a fully-bundled month', () => {
    // April 2026's fixing was struck on 2026-03-27 (antepenultimate TARGET2
    // business day of March 2026); the bundled dataset covers it, so the
    // computed rate must equal the IGCP fixture entry.
    const rate = getCurrentRate({ asOfDate: '2026-04-19' });
    expect(rate.series).toBe('F');
    expect(rate.month).toBe('2026-04');
    expect(rate.fixingDate).toBe('2026-03-27');
    expect(rate.basePct).toBe('2.138');
  });

  it('returns the Série E rate (E3 + 1pp, unclamped) for the same month', () => {
    // Série E shares the fixing date and 10-day window with Série F; the
    // only difference is the +1pp spread (and the wider [0, 3.5%] clamp).
    // April 2026's E3 mean is 2.138% (Série F's published rate, unclamped);
    // adding the 1pp spread yields 3.138%, still below the cap.
    const rate = getCurrentRate({ series: 'E', asOfDate: '2026-04-19' });
    expect(rate.series).toBe('E');
    expect(rate.month).toBe('2026-04');
    expect(rate.fixingDate).toBe('2026-03-27');
    expect(rate.basePct).toBe('3.138');
  });
});

describe('getRateTable', () => {
  it('returns one entry per month between fromMonth and toMonth (inclusive)', () => {
    const table = getRateTable({ fromMonth: '2025-04', toMonth: '2025-07' });
    expect(table.map((row) => row.month)).toEqual(['2025-04', '2025-05', '2025-06', '2025-07']);
    // basePct values must match the IGCP fixture for these months.
    expect(table[0]?.basePct).toBe('2.415');
    expect(table[1]?.basePct).toBe('2.216');
    expect(table[2]?.basePct).toBe('2.070');
    expect(table[3]?.basePct).toBe('2.011');
  });

  it('silently skips pre-subscription months', () => {
    // Asking for a window that straddles the Série F start date (2023-06)
    // returns only the months for which a fixing exists -- earlier months
    // are dropped, not raised as an error, so callers can ask for an open
    // historical range without special-casing the floor.
    const table = getRateTable({ fromMonth: '2023-01', toMonth: '2023-08' });
    // 2023-06 is also dropped because its fixingDate (the antepenultimate
    // TARGET2 business day of May 2023) falls *before* the series'
    // subscription-start guard -- tracked in the baseRate followup subplan.
    expect(table.map((row) => row.month)).toEqual(['2023-07', '2023-08']);
  });

  it('rejects fromMonth > toMonth at the schema boundary', () => {
    expect(() => getRateTable({ fromMonth: '2025-12', toMonth: '2025-01' })).toThrow();
  });
});

/**
 * Série E cohort-rate composition.
 *
 * Série E uses a different premium-tier ladder (years 2-5 → +0.50%, 6-10 →
 * +1.00%) and a different base-rate formula (`E3 + 1%` clamped into
 * `[0%, 3.5%]`) than Série F. This block locks the composite annual rate
 * for a cohort that has crossed the year-5 → year-6 premium boundary, and
 * lands on a quarter whose base rate is comfortably inside the clamp window
 * so the value can be derived from the bundled Euribor dataset.
 *
 * Cohort: subscribed 2018-01-15 (a few months after Série E opened on
 * 2017-11-01), evaluated at 2026-04-19. Quarter 33 starts on 2026-04-15
 * and the contract is in year 9, deep inside the +1.00% premium tier.
 */
describe('getRateForCohort — Série E', () => {
  it('resolves the +1.00% premium tier for a year-9 cohort', () => {
    const result = getRateForCohort({
      series: 'E',
      subscriptionDate: '2018-01-15',
      asOfDate: '2026-04-19',
    });
    expect(result.series).toBe('E');
    expect(result.quarterStartDate).toBe('2026-04-15');
    expect(result.quarterEndDate).toBe('2026-07-15');
    expect(result.quarterIndex).toBe(33);
    expect(result.yearsSinceSubscription).toBe(8);
    expect(result.premiumTier).toEqual({ fromYear: 6, toYear: 10, ratePct: '1.00' });
    // E3 mean for 2026-04 = 2.138% (Série F's published rate, unclamped),
    // +1pp spread = 3.138% — Série E's base rate. Annual rate is base +
    // permanence premium = 3.138% + 1.00% = 4.138%.
    expect(result.baseRatePct).toBe('3.138');
    expect(result.annualRatePct).toBe('4.138');
  });

  it('rejects subscription dates after Série E closed (2023-06-01)', () => {
    expect(() =>
      getRateForCohort({
        series: 'E',
        subscriptionDate: '2023-06-02',
        asOfDate: '2026-04-19',
      }),
    ).toThrow(/Série E subscriptions closed/);
  });
});
