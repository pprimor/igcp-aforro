/**
 * Pure helpers for the Bundesbank BBIG1 (EMMI EURIBOR® 3M) fetcher.
 *
 * The full `scripts/fetch-euribor.ts` script (with seed/incremental/range
 * modes, file IO and CLI plumbing) is still pending under the
 * `fetch_euribor` to-do in the data-sourcing subplan. The functions here
 * are the small, side-effect-free building blocks that the script
 * composes -- and that the test suite exercises directly without spinning
 * up the full CLI.
 *
 * Splitting the fetcher this way also keeps the "what we parse out of
 * the upstream CSV" contract explicit: any change to the BBIG1 response
 * shape (column order, "no value" sentinel, decimal precision, etc.)
 * shows up first as a focused unit-test failure on these helpers, well
 * before the script tries to write a malformed `src/data/euribor3m.json`.
 */

import type { RateEntry } from '../src/types/domain.js';

/**
 * Default Bundesbank BBIG1 endpoint for the EMMI EURIBOR® 3M daily
 * fixings, in CSV form with English headers. The series key is
 * `BBIG1.D.D0.EUR.MMKT.EURIBOR.M03.BID._Z`; the `BBIG1.` prefix is
 * dropped from the URL path per Bundesbank's REST conventions.
 *
 * `startPeriod` / `endPeriod` query parameters are accepted by the API
 * but ignored on this endpoint -- callers must filter client-side.
 */
export const BUNDESBANK_BBIG1_URL =
  'https://api.statistiken.bundesbank.de/rest/download/BBIG1/D.D0.EUR.MMKT.EURIBOR.M03.BID._Z?format=csv&lang=en';

/** BBIG1 daily EMMI EURIBOR® 12-month fixings (CSV). */
export const BUNDESBANK_BBIG1_M12_URL =
  'https://api.statistiken.bundesbank.de/rest/download/BBIG1/D.D0.EUR.MMKT.EURIBOR.M12.BID._Z?format=csv&lang=en';

/**
 * Lines whose first 4 characters are not `YYYY-` belong to the CSV
 * preamble (header, comments, decimals, last-update timestamp, etc.) and
 * are skipped before parsing.
 */
const ISO_DATE_PREFIX = /^\d{4}-/;

/**
 * Optional metadata mined from the BBIG1 preamble. Mirrored into
 * `src/data/_meta.json` so an upstream feed stall is debuggable without
 * re-curl'ing.
 */
export interface ParsedEuriborCsv {
  readonly observations: readonly RateEntry[];
  /**
   * Wall-clock string from the `last update,YYYY-MM-DD HH:MM:SS,` row of
   * the preamble. `null` when the upstream payload omits it.
   */
  readonly upstreamLastUpdate: string | null;
  /** Number of preamble rows that were intentionally skipped. */
  readonly skippedPreambleRows: number;
  /** Number of `.` / "No value available" rows that were filtered out. */
  readonly skippedEmptyValueRows: number;
}

/**
 * Parses a Bundesbank BBIG1 CSV payload and returns the contained
 * Euribor 3M observations sorted ascending by date.
 *
 * Behavioural contract:
 *   - Skips every line whose first 4 chars are not a 4-digit year + `-`
 *     (the 9-line preamble Bundesbank prepends).
 *   - Skips rows whose value column is `.` (the "No value available"
 *     sentinel covering TARGET2 holidays, weekends, and not-yet-published
 *     trading days).
 *   - Throws on a row that begins with a date prefix but whose value is
 *     non-empty and non-numeric -- silently dropping such a row would
 *     hide an upstream schema break.
 *   - Surfaces the preamble's `last update` timestamp via
 *     {@link ParsedEuriborCsv.upstreamLastUpdate} so the caller can
 *     mirror it into `_meta.json`.
 */
