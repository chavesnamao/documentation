# Como o CRM funciona

Esta seção não descreve a API: descreve o sistema do outro lado dela. Ela existe porque os campos
desta API são simples e as regras por trás deles não são, e porque quase todo erro de integração
nasce de supor como o CRM funciona.

Aqui está o que contradiz a intuição: o que o nome de um campo sugere e não é, o que vai parecer
falha e é comportamento esperado, e o que o dado real tem de estranho.

## Três palavras que mudam tudo

| Palavra      | O que é                                                                                                                                                                                 |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Lead**     | No CRM é um "deal": a negociação. Ele aponta para um **contato** (a pessoa) e, às vezes, para uma **empresa**. O `lead_id` desta API é o id do deal, e é o mesmo em todos os endpoints. |
| **Etapa**    | Onde o lead está no funil: Qualificação, Negociação, Contrato.                                                                                                                           |
| **Situação** | Coisa diferente de etapa. Um lead com situação "qualificado" **continua vivo**: não é um lead fechado.                                                                                   |

## O que ler

- [O caminho do lead](ciclo-do-lead.md): as etapas, a trava que impede avançar e por que o card
  fica onde está depois de "fechar negócio".
- [Tarefas e anotações](tarefas-e-anotacoes.md): o CRM trabalha por tarefa, e isso muda o que a
  sua chamada deve enviar.
- [O que parece defeito e não é](o-que-parece-defeito.md): como a base realmente está, medido.
