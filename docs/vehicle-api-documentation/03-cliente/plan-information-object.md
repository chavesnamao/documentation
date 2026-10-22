# Objeto de informações do plano
**JSON**

```json
{
    "currentPlan": {
        "name": "string",
        "pictureQuantity": 0,
        "adsQuantity": 0,
        "highlightsQuantity": 0
    },
    "available": {
        "adsQuantity": 0,
        "highlightsQuantity": 0
    }
}
```

**ATRIBUTOS**

| Atributo | Tipo | Descrição |
| --- | --- | --- |
| currentPlan | object | Informações do plano atual contratado pelo cliente. |
| - name | string | Nome do plano. |
| - pictureQuantity | number | Quantidade máxima de fotos por anúncio. |
| - adsQuantity | number | Quantidade máxima de anúncios que o cliente pode ter. |
| - highlightsQuantity | number | Quantidade máxima de anúncios que podem ser destacados para o cliente. |
| available | object | Objeto com as quantidades restantes de anúncios e destaques. |
| - adsQuantity | number | Quantidade restante de anúncios que o cliente ainda pode utilizar. |
| - highlightsQuantity | number | Quantidade restante de anúncios que ainda podem ser destacados. |

Info:

- As quantidades restantes podem demorar alguns minutos para serem atualizadas, conforme os veículos são salvos, ao decorrer do tempo.