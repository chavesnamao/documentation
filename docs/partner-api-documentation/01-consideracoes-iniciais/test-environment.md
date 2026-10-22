# Ambiente de testes

Base de todas as chamadas:

```
https://staging-crm.chavesnamao.com.br/api/v1
```

Exemplo completo:

```bash
curl --location --request GET 'https://staging-crm.chavesnamao.com.br/api/v1/partners/ping' \
--header 'x-api-key: sua-chave-de-testes'
```

O contrato é idêntico ao de produção: mesmos endpoints, mesmos campos, mesmos códigos de resposta.

## O que muda em relação à produção

| | Testes | Produção |
| --- | --- | --- |
| Base dos endpoints | `staging-crm.chavesnamao.com.br/api/v1` | `crm.chavesnamao.com.br/api/v1` |
| Chave | própria do ambiente | própria do ambiente |
| Dados | cópia da base, **não é dado vivo** | anunciantes reais |
| Tabela de planos | pode estar defasada | vigente |

## Pode testar à vontade

É aqui que se exercita o caminho inteiro, inclusive o que dá errado de propósito: chave sem escopo,
lead inexistente, data sem fuso, reenvio da mesma chamada. Nada do que for gravado aqui chega ao
anunciante.

A única ressalva é a tabela de planos: como o ambiente de testes é uma cópia, os valores podem não
ser os mesmos da produção. Use-a para validar o **formato** da resposta e a lógica de faixas, não
para conferir preço.