export function parseBundesbankCsv(csvText: string): ParsedEuriborCsv {
  const observations: RateEntry[] = [];
  let upstreamLastUpdate: string | null = null;
  let skippedPreambleRows = 0;
  let skippedEmptyValueRows = 0;

  const lines = csvText.split(/\r?\n/);
  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    if (line === '') {
      continue;
    }

    if (!ISO_DATE_PREFIX.test(line)) {
      skippedPreambleRows += 1;
      const match = /^last update,\s*([^,]+?)\s*,?\s*$/i.exec(line);
      if (match?.[1]) {
        upstreamLastUpdate = match[1];
      }
      continue;
    }

    // Data row shape: `YYYY-MM-DD,VALUE,FLAG?`. The flag column is
    // optional and can carry quoted commas, but we only need the first
    // two columns; everything after the second comma is metadata.
    const firstComma = line.indexOf(',');
    const secondComma = line.indexOf(',', firstComma + 1);
    if (firstComma < 0) {
      throw new Error(`Malformed BBIG1 row (missing value column): "${rawLine}"`);
    }
    const date = line.slice(0, firstComma);
    const value =
      secondComma < 0 ? line.slice(firstComma + 1) : line.slice(firstComma + 1, secondComma);

    if (value === '.' || value === '') {
      skippedEmptyValueRows += 1;
      continue;
    }

    const ratePct = Number(value);
    if (!Number.isFinite(ratePct)) {
      throw new Error(`Malformed BBIG1 row (non-numeric value "${value}"): "${rawLine}"`);
    }

    observations.push({ date, ratePct: ratePct.toString() });
  }

  observations.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));

  return {
    observations,
    upstreamLastUpdate,
    skippedPreambleRows,
    skippedEmptyValueRows,
  };
}

/**
 * Merges `incoming` into `existing`, deduping by `date`. When the same
 * date is present in both, the **incoming** value wins -- Bundesbank /
 * EMMI is authoritative, so a value change there should override the
 * stored one (revisions are rare for Euribor but documented in the
 * data-sourcing subplan).
 *
 * Returns a new array sorted ascending by date; neither input is
 * mutated.
 */
export interface MergeStats {
  readonly added: number;
  readonly updated: number;
  readonly unchanged: number;
}

export interface MergeResult {
  readonly merged: readonly RateEntry[];
  readonly stats: MergeStats;
}

export function mergeObservations(
  existing: readonly RateEntry[],
  incoming: readonly RateEntry[],
): MergeResult {
  const byDate = new Map<string, string>();
  for (const entry of existing) {
    byDate.set(entry.date, entry.ratePct);
  }

  let added = 0;
  let updated = 0;
  let unchanged = 0;
  for (const entry of incoming) {
    const previous = byDate.get(entry.date);
    if (previous === undefined) {
      added += 1;
    } else if (previous !== entry.ratePct) {
      updated += 1;
    } else {
      unchanged += 1;
    }
    byDate.set(entry.date, entry.ratePct);
  }

  const merged: RateEntry[] = [];
  for (const [date, ratePct] of byDate) {
    merged.push({ date, ratePct });
  }
  merged.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));

  return { merged, stats: { added, updated, unchanged } };
}

/**
 * Fetches a Bundesbank BBIG1 CSV payload and parses it.
 *
 * `fetchImpl` is injected so tests can supply a fake (typically `msw`'s
 * patched global `fetch`) without monkey-patching the global. In
 * production callers the default `fetch` is used.
 *
 * Throws on any non-2xx response with the upstream status text in the
 * message -- a transient 5xx from Bundesbank should fail loud so the
 * cron can retry rather than silently writing a stale snapshot.
 */
export async function fetchEuriborCsv(
  url: string = BUNDESBANK_BBIG1_URL,
  fetchImpl: typeof fetch = fetch,
): Promise<ParsedEuriborCsv> {
  const response = await fetchImpl(url);
  if (!response.ok) {
    throw new Error(
      `Bundesbank BBIG1 fetch failed: HTTP ${response.status} ${response.statusText}`,
    );
  }
  const text = await response.text();
  return parseBundesbankCsv(text);
}
