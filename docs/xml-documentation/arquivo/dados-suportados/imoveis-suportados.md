# Tipos de Imóveis Suportados

Os tipos de imóveis suportados hoje pelo portal Chaves na Mão são definidos de acordo com a finalidade de cada imóvel (Residencial ou Comercial). Os nomes devem estar exatamente iguais aos tipos suportados pelo portal.

Verifique a lista de tipos para cada finalidade:

- [Residencial](/xml-documentation/arquivo/dados-suportados/residencial)
- [Comercial](/xml-documentation/arquivo/dados-suportados/comercial)

## Relação com Finalidade

### Residencial (RE)
Tipos mais comuns:
- Apartamento
- Casa / Sobrado
- Casa / Sobrado em Condomínio
- Kitnet / Stúdio
- Cobertura

### Comercial (CO)
Tipos mais comuns:
- Conj. Comercial / Sala
- Loja / Comércio
- Barracão / Galpão
- Edifício
- Terreno comercial

::: tip Dica
Alguns tipos podem servir tanto para uso residencial quanto comercial. Neste caso, use a tag `<finalidade>` para especificar o uso atual.
:::