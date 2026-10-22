# Endpoints

| Método HTTP | Endpoint                          | Descrição |
| ----------- | --------------------------------- | --------- |
| POST        | /vehicles                         | Insere um novo veículo. Se houver espaço no plano do cliente, também é automaticamente publicado; Na rota `GET /vehicles` você pode visualizar os campos `active` e `publication` para saber se está ativo. |
| GET         | /vehicles                         | Retorna todos os veículos paginados do cliente. |
| GET         | /vehicles/:reference             | Retorna um veículo específico a partir de uma referência. Se um veículo não existe, será retornado 404.Se o anúncio existir e tiver algo para ser processado, será 200 e irá ter informação no header. Se o veículo não existe e está na fila, será retornado 202. Preste atenção ao tópico ‘Previsão de execução de requisição - HEADER x-status-queue’. |
| PUT         | /vehicles/:reference             | Atualiza todos os dados de um veículo a partir de uma referência. |
| DELETE      | /vehicles/:reference             | Deleta um veículo e desanuncia o mesmo a partir de uma referência. |
| GET         | /vehicles/accessories             | Retorna todos os acessórios para um tipo de veículo, com seus respectivos ids e nomes. |
| GET         | /vehicles/otherinfo             | Retorna todas as 'opções do vendedor', com seus respectivos ids e nomes. |
| GET         | /vehicles/brands                  | Retorna todas as marcas de veículos atualmente disponíveis no portal por tipo de veículo. |
| GET         | /vehicles/brands/:brandId/models | Retorna todos os modelos específicos de uma marca. |
| GET         | /vehicles/models/:modelId/trims  | Retorna todas as versões específicas de um modelo. |
