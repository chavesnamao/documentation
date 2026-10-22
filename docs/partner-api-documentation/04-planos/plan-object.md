# Objeto da faixa

## Raiz da resposta

| Campo | Tipo | O que é |
| --- | --- | --- |
| `produto` | string | `imoveis` ou `veiculos`, repetindo o que foi pedido. |
| `atualizado_em` | data ISO 8601 | Quando esta tabela foi lida da origem do preço. |
| `planos` | lista de faixas | As faixas que atendem o pedido. |

## Faixa

| Campo | Tipo | O que é |
| --- | --- | --- |
| `quantidade_min` | número | Primeira quantidade que cai nesta faixa. |
| `quantidade_max` | número | Último degrau desta faixa. |
| `opcoes` | lista de planos | Planos disponíveis nesta faixa. Hoje, sempre um. |

## Opção de plano

| Campo | Tipo | O que é |
| --- | --- | --- |
| `plano_id` | string | Id do plano. É o valor a enviar em `plano_id_ofertado` no resultado da ligação. |
| `nome_plano` | string | Nome comercial, ex. `"Plano 20 com 0 destaques"`. |
| `valor_mensal` | número | Preço mensal em reais. |

::: tip `valor_mensal` é número
JSON não guarda zero à direita, então R$ 547,00 trafega como `547` e R$ 1.299,90 como `1299.9`.
Formate na sua ponta.
:::

## Exemplo completo

```json
{
  "success": true,
  "produto": "imoveis",
  "atualizado_em": "2026-10-21T14:30:00-03:00",
  "planos": [
    {
      "quantidade_min": 1,
      "quantidade_max": 5,
      "opcoes": [
        { "plano_id": "12543", "nome_plano": "Plano 5 com 0 destaques", "valor_mensal": 300 }
      ]
    },
    {
      "quantidade_min": 6,
      "quantidade_max": 10,
      "opcoes": [
        { "plano_id": "5857", "nome_plano": "Plano 10 com 0 destaques", "valor_mensal": 495 }
      ]
    },
    {
      "quantidade_min": 11,
      "quantidade_max": 20,
      "opcoes": [
        { "plano_id": "5904", "nome_plano": "Plano 20 com 0 destaques", "valor_mensal": 547 }
      ]
    }
  ]
}
```
