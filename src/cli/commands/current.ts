import { getCurrentRate } from '../../core/rates.js';
import type { CurrentRateInput, SeriesCode } from '../../types/domain.js';
import { printJson, printPrettyKeyValue, runCommand } from '../output.js';

/** Options accepted by the `current` CLI command. */
export interface CurrentCliOptions {
  readonly series?: SeriesCode;
  readonly asOf?: string;
  readonly json?: boolean;
}

/**
 * Entry point invoked by `cac` when the user runs `aforro current`.
 *
 * Surfaces the IGCP-published monthly base rate for the requested series
 * (defaults to Série F) and the requested (or current) month, along with
 * its source fixing date so the value is auditable end-to-end.
 */
export function runCurrent(options: CurrentCliOptions): Promise<void> {
  return runCommand(() => {
    const input: CurrentRateInput = {
      ...(options.series ? { series: options.series } : {}),
      ...(options.asOf ? { asOfDate: options.asOf } : {}),
    };
    const rate = getCurrentRate(input);

    if (options.json) {
      printJson(rate);
      return;
    }

    printPrettyKeyValue([
      { key: 'series', value: rate.series },
      { key: 'month', value: rate.month },
      { key: 'fixingDate', value: rate.fixingDate },
      { key: 'basePct', value: rate.basePct },
    ]);
  });
}
