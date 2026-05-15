import euriborMeta from '../data/_meta.json' with { type: 'json' };
import { VERSION } from '../index.js';
import {
  type SafeResult,
  safeGetCurrentRate,
  safeGetRateForCohort,
  safeGetRateTable,
  safeGetTaxYearRollup,
  safeRollupTaxYears,
  safeRollupTaxYearsFromPortfolio,
  safeSimulate,
  safeSimulatePortfolio,
  safeSimulateRedemption,
} from '../safe.js';

/** Same discriminated union as {@link SafeResult}; used by HTTP and MCP surfaces. */
export type ApiResponse<T> = SafeResult<T>;

export const HANDLER_VERSION = VERSION;

export const API_DISCLAIMER = 'calculator-quality estimate; not official IGCP; not tax advice';

export function getHealth(): {
  version: string;
  status: 'ok';
  euriborMeta: typeof euriborMeta;
} {
  return {
    version: HANDLER_VERSION,
    status: 'ok',
    euriborMeta,
  };
}

/** JSON-serializable API body (Zod issues flattened). */
export type ApiJsonBody<T = unknown> =
  | { ok: true; value: T }
  | { ok: false; kind: 'validation'; error: { issues: unknown } }
  | { ok: false; kind: 'runtime'; message: string };

export function toApiJsonBody<T>(result: SafeResult<T>): ApiJsonBody<T> {
  if (result.ok) {
    return { ok: true, value: result.value };
  }
  if (result.kind === 'validation') {
    return {
      ok: false,
      kind: 'validation',
      error: { issues: result.error.issues },
    };
  }
  return { ok: false, kind: 'runtime', message: result.message };
}

export function apiHttpStatus(result: SafeResult<unknown>): number {
  if (result.ok) return 200;
  if (result.kind === 'validation') return 400;
  return 422;
}

export {
  safeSimulate as handleSimulate,
  safeSimulatePortfolio as handleSimulatePortfolio,
  safeSimulateRedemption as handleSimulateRedemption,
  safeGetCurrentRate as handleGetCurrentRate,
  safeGetRateForCohort as handleGetRateForCohort,
  safeGetRateTable as handleGetRateTable,
  safeRollupTaxYears as handleRollupTaxYears,
  safeRollupTaxYearsFromPortfolio as handleRollupTaxYearsFromPortfolio,
  safeGetTaxYearRollup as handleGetTaxYearRollup,
};

export function handleGetTaxYearRollupFromBody(body: unknown): SafeResult<unknown> {
  if (typeof body !== 'object' || body === null) {
    return {
      ok: false,
      kind: 'runtime',
      message: 'Expected JSON object with result and taxYear',
    };
  }
  const { result, taxYear } = body as Record<string, unknown>;
  return safeGetTaxYearRollup(result, taxYear);
}
