import {
  API_DISCLAIMER,
  apiHttpStatus,
  getHealth,
  handleGetCurrentRate,
  handleGetRateForCohort,
  handleGetRateTable,
  handleGetTaxYearRollupFromBody,
  handleRollupTaxYears,
  handleRollupTaxYearsFromPortfolio,
  handleSimulate,
  handleSimulatePortfolio,
  handleSimulateRedemption,
  toApiJsonBody,
} from './handlers.js';
import type { SafeResult } from '../safe.js';

export { API_DISCLAIMER };

const DISCLAIMER_HEADER = 'X-IGCP-Aforro-Disclaimer';

type RouteHandler = (body: unknown) => SafeResult<unknown>;

const POST_ROUTES: Readonly<Record<string, RouteHandler>> = {
  '/v1/simulate': handleSimulate,
  '/v1/portfolio': handleSimulatePortfolio,
  '/v1/redeem': handleSimulateRedemption,
  '/v1/rates/current': handleGetCurrentRate,
  '/v1/rates/cohort': handleGetRateForCohort,
  '/v1/rates/table': handleGetRateTable,
  '/v1/tax-year/rollup': handleRollupTaxYears,
  '/v1/tax-year/rollup-portfolio': handleRollupTaxYearsFromPortfolio,
  '/v1/tax-year/get': handleGetTaxYearRollupFromBody,
};

function corsHeaders(): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function baseHeaders(extra?: Record<string, string>): Headers {
  return new Headers({
    ...corsHeaders(),
    [DISCLAIMER_HEADER]: API_DISCLAIMER,
    'Content-Type': 'application/json; charset=utf-8',
    ...extra,
  });
}

function jsonResponse(body: unknown, status: number, extra?: Record<string, string>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: baseHeaders(extra),
  });
}

function safeResultResponse(result: SafeResult<unknown>): Response {
  return jsonResponse(toApiJsonBody(result), apiHttpStatus(result));
}

async function readJsonBody(request: Request): Promise<unknown> {
  const text = await request.text();
  if (text.trim() === '') {
    return {};
  }
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return null;
  }
}

/**
 * Route an incoming `Request` (Worker, local tests, or Node adapter).
 */
export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const { pathname } = url;
  const method = request.method.toUpperCase();

  if (method === 'OPTIONS' && pathname.startsWith('/v1/')) {
    return new Response(null, {
      status: 204,
      headers: baseHeaders(),
    });
  }

  if (pathname === '/health' && method === 'GET') {
    return jsonResponse(getHealth(), 200);
  }

  if (pathname.startsWith('/v1/')) {
    if (method !== 'POST') {
      return jsonResponse({ error: 'Method Not Allowed' }, 405);
    }
    const handler = POST_ROUTES[pathname];
    if (!handler) {
      return jsonResponse({ error: 'Not Found' }, 404);
    }
    const body = await readJsonBody(request);
    if (body === null) {
      return jsonResponse(
        {
          ok: false,
          kind: 'validation',
          error: { issues: [{ message: 'Invalid JSON body' }] },
        },
        400,
      );
    }
    return safeResultResponse(handler(body));
  }

  if (pathname === '/health') {
    return jsonResponse({ error: 'Method Not Allowed' }, 405);
  }

  return jsonResponse({ error: 'Not Found' }, 404);
}
