# O caminho do lead

```
Qualificação  →  Negociação  →  Contrato
```

- **Qualificação**: alguém precisa falar com o lead e descobrir se ele serve. É aqui que a sua
  integração atua.
- **Negociação**: só entra lead que **já recebeu uma proposta de orçamento**.
- **Contrato**: a venda foi feita e espera pagamento.

Um lead também pode ser fechado como perdido, em qualquer ponto.

## A trava que importa

O CRM **recusa** a passagem de Qualificação para Negociação sem orçamento enviado. Essa recusa vale
para qualquer caminho: tela, automação interna e esta API.

Como no momento da ligação ainda não existe orçamento, **nenhum resultado que você envia leva o
card para Negociação**. Isso não é limitação da API, é regra do CRM.

::: danger O erro mais comum da integração
Quando você registra `resultado: "lead_fechar_negocio"`, o card **continua em Qualificação** e
apenas troca de dono.

Isso é o comportamento certo. Quem leva o lead para Negociação é a pessoa do Back Office, enviando
o orçamento. **Se o seu código conferir "o card foi para Negociação" para considerar sucesso, ele
vai concluir que falhou em 100% das vezes.** O sinal de sucesso é o `200` da resposta.
:::

## O que cada resultado faz

| `resultado`             | Onde o card fica                   | Dono                                     |
| ----------------------- | ---------------------------------- | ---------------------------------------- |
| `lead_fechar_negocio`   | Qualificação, situação qualificado  | passa para o `usuario_destino` informado |
| `lead_qualificado`      | Qualificação, situação qualificado  | continua o mesmo                         |
| `lead_desqualificado`   | fecha como não qualificado          | continua o mesmo                         |
| `lead_dados_invalidos`  | **fica exatamente onde está**       | continua o mesmo                         |
| `lead_fora_de_segmento` | fecha como não qualificado          | continua o mesmo                         |

No caso de desqualificação, o motivo de perda registrado é "Desqualificado pela Sara", e o texto
que você enviar em `motivo_desqualificacao` fica guardado junto da ligação.

## Cadastro errado não é perda

Os dois últimos resultados existem para separar duas coisas que parecem a mesma e não são.

**`lead_dados_invalidos`: o telefone não é mais daquela empresa, ou quem atende não tem relação
com ela.** Isso é defeito de cadastro, não desfecho comercial: a empresa continua podendo ser um
bom cliente, só ninguém falou com ela ainda. Por isso **este resultado não fecha o card e não
muda a situação dele**. O que acontece é outra coisa: o contato é enviado para uma pasta de
reconferência, onde alguém do nosso Back Office procura o número certo.

**`lead_fora_de_segmento`: você falou com a pessoa certa e ela disse que não é do nosso
segmento.** Aí sim houve desfecho comercial, e o card fecha com o motivo de perda "Fora de
segmento", que é o mesmo que a nossa operação usa.

::: tip Por que isso te interessa
Lead com `lead_dados_invalidos` **sai da sua fila** em `GET /partners/leads` assim que você envia
o resultado, mesmo com o card aberto. Ou seja: você não vai receber de novo, no dia seguinte, o
mesmo número errado. Se o nosso Back Office achar o telefone certo, o lead volta para a fila.
:::

Em ambos os casos o `motivo_desqualificacao` é o que a pessoa do Back Office lê antes de agir.
Vale a frase concreta ("atendeu uma pizzaria", "o número é de outra empresa há dois anos") em vez
de um rótulo genérico.

## Lead que já passou da qualificação

Nem todo lead que você recebe está em Qualificação: a listagem também entrega lead em Negociação,
porque ele continua sendo um lead vivo que pode receber contato.

Quando o card já passou da qualificação, o CRM **não puxa ele de volta**:

- `lead_fechar_negocio` e `lead_qualificado`: o card **fica onde está**, com a situação que tem, e
  mesmo assim recebe a anotação, a tarefa, a conclusão da tarefa de qualificação e, no fechamento
  de negócio, a troca de dono.
- `lead_desqualificado` e `lead_fora_de_segmento`: fecham o card vindo de Novo, Qualificação ou
  Negociação, mas **não fecham card em Contrato**. Ali a venda já foi feita e só espera pagamento,
  então a ligação é registrada e o card fica onde está.
- `lead_dados_invalidos`: **nunca move o card**, em etapa nenhuma. É o único resultado assim, e é
  de propósito: o problema é o telefone, não o lead.

Em todos esses casos a resposta é `200`: a ligação foi registrada com sucesso.

## Todo lead já tem um responsável

Não existe lead solto no CRM: todo lead que você recebe já está atribuído a um vendedor. Por isso o
campo se chama `usuario_destino` e **troca** o responsável, em vez de "distribuir" o lead.

Os ids dos usuários de destino são entregues junto com a chave. Usuário inexistente ou desligado
devolve `400`.

## Lead fechado não aceita ligação

Lead já fechado (ganho ou perdido) responde `409`. Confirme o `lead_id`: ele provavelmente veio de
uma listagem antiga, e o lead mudou de estado desde então.
