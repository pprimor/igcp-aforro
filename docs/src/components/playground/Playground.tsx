import {
  type SeriesCode,
  type SimulateInput,
  type SimulateResult,
  getSeries,
  listSeries,
  simulate,
} from 'igcp-aforro';
import { useEffect, useId, useMemo, useRef, useState } from 'preact/hooks';
import {
  daysBetween,
  formatDuration,
  formatEur,
  formatRateFraction,
  formatRatePct,
  projectNet,
  todayIsoUtc,
} from './format';

const DEBOUNCE_MS = 50;
const SERIES_OPTIONS = listSeries();

const INITIAL_FORM: FormState = {
  series: 'F',
  subscriptionDate: '2024-03-15',
  units: '1000',
  asOfDate: todayIsoUtc(),
  irsRate: '',
  includeSchedule: true,
};

type FieldErrors = Record<string, string | undefined>;
type SnippetMode = 'ts' | 'cli' | 'json';

interface FormState {
  series: SeriesCode;
  subscriptionDate: string;
  units: string;
  asOfDate: string;
  irsRate: string;
  includeSchedule: boolean;
}

interface SimState {
  result: SimulateResult | null;
  fieldErrors: FieldErrors;
  generalError: string | null;
}

function buildInput(form: FormState): SimulateInput {
  const units = Number(form.units);
  const input: SimulateInput = {
    series: form.series,
    subscriptionDate: form.subscriptionDate,
    units: Number.isFinite(units) ? units : Number.NaN,
    asOfDate: form.asOfDate,
    includeSchedule: form.includeSchedule,
  };
  if (form.irsRate.trim() !== '') {
    const parsed = Number(form.irsRate);
    return { ...input, irsRate: Number.isFinite(parsed) ? parsed : Number.NaN };
  }
  return input;
}

interface ZodIssueLike {
  path: ReadonlyArray<string | number>;
  message: string;
}

function isZodLikeError(err: unknown): err is { name: string; issues: ZodIssueLike[] } {
  return (
    typeof err === 'object' &&
    err !== null &&
    'issues' in err &&
    Array.isArray((err as { issues?: unknown }).issues)
  );
}

