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

Simula um grupo de subscrição de Certificados de Aforro Série E ou Série F até uma data de referência.

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
| `--units <n>` | Capital em EUR; inteiro dentro do intervalo `[minUnits, maxUnits]` da série (Série F: `[100, 100000]`; Série E: `[100, 250000]`). Obrigatória. |
| `--as-of <date>` | Data de referência (`YYYY-MM-DD`). Por omissão, hoje em UTC. |
| `--schedule` | Inclui o calendário de capitalização por trimestre. |
| `--irs <rate>` | Substitui a taxa de retenção de IRS (por exemplo, `0.28`). Por omissão, usa a taxa da série. |
| `--series <code>` | Código da série. Aceita `E` ou `F`. Por omissão, `F`. |
| `--json` | Emite JSON em vez do formato visual. |

## `aforro current`

Mostra a taxa-base mensal publicada pelo IGCP para o mês atual, ou para o mês indicado.

```bash
aforro current [--series E|F] [--as-of 2026-04-19] [--json]
```

Inclui `fixingDate` para que possa auditar o valor até uma observação específica da Euribor 3M em `src/data/euribor3m.json`.

## `aforro rates`

Mostra as taxas-base mensais entre `--from` e `--to`, inclusive.

```bash
aforro rates --from 2023-06 --to 2026-04 [--series E|F] [--json]
```

Os meses são aceites no formato `YYYY-MM`. A saída tem uma linha por mês resolúvel; meses sem fixing incluído são omitidos.

## `aforro cohort`

Resolve a taxa anual aplicável a um grupo de subscrição num determinado trimestre.

```bash
aforro cohort \
  --subscribed 2024-03 \
  --as-of 2026-04 \
  [--series E|F] \
  [--json]
```

`--subscribed` e `--as-of` aceitam `YYYY-MM` ou `YYYY-MM-DD`. Devolve a taxa anual composta, os seus componentes base + prémio e a janela trimestral a que se aplicam.

## `aforro fetch-euribor`

::::caution[Apenas para desenvolvimento]
Este comando atualiza `src/data/euribor3m.json` a partir da [API de séries temporais do Deutsche Bundesbank](https://api.statistiken.bundesbank.de/) (série `BBIG1`, redistribuindo fixings diários da EMMI EURIBOR®). Só funciona dentro de um checkout de desenvolvimento deste repositório e está ligado ao cron `data-refresh.yml`. Utilizadores finais da biblioteca não deverão precisar de o executar.
::::

```bash
aforro fetch-euribor [--mode seed|incremental|range]
```

## Opções transversais

- `--json` — emite saída legível por máquinas. É estável entre versões; alterações são assinaladas no [Histórico de alterações](/changelog/).
- `--help` e `--version` — fornecidas por `cac`.
