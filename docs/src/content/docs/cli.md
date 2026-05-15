---
title: Referência da CLI
description: Comandos expostos pelo binário `aforro`.
---

O binário `aforro` é distribuído pelo pacote npm. Todos os comandos aceitam `--json` para saída legível por máquinas; sem essa opção, a saída é uma tabela ou uma lista chave-valor mais fácil de ler por humanos.

```bash
pnpm add -g igcp-aforro
aforro --help
```

## `aforro simulate`

Simula um grupo de subscrição de Certificados de Aforro Série D, E ou F até uma data de referência.

```bash
aforro simulate \
  --subscribed 2024-03-15 \
  --units 1000 \
  [--as-of 2026-04-19] \
  [--schedule] \
  [--irs 0.28] \
  [--series F] \
  [--json]
```

| Opção | Descrição |
| --- | --- |
| `--subscribed <date>` | Data de subscrição (`YYYY-MM-DD`). Obrigatória. |
| `--units <n>` | Capital em EUR; inteiro dentro do intervalo `[minUnits, maxUnits]` da série (Série F: `[100, 100000]`; Séries D/E: `[100, 250000]`). Obrigatória. |
| `--as-of <date>` | Data de referência (`YYYY-MM-DD`). Por omissão, hoje em UTC. |
| `--schedule` | Inclui o calendário de capitalização por trimestre. |
| `--irs <rate>` | Substitui a taxa de retenção de IRS (por exemplo, `0.28`). Por omissão, usa a taxa da série. |
| `--series <code>` | Código da série. Aceita `D`, `E` ou `F`. Por omissão, `F`. |
| `--json` | Emite JSON em vez do formato visual. |

## `aforro redeem`

Calcula o valor de resgate antecipado (total ou parcial) para uma posição Série D, E ou F.

```bash
aforro redeem \
  --subscribed 2024-03-15 \
  --units 1000 \
  --redeem-on 2026-04-19 \
  [--redeem-units 400] \
  [--series F] \
  [--irs 0.28] \
  [--schedule] \
  [--json]
```

| Opção | Descrição |
| --- | --- |
| `--subscribed <date>` | Data de subscrição (`YYYY-MM-DD`). Obrigatória. |
| `--units <n>` | Posição original em EUR (unidades inteiras). Obrigatória. |
| `--redeem-on <date>` | Data de resgate (`YYYY-MM-DD`). Obrigatória. |
| `--redeem-units <n>` | Unidades a resgatar. Omissão = resgate total. |
| `--series <code>` | Código da série (`D`, `E`, `F`). Por omissão, `F`. |
| `--irs <rate>` | Taxa de IRS usada na simulação embebida. Por omissão, usa a taxa da série. |
| `--schedule` | Inclui o calendário trimestral da simulação embebida. |
| `--json` | Emite JSON em vez do formato visual. |

## `aforro current`

Mostra a taxa-base mensal publicada pelo IGCP para o mês atual, ou para o mês indicado.

```bash
aforro current [--series D|E|F] [--as-of 2026-04-19] [--json]
```

Inclui `fixingDate` para que possa auditar o valor até uma fixação específica da Euribor 3M em `src/data/euribor3m.json`.

## `aforro rates`

Mostra as taxas-base mensais entre `--from` e `--to`, inclusive.

```bash
aforro rates --from 2023-06 --to 2026-04 [--series D|E|F] [--json]
```

Os meses são aceites no formato `YYYY-MM`. A saída tem uma linha por mês resolúvel; meses sem fixação incluída são omitidos.

## `aforro cohort`

Resolve a taxa anual aplicável a um grupo de subscrição num determinado trimestre.

```bash
aforro cohort \
  --subscribed 2024-03 \
  --as-of 2026-04 \
  [--series D|E|F] \
  [--json]
```

`--subscribed` e `--as-of` aceitam `YYYY-MM` ou `YYYY-MM-DD`. Devolve a taxa anual composta, os seus componentes base + prémio e a janela trimestral a que se aplicam.

## `aforro tax-year`

Totais de **ano civil** de juro bruto e IRS retido nas capitalizações trimestrais (auxiliar para declaração IRS; não mapeia caixas do Anexo E).

```bash
aforro tax-year --subscribed 2024-03-15 --units 1000 --year 2025 [--series F] [--as-of 2026-04-19] [--json]
aforro tax-year --input ./portfolio.json --year 2025 [--json]
aforro tax-year --cohort F,2024-03-15,1000 --cohort E,2018-01-15,2500 --year 2025 --as-of 2026-04-19
```

| Opção | Descrição |
| --- | --- |
| `--year <yyyy>` | Ano civil a reportar. **Obrigatório.** |
| `--subscribed`, `--units` | Grupo único (como em `simulate`). |
| `--input`, `--cohort` | Modo portefólio (como em `portfolio`); não combinar com `--subscribed` / `--units`. |
| `--as-of`, `--irs`, `--series` | Igual a `simulate` / `portfolio`. |
| `--json` | Emite `TaxYearRollup` ou `PortfolioTaxYearRollup`. |
| `--csv` | CSV de uma linha (só grupo único; não com `--json`). |

Os totais agrupam linhas do calendário pela **data de fim de trimestre** (`quarterEndDate`). O juro acumulado a meio de trimestre fica excluído. Ver [Metodologia — agregação por ano civil](/methodology/#agregação-por-ano-civil-auxiliar-irs).

## `aforro fetch-euribor`

::::caution[Apenas para desenvolvimento]
Este comando atualiza `src/data/euribor3m.json` a partir da [API de séries temporais do Deutsche Bundesbank](https://api.statistiken.bundesbank.de/) (série `BBIG1`, redistribuindo fixações diárias da EMMI EURIBOR®). Só funciona dentro de um checkout de desenvolvimento deste repositório e está ligado ao cron `data-refresh.yml`. Utilizadores finais da biblioteca não deverão precisar de o executar.
::::

```bash
aforro fetch-euribor [--mode seed|incremental|range]
```

## Opções transversais

- `--json` — emite saída legível por máquinas. É estável entre versões; alterações são assinaladas no [Histórico de alterações](/changelog/).
- `--help` e `--version` — fornecidas por `cac`.
