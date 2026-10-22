# Introdução

Bem-vindo à documentação da **API de Integração de Leads** da Chaves na Mão! 

Esta API permite que você receba leads de veículos e imóveis em tempo real através de webhooks, facilitando a integração com seu sistema de CRM ou plataforma de gestão.

## O que é esta API?

A API de Integração de Leads é um sistema de **webhooks** que envia automaticamente os dados de leads (propostas e contatos) gerados na plataforma Chaves na Mão diretamente para o endpoint configurado pelo cliente/integrador.

## Como Funciona?

1. **Configuração**: Você fornece uma URL de webhook que receberá os leads
2. **Credenciais**: Recebe um token de autenticação e utiliza seu email cadastrado
3. **Recebimento**: Quando um lead é gerado, enviamos uma requisição POST HTTP para sua URL
4. **Processamento**: Seu sistema recebe, valida e processa os dados do lead

## Características Principais

### Webhook em Tempo Real
Os leads são enviados instantaneamente após serem gerados na plataforma.

### Autenticação Segura
Utiliza Basic Authentication com email e token codificados em Base64.

### Dois Segmentos Suportados

- **VEHICLE**: Leads de veículos (carros, motos, etc.)
- **REALTY**: Leads de imóveis (casas, apartamentos, terrenos, etc.)

### Dados Completos

Cada lead contém:
- Informações do contato (nome, email, telefone, mensagem)
- Dados do anúncio (título, referência, características)
- Informações do cliente/anunciante
- Metadados (datas, tipo de proposta, segmento)

## Estrutura da Requisição

Todas as requisições enviadas para seu webhook seguem este padrão:

**Método**: `POST`  
**Content-Type**: `application/json`  
**User-Agent**: `chavesnamao-leads-api`  
**Authorization**: `Basic [base64(email:token)]`

## Resposta Esperada

Seu endpoint deve retornar:

- **Status 200-299**: Lead recebido e processado com sucesso
- **Status 4xx/5xx**: Erro no processamento (tentaremos reenviar)

::: tip Dica
Recomendamos que seu endpoint responda rapidamente (< 5 segundos) para evitar timeouts.
:::

## Próximos Passos

- [Começando](/lead-documentation/guide/comecando) - Configure sua primeira integração
- [Fluxo de Integração](/lead-documentation/guide/fluxo) - Entenda o fluxo completo
- [Autenticação](/lead-documentation/api/autenticacao) - Detalhes sobre segurança
- [Webhook de Veículos](/lead-documentation/api/veiculos) - Estrutura de dados para veículos
- [Webhook de Imóveis](/lead-documentation/api/imoveis) - Estrutura de dados para imóveis
