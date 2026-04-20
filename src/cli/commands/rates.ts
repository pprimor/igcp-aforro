import { getRateTable } from '../../core/rates.js';
import type { RateTableInput, SeriesCode } from '../../types/domain.js';
import { printJson, printPrettyTable, runCommand } from '../output.js';

/** Options accepted by the `rates` CLI command. */
export interface RatesCliOptions {
  readonly series?: SeriesCode;
  readonly from?: string;
  readonly to?: string;
  readonly json?: boolean;
}

/**
 * Entry point invoked by `cac` when the user runs `aforro rates`.
 *
 * Prints the IGCP-published monthly base rates between `--from` and `--to`
 * (inclusive). Months for which the bundled Euribor 3M dataset has not
 * accumulated enough observations yet are silently omitted by
 * {@link getRateTable}; surfacing gaps as missing rows keeps forward-looking
 * queries from erroring out at the tail of the table.
 */
export function runRates(options: RatesCliOptions): Promise<void> {
  return runCommand(() => {
    if (!options.from) {
      throw new Error('--from is required (YYYY-MM)');
    }
    if (!options.to) {
      throw new Error('--to is required (YYYY-MM)');
    }
    const input: RateTableInput = {
      ...(options.series ? { series: options.series } : {}),
      fromMonth: options.from,
      toMonth: options.to,
    };
    const table = getRateTable(input);

    if (options.json) {
      printJson(table);
      return;
    }

    const headers = ['series', 'month', 'fixingDate', 'basePct'];
    const rows = table.map((row) => [row.series, row.month, row.fixingDate, row.basePct]);
    printPrettyTable(headers, rows);
  });
}
