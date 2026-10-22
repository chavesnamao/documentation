# Previsão de execução

## Funcionamento Atualizado

Todas as requisições POST, DELETE e UPDATE agora são enviadas para uma fila de processamento. Esta abordagem permite uma melhor escalabilidade de nossa infraestrutura e um gerenciamento mais eficiente da carga de trabalho.

## Introdução do Cabeçalho `x-status-queue``
Para proporcionar uma visão clara sobre o status dos itens na fila, introduzimos um novo cabeçalho de resposta, denominado x-status-queue. Este cabeçalho fornece informações detalhadas sobre todas as ações planejadas para uma requisição específica, incluindo:

| Atributo | Tipo | Descrição |
| --- | --- | --- |
| jobId | string | Identificador único do trabalho (job). |
| messageType | ENUM | CREATE_VEHICLE - indica criação de um veículo.
| timestamp | number | Horário de adição da ação na fila em UTC-3, importante, se houver mais de uma ação, ela será executada por ordem de entrada. |
| endpoint | string | Endpoint associado à mensagem. |

**messageType ENUM** 

| messageType                 | Descrição                                           |
|-----------------------------|-----------------------------------------------------|
| `UPDATE_VEHICLE`            | Indica alteração de um veículo.                     |
| `DELETE_VEHICLE`            | Indica exclusão de um veículo.                      |
| `UNPUBLISH_VEHICLE`         | Indica desativação de um anúncio.                   |
| `UPDATE_VEHICLE_PUBLICATION`| Indica inclusão de um destaque em um anúncio ativo. |
| `PUBLISH_VEHICLE`           | Ativa um anúncio.                                   |


## Exemplo de Uso:
Ao criar um anúncio com POST, a resposta será um código HTTP 202, indicando que a requisição foi aceita, mas ainda está na fila para processamento. Ao consultar o status deste anúncio com um GET, se ele ainda não tiver sido processado, também será retornado um código HTTP 202. 

O cabeçalho x-status-queue conterá detalhes sobre as ações pendentes, como mostrado no exemplo abaixo:

```json
[
    {
        "jobId": "create_vehicle-776-testecnm",
        "messageType": "create_vehicle",
        "endpoint": "/vehicles/2220231109222sa1",
        "timestamp": "2023-11-16T14:34:29.516Z"
    }
]
```
Neste exemplo, a mensagem foi adicionada à fila em 16/11/2023 às 14:34 (UTC-3), referente à criação de um veículo.