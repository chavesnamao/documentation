---
layout: home

hero:
  name: "API de Integração de Leads"
  text: "Chaves na Mão"
  tagline: Receba leads de veículos e imóveis em tempo real através de webhooks
  actions:
    - theme: brand
      text: Começar
      link: /lead-documentation/guide/introducao
    - theme: alt
      text: Ver API Reference
      link: /lead-documentation/api/autenticacao

features:
  - icon:
      light: /icones/veiculo.svg
      dark: /icones/escuro/veiculo.svg
      width: 24
      height: 24
    title: Leads de Veículos
    details: Receba propostas e contatos de interessados em veículos com informações completas do anúncio e cliente.
    link: /lead-documentation/api/veiculos
    linkText: Ver mais
  
  - icon:
      light: /icones/imovel.svg
      dark: /icones/escuro/imovel.svg
      width: 24
      height: 24
    title: Leads de Imóveis
    details: Integre leads de imóveis com dados detalhados sobre o tipo, finalidade e referência do imóvel.
    link: /lead-documentation/api/imoveis
    linkText: Ver mais
  
  - icon:
      light: /icones/seguranca.svg
      dark: /icones/escuro/seguranca.svg
      width: 24
      height: 24
    title: Autenticação Segura
    details: Sistema de autenticação Basic Auth com token e email do cliente para garantir a segurança dos dados.
    link: /lead-documentation/api/autenticacao
    linkText: Ver mais
  
  - icon:
      light: /icones/tempo-real.svg
      dark: /icones/escuro/tempo-real.svg
      width: 24
      height: 24
    title: Webhook em Tempo Real
    details: Receba os leads instantaneamente através de requisições POST HTTP em sua URL de webhook.
    link: /lead-documentation/guide/fluxo
    linkText: Ver mais
  
  - icon:
      light: /icones/dados.svg
      dark: /icones/escuro/dados.svg
      width: 24
      height: 24
    title: Dados Estruturados
    details: JSON completo com informações do lead, anúncio e cliente de forma padronizada.
    link: /lead-documentation/guide/introducao
    linkText: Ver mais
  
  - icon:
      light: /icones/integracao.svg
      dark: /icones/escuro/integracao.svg
      width: 24
      height: 24
    title: Fácil Integração
    details: Exemplos práticos em PHP, Node.js, Python e C# para facilitar sua implementação.
    link: /lead-documentation/guide/comecando
    linkText: Ver mais
---

## Início Rápido

### 1. Configure seu Webhook

Forneça uma URL que receberá as requisições POST com os dados dos leads:

```
https://seu-dominio.com/webhook/leads
```

### 2. Implemente o Endpoint

Crie um endpoint que receba requisições POST e valide a autenticação:

```php
<?php
// Captura os headers de autenticação
$authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
$authToken = str_replace('Basic ', '', $authHeader);
$credentials = base64_decode($authToken);
list($email, $token) = explode(':', $credentials);

// Valide o token
if (!validarToken($email, $token)) {
    http_response_code(401);
    exit('Não autorizado');
}

// Processa o lead
$leadData = json_decode(file_get_contents('php://input'), true);
processarLead($leadData);
```

### 3. Processe os Leads

Os dados chegam em formato JSON com todas as informações necessárias:

```json
{
  "id": "12345",
  "name": "João Silva",
  "email": "joao@email.com",
  "phone": "11999999999",
  "message": "Tenho interesse no veículo",
  "segment": "VEHICLE",
  "ad": {
    "id": "67890",
    "title": "Honda Civic 2020",
    "brand": "Honda",
    "model": "Civic"
  }
}
```

## Próximos Passos

::: tip Leia a Documentação
Confira o [Guia de Introdução](/lead-documentation/guide/introducao) para entender melhor o funcionamento da integração.
:::

::: warning Configure a Autenticação
Entenda como funciona a [Autenticação Basic Auth](/lead-documentation/api/autenticacao) da API.
:::

## Outras Integrações

Confira também nossas outras documentações de integração:

- **[Documentação XML de Imóveis](/xml-documentation/)** - Integre seu sistema via XML para anúncios de imóveis
- **[API de Veículos](/vehicle-api-documentation/)** - Integração completa via API REST para gestão de veículos
