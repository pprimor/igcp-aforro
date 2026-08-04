---
title: Metodologia
description: Como esta biblioteca reproduz o cálculo dos Certificados de Aforro Séries A, B, C, D, E e F, com referências às fichas técnicas do IGCP e ao Diário da República.
---

Esta página descreve, em português, como o `igcp-aforro` reproduz, passo a passo, o cálculo da remuneração dos Certificados de Aforro **Série A** (legado; perpétua; valor facial por unidade), **Série B** (encerrada a novas subscrições; sem maturidade contratual), **Série C** (encerrada), **Série D**, **Série E** e **Série F** publicado pelo [IGCP — Agência de Gestão da Tesouraria e da Dívida Pública](https://www.igcp.pt/). Cada secção remete para as fichas técnicas oficiais e identifica o ficheiro do código onde a regra está implementada. Notas de pesquisa: [Série C — pesquisa e parâmetros](/serie-c-research/), [Série A — pesquisa e parâmetros](/serie-a-research/).

:::note[Fontes oficiais]
- Portaria n.º 73-B/2008 (Série B — taxa-base em função da TBA) e Portaria n.º 1219/1991 (prémio de permanência, entre outros diplomas citados pelo IGCP).
- Decreto-Lei n.º 11/1999 (definição da TBA a partir de médias móveis da Euribor 3M e 12M).
- Portaria n.º 73-A/2008 e Portaria n.º 230-A/2009 (Série C — *Diário da República*).
- Portaria n.º 17-B/2015, que aprova as condições da Série D.
- Portaria n.º 329-A/2017, que aprova as condições da Série E.
- Portaria n.º 149-A/2023, que aprova as condições da Série F e encerra a subscrição da Série E.
- [Fichas técnicas do IGCP](https://www.igcp.pt/) para os Certificados de Aforro.
- Termos de uso da [EMMI](https://www.emmi-benchmarks.eu/) para a EURIBOR® (Séries C–F: Euribor 3M; Séries A/B: Euribor 3M e 12M via TBA na era pós-2002-03). Dados **Lisbor** históricos: [Banco de Portugal BPstat](https://bpstat.bportugal.pt/).

A presente biblioteca **não substitui** as comunicações oficiais do IGCP nem constitui aconselhamento financeiro. Em caso de divergência, prevalecem os valores publicados pelo IGCP.
:::

## Parâmetros estruturais

| Parâmetro | Série F | Séries D/E | Série C | Série B | Implementação |
| --- | --- | --- | --- | --- | --- |
| Maturidade | 15 anos | 10 anos | 10 anos | Sem data de maturidade (perpétuo até resgate) | `SeriesMetadata.maturityYears` (`null` na A e B) em [`src/core/series.ts`](https://github.com/pprimor/igcp-aforro/blob/main/src/core/series.ts) |
| Subscrição mínima | 100 unidades (1 unidade = €1) | 100 unidades | 100 unidades | 100 unidades | `SeriesMetadata.minUnits` |
| Subscrição máxima | 100.000 unidades | 250.000 unidades | 250.000 unidades (pós-230-A/2009) | 250.000 unidades | `SeriesMetadata.maxUnits` |
| Janela de subscrição | A partir de 1 de junho de 2023 | Série D: 1 de fevereiro de 2015 a 31 de outubro de 2017; Série E: 1 de novembro de 2017 a 1 de junho de 2023 | 26 de janeiro de 2008 a 31 de janeiro de 2015 | 1 de julho de 1986 a 25 de janeiro de 2008 | `SeriesMetadata.subscriptionStartDate` / `subscriptionEndDate` |
| Capitalização | Trimestral, automática | Trimestral, automática | Trimestral, automática | Trimestral, automática | `SeriesMetadata.capitalizationFrequency` |
| Precisão da cotação | 5 casas decimais | 5 casas decimais | 5 casas decimais | 5 casas decimais | `SeriesMetadata.unitQuoteDecimals` |
| Retenção de IRS | 28% sobre os juros, na capitalização | 28% sobre os juros, na capitalização | 28% (valor por omissão, alinhado às outras séries) | 28% (por omissão) | `SeriesMetadata.defaultIrsRate`, sobreponível via `simulate({ irsRate })` |

## Taxa-base mensal

Para as **Séries C, D, E e F**, a taxa-base aplicável a cada mês `M` parte da Euribor a **3 meses**, conforme a ficha técnica. Os passos comuns são:

1. Determina-se o **antepenúltimo dia útil TARGET2** do mês `M-1` — chamamos-lhe `fixingDate`.
2. Considera-se a sequência dos **10 dias úteis TARGET2** que terminam (inclusive) em `fixingDate`.
3. Calcula-se a média aritmética simples das fixações da Euribor a 3 meses nesses 10 dias úteis.
4. A média é arredondada a **3 casas decimais** com a regra **half-even** (arredondamento bancário).

O passo final difere por série:

- **Série F** — o resultado arredondado é limitado ao intervalo `[0%, 2,5%]`.
- **Séries D e E** — à média já arredondada soma-se um *spread* fixo de **+1 ponto percentual** (`E3 + 1%`); o valor final é depois limitado ao intervalo `[0%, 3,5%]`. A ordem importa: o arredondamento aplica-se à média, **antes** de somar o *spread*, e o *clamp* aplica-se **depois**.
- **Série C** — aplica-se **0,85 × E3 + *k***, em que E3 é a média **já** arredondada a 3 d.p.; *k* é **−0,25** para os meses de publicação até fevereiro de 2009 e **+0,25** a partir de março de 2009 (Portarias n.º 73-A/2008 e 230-A/2009). O produto é arredondado de novo a 3 d.p. antes de um *clamp* inferior a `0%` (sem teto superior à escala das outras séries).

**Série B** — a taxa-base mensal é **0,60 × TBA** (Portaria n.º 73-B/2008). A **TBA** segue o Decreto-Lei n.º 11/1999: médias móveis simples de **20** dias úteis TARGET2 das séries **Euribor 3M e 12M** (ou **Lisbor** 3M/12M no período congelado 1999-02…2002-03), com a **mesma** `fixingDate` (antepenúltimo dia útil de `M-1`). Os detalhes de composição, janela e arredondamento estão em [`src/core/tba.ts`](https://github.com/pprimor/igcp-aforro/blob/main/src/core/tba.ts); o ramo partilhado **Séries A/B** em [`src/core/baseRate.ts`](https://github.com/pprimor/igcp-aforro/blob/main/src/core/baseRate.ts). Para meses **≥ 2002-04**, as fixações 3M e 12M vêm de [`src/data/euribor3m.json`](https://github.com/pprimor/igcp-aforro/blob/main/src/data/euribor3m.json) e [`src/data/euribor12m.json`](https://github.com/pprimor/igcp-aforro/blob/main/src/data/euribor12m.json) (Deutsche Bundesbank / EMMI). Para **1999-02 … 2002-03**, usam-se [`src/data/lisbor3m.json`](https://github.com/pprimor/igcp-aforro/blob/main/src/data/lisbor3m.json) e [`src/data/lisbor12m.json`](https://github.com/pprimor/igcp-aforro/blob/main/src/data/lisbor12m.json). Para **1986-07 … 1999-01**, a TBA mensal vem de [`src/data/tba-history.json`](https://github.com/pprimor/igcp-aforro/blob/main/src/data/tba-history.json).

**Série A** — mesma fórmula **0,60 × TBA** que a Série B a partir de **1986-07**. Para meses **1961-01 … 1986-06**, a taxa-base mensal é a tabela administrativa em [`src/data/serie-a-admin-rates.json`](https://github.com/pprimor/igcp-aforro/blob/main/src/data/serie-a-admin-rates.json) (**sem** factor 0,60 — valores já publicáveis como taxa-base). Ver [Série A — pesquisa e parâmetros](/serie-a-research/) para a cascata completa e política de curadoria.

**Valor nominal (Série A)** — uma unidade de certificado vale **€0,34916** (`SeriesMetadata.unitFaceValueEur`). O valor em carteira é `round(units × 0,34916 × cotação, 2)`; as Séries B–F mantêm `1` euro por unidade.

A implementação das Séries C–F em `baseRate.ts` usa o calendário TARGET2 em [`src/core/calendar.ts`](https://github.com/pprimor/igcp-aforro/blob/main/src/core/calendar.ts). Séries D/E/F parametrizam o *spread* em `SeriesMetadata.baseRateSpreadPct` (Série F: `'0'`, Séries D/E: `'1'`); a Série C usa `baseRateEuriborMultiplierPct` (`'0.85'`) e o calendário mensal `baseRatePostMeanOffsets`.

A correção contra os valores publicados pelo IGCP é assegurada pelos *golden tests* em [`tests/baseRate.test.ts`](https://github.com/pprimor/igcp-aforro/blob/main/tests/baseRate.test.ts).

## Prémio de permanência

À taxa-base é somado um prémio de permanência, indexado ao **ano contratual** decorrido desde a data de subscrição (com base em aniversários). As faixas diferem por série.

**Série F** (definidas em `SERIE_F_PREMIUM_TIERS`):

| Anos contratuais | Prémio (a somar à taxa-base) |
| --- | --- |
| 1 | 0,00% |
| 2 a 5 | +0,25% |
| 6 a 9 | +0,50% |
| 10 a 11 | +1,00% |
| 12 a 13 | +1,50% |
| 14 a 15 | +1,75% |

**Séries D e E** (definidas em `SERIE_D_PREMIUM_TIERS` / `SERIE_E_PREMIUM_TIERS`):

| Anos contratuais | Prémio (a somar à taxa-base) |
| --- | --- |
| 1 | 0,00% |
| 2 a 5 | +0,50% |
| 6 a 10 | +1,00% |

**Série C** — duas tabelas: trimestres com início **antes** de `2009-03-01` usam os prémios da **73-A/2008** (`premiumTiersLegacy`); a partir dessa data, os da **230-A/2009** (`premiumTiers`).

| Regime | Anos 2–3 | Anos 4–7 | Ano 8 | Ano 9 | Ano 10 |
| --- | --- | --- | --- | --- | --- |
| 73-A/2008 | +0,25% / +0,50% | +0,75% | +1,00% | +1,50% | +2,50% |
| 230-A/2009 | +0,50% / +0,75% | +1,00% | +1,25% | +1,50% | +2,50% |

(Ano 1 = 0,00% em ambos.)

**Série B** (escada em `SERIE_B_PREMIUM_TIERS`, alinhada ao quadro legal citado pelo IGCP — Portaria n.º 1219/1991 e diplomas posteriores). **Série A** — reutiliza exactamente a mesma escada (`premiumTiers` partilhados no código).

| Anos contratuais (A e B) | Prémio (a somar à taxa-base) |
| --- | --- |
| 1 | 0,00% |
| 2 | +0,25% |
| 3 | +0,50% |
| 4 | +0,75% |
| 5 | +1,00% |
| 6 | +1,25% |
| 7 | +1,50% |
| 8 | +1,75% |
| 9 em diante | +2,00% |

Em todas as séries, o ano 1 é representado explicitamente como uma faixa de prémio zero para que cada linha do calendário (`schedule`) possa transportar sempre um `premiumTier` não-nulo. As faixas estão definidas em [`src/core/series.ts`](https://github.com/pprimor/igcp-aforro/blob/main/src/core/series.ts).

A função `premiumTierForYear(series, contractYear, quarterStartDate?)` resolve a faixa aplicável (o terceiro argumento escolhe a tabela legado/moderna na Série C); `getRateForCohort()` compõe a taxa anual (`base + prémio`).

## Capitalização trimestral e retenção de IRS

A cada fim de trimestre `Q`, `simulate()` mantém a posição líquida como uma **cotação por unidade**, não como um saldo em euros de alta precisão:

1. Resolve-se a **taxa anual** aplicável ao trimestre, com base no `quarterStartDate` (mês de referência da taxa-base) e na **idade contratual** do grupo de subscrição à data desse início.
2. Calcula-se a **taxa trimestral** como `taxa_anual / 4`.
3. Calcula-se o juro bruto por unidade como `cotacao_unidade × taxa_trimestral`.
4. Aplica-se a retenção de IRS ao juro por unidade para obter o juro líquido por unidade.
5. A nova cotação é `cotacao_unidade + juro_liquido_por_unidade`, arredondada a **5 casas decimais** com a regra **half-even**.

O ciclo está em [`src/core/calculator.ts`](https://github.com/pprimor/igcp-aforro/blob/main/src/core/calculator.ts) e usa `big.js` (alias `Big`) para garantir aritmética decimal exata. A cotação inicial é `1.00000`; depois de cada capitalização concluída, `currentUnitQuote` transporta a cotação líquida arredondada. O valor líquido apresentado é sempre:

```
currentValueNet = round(units × unitFaceValueEur × currentUnitQuote, 2)
```

Esta semântica reproduz o que o portal **aforro.net** apresenta para certificados em carteira, ao cêntimo, independentemente do número de unidades.

Os valores de juro bruto e IRS são então contabilizados em euros reais ao nível da posição. O IGCP não credita um montante — move a cotação — pelo que **o juro líquido é a variação do valor contabilizado**:

```
interestNet = balanceAfter - balanceAfter_anterior
interestGross = round(units × unitFaceValueEur × cotacao_anterior × taxa_trimestral, 2)
irsWithheld = interestGross - interestNet
```

A retenção é o bruto menos o que chegou ao titular, e **não** `round(interestGross × irsRate, 2)`. Uma declaração do IGCP emitida ao abrigo do n.º 3 do Artigo 119º do CIRS reporta 55,95 EUR de IRS retido sobre 199,75 EUR de rendimento no ano de 2025, quando 28% desse bruto seriam 55,93 — logo a retenção não resulta da aplicação da taxa ao bruto declarado.

Isto mantém `totalInterestGross`, `totalIrsWithheld` e `totalInterestNet` reconciliáveis com o calendário (`schedule`) **e** com `currentValueNet`.

:::note[Snapshots do calendário]
Cada linha do `schedule` expõe `unitQuoteAfter`, a cotação líquida depois dessa capitalização, já arredondada a 5 casas decimais. `balanceAfter` é `round(units × unitFaceValueEur × unitQuoteAfter, 2)`. Como `interestNet` é a variação de `balanceAfter`, o somatório das linhas reconcilia exatamente com os totais `totalInterestGross`, `totalIrsWithheld` e `totalInterestNet`, e o líquido acumulado nunca se afasta de `currentValueNet`.
:::

:::caution[Uma ressalva, só alcançável com `irsRate` alterado]
A cotação é arredondada por unidade a 5 casas decimais e o bruto a cêntimos sobre a posição inteira, pelo que os dois carregam um resíduo proporcional ao número de unidades. Uma retenção real de 28% absorve-o sem se notar. Uma taxa suficientemente baixa tornaria `irsWithheld` negativo, o que não pode acontecer: nesse caso é o bruto que cede e iguala `interestNet` — sem retenção, o bruto é o que foi creditado.
:::

## Trimestres ancorados ao dia da subscrição

O início de cada trimestre é o dia da subscrição deslocado em múltiplos de 3 meses. Quando o dia-alvo não existe no mês destino (por exemplo, subscrição a 31 de janeiro → trimestre seguinte a 30 de abril), aplica-se *roll-forward* para o primeiro dia do mês seguinte, conforme a ficha técnica. A função `shiftMonths()` em [`src/core/dateMath.ts`](https://github.com/pprimor/igcp-aforro/blob/main/src/core/dateMath.ts) implementa esta semântica e é usada tanto pelo calculador como pelo gerador de `rates.json`.

## Agregação por ano civil (auxiliar IRS)

Para preencher totais anuais de juro bruto e IRS retido (por exemplo, no **Modelo 3 / Anexo E**), a biblioteca expõe `rollupTaxYears()`, `getTaxYearRollup()` e variantes de portefólio. Cada linha capitalizada do `schedule` é atribuída ao **ano civil da `quarterEndDate`** (UTC, ano extraído da data ISO `YYYY-MM-DD`).

Isto alinha-se com o momento em que o juro e a retenção são **registados** na capitalização trimestral (ver secção anterior). **Não** entra o `accruedSinceLastCapitalization` (juro acumulado a meio de trimestre, sem retenção). Os totais são somas cent-exatas dos campos `interestGross`, `irsWithheld` e `interestNet` de cada linha; não mapeiam números de caixa do Anexo E (estes mudam anualmente e exigem revisão legal).

:::caution[Não é aconselhamento fiscal]
Confirme sempre os valores com o extrato IGCP e as instruções oficiais da Autoridade Tributária. A biblioteca exporta apenas totais em EUR; não indica caixas específicas do Anexo E.
:::

## *Accrued* entre capitalizações

Quando `asOfDate` cai estritamente dentro de um trimestre aberto, `simulate()` reporta separadamente o juro **acumulado mas ainda não capitalizado**, no campo `accruedSinceLastCapitalization`. É calculado *pro rata* em dias de calendário sobre o juro trimestral teórico:

```
accrued = saldo × taxa_trimestral × dias_decorridos / dias_totais
```

em que `saldo` é `units × unitFaceValueEur × currentUnitQuote`, quantizado a cêntimos com arredondamento bancário. **Este número é uma convenção da biblioteca, não uma grandeza publicada pelo IGCP**: a retenção de IRS *não* é aplicada (só ocorre na capitalização). Quem quiser estimar um "valor de resgate hoje" deve subtrair `accrued × IRS` por sua conta.

## Resgate antecipado

`simulateRedemption()` em [`src/core/redemption.ts`](https://github.com/pprimor/igcp-aforro/blob/main/src/core/redemption.ts) calcula o valor pago num resgate antecipado (total ou parcial), reutilizando internamente `simulate({ asOfDate: redemptionDate })` para manter exatamente a mesma cadência de cotação.

Regras aplicadas:

- **Período mínimo de detenção**: o resgate só é permitido a partir de `subscriptionDate + 3 meses` (`SeriesMetadata.minimumHoldingMonths`, atualmente `3` nas séries suportadas).
- **Fronteira de maturidade**: para séries com `maturityYears` definido, `redemptionDate` em ou após a data de maturidade não é "resgate antecipado" e é rejeitado; nesse caso use `simulate()` para o valor em maturidade. As **Séries A e B** são perpétuas (`maturityYears: null`): não há este limite por maturidade em `simulateRedemption()`.
- **Valor pago no resgate**: `redemptionValue = round(unitsToRedeem × unitFaceValueEur × currentUnitQuote, 2)`, em que `currentUnitQuote` é a cotação líquida depois da última capitalização concluída na data de resgate.
- **Accrued entre capitalizações**: o `accruedSinceLastCapitalization` correspondente à fração resgatada é reportado como `forfeitedAccruedGross` e **não é pago** no resgate (juros só são pagos em datas de capitalização).
- **Resgate parcial**: `unitsToRedeem` tem de estar em `[1, units]` e o remanescente tem de ser `0` (resgate total) ou pelo menos `minUnits` da série.

Nota de reconciliação: em resgates parciais, `round(unitsToRedeem × quote, 2) + round(remainingUnits × quote, 2)` pode diferir de `round(units × quote, 2)` em 1 cêntimo por efeito de arredondamentos independentes.

## Portefólio e reforços

`simulatePortfolio()` modela uma carteira como uma lista de grupos de subscrição independentes (coortes). Cada reforço entra como uma nova linha, mesmo quando tem a mesma série e a mesma data de subscrição de outra linha já existente.

Regras aplicadas:

- Cada coorte é simulada com `simulate()` usando o mesmo `asOfDate` de portefólio.
- O limite de unidades é aplicado por série, somando todas as linhas dessa série na carteira (assunção: uma Conta Aforro por série).
- A agregação do portefólio soma campos já quantizados ao cêntimo em cada coorte (`currentValueNet`, `totalInterestNet`, `totalIrsWithheld`, etc.).

Como os totais são soma direta de valores já quantizados em cada coorte, `PortfolioResult.total*` reconcilia exatamente com a soma dos mesmos campos em `PortfolioResult.cohorts[]`.

## Validações

`simulate()` valida os *inputs* com Zod, lendo limites a partir do `SeriesMetadata` da série escolhida, antes de qualquer cálculo. Lança erro quando:

- a `subscriptionDate` cai fora da janela de subscrição da série:
  - **Série A** — entre `1960-01-01` (guarda de fixação) e `1986-06-30` (encerrada a novas subscrições);
  - **Série B** — entre `1986-07-01` e `2008-01-25` (encerrada a novas subscrições);
  - **Série F** — estritamente a partir de `2023-06-01`;
  - **Série D** — entre `2015-02-01` e `2017-10-31` (encerrada a novas subscrições);
  - **Série E** — entre `2017-11-01` e `2023-06-01` (encerrada a novas subscrições);
- `units` cai fora do intervalo `[minUnits, maxUnits]` da série:
  - **Série F** — `[100, 100.000]`;
  - **Séries B, D e E** — `[100, 250.000]` (e **Série A** no mesmo intervalo);
- `asOfDate < subscriptionDate`.

Para séries com maturidade finita, após `subscriptionDate + maturityYears` (15 anos para Série F, 10 anos para Séries C, D e E), o ciclo termina em maturidade e o resultado vem com `matured: true` e `maturityDate` preenchido. As **Séries A e B** permanecem activas: `matured` permanece `false` e `maturityDate` é `null` (com um teto de segurança no número de trimestres simulados para evitar trabalho ilimitado).
