# O que parece defeito e não é

Esta é a página mais importante para quem está escrevendo o código. Nenhum dos itens abaixo é erro
nosso: é como a base realmente está, medido na nossa produção.

## `nome_empresa` pode ser o nome de uma pessoa

Só 11% dos leads têm empresa cadastrada, e dentro desses 1 em cada 4 é cópia do nome do contato.
Quando não há empresa, devolvemos o nome do contato para o campo nunca vir vazio.

**Não trate esse campo como razão social.** Para falar com a pessoa, use `nome_contato`.

## `tipo_lead` vem `null` na maioria

Ele só existe quando há empresa cadastrada com o perfil preenchido.

**Não deduza o tipo pelo nome.** "Imóveis" no nome não distingue imobiliária de corretor autônomo.

## `cidade` e `uf` podem vir nulos

E, quando vêm, vêm sempre do mesmo endereço: nunca a cidade de um cadastro com a UF de outro.

## `faixa_quantidade` é faixa, não número

O estoque do anunciante muda sem aviso, e citar um número desatualizado na ligação atrapalha mais
do que ajuda. Por isso devolvemos `"21 a 50"` e não `37`.

## A lista de leads não vem ordenada por prioridade

A ordem é estável entre páginas, e só isso. Para montar a campanha do dia, use os filtros
(`produto`, `fluxo`, `etapa`, `parado_ha`), não a posição na lista.

## "Parado há" conta desde a última interação com o contato

Não desde a entrada na etapa. Interação é anotação, tarefa concluída ou etiqueta aplicada.

Um lead pode estar há meses em Qualificação e ter sido tocado ontem: para o filtro, ele está parado
há 1 dia.

## O CRM não marca lead como "já entregue"

Se você pedir a mesma página amanhã, os mesmos leads voltam, menos os que mudaram de etapa e os
que você mandou para reconferência.

**O controle de repetição é seu.** Foi uma decisão deliberada: criar no CRM um estado que só o
sistema de fora sabe manter em dia geraria fila fantasma do nosso lado.

## `lead_dados_invalidos` responde `200` sem mudar nada no card

O card continua na mesma etapa, com a mesma situação e o mesmo dono. **Isso é o esperado**:
telefone errado é defeito de cadastro, não perda de negócio, e fechar o card descartaria uma
empresa que talvez quisesse comprar.

O efeito visível está no contato, não no card: ele vai para a pasta de reconferência e some da
sua fila. Se o seu código conferir "a situação do card mudou" para considerar sucesso, vai
concluir que falhou sempre. O sinal de sucesso é o `200`.

## Não existe data de criação do lead na resposta

De propósito. No CRM essa data é regravada a cada remanejamento, então ela diria "lead de hoje"
sobre alguém que está na base há anos.

Para separar lead novo de lead antigo, use `na_base_desde`, que é quando o contato passou a
existir.

## `levantou_a_mao_em` vem `null` quase sempre

Ele só existe em lead de entrada, que é cerca de 3% da fila. No resto, `null` é o valor correto.

## Lista vazia e página além do fim respondem `200`

Fila vazia não é erro de chamada, e pedir a página 999 de uma lista com 97 páginas também não.
Veja [Status de respostas](../01-consideracoes-iniciais/status-request.md).

## O que não fazer

- Não considere falha quando o card de "fechar negócio" continuar em Qualificação: é o esperado.
- Não use `lead_desqualificado` nem `lead_fora_de_segmento` quando o problema foi o telefone: isso
  fecha o card de uma empresa com a qual ninguém conseguiu falar. O resultado desse caso é
  `lead_dados_invalidos`.
- Não envie resultado para lead já fechado; a resposta será `409`.
- Não confie em campo vazio como sinal de problema: `tipo_lead`, `cidade` e `uf` são opcionais
  de verdade.
- Não deduza o produto a partir do plano: mande sempre o `produto` explícito.
- Não baixe a tabela de planos inteira a cada ligação; peça a faixa da quantidade informada.
