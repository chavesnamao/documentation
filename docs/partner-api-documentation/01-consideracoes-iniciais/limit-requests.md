# Limite de requisições

Cada chave tem um teto de chamadas por minuto. O padrão é **120 por minuto**; o valor da sua chave
é combinado na liberação e pode ser diferente.

A contagem é **por chave**, não por endpoint nem por IP: as chamadas de leads, de planos e de
resultado somam no mesmo teto.

## Quando o teto estoura

A resposta é `429`, com o cabeçalho `Retry-After` dizendo em quantos segundos tentar de novo.

```
HTTP/1.1 429 Too Many Requests
Retry-After: 37
```

```json
{
  "success": false,
  "error": "Limite de chamadas por minuto excedido. Tente novamente em instantes."
}
```

## Como não esbarrar nele

- **Respeite o `Retry-After`.** Repetir antes do prazo só consome o teto do minuto seguinte.
- **Peça páginas cheias.** `GET /partners/leads` entrega até 100 leads por chamada. Montar a
  campanha do dia com páginas de 100 custa uma fração das chamadas de páginas de 10.
- **Não baixe a tabela de planos a cada ligação.** Peça a faixa da quantidade que o anunciante
  informou, ou baixe a escada inteira uma vez e guarde do seu lado.
- **Use recuo progressivo** em erro `5xx`: tentar de novo em rajada transforma uma instabilidade
  curta em bloqueio por limite.
