# Idempotência

`id_chamada` é a chave de idempotência do endpoint, e precisa ser **único por ligação**.

## O problema que ela resolve

A resposta pode se perder: timeout de rede, reinício do seu processo, falha entre o nosso `200` e
o seu registro. Sem idempotência, reenviar a chamada criaria no card do anunciante uma segunda
anotação, uma segunda tarefa e uma segunda troca de dono.

## Como funciona

Reenviar o **mesmo** `id_chamada` devolve a **mesma resposta** e não grava nada de novo.

```bash
# Primeira tentativa: a resposta se perde
POST /partners/resultados-chamada   { "id_chamada": "conv_0001", ... }

# Reenvio seguro, quantas vezes precisar
POST /partners/resultados-chamada   { "id_chamada": "conv_0001", ... }
# -> 200 { "success": true, "lead_id": "..." }, sem duplicar nada
```

Isso vale para anotação, tarefa, conclusão da tarefa de qualificação e troca de dono.

## Reenvio com corpo diferente

Também não altera nada. A resposta continua sendo a da **primeira** gravação.

Ou seja: o `id_chamada` não serve para corrigir uma chamada já enviada. Se o conteúdo mudou, ele
é outra ligação, e precisa de outro `id_chamada`.

## Duas chamadas ao mesmo tempo

Se o mesmo `id_chamada` chegar duas vezes quase simultaneamente, a segunda recebe `409` com
`Retry-After`, porque a primeira ainda está sendo processada.

```json
{
  "success": false,
  "error": "Resultado desta chamada já está sendo gravado. Tente novamente em instantes."
}
```

Aguarde o prazo e repita **o mesmo** `id_chamada`: você receberá a resposta da primeira.

## Regras para gerar o id

- **Único por ligação**, em todo o histórico, não só no dia.
- **Nunca reaproveitado em outro lead.** Se você usar `conv_0001` em dois leads diferentes, o
  segundo envio será tratado como repetição do primeiro e **não será gravado**.
- Até 120 caracteres.
- O id da conversa no seu próprio sistema costuma ser a melhor escolha: ele já é único e permite
  rastrear os dois lados.
