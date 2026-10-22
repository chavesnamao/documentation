# Considerações iniciais

A API de Parceiros é REST, responde JSON e é autenticada por uma chave fixa enviada em cabeçalho.
Não há OAuth, não há token que expira e não há etapa de renovação.

## O que você precisa receber de nós antes de começar

| Item                        | O que é                                                                        |
| --------------------------- | ------------------------------------------------------------------------------ |
| Chave de acesso             | Uma por ambiente, entregue por cofre de senhas. Nunca por e-mail ou mensagem.    |
| Escopos liberados           | Quais operações a sua chave alcança. Vêm na resposta do `ping`.                  |
| IDs dos usuários de destino | Só se a sua integração passa o lead para alguém do nosso time.                   |

## Envelope das respostas

Toda resposta tem o campo `success`, inclusive as de erro. O código HTTP e o `success` sempre
concordam: nunca devolvemos `200` com erro dentro do corpo.

::: code-group

```json [Sucesso]
{
  "success": true,
  "pagina": 1,
  "total_paginas": 97,
  "total": 9649,
  "leads": []
}
```

```json [Erro]
{
  "success": false,
  "error": "Informe \"produto\" com um destes valores: imoveis, veiculos."
}
```

:::

O campo `error` é uma frase legível, escrita para ser mostrada a uma pessoa ou registrada em log.
Não é um código: não monte lógica em cima do texto dele, use o código HTTP.

## Convenções

- **Nomes de campo em português**, em `snake_case`: `lead_id`, `nome_contato`, `quantidade_informada`.
- **Datas** sempre em ISO 8601 com fuso. Veja [Formato de datas](date-format.md).
- **Valores em reais** são número, não texto: R$ 547,00 trafega como `547`.
- **Campo opcional vem `null`**, não vem ausente. Trate `null` como ausência de informação, não
  como erro.
