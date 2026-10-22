# API de Parceiros (v1)

Porta de entrada para sistemas de terceiros no CRM da Chaves na Mão. Com ela o seu sistema consulta
os leads disponíveis para contato, consulta a tabela de planos vigente e devolve para o CRM o que
aconteceu em cada ligação.

::: warning Antes de escrever código, leia "Como o CRM funciona"
Os campos desta API são simples. As regras do CRM por trás deles não são, e quase todo erro de
integração vem de supor como ele funciona em vez de conferir. São quatro páginas curtas e elas
economizam retrabalho.
:::

## Mapa da documentação

- [Considerações iniciais](01-consideracoes-iniciais/index.md)
  - [Ambiente de testes](01-consideracoes-iniciais/test-environment.md)
  - [Ambiente de produção](01-consideracoes-iniciais/production-environment.md)
  - [Autenticação](01-consideracoes-iniciais/authentication.md)
  - [Limite de requisições](01-consideracoes-iniciais/limit-requests.md)
  - [Status de respostas das requisições](01-consideracoes-iniciais/status-request.md)
  - [Formato de datas](01-consideracoes-iniciais/date-format.md)
- [Como o CRM funciona](02-como-o-crm-funciona/index.md)
  - [O caminho do lead](02-como-o-crm-funciona/ciclo-do-lead.md)
  - [Tarefas e anotações](02-como-o-crm-funciona/tarefas-e-anotacoes.md)
  - [O que parece defeito e não é](02-como-o-crm-funciona/o-que-parece-defeito.md)
- [Leads](03-leads/index.md)
  - [Endpoint](03-leads/lead-endpoints.md)
  - [Objeto do lead](03-leads/lead-object.md)
- [Planos](04-planos/index.md)
  - [Endpoint](04-planos/plan-endpoints.md)
  - [Objeto da faixa](04-planos/plan-object.md)
- [Resultado da ligação](05-resultado-da-ligacao/index.md)
  - [Endpoint](05-resultado-da-ligacao/call-result-endpoints.md)
  - [Objeto de envio](05-resultado-da-ligacao/call-result-object.md)
  - [Idempotência](05-resultado-da-ligacao/idempotency.md)
- [Fluxo recomendado](06-fluxo-recomendado/index.md)

## Os três endpoints

| Método | Endpoint                      | Ação                                                        | Escopo               |
| ------ | ----------------------------- | ----------------------------------------------------------- | -------------------- |
| GET    | `/partners/ping`              | Confere a chave, os escopos e a conectividade.                | nenhum               |
| GET    | `/partners/leads`             | Lista os leads disponíveis para contato.                      | `leads:read`         |
| GET    | `/partners/planos`            | Consulta a tabela de planos vigente, em faixas de quantidade. | `plans:read`         |
| POST   | `/partners/resultados-chamada`| Grava no card do lead o que aconteceu na ligação.             | `call-results:write` |

Só o último escreve no CRM. Os outros três apenas leem.

## Primeira chamada

Antes de qualquer coisa, confirme que a sua chave chega até nós:

```bash
curl --location --request GET 'https://crm.chavesnamao.com.br/api/v1/partners/ping' \
--header 'x-api-key: sua-chave-aqui'
```

```json
{
  "success": true,
  "parceiro": "3C Plus",
  "chave": "cnmp_3cplus_...a1b2",
  "escopos": ["leads:read", "plans:read", "call-results:write"],
  "data_hora": "2026-10-22T14:30:00-03:00"
}
```

Se isso responder, o resto é contrato. Se não responder, a resposta diz o que fazer: veja
[Status de respostas das requisições](01-consideracoes-iniciais/status-request.md).

## Suporte

Dúvida sobre a integração, erro `500` ou comportamento que a documentação não explica:
[tecnologia@chavesnamao.com.br](mailto:tecnologia@chavesnamao.com.br), informando **endpoint**,
**corpo enviado**, **data e hora** da chamada.
