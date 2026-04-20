/**
 * Shared formatting helpers used by every CLI command.
 *
 * Two output modes are supported on every command:
 *
 * - `--json` → `printJson()` writes a stable, single-line-friendly JSON
 *   representation suitable for piping into other tools.
 * - default → `printPrettyTable()` / `printPrettyKeyValue()` produce a
 *   space-aligned text layout sized to the widest cell, similar to what
 *   `column -t` would emit but without depending on it.
 *
 * Errors are funneled through {@link printError} + a non-zero exit so callers
 * always see a single-line explanation regardless of the failure origin
 * (Zod, calculator, missing data, etc.).
 */

import { ZodError } from 'zod';

export interface PrettyKeyValue {
  readonly key: string;
  readonly value: string;
}

/**
 * Writes a JSON document to stdout, pretty-printed with 2-space indentation
 * so terminal users can still read it. Pipelines can re-minify with `jq -c`.
 */
export function printJson(value: unknown): void {
  process.stdout.write(`${JSON.stringify(value, null, 2)}\n`);
}

/**
 * Right-pads a string with spaces to `width`. Used by both the table and
 * key-value renderers; surrogate pairs and combining marks aren't a concern
 * for the ASCII data this CLI emits, so plain `.length` is sufficient.
 */
function padRight(value: string, width: number): string {
  return value.length >= width ? value : value + ' '.repeat(width - value.length);
}

/**
 * Renders a list of `{key, value}` pairs as left-aligned `key  value` lines,
 * with the gap sized to the widest key. Used for single-record outputs
 * (`simulate`, `current`, `cohort`).
 */
export function printPrettyKeyValue(rows: readonly PrettyKeyValue[]): void {
  if (rows.length === 0) {
    return;
  }
  const widestKey = rows.reduce((max, row) => Math.max(max, row.key.length), 0);
  for (const row of rows) {
    process.stdout.write(`${padRight(row.key, widestKey)}  ${row.value}\n`);
  }
}

/**
 * Renders a 2D table with a header row, sized so each column is as wide as
 * the longest cell in that column. Empty `rows` prints just the header so
 * users can still see the column layout.
 */
export function printPrettyTable(
  headers: readonly string[],
  rows: readonly (readonly string[])[],
): void {
  const widths = headers.map((header, columnIndex) => {
    const cellWidth = rows.reduce((max, row) => {
      const cell = row[columnIndex] ?? '';
      return Math.max(max, cell.length);
    }, 0);
    return Math.max(header.length, cellWidth);
  });

  const renderRow = (cells: readonly string[]): string =>
    cells.map((cell, i) => padRight(cell, widths[i] ?? 0)).join('  ');

  process.stdout.write(`${renderRow(headers)}\n`);
  process.stdout.write(`${widths.map((w) => '-'.repeat(w)).join('  ')}\n`);
  for (const row of rows) {
    process.stdout.write(`${renderRow(row)}\n`);
  }
}

/**
 * Writes a human-readable error to stderr. ZodError details are flattened
 * one-issue-per-line so users can see exactly which field failed validation
 * without parsing JSON.
 */
export function printError(error: unknown): void {
  if (error instanceof ZodError) {
    process.stderr.write('error: invalid input\n');
    for (const issue of error.issues) {
      const path = issue.path.length > 0 ? issue.path.join('.') : '(root)';
      process.stderr.write(`  ${path}: ${issue.message}\n`);
    }
    return;
  }
  if (error instanceof Error) {
    process.stderr.write(`error: ${error.message}\n`);
    return;
  }
  process.stderr.write(`error: ${String(error)}\n`);
}

/**
 * Wraps a command body so any thrown error is rendered with {@link printError}
 * and the process exits with a non-zero status. Keeps each command file from
 * having to repeat the same try/catch boilerplate.
 */
export async function runCommand(body: () => Promise<void> | void): Promise<void> {
  try {
    await body();
  } catch (error) {
    printError(error);
    process.exitCode = 1;
  }
}
