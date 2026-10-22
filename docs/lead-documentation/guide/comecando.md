# Começando

Este guia irá ajudá-lo a configurar sua primeira integração com a API de Leads da Chaves na Mão.

## Pré-requisitos

Antes de começar, certifique-se de ter:

- ✅ Uma conta ativa na plataforma Chaves na Mão
- ✅ Um servidor web capaz de receber requisições HTTP POST
- ✅ URL pública acessível para receber os webhooks
- ✅ Certificado SSL (HTTPS recomendado)

## Passo 1: Obter Credenciais

Entre em contato com o suporte da Chaves na Mão para obter:

1. **Email**: O email cadastrado em sua conta
2. **Token**: Token único de autenticação gerado para sua conta

::: warning Importante
Mantenha seu token em segurança! Ele é a chave de acesso aos seus dados.
:::

## Passo 2: Configurar URL do Webhook

Forneça ao suporte a URL onde deseja receber os leads:

```
https://seu-dominio.com/api/webhook/leads
```

### Requisitos da URL

- Deve ser **acessível publicamente**
- Recomendado usar **HTTPS** para segurança
- Tempo de resposta ideal: **< 5 segundos**

## Passo 3: Implementar o Endpoint

Crie um endpoint que:

1. Aceite requisições POST
2. Valide a autenticação Basic Auth
3. Processe o JSON recebido
4. Retorne status 200 em caso de sucesso

## Passo 4: Validação em Produção

Após implementar, solicite ao suporte que:

1. Envie um lead de teste
2. Verifique se seu endpoint respondeu corretamente
3. Ative a integração em produção

## Próximos Passos

- [Entenda o Fluxo Completo](/lead-documentation/guide/fluxo)
- [Detalhes da Autenticação](/lead-documentation/api/autenticacao)
- [Estrutura de Dados - Veículos](/lead-documentation/api/veiculos)
- [Estrutura de Dados - Imóveis](/lead-documentation/api/imoveis)

## Precisa de Ajuda?

Consulte a seção de [Suporte](/lead-documentation/recursos/suporte) ou entre em contato com nossa equipe técnica.
