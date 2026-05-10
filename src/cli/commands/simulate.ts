import { simulate } from '../../core/calculator.js';
import type { SeriesCode, SimulateInput, SimulateResult } from '../../types/domain.js';
import {
  type PrettyKeyValue,
  printJson,
  printPrettyKeyValue,
  printPrettyTable,
  runCommand,
} from '../output.js';

/**
 * Options accepted by the `simulate` CLI command.
 *
 * Field names are camelCase to match how `cac` rewrites kebab-case flags:
 * `--as-of` → `asOf`, `--subscribed` → `subscribed`, etc. Required fields
 * are validated by `simulateInputSchema` inside {@link simulate}; this
 * layer only normalizes types and forwards the call.
 */
export interface SimulateCliOptions {
  readonly subscribed?: string;
  readonly units?: string | number;
  readonly asOf?: string;
  readonly schedule?: boolean;
  readonly irs?: string | number;
  readonly series?: SeriesCode;
  readonly json?: boolean;
}

/**
 * Coerces a CLI numeric flag (always delivered as a string by `cac` unless
 * the user typed a bare number) into a finite `number`. Range and integer
 * checks are deferred to {@link simulateInputSchema} so users see a single,
 * canonical error message per failure.
 */
function toFiniteNumber(raw: string | number, flag: string, hint: string): number {
  const value = typeof raw === 'number' ? raw : Number(raw);
  if (!Number.isFinite(value)) {
    throw new Error(`${flag} must be a finite number (${hint})`);
  }
  return value;
}

function buildInput(options: SimulateCliOptions): SimulateInput {
  if (!options.subscribed) {
    throw new Error('--subscribed is required (YYYY-MM-DD)');
  }
  if (options.units === undefined) {
    throw new Error('--units is required (integer in [100, 100000])');
  }
  return {
    series: options.series ?? 'F',
    subscriptionDate: options.subscribed,
    units: toFiniteNumber(options.units, '--units', 'e.g. 1000'),
    ...(options.asOf ? { asOfDate: options.asOf } : {}),
    ...(options.schedule ? { includeSchedule: true } : {}),
    ...(options.irs !== undefined
      ? { irsRate: toFiniteNumber(options.irs, '--irs', 'e.g. 0.28 for 28%') }
      : {}),
  };
}

function summaryRows(result: SimulateResult): PrettyKeyValue[] {
  return [
    { key: 'series', value: result.series },
    { key: 'subscriptionDate', value: result.subscriptionDate },
    { key: 'asOfDate', value: result.asOfDate },
    { key: 'units', value: String(result.units) },
    { key: 'irsRate', value: result.irsRate },
    { key: 'currentValueGross', value: result.currentValueGross },
    { key: 'currentValueNet', value: result.currentValueNet },
    { key: 'totalInterestGross', value: result.totalInterestGross },
    { key: 'totalInterestNet', value: result.totalInterestNet },
    { key: 'totalIrsWithheld', value: result.totalIrsWithheld },
    { key: 'accruedSinceLastCapitalization', value: result.accruedSinceLastCapitalization },
    { key: 'matured', value: result.matured ? 'true' : 'false' },
    { key: 'maturityDate', value: result.maturityDate ?? '—' },
  ];
}

function printPretty(result: SimulateResult): void {
  printPrettyKeyValue(summaryRows(result));

  if (result.schedule && result.schedule.length > 0) {
    process.stdout.write('\nschedule\n');
    const headers = [
      'quarterEndDate',
      'annualRate',
      'quarterlyRate',
      'interestGross',
      'irsWithheld',
      'interestNet',
      'balanceAfter',
      'tier',
    ];
    const rows = result.schedule.map((row) => [
      row.quarterEndDate,
      row.annualRate,
      row.quarterlyRate,
      row.interestGross,
      row.irsWithheld,
      row.interestNet,
      row.balanceAfter,
      `y${row.premiumTier.fromYear}-${row.premiumTier.toYear} (+${row.premiumTier.ratePct}%)`,
    ]);
    printPrettyTable(headers, rows);
  }
}

/**
 * Entry point invoked by `cac` when the user runs `aforro simulate`.
 *
 * `options` mirrors the CLI flags exposed in `src/cli.ts`. Validation
 * (date formats, units range, IRS bounds) is delegated to
 * `simulateInputSchema`; surface-level type coercion happens here so the
 * Zod errors reach the user pointing at `units`/`asOfDate` rather than at
 * the raw shell strings.
 */
export function runSimulate(options: SimulateCliOptions): Promise<void> {
  return runCommand(() => {
    const result = simulate(buildInput(options));
    if (options.json) {
      printJson(result);
      return;
    }
    printPretty(result);
  });
}
