import type { ZodError } from 'zod';
import { type SimulateOptions, simulate } from './core/calculator.js';
import { simulatePortfolio } from './core/portfolio.js';
import { simulateRedemption } from './core/redemption.js';
import {
  type RatesOptions,
  getCurrentRate,
  getRateForCohort,
  getRateTable,
} from './core/rates.js';
import type {
  CohortRateResult,
  MonthlyBaseRate,
  PortfolioResult,
  RedemptionResult,
  SimulateResult,
} from './types/domain.js';
import {
  cohortRateInputSchema,
  currentRateInputSchema,
  rateTableInputSchema,
  redemptionInputSchema,
  simulateInputSchema,
  simulatePortfolioInputSchema,
} from './types/schemas.js';

/** Success branch: same payload the throwing API would return for the same inputs. */
export type SafeSuccess<T> = { ok: true; value: T };

/** Failure branch: either Zod validation or a caught runtime/domain error. */
export type SafeFailure =
  | { ok: false; kind: 'validation'; error: ZodError }
  | { ok: false; kind: 'runtime'; message: string; cause?: unknown };

export type SafeResult<T> = SafeSuccess<T> | SafeFailure;

function toRuntimeFailure(e: unknown): SafeFailure {
  if (e instanceof Error) {
    return { ok: false, kind: 'runtime', message: e.message, cause: e.cause };
  }
  return { ok: false, kind: 'runtime', message: String(e) };
}

/**
 * Non-throwing variant of {@link simulate}. When `ok` is true, the `value`
 * matches {@link simulate} for the same inputs and options.
 */
export function safeSimulate(
  input: unknown,
  options: SimulateOptions = {},
): SafeResult<SimulateResult> {
  const parsed = simulateInputSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, kind: 'validation', error: parsed.error };
  }
  try {
    return { ok: true, value: simulate(parsed.data, options) };
  } catch (e) {
    return toRuntimeFailure(e);
  }
}

/**
 * Non-throwing variant of {@link simulatePortfolio}. When `ok` is true, the
 * `value` matches {@link simulatePortfolio} for the same inputs and options.
 */
export function safeSimulatePortfolio(
  input: unknown,
  options: SimulateOptions = {},
): SafeResult<PortfolioResult> {
  const parsed = simulatePortfolioInputSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, kind: 'validation', error: parsed.error };
  }
  try {
    return {
      ok: true,
      value: simulatePortfolio(parsed.data, options),
    };
  } catch (e) {
    return toRuntimeFailure(e);
  }
}

/**
 * Non-throwing variant of {@link simulateRedemption}. When `ok` is true, the
 * `value` matches {@link simulateRedemption} for the same inputs and options.
 */
export function safeSimulateRedemption(
  input: unknown,
  options: SimulateOptions = {},
): SafeResult<RedemptionResult> {
  const parsed = redemptionInputSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, kind: 'validation', error: parsed.error };
  }
  try {
    return { ok: true, value: simulateRedemption(parsed.data, options) };
  } catch (e) {
    return toRuntimeFailure(e);
  }
}

/**
 * Non-throwing variant of {@link getCurrentRate}. When `ok` is true, the
 * `value` matches {@link getCurrentRate} for the same inputs and options.
 */
export function safeGetCurrentRate(
  input: unknown = {},
  options: RatesOptions = {},
): SafeResult<MonthlyBaseRate> {
  const parsed = currentRateInputSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, kind: 'validation', error: parsed.error };
  }
  try {
    return { ok: true, value: getCurrentRate(parsed.data, options) };
  } catch (e) {
    return toRuntimeFailure(e);
  }
}

/**
 * Non-throwing variant of {@link getRateForCohort}. When `ok` is true, the
 * `value` matches {@link getRateForCohort} for the same inputs and options.
 */
export function safeGetRateForCohort(
  input: unknown,
  options: RatesOptions = {},
): SafeResult<CohortRateResult> {
  const parsed = cohortRateInputSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, kind: 'validation', error: parsed.error };
  }
  try {
    return { ok: true, value: getRateForCohort(parsed.data, options) };
  } catch (e) {
    return toRuntimeFailure(e);
  }
}

/**
 * Non-throwing variant of {@link getRateTable}. When `ok` is true, the
 * `value` matches {@link getRateTable} for the same inputs and options.
 */
export function safeGetRateTable(
  input: unknown,
  options: RatesOptions = {},
): SafeResult<readonly MonthlyBaseRate[]> {
  const parsed = rateTableInputSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, kind: 'validation', error: parsed.error };
  }
  try {
    return { ok: true, value: getRateTable(parsed.data, options) };
  } catch (e) {
    return toRuntimeFailure(e);
  }
}
