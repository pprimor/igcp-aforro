// Pages Function for https://igcp-aforro.primor.me/v/<calver>/rates.json
// (per-release snapshot; immutable once deployed).
import {
  type GzippedJsonContext,
  SNAPSHOT_CACHE_CONTROL,
  serveGzippedJson,
} from '../../_lib/gzippedJson.js';

export const onRequest = (context: GzippedJsonContext): Promise<Response> =>
  serveGzippedJson(context, SNAPSHOT_CACHE_CONTROL);
