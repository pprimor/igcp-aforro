import type { PremiumTier, SeriesCode, SeriesMetadata } from '../types/domain.js';

/**
 * Série F — IGCP-published parameters.
 *
 * Source: IGCP technical sheet ("ficha técnica") for Certificados de Aforro
 * Série F. The premium tiers, maturity, account limits, and base-rate clamp
 * are all reproduced verbatim; the IRS withholding default is the standard
 * 28% PIT rate applied to interest income at each capitalization.
 *
 * Year 1 is included as an explicit zero-premium tier so that schedule rows
 * can always carry a non-null `premiumTier` without special-casing.
 */
const SERIE_F_PREMIUM_TIERS: readonly PremiumTier[] = [
  { fromYear: 1, toYear: 1, ratePct: '0.00' },
  { fromYear: 2, toYear: 5, ratePct: '0.25' },
  { fromYear: 6, toYear: 9, ratePct: '0.50' },
  { fromYear: 10, toYear: 11, ratePct: '1.00' },
  { fromYear: 12, toYear: 13, ratePct: '1.50' },
  { fromYear: 14, toYear: 15, ratePct: '1.75' },
];

const SERIE_F_METADATA: SeriesMetadata = {
  code: 'F',
  name: 'Série F',
  maturityYears: 15,
  subscriptionStartDate: '2023-06-01',
  minUnits: 100,
  maxUnits: 100_000,
  baseRateClampMinPct: '0',
  baseRateClampMaxPct: '2.5',
  baseRateDecimals: 3,
  euribor3mAveragingDays: 10,
  capitalizationFrequency: 'quarterly',
  defaultIrsRate: '0.28',
  premiumTiers: SERIE_F_PREMIUM_TIERS,
};

/**
 * Enum-like accessor for series codes. Lets callers write `Series.F` instead
 * of the bare string `'F'` while keeping the type a narrow string literal so
 * it remains JSON-serializable and tree-shakable.
 */
export const Series = {
  F: 'F',
} as const satisfies Record<string, SeriesCode>;

const SERIES_REGISTRY: Readonly<Record<SeriesCode, SeriesMetadata>> = {
  F: SERIE_F_METADATA,
};

/** Returns metadata for every series supported by this build. */
export function listSeries(): readonly SeriesMetadata[] {
  return Object.values(SERIES_REGISTRY);
}

/**
 * Returns the metadata for a given series code.
 *
 * @throws {Error} when the code is not registered.
 */
export function getSeries(code: SeriesCode): SeriesMetadata {
  const metadata = SERIES_REGISTRY[code];
  if (!metadata) {
    throw new Error(`Unknown series code: ${String(code)}`);
  }
  return metadata;
}
