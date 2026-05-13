import { readFile } from 'node:fs/promises';
import { simulatePortfolio } from '../../core/portfolio.js';
import type {
  PortfolioResult,
  PortfolioSubscription,
  SimulatePortfolioInput,
  SimulateResult,
} from '../../types/domain.js';
import { isoDateSchema, seriesCodeSchema } from '../../types/schemas.js';
import {
  type PrettyKeyValue,
  printJson,
  printPrettyKeyValue,
  printPrettyTable,
  runCommand,
} from '../output.js';

/**
 * Options accepted by the `portfolio` CLI command.
 *
 * Field names are camelCase to match how `cac` rewrites kebab-case flags.
 */
export interface PortfolioCliOptions {
  readonly input?: string;
  /** Repeated `--cohort`; `cac` may deliver a single string or an array. */
  readonly cohort?: string | string[];
  readonly asOf?: string;
  readonly schedule?: boolean;
  readonly json?: boolean;
}

/**
 * Reads UTF-8 text from a file path, or from stdin when `path` is `-`.
 *
 * With `cac`, pass stdin as `--input=-` (equals form); a bare `--input -` is
 * parsed as a missing value, not the literal `-`.
 */
export async function readInputText(path: string): Promise<string> {
  if (path === '-') {
    const chunks: Buffer[] = [];
    for await (const chunk of process.stdin) {
      chunks.push(chunk as Buffer);
    }
    return Buffer.concat(chunks).toString('utf8');
  }
  return readFile(path, 'utf8');
}

function cohortArgv(options: PortfolioCliOptions): readonly string[] {
  const raw = options.cohort;
  if (raw === undefined) {
    return [];
  }
  return Array.isArray(raw) ? raw : [raw];
}

/**
 * Parses `series,YYYY-MM-DD,units[,irs]` into a {@link PortfolioSubscription}.
 * `irs` is a decimal fraction (e.g. `0.28` for 28%).
 */
export function parseCohortSpec(spec: string, index: number): PortfolioSubscription {
  const parts = spec.split(',');
  if (parts.length !== 3 && parts.length !== 4) {
    throw new Error(
      `--cohort entry ${index + 1}: expected series,YYYY-MM-DD,units or series,YYYY-MM-DD,units,irs`,
    );
  }
  const [seriesRaw, dateRaw, unitsRaw, irsRaw] = parts;
  const seriesParsed = seriesCodeSchema.safeParse(seriesRaw);
  if (!seriesParsed.success) {
    throw new Error(
      `--cohort entry ${index + 1}: series must be B, C, D, E, or F (got ${JSON.stringify(seriesRaw)})`,
    );
  }
  const dateParsed = isoDateSchema.safeParse(dateRaw);
  if (!dateParsed.success) {
    throw new Error(`--cohort entry ${index + 1}: invalid subscription date (YYYY-MM-DD)`);
  }
  const units = Number(unitsRaw);
  if (!Number.isFinite(units) || !Number.isInteger(units)) {
    throw new Error(`--cohort entry ${index + 1}: units must be an integer`);
  }
  let irsRate: number | undefined;
  if (irsRaw !== undefined && irsRaw !== '') {
    const irs = Number(irsRaw);
    if (!Number.isFinite(irs)) {
      throw new Error(`--cohort entry ${index + 1}: irs must be a finite number`);
    }
    irsRate = irs;
  }
  return {
    series: seriesParsed.data,
    subscriptionDate: dateParsed.data,
    units,
    ...(irsRate !== undefined ? { irsRate } : {}),
  };
}

/**
 * Builds {@link SimulatePortfolioInput} from `--input` JSON or repeated `--cohort`,
 * applying `--as-of` / `--schedule` overrides.
 */
export async function buildPortfolioInput(
  options: PortfolioCliOptions,
): Promise<SimulatePortfolioInput> {
  const cohortSpecs = cohortArgv(options);
  const hasInput = options.input !== undefined;
  const hasCohort = cohortSpecs.length > 0;

  if (hasInput && hasCohort) {
    throw new Error('cannot combine --input with --cohort (use one or the other)');
  }
  if (!hasInput && !hasCohort) {
    throw new Error(
      'specify --input <path> or at least one --cohort <series,YYYY-MM-DD,units[,irs]>',
    );
  }

  let base: SimulatePortfolioInput;
  if (hasInput) {
    const text = await readInputText(options.input as string);
    let parsed: unknown;
    try {
      parsed = JSON.parse(text) as unknown;
    } catch (error) {
      const detail = error instanceof Error ? error.message : String(error);
      throw new Error(`invalid JSON (${detail})`);
    }
    if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) {
      throw new Error('JSON body must be a non-null object');
    }
    base = parsed as SimulatePortfolioInput;
  } else {
    base = {
      subscriptions: cohortSpecs.map((spec, index) => parseCohortSpec(spec, index)),
      ...(options.asOf ? { asOfDate: options.asOf } : {}),
      ...(options.schedule ? { includeSchedule: true } : {}),
    };
    return base;
  }

  return {
    ...base,
    ...(options.asOf ? { asOfDate: options.asOf } : {}),
    ...(options.schedule ? { includeSchedule: true } : {}),
  };
}

function cohortSummaryRows(result: SimulateResult): PrettyKeyValue[] {
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

function portfolioHeadlineRows(result: PortfolioResult): PrettyKeyValue[] {
  return [
    { key: 'asOfDate', value: result.asOfDate },
    { key: 'totalUnits', value: String(result.totalUnits) },
    { key: 'totalValueGross', value: result.totalValueGross },
    { key: 'totalValueNet', value: result.totalValueNet },
    { key: 'totalInterestGross', value: result.totalInterestGross },
    { key: 'totalInterestNet', value: result.totalInterestNet },
    { key: 'totalIrsWithheld', value: result.totalIrsWithheld },
    { key: 'totalAccruedGross', value: result.totalAccruedGross },
    { key: 'allMatured', value: result.allMatured ? 'true' : 'false' },
    { key: 'anyMatured', value: result.anyMatured ? 'true' : 'false' },
  ];
}

function printPortfolioPretty(result: PortfolioResult): void {
  printPrettyKeyValue(portfolioHeadlineRows(result));

  process.stdout.write('\nbySeries\n');
  const seriesHeaders = [
    'series',
    'units',
    'cohortCount',
    'valueNet',
    'interestNet',
    'irsWithheld',
  ];
  const seriesRows = result.bySeries.map((row) => [
    row.series,
    String(row.units),
    String(row.cohortCount),
    row.valueNet,
    row.interestNet,
    row.irsWithheld,
  ]);
  printPrettyTable(seriesHeaders, seriesRows);

  for (const [i, cohort] of result.cohorts.entries()) {
    process.stdout.write(`\ncohort ${i + 1}\n`);
    printPrettyKeyValue(cohortSummaryRows(cohort));
    if (cohort.schedule && cohort.schedule.length > 0) {
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
      const rows = cohort.schedule.map((row) => [
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
}

/**
 * Entry point invoked by `cac` when the user runs `aforro portfolio`.
 */
export function runPortfolio(options: PortfolioCliOptions): Promise<void> {
  return runCommand(async () => {
    const input = await buildPortfolioInput(options);
    const result = simulatePortfolio(input);
    if (options.json) {
      printJson(result);
      return;
    }
    printPortfolioPretty(result);
  });
}
