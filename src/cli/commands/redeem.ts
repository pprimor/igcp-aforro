import { simulateRedemption } from '../../core/redemption.js';
import type { RedemptionInput, RedemptionResult, SeriesCode } from '../../types/domain.js';
import {
  type PrettyKeyValue,
  printJson,
  printPrettyKeyValue,
  printPrettyTable,
  runCommand,
} from '../output.js';

export interface RedeemCliOptions {
  readonly subscribed?: string;
  readonly units?: string | number;
  readonly redeemOn?: string;
  readonly redeemUnits?: string | number;
  readonly schedule?: boolean;
  readonly irs?: string | number;
  readonly series?: SeriesCode;
  readonly json?: boolean;
}

function toFiniteNumber(raw: string | number, flag: string, hint: string): number {
  const value = typeof raw === 'number' ? raw : Number(raw);
  if (!Number.isFinite(value)) {
    throw new Error(`${flag} must be a finite number (${hint})`);
  }
  return value;
}

function buildInput(options: RedeemCliOptions): RedemptionInput {
  if (!options.subscribed) {
    throw new Error('--subscribed is required (YYYY-MM-DD)');
  }
  if (options.units === undefined) {
    throw new Error('--units is required (integer in [100, 100000])');
  }
  if (!options.redeemOn) {
    throw new Error('--redeem-on is required (YYYY-MM-DD)');
  }
  return {
    series: options.series ?? 'F',
    subscriptionDate: options.subscribed,
    units: toFiniteNumber(options.units, '--units', 'e.g. 1000'),
    redemptionDate: options.redeemOn,
    ...(options.redeemUnits !== undefined
      ? { unitsToRedeem: toFiniteNumber(options.redeemUnits, '--redeem-units', 'e.g. 500') }
      : {}),
    ...(options.irs !== undefined
      ? { irsRate: toFiniteNumber(options.irs, '--irs', 'e.g. 0.28 for 28%') }
      : {}),
  };
}

function summaryRows(result: RedemptionResult): PrettyKeyValue[] {
  return [
    { key: 'series', value: result.series },
    { key: 'subscriptionDate', value: result.subscriptionDate },
    { key: 'redemptionDate', value: result.redemptionDate },
    { key: 'units', value: String(result.units) },
    { key: 'unitsToRedeem', value: String(result.unitsToRedeem) },
    { key: 'unitQuoteAtRedemption', value: result.unitQuoteAtRedemption },
    { key: 'redemptionValue', value: result.redemptionValue },
    { key: 'remainingUnits', value: String(result.remainingUnits) },
    { key: 'remainingValueAtRedemption', value: result.remainingValueAtRedemption },
    { key: 'forfeitedAccruedGross', value: result.forfeitedAccruedGross },
    { key: 'earliestRedemptionDate', value: result.earliestRedemptionDate },
  ];
}

function printPretty(result: RedemptionResult, includeSchedule?: boolean): void {
  printPrettyKeyValue(summaryRows(result));
  if (!includeSchedule || !result.simulation.schedule || result.simulation.schedule.length === 0) {
    return;
  }
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
  const rows = result.simulation.schedule.map((row) => [
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

export function runRedeem(options: RedeemCliOptions): Promise<void> {
  return runCommand(() => {
    const result = simulateRedemption(buildInput(options));
    if (options.json) {
      printJson(result);
      return;
    }
    printPretty(result, options.schedule);
  });
}
