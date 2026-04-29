export type PlaygroundLocale = 'en' | 'pt-PT';

function localeTag(locale: PlaygroundLocale): string {
  return locale === 'pt-PT' ? 'pt-PT' : 'en-IE';
}

function getEurFormatter(locale: PlaygroundLocale): Intl.NumberFormat {
  return new Intl.NumberFormat(localeTag(locale), {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function getPercentFormatter(locale: PlaygroundLocale): Intl.NumberFormat {
  return new Intl.NumberFormat(localeTag(locale), {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  });
}

/**
 * Formats a decimal-string EUR amount (e.g. "1078.42") for display.
 * Returns "—" for empty/invalid input so the UI never renders "NaN".
 */
export function formatEur(value: string | undefined | null, locale: PlaygroundLocale): string {
  if (!value) return '—';
  const n = Number(value);
  if (!Number.isFinite(n)) return value;
  return getEurFormatter(locale).format(n);
}

/**
 * Formats a rate expressed as a decimal fraction (e.g. "0.02750" → "2.75%").
 */
export function formatRateFraction(
  value: string | undefined | null,
  locale: PlaygroundLocale,
): string {
  if (!value) return '—';
  const n = Number(value);
  if (!Number.isFinite(n)) return value;
  return getPercentFormatter(locale).format(n);
}

/**
 * Formats a rate expressed as a percent string (e.g. "2.750" → "2.75%").
 */
export function formatRatePct(value: string | undefined | null, locale: PlaygroundLocale): string {
  if (!value) return '—';
  const n = Number(value);
  if (!Number.isFinite(n)) return value;
  return getPercentFormatter(locale).format(n / 100);
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

/**
 * Whole UTC days between two `YYYY-MM-DD` ISO dates. Returns `null` if either
 * input cannot be parsed, so callers can fall back gracefully.
 */
export function daysBetween(fromIso: string, toIso: string): number | null {
  const from = Date.parse(`${fromIso}T00:00:00Z`);
  const to = Date.parse(`${toIso}T00:00:00Z`);
  if (Number.isNaN(from) || Number.isNaN(to)) return null;
  return Math.round((to - from) / 86_400_000);
}

/**
 * Coarse human-friendly duration ("2y 3m", "11m", "5d"). Approximates a month
 * as 30.4375 days and a year as 365.25 days — accurate enough for a hero
 * "matures in …" badge, never claims more precision than the user expects.
 */
export function formatDuration(days: number, locale: PlaygroundLocale): string {
  if (!Number.isFinite(days) || days <= 0) return '0d';
  const years = Math.floor(days / 365.25);
  const remAfterYears = days - years * 365.25;
  const months = Math.floor(remAfterYears / 30.4375);
  if (locale === 'pt-PT') {
    if (years > 0) return months > 0 ? `${years}a ${months}m` : `${years}a`;
    if (months > 0) {
      const remDays = Math.floor(remAfterYears - months * 30.4375);
      return remDays > 0 ? `${months}m ${remDays}d` : `${months}m`;
    }
    return `${Math.floor(days)}d`;
  }
  if (years > 0) return months > 0 ? `${years}y ${months}m` : `${years}y`;
  if (months > 0) {
    const remDays = Math.floor(remAfterYears - months * 30.4375);
    return remDays > 0 ? `${months}m ${remDays}d` : `${months}m`;
  }
  return `${Math.floor(days)}d`;
}
