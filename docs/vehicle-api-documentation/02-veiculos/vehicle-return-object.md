# Objeto de retorno /vehicles/:reference
**JSON**

```json
{
    "fuel": "ALCOHOL",
    "gearbox": "AUTOMATIC",
    "color": "BLACK",
    "type": "C",
    "title": "string",
    "description": "string",
    "reference": "string",
    "licensePlate": "string",
    "document": "string",
    "mileage": 0,
    "brandNew": true,
    "doors": 0,
    "manufacturedYear": 0,
    "modelYear": 0,
    "updatedAt": "string",
    "value": 0,
    "amountPerInstallment": 0,
    "amountOfInstallments": 0,
    "deposit": 0,
    "accessories": [
        {
            "id": 0,
            "name": "string"
        }
    ],
    "active": true,
    "trim": {
        "id": 0,
        "name": "string",
        "modelId": 0
    },
    "brand": {
        "id": 0,
        "name": "string",
        "vehicleType": "C"
    },
    "pictures": [
        {
            "originalUrl": "string",
            "order": 0,
            "source": "string"
        }
    ],
    "publication": {
        "highlighted": true
    },
    "otherInfos": [
        {
            "id": 7,
            "name": "Único dono"
        },
        {
            "id": 10,
            "name": "Chave reserva"
        }
    ],
    "url": "https://www.chavesnamao.com.br/carro/pr-curitiba/titulo-anuncio-r$20.00/1"
}
```

**ATRIBUTOS**

| Campo | Tipo | Descrição |
| --- | --- | --- |
| brandNew | boolean | Indica que o veículo foi registrado como novo. Ou seja, o campo mileage é igual a 0. |
| url | string | Url para acessar o anúncio. Pode levar até 45 minutos,após para  inserção/edição, para que ele fique disponivel/atualizado. |
| pictures | object[] | Fotos salvas do veículo. Consulte a descrição detalhada abaixo. |
| updatedAt | string | Data da última atualização do veículo pelo integrador, ou pelo nosso sistema. |
| publication | object (anulável) | Objeto que representa o status da publicação do veículo. Se o campo retornar null, isso significa que o veículo NÃO está sendo exibido no portal. Isso pode ocorrer se o plano contratado excedeu os limites, ou se a publicação foi desativada pelo endpoint DELETE /publications/:reference |

### `pictures` Object:

| Campo | Tipo | Descrição |
| --- | --- | --- |
| originalUrl | string | Indica a URL original da foto, enviada pelo integrador. |
| order | number | Indica a ordem na qual a URL será mostrada no anúncio. Mesma ordem na qual foi enviada no endpoint de POST. |
| source | string | URL do veículo hospedada pela Chaves na Mão. |

Info:

- Se uma foto enviada não aparecer no retorno, verifique se a URL original da imagem hospedada está disponível e no formato válido.
- Se estiver dentro dos conformes, atualize o seu veículo no endpoint PUT enviando todas as fotos novamente.