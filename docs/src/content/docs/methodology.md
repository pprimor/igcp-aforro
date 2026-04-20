---
title: Metodologia (PT)
description: Como esta biblioteca reproduz o cálculo dos Certificados de Aforro Série F, com referências à ficha técnica do IGCP.
---

Esta página descreve, em português, como o `igcp-aforro` reproduz, passo a passo, o cálculo da remuneração dos Certificados de Aforro **Série F** publicado pelo [IGCP — Agência de Gestão da Tesouraria e da Dívida Pública](https://www.igcp.pt/). Cada secção remete para a ficha técnica oficial e identifica o ficheiro do código onde a regra está implementada.

:::note[Fontes oficiais]
- Portaria n.º 149-A/2023, que aprova as condições da Série F.
- [Ficha técnica do IGCP](https://www.igcp.pt/) para os Certificados de Aforro Série F.
- Termos de uso da [EMMI](https://www.emmi-benchmarks.eu/) para a EURIBOR® (a Série F indexa à Euribor a 3 meses).

A presente biblioteca **não substitui** as comunicações oficiais do IGCP nem constitui aconselhamento financeiro. Em caso de divergência, prevalecem os valores publicados pelo IGCP.
:::

## Parâmetros estruturais

| Parâmetro | Valor | Implementação |
| --- | --- | --- |
| Maturidade | 15 anos | `SeriesMetadata.maturityYears` em [`src/core/series.ts`](https://github.com/primor/igcp-aforro/blob/main/src/core/series.ts) |
| Subscrição mínima | 100 unidades (1 unidade = €1) | `SeriesMetadata.minUnits` |
| Subscrição máxima | 100.000 unidades | `SeriesMetadata.maxUnits` |
| Início da subscrição | 1 de junho de 2023 | `SeriesMetadata.subscriptionStartDate` |
| Capitalização | Trimestral, automática | `SeriesMetadata.capitalizationFrequency` |
| Retenção de IRS | 28% sobre os juros, na capitalização | `SeriesMetadata.defaultIrsRate`, sobreponível via `simulate({ irsRate })` |

## Taxa-base mensal

A taxa-base aplicável a cada mês `M` é calculada a partir da Euribor a 3 meses, conforme a ficha técnica:

1. Determina-se o **antepenúltimo dia útil TARGET2** do mês `M-1` — chamamos-lhe `fixingDate`.
2. Considera-se a sequência dos **10 dias úteis TARGET2** que terminam (inclusive) em `fixingDate`.
3. Calcula-se a média aritmética simples das fixações da Euribor a 3 meses nesses 10 dias úteis.
4. A média é arredondada a **3 casas decimais** com a regra **half-even** (arredondamento bancário).
5. O resultado é limitado ao intervalo `[0%, 2,5%]` — qualquer valor abaixo de 0 é elevado a 0 e qualquer valor acima de 2,5 é reduzido a 2,5.

A implementação vive em [`src/core/baseRate.ts`](https://github.com/primor/igcp-aforro/blob/main/src/core/baseRate.ts) e usa o calendário TARGET2 implementado em [`src/core/calendar.ts`](https://github.com/primor/igcp-aforro/blob/main/src/core/calendar.ts). O conjunto de fixações Euribor 3M usadas vem de [`src/data/euribor3m.json`](https://github.com/primor/igcp-aforro/blob/main/src/data/euribor3m.json), recolhido a partir do Deutsche Bundesbank (série `BBIG1`, redistribuição da EMMI EURIBOR®).

A correção contra os valores publicados pelo IGCP é assegurada pelo *golden test* [`tests/baseRate.test.ts`](https://github.com/primor/igcp-aforro/blob/main/tests/baseRate.test.ts), que afirma todas as taxas-base mensais publicadas pelo IGCP desde junho de 2023.

## Prémio de permanência

À taxa-base é somado um prémio de permanência, indexado ao **ano contratual** decorrido desde a data de subscrição (com base em aniversários):

| Anos contratuais | Prémio (a somar à taxa-base) |
| --- | --- |
| 1 | 0,00% |
| 2 a 5 | +0,25% |
| 6 a 9 | +0,50% |
| 10 a 11 | +1,00% |
| 12 a 13 | +1,50% |
| 14 a 15 | +1,75% |

O ano 1 é representado explicitamente como uma faixa de prémio zero para que cada linha do *schedule* possa transportar sempre um `premiumTier` não-nulo. As faixas estão definidas em `SERIE_F_PREMIUM_TIERS` ([`src/core/series.ts`](https://github.com/primor/igcp-aforro/blob/main/src/core/series.ts)).

A função `premiumTierForYear(series, contractYear)` resolve a faixa aplicável; `getRateForCohort()` compõe a taxa anual (`base + prémio`).

## Capitalização trimestral e retenção de IRS

A cada fim de trimestre `Q`:

1. Resolve-se a **taxa anual** aplicável ao trimestre, com base no `quarterStartDate` (mês de referência da taxa-base) e na **idade contratual** do cohort à data desse início.
2. Calcula-se a **taxa trimestral** como `taxa_anual / 4`.
3. Calcula-se o **juro bruto** do trimestre como `saldo × taxa_trimestral`, quantizado a cêntimos com arredondamento bancário.
4. Calcula-se o **IRS retido** como `juro_bruto × 28%`, quantizado a cêntimos com arredondamento bancário.
5. O **juro líquido** (`bruto − IRS`) é capitalizado, atualizando o `saldo` e iniciando o trimestre seguinte.

O ciclo está em [`src/core/calculator.ts`](https://github.com/primor/igcp-aforro/blob/main/src/core/calculator.ts) e usa `big.js` (alias `Big`) para garantir aritmética decimal exata. As somas de juros e o saldo final são reportados como *strings* decimais para que possam atravessar JSON sem perda de precisão.

:::caution[Nota sobre arredondamentos]
Esta biblioteca **arredonda a cêntimos a cada capitalização** (saldo cêntimo-quantizado todos os trimestres). Em comparações de longo prazo contra o simulador do IGCP, observámos divergência ao nível dos cêntimos em quantidades elevadas, o que sugere que o IGCP poderá calcular em alta precisão por unidade e arredondar apenas no momento de escalar. Acompanhe o estado desta investigação no [follow-up plan de *rounding semantics*](https://github.com/primor/igcp-aforro/blob/main/.cursor/plans/igcp-aforro_compare_followups_60be90d7.plan.md).
:::

## Trimestres ancorados ao dia da subscrição

O início de cada trimestre é o dia da subscrição deslocado em múltiplos de 3 meses. Quando o dia-alvo não existe no mês destino (por exemplo, subscrição a 31 de janeiro → trimestre seguinte a 30 de abril), aplica-se *roll-forward* para o primeiro dia do mês seguinte, conforme a ficha técnica. A função `shiftMonths()` em [`src/core/dateMath.ts`](https://github.com/primor/igcp-aforro/blob/main/src/core/dateMath.ts) implementa esta semântica e é usada tanto pelo calculador como pelo gerador de `rates.json`.

## *Accrued* entre capitalizações

Quando `asOfDate` cai estritamente dentro de um trimestre aberto, `simulate()` reporta separadamente o juro **acumulado mas ainda não capitalizado**, no campo `accruedSinceLastCapitalization`. É calculado *pro rata* em dias de calendário sobre o juro trimestral teórico:

```
accrued = saldo × taxa_trimestral × dias_decorridos / dias_totais
```

quantizado a cêntimos com arredondamento bancário. **Este número é uma convenção da biblioteca, não uma grandeza publicada pelo IGCP**: a retenção de IRS *não* é aplicada (só ocorre na capitalização). Quem quiser estimar um "valor de resgate hoje" deve subtrair `accrued × IRS` por sua conta.

## Validações

`simulate()` valida os *inputs* com Zod antes de qualquer cálculo. Atira erro quando:

- `subscriptionDate < 2023-06-01` (a Série F não existia antes);
- `units < 100` ou `units > 100.000`;
- `asOfDate < subscriptionDate`.

Após `subscriptionDate + 15 anos`, o ciclo termina em maturidade e o resultado vem com `matured: true` e `maturityDate` preenchido.
