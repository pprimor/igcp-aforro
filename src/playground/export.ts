import { formatCsvDocument, formatCsvRow } from './csv.js';
import type { ScheduleRow, SimulateResult } from '../types/domain.js';

export const CSV_UTF8_BOM = '\uFEFF';

export const PLAYGROUND_SCHEDULE_CSV_HEADERS = [
  'quarterEndDate',
  'annualRate',
  'quarterlyRate',
  'interestGross',
  'irsWithheld',
  'interestNet',
  'balanceAfter',
  'unitQuoteAfter',
  'premiumTierFromYear',
  'premiumTierToYear',
  'premiumTierRatePct',
] as const;

function scheduleRowToCsv(row: ScheduleRow): readonly string[] {
  return [
    row.quarterEndDate,
    row.annualRate,
    row.quarterlyRate,
    row.interestGross,
    row.irsWithheld,
    row.interestNet,
    row.balanceAfter,
    row.unitQuoteAfter,
    String(row.premiumTier.fromYear),
    String(row.premiumTier.toYear),
    row.premiumTier.ratePct,
  ];
}

/**
 * Builds a schedule-only CSV document from {@link SimulateResult}, using the
 * same decimal strings as `aforro simulate --json`. Returns an empty string
 * when `schedule` is missing or empty.
 */
export function buildPlaygroundScheduleCsv(result: SimulateResult): string {
  const schedule = result.schedule;
  if (!schedule || schedule.length === 0) {
    return '';
  }

  const rows = schedule.map(scheduleRowToCsv);
  let document = formatCsvDocument(PLAYGROUND_SCHEDULE_CSV_HEADERS, rows);

  if (result.accruedSinceLastCapitalization !== '0.00') {
    document += `\n${formatCsvRow(['accruedSinceLastCapitalization', result.accruedSinceLastCapitalization])}\n${formatCsvRow(['asOfDate', result.asOfDate])}`;
  }

  return document;
}

/** ASCII filename for a downloaded schedule CSV. */
export function playgroundScheduleFilename(result: SimulateResult): string {
  return `aforro-${result.series}-${result.subscriptionDate}-${result.asOfDate}-schedule.csv`;
}
