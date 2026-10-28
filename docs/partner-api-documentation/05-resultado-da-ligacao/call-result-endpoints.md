# Endpoint

| Método | Endpoint                       | Ação                                   | Escopo               |
| ------ | ------------------------------ | -------------------------------------- | -------------------- |
| POST   | `/partners/resultados-chamada` | Grava o resultado de uma ligação.       | `call-results:write` |

Responde `200`, não `201`.

## O que uma chamada faz no CRM

1. Aplica o resultado no card (situação e, quando for o caso, dono).
2. Conclui a tarefa de qualificação pendente, inclusive se for a 2ª a 10ª tentativa.
3. Guarda resumo, transcrição, gravação e campos coletados no próprio lead.
4. Cria a anotação de rastro na linha do tempo.
5. Cria a tarefa de acompanhamento, se o bloco `tarefa` vier.
6. Nos resultados de cadastro errado, envia o contato para a pasta de reconferência, e com isso o
   lead sai da sua fila em `GET /partners/leads`.

Os cinco primeiros passos são uma operação só: ou aplica inteiro, ou não aplica nada.

## Requisição

```bash
curl --location --request POST \
'https://crm.chavesnamao.com.br/api/v1/partners/resultados-chamada' \
--header 'x-api-key: sua-chave-aqui' \
--header 'Content-Type: application/json' \
--data-raw '{
  "lead_id": "0a1b2c3d-4e5f-6071-8293-a4b5c6d7e8f9",
  "id_chamada": "conv_0001",
  "resultado": "lead_fechar_negocio",
  "produto": "imoveis",
  "quantidade_informada": 12,
  "plano_id_ofertado": "5857",
  "autorizou_contato_especialista": true,
  "resumo": "Anunciante tem 12 imóveis e quer contratar o plano de 20.",
  "transcricao": "Sara: Olá, falo com...",
  "link_gravacao": "https://gravacoes.exemplo.com/conv_0001.mp3",
  "data_chamada": "2026-10-21T10:15:00-03:00",
  "usuario_destino": "e74f6616-68c4-4cc1-afa4-e4dd89594406",
  "tarefa": {
    "titulo": "Retorno do Back Office",
    "tipo": "ligacao",
    "descricao": "Cliente pediu retorno após as 14h.",
    "prazo": "2026-10-27T14:00:00-03:00"
  }
}'
```

::: warning Envie o corpo em UTF-8
Texto acentuado enviado em outra codificação chega com caracteres corrompidos, e o que fica
gravado no card é o texto quebrado. Garanta `Content-Type: application/json` e o corpo
efetivamente codificado em UTF-8.
:::

## Os cinco resultados

::: code-group

```json [Quer fechar negócio]
{
  "lead_id": "0a1b2c3d-4e5f-6071-8293-a4b5c6d7e8f9",
  "id_chamada": "conv_0001",
  "resultado": "lead_fechar_negocio",
  "produto": "imoveis",
  "quantidade_informada": 12,
  "plano_id_ofertado": "5857",
  "autorizou_contato_especialista": true,
  "resumo": "Anunciante tem 12 imóveis e quer contratar o plano de 20.",
  "transcricao": "Sara: Olá, falo com...",
  "link_gravacao": "https://gravacoes.exemplo.com/conv_0001.mp3",
  "data_chamada": "2026-10-21T10:15:00-03:00",
  "usuario_destino": "e74f6616-68c4-4cc1-afa4-e4dd89594406",
  "tarefa": {
    "titulo": "Retorno do Back Office",
    "tipo": "ligacao",
    "descricao": "Cliente pediu retorno após as 14h.",
    "prazo": "2026-10-27T14:00:00-03:00"
  }
}
```

```json [Lead qualificado]
{
  "lead_id": "0a1b2c3d-4e5f-6071-8293-a4b5c6d7e8f9",
  "id_chamada": "conv_0002",
  "resultado": "lead_qualificado",
  "produto": "veiculos",
  "quantidade_informada": 40,
  "autorizou_contato_especialista": true,
  "resumo": "Tem interesse, pediu para o vendedor retomar na semana que vem.",
  "transcricao": "Sara: Olá, falo com...",
  "link_gravacao": "https://gravacoes.exemplo.com/conv_0002.mp3",
  "data_chamada": "2026-10-21T11:02:00-03:00"
}
```

