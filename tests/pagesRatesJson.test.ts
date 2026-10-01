import { gzipSync, gunzipSync } from 'node:zlib';
import { describe, expect, it } from 'vitest';
import {
  LATEST_CACHE_CONTROL,
  SNAPSHOT_CACHE_CONTROL,
  serveGzippedJson,
} from '../worker/functions/_lib/gzippedJson.js';
import { onRequest as latest } from '../worker/functions/rates.json.js';
import { onRequest as snapshot } from '../worker/functions/v/[version]/rates.json.js';

const SITE = 'https://igcp-aforro.example';
const JSON_BODY = '{"schemaVersion":1}';
const GZ = gzipSync(JSON_BODY);

/** Fake Pages `env.ASSETS` serving a fixed set of paths; records requests. */
function fakeAssets(files: Record<string, Uint8Array>) {
  const requests: Request[] = [];
  return {
    requests,
    ASSETS: {
      async fetch(input: Request): Promise<Response> {
        requests.push(input);
        const { pathname } = new URL(input.url);
        const file = files[pathname];
        if (!file) {
          return new Response('<html>404</html>', {
            status: 404,
            headers: { 'Content-Type': 'text/html' },
          });
        }
        // Like the real asset server: honour Range with a truncated 206.
        if (input.headers.has('Range')) {
          return new Response(file.slice(0, 4), {
            status: 206,
            headers: {
              'Content-Type': 'application/gzip',
              'Content-Range': `bytes 0-3/${file.length}`,
            },
          });
        }
        if (input.headers.get('If-None-Match') === '"abc"') {
          return new Response(null, { status: 304, headers: { ETag: '"abc"' } });
        }
        return new Response(file, {
          status: 200,
          headers: { 'Content-Type': 'application/gzip', ETag: '"abc"' },
        });
      },
    },
  };
}

function ctx(path: string, assets: ReturnType<typeof fakeAssets>, init?: RequestInit) {
  return { request: new Request(`${SITE}${path}`, init), env: { ASSETS: assets.ASSETS } };
}

describe('Pages Function: gzipped rates.json', () => {
  it('serves /rates.json from /rates.json.gz with gzip encoding headers', async () => {
    const assets = fakeAssets({ '/rates.json.gz': GZ });
    const res = await latest(ctx('/rates.json', assets));

    expect(new URL(assets.requests[0]?.url ?? '').pathname).toBe('/rates.json.gz');
    expect(res.status).toBe(200);
    expect(res.headers.get('Content-Type')).toBe('application/json');
    expect(res.headers.get('Content-Encoding')).toBe('gzip');
    expect(res.headers.get('Cache-Control')).toBe(LATEST_CACHE_CONTROL);
    expect(res.headers.get('ETag')).toBe('"abc"');
    // Body is passed through untouched: still the pre-gzipped bytes.
    const body = Buffer.from(await res.arrayBuffer());
    expect(gunzipSync(body).toString('utf8')).toBe(JSON_BODY);
  });

  it('serves /v/<ver>/rates.json from the matching .gz with immutable caching', async () => {
    const assets = fakeAssets({ '/v/2026.901.0/rates.json.gz': GZ });
    const res = await snapshot(ctx('/v/2026.901.0/rates.json', assets));

    expect(new URL(assets.requests[0]?.url ?? '').pathname).toBe('/v/2026.901.0/rates.json.gz');
    expect(res.status).toBe(200);
    expect(res.headers.get('Content-Encoding')).toBe('gzip');
    expect(res.headers.get('Cache-Control')).toBe(SNAPSHOT_CACHE_CONTROL);
  });

  it('returns a plain 404 (not gzip-labelled HTML) when the snapshot does not exist', async () => {
    const assets = fakeAssets({});
    const res = await snapshot(ctx('/v/1999.1.0/rates.json', assets));

    expect(res.status).toBe(404);
    expect(res.headers.get('Content-Encoding')).toBeNull();
    expect(res.headers.get('Content-Type')).toMatch(/^text\/plain/);
  });

  it('passes conditional requests through and returns 304 without a body', async () => {
    const assets = fakeAssets({ '/rates.json.gz': GZ });
    const res = await latest(ctx('/rates.json', assets, { headers: { 'If-None-Match': '"abc"' } }));

    expect(res.status).toBe(304);
    expect(res.headers.get('ETag')).toBe('"abc"');
    expect(res.headers.get('Cache-Control')).toBe(LATEST_CACHE_CONTROL);
    expect(res.body).toBeNull();
  });

  it('does not forward Range to ASSETS: always a full 200 body, never a truncated 206', async () => {
    const assets = fakeAssets({ '/rates.json.gz': GZ });
    const res = await latest(ctx('/rates.json', assets, { headers: { Range: 'bytes=0-3' } }));

    expect(assets.requests[0]?.headers.has('Range')).toBe(false);
    expect(res.status).toBe(200);
    const body = Buffer.from(await res.arrayBuffer());
    expect(gunzipSync(body).toString('utf8')).toBe(JSON_BODY);
  });

  it('rejects non-GET/HEAD methods with 405', async () => {
    const assets = fakeAssets({ '/rates.json.gz': GZ });
    const res = await serveGzippedJson(
      ctx('/rates.json', assets, { method: 'POST' }),
      LATEST_CACHE_CONTROL,
    );

    expect(res.status).toBe(405);
    expect(res.headers.get('Allow')).toBe('GET, HEAD');
    expect(assets.requests).toHaveLength(0);
  });
});