function runSimulate(form: FormState): SimState {
  try {
    const result = simulate(buildInput(form));
    return { result, fieldErrors: {}, generalError: null };
  } catch (err) {
    if (isZodLikeError(err)) {
      const fieldErrors: FieldErrors = {};
      for (const issue of err.issues) {
        const key = String(issue.path[0] ?? '_');
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      return { result: null, fieldErrors, generalError: null };
    }
    const message = err instanceof Error ? err.message : String(err);
    return { result: null, fieldErrors: {}, generalError: message };
  }
}

function buildTsSnippet(form: FormState): string {
  const lines = [
    "import { simulate } from 'igcp-aforro';",
    '',
    'const result = simulate({',
    `  series: '${form.series}',`,
    `  subscriptionDate: '${form.subscriptionDate}',`,
    `  units: ${form.units},`,
    `  asOfDate: '${form.asOfDate}',`,
  ];
  if (form.irsRate.trim() !== '') {
    lines.push(`  irsRate: ${form.irsRate},`);
  }
  if (form.includeSchedule) {
    lines.push('  includeSchedule: true,');
  }
  lines.push('});');
  return lines.join('\n');
}

function buildCliSnippet(form: FormState): string {
  const parts = [
    'aforro simulate',
    `--series ${form.series}`,
    `--subscribed ${form.subscriptionDate}`,
    `--units ${form.units}`,
    `--as-of ${form.asOfDate}`,
  ];
  if (form.irsRate.trim() !== '') parts.push(`--irs ${form.irsRate}`);
  if (form.includeSchedule) parts.push('--schedule');
  return parts.join(' \\\n  ');
}

function buildJsonSnippet(result: SimulateResult | null): string {
  if (!result) return '';
  return JSON.stringify(result, null, 2);
}

function FieldError({ id, message }: { id: string; message: string | undefined }) {
  if (!message) return null;
  return (
    <p id={id} class="aforro-pg-error">
      {message}
    </p>
  );
}

export default function Playground() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [sim, setSim] = useState<SimState>(() => runSimulate(INITIAL_FORM));
  const [snippetMode, setSnippetMode] = useState<SnippetMode>('ts');
  const [copied, setCopied] = useState(false);
  const debounceRef = useRef<number | null>(null);

  const ids = {
    series: useId(),
    subscribed: useId(),
    units: useId(),
    asOf: useId(),
    irs: useId(),
    schedule: useId(),
    summaryHeading: useId(),
    accruedHeading: useId(),
    scheduleHeading: useId(),
    snippetHeading: useId(),
  };

  useEffect(() => {
    if (debounceRef.current !== null) {
      window.clearTimeout(debounceRef.current);
    }
    debounceRef.current = window.setTimeout(() => {
      setSim(runSimulate(form));
    }, DEBOUNCE_MS);
    return () => {
      if (debounceRef.current !== null) {
        window.clearTimeout(debounceRef.current);
      }
    };
  }, [form]);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const reset = () => setForm({ ...INITIAL_FORM, asOfDate: todayIsoUtc() });
  const setAsOfToday = () => update('asOfDate', todayIsoUtc());
  const selectedSeries = useMemo(() => getSeries(form.series), [form.series]);

  const snippet = useMemo(() => {
    switch (snippetMode) {
      case 'ts':
        return buildTsSnippet(form);
      case 'cli':
        return buildCliSnippet(form);
      case 'json':
        return buildJsonSnippet(sim.result);
    }
  }, [snippetMode, form, sim.result]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  const { result, fieldErrors, generalError } = sim;
  const resultSeriesName = result ? getSeries(result.series).name : selectedSeries.name;
  const irsRateNum = result ? Number(result.irsRate) : 0;
  const accruedGross = result ? Number(result.accruedSinceLastCapitalization) : 0;
  const hasAccrued = Number.isFinite(accruedGross) && accruedGross > 0;
  const accruedNet = result
    ? projectNet(result.accruedSinceLastCapitalization, irsRateNum)
    : '0.00';

  const irsPlaceholder = result ? result.irsRate : selectedSeries.defaultIrsRate;
  const subscriptionDateHelpId = `${ids.subscribed}-help`;
  const subscriptionDateErrorId = `${ids.subscribed}-err`;
  const subscriptionDateDescription = [
    subscriptionDateHelpId,
    fieldErrors.subscriptionDate ? subscriptionDateErrorId : '',
  ]
    .filter(Boolean)
    .join(' ');
  const unitsHelpId = `${ids.units}-help`;
  const unitsErrorId = `${ids.units}-err`;
  const unitsDescription = [unitsHelpId, fieldErrors.units ? unitsErrorId : '']
    .filter(Boolean)
    .join(' ');
  const unitsRangeLabel = `${selectedSeries.minUnits.toLocaleString(
    'en-US',
  )}-${selectedSeries.maxUnits.toLocaleString('en-US')}`;

  const maturityRemaining = useMemo(() => {
    if (!result) return null;
    if (result.matured) return { matured: true as const };
    const days = daysBetween(result.asOfDate, result.maturityDate);
    if (days === null || days <= 0) return null;
    return { matured: false as const, label: formatDuration(days) };
  }, [result]);

  const elapsedSinceSub = useMemo(() => {
    if (!result) return null;
    const days = daysBetween(result.subscriptionDate, result.asOfDate);
    if (days === null || days <= 0) return null;
    return formatDuration(days);
  }, [result]);

  const lastQuarterIndex = result?.schedule ? result.schedule.length - 1 : -1;

  return (
    <div class="aforro-pg not-content">
      <style>{STYLES}</style>

      <form class="aforro-pg-form" onSubmit={(e) => e.preventDefault()}>
        <div class="aforro-pg-field">
          <label for={ids.series}>Series</label>
          <select
            id={ids.series}
            value={form.series}
            onInput={(e) => update('series', (e.target as HTMLSelectElement).value as SeriesCode)}
          >
            {SERIES_OPTIONS.map((series) => (
              <option key={series.code} value={series.code}>
                {series.name}
              </option>
            ))}
          </select>
        </div>

        <div class="aforro-pg-field">
          <label for={ids.subscribed}>Subscription date</label>
          <input
            id={ids.subscribed}
            type="date"
            value={form.subscriptionDate}
            min={selectedSeries.subscriptionStartDate}
            max={selectedSeries.subscriptionEndDate}
            aria-invalid={fieldErrors.subscriptionDate ? 'true' : undefined}
            aria-describedby={subscriptionDateDescription}
            onInput={(e) => update('subscriptionDate', (e.target as HTMLInputElement).value)}
          />
          <p id={subscriptionDateHelpId} class="aforro-pg-help">
            {selectedSeries.subscriptionEndDate
              ? `${selectedSeries.name} subscriptions: ${selectedSeries.subscriptionStartDate} to ${selectedSeries.subscriptionEndDate}.`
              : `${selectedSeries.name} subscriptions opened on ${selectedSeries.subscriptionStartDate}.`}
          </p>
          <FieldError id={subscriptionDateErrorId} message={fieldErrors.subscriptionDate} />
        </div>

        <div class="aforro-pg-field">
          <label for={ids.units}>Units (€)</label>
          <input
            id={ids.units}
            type="number"
            value={form.units}
            min={selectedSeries.minUnits}
            max={selectedSeries.maxUnits}
            step={1}
            inputMode="numeric"
            aria-invalid={fieldErrors.units ? 'true' : undefined}
            aria-describedby={unitsDescription}
            onInput={(e) => update('units', (e.target as HTMLInputElement).value)}
          />
          <p id={unitsHelpId} class="aforro-pg-help">
            {selectedSeries.name} accepts {unitsRangeLabel} units.
          </p>
          <FieldError id={unitsErrorId} message={fieldErrors.units} />
        </div>

        <div class="aforro-pg-field">
          <label for={ids.asOf}>
            <span>As-of date</span>
            <button
              type="button"
              class="aforro-pg-link-btn"
              onClick={setAsOfToday}
              title="Set to today (UTC)"
            >
              Today
            </button>
          </label>
          <input
            id={ids.asOf}
            type="date"
            value={form.asOfDate}
            min={form.subscriptionDate}
            aria-invalid={fieldErrors.asOfDate ? 'true' : undefined}
            aria-describedby={fieldErrors.asOfDate ? `${ids.asOf}-err` : undefined}
            onInput={(e) => update('asOfDate', (e.target as HTMLInputElement).value)}
          />
          <FieldError id={`${ids.asOf}-err`} message={fieldErrors.asOfDate} />
        </div>

        <div class="aforro-pg-field">
          <label for={ids.irs}>IRS rate (optional)</label>
          <input
            id={ids.irs}
            type="number"
            value={form.irsRate}
            placeholder={irsPlaceholder}
            min={0}
            max={1}
            step={0.01}
            inputMode="decimal"
            aria-invalid={fieldErrors.irsRate ? 'true' : undefined}
            aria-describedby={fieldErrors.irsRate ? `${ids.irs}-err` : undefined}
            onInput={(e) => update('irsRate', (e.target as HTMLInputElement).value)}
          />
          <FieldError id={`${ids.irs}-err`} message={fieldErrors.irsRate} />
        </div>

        <div class="aforro-pg-field aforro-pg-field-checkbox">
          <label>
            <input
              id={ids.schedule}
              type="checkbox"
              checked={form.includeSchedule}
              onChange={(e) => update('includeSchedule', (e.target as HTMLInputElement).checked)}
            />
            Include quarterly schedule
          </label>
          <button type="button" class="aforro-pg-link-btn" onClick={reset}>
            Reset to defaults
          </button>
        </div>
      </form>

      {generalError && (
        <div class="aforro-pg-card aforro-pg-card-error" role="alert">
          <strong>Error:</strong> {generalError}
        </div>
      )}

      {result && (
        <div class="aforro-pg-results" aria-live="polite">
          <section class="aforro-pg-card" aria-labelledby={ids.summaryHeading}>
            <header class="aforro-pg-card-head">
              <h3 id={ids.summaryHeading}>Summary</h3>
              <div class="aforro-pg-meta">
                <span class="aforro-pg-badge">{resultSeriesName}</span>
                {elapsedSinceSub && (
                  <span class="aforro-pg-meta-item">
                    <span class="aforro-pg-meta-label">Elapsed</span> {elapsedSinceSub}
                  </span>
                )}
                {maturityRemaining?.matured ? (
                  <span class="aforro-pg-badge aforro-pg-badge-matured">Matured</span>
                ) : maturityRemaining ? (
                  <span class="aforro-pg-meta-item">
                    <span class="aforro-pg-meta-label">Matures in</span> {maturityRemaining.label}
                  </span>
                ) : null}
              </div>
            </header>
            <dl class="aforro-pg-grid">
              <SummaryItem label="Current value (net)" value={result.currentValueNet} accent />
              <SummaryItem label="Current value (gross)" value={result.currentValueGross} />
              <SummaryItem label="Total interest (net)" value={result.totalInterestNet} />
              <SummaryItem label="Total IRS withheld" value={result.totalIrsWithheld} />
              <div class="aforro-pg-grid-item">
                <dt>Effective IRS rate</dt>
                <dd>{formatRateFraction(result.irsRate)}</dd>
                <code>{result.irsRate}</code>
              </div>
              <div class="aforro-pg-grid-item">
                <dt>Maturity date</dt>
                <dd>{result.maturityDate}</dd>
                <code>{result.matured ? 'matured' : 'pending'}</code>
              </div>
            </dl>
          </section>

          {hasAccrued && (
            <section class="aforro-pg-card" aria-labelledby={ids.accruedHeading}>
              <h3 id={ids.accruedHeading}>Mid-quarter accrued</h3>
              <p>
                Gross accrued since the last capitalization:{' '}
                <strong>{formatEur(result.accruedSinceLastCapitalization)}</strong>{' '}
                <code>{result.accruedSinceLastCapitalization}</code>
              </p>
              <p>
                Projected net (after {formatRateFraction(result.irsRate)} IRS):{' '}
                <strong>{formatEur(accruedNet)}</strong> <code>{accruedNet}</code>
              </p>
              <p class="aforro-pg-note">
                IRS is only withheld at capitalization, so this is a UI-side projection — see the{' '}
                <code>accruedSinceLastCapitalization</code> field docs for details.
              </p>
            </section>
          )}

          {result.schedule && result.schedule.length > 0 && (
            <section class="aforro-pg-card" aria-labelledby={ids.scheduleHeading}>
              <h3 id={ids.scheduleHeading}>Schedule ({result.schedule.length} quarters)</h3>
              <div class="aforro-pg-table-wrap">
                <table class="aforro-pg-table">
                  <thead>
                    <tr>
                      <th scope="col">Quarter end</th>
                      <th scope="col">Annual rate</th>
                      <th scope="col">Quarterly rate</th>
                      <th scope="col">Interest gross</th>
                      <th scope="col">IRS withheld</th>
                      <th scope="col">Interest net</th>
                      <th scope="col">Balance after</th>
                      <th scope="col">Tier</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.schedule.map((row, i) => (
                      <tr
                        key={row.quarterEndDate}
                        class={i === lastQuarterIndex ? 'aforro-pg-row-latest' : undefined}
                      >
                        <td>{row.quarterEndDate}</td>
                        <td>{formatRateFraction(row.annualRate)}</td>
                        <td>{formatRateFraction(row.quarterlyRate)}</td>
                        <td>{formatEur(row.interestGross)}</td>
                        <td>{formatEur(row.irsWithheld)}</td>
                        <td>{formatEur(row.interestNet)}</td>
                        <td>{formatEur(row.balanceAfter)}</td>
                        <td>
                          y{row.premiumTier.fromYear}–{row.premiumTier.toYear} (+
                          {formatRatePct(row.premiumTier.ratePct)})
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p class="aforro-pg-note">Highlighted row is the most recent capitalization.</p>
            </section>
          )}

          <section class="aforro-pg-card" aria-labelledby={ids.snippetHeading}>
            <div class="aforro-pg-snippet-head">
              <h3 id={ids.snippetHeading}>Copy snippet</h3>
              <div class="aforro-pg-snippet-controls">
                <div class="aforro-pg-tabs" role="tablist" aria-label="Snippet format">
                  {(['ts', 'cli', 'json'] as const).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      role="tab"
                      aria-selected={snippetMode === mode ? 'true' : 'false'}
                      class={`aforro-pg-tab ${snippetMode === mode ? 'is-active' : ''}`}
                      onClick={() => setSnippetMode(mode)}
                    >
                      {mode === 'ts' ? 'TypeScript' : mode === 'cli' ? 'CLI' : 'JSON'}
                    </button>
                  ))}
                </div>
                <button type="button" class="aforro-pg-copy" onClick={handleCopy}>
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
            <pre class="aforro-pg-pre">
              <code>{snippet}</code>
            </pre>
          </section>
        </div>
      )}
    </div>
  );
}

function SummaryItem({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div class={`aforro-pg-grid-item ${accent ? 'is-accent' : ''}`}>
      <dt>{label}</dt>
      <dd>{formatEur(value)}</dd>
      <code>{value}</code>
    </div>
  );
}

const STYLES = `
.aforro-pg {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  color: var(--sl-color-text);
}
.aforro-pg p,
.aforro-pg dl,
.aforro-pg dt,
.aforro-pg dd,
.aforro-pg h3 {
  margin: 0;
}
.aforro-pg code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
}
.aforro-pg-grid-item code,
.aforro-pg-card p code {
  display: inline-block;
  padding: 0.05rem 0.35rem;
  border-radius: 0.25rem;
  background: color-mix(in srgb, var(--sl-color-text) 8%, transparent);
  font-size: 0.78rem;
}
.aforro-pg-pre code {
  background: none;
  padding: 0;
  font-size: inherit;
}
.aforro-pg-form {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--sl-color-hairline, var(--sl-color-gray-5));
  border-radius: 0.5rem;
  background: var(--sl-color-bg-nav);
}
.aforro-pg-field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 0.9rem;
}
.aforro-pg-field label {
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
}
.aforro-pg-field input[type='date'],
.aforro-pg-field input[type='number'],
.aforro-pg-field select {
  padding: 0.4rem 0.55rem;
  border: 1px solid var(--sl-color-hairline, var(--sl-color-gray-5));
  border-radius: 0.35rem;
  background: var(--sl-color-bg);
  color: var(--sl-color-text);
  font: inherit;
}
.aforro-pg-field input:focus-visible {
  outline: 2px solid var(--sl-color-accent);
  outline-offset: 1px;
}
.aforro-pg-field select:focus-visible {
  outline: 2px solid var(--sl-color-accent);
  outline-offset: 1px;
}
.aforro-pg-field input[aria-invalid='true'] {
  border-color: var(--sl-color-red, #d33);
}
.aforro-pg-field-checkbox {
  align-self: end;
  gap: 0.5rem;
}
.aforro-pg-field-checkbox label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  justify-content: flex-start;
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
.aforro-pg-link-btn:hover {
  text-decoration-thickness: 2px;
}
.aforro-pg-link-btn:focus-visible {
  outline: 2px solid var(--sl-color-accent);
  outline-offset: 2px;
  border-radius: 2px;
}
.aforro-pg-error {
  margin: 0;
  color: var(--sl-color-red, #d33);
  font-size: 0.8rem;
}
.aforro-pg-help {
  margin: 0;
  font-size: 0.78rem;
  opacity: 0.72;
}
.aforro-pg-results {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.aforro-pg-card {
  padding: 1rem 1.25rem;
  border: 1px solid var(--sl-color-hairline, var(--sl-color-gray-5));
  border-radius: 0.5rem;
  background: var(--sl-color-bg);
}
.aforro-pg-card-error {
  border-color: var(--sl-color-red, #d33);
  color: var(--sl-color-red, #d33);
}
.aforro-pg-card-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem 1rem;
  margin-bottom: 0.85rem;
}
.aforro-pg-card-head h3 {
  margin: 0;
  font-size: 1.05rem;
}
.aforro-pg-card h3 {
  margin: 0 0 0.75rem;
  font-size: 1.05rem;
}
.aforro-pg-card p + p {
  margin-top: 0.5rem;
}
.aforro-pg-meta {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem 0.75rem;
  font-size: 0.82rem;
}
.aforro-pg-meta-item {
  opacity: 0.85;
}
.aforro-pg-meta-label {
  opacity: 0.65;
  margin-right: 0.25rem;
}
.aforro-pg-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.1rem 0.5rem;
  border-radius: 999px;
  background: var(--sl-color-bg-nav);
  border: 1px solid var(--sl-color-hairline, var(--sl-color-gray-5));
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
.aforro-pg-badge-matured {
  background: var(--sl-color-accent);
  color: var(--sl-color-white, #fff);
  border-color: transparent;
}
.aforro-pg-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.75rem 1rem;
  margin: 0;
}
.aforro-pg-grid-item {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 0.6rem 0.75rem;
  border-radius: 0.35rem;
  background: var(--sl-color-bg-nav);
}
.aforro-pg-grid-item.is-accent {
  background: color-mix(in srgb, var(--sl-color-accent) 10%, transparent);
  outline: 1px solid color-mix(in srgb, var(--sl-color-accent) 35%, transparent);
}
.aforro-pg-grid-item dt {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  opacity: 0.75;
}
.aforro-pg-grid-item dd {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}
.aforro-pg-grid-item.is-accent dd {
  font-size: 1.2rem;
}
.aforro-pg-grid-item code {
  align-self: flex-start;
  opacity: 0.85;
}
.aforro-pg-card .aforro-pg-note {
  font-size: 0.82rem;
  opacity: 0.75;
  margin-top: 0.75rem;
}
.aforro-pg-table-wrap {
  overflow-x: auto;
  max-height: 480px;
  border: 1px solid var(--sl-color-hairline, var(--sl-color-gray-5));
  border-radius: 0.35rem;
}
.aforro-pg-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
  font-variant-numeric: tabular-nums;
}
.aforro-pg-table th,
.aforro-pg-table td {
  padding: 0.4rem 0.6rem;
  text-align: right;
  border-bottom: 1px solid var(--sl-color-hairline, var(--sl-color-gray-5));
  white-space: nowrap;
}
.aforro-pg-table tbody tr:last-child td {
  border-bottom: 0;
}
.aforro-pg-table tbody tr:nth-child(even) {
  background: color-mix(in srgb, var(--sl-color-text) 3%, transparent);
}
.aforro-pg-table tbody tr:hover {
  background: color-mix(in srgb, var(--sl-color-accent) 8%, transparent);
}
.aforro-pg-table tbody tr.aforro-pg-row-latest {
  background: color-mix(in srgb, var(--sl-color-accent) 14%, transparent);
}
.aforro-pg-table tbody tr.aforro-pg-row-latest td {
  font-weight: 600;
  border-top: 2px solid color-mix(in srgb, var(--sl-color-accent) 55%, transparent);
}
.aforro-pg-table th:first-child,
.aforro-pg-table td:first-child,
.aforro-pg-table th:last-child,
.aforro-pg-table td:last-child {
  text-align: left;
}
.aforro-pg-table thead th {
  position: sticky;
  top: 0;
  background: var(--sl-color-bg-nav);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.aforro-pg-snippet-head {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.75rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}
.aforro-pg-snippet-head h3 {
  margin: 0;
}
.aforro-pg-snippet-controls {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}
.aforro-pg-tabs {
  display: inline-flex;
  gap: 0.15rem;
  padding: 0.2rem;
  border: 1px solid var(--sl-color-hairline, var(--sl-color-gray-5));
  border-radius: 0.5rem;
  background: var(--sl-color-bg);
}
.aforro-pg-tab {
  padding: 0.25rem 0.7rem;
  background: transparent;
  color: var(--sl-color-text);
  border: 0;
  border-radius: 0.35rem;
  font: inherit;
  font-size: 0.82rem;
  font-weight: 500;
  line-height: 1.2;
  cursor: pointer;
  opacity: 0.75;
  transition: background-color 120ms ease, color 120ms ease, opacity 120ms ease;
}
.aforro-pg-tab:hover {
  opacity: 1;
  background: color-mix(in srgb, var(--sl-color-text) 8%, transparent);
}
.aforro-pg-tab.is-active {
  background: color-mix(in srgb, var(--sl-color-accent) 18%, transparent);
  color: var(--sl-color-text);
  font-weight: 600;
  opacity: 1;
}
.aforro-pg-tab.is-active:hover {
  background: color-mix(in srgb, var(--sl-color-accent) 22%, transparent);
}
.aforro-pg-tab:focus-visible {
  outline: 2px solid var(--sl-color-accent);
  outline-offset: 2px;
}
.aforro-pg-copy {
  padding: 0.35rem 0.85rem;
  border: 1px solid var(--sl-color-hairline, var(--sl-color-gray-5));
  border-radius: 0.5rem;
  background: var(--sl-color-bg-nav);
  color: var(--sl-color-text);
  cursor: pointer;
  font: inherit;
  font-size: 0.82rem;
  font-weight: 500;
  line-height: 1.2;
}
.aforro-pg-copy:hover {
  background: color-mix(in srgb, var(--sl-color-accent) 12%, transparent);
}
.aforro-pg-copy:focus-visible {
  outline: 2px solid var(--sl-color-accent);
  outline-offset: 2px;
}
.aforro-pg-pre {
  margin: 0;
  padding: 0.85rem;
  background: var(--sl-color-bg-nav);
  border-radius: 0.4rem;
  overflow-x: auto;
  font-size: 0.82rem;
  line-height: 1.45;
}
@media (max-width: 540px) {
  .aforro-pg-card {
    padding: 0.85rem 0.9rem;
  }
  .aforro-pg-grid-item dd {
    font-size: 1rem;
  }
  .aforro-pg-grid-item.is-accent dd {
    font-size: 1.1rem;
  }
}
`;