```json [Lead desqualificado]
{
  "lead_id": "0a1b2c3d-4e5f-6071-8293-a4b5c6d7e8f9",
  "id_chamada": "conv_0003",
  "resultado": "lead_desqualificado",
  "produto": "imoveis",
  "autorizou_contato_especialista": false,
  "motivo_desqualificacao": "Encerrou a atividade imobiliária e não tem mais estoque.",
  "resumo": "Não é mais corretor.",
  "transcricao": "Sara: Olá, falo com...",
  "link_gravacao": "https://gravacoes.exemplo.com/conv_0003.mp3",
  "data_chamada": "2026-10-21T11:40:00-03:00"
}
```

```json [Cadastro errado]
{
  "lead_id": "0a1b2c3d-4e5f-6071-8293-a4b5c6d7e8f9",
  "id_chamada": "conv_0004",
  "resultado": "lead_dados_invalidos",
  "produto": "imoveis",
  "autorizou_contato_especialista": false,
  "motivo_desqualificacao": "Atendeu uma pizzaria. O número não é da imobiliária há dois anos.",
  "resumo": "Número errado, não falei com a empresa.",
  "transcricao": "Sara: Olá, falo com...",
  "link_gravacao": "https://gravacoes.exemplo.com/conv_0004.mp3",
  "data_chamada": "2026-10-21T14:05:00-03:00"
}
```

```json [Fora de segmento]
{
  "lead_id": "0a1b2c3d-4e5f-6071-8293-a4b5c6d7e8f9",
  "id_chamada": "conv_0005",
  "resultado": "lead_fora_de_segmento",
  "produto": "veiculos",
  "autorizou_contato_especialista": false,
  "motivo_desqualificacao": "É oficina mecânica, não vende veículos.",
  "resumo": "Falei com o dono. Não trabalha com venda.",
  "transcricao": "Sara: Olá, falo com...",
  "link_gravacao": "https://gravacoes.exemplo.com/conv_0005.mp3",
  "data_chamada": "2026-10-21T15:20:00-03:00"
}
```

:::

Campo a campo em [Objeto de envio](call-result-object.md).

## Resposta

```json
{
  "success": true,
  "lead_id": "0a1b2c3d-4e5f-6071-8293-a4b5c6d7e8f9"
}
```

O `200` é o sinal de sucesso. Não confira a etapa do card para decidir se deu certo: veja
[O caminho do lead](../02-como-o-crm-funciona/ciclo-do-lead.md).

## Erros

| Código | Quando                                                                                     |
| ------ | ------------------------------------------------------------------------------------------ |
| `400`  | Campo ausente, valor inválido, texto acima do limite, data sem fuso, usuário de destino inexistente ou desligado, produto que não bate com o lead. |
| `401`  | Chave ausente ou inválida.                                                                   |
| `403`  | A chave não tem o escopo `call-results:write`.                                               |
| `404`  | Nenhum lead com o `lead_id` informado.                                                       |
| `409`  | Lead já fechado, ou gravação desta mesma chamada em andamento.                               |
| `429`  | Teto de chamadas por minuto.                                                                 |

::: code-group

```json [Campo faltando]
{
  "success": false,
  "error": "Informe \"resumo\". Informe \"transcricao\"."
}
```

```json [Destino obrigatório]
{
  "success": false,
  "error": "Informe \"usuario_destino\" quando o resultado for lead_fechar_negocio: é para esse usuário que o lead passa."
}
```

```json [Produto divergente]
{
  "success": false,
  "error": "O lead informado é de veiculos, e não de imoveis. Confirme o lead_id."
}
```

```json [Lead fechado]
{
  "success": false,
  "error": "Este lead já está fechado no CRM e não aceita resultado de ligação. Confirme o lead_id."
}
```

:::
