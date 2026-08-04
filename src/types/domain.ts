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
 * Identifier for a Treasury Certificate series. In scope: `'A'` and `'B'`
 * (legacy perpetual, subscriptions closed), `'C'` (closed), `'D'`, `'E'`
 * (both closed to new subscriptions) and `'F'` (currently open).
 */
export type SeriesCode = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

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
  /** Minimum whole-calendar-month holding period before redemption is allowed. */
  readonly minimumHoldingMonths: number;
  /**
   * Years from subscription to contractual maturity, or `null` for perpetual
   * certificates (Série B: no redemption date until the holder redeems).
   */
  readonly maturityYears: number | null;
  /**
   * When {@link maturityYears} is `null`, caps cohort rows in `rates.json`
   * so the artifact stays bounded (quarters beyond this are omitted).
   */
  readonly ratesJsonMaxContractYears?: number;
  readonly subscriptionStartDate: IsoDate;
  /**
   * Last date on which subscriptions were accepted, inclusive. `undefined`
   * means subscriptions are still open. Set for closed series such as Série E
   * (closed by Portaria n.º 149-A/2023, 2 June 2023).
   */
  readonly subscriptionEndDate?: IsoDate;
  readonly minUnits: number;
  readonly maxUnits: number;
  /**
   * Nominal EUR represented by one whole certificate unit (`units` input).
   * Séries B–F use `1` (one unit = €1). Série A uses `0.34916` per Decreto
   * 43.454/1960 (face value of one certificate).
   */
  readonly unitFaceValueEur: string;
  readonly baseRateClampMinPct: string;
  readonly baseRateClampMaxPct: string;
  /**
   * Multiplier applied to the **rounded** Euribor 3M mean (after the 10-day
   * average is rounded to {@link baseRateDecimals}). Séries D/E/F use the
   * default implicit `1`; Série C uses `0.85` per Portaria n.º 73-A/2008 and
   * n.º 230-A/2009.
   */
  readonly baseRateEuriborMultiplierPct?: string;
  /**
   * Optional piecewise additive offset (percentage points) after the scaled
   * rounded mean, keyed by the calendar month of the **published** base rate
   * (`YYYY-MM`). When set, the row with the greatest `effectiveFromMonth`
   * that is still `<=` the target month wins. Série C uses this for the
   * `0,85 × E3 − 0,25` → `0,85 × E3 + 0,25` transition (March 2009).
   * When absent, {@link baseRateSpreadPct} is the sole additive term after
   * multiplication (with multiplier defaulting to `1`).
   */
  readonly baseRatePostMeanOffsets?: readonly {
    readonly effectiveFromMonth: IsoMonth;
    readonly offsetPct: string;
  }[];
  /**
   * Permanence-premium tiers that apply to quarters with `quarterStartDate`
   * strictly before {@link premiumTierModernizationDate}. Only Série C
   * carries a legacy table (Portaria n.º 73-A/2008) before Portaria n.º
   * 230-A/2009.
   */
  readonly premiumTiersLegacy?: readonly PremiumTier[];
  /**
   * First `quarterStartDate` (inclusive) that uses {@link premiumTiers}
   * instead of {@link premiumTiersLegacy} for series that define a legacy
   * table. ISO `YYYY-MM-DD` string compared lexicographically to dates.
   */
  readonly premiumTierModernizationDate?: IsoDate;
  /**
   * Additive spread (in percentage points, as a decimal string) applied to
   * the rounded Euribor 3M mean **after** {@link baseRateEuriborMultiplierPct}
   * (default `1`) **before** clamping into the
   * `[baseRateClampMinPct, baseRateClampMaxPct]` window. Série F uses
   * `"0"` (the published formula has no spread); Série E uses `"1"`
   * (the published formula is `E3 + 1%`). Série C leaves this at `"0"` and
   * uses {@link baseRatePostMeanOffsets} instead.
   */
  readonly baseRateSpreadPct: string;
  readonly baseRateDecimals: number;
  /**
   * Decimal places retained for the per-unit net quote after each
   * capitalization. Séries C, D, E and F use 5 decimals to mirror IGCP's published
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
 * holding's booked net value is then `round(units × unitFaceValueEur × unitQuoteAfter, 2)`.
 *
 * Gross interest, IRS withholding, and net interest are booked in real EUR at
 * the holding level each quarter:
 *
 * - `interestNet` is the movement in the booked value, `balanceAfter` less the
 *   previous quarter's. IGCP credits nothing directly — it moves the quote — so
 *   the value's movement *is* what was credited, and net interest computed any
 *   other way would not sum to the value the same result reports.
 * - `interestGross` is cent-rounded from
 *   `units × unitFaceValueEur × previousUnitQuote × quarterlyRate`.
 * - `irsWithheld` is `interestGross − interestNet`: the gross less what reached
 *   the holder. It is deliberately **not** `irsRate × interestGross`. An IGCP
 *   declaration under CIRS Article 119º nº 3 reports 55,95 EUR withheld against
 *   199,75 EUR of gross income for a 2025 tax year, where 28% of that gross is
 *   55,93 — so the rate is not what IGCP applies to arrive at the withholding.
 *
 * As a consequence, schedule rows reconcile exactly with the matching
 * `totalInterest*` headline fields **and** with `currentValueNet`.
 *
 * One caveat, reachable only through an `irsRate` override: the quote is rounded
 * per unit at five decimals while the gross is rounded to cents over the whole
 * holding, so the two carry a residue that scales with the unit count. A real
 * 28% withholding absorbs it invisibly. A rate low enough for the residue to
 * exceed the withholding would make `irsWithheld` negative, which cannot happen,
 * so there the gross gives way instead and equals `interestNet` — with nothing
 * withheld, the gross is what was credited.
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
 * - `units` — whole certificate count. Nominal EUR principal is
 *   `units × series.unitFaceValueEur` (Série A: €0.34916 per unit). Must respect
 *   the series' `[minUnits, maxUnits]` window.
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
 * One subscription cohort inside a portfolio simulation.
 *
 * This mirrors {@link SimulateInput} but moves `asOfDate` and
 * `includeSchedule` to portfolio level so all cohorts share the same
 * reporting date and schedule toggle.
 */
