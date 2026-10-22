# Planos

Consulta da tabela de preços vigente, para a agente citar valor correto durante a ligação.

A tabela é uma **escada por quantidade de anúncios**, virada em faixas que não se sobrepõem nem
deixam buraco: uma quantidade cai em exatamente uma faixa.

- [Endpoint](plan-endpoints.md): parâmetros, como a escada é montada e o que fazer quando a origem
  do preço está fora.
- [Objeto da faixa](plan-object.md): campo a campo.

::: warning Não baixe a tabela inteira a cada ligação
Peça a faixa da quantidade que o anunciante informou, ou baixe a escada uma vez por dia e guarde do
seu lado. São 83 faixas em imóveis e 44 em veículos, e o teto de chamadas é por chave.
:::
