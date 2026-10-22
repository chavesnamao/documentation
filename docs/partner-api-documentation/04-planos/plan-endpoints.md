# Endpoint

| Método | Endpoint           | Ação                                     | Escopo       |
| ------ | ------------------ | ---------------------------------------- | ------------ |
| GET    | `/partners/planos` | Consulta a tabela de planos vigente.      | `plans:read` |

Devolve o preço mensal de tabela para pessoa jurídica, sem destaques, do produto pedido.

## Parâmetros

| Parâmetro     | Obrigatório | Valores               | Padrão                      |
| ------------- | ----------- | --------------------- | --------------------------- |
| `produto`     | **sim**     | `imoveis`, `veiculos` | —                           |
| `quantidade`  | não         | número de anúncios    | sem ele, devolve a escada inteira |

## Requisição

::: code-group

```bash [A faixa de uma quantidade]
curl --location --request GET \
'https://crm.chavesnamao.com.br/api/v1/partners/planos?produto=imoveis&quantidade=15' \
--header 'x-api-key: sua-chave-aqui'
```

```bash [A escada inteira]
curl --location --request GET \
'https://crm.chavesnamao.com.br/api/v1/partners/planos?produto=imoveis' \
--header 'x-api-key: sua-chave-aqui'
```

:::

## Resposta

```json
{
  "success": true,
  "produto": "imoveis",
  "atualizado_em": "2026-10-21T14:30:00-03:00",
  "planos": [
    {
      "quantidade_min": 11,
      "quantidade_max": 20,
      "opcoes": [
        {
          "plano_id": "5904",
          "nome_plano": "Plano 20 com 0 destaques",
          "valor_mensal": 547
        }
      ]
    }
  ]
}
```

Campo a campo em [Objeto da faixa](plan-object.md).

## Como a tabela é montada

O preço não é por faixa arbitrária: é por **degrau de quantidade de anúncios**. Imóveis tem 83
degraus (5, 10, 20, 30, 40, 50, até 20.000) e veículos tem 44 (de 5 em 5, até 1.000).

- Cada degrau vira uma faixa. `quantidade_max` é o degrau e `quantidade_min` é o degrau anterior
  mais 1. A primeira faixa começa em 1.
- As faixas **não se sobrepõem nem deixam buraco**: uma quantidade cai em exatamente uma faixa.
- **Quantidade sem degrau exato sobe para o próximo.** Em imóveis não existe degrau 15, então quem
  tem 15 imóveis cai na faixa de 11 a 20. Em veículos, 15 é degrau exato e cai na faixa de 11 a 15.
- **Acima do último degrau**, devolvemos a última faixa, com o teto real da tabela (20.000 em
  imóveis, 1.000 em veículos), e não um teto aberto.

## Por que `opcoes` é uma lista

Dentro de uma faixa pode haver mais de uma opção de plano. Por isso a resposta traz `opcoes` dentro
de cada faixa, em vez de um plano por linha. Hoje existe exatamente uma opção por faixa, mas
escreva o seu código percorrendo a lista.

## `atualizado_em`

É quando esta tabela foi lida da origem do preço. Se a origem estiver fora no momento da sua
chamada, a resposta sai da última leitura boa, e essa data mostra a idade real do preço.

## Nunca devolvemos lista vazia com `200`

Sem preço nem em cache nem na origem, a resposta é `503` com `Retry-After`.

É deliberado: dizer "não temos plano" a um anunciante no meio da ligação é pior do que avisar que a
consulta falhou. Trate o `503` reconhecendo que o preço não pôde ser consultado, não como ausência
de plano.

```json
{
  "success": false,
  "error": "Tabela de planos indisponível no momento. Tente novamente em instantes."
}
```

## Erros

| Código | Quando                                                     |
| ------ | ---------------------------------------------------------- |
| `400`  | `produto` ausente ou fora dos valores aceitos.              |
| `401`  | Chave ausente ou inválida.                                  |
| `403`  | A chave não tem o escopo `plans:read`.                      |
| `429`  | Teto de chamadas por minuto.                                |
| `503`  | Origem do preço fora e sem leitura anterior guardada.       |
