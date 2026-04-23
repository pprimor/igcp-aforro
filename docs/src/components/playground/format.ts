const EUR_FORMATTER = new Intl.NumberFormat('en-IE', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const PERCENT_FORMATTER = new Intl.NumberFormat('en-IE', {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 4,
});

/**
 * Formats a decimal-string EUR amount (e.g. "1078.42") for display.
 * Returns "—" for empty/invalid input so the UI never renders "NaN".
 */
export function formatEur(value: string | undefined | null): string {
  if (!value) return '—';
  const n = Number(value);
  if (!Number.isFinite(n)) return value;
  return EUR_FORMATTER.format(n);
}

/**
 * Formats a rate expressed as a decimal fraction (e.g. "0.02750" → "2.75%").
 */
export function formatRateFraction(value: string | undefined | null): string {
  if (!value) return '—';
  const n = Number(value);
  if (!Number.isFinite(n)) return value;
  return PERCENT_FORMATTER.format(n);
}

/**
 * Formats a rate expressed as a percent string (e.g. "2.750" → "2.75%").
 */
export function formatRatePct(value: string | undefined | null): string {
  if (!value) return '—';
  const n = Number(value);
  if (!Number.isFinite(n)) return value;
  return PERCENT_FORMATTER.format(n / 100);
}

/**
 * Today's date as a `YYYY-MM-DD` ISO string in UTC, matching the convention
 * the library uses internally for `asOfDate` defaults.
 */
export function todayIsoUtc(): string {
  const now = new Date();
  const y = now.getUTCFullYear();
  const m = String(now.getUTCMonth() + 1).padStart(2, '0');
  const d = String(now.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Projects net interest from a decimal-string gross amount and an IRS rate.
 *
 * Lives in the UI layer because `accruedSinceLastCapitalization` is gross by
 * design — IRS is only withheld at capitalization. Rounded to cents so the
 * displayed projection matches what `simulate` would later book.
 */
export function projectNet(gross: string, irsRate: number): string {
  const n = Number(gross);
  if (!Number.isFinite(n)) return '0.00';
  return (n * (1 - irsRate)).toFixed(2);
}
