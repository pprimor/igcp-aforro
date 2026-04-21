/**
 * Parser for IGCP "Taxas de Juro dos Certificados de Aforro" press
 * release HTML.
 *
 * The full `scripts/fetch-igcp-base-rates.ts` script (CLI plumbing,
 * fixture merge, raw HTML mirroring) composes this module; tests can
 * exercise the parser directly without spinning up a HTTP fake.
 *
 * IGCP's monthly notice always carries one canonical sentence in the
 * article body, of the form:
 *
 *   "A taxa de juro bruta para novas subscrições de Certificados de
 *    Aforro, Série F, em <mês> de <ano> foi fixada em X,YYY%."
 *
 * That value is the published gross monthly base rate for Série F that
 * downstream code (`computeBaseRate`, the cohort tables, the public
 * `rates.json`) consumes verbatim, so any drift in IGCP's markup must
 * fail loud at this boundary rather than silently regressing the
 * fixture. The contract is:
 *
 *   - Scope to the news body (`.content_body`, falling back to
 *     `<article>`, then to the whole document) before scanning so
 *     mentions in the page <title>, breadcrumb, related-news sidebar,
 *     or `<meta name="description">` cannot inject ambiguity.
 *   - Match `Série F` followed within ~400 chars by a `X,YYY%` token.
 *   - Throw {@link IgcpParseError} when zero matches are found, or
 *     when multiple matches disagree on the value.
 *   - Normalise `2,138` (PT comma decimals) -> `"2.138"` (the
 *     project-wide 3-decimal string convention) and round-trip through
 *     `big.js` so a malformed value (`2,1380`, `2,X38`) trips the
 *     parser instead of corrupting the fixture.
 */

import { parse } from 'node-html-parser';
import { formatPercent, toBig } from '../src/core/money.js';

/**
 * Thrown when the IGCP article HTML cannot be parsed into a Série F
 * monthly rate -- markup change, missing sentence, ambiguous match, or
 * unparseable decimal.
 */
export class IgcpParseError extends Error {
  override readonly name = 'IgcpParseError';
}

export interface ParsedIgcpArticle {
  /** 3-decimal percentage string, e.g. `"2.138"`. */
  readonly basePct: string;
}

/**
 * Selectors tried in order to scope the regex to the article body. The
 * first match wins; if none match the parser falls back to the full
 * document text rather than refusing to parse a slightly restructured
 * page.
 */
const SCOPE_SELECTORS = ['.content_body', 'article'] as const;

/**
 * Matches `Série F` (singular, accent required so `Séries ... e F` in
 * the title doesn't trigger) followed within a bounded window by a
 * Portuguese-formatted percent (`X,YYY%`). The window cap keeps the
 * regex from drifting across paragraphs into unrelated rate mentions
 * (e.g. the Tesouro Poupança premium tables).
 */
const SERIE_F_RATE_PATTERN = /Série\s+F\b[^%]{0,400}?(\d{1,2}),(\d{3})\s*%/gi;

/**
 * Extracts the Série F monthly base rate from an IGCP article HTML
 * document. The returned `basePct` is a 3-decimal string ready to drop
 * into `tests/fixtures/igcpPublishedBaseRates.json`.
 *
 * @throws {IgcpParseError} when no Série F + percent pair is found, or
 *         when multiple distinct values are found in the scoped body.
 */
export function parseArticle(html: string): ParsedIgcpArticle {
  const root = parse(html);

  let scopeText: string | null = null;
  for (const selector of SCOPE_SELECTORS) {
    const node = root.querySelector(selector);
    if (node) {
      scopeText = node.text;
      break;
    }
  }
  if (scopeText === null) {
    scopeText = root.text;
  }

  // Drupal mixes `&nbsp;` and stray double spaces between "abril" and
  // "de 2026" in the published markup; collapsing whitespace keeps the
  // bounded regex window honest regardless of which variant ships.
  const normalised = scopeText.replace(/\u00a0/g, ' ').replace(/\s+/g, ' ');

  const matches = [...normalised.matchAll(SERIE_F_RATE_PATTERN)];
  if (matches.length === 0) {
    throw new IgcpParseError(
      'IGCP article does not contain a Série F rate: no "Série F ... X,YYY%" sentence in scoped body',
    );
  }

  const distinct = new Set<string>();
  for (const match of matches) {
    distinct.add(`${match[1]},${match[2]}`);
  }
  if (distinct.size > 1) {
    throw new IgcpParseError(
      `IGCP article contains multiple distinct Série F rates: ${[...distinct].join(', ')}`,
    );
  }

  const [, integer, decimals] = matches[0];
  const decimalString = `${integer}.${decimals}`;
  try {
    return { basePct: formatPercent(toBig(decimalString)) };
  } catch (cause) {
    throw new IgcpParseError(
      `IGCP article contains an unparseable Série F rate "${integer},${decimals}%"`,
      { cause },
    );
  }
}
