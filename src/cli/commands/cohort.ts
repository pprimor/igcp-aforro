import { getRateForCohort } from '../../core/rates.js';
import type { CohortRateInput, SeriesCode } from '../../types/domain.js';
import { printJson, printPrettyKeyValue, runCommand } from '../output.js';

/** Options accepted by the `cohort` CLI command. */
export interface CohortCliOptions {
  readonly subscribed?: string;
  readonly asOf?: string;
  readonly series?: SeriesCode;
  readonly json?: boolean;
}

/**
 * Accept either `YYYY-MM-DD` or the looser `YYYY-MM` shorthand the plan
 * documents, normalizing the latter to the first of the month so the
 * library API (which only takes ISO dates) keeps a single shape. Invalid
 * inputs are forwarded as-is so Zod can produce the canonical error.
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

/**
 * Entry point invoked by `cac` when the user runs `aforro cohort`.
 *
 * Resolves the annual rate that applies to a cohort (defined by
 * `--subscribed`) for the quarter that contains `--as-of` (defaults to
 * today). The output surfaces every component (`baseRatePct`, premium
 * tier, quarter window) so callers can audit the math without re-running
 * it themselves.
 */
export function runCohort(options: CohortCliOptions): Promise<void> {
  return runCommand(() => {
    if (!options.subscribed) {
      throw new Error('--subscribed is required (YYYY-MM or YYYY-MM-DD)');
    }
    const input: CohortRateInput = {
      series: options.series ?? 'F',
      subscriptionDate: toIsoDate(options.subscribed, '--subscribed'),
      ...(options.asOf ? { asOfDate: toIsoDate(options.asOf, '--as-of') } : {}),
    };
    const result = getRateForCohort(input);

    if (options.json) {
      printJson(result);
      return;
    }

    const tier = result.premiumTier;
    printPrettyKeyValue([
      { key: 'series', value: result.series },
      { key: 'subscriptionDate', value: result.subscriptionDate },
      { key: 'asOfDate', value: result.asOfDate },
      { key: 'quarterStartDate', value: result.quarterStartDate },
      { key: 'quarterEndDate', value: result.quarterEndDate },
      { key: 'quarterIndex', value: String(result.quarterIndex) },
      { key: 'yearsSinceSubscription', value: String(result.yearsSinceSubscription) },
      { key: 'baseRatePct', value: result.baseRatePct },
      { key: 'premiumTier', value: `y${tier.fromYear}-${tier.toYear} (+${tier.ratePct}%)` },
      { key: 'annualRatePct', value: result.annualRatePct },
    ]);
  });
}
