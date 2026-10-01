// Shared handler for the Cloudflare Pages Functions that serve rates.json.
//
// rates.json is ~43 MB raw, over Pages' 25 MiB per-file asset limit, so the
// deploy workflow stages it pre-gzipped as `<path>.gz`. Pages ignores a
// `Content-Encoding` set in `_headers` (live: the old setup served gzip bytes
// labelled `application/json` with no Content-Encoding), so these Functions
// fetch the `.gz` asset and return it with `Content-Encoding: gzip`.
// `encodeBody: 'manual'` tells the Workers runtime the body is already
// encoded and must be sent as-is rather than compressed again.

/** The subset of the Pages `ASSETS` binding these Functions use. */
export interface AssetsBinding {
  fetch(request: Request): Promise<Response>;
}

/** The subset of the Pages Function `EventContext` these Functions use. */
export interface GzippedJsonContext {
  request: Request;
  env: { ASSETS: AssetsBinding };
}

// No `no-transform`: with it, Cloudflare's edge may not decompress for clients
// that don't send `Accept-Encoding: gzip` (e.g. Python's urllib in the README).
export const LATEST_CACHE_CONTROL = 'public, max-age=0, must-revalidate';
export const SNAPSHOT_CACHE_CONTROL = 'public, max-age=31536000, immutable';

/** Serve `<request path>.gz` as gzip-encoded JSON, or 404 if it isn't deployed. */
export async function serveGzippedJson(
  { request, env }: GzippedJsonContext,
  cacheControl: string,
): Promise<Response> {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('Method not allowed\n', {
      status: 405,
      headers: { Allow: 'GET, HEAD', 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  const assetUrl = new URL(request.url);
  assetUrl.pathname = `${assetUrl.pathname}.gz`;
  // Reuse the incoming request so conditional headers (If-None-Match) reach
  // the asset server and a 304 can short-circuit the 20 MB transfer.
  const assetRequest = new Request(assetUrl, request);
  // Full bodies only: a forwarded Range yields a 206 slice of the gzip bytes,
  // which would go out below as a 200 with a truncated body and no Content-Range.
  assetRequest.headers.delete('Range');
  const asset = await env.ASSETS.fetch(assetRequest);

  const headers = new Headers({ 'Cache-Control': cacheControl, Vary: 'Accept-Encoding' });
  const etag = asset.headers.get('ETag');
  if (etag) headers.set('ETag', etag);

  if (asset.status === 304) {
    return new Response(null, { status: 304, headers });
  }
  if (!asset.ok) {
    // Pages answers a missing asset with the site's 404.html; don't relabel
    // that HTML as gzip JSON.
    return new Response('Not found\n', {
      status: 404,
      headers: { 'Cache-Control': 'no-store', 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  headers.set('Content-Type', 'application/json');
  headers.set('Content-Encoding', 'gzip');
  return new Response(asset.body, { status: 200, headers, encodeBody: 'manual' });
}
