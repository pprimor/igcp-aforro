import type { SimulateResult } from '../types/domain.js';

export interface ChartPoint {
  quarterEndDate: string;
  quarterIndex: number;
  annualRatePct: number;
  balance: number;
  interestGross: number;
  interestNet: number;
  irsWithheld: number;
  premiumTierLabel: string;
}

function formatPremiumTierLabel(fromYear: number, toYear: number): string {
  return `y${fromYear}-${toYear}`;
}

/**
 * Shapes {@link SimulateResult.schedule} into numeric chart points for the docs
 * playground SVGs. Decimal-string amounts are converted with `Number()` at this
 * boundary only; the source result is never mutated.
 */
export function buildChartSeries(result: SimulateResult): {
  points: ChartPoint[];
  principal: number;
  accruedGross: number;
  asOfDate: string;
} {
  const schedule = result.schedule ?? [];
  const accrued = Number(result.accruedSinceLastCapitalization);

  const points: ChartPoint[] = schedule.map((row, index) => ({
    quarterEndDate: row.quarterEndDate,
    quarterIndex: index + 1,
    annualRatePct: Number(row.annualRate) * 100,
    balance: Number(row.balanceAfter),
    interestGross: Number(row.interestGross),
    interestNet: Number(row.interestNet),
    irsWithheld: Number(row.irsWithheld),
    premiumTierLabel: formatPremiumTierLabel(row.premiumTier.fromYear, row.premiumTier.toYear),
  }));

  return {
    points,
    principal: result.units,
    accruedGross: Number.isFinite(accrued) ? accrued : 0,
    asOfDate: result.asOfDate,
  };
}
