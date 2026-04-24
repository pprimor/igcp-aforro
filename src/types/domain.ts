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
 * Identifier for a Treasury Certificate series. Currently in scope: `'E'`
 * (subscriptions closed 2023-06-01) and `'F'` (currently open). Additional
 * codes (`'A' | 'B' | 'D'`) will be added without restructuring.
 */
export type SeriesCode = 'E' | 'F';

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
  /**
   * Last date on which subscriptions were accepted, inclusive. `undefined`
   * means subscriptions are still open. Set for closed series such as Série E
   * (closed by Portaria n.º 149-A/2023, 2 June 2023).
   */
  readonly subscriptionEndDate?: IsoDate;
  readonly minUnits: number;
  readonly maxUnits: number;
  readonly baseRateClampMinPct: string;
  readonly baseRateClampMaxPct: string;
  /**
   * Additive spread (in percentage points, as a decimal string) applied to
   * the rounded Euribor 3M mean **before** clamping into the
   * `[baseRateClampMinPct, baseRateClampMaxPct]` window. Série F uses
   * `"0"` (the published formula has no spread); Série E uses `"1"`
   * (the published formula is `E3 + 1%`).
   */
  readonly baseRateSpreadPct: string;
  readonly baseRateDecimals: number;
  /**
   * Decimal places retained for the per-unit net quote after each
   * capitalization. Série E and F use 5 decimals to mirror IGCP's published
   * quote precision.
   */
  readonly unitQuoteDecimals: number;
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

/**
 * One row of the quarterly capitalization schedule produced by `simulate()`.
 *
 * `simulate()` maintains a per-unit net quote and rounds it to the series'
 * {@link SeriesMetadata.unitQuoteDecimals} after each completed quarter. The
 * holding's booked net value is then `round(units × unitQuoteAfter, 2)`.
 *
 * Gross interest, IRS withholding, and net interest are booked in real EUR at
 * the holding level each quarter: `interestGross` is cent-rounded from
 * `units × previousUnitQuote × quarterlyRate`, `irsWithheld` is cent-rounded
 * from `interestGross × irsRate`, and `interestNet = interestGross −
 * irsWithheld`. As a consequence, schedule rows reconcile exactly with the
 * matching `totalInterest*` headline fields.
 */
export interface ScheduleRow {
  readonly quarterEndDate: IsoDate;
  readonly annualRate: string;
  readonly quarterlyRate: string;
  readonly interestGross: string;
  readonly irsWithheld: string;
  readonly interestNet: string;
  readonly balanceAfter: string;
  readonly unitQuoteAfter: string;
  readonly premiumTier: PremiumTier;
}

/**
 * Inputs accepted by {@link simulate}.
 *
 * - `series` — series identifier; see {@link SeriesCode}.
 * - `subscriptionDate` — the ISO-8601 date the certificate was subscribed.
 *   Must be on or after the series' `subscriptionStartDate`.
 * - `units` — principal in EUR (1 unit = €1). Must respect the series'
 *   `[minUnits, maxUnits]` window.
 * - `asOfDate` — optional ISO-8601 date the simulation should report against;
 *   defaults to today (UTC).
 * - `includeSchedule` — when `true`, populates
 *   {@link SimulateResult.schedule} with one row per completed quarter.
 *   Defaults to `false`.
 * - `irsRate` — optional override for the IRS withholding rate applied at
 *   each capitalization (e.g. `0.28` for 28%). Defaults to the series'
 *   `defaultIrsRate`.
 */
export interface SimulateInput {
  readonly series: SeriesCode;
  readonly subscriptionDate: IsoDate;
  readonly units: number;
  readonly asOfDate?: IsoDate;
  readonly includeSchedule?: boolean;
  readonly irsRate?: number;
}

/**
 * Result returned by {@link simulate}.
 *
 * Every monetary field is a banker's-rounded decimal string in EUR; rate
 * fields are decimal strings expressed as fractions (e.g. `"0.02750"` for
 * 2.75% per annum). The shape is JSON-serializable as-is.
 */
