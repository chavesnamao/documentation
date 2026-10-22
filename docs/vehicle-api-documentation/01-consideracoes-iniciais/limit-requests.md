# Limite de requisições
Todos os clientes possuem um limite de requisições simultâneas que podem ser enviadas para a api.

<b>*O limite de requisições deve ser validado através do header `x-ratelimit-limit`*</b>
Caso algum destes limite seja excedido você receberá uma resposta com um código HTTP 429 `(Too Many Requests).`

Para controlar o limite de requisições, toda resposta retornará os headers abaixo. Você poderá utilizá-los para medir o tempo de espera das próximas requisições.

| Header | Descrição |
| --- | --- |
| x-ratelimit-limit | O limite máximo de requisições. |
| x-ratelimit-remaining | A quantidade atual de requisições que podem ser enviadas. |
| x-ratelimit-reset | Tempo até o limite resetar. |
| retry-after | Tempo que a aplicação deverá esperar para enviar a próxima requisição, se recebeu um status 429. |


# Exemplos em NODE, PHP E PYTHON
- nesses exemplos vamos utilizar o header `retry-after` que é retornado quando atingimos os limites

## Node
```javascript

const axios = require('axios');

try {
    const response = await axios.get('https://api.chavesnamao.com.br/integration/v2/vehicles');
    
    // Verifica os headers de controle de taxa
    const limit = response.headers['x-ratelimit-limit'];
    const remaining = response.headers['x-ratelimit-remaining'];
    const resetTime = response.headers['x-ratelimit-reset'];
    
    console.log(`Limite: ${limit}`);
    console.log(`Restante: ${remaining}`);
    console.log(`Tempo de reset: ${resetTime} segundos`);

    // Verifica se atingiu o limite de taxa
    if (response.status === 429) {
        const retryAfter = response.headers['retry-after'];
        console.log(`Esperando ${retryAfter} segundos...`);
        await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
    }

    // Continue com as próximas requisições ou lógica de negócios aqui
} catch (error) {
    console.error('Erro na requisição:', error.message);
}

```

## PHP
```php
<?php

$url = 'https://api.chavesnamao.com.br/integration/v2/vehicles';

// Faz a requisição
$response = file_get_contents($url, false, stream_context_create([
    'http' => [
        'method' => 'GET',
    ],
]));

// Verifica os headers de controle de taxa
$limit = $http_response_header['x-ratelimit-limit'];
$remaining = $http_response_header['x-ratelimit-remaining'];
$resetTime = $http_response_header['x-ratelimit-reset'];

echo "Limite: $limit\n";
echo "Restante: $remaining\n";
echo "Tempo de reset: $resetTime segundos\n";

// Verifica se atingiu o limite de taxa
if (strpos($http_response_header[0], '429') !== false) {
    $retryAfter = $http_response_header['retry-after'];
    echo "Esperando $retryAfter segundos...\n";
    sleep($retryAfter);
}

// Continue com as próximas requisições ou lógica de negócios aqui

```

## Python
```python

import requests
import time
from datetime import datetime

url = 'https://api.chavesnamao.com.br/integration/v2/vehicles'

# Faz a requisição
response = requests.get(url)

# Verifica os headers de controle de taxa
limit = response.headers['x-ratelimit-limit']
remaining = response.headers['x-ratelimit-remaining']
reset_time = response.headers['x-ratelimit-reset']

print(f"Limite: {limit}")
print(f"Restante: {remaining}")
print(f"Tempo de reset: {reset_time} segundos")

# Verifica se atingiu o limite de taxa
if response.status_code == 429:
    retry_after = response.headers['retry-after']
    print(f"Esperando {retry_after} segundos...")
    time.sleep(int(retry_after))

# Continue com as próximas requisições ou lógica de negócios aqui

```