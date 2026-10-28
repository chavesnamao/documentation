# Endpoint

| Método | Endpoint          | Ação                                       | Escopo       |
| ------ | ----------------- | ------------------------------------------ | ------------ |
| GET    | `/partners/leads` | Lista os leads disponíveis para contato.    | `leads:read` |

Devolve leads vivos (em Qualificação ou Negociação, não arquivados) que tenham telefone, do produto
pedido.

## Parâmetros

| Parâmetro    | Obrigatório | Valores                                                        | Padrão |
| ------------ | ----------- | -------------------------------------------------------------- | ------ |
| `produto`    | **sim**     | `imoveis`, `veiculos`                                            | —      |
| `fluxo`      | não         | `inbound`, `outbound`, `todos`                                   | `todos`|
| `etapa`      | não         | `qualificacao`, `negociacao`, `todas`                            | `todas`|
| `parado_ha`  | não         | `sem-interacao`, `7-29`, `30-59`, `60-89`, `90+`, `qualquer`     | `qualquer` |
| `pagina`     | não         | número a partir de 1                                             | `1`    |
| `por_pagina` | não         | número até 100                                                   | `100`  |

### Por que `produto` é obrigatório

Não existe fila única. Quem liga para imobiliária não liga para revenda de veículo, e devolver os
dois misturados obrigaria você a filtrar do seu lado.

### `parado_ha`

Usa a mesma régua da tela de Remanejamento do CRM, e conta a partir da **última interação com o
contato** (anotação, tarefa concluída, etiqueta), não do tempo na etapa.

| Valor           | Significa            |
| --------------- | -------------------- |
| `sem-interacao` | Sem interação total  |
| `7-29`          | 7 a 29 dias          |
| `30-59`         | 30 a 59 dias         |
| `60-89`         | 60 a 89 dias         |
| `90+`           | 90 dias ou mais      |
| `qualquer`      | sem recorte de tempo |

## Requisição

```bash
curl --location --request GET \
'https://crm.chavesnamao.com.br/api/v1/partners/leads?produto=imoveis&etapa=qualificacao&parado_ha=30-59&pagina=1&por_pagina=100' \
--header 'x-api-key: sua-chave-aqui'
```

## Resposta

```json
{
  "success": true,
  "pagina": 1,
  "total_paginas": 97,
  "total": 9649,
  "leads": [
    {
      "lead_id": "0a1b2c3d-4e5f-6071-8293-a4b5c6d7e8f9",
      "nome_contato": "Marcia Pitzer Negocios Imobiliarios",
      "nome_empresa": "Marcia Pitzer Negocios Imobiliarios",
      "tipo_lead": null,
      "produto": "imoveis",
      "faixa_quantidade": "21 a 50",
      "telefone": "5547992880000",
      "cidade": "Balneario Camboriu",
      "uf": "SC",
      "parado_desde": "2026-09-10T14:30:00-03:00",
      "na_etapa_desde": "2026-08-01T10:00:00-03:00",
      "na_base_desde": "2024-05-02T11:00:00-03:00",
      "levantou_a_mao_em": null
    }
  ]
}
```

Campo a campo em [Objeto do lead](lead-object.md).

## Paginação

```
pagina = 1
enquanto pagina <= total_paginas:
    chamar com essa pagina
    se leads vier vazio: parar
    pagina = pagina + 1
```

Pare de paginar quando `pagina` alcançar `total_paginas` **ou** quando a lista vier vazia.

::: tip Peça páginas cheias
O limite por página é 100, e é também o padrão. Montar a campanha do dia com páginas de 100 custa
uma fração das chamadas de páginas pequenas, e o teto por minuto é por chave.
:::

## Quem não entra na fila

Além dos filtros que você escolhe, o CRM já tira da lista:

- lead sem telefone nenhum no cadastro, que não serve para discar;
- lead de card fechado, ganho ou perdido;
- **contato que você mesmo mandou para reconferência** com
  `lead_dados_invalidos` ou `lead_fora_de_segmento`.

O terceiro item é o que impede a repetição: como `lead_dados_invalidos` **não fecha o card**, sem
essa exclusão o mesmo lead voltaria para a sua fila no dia seguinte, com o mesmo telefone errado.
Se o nosso Back Office encontrar o número certo e tirar o contato da pasta, o lead volta a
aparecer normalmente.

## Casos que respondem `200` e parecem erro

::: code-group

```json [Fila vazia]
{
  "success": true,
  "pagina": 1,
  "total_paginas": 1,
  "total": 0,
  "leads": []
}
```

```json [Página além do fim]
{
  "success": true,
  "pagina": 999,
  "total_paginas": 97,
  "total": 9649,
  "leads": []
}
```

:::

Nenhum dos dois é erro. Repare que a página além do fim devolve o `pagina` que **você pediu**.

## Erros

| Código | Quando                                                |
| ------ | ----------------------------------------------------- |
| `400`  | `produto` ausente, ou parâmetro fora dos valores aceitos. |
| `401`  | Chave ausente ou inválida.                             |
| `403`  | A chave não tem o escopo `leads:read`.                 |
| `429`  | Teto de chamadas por minuto.                           |

```json
{
  "success": false,
  "error": "Informe \"produto\" com um destes valores: imoveis, veiculos."
}
```
