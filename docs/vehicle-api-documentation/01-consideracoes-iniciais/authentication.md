# Autenticação
Para utilizar a nossa API REST é necessário ter em mãos o token de integração, este se encontra dentro da sua conta chaves na mão em ***Meus dados > Token de integração*** (parte de baixo da página).

Se possuir alguma dificuldade, favor encaminhar um email para [atendimento@chavesnamao.com.br](mailto:atendimento@chavesnamao.com.br), com as informações do cliente ao qual está solicitando o
token.

Em posse do token de integração, deve ser feita uma requisição para o endpoint   `/clients/jwt` com o seu token anexado no header da requisição, como por exemplo com curl:

```bash
curl --location --request GET 'https://api.chavesnamao.com.br/integration/v2/clients/jwt' \
--header 'token: seutokenaqui'
```

Essa requisição deve devolver um token de autenticação JWT que deve ser utilizado para a autenticação em todos os outros requests. Exemplo de resposta:

```json
{
    "token": "eeyJ0eXzI1NiJ9.eyJpc3MiOiJPbwbGfQ.hJ8sqyZMtGaPxvsEMQ",
    "expiration": "1d"
}
```

O campo token é seu token JWT, que identifica o cliente, com o tempo de expiração definido pelo campo `expiration`.

Após isso o token JWT deve ser anexado no header de todas as subsequentes requisições como por exemplo no endpoint de plano:

```bash

curl --location --request GET 'https://api.chavesnamao.com.br/integration/v2/clients/plan' \
--header 'Authorization: Bearer eeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NjAzMDQ1MDAsImV4cC
```
