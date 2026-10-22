# Status de respostas das requisições
Por padrão, seguimos os status codes da especificação HTTP. Você pode consultar [este link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) para entender os códigos retornados.

Alguns exemplos de status de retorno que utilizamos:

`200`

Indica que a operação ocorreu com sucesso.

`202` (NEW)

Indica que a requisição foi aceita mas o processo ainda não foi executado e sim enviado para uma FILA.

`400`

Não conseguimos processar os dados enviados no request, por conta da validação dos campos. Verifique a documentação do endpoint e o body do response para entender os erros.

`401`

Verifique o seu token JWT, se ele está sendo enviado no header conforme descrito anteriormente. Verifique também se o seu token não esta expirado, se estiver, outro token pode ser solicitado no endpoint `/clients/jwt`.

`404` (NEW)

Conteúdo não encontrado

`422`

Não conseguimos processar os dados enviados no request, por conta de um erro lógico. Verifique a documentação do endpoint e o body do response para entender os erros.

`429`

O cliente excedeu o limite máximo de requisições, e deve aguargar 10 segundos para enviar a proxíma. [Limite de requisições](limit-requests.md)

`500`

Ocorreu um erro dentro do nosso sistema. Pode ser devido a indisponibilidade devido uma manutenção, ou um erro imprevisto do nosso lado. Por favor, entre em contato com o nosso time especificando o **BODY**, **ENDPOINT,  DATE E HORA** ao qual o erro ocorreu, pelo email: ***tecnologia@chavesnamao.com.br***.