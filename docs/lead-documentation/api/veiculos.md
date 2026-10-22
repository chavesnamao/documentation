# Webhook - Veículos

Documentação completa da estrutura de dados enviada para leads do segmento **VEHICLE** (veículos).

## Visão Geral

Quando um lead de veículo é gerado, enviamos uma requisição POST com JSON contendo todas as informações do contato, anúncio do veículo e dados do cliente/anunciante.

## Estrutura da Requisição

### Headers

```http
POST /seu-webhook-url HTTP/1.1
Host: seu-dominio.com
Content-Type: application/json
User-Agent: chavesnamao-leads-api
Authorization: Basic Y2xpZW50ZUBleGVtcGxvLmNvbTphYmMxMjN4eXo3ODk=
```

### Body (JSON)

```json
{
  "id": "12345",
  "name": "João da Silva",
  "email": "joao.silva@email.com",
  "phone": "11999887766",
  "message": "Olá, tenho interesse neste veículo. Gostaria de mais informações sobre formas de pagamento.",
  "createdAt": "2025-11-06 14:30:00",
  "sendAt": "2025-11-06 14:30:05",
  "segment": "VEHICLE",
  "proposeTypeName": "Formulário WhatsApp",
  "ad": {
    "id": "67890",
    "title": "Honda Civic 2.0 EXL CVT",
    "reference": "VEI-2024-001",
    "brand": "Honda",
    "model": "Civic",
    "trim": "2.0 EXL CVT",
    "color": "Preto",
    "fuel": "Gasolina",
    "manufacturedYear": "2020",
    "modelYear": "2021",
    "mileage": "35000",
    "url": "https://www.chavesnamao.com.br/veiculo/67890",
    "value": 115000.00
  },
  "client": {
    "name": "Auto Motors Ltda",
    "tradeName": "Auto Motors Premium",
    "document": "12.345.678/0001-90"
  }
}
```

## Campos da Raiz

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `id` | string | Sim | ID único do lead na plataforma Chaves na Mão |
| `name` | string | Sim | Nome completo do interessado |
| `email` | string | Sim | Email do interessado |
| `phone` | string | Sim | Telefone do interessado (com DDD) |
| `message` | string | Não | Mensagem enviada pelo interessado |
| `createdAt` | string | Sim | Data/hora de criação do lead (formato: Y-m-d H:i:s) |
| `sendAt` | string | Sim | Data/hora de envio do webhook (formato: Y-m-d H:i:s) |
| `segment` | string | Sim | Sempre "VEHICLE" para veículos |
| `proposeTypeName` | string | Sim | Tipo da proposta (ex: "Formulário WhatsApp", "Proposta", etc) |

## Objeto `ad` (Anúncio do Veículo)

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `id` | string | Sim | ID do anúncio/veículo na plataforma |
| `title` | string | Sim | Título completo do anúncio |
| `reference` | string | Não | Código de referência do veículo |
| `brand` | string | Sim | Marca do veículo (ex: Honda, Toyota, Fiat) |
| `model` | string | Sim | Modelo do veículo (ex: Civic, Corolla, Uno) |
| `trim` | string | Não | Versão/trim do veículo (ex: 2.0 EXL CVT, XLE, Sport) |
| `color` | string | Não | Cor do veículo |
| `fuel` | string | Não | Tipo de combustível (Gasolina, Etanol, Flex, Diesel, Elétrico, Híbrido) |
| `manufacturedYear` | string | Não | Ano de fabricação |
| `modelYear` | string | Não | Ano do modelo |
| `mileage` | string | Não | Quilometragem do veículo |
| `url` | string | Sim | Url do anúncio |
| `value` | float | Sim | Valor do anúncio |

## Objeto `client` (Anunciante)

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `name` | string | Sim | Nome ou razão social do anunciante |
| `tradeName` | string | Não | Nome fantasia (se aplicável) |
| `document` | string | Sim | CPF ou CNPJ do anunciante |

## Campos Opcionais (null)

Alguns campos podem vir com valor `null`:

- `message`: Quando o usuário não digitou mensagem
- `ad.reference`: Se o veículo não tem código de referência
- `ad.trim`: Se não foi especificada a versão
- `ad.color`: Se a cor não foi informada
- `ad.fuel`: Se o combustível não foi especificado
- `ad.manufacturedYear`: Se não foi informado
- `ad.modelYear`: Se não foi informado
- `ad.mileage`: Se a quilometragem não foi informada

## Próximos Passos

- [Webhook de Imóveis](/lead-documentation/api/imoveis)

## Outras Integrações de Veículos

Para integração completa de anúncios de veículos via API REST, consulte:

📚 **[Documentação da API de Veículos](/vehicle-api-documentation/)** - Gerencie anúncios de veículos com endpoints completos (criar, editar, excluir, consultar)