export interface PortfolioSubscription {
  readonly series: SeriesCode;
  readonly subscriptionDate: IsoDate;
  readonly units: number;
  readonly irsRate?: number;
}

/**
 * Inputs accepted by {@link simulatePortfolio}.
 *
 * - `subscriptions` must contain at least one cohort.
 * - `asOfDate` defaults to today (UTC) when omitted, matching
 *   {@link simulate}.
 * - `includeSchedule` applies to every embedded cohort simulation.
 */
export interface SimulatePortfolioInput {
  readonly subscriptions: readonly PortfolioSubscription[];
  readonly asOfDate?: IsoDate;
  readonly includeSchedule?: boolean;
}

/**
 * Inputs accepted by {@link simulateRedemption}.
 *
 * `unitsToRedeem` defaults to full redemption (`units`) when omitted. `irsRate`
 * is forwarded to the embedded {@link simulate} call so the schedule uses the
 * same withholding assumptions as caller-defined what-if scenarios.
 */
export interface RedemptionInput {
  readonly series: SeriesCode;
  readonly subscriptionDate: IsoDate;
  readonly units: number;
  readonly redemptionDate: IsoDate;
  readonly unitsToRedeem?: number;
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
   * `round(units × unitFaceValueEur × currentUnitQuote, 2)`, matching what aforro.net displays
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
  /** `null` when the series is perpetual (Série A or B). */
  readonly maturityDate: IsoDate | null;
  /**
   * Gross interest accumulated since the last capitalization, when
   * `asOfDate` falls strictly inside an open quarter; `"0.00"` otherwise.
   *
   * **This is a library convention, not an IGCP-published number.** It is
   * computed as `unitQuote × quarterlyRate × elapsedDays / totalDays × (units × unitFaceValueEur)`
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
 * Per-series aggregate row returned by {@link simulatePortfolio}.
 *
 * Values are sums of already-cent-quantized cohort totals from the matching
 * series, preserving exact reconciliation with `cohorts`.
 */
export interface PortfolioSeriesBreakdown {
  readonly series: SeriesCode;
  readonly units: number;
  readonly cohortCount: number;
  readonly valueNet: string;
  readonly interestNet: string;
  readonly irsWithheld: string;
}

/**
 * Result returned by {@link simulatePortfolio}.
 *
 * Portfolio totals are built by summing cent-quantized cohort fields, so each
 * `total*` field reconciles byte-for-byte with the corresponding sum across
 * `cohorts`.
 */
export interface PortfolioResult {
  readonly asOfDate: IsoDate;
  readonly totalUnits: number;
  readonly totalValueGross: string;
  readonly totalValueNet: string;
  readonly totalInterestGross: string;
  readonly totalInterestNet: string;
  readonly totalIrsWithheld: string;
  readonly totalAccruedGross: string;
  readonly allMatured: boolean;
  readonly anyMatured: boolean;
  readonly bySeries: readonly PortfolioSeriesBreakdown[];
  readonly cohorts: readonly SimulateResult[];
}

/**
 * Result returned by {@link simulateRedemption}.
 *
 * Mid-quarter accrued interest is surfaced as `forfeitedAccruedGross` for the
 * redeemed slice and is **not** added to `redemptionValue`, matching IGCP's
 * capitalization-only interest booking.
 */
export interface RedemptionResult {
  readonly series: SeriesCode;
  readonly subscriptionDate: IsoDate;
  readonly redemptionDate: IsoDate;
  readonly units: number;
  readonly unitsToRedeem: number;
  readonly unitQuoteAtRedemption: string;
  readonly redemptionValue: string;
  readonly remainingUnits: number;
  readonly remainingValueAtRedemption: string;
  readonly forfeitedAccruedGross: string;
  readonly earliestRedemptionDate: IsoDate;
  readonly simulation: SimulateResult;
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
 * Annual gross rate for one permanence-premium band: {@link MonthlyBaseRate.basePct}
 * plus the tier's `premiumPct`, rounded like {@link getRateForCohort}.
 */
export interface PremiumTierAnnualRate {
  readonly fromContractYear: number;
  readonly toContractYear: number;
  readonly premiumPct: string;
  readonly annualRatePct: string;
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

/** Calendar-year totals from capitalized schedule rows only. */
export interface TaxYearRollup {
  readonly taxYear: number;
  readonly interestGross: string;
  readonly irsWithheld: string;
  readonly interestNet: string;
  readonly capitalizationCount: number;
}

/** Per-cohort slice when rolling up a portfolio (audit trail). */
export interface CohortTaxYearRollup extends TaxYearRollup {
  readonly series: SeriesCode;
  readonly subscriptionDate: IsoDate;
}

export interface PortfolioTaxYearRollup extends TaxYearRollup {
  readonly cohortCount: number;
  readonly cohorts: readonly CohortTaxYearRollup[];
}

export interface TaxYearRollupInput {
  readonly taxYear: number;
}

export interface TaxYearRollupFromScheduleInput {
  readonly schedule: readonly ScheduleRow[];
  readonly taxYear: number;
}
