/**
 * RFC 4180 CSV helpers shared by the CLI and docs playground export.
 */

/**
 * Escapes a single CSV field per RFC 4180: fields containing `,`, `"`, or
 * line breaks are wrapped in double quotes; internal `"` becomes `""`.
 */
export function escapeCsvField(value: string): string {
  if (/[,"\r\n]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

/** Comma-separated row with each cell passed through {@link escapeCsvField}. */
export function formatCsvRow(cells: readonly string[]): string {
  return cells.map(escapeCsvField).join(',');
}

/**
 * Full CSV document: header row then one row per record, trailing newline.
 * Does not include a UTF-8 BOM — callers add that when targeting Excel.
 */
export function formatCsvDocument(
  headers: readonly string[],
  rows: readonly (readonly string[])[],
): string {
  const lines = [formatCsvRow(headers), ...rows.map(formatCsvRow)];
  return `${lines.join('\n')}\n`;
}
