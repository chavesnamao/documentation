# Autenticação

A chave vai no cabeçalho `x-api-key` de **todas** as requisições. Não há endpoint de login, não há
troca de token e a chave não expira.

```bash
curl --location --request GET 'https://crm.chavesnamao.com.br/api/v1/partners/leads?produto=imoveis' \
--header 'x-api-key: sua-chave-aqui'
```

A chave é entregue por cofre de senhas. Se você não a recebeu, ou precisa de uma nova, escreva para
[tecnologia@chavesnamao.com.br](mailto:tecnologia@chavesnamao.com.br).

::: warning Guarde a chave como senha
Ela identifica a sua empresa e, no caso do escopo de escrita, altera o card de um anunciante real.
Não a coloque em repositório, em front-end, em log de aplicação nem em ticket de suporte.
:::

## Confira antes de integrar

`GET /partners/ping` existe exatamente para isso: confirmar chave, escopos e conectividade antes de
qualquer endpoint de negócio. Ele não exige escopo nenhum.

```json
{
  "success": true,
  "parceiro": "3C Plus",
  "chave": "cnmp_3cplus_...a1b2",
  "escopos": ["leads:read", "plans:read", "call-results:write"],
  "data_hora": "2026-10-22T14:30:00-03:00"
}
```

O campo `chave` vem mascarado de propósito: serve para você confirmar **qual** chave está em uso
quando tiver mais de uma, sem expor o valor em log.

## Escopos

Cada chave alcança apenas os escopos concedidos a ela. Faltando escopo, a resposta é `403` e diz
qual falta.

| Escopo               | Dá acesso a                            |
| -------------------- | -------------------------------------- |
| `leads:read`         | `GET /partners/leads`                  |
| `plans:read`         | `GET /partners/planos`                 |
| `call-results:write` | `POST /partners/resultados-chamada`    |

```json
{
  "success": false,
  "error": "A chave não tem permissão para esta operação (falta: leads:read)."
}
```

## Se a chave vazar

Avise [tecnologia@chavesnamao.com.br](mailto:tecnologia@chavesnamao.com.br) imediatamente. Nós
revogamos a chave comprometida e emitimos outra. Chave revogada passa a responder `401` na hora,
em todas as chamadas.
