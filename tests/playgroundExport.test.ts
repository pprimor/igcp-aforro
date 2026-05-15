import { describe, expect, it } from 'vitest';
import { simulate } from '../src/index.js';
import { escapeCsvField, formatCsvDocument } from '../src/playground/csv.js';
import {
  CSV_UTF8_BOM,
  PLAYGROUND_SCHEDULE_CSV_HEADERS,
  buildPlaygroundScheduleCsv,
  playgroundScheduleFilename,
} from '../src/playground/export.js';

describe('escapeCsvField', () => {
  it('quotes fields containing commas, quotes, or newlines', () => {
    expect(escapeCsvField('plain')).toBe('plain');
    expect(escapeCsvField('a,b')).toBe('"a,b"');
    expect(escapeCsvField('say "hi"')).toBe('"say ""hi"""');
    expect(escapeCsvField('line1\nline2')).toBe('"line1\nline2"');
  });
});

describe('formatCsvDocument', () => {
  it('emits header and rows with a trailing newline', () => {
    expect(formatCsvDocument(['a', 'b'], [['1', '2']])).toBe('a,b\n1,2\n');
  });
});

describe('buildPlaygroundScheduleCsv', () => {
  const fixture = () =>
    simulate({
      series: 'F',
      subscriptionDate: '2024-03-15',
      units: 1000,
      asOfDate: '2026-04-19',
      includeSchedule: true,
    });

  it('returns empty string when schedule is missing', () => {
    const result = simulate({
      series: 'F',
      subscriptionDate: '2024-03-15',
      units: 1000,
      asOfDate: '2026-04-19',
      includeSchedule: false,
    });
    expect(buildPlaygroundScheduleCsv(result)).toBe('');
  });

  it('matches expected headers and row count', () => {
    const result = simulate({
      series: 'F',
      subscriptionDate: '2024-03-15',
      units: 1000,
      asOfDate: '2024-06-15',
      includeSchedule: true,
    });
    const csv = buildPlaygroundScheduleCsv(result);
    const lines = csv.trimEnd().split('\n');
    expect(lines[0]).toBe(PLAYGROUND_SCHEDULE_CSV_HEADERS.join(','));
    expect(lines.length - 1).toBe(result.schedule?.length);
  });

  it('uses raw decimal strings from SimulateResult on the first row', () => {
    const result = fixture();
    const row = result.schedule?.[0];
    expect(row).toBeDefined();
    if (!row) return;

    const csv = buildPlaygroundScheduleCsv(result);
    const dataLine = csv.trimEnd().split('\n')[1];
    expect(dataLine).toBe(
      [
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
      ].join(','),
    );
  });

  it('flattens premium tier columns for a known Série F quarter in year 2', () => {
    const result = fixture();
    const tierRow = result.schedule?.find((row) => row.premiumTier.fromYear === 2);
    expect(tierRow).toBeDefined();
    if (!tierRow) return;

    const csv = buildPlaygroundScheduleCsv(result);
    const line = csv
      .trimEnd()
      .split('\n')
      .find((row) => row.startsWith(tierRow.quarterEndDate));
    expect(line).toContain(',2,5,0.25');
  });

  it('appends accrued trailer when accruedSinceLastCapitalization is non-zero', () => {
    const result = fixture();
    expect(result.accruedSinceLastCapitalization).not.toBe('0.00');

    const csv = buildPlaygroundScheduleCsv(result);
    expect(csv).toContain('\naccruedSinceLastCapitalization,');
    expect(csv).toContain(`\nasOfDate,${result.asOfDate}`);
  });

  it('omits accrued trailer when accrued is zero', () => {
    const result = simulate({
      series: 'F',
      subscriptionDate: '2024-03-15',
      units: 1000,
      asOfDate: '2024-06-15',
      includeSchedule: true,
    });
    expect(result.accruedSinceLastCapitalization).toBe('0.00');

    const csv = buildPlaygroundScheduleCsv(result);
    expect(csv).not.toContain('accruedSinceLastCapitalization');
  });
});

describe('playgroundScheduleFilename', () => {
  it('produces a safe ASCII filename', () => {
    const result = simulate({
      series: 'F',
      subscriptionDate: '2024-03-15',
      units: 1000,
      asOfDate: '2026-04-19',
      includeSchedule: true,
    });
    expect(playgroundScheduleFilename(result)).toBe('aforro-F-2024-03-15-2026-04-19-schedule.csv');
    expect(playgroundScheduleFilename(result)).toMatch(/^[\x20-\x7E]+$/);
  });
});

describe('CSV_UTF8_BOM', () => {
  it('is the Excel-friendly UTF-8 byte-order mark', () => {
    expect(CSV_UTF8_BOM).toBe('\uFEFF');
  });
});
