# Fluxo recomendado

A ordem em que os três endpoints se encaixam numa operação de voz.

## 1. Antes de tudo, uma vez

```bash
GET /partners/ping
```

Confirma chave, escopos e conectividade. Se isso falhar, não adianta seguir.

## 2. No começo do dia: montar a fila

```bash
GET /partners/leads?produto=imoveis&etapa=qualificacao&parado_ha=30-59&por_pagina=100
```

Pagine até o fim e guarde a lista do seu lado. **O CRM não marca lead como entregue**: o controle
de quem já foi trabalhado é seu.

Opcionalmente, baixe a escada de planos uma vez e guarde:

```bash
GET /partners/planos?produto=imoveis
```

## 3. Durante a ligação: consultar preço

Se você não baixou a escada, consulte a faixa com o número que o anunciante informou na conversa:

```bash
GET /partners/planos?produto=imoveis&quantidade=15
```

Se vier `503`, a tabela não pôde ser consultada. Conduza a ligação sem citar valor; não diga que
não há plano.

## 4. Ao encerrar: devolver o resultado

```bash
POST /partners/resultados-chamada
```

Um envio por ligação, com `id_chamada` único. Se a resposta se perder, **reenvie o mesmo
`id_chamada`**: o CRM devolve a mesma resposta e não duplica nada.

## 5. Tratar o que pode dar errado

| Situação | O que fazer |
| --- | --- |
| `429` | Aguardar o `Retry-After` e repetir. |
| `409` "gravação em andamento" | Aguardar o `Retry-After` e repetir o mesmo `id_chamada`. |
| `409` "lead já fechado" | Não repetir. O lead mudou de estado desde a listagem. |
| `500` | Repetir com recuo progressivo, mantendo o mesmo `id_chamada`. |
| `400` | Não repetir. Corrigir o corpo: a mensagem diz o campo. |

## Em uma imagem

```
     uma vez          começo do dia             por ligação
   ┌──────────┐   ┌────────────────────┐   ┌──────────────────────┐
   │   ping   │──▶│  leads (paginado)  │──▶│  planos (se precisar)│
   └──────────┘   │  planos (opcional) │   │          ▼           │
                  └────────────────────┘   │  resultados-chamada  │
                                           └──────────────────────┘
```
