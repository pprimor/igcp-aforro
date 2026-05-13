import { type PortfolioResult, type SeriesCode, listSeries, simulatePortfolio } from 'igcp-aforro';
import { useEffect, useId, useMemo, useRef, useState } from 'preact/hooks';
import {
  type PortfolioPlaygroundUrlState,
  hasPortfolioPlaygroundQuery,
  parsePortfolioPlaygroundUrlState,
  serializePortfolioPlaygroundUrlState,
} from '../../../../src/portfolioPlaygroundUrlState';
import { type PlaygroundLocale, formatEur, todayIsoUtc } from './format';

const COPY_STATUS_MS = 1500;

type PortfolioSimResult = { data: PortfolioResult } | { error: string };

interface PortfolioRow {
  id: number;
  series: SeriesCode;
  subscriptionDate: string;
  units: string;
}

interface PortfolioCopy {
  heading: string;
  addRow: string;
  removeRow: string;
  asOfDate: string;
  series: string;
  subscriptionDate: string;
  units: string;
  includeSchedule: string;
  totals: string;
  bySeries: string;
  cohortDetails: string;
  rowLabel: string;
  valueNet: string;
  interestNet: string;
  irsWithheld: string;
  accruedGross: string;
  cohortCount: string;
  totalUnits: string;
  reset: string;
  copyShareLink: string;
  shareLinkCopied: string;
  shareLinkCopyFailed: string;
}

const COPY: Record<PlaygroundLocale, PortfolioCopy> = {
  en: {
    heading: 'Portfolio simulator',
    addRow: 'Add cohort',
    removeRow: 'Remove',
    asOfDate: 'As-of date',
    series: 'Series',
    subscriptionDate: 'Subscription date',
    units: 'Units',
    includeSchedule: 'Include per-cohort schedule',
    totals: 'Totals',
    bySeries: 'By series',
    cohortDetails: 'Cohort details',
    rowLabel: 'Cohort',
    valueNet: 'Value net',
    interestNet: 'Interest net',
    irsWithheld: 'IRS withheld',
    accruedGross: 'Accrued gross',
    cohortCount: 'Cohorts',
    totalUnits: 'Total units',
    reset: 'Reset to defaults',
    copyShareLink: 'Copy share link',
    shareLinkCopied: 'Share link copied!',
    shareLinkCopyFailed: 'Could not copy share link.',
  },
  'pt-PT': {
    heading: 'Simulador de portefólio',
    addRow: 'Adicionar grupo',
    removeRow: 'Remover',
    asOfDate: 'Data de referência',
    series: 'Série',
    subscriptionDate: 'Data de subscrição',
    units: 'Unidades',
    includeSchedule: 'Incluir calendário por grupo',
    totals: 'Totais',
    bySeries: 'Por série',
    cohortDetails: 'Detalhes por grupo',
    rowLabel: 'Grupo',
    valueNet: 'Valor líquido',
    interestNet: 'Juros líquidos',
    irsWithheld: 'IRS retido',
    accruedGross: 'Acumulado bruto',
    cohortCount: 'Grupos',
    totalUnits: 'Unidades totais',
    reset: 'Repor valores',
    copyShareLink: 'Copiar ligação',
    shareLinkCopied: 'Ligação copiada!',
    shareLinkCopyFailed: 'Não foi possível copiar a ligação.',
  },
};

const SERIES = listSeries().map((row) => row.code);

function getDefaultPortfolioUrlState(): PortfolioPlaygroundUrlState {
  return {
    rows: [
      { series: 'F', subscriptionDate: '2024-03-15', units: '1000', irsRate: '' },
      { series: 'E', subscriptionDate: '2018-01-15', units: '1000', irsRate: '' },
      { series: 'D', subscriptionDate: '2017-10-01', units: '1000', irsRate: '' },
    ],
    asOfDate: todayIsoUtc(),
    includeSchedule: false,
  };
}

function mapUrlStateToRows(state: PortfolioPlaygroundUrlState): PortfolioRow[] {
  return state.rows.map((row, index) => ({
    id: index + 1,
    series: row.series,
    subscriptionDate: row.subscriptionDate,
    units: row.units,
  }));
}

function rowsToUrlState(
  rows: PortfolioRow[],
  asOfDate: string,
  includeSchedule: boolean,
): PortfolioPlaygroundUrlState {
  return {
    rows: rows.map((row) => ({
      series: row.series,
      subscriptionDate: row.subscriptionDate,
      units: row.units,
      irsRate: '',
    })),
    asOfDate,
    includeSchedule,
  };
}

function replaceCurrentUrl(search: URLSearchParams | null): void {
  const url = new URL(window.location.href);
  url.search = search ? search.toString() : '';
  window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`);
}

function buildPortfolioShareUrl(state: PortfolioPlaygroundUrlState): string {
  const url = new URL(window.location.href);
  url.search = serializePortfolioPlaygroundUrlState(state).toString();
  return url.toString();
}

function nextRow(id: number): PortfolioRow {
  return {
    id,
    series: 'F',
    subscriptionDate: '2024-03-15',
    units: '1000',
  };
}

export default function PortfolioPlayground({ locale = 'en' }: { locale?: PlaygroundLocale }) {
  const copy = COPY[locale];
  const [asOfDate, setAsOfDate] = useState(todayIsoUtc());
  const [includeSchedule, setIncludeSchedule] = useState(false);
  const [rows, setRows] = useState<PortfolioRow[]>(() =>
    mapUrlStateToRows(getDefaultPortfolioUrlState()),
  );
  const [nextId, setNextId] = useState(() => getDefaultPortfolioUrlState().rows.length + 1);
  const [showCohorts, setShowCohorts] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);
  const [urlSyncEnabled, setUrlSyncEnabled] = useState(false);
  const [shareCopyStatus, setShareCopyStatus] = useState<'idle' | 'copied' | 'failed'>('idle');
  const shareCopyTimeoutRef = useRef<number | null>(null);
  const id = useId();

  useEffect(() => {
    const defaults = getDefaultPortfolioUrlState();
    const params = new URLSearchParams(window.location.search);
    const nextState = hasPortfolioPlaygroundQuery(params)
      ? parsePortfolioPlaygroundUrlState(params, defaults)
      : defaults;

    setRows(mapUrlStateToRows(nextState));
    setNextId(nextState.rows.length + 1);
    setAsOfDate(nextState.asOfDate);
    setIncludeSchedule(nextState.includeSchedule);
    setUrlSyncEnabled(hasPortfolioPlaygroundQuery(params));
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (!hasHydrated || !urlSyncEnabled) return;
    replaceCurrentUrl(
      serializePortfolioPlaygroundUrlState(rowsToUrlState(rows, asOfDate, includeSchedule)),
    );
  }, [rows, asOfDate, includeSchedule, hasHydrated, urlSyncEnabled]);

  const reset = () => {
    const defaults = getDefaultPortfolioUrlState();
    setUrlSyncEnabled(false);
    setShareCopyStatus('idle');
    replaceCurrentUrl(null);
    setRows(mapUrlStateToRows(defaults));
    setNextId(defaults.rows.length + 1);
    setAsOfDate(defaults.asOfDate);
    setIncludeSchedule(false);
  };

  const handleShareCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        buildPortfolioShareUrl(rowsToUrlState(rows, asOfDate, includeSchedule)),
      );
      setShareCopyStatus('copied');
    } catch {
      setShareCopyStatus('failed');
    }
    if (shareCopyTimeoutRef.current !== null) {
      window.clearTimeout(shareCopyTimeoutRef.current);
    }
    shareCopyTimeoutRef.current = window.setTimeout(
      () => setShareCopyStatus('idle'),
      COPY_STATUS_MS,
    );
  };

  const result = useMemo((): PortfolioSimResult => {
    try {
      return {
        data: simulatePortfolio({
          subscriptions: rows.map((row) => ({
            series: row.series,
            subscriptionDate: row.subscriptionDate,
            units: Number(row.units),
          })),
          asOfDate,
          includeSchedule,
        }),
      };
    } catch (error) {
      return { error: error instanceof Error ? error.message : String(error) };
    }
  }, [rows, asOfDate, includeSchedule]);

  const updateRow = (targetId: number, patch: Partial<PortfolioRow>) => {
    setUrlSyncEnabled(true);
    setRows((prev) => prev.map((row) => (row.id === targetId ? { ...row, ...patch } : row)));
  };

  return (
    <div class="aforro-portfolio-pg not-content">
      <style>{STYLES}</style>
      <h2>{copy.heading}</h2>

      <div class="aforro-portfolio-controls">
        <label for={`${id}-asof`}>
          <span>{copy.asOfDate}</span>
          <input
            id={`${id}-asof`}
            type="date"
            value={asOfDate}
            onInput={(e) => {
              setUrlSyncEnabled(true);
              setAsOfDate((e.target as HTMLInputElement).value);
            }}
          />
        </label>
        <label class="aforro-portfolio-checkbox">
          <input
            type="checkbox"
            checked={includeSchedule}
            onChange={(e) => {
              setUrlSyncEnabled(true);
              setIncludeSchedule((e.target as HTMLInputElement).checked);
            }}
          />
          {copy.includeSchedule}
        </label>
        <div class="aforro-portfolio-form-actions">
          <button type="button" class="aforro-pg-link-btn" onClick={reset}>
            {copy.reset}
          </button>
          <button type="button" class="aforro-pg-link-btn" onClick={handleShareCopy}>
            {copy.copyShareLink}
          </button>
        </div>
        <output class="aforro-pg-copy-status" aria-live="polite">
          {shareCopyStatus === 'copied'
            ? copy.shareLinkCopied
            : shareCopyStatus === 'failed'
              ? copy.shareLinkCopyFailed
              : ''}
        </output>
      </div>

      <table class="aforro-portfolio-table">
        <thead>
          <tr>
            <th>{copy.series}</th>
            <th>{copy.subscriptionDate}</th>
            <th>{copy.units}</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                <select
                  value={row.series}
                  onInput={(e) =>
                    updateRow(row.id, {
                      series: (e.target as HTMLSelectElement).value as SeriesCode,
                    })
                  }
                >
                  {SERIES.map((series) => (
                    <option key={series} value={series}>
                      {series}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input
                  type="date"
                  value={row.subscriptionDate}
                  onInput={(e) =>
                    updateRow(row.id, { subscriptionDate: (e.target as HTMLInputElement).value })
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  step={1}
                  value={row.units}
                  onInput={(e) =>
                    updateRow(row.id, { units: (e.target as HTMLInputElement).value })
                  }
                />
              </td>
              <td>
                <button
                  type="button"
                  disabled={rows.length <= 1}
                  onClick={() => {
                    setUrlSyncEnabled(true);
                    setRows((prev) => prev.filter((item) => item.id !== row.id));
                  }}
                >
                  {copy.removeRow}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        type="button"
        onClick={() => {
          setUrlSyncEnabled(true);
          setRows((prev) => [...prev, nextRow(nextId)]);
          setNextId((prev) => prev + 1);
        }}
      >
        {copy.addRow}
      </button>

      {'error' in result && (
        <div class="aforro-portfolio-error" role="alert">
          {result.error}
        </div>
      )}

      {'data' in result && (
        <>
          <section class="aforro-portfolio-card">
            <h3>{copy.totals}</h3>
            <dl>
              <div>
                <dt>{copy.totalUnits}</dt>
                <dd>{result.data.totalUnits}</dd>
              </div>
              <div>
                <dt>{copy.valueNet}</dt>
                <dd>{formatEur(result.data.totalValueNet, locale)}</dd>
              </div>
              <div>
                <dt>{copy.interestNet}</dt>
                <dd>{formatEur(result.data.totalInterestNet, locale)}</dd>
              </div>
              <div>
                <dt>{copy.irsWithheld}</dt>
                <dd>{formatEur(result.data.totalIrsWithheld, locale)}</dd>
              </div>
              <div>
                <dt>{copy.accruedGross}</dt>
                <dd>{formatEur(result.data.totalAccruedGross, locale)}</dd>
              </div>
            </dl>
          </section>

          <section class="aforro-portfolio-card">
            <h3>{copy.bySeries}</h3>
            <table class="aforro-portfolio-table">
              <thead>
                <tr>
                  <th>{copy.series}</th>
                  <th>{copy.totalUnits}</th>
                  <th>{copy.cohortCount}</th>
                  <th>{copy.valueNet}</th>
                  <th>{copy.interestNet}</th>
                  <th>{copy.irsWithheld}</th>
                </tr>
              </thead>
              <tbody>
                {result.data.bySeries.map((row) => (
                  <tr key={row.series}>
                    <td>{row.series}</td>
                    <td>{row.units}</td>
                    <td>{row.cohortCount}</td>
                    <td>{formatEur(row.valueNet, locale)}</td>
                    <td>{formatEur(row.interestNet, locale)}</td>
                    <td>{formatEur(row.irsWithheld, locale)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section class="aforro-portfolio-card">
            <button type="button" onClick={() => setShowCohorts((prev) => !prev)}>
              {copy.cohortDetails}
            </button>
            {showCohorts && (
              <div class="aforro-portfolio-cohorts">
                {result.data.cohorts.map((cohort, index) => (
                  <article key={`${cohort.series}-${cohort.subscriptionDate}-${index}`}>
                    <h4>
                      {copy.rowLabel} {index + 1} - {cohort.series} - {cohort.subscriptionDate}
                    </h4>
                    <p>
                      {copy.valueNet}: {formatEur(cohort.currentValueNet, locale)} |{' '}
                      {copy.interestNet}: {formatEur(cohort.totalInterestNet, locale)} |{' '}
                      {copy.irsWithheld}: {formatEur(cohort.totalIrsWithheld, locale)}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}

const STYLES = `
.aforro-portfolio-pg { display: flex; flex-direction: column; gap: 1rem; }
.aforro-portfolio-controls { display: flex; flex-wrap: wrap; gap: 1rem; align-items: flex-start; }
.aforro-portfolio-controls label { display: flex; flex-direction: column; gap: 0.3rem; }
.aforro-portfolio-checkbox { justify-content: flex-end; }
.aforro-portfolio-form-actions {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.75rem;
  align-items: center;
}
.aforro-pg-link-btn {
  background: transparent;
  border: 0;
  padding: 0;
  color: var(--sl-color-accent);
  font: inherit;
  font-size: 0.78rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
}
.aforro-pg-link-btn:hover { text-decoration-thickness: 2px; }
.aforro-pg-link-btn:focus-visible {
  outline: 2px solid var(--sl-color-accent);
  outline-offset: 2px;
  border-radius: 2px;
}
.aforro-pg-copy-status {
  flex-basis: 100%;
  min-height: 1rem;
  color: var(--sl-color-text);
  font-size: 0.78rem;
  opacity: 0.72;
}
.aforro-portfolio-table { width: 100%; border-collapse: collapse; }
.aforro-portfolio-table th, .aforro-portfolio-table td {
  border: 1px solid var(--sl-color-hairline, var(--sl-color-gray-5));
  padding: 0.4rem 0.5rem;
  text-align: left;
}
.aforro-portfolio-table input, .aforro-portfolio-table select {
  width: 100%;
  min-width: 0;
}
.aforro-portfolio-card {
  border: 1px solid var(--sl-color-hairline, var(--sl-color-gray-5));
  border-radius: 0.4rem;
  padding: 0.8rem 1rem;
}
.aforro-portfolio-card h3 { margin-top: 0; margin-bottom: 0.75rem; }
.aforro-portfolio-card dl { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.6rem; margin: 0; }
.aforro-portfolio-card dt { opacity: 0.8; font-size: 0.85rem; }
.aforro-portfolio-card dd { margin: 0; font-weight: 600; }
.aforro-portfolio-error {
  border: 1px solid var(--sl-color-red, #d33);
  color: var(--sl-color-red, #d33);
  border-radius: 0.35rem;
  padding: 0.5rem 0.75rem;
}
.aforro-portfolio-cohorts article + article { margin-top: 0.5rem; }
`;
