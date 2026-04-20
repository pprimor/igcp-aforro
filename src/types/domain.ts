/**
 * Domain types for the IGCP Aforro library.
 *
 * Money and rate values are represented as decimal strings to preserve
 * precision across JSON boundaries. Internally, computations use `big.js`.
 *
 * Naming convention:
 * - `*Pct` fields hold percentage values as decimal strings, e.g. "2.500" means 2.5%.
 * - `annualRate` / `quarterlyRate` fields hold rate values as decimal fractions,
 *   e.g. "0.02750" means 2.75% per annum.
 */

/**
 * ISO date string in `YYYY-MM-DD` format.
 *
 * This is a type-level alias only; runtime validation lives in `src/types/schemas.ts`.
 */
export type IsoDate = string;

/** ISO month string in `YYYY-MM` format. */
export type IsoMonth = string;

/**
 * Identifier for a Treasury Certificate series. Only `'F'` is in scope for v1;
 * additional codes (`'A' | 'B' | 'D' | 'E'`) will be added without restructuring.
 */
export type SeriesCode = 'F';

/**
 * One permanence-premium tier. Tiers are 1-indexed and inclusive on both ends:
 * `fromYear` and `toYear` refer to the n-th anniversary year of the subscription.
 *
 * The plan defines, for Série F: years 2-5 → +0.25%, 6-9 → +0.50%,
 * 10-11 → +1.00%, 12-13 → +1.50%, 14-15 → +1.75%. Year 1 carries no premium.
 */
export interface PremiumTier {
  readonly fromYear: number;
  readonly toYear: number;
  readonly ratePct: string;
}

/** Capitalization frequency. Only quarterly is currently supported. */
export type CapitalizationFrequency = 'quarterly';

/**
 * Static, IGCP-published parameters that define a series. These never change for
 * an existing series; new series are added by registering additional metadata
 * objects in `src/core/series.ts`.
 */
export interface SeriesMetadata {
  readonly code: SeriesCode;
  readonly name: string;
  readonly maturityYears: number;
  readonly subscriptionStartDate: IsoDate;
  readonly minUnits: number;
  readonly maxUnits: number;
  readonly baseRateClampMinPct: string;
  readonly baseRateClampMaxPct: string;
  readonly baseRateDecimals: number;
  readonly euribor3mAveragingDays: number;
  readonly capitalizationFrequency: CapitalizationFrequency;
  readonly defaultIrsRate: string;
  readonly premiumTiers: readonly PremiumTier[];
}

/** A single Euribor 3M (or analogous index) observation. */
export interface RateEntry {
  readonly date: IsoDate;
  readonly ratePct: string;
}

/** One row of the quarterly capitalization schedule produced by `simulate()`. */
export interface ScheduleRow {
  readonly quarterEndDate: IsoDate;
  readonly annualRate: string;
  readonly quarterlyRate: string;
  readonly interestGross: string;
  readonly irsWithheld: string;
  readonly interestNet: string;
  readonly balanceAfter: string;
  readonly premiumTier: PremiumTier;
}

export interface SimulateInput {
  readonly series: SeriesCode;
  readonly subscriptionDate: IsoDate;
  readonly units: number;
  readonly asOfDate?: IsoDate;
  readonly includeSchedule?: boolean;
  readonly irsRate?: number;
}

export interface SimulateResult {
  readonly series: SeriesCode;
  readonly subscriptionDate: IsoDate;
  readonly asOfDate: IsoDate;
  readonly units: number;
  /** Effective IRS rate applied this run, formatted to 4 decimals. */
  readonly irsRate: string;
  /**
   * Principal + sum of capitalized **gross** interest. Excludes any partial
   * interest accrued since the last capitalization (see
   * {@link accruedSinceLastCapitalization}).
   */
  readonly currentValueGross: string;
  /**
   * Principal + sum of capitalized **net** interest (i.e. the running
   * balance after every capitalization), matching what a holder would see on
   * an IGCP statement on the as-of date. Excludes accrued.
   */
  readonly currentValueNet: string;
  readonly totalInterestGross: string;
  readonly totalInterestNet: string;
  readonly totalIrsWithheld: string;
  readonly matured: boolean;
  readonly maturityDate: IsoDate;
  /**
   * Gross interest accumulated since the last capitalization, when
   * `asOfDate` falls strictly inside an open quarter; `"0.00"` otherwise.
   *
   * **This is a library convention, not an IGCP-published number.** It is
   * computed as `balance × quarterlyRate × elapsedDays / totalDays`
   * (calendar-day pro-rata of the would-be quarterly interest), quantized to
   * cents with banker's rounding. IRS is **not** withheld on this amount —
   * withholding only occurs at capitalization, so callers projecting a
   * "value if redeemed today" should subtract the expected withholding
   * themselves (`accrued × irsRate`).
   *
   * Surface this as a separate informational field rather than folding it
   * into `currentValue*` / `totalInterest*` so audit trails against IGCP
   * statements stay clean.
   */
  readonly accruedSinceLastCapitalization: string;
  readonly seriesMetadata: SeriesMetadata;
  readonly schedule?: readonly ScheduleRow[];
}

/**
 * Inputs for resolving the annual rate that applies to a given cohort
 * (subscription date) for a given quarter (identified by `asOfDate`).
 */
export interface CohortRateInput {
  readonly series: SeriesCode;
  readonly subscriptionDate: IsoDate;
  readonly asOfDate?: IsoDate;
}

export interface CohortRateResult {
  readonly series: SeriesCode;
  readonly subscriptionDate: IsoDate;
  readonly asOfDate: IsoDate;
  readonly quarterStartDate: IsoDate;
  readonly quarterEndDate: IsoDate;
  readonly quarterIndex: number;
  readonly yearsSinceSubscription: number;
  readonly baseRatePct: string;
  readonly premiumTier: PremiumTier;
  readonly annualRatePct: string;
}

/**
 * The IGCP-published monthly base rate for a series — the building block both
 * `getCurrentRate` and `getRateTable` return. `month` is the calendar month for
 * which the rate is published; `fixingDate` is the antepenultimate TARGET2
 * business day of the previous month on which the 10-day Euribor 3M average
 * was struck.
 */
export interface MonthlyBaseRate {
  readonly series: SeriesCode;
  readonly month: IsoMonth;
  readonly fixingDate: IsoDate;
  readonly basePct: string;
}

export interface CurrentRateInput {
  readonly series?: SeriesCode;
  readonly asOfDate?: IsoDate;
}

export interface RateTableInput {
  readonly series?: SeriesCode;
  readonly fromMonth: IsoMonth;
  readonly toMonth: IsoMonth;
}