export interface SimulateResult {
  readonly series: SeriesCode;
  readonly subscriptionDate: IsoDate;
  readonly asOfDate: IsoDate;
  readonly units: number;
  /** Effective IRS rate applied this run, formatted to 4 decimals. */
  readonly irsRate: string;
  /**
   * Principal + sum of capitalized **gross** interest. Derived from a single
   * full-precision running balance and rounded to cents at serialization.
   * Gross interest itself is booked per quarter at holding-level cent
   * precision for {@link totalInterestGross}. Excludes any partial interest
   * accrued since the last capitalization (see
   * {@link accruedSinceLastCapitalization}).
   */
  readonly currentValueGross: string;
  /**
   * Current per-unit net quote after completed capitalizations, rounded to the
   * series' {@link SeriesMetadata.unitQuoteDecimals}. This is the primary
   * booked-value state used to mirror IGCP's quote model.
   */
  readonly currentUnitQuote: string;
  /**
   * Booked net value for the holding, computed as
   * `round(units × currentUnitQuote, 2)`, matching what aforro.net displays
   * for an already-booked cohort on the as-of date. Excludes accrued.
   */
  readonly currentValueNet: string;
  /**
   * Sum of every quarter's gross interest, with each quarter cent-rounded at
   * the holding level before accumulation. Reconciles exactly with the sum of
   * {@link ScheduleRow.interestGross} across {@link schedule} rows.
   */
  readonly totalInterestGross: string;
  /**
   * Sum of every quarter's net interest (`gross − IRS`), with each quarter
   * computed from cent-rounded holding-level gross interest and IRS
   * withholding before accumulation. Reconciles exactly with the sum of
   * {@link ScheduleRow.interestNet} across {@link schedule} rows.
   */
  readonly totalInterestNet: string;
  /**
   * Sum of every quarter's IRS withholding, with each quarter cent-rounded at
   * the holding level before accumulation. Reconciles exactly with the sum of
   * {@link ScheduleRow.irsWithheld} across {@link schedule} rows.
   */
  readonly totalIrsWithheld: string;
  readonly matured: boolean;
  readonly maturityDate: IsoDate;
  /**
   * Gross interest accumulated since the last capitalization, when
   * `asOfDate` falls strictly inside an open quarter; `"0.00"` otherwise.
   *
   * **This is a library convention, not an IGCP-published number.** It is
   * computed as `balance × quarterlyRate × elapsedDays / totalDays`
   * (calendar-day pro-rata of the would-be quarterly interest) at full
   * precision, and rounded to cents only here at serialization. IRS is
   * **not** withheld on this amount — withholding only occurs at
   * capitalization, so callers projecting a "value if redeemed today" should
   * subtract the expected withholding themselves (`accrued × irsRate`).
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

/**
 * Result returned by `getRateForCohort`.
 *
 * Surfaces both the composite annual rate (`annualRatePct`) and its
 * components (`baseRatePct`, `premiumTier`) along with the quarter window
 * they apply to, so callers can audit how the rate was derived without
 * re-running the math themselves.
 *
 * Percentage fields are decimal strings expressed as percent values, e.g.
 * `"2.750"` means 2.75% per annum.
 */
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

/**
 * Inputs accepted by `getCurrentRate`.
 *
 * Both fields are optional: `series` defaults to `'F'` (the currently-open
 * series) and `asOfDate` defaults to today (UTC).
 */
export interface CurrentRateInput {
  readonly series?: SeriesCode;
  readonly asOfDate?: IsoDate;
}

/**
 * Inputs accepted by `getRateTable`.
 *
 * Returns one {@link MonthlyBaseRate} per calendar month in
 * `[fromMonth, toMonth]` (inclusive) for which the bundled Euribor 3M
 * dataset can resolve a fixing. `series` defaults to `'F'`.
 */
export interface RateTableInput {
  readonly series?: SeriesCode;
  readonly fromMonth: IsoMonth;
  readonly toMonth: IsoMonth;
}
