// Pages Function for https://igcp-aforro.primor.me/rates.json (latest snapshot).
import {
  type GzippedJsonContext,
  LATEST_CACHE_CONTROL,
  serveGzippedJson,
} from './_lib/gzippedJson.js';

export const onRequest = (context: GzippedJsonContext): Promise<Response> =>
  serveGzippedJson(context, LATEST_CACHE_CONTROL);
