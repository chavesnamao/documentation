# Formato de datas

Todas as datas, **na ida e na volta**, são ISO 8601 **com fuso horário**.

```
2026-10-22T14:30:00-03:00
```

O fuso `Z` (UTC) também é aceito no envio:

```
2026-10-22T17:30:00Z
```

## Data sem fuso é recusada

Enviar `2026-10-22T14:30:00` ou `22/10/2026` devolve `400`. Não é rigor por rigor: sem fuso, a
mesma string significa horas diferentes para quem envia e para quem recebe, e a data da ligação
é usada para ordenar a conversa na linha do tempo do vendedor.

```json
{
  "success": false,
  "error": "\"data_chamada\" deve ser uma data ISO 8601 com fuso, como 2026-10-21T10:15:00-03:00."
}
```

## Na resposta

Devolvemos sempre no horário de Brasília (`-03:00`), inclusive no horário de verão, caso ele
volte a existir. Converta para o fuso do seu sistema se precisar; não presuma que o deslocamento
é fixo.

Campo de data que não se aplica vem `null`, nunca string vazia nem data zerada.
