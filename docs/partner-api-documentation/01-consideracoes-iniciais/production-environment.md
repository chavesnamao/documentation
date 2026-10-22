# Ambiente de produção

Base de todas as chamadas:

```
https://crm.chavesnamao.com.br/api/v1
```

Exemplo completo:

```bash
curl --location --request GET 'https://crm.chavesnamao.com.br/api/v1/partners/ping' \
--header 'x-api-key: sua-chave-de-producao'
```

::: danger Produção mexe em dado real
O endpoint `POST /partners/resultados-chamada` grava no card de um anunciante de verdade: conclui
tarefa, cria tarefa, troca o dono do lead e deixa registro na linha do tempo que o vendedor lê.
Valide a integração inteira no [ambiente de testes](test-environment.md) antes de apontar para cá.
:::

## A chave de produção é outra

A chave de testes **não funciona** em produção, e vice-versa. São cadastros separados, com escopos
e limites próprios. Guarde as duas em cofre de senhas e nunca as versione em repositório.

## Antes de virar a chave

- [ ] `GET /partners/ping` responde `200` com os escopos esperados.
- [ ] A listagem de leads devolve dado coerente com o produto pedido.
- [ ] O resultado de ligação foi testado nos três desfechos.
- [ ] O reenvio do mesmo `id_chamada` foi testado e não duplicou nada.
- [ ] O seu lado trata `429` respeitando o `Retry-After`.
- [ ] O seu lado trata `503` da tabela de planos sem travar a ligação.
