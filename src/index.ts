/**
 * Public entry point for the `igcp-aforro` library.
 *
 * Re-exports every supported value and type with **named exports only** —
 * there is no default export so consumers (and `starlight-typedoc`) get a
 * stable, tree-shakable API surface.
 *
 * The two main calls are:
 *
 * - {@link simulate} — quarterly-compounding simulator for a supported cohort.
 * - {@link getCurrentRate} / {@link getRateForCohort} / {@link getRateTable}
 *   — rate lookups that mirror the IGCP-published methodology.
 *
 * For a single discriminated result instead of `try`/`catch`, use the
 * non-throwing {@link safeSimulate}, {@link safeSimulatePortfolio},
 * {@link safeSimulateRedemption}, {@link safeGetCurrentRate},
 * {@link safeGetRateForCohort}, and {@link safeGetRateTable} entry points
 * ({@link SafeResult}).
 *
 * Money and rate values returned by this library are decimal strings (not
 * JS `number`s) so callers can JSON-serialize them without precision loss;
 * see the per-type docs for the exact format.
 *
 * @example
 * ```ts
 * import { simulate, Series } from 'igcp-aforro';
 *
 * const result = simulate({
 *   series: Series.F,
 *   subscriptionDate: '2024-03-15',
 *   units: 1000,
 * });
 *
 * console.log(result.currentValueNet); // e.g. "1078.42"
 * ```
 *
 * @packageDocumentation
 */

/**
 * CalVer version of this build, formatted as `YYYY.MMDD.PATCH`.
 *
 * Bumped by the release workflow; useful when you want to log which
 * library version produced a given simulation result.
 */
export const VERSION = '2026.804.1';

export { simulate } from './core/calculator.js';
export { simulatePortfolio } from './core/portfolio.js';
export { simulateRedemption } from './core/redemption.js';
export {
  getPortfolioTaxYearRollup,
  getTaxYearRollup,
  getTaxYearRollupFromSchedule,
  rollupTaxYears,
  rollupTaxYearsFromPortfolio,
  rollupTaxYearsFromSchedule,
} from './core/taxYear.js';
export {
  safeGetCurrentRate,
  safeGetRateForCohort,
  safeGetRateTable,
  safeGetTaxYearRollup,
  safeRollupTaxYears,
  safeRollupTaxYearsFromPortfolio,
  safeSimulate,
  safeSimulatePortfolio,
  safeSimulateRedemption,
} from './safe.js';
export type { SafeFailure, SafeResult, SafeSuccess } from './safe.js';
export {
  annualRatesByPremiumTier,
  getCurrentRate,
  getRateForCohort,
  getRateTable,
} from './core/rates.js';
export { Series, getSeries, listSeries } from './core/series.js';
export type {
  CohortRateInput,
  CohortRateResult,
  CohortTaxYearRollup,
  CurrentRateInput,
  IsoDate,
  IsoMonth,
  MonthlyBaseRate,
  PremiumTier,
  PremiumTierAnnualRate,
  PortfolioResult,
  PortfolioSeriesBreakdown,
  PortfolioSubscription,
  PortfolioTaxYearRollup,
  RedemptionInput,
  RedemptionResult,
  RateEntry,
  RateTableInput,
  ScheduleRow,
  SeriesCode,
  SeriesMetadata,
  SimulateInput,
  SimulatePortfolioInput,
  SimulateResult,
  TaxYearRollup,
  TaxYearRollupFromScheduleInput,
  TaxYearRollupInput,
} from './types/domain.js';
