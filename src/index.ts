export const VERSION = '2026.420.0';

export { getCurrentRate, getRateForCohort, getRateTable } from './core/rates.js';
export { Series, getSeries, listSeries } from './core/series.js';
export type {
  CohortRateInput,
  CohortRateResult,
  CurrentRateInput,
  IsoDate,
  IsoMonth,
  MonthlyBaseRate,
  PremiumTier,
  RateEntry,
  RateTableInput,
  ScheduleRow,
  SeriesCode,
  SeriesMetadata,
  SimulateInput,
  SimulateResult,
} from './types/domain.js';
