# Objeto de envio

## Campos

| Campo                            | Tipo          | Obrigatório | Limite      | O que é                                                         |
| -------------------------------- | ------------- | ----------- | ----------- | --------------------------------------------------------------- |
| `lead_id`                        | string        | **sim**     | 191         | Id do lead, vindo de `GET /partners/leads`.                       |
| `id_chamada`                     | string        | **sim**     | 120         | Único por ligação. É a chave de idempotência.                     |
| `resultado`                      | string        | **sim**     | —           | `lead_fechar_negocio`, `lead_qualificado` ou `lead_desqualificado`.|
| `produto`                        | string        | **sim**     | —           | `imoveis` ou `veiculos`. Precisa bater com o lead.                |
| `autorizou_contato_especialista` | booleano      | **sim**     | —           | Se o anunciante autorizou o contato comercial.                    |
| `resumo`                         | string        | **sim**     | 20.000      | Resumo da conversa, em texto livre.                               |
| `transcricao`                    | string        | **sim**     | 1.000.000   | Transcrição da ligação.                                           |
| `link_gravacao`                  | string        | **sim**     | 2.000       | URL da gravação. **Só `http://` ou `https://`.**                  |
| `data_chamada`                   | data ISO 8601 | **sim**     | —           | Quando a ligação aconteceu, com fuso.                             |
| `quantidade_informada`           | número        | não         | 0 a 1.000.000 | Quantos anúncios o anunciante disse ter.                        |
| `plano_id_ofertado`              | string        | não         | 60          | `plano_id` vindo de `GET /partners/planos`.                       |
| `motivo_desqualificacao`         | string        | não         | 2.000       | **Só com `lead_desqualificado`.**                                 |
| `usuario_destino`                | string        | condicional | 191         | **Obrigatório em `lead_fechar_negocio`.** Id do usuário de destino.|
| `tarefa`                         | objeto        | não         | —           | Tarefa de acompanhamento. Sem ele, nenhuma tarefa é criada.       |

## Bloco `tarefa`

Opcional. Quando vem, estes são os seus campos:

| Campo       | Tipo          | Obrigatório | Limite  | O que é                                                   |
| ----------- | ------------- | ----------- | ------- | --------------------------------------------------------- |
| `titulo`    | string        | **sim**     | 191     | O que aparece na fila do responsável.                      |
| `tipo`      | string        | **sim**     | —       | `ligacao`, `email`, `reuniao`, `whatsapp` ou `tarefa`.     |
| `prazo`     | data ISO 8601 | **sim**     | —       | Vencimento, com fuso.                                      |
| `descricao` | string        | não         | 16.000  | Contexto para quem vai executar.                           |
| `para`      | string        | não         | 191     | Id de quem fica com a tarefa. Sem ele, o dono do card.     |

## Regras de validação que surpreendem

**`motivo_desqualificacao` só vale com `lead_desqualificado`.** Enviar junto de outro resultado
devolve `400`. Motivo de perda em lead qualificado quase sempre significa que o `resultado` foi
montado errado do outro lado, e aceitar em silêncio gravaria no card uma perda que não existe.

**`usuario_destino` é obrigatório em `lead_fechar_negocio`.** Sem ele o lead ficaria parado com o
vendedor antigo, em silêncio. Nos outros dois resultados o campo é **conferido** (usuário
inexistente ou desligado devolve `400`) mas **não muda o dono**.

**`link_gravacao` só aceita `http` e `https`.** Outros esquemas são recusados com `400`.

**`produto` precisa bater com o lead.** Lead de veículos com `produto: "imoveis"` devolve `400`.

**Texto acima do limite devolve `400`**, não erro interno. A mensagem diz qual campo e qual é o
limite.

**Toda data precisa de fuso.** Veja [Formato de datas](../01-consideracoes-iniciais/date-format.md).

## Onde cada campo vai parar

| Campo enviado                  | Onde aparece no CRM                                    |
| ------------------------------ | ------------------------------------------------------ |
| `resumo`                       | Aba da ligação, no card do lead.                        |
| `transcricao`                  | Aba da ligação, carregada ao expandir.                  |
| `link_gravacao`                | Aba da ligação, como link.                              |
| `quantidade_informada`         | Aba da ligação, em campo próprio.                       |
| `plano_id_ofertado`            | Aba da ligação, em campo próprio.                       |
| `autorizou_contato_especialista` | Aba da ligação, em campo próprio.                     |
| `motivo_desqualificacao`       | Aba da ligação, e vira o motivo de perda do card.       |
| `data_chamada`                 | Aba da ligação, como a hora da conversa.                |
| `tarefa`                       | Fila de tarefas do responsável.                         |
| `resultado`                    | Situação do card e a anotação na linha do tempo.        |

A anotação na linha do tempo tem duas linhas e aponta para a aba. Mais em
[Tarefas e anotações](../02-como-o-crm-funciona/tarefas-e-anotacoes.md).
