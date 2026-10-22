# FAQ - Perguntas Frequentes

Respostas para as dúvidas mais comuns sobre a integração de leads.

## Geral

### O que é a API de Integração de Leads?

É um sistema de webhooks que envia automaticamente os dados de leads (propostas e contatos) gerados na plataforma Chaves na Mão para o endpoint configurado pelo cliente.

### Quanto custa a integração?

A integração está incluída no plano contratado. Entre em contato com o comercial para mais informações.

### Quantos leads posso receber?

Não há limite de leads. Todos os leads gerados serão enviados para seu webhook.

## Configuração

### Como obtenho minhas credenciais?

Entre em contato com o nosso time de Customer Success através do email atendimento@chavesnamao.com.br informando:
- CPF ou CNPJ
- Nome da empresa
- Email cadastrado
- URL do webhook

### Preciso usar HTTPS?

HTTPS é **altamente recomendado** mas não obrigatório. Para produção, sempre use HTTPS para garantir a segurança dos dados.

## Autenticação

### Como funciona a autenticação?

Utilizamos HTTP Basic Authentication. As credenciais são enviadas no header `Authorization` codificadas em Base64:

```
Authorization: Basic [base64(email:token)]
```

### O token expira?

Não.

## Dados

### Quais campos são obrigatórios?

**Campos sempre obrigatórios:**
- `id`: ID único do lead
- `name`: Nome do interessado
- `email`: Email do interessado
- `phone`: Telefone do interessado
- `segment`: VEHICLE ou REALTY
- `ad.id`: ID do anúncio
- `ad.title`: Título do anúncio
- `client.name`: Nome do cliente/anunciante
- `client.document`: CPF/CNPJ do anunciante

### O campo message sempre vem preenchido?

Não. O campo `message` pode ser `null` quando a proposta não tem o campo.

### Como sei se é lead de veículo ou imóvel?

Verifique o campo `segment`:
- `VEHICLE`: Lead de veículo
- `REALTY`: Lead de imóvel

### Posso receber dados históricos?

Não. O webhook envia apenas leads novos gerados após a ativação da integração.

## Processamento

### Quanto tempo tenho para processar o lead?

O timeout é de **30 segundos**. Recomendamos processar de forma assíncrona e responder rapidamente (< 5 segundos).

### O que acontece se meu endpoint estiver fora do ar?

Tentaremos reenviar automaticamente até 3 vezes com intervalos exponenciais (15s, 5m, 1h). Após todas as tentativas falharem, o lead ficará marcado como "erro de envio".

### Como evitar leads duplicados?

Use o campo `id` como chave única. Sempre verifique se o lead já existe antes de processar:

```php
if (Lead::where('external_id', $leadData['id'])->exists()) {
    return response()->json(['success' => true, 'message' => 'Lead já processado'], 200);
}
```

### Devo retornar status 200 para leads duplicados?

**Sim!** Retorne status 200-299 para evitar tentativas de reenvio. O lead duplicado não é um erro.

## Segurança

### Os dados são criptografados?

Sim, se você usar HTTPS. Todos os dados são transmitidos via TLS/SSL.

### Devo validar a origem das requisições?

Sim! Sempre valide:
1. Autenticação Basic Auth (obrigatório)
2. User-Agent: `chavesnamao-leads-api`

## Integração

### Posso integrar com meu CRM?

Sim! Após receber o lead, você pode enviá-lo para qualquer sistema:
- Salesforce
- HubSpot
- RD Station
- Pipedrive
- Sistema próprio

## Dúvidas Não Respondidas?

Entre em contato:
- **Email**: atendimento@chavesnamao.com.br
- **Telefone**: (41) 3092-1001
- **Horário**: Segunda a Sexta, 8h30 às 17h30

Consulte também:
- [Guia de Início](/lead-documentation/guide/comecando)
- [Documentação da API](/lead-documentation/api/autenticacao)
