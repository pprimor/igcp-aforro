import { annualRatesByPremiumTier, getCurrentRate, getRateForCohort } from '../../core/rates.js';
import { getSeries } from '../../core/series.js';
import type { CohortRateInput, CurrentRateInput, SeriesCode } from '../../types/domain.js';
import { printJson, printPrettyKeyValue, printPrettyTable, runCommand } from '../output.js';

/** Options accepted by the `current` CLI command. */
export interface CurrentCliOptions {
  readonly series?: SeriesCode;
  readonly asOf?: string;
  readonly subscribed?: string;
  readonly json?: boolean;
}

/**
 * Accept either `YYYY-MM-DD` or `YYYY-MM` shorthand (normalized to the first
 * of the month), same as {@link runCohort}.
 */
function toIsoDate(value: string, flag: string): string {
  if (/^\d{4}-\d{2}$/.test(value)) {
    return `${value}-01`;
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return value;
  }
  throw new Error(`${flag} must be YYYY-MM or YYYY-MM-DD (received "${value}")`);
}

function formatContractYears(from: number, to: number): string {
  return from === to ? `y${from}` : `y${from}-${to}`;
}

/**
 * Entry point invoked by `cac` when the user runs `aforro current`.
 *
 * Surfaces the IGCP-published monthly base rate for the requested series
 * (defaults to Série F) and the requested (or current) month, along with
 * its source fixing date so the value is auditable end-to-end. Also prints
 * gross annual rates for each permanence band (`basePct + premium`) for
 * that calendar month. With `--subscribed`, includes the cohort resolution
 * for the quarter containing `--as-of` (same rules as `aforro cohort`).
 */
export function runCurrent(options: CurrentCliOptions): Promise<void> {
  return runCommand(() => {
    const input: CurrentRateInput = {
      ...(options.series ? { series: options.series } : {}),
      ...(options.asOf ? { asOfDate: toIsoDate(options.asOf, '--as-of') } : {}),
    };
    const rate = getCurrentRate(input);
    const series = getSeries(rate.series);
    const tierRows = annualRatesByPremiumTier(series, rate.basePct);

    let cohortPayload: ReturnType<typeof getRateForCohort> | undefined;
    if (options.subscribed) {
      const cohortInput: CohortRateInput = {
        series: rate.series,
        subscriptionDate: toIsoDate(options.subscribed, '--subscribed'),
        ...(options.asOf ? { asOfDate: toIsoDate(options.asOf, '--as-of') } : {}),
      };
      cohortPayload = getRateForCohort(cohortInput);
    }

    const jsonBody = {
      ...rate,
      annualByPremiumTier: tierRows,
      ...(cohortPayload !== undefined ? { cohort: cohortPayload } : {}),
    };

    if (options.json) {
      printJson(jsonBody);
      return;
    }

    printPrettyKeyValue([
      { key: 'series', value: rate.series },
      { key: 'month', value: rate.month },
      { key: 'fixingDate', value: rate.fixingDate },
      { key: 'basePct', value: rate.basePct },
    ]);

    process.stdout.write('\n');
    printPrettyTable(
      ['contractYears', 'premiumPct', 'annualRatePct'],
      tierRows.map((row) => [
        formatContractYears(row.fromContractYear, row.toContractYear),
        row.premiumPct,
        row.annualRatePct,
      ]),
    );

    if (cohortPayload !== undefined) {
      const tier = cohortPayload.premiumTier;
      process.stdout.write('\n');
      printPrettyKeyValue([
        { key: 'series', value: cohortPayload.series },
        { key: 'subscriptionDate', value: cohortPayload.subscriptionDate },
        { key: 'asOfDate', value: cohortPayload.asOfDate },
        { key: 'quarterStartDate', value: cohortPayload.quarterStartDate },
        { key: 'quarterEndDate', value: cohortPayload.quarterEndDate },
        { key: 'quarterIndex', value: String(cohortPayload.quarterIndex) },
        { key: 'yearsSinceSubscription', value: String(cohortPayload.yearsSinceSubscription) },
        { key: 'baseRatePct', value: cohortPayload.baseRatePct },
        { key: 'premiumTier', value: `y${tier.fromYear}-${tier.toYear} (+${tier.ratePct}%)` },
        { key: 'annualRatePct', value: cohortPayload.annualRatePct },
      ]);
    }
  });
}
