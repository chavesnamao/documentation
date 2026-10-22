# Endpoints

| Método | Endpoint                       | Ação |
| ------ | ------------------------------ | ---- |
| GET    | /publications/:reference      | Retorna a publicação associada com um veículo. Se um veículo não existe, será retornado 404. Se o veículo não existe e está na fila, será retornado 202. Preste atenção ao tópico ‘Previsão de execução de requisição - HEADER x-status-queue’.* Atenção: poderá levar até 20 min para refletir a última ação. |
| POST   | /publications/:reference      | Publica um veículo pela sua referência, se houver espaço no plano. |
| DELETE | /publications/:reference      | Despublica um veículo, liberando espaço no plano e fazendo com que o anúncio desapareça do portal. |
| PUT    | /publications/:reference      | Altera a publicação, podendo assim destacar ou remover o destaque de um anúncio, se houver espaço no plano. |
