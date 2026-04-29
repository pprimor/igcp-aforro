---
title: Histórico de alterações
description: Versões publicadas do igcp-aforro, no formato CalVer YYYY.MMDD.PATCH.
---

`igcp-aforro` usa [CalVer](https://calver.org/) no formato `YYYY.MMDD.PATCH`. Atualizações mensais da Euribor tornam-se releases `YYYY.MMDD.0`; correções no mesmo dia incrementam o componente final (`.1`, `.2`, ...).

O histórico canónico está na [página de Releases do GitHub](https://github.com/primor/igcp-aforro/releases), gerado automaticamente pelo workflow de release em cada `workflow_dispatch`. Esta página replica as entradas principais.

## Por publicar

- **Alteração comportamental: capitalização por cotação unitária**. `simulate()` passa a reproduzir a cadência de cotação apresentada pelo **aforro.net**: cada trimestre concluído atualiza uma cotação líquida por unidade, arredondada a 5 casas decimais, e o valor registado é `currentValueNet = round(units x currentUnitQuote, 2)`. O juro bruto e a retenção de IRS continuam a ser registados em EUR reais ao nível da posição em cada trimestre, arredondados ao cêntimo, para que as linhas do `schedule` reconciliem exatamente com `totalInterestGross`, `totalIrsWithheld` e `totalInterestNet`. Isto fecha a diferença de paridade com o aforro.net para certificados já capitalizados; por exemplo, o grupo de subscrição Série E / 2023-03-29 / 5000 unidades reporta agora `5417.00`. Consumidores existentes podem ver valores principais de vários trimestres mexer alguns cêntimos em qualquer direção face ao modelo anterior de saldo EUR em precisão total. Foram adicionados `SimulateResult.currentUnitQuote` e `ScheduleRow.unitQuoteAfter`.
- **Suporte à Série E**. A biblioteca passa a cobrir de ponta a ponta os Certificados de Aforro Série E (Portaria n.º 329-A/2017, encerrada pela Portaria n.º 149-A/2023), em conjunto com a Série F. Use `series: 'E'` (ou `Series.E`) em `simulate()`, `getCurrentRate()`, `getRateForCohort()` e `getRateTable()`, ou `--series E` em qualquer comando da CLI `aforro`. A Série E usa a fórmula de taxa-base `E3 + 1%`, limitada a `[0%, 3,5%]`, maturidade de 10 anos, prémios de permanência de `+0,50%` (anos 2-5) e `+1,00%` (anos 6-10), e intervalo de unidades `[100, 250000]`. O artefacto `rates.json` passa a incluir blocos `series.E` e `series.F`; `schemaVersion` mantém-se em `1` porque adicionar uma nova série não é incompatível.

## `2026.420.0`

- Estrutura pública inicial: biblioteca TypeScript + CLI `aforro` + snapshot estático `rates.json`.
- Série F suportada de ponta a ponta (taxa-base, prémios de permanência, capitalização trimestral, retenção de IRS).
- Dataset Euribor 3M incluído, obtido a partir do Deutsche Bundesbank (`BBIG1`, redistribuição de fixings EMMI EURIBOR®).
- Site de documentação em Astro Starlight.
