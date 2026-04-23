import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { simulate, type SimulateInput, type SimulateResult } from 'igcp-aforro';
import {
  formatEur,
  formatRateFraction,
  formatRatePct,
  projectNet,
  todayIsoUtc,
} from './format';

const DEFAULT_SUBSCRIPTION_DATE = '2024-03-15';
const DEFAULT_UNITS = 1000;
const SERIES_F_OPEN_DATE = '2023-06-01';
const DEBOUNCE_MS = 50;

type FieldErrors = Record<string, string | undefined>;
type SnippetMode = 'ts' | 'cli' | 'json';

interface FormState {
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
    series: 'F',
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
    "  series: 'F',",
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

function FieldError({ message }: { message: string | undefined }) {
  if (!message) return null;
  return <p class="aforro-pg-error">{message}</p>;
}

export default function Playground() {
  const [form, setForm] = useState<FormState>(() => ({
    subscriptionDate: DEFAULT_SUBSCRIPTION_DATE,
    units: String(DEFAULT_UNITS),
    asOfDate: todayIsoUtc(),
    irsRate: '',
    includeSchedule: true,
  }));

  const [sim, setSim] = useState<SimState>(() => runSimulate({
    subscriptionDate: DEFAULT_SUBSCRIPTION_DATE,
    units: String(DEFAULT_UNITS),
    asOfDate: todayIsoUtc(),
    irsRate: '',
    includeSchedule: true,
  }));

  const [snippetMode, setSnippetMode] = useState<SnippetMode>('ts');
  const [copied, setCopied] = useState(false);
  const debounceRef = useRef<number | null>(null);

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
  const irsRateNum = result ? Number(result.irsRate) : 0;
  const accruedNet = result
    ? projectNet(result.accruedSinceLastCapitalization, irsRateNum)
    : '0.00';

  return (
    <div class="aforro-pg">
      <style>{STYLES}</style>

      <form class="aforro-pg-form" onSubmit={(e) => e.preventDefault()}>
        <div class="aforro-pg-field">
          <label for="aforro-pg-subscribed">Subscription date</label>
          <input
            id="aforro-pg-subscribed"
            type="date"
            value={form.subscriptionDate}
            min={SERIES_F_OPEN_DATE}
            onInput={(e) => update('subscriptionDate', (e.target as HTMLInputElement).value)}
          />
          <FieldError message={fieldErrors.subscriptionDate} />
        </div>

        <div class="aforro-pg-field">
          <label for="aforro-pg-units">Units (€)</label>
          <input
            id="aforro-pg-units"
            type="number"
            value={form.units}
            min={100}
            max={100000}
            step={1}
            onInput={(e) => update('units', (e.target as HTMLInputElement).value)}
          />
          <FieldError message={fieldErrors.units} />
        </div>

        <div class="aforro-pg-field">
          <label for="aforro-pg-asof">As-of date</label>
          <input
            id="aforro-pg-asof"
            type="date"
            value={form.asOfDate}
            min={form.subscriptionDate}
            onInput={(e) => update('asOfDate', (e.target as HTMLInputElement).value)}
          />
          <FieldError message={fieldErrors.asOfDate} />
        </div>

        <div class="aforro-pg-field">
          <label for="aforro-pg-irs">IRS rate (optional)</label>
          <input
            id="aforro-pg-irs"
            type="number"
            value={form.irsRate}
            placeholder="0.28"
            min={0}
            max={1}
            step={0.01}
            onInput={(e) => update('irsRate', (e.target as HTMLInputElement).value)}
          />
          <FieldError message={fieldErrors.irsRate} />
        </div>

        <div class="aforro-pg-field aforro-pg-field-checkbox">
          <label>
            <input
              type="checkbox"
              checked={form.includeSchedule}
              onChange={(e) => update('includeSchedule', (e.target as HTMLInputElement).checked)}
            />
            Include quarterly schedule
          </label>
        </div>
      </form>

      {generalError && (
        <div class="aforro-pg-card aforro-pg-card-error" role="alert">
          <strong>Error:</strong> {generalError}
        </div>
      )}

      {result && (
        <>
          <section class="aforro-pg-card" aria-labelledby="aforro-pg-summary-h">
            <h3 id="aforro-pg-summary-h">Summary</h3>
            <dl class="aforro-pg-grid">
              <SummaryItem label="Current value (net)" value={result.currentValueNet} />
              <SummaryItem label="Current value (gross)" value={result.currentValueGross} />
              <SummaryItem label="Total interest (net)" value={result.totalInterestNet} />
              <SummaryItem label="Total IRS withheld" value={result.totalIrsWithheld} />
              <div class="aforro-pg-grid-item">
                <dt>Effective IRS rate</dt>
                <dd>{formatRateFraction(result.irsRate)}</dd>
                <code>{result.irsRate}</code>
              </div>
              <div class="aforro-pg-grid-item">
                <dt>Matured?</dt>
                <dd>{result.matured ? 'Yes' : 'No'}</dd>
                <code>maturity {result.maturityDate}</code>
              </div>
            </dl>
          </section>

          {result.accruedSinceLastCapitalization !== '0.00' && (
            <section class="aforro-pg-card" aria-labelledby="aforro-pg-accrued-h">
              <h3 id="aforro-pg-accrued-h">Mid-quarter accrued</h3>
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
            <section class="aforro-pg-card" aria-labelledby="aforro-pg-schedule-h">
              <h3 id="aforro-pg-schedule-h">Schedule ({result.schedule.length} quarters)</h3>
              <div class="aforro-pg-table-wrap">
                <table class="aforro-pg-table">
                  <thead>
                    <tr>
                      <th>Quarter end</th>
                      <th>Annual rate</th>
                      <th>Quarterly rate</th>
                      <th>Interest gross</th>
                      <th>IRS withheld</th>
                      <th>Interest net</th>
                      <th>Balance after</th>
                      <th>Tier</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.schedule.map((row) => (
                      <tr key={row.quarterEndDate}>
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
            </section>
          )}

          <section class="aforro-pg-card" aria-labelledby="aforro-pg-snippet-h">
            <div class="aforro-pg-snippet-head">
              <h3 id="aforro-pg-snippet-h">Copy snippet</h3>
              <div class="aforro-pg-snippet-controls">
                <div class="aforro-pg-tabs" role="tablist">
                  {(['ts', 'cli', 'json'] as const).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      role="tab"
                      aria-selected={snippetMode === mode}
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
        </>
      )}
    </div>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div class="aforro-pg-grid-item">
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
}
.aforro-pg-field input[type='date'],
.aforro-pg-field input[type='number'] {
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
.aforro-pg-field-checkbox {
  align-self: end;
}
.aforro-pg-field-checkbox label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}
.aforro-pg-error {
  margin: 0;
  color: var(--sl-color-red, #d33);
  font-size: 0.8rem;
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
.aforro-pg-card h3 {
  margin: 0 0 0.75rem;
  font-size: 1.05rem;
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
}
.aforro-pg-grid-item dt {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--sl-color-text-accent, var(--sl-color-text));
  opacity: 0.75;
}
.aforro-pg-grid-item dd {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 600;
}
.aforro-pg-grid-item code {
  font-size: 0.78rem;
  opacity: 0.7;
}
.aforro-pg-note {
  font-size: 0.82rem;
  opacity: 0.75;
  margin: 0.5rem 0 0;
}
.aforro-pg-table-wrap {
  overflow-x: auto;
  max-height: 480px;
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
}
.aforro-pg-snippet-head {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}
.aforro-pg-snippet-controls {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.aforro-pg-tabs {
  display: inline-flex;
  border: 1px solid var(--sl-color-hairline, var(--sl-color-gray-5));
  border-radius: 0.35rem;
  overflow: hidden;
}
.aforro-pg-tab {
  padding: 0.3rem 0.7rem;
  background: transparent;
  color: var(--sl-color-text);
  border: 0;
  font: inherit;
  cursor: pointer;
}
.aforro-pg-tab.is-active {
  background: var(--sl-color-accent);
  color: var(--sl-color-white, #fff);
}
.aforro-pg-copy {
  padding: 0.3rem 0.75rem;
  border: 1px solid var(--sl-color-hairline, var(--sl-color-gray-5));
  border-radius: 0.35rem;
  background: var(--sl-color-bg-nav);
  color: var(--sl-color-text);
  cursor: pointer;
  font: inherit;
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
`;
