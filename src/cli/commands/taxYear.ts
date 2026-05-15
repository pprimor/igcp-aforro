import { simulate } from '../../core/calculator.js';
import { simulatePortfolio } from '../../core/portfolio.js';
import { getPortfolioTaxYearRollup, getTaxYearRollup } from '../../core/taxYear.js';
import type {
  PortfolioTaxYearRollup,
  SeriesCode,
  SimulateInput,
  TaxYearRollup,
} from '../../types/domain.js';
import { taxYearSchema } from '../../types/schemas.js';
import { buildPortfolioInput, type PortfolioCliOptions } from './portfolio.js';
import {
  printCsv,
  printJson,
  printPrettyKeyValue,
  printPrettyTable,
  runCommand,
} from '../output.js';

export interface TaxYearCliOptions extends PortfolioCliOptions {
  readonly subscribed?: string;
  readonly units?: string | number;
  readonly irs?: string | number;
  readonly series?: SeriesCode;
  readonly year?: string | number;
  readonly csv?: boolean;
}

function toFiniteNumber(raw: string | number, flag: string, hint: string): number {
  const value = typeof raw === 'number' ? raw : Number(raw);
  if (!Number.isFinite(value)) {
    throw new Error(`${flag} must be a finite number (${hint})`);
  }
  return value;
}

function parseTaxYear(raw: string | number | undefined): number {
  if (raw === undefined) {
    throw new Error('--year is required (calendar year YYYY, e.g. 2025)');
  }
  const value = typeof raw === 'number' ? raw : Number(raw);
  const parsed = taxYearSchema.safeParse(value);
  if (!parsed.success) {
    throw new Error('--year must be an integer calendar year between 1990 and 2100');
  }
  return parsed.data;
}

function isPortfolioMode(options: TaxYearCliOptions): boolean {
  return options.input !== undefined || options.cohort !== undefined;
}

function buildSimulateInput(options: TaxYearCliOptions): SimulateInput {
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
    includeSchedule: true,
    ...(options.irs !== undefined
      ? { irsRate: toFiniteNumber(options.irs, '--irs', 'e.g. 0.28 for 28%') }
      : {}),
  };
}

function taxYearSummaryRows(rollup: TaxYearRollup): { key: string; value: string }[] {
  return [
    { key: 'taxYear', value: String(rollup.taxYear) },
    { key: 'interestGross', value: rollup.interestGross },
    { key: 'irsWithheld', value: rollup.irsWithheld },
    { key: 'interestNet', value: rollup.interestNet },
    { key: 'capitalizations', value: String(rollup.capitalizationCount) },
  ];
}

function printPortfolioTaxYearPretty(rollup: PortfolioTaxYearRollup): void {
  printPrettyKeyValue(taxYearSummaryRows(rollup));
  process.stdout.write('\ncohorts\n');
  const headers = [
    'series',
    'subscriptionDate',
    'interestGross',
    'irsWithheld',
    'interestNet',
    'capitalizations',
  ];
  const rows = rollup.cohorts.map((cohort) => [
    cohort.series,
    cohort.subscriptionDate,
    cohort.interestGross,
    cohort.irsWithheld,
    cohort.interestNet,
    String(cohort.capitalizationCount),
  ]);
  printPrettyTable(headers, rows);
}

export function runTaxYear(options: TaxYearCliOptions): Promise<void> {
  return runCommand(async () => {
    if (options.json && options.csv) {
      throw new Error('Cannot combine --json and --csv');
    }

    const taxYear = parseTaxYear(options.year);
    const portfolioMode = isPortfolioMode(options);

    if (portfolioMode) {
      if (options.subscribed || options.units !== undefined) {
        throw new Error(
          'cannot combine portfolio flags (--input / --cohort) with --subscribed / --units',
        );
      }
      if (options.csv) {
        throw new Error('--csv is only supported for a single cohort (omit --input / --cohort)');
      }

      const input = await buildPortfolioInput({ ...options, schedule: true });
      const portfolio = simulatePortfolio(input);
      const rollup = getPortfolioTaxYearRollup(portfolio, taxYear);

      if (options.json) {
        printJson(rollup);
        return;
      }
      printPortfolioTaxYearPretty(rollup);
      return;
    }

    const result = simulate(buildSimulateInput(options));
    const rollup = getTaxYearRollup(result, taxYear);

    if (options.json) {
      printJson(rollup);
      return;
    }

    if (options.csv) {
      printCsv(
        ['taxYear', 'interestGross', 'irsWithheld', 'interestNet', 'capitalizationCount'],
        [
          [
            String(rollup.taxYear),
            rollup.interestGross,
            rollup.irsWithheld,
            rollup.interestNet,
            String(rollup.capitalizationCount),
          ],
        ],
      );
      return;
    }

    printPrettyKeyValue(taxYearSummaryRows(rollup));
  });
}
