# Paginação e busca
Alguns endpoints de consulta tem suporte à paginação e busca pelos campos da resposta.
Esses endpoints retornam os dados na mesma estrutura que o exemplo:

```json
{
    "data": [
        // lista dos objeto de retorno
    ],
    "meta": {
        "itemsPerPage": 10,
        "totalItems": 96,
        "currentPage": 2,
        "totalPages": 10,
        "sortBy": [
            [
                "updatedAt",
                "ASC"
            ]
        ]
    },
    "links": {
        "first": "https://api.chavesnamao.com.br/integration/v2/vehicles?page=1&limit=10&sortBy=updatedAt:ASC",
        "previous": "https://api.chavesnamao.com.br/integration/v2/vehicles?page=1&limit=10&sortBy=updatedAt:ASC",
        "current": "https://api.chavesnamao.com.br/integration/v2/vehicles?page=2&limit=10&sortBy=updatedAt:ASC",
        "next": "https://api.chavesnamao.com.br/integration/v2/vehicles?page=3&limit=10&sortBy=updatedAt:ASC",
        "last": "https://api.chavesnamao.com.br/integration/v2/vehicles?page=10&limit=10&sortBy=updatedAt:ASC"
    }
}
```

Por exemplo utilizando filtros, limites, paginação, ordenação e busca no endpoint de veículo:

```bash

curl --location --request GET 'https://api.chavesnamao.com.br/integration/v2/vehicles?limit=5&page=2&sortBy=updatedAt:DESC&search=BUGGY&
--header 'Authorization: Bearer tokenaqui'