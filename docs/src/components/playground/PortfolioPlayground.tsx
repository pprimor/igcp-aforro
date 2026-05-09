import { type SeriesCode, listSeries, simulatePortfolio } from 'igcp-aforro';
import { useId, useMemo, useState } from 'preact/hooks';
import { type PlaygroundLocale, formatEur, todayIsoUtc } from './format';

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
  },
};

const SERIES = listSeries().map((row) => row.code);

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
  const [rows, setRows] = useState<PortfolioRow[]>([
    nextRow(1),
    { id: 2, series: 'E', subscriptionDate: '2018-01-15', units: '1000' },
    { id: 3, series: 'D', subscriptionDate: '2017-10-01', units: '1000' },
  ]);
  const [nextId, setNextId] = useState(4);
  const [showCohorts, setShowCohorts] = useState(false);
  const id = useId();

  const result = useMemo(() => {
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
            onInput={(e) => setAsOfDate((e.target as HTMLInputElement).value)}
          />
        </label>
        <label class="aforro-portfolio-checkbox">
          <input
            type="checkbox"
            checked={includeSchedule}
            onChange={(e) => setIncludeSchedule((e.target as HTMLInputElement).checked)}
          />
          {copy.includeSchedule}
        </label>
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
                  onClick={() => setRows((prev) => prev.filter((item) => item.id !== row.id))}
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
.aforro-portfolio-controls { display: flex; flex-wrap: wrap; gap: 1rem; }
.aforro-portfolio-controls label { display: flex; flex-direction: column; gap: 0.3rem; }
.aforro-portfolio-checkbox { justify-content: flex-end; }
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
