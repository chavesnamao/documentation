# Resultado da ligação

Este é o **único endpoint que escreve** no CRM. Ele registra o desfecho de uma ligação: aplica o
resultado no card, conclui a tarefa de qualificação pendente, guarda o conteúdo da conversa no
próprio lead e, quando pedido, cria uma tarefa de acompanhamento.

Tudo em uma operação só: ou aplica inteiro, ou não aplica nada.

- [Endpoint](call-result-endpoints.md): requisição, respostas e erros.
- [Objeto de envio](call-result-object.md): campo a campo, com limites de tamanho.
- [Idempotência](idempotency.md): como reenviar sem duplicar.

::: danger Leia antes de codar o "sucesso"
Quando o resultado é `lead_fechar_negocio`, o card **continua em Qualificação** e apenas troca de
dono. Isso é o comportamento certo. Se o seu código conferir "o card foi para Negociação" para
considerar sucesso, ele vai concluir que falhou sempre. O sinal de sucesso é o `200`.

Por quê, em [O caminho do lead](../02-como-o-crm-funciona/ciclo-do-lead.md).
:::
