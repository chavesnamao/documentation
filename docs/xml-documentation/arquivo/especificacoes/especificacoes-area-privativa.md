# Tag Área Privativa

A tag `<area_privativa>` lista as características e comodidades da área privativa do imóvel.

## Estrutura

```xml
<area_privativa>
    <item>Característica</item>
    <item>Outra Característica</item>
    <!-- Mais itens... -->
</area_privativa>
```

## Características

- **Obrigatória**: Não
- **Repetível**: Sim, pode conter múltiplos `<item>`
- **Posição**: Dentro da tag `<imovel>`

## Tag item

Cada característica é representada por uma tag `<item>`:

- **Tipo**: Texto
- **Obrigatório**: Não (mas se usar `<area_privativa>`, deve ter pelo menos um `<item>`)
- **Descrição**: Nome da característica ou comodidade da área privativa

**Lista de itens suportados:** [https://www.chavesnamao.com.br/imoveis/integracao/areas_privativas/](https://www.chavesnamao.com.br/imoveis/integracao/areas_privativas/)

## Exemplo Completo

```xml
<area_privativa>
    <item>Ar Condicionado</item>
    <item>Armário Embutido</item>
    <item>Closet</item>
    <item>Piso Porcelanato</item>
    <item>Aquecedor</item>
    <item>Box Blindex</item>
    <item>Varanda Gourmet</item>
    <item>Churrasqueira</item>
</area_privativa>
```

## Exemplo Simples

```xml
<area_privativa>
    <item>Armário Embutido</item>
    <item>Ar Condicionado</item>
</area_privativa>
```

## Exemplo Vazio

Se o imóvel não tiver características especiais:

```xml
<area_privativa></area_privativa>
```

ou

```xml
<area_privativa/>
```

## Recomendações

### Nomenclatura
- Use os nomes exatos da lista acima
- Evite abreviações
- Use acentuação correta
- Primeira letra maiúscula

### Quantidade
- Não há limite de itens
- Liste todas as características relevantes
- Não liste itens inexistentes

## Diferença entre Área Comum e Privativa

### Área Comum
- Pertencem ao condomínio
- Uso compartilhado
- Exemplo: Piscina do condomínio

### Área Privativa
- Pertencem ao imóvel
- Uso exclusivo do morador
- Exemplo: Piscina particular da casa

::: warning Atenção
Uma piscina pode estar em `<area_comum>` (piscina do condomínio) ou em `<area_privativa>` (piscina da casa), mas não em ambos ao mesmo tempo.
:::

## Problemas Comuns

::: warning Atenção
- ❌ Não use abreviações (ex: "AC" ao invés de "Ar Condicionado")
- ❌ Não confunda com áreas comuns do condomínio
- ❌ Não liste características que não existem
:::

::: tip Boas Práticas
- ✅ Use os nomes padronizados da lista
- ✅ Liste apenas características realmente presentes no imóvel
- ✅ Mantenha a ortografia correta
- ✅ Agrupe por categoria para melhor organização
:::
