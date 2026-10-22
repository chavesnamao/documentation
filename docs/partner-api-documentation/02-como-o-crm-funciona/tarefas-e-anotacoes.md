# Tarefas e anotações

## O CRM trabalha por tarefa

O vendedor abre o CRM e vê a fila de tarefas dele, não uma lista de leads. Duas coisas decorrem
disso.

### A tarefa de qualificação é concluída sozinha

Cada lead em Qualificação tem uma tarefa **"Qualificar Deal"** pendente, que é exatamente o
trabalho que a sua integração faz. Ao receber o resultado da ligação, o CRM conclui essa tarefa.

Se o lead já estiver em uma nova tentativa ("Qualificar Deal - 2ª tentativa" e assim por diante,
até a 10ª), é a tentativa vigente que é concluída. Você não precisa saber em qual tentativa o lead
está, nem enviar nada a respeito.

### Você pode criar uma tarefa de acompanhamento

O bloco `tarefa` do resultado da ligação é opcional. Quando vem, cria uma tarefa avulsa no card:
serve para agendar um retorno, um envio de material, uma reunião.

```json
{
  "tarefa": {
    "titulo": "Retornar após as 14h",
    "tipo": "ligacao",
    "descricao": "Cliente pediu para chamar depois do almoço.",
    "prazo": "2026-10-27T14:00:00-03:00"
  }
}
```

`titulo`, `tipo` e `prazo` são obrigatórios quando o bloco vem. Sem `para`, a tarefa fica com o
dono do card depois da gravação.

::: tip Por que o prazo é obrigatório
Tarefa sem data de vencimento não entra na agenda de ninguém no CRM. Uma tarefa que nunca aparece
é pior do que tarefa nenhuma, porque o seu lado acha que pediu o retorno e ninguém vai retornar.
:::

A tarefa que você cria **não se mistura** com as tarefas do processo do CRM: ela entra como avulsa,
com título, prazo e responsável livres.

Tipos aceitos: `ligacao`, `email`, `reuniao`, `whatsapp`, `tarefa`.

## Anotação é sempre interna

O CRM não tem o conceito de "comentário visível para o cliente". **Toda anotação é interna**, vista
só por quem trabalha no CRM. Se o seu contrato exige que nada seja exposto ao anunciante, isso está
atendido por construção.

### Onde fica o conteúdo da ligação

O resumo, a transcrição, o link da gravação e os campos coletados (quantidade informada, plano
ofertado, autorização de contato, motivo da desqualificação) ficam guardados **no próprio lead**,
numa aba exclusiva da ligação, cada um em seu campo.

A anotação que aparece na linha do tempo tem duas linhas e serve de rastro para o vendedor: diz que
a ligação aconteceu, quando, qual foi o resultado, e aponta para a aba onde está o resto. Ela é
identificada com o nome do seu sistema.

::: warning Não procure a transcrição dentro da anotação
Ela não está lá. Cada parte do conteúdo tem campo próprio, e é assim que conseguimos medir a
operação (quantas ligações, quantas qualificaram, aproveitamento por produto) sem garimpar texto.
:::
