# Status de respostas das requisições

Seguimos os códigos da especificação HTTP. O corpo sempre traz `success`, e em erro traz também
`error` com uma frase legível explicando o que houve.

```json
{
  "success": false,
  "error": "Informe \"produto\" com um destes valores: imoveis, veiculos."
}
```

## `200`

A operação ocorreu com sucesso.

Dois casos costumam ser confundidos com erro e **não são**:

- **Fila vazia.** `GET /partners/leads` sem nenhum lead no recorte pedido responde `200`, com
  `total` igual a `0` e `leads` vazio. É fila vazia, não falha de chamada.
- **Página além do fim.** Pedir a página 999 de uma lista com 97 páginas responde `200`, devolvendo
  o `pagina` que você pediu e a lista vazia.

## `400`

Algum campo está ausente, fora dos valores aceitos, acima do limite de tamanho, ou a data veio sem
fuso. A mensagem diz exatamente qual campo e qual é o problema. Quando há mais de um, vêm todos na
mesma frase.

```json
{
  "success": false,
  "error": "Informe \"resumo\". Informe \"transcricao\"."
}
```

Também cai aqui o caso de usuário de destino inexistente ou desligado, e o de produto que não bate
com o lead informado.

## `401`

A chave está ausente, inválida, revogada ou expirada. Confira o cabeçalho `x-api-key` e se você
está usando a chave do ambiente certo: a de testes não vale em produção.

```json
{
  "success": false,
  "error": "Chave de acesso ausente. Envie o cabeçalho x-api-key."
}
```

## `403`

A chave é válida, mas não tem o escopo necessário para a operação. A mensagem diz qual falta. Isso
não se resolve com nova tentativa: é liberação de escopo, fale com o nosso time.

## `404`

Nenhum lead com o `lead_id` informado. Confira se o id veio de `GET /partners/leads` e se você não
está misturando o id de um ambiente com a base de outro.

## `409`

Dois casos, ambos com mensagem própria:

- **Lead já fechado no CRM.** Não aceita resultado de ligação. Confirme o `lead_id`.
- **Gravação desta mesma chamada em andamento.** Você enviou o mesmo `id_chamada` duas vezes quase
  ao mesmo tempo e a primeira ainda está sendo processada. O cabeçalho `Retry-After` diz em quantos
  segundos repetir; ao repetir, você receberá a resposta da primeira.

## `429`

A chave excedeu o teto de chamadas por minuto. Respeite o cabeçalho `Retry-After`. Veja
[Limite de requisições](limit-requests.md).

## `500`

Erro dentro do nosso sistema. Tente de novo com recuo progressivo; se persistir, escreva para
[tecnologia@chavesnamao.com.br](mailto:tecnologia@chavesnamao.com.br) informando **endpoint**,
**corpo enviado**, **data e hora**.

## `503`

Acontece em dois casos, os dois do nosso lado.

Em `GET /partners/planos`: a origem do preço falhou e não existe leitura anterior guardada. O
cabeçalho `Retry-After` diz em quantos segundos tentar de novo.

Em `POST /partners/resultados-chamada`, com `lead_dados_invalidos` ou `lead_fora_de_segmento`: o
destino de reconferência não está configurado neste ambiente do CRM. **Nada foi gravado.** A
alternativa seria aceitar a chamada e deixar o lead voltar para a sua fila amanhã com o mesmo
telefone errado, em silêncio, e isso seria pior do que recusar. Avise o time do CRM e repita a
chamada depois.

É deliberado que isso seja um erro em vez de uma lista vazia com `200`: dizer "não temos plano" a
um anunciante no meio da ligação é pior do que avisar que a consulta falhou.

## Resumo

| Código | Significa                        | Repetir a chamada ajuda?               |
| ------ | -------------------------------- | -------------------------------------- |
| `200`  | Deu certo                        | —                                      |
| `400`  | Dado inválido                    | Não. Corrija o corpo.                  |
| `401`  | Chave inválida                   | Não. Corrija a credencial.             |
| `403`  | Falta escopo                     | Não. Peça liberação.                   |
| `404`  | Lead não existe                  | Não. Confira o `lead_id`.              |
| `409`  | Lead fechado, ou envio em curso  | Só no segundo caso, após `Retry-After`.|
| `429`  | Teto de chamadas                 | Sim, após `Retry-After`.               |
| `500`  | Falha nossa                      | Sim, com recuo progressivo.            |
| `503`  | Configuração nossa indisponível  | Sim, após `Retry-After`.               |
