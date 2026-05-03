---
title: igcp-aforro
description: Biblioteca TypeScript e CLI para simular Certificados de Aforro Série D, Série E e Série F do IGCP.
template: splash
hero:
  tagline: Simulador determinístico e seguro em decimal para Certificados de Aforro Série D, Série E e Série F. Integra-se em apps JS/TS; inclui CLI e um `rates.json` estático para todos os outros consumidores.
  actions:
    - text: Início rápido
      link: /quickstart/
      icon: right-arrow
    - text: Experimentar no navegador
      link: /playground/
      icon: right-arrow
    - text: Referência da API
      link: /api/
      variant: minimal
    - text: Ver no GitHub
      link: https://github.com/pprimor/igcp-aforro
      icon: external
      variant: minimal
---

## O que faz

`igcp-aforro` reproduz de ponta a ponta o cálculo dos [Certificados de Aforro Série D, Série E e Série F do IGCP](https://www.igcp.pt/):

- Resolve a **taxa-base mensal** a partir da média da Euribor 3M dos 10 dias úteis até ao antepenúltimo dia útil. A Série F limita a média arredondada a `[0%, 2,5%]`; as Séries D e E somam um *spread* de `+1pp` (`E3 + 1%`) e limitam a `[0%, 3,5%]`.
- Soma o **prémio de permanência** aplicável ao ano contratual do grupo de subscrição, usando a tabela da série.
- Capitaliza **trimestralmente** com **retenção de IRS de 28%** em cada capitalização.
- Devolve *strings* decimais para que os resultados possam ser serializados em JSON sem perda de precisão.

## Escolha a interface

- **Aplicação JS/TS?** Instale o pacote npm e chame [`simulate()`](/api/functions/simulate/).
- **Linha de comandos?** Instale a CLI e execute [`aforro simulate`](/cli/).
- **Python / Java / Excel?** Use o [`rates.json`](/rates-json/) pré-calculado e escreva um capitalizador de ~50 linhas.

## Estado

A biblioteca cobre de ponta a ponta a **Série D** (subscrições abertas de 1 de fevereiro de 2015 a 31 de outubro de 2017, maturidade de 10 anos), a **Série E** (subscrições abertas de 1 de novembro de 2017 a 1 de junho de 2023, maturidade de 10 anos) e a **Série F** (subscrições abertas desde 1 de junho de 2023, maturidade de 15 anos). As séries anteriores (A, B, C) estão fora do âmbito atual. A [referência da API](/api/) é gerada a partir dos comentários TSDoc em inglês e permanece em inglês nesta fase.
