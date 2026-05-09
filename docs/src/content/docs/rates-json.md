---
title: Esquema do rates.json
description: Artefacto JSON autónomo com taxas-base mensais e taxas anuais por grupo de subscrição para consumidores que não usam JavaScript.
---

`rates.json` é um snapshot pré-calculado de todas as taxas-base mensais publicadas pelo IGCP e de todas as taxas anuais ancoradas a grupos de subscrição, gerado por `scripts/build-rates-json.ts` e publicado com o site de documentação. Utilizadores de Python, Java, Excel e folhas de cálculo podem descarregá-lo uma vez e reproduzir os números do IGCP sem portar o código da biblioteca.

## Onde está disponível

- **Última versão**: `https://igcp-aforro.primor.me/rates.json`
- **Snapshot por release**: `https://igcp-aforro.primor.me/v/<calver>/rates.json` (por exemplo, `v/2026.420.0/rates.json`)

O ficheiro é regenerado:

- após cada release (o workflow executa `pnpm build:rates-json` e publica o snapshot em Pages);
- após a fusão de cada PR de atualização Euribor / taxa-base IGCP via `data-refresh.yml`.

## Estrutura de topo

```json
{
  "schemaVersion": 1,
  "generatedAt": "2026-04-20T08:00:00Z",
  "libraryVersion": "2026.420.0",
  "euriborSourceMeta": {
    "lastRefreshedAt": "2026-04-19T07:42:11Z",
    "source": "Deutsche Bundesbank time-series API",
    "sourceUrl": "https://api.statistiken.bundesbank.de/rest/download/BBIG1/...",
    "seriesId": "BBIG1.D.D0.EUR.MMKT.EURIBOR.M03.BID._Z"
  },
  "series": {
    "C": { "metadata": { "...": "..." }, "monthlyBaseRates": [], "cohortRates": [] },
    "D": { "metadata": { "...": "..." }, "monthlyBaseRates": [], "cohortRates": [] },
    "E": { "metadata": { "...": "..." }, "monthlyBaseRates": [], "cohortRates": [] },
    "F": { "metadata": { "...": "..." }, "monthlyBaseRates": [], "cohortRates": [] }
  }
}
```

`series.C`, `series.D`, `series.E` e `series.F` têm a mesma forma e são preenchidas independentemente. A Série C começa no primeiro mês resolúvel após a data de subscrição mínima (tipicamente 2008-02); a Série D no primeiro mês resolúvel com o histórico Euribor atualmente incluído; a Série E em novembro de 2017; a Série F em junho de 2023.

`schemaVersion` é incrementado sempre que é publicada uma alteração incompatível. Adicionar uma nova série em `series.<code>` **não** é considerado uma alteração incompatível.

## `series.<code>.metadata`

Os `SeriesMetadata` estáticos da série: `maturityYears`, `subscriptionStartDate`, `subscriptionEndDate` (séries encerradas: C, D e E), `minUnits`, `maxUnits`, `baseRateClampMinPct`, `baseRateClampMaxPct`, campos de taxa-base (`baseRateSpreadPct` para D/E/F; `baseRateEuriborMultiplierPct` e `baseRatePostMeanOffsets` para C), `defaultIrsRate`, `premiumTiers` (e `premiumTiersLegacy` na C), etc. É a mesma informação devolvida pela biblioteca npm em `getSeries('C')` / `getSeries('D')` / `getSeries('E')` / `getSeries('F')`.

## `series.<code>.monthlyBaseRates`

Uma entrada por mês de calendário para o qual seja possível resolver uma fixação.

```json
{
  "month": "2024-03",
  "fixingDate": "2024-02-27",
  "basePct": "3.892"
}
```

| Campo | Tipo | Notas |
| --- | --- | --- |
| `month` | `YYYY-MM` | Mês de calendário a que a taxa se aplica. |
| `fixingDate` | `YYYY-MM-DD` | Antepenúltimo dia útil TARGET2 do mês anterior. |
| `basePct` | string decimal | Taxa-base final, já limitada e arredondada a 3 casas decimais. Para a Série F: média arredondada limitada a `[0, 2,5]`. Para as Séries D e E: média arredondada + 1 ponto percentual (o *spread* de `+1pp`), limitada a `[0, 3,5]`. |

## `series.<code>.cohortRates`

Uma entrada por trimestre ancorado, desde cada mês de subscrição até `min(maturidade, último mês publicado)`.

```json
{
  "subscribed": "2024-03",
  "subscriptionDate": "2024-03-01",
  "quarterIndex": 8,
  "quarterStartDate": "2026-03-01",
  "quarterEndDate": "2026-06-01",
  "yearsSinceSubscription": 2,
  "basePct": "2.500",
  "premiumTierYearsRange": "2-5",
  "premiumPct": "0.25",
  "annualRatePct": "2.750"
}
```

| Campo | Tipo | Notas |
| --- | --- | --- |
| `subscribed` | `YYYY-MM` | Identificador do grupo de subscrição; `subscriptionDate` resolve sempre para o dia 1. |
| `subscriptionDate` | `YYYY-MM-DD` | Sempre `<subscribed>-01`; consulte a nota sobre dia do mês abaixo. |
| `quarterIndex` | inteiro | Índice base 0, contado desde a subscrição. |
| `quarterStartDate` / `quarterEndDate` | `YYYY-MM-DD` | Ancorados ao dia de subscrição, com *roll-forward* no fim do mês. |
| `yearsSinceSubscription` | inteiro | Anos de aniversário completos decorridos em `quarterStartDate`. |
| `basePct` | string decimal | Mesmo formato de `monthlyBaseRates`. |
| `premiumTierYearsRange` | string | Por exemplo, `"2-5"`. |
| `premiumPct` | string decimal | Prémio somado a `basePct`. |
| `annualRatePct` | string decimal | Taxa anual total para esse grupo de subscrição e trimestre. |

## Convenções

- Todos os campos percentuais são **strings decimais** (por exemplo, `"2.500"`, não `2.5`). Isto corresponde à API pública do pacote npm e evita desvios de vírgula flutuante entre linguagens.
- `subscribed` é um mês de calendário, normalizado para `YYYY-MM-01`. A regra de trimestres ancorados do IGCP depende do dia de subscrição, por isso uma tabela pré-calculada não consegue representar todos os grupos de subscrição por dia do mês sem crescer demasiado. Consumidores que precisem de precisão ao dia devem usar a biblioteca npm ou replicar o cálculo a partir de `monthlyBaseRates` e dos `premiumTiers` em `metadata`.
- `cohortRates` enumera todos os trimestres ancorados desde a subscrição até `min(maturidade, último mês publicado)`. `quarterEndDate` é o `quarterStartDate` do trimestre seguinte; ambos seguem a semântica de *roll-forward* de `shiftMonths`.

## Exemplo mínimo em Python

```python
import json, urllib.request
from decimal import Decimal, ROUND_HALF_EVEN

data = json.load(urllib.request.urlopen('https://igcp-aforro.primor.me/rates.json'))
rows = [r for r in data['series']['F']['cohortRates'] if r['subscribed'] == '2024-03']

units = Decimal('1000')
balance = units
irs = Decimal('0.28')

for r in rows:
    annual = Decimal(r['annualRatePct']) / Decimal('100')
    quarterly = annual / 4
    gross = (balance * quarterly).quantize(Decimal('0.01'), rounding=ROUND_HALF_EVEN)
    withheld = (gross * irs).quantize(Decimal('0.01'), rounding=ROUND_HALF_EVEN)
    balance += gross - withheld

print(balance)
```
