import { describe, expect, it } from 'vitest';
import { API_DISCLAIMER } from '../src/api/handlers.js';
import { handleRequest } from '../src/api/router.js';

const DISCLAIMER_HEADER = 'X-IGCP-Aforro-Disclaimer';

describe('handleRequest', () => {
  it('GET /health returns version and euribor meta', async () => {
    const res = await handleRequest(new Request('https://api.example/health'));
    expect(res.status).toBe(200);
    expect(res.headers.get(DISCLAIMER_HEADER)).toBe(API_DISCLAIMER);
    const body = (await res.json()) as {
      status: string;
      version: string;
      euriborMeta: { euribor: { lastRefreshedAt: string } };
    };
    expect(body.status).toBe('ok');
    expect(body.version).toMatch(/^\d{4}\.\d+\.\d+$/);
    expect(body.euriborMeta.euribor.lastRefreshedAt).toBeTruthy();
  });

  it('POST /v1/simulate returns 200 for valid input', async () => {
    const res = await handleRequest(
      new Request('https://api.example/v1/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          series: 'F',
          subscriptionDate: '2024-03-15',
          units: 1000,
          includeSchedule: true,
        }),
      }),
    );
    expect(res.status).toBe(200);
    const body = (await res.json()) as { ok: boolean; value?: { series: string } };
    expect(body.ok).toBe(true);
    expect(body.value?.series).toBe('F');
  });

  it('POST /v1/simulate returns 400 for validation errors', async () => {
    const res = await handleRequest(
      new Request('https://api.example/v1/simulate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          series: 'F',
          subscriptionDate: '2024-03-15',
          units: 99,
        }),
      }),
    );
    expect(res.status).toBe(400);
    const body = (await res.json()) as {
      ok: false;
      kind: string;
      error: { issues: unknown[] };
    };
    expect(body.ok).toBe(false);
    expect(body.kind).toBe('validation');
    expect(body.error.issues.length).toBeGreaterThan(0);
  });

  it('OPTIONS /v1/simulate returns 204 with CORS headers', async () => {
    const res = await handleRequest(
      new Request('https://api.example/v1/simulate', { method: 'OPTIONS' }),
    );
    expect(res.status).toBe(204);
    expect(res.headers.get('Access-Control-Allow-Origin')).toBe('*');
    expect(res.headers.get('Access-Control-Allow-Methods')).toContain('POST');
    expect(res.headers.get(DISCLAIMER_HEADER)).toBe(API_DISCLAIMER);
  });
});
