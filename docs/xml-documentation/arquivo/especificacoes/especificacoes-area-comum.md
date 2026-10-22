# Tag Área Comum

A tag `<area_comum>` lista as áreas e comodidades comuns do condomínio ou edifício.

## Estrutura

```xml
<area_comum>
    <item>Nome da Área Comum</item>
    <item>Outra Área Comum</item>
    <!-- Mais itens... -->
</area_comum>
```

## Características

- **Obrigatória**: Não
- **Repetível**: Sim, pode conter múltiplos `<item>`
- **Posição**: Dentro da tag `<imovel>`

## Tag item

Cada área comum é representada por uma tag `<item>`:

- **Tipo**: Texto
- **Obrigatório**: Não (mas se usar `<area_comum>`, deve ter pelo menos um `<item>`)
- **Descrição**: Nome da área comum ou comodidade do condomínio

**Lista de itens suportados:** [https://www.chavesnamao.com.br/imoveis/integracao/areas_comuns/](https://www.chavesnamao.com.br/imoveis/integracao/areas_comuns/)

## Exemplo Completo

```xml
<area_comum>
    <item>Academia</item>
    <item>Piscina</item>
    <item>Salão de Festas</item>
    <item>Churrasqueira</item>
    <item>Playground</item>
    <item>Quadra de Esportes</item>
    <item>Portaria 24h</item>
    <item>Elevador</item>
</area_comum>
```

## Exemplo Simples

```xml
<area_comum>
    <item>Piscina</item>
    <item>Churrasqueira</item>
</area_comum>
```

## Exemplo Vazio

Se o imóvel não tiver áreas comuns (exemplo: casa sem condomínio):

```xml
<area_comum></area_comum>
```

ou

```xml
<area_comum/>
```

## Recomendações

### Nomenclatura
- Use os nomes exatos da lista acima
- Evite abreviações
- Use acentuação correta
- Primeira letra maiúscula

### Quantidade
- Não há limite de itens
- Liste todas as áreas comuns relevantes
- Não liste itens inexistentes

## Problemas Comuns

::: warning Atenção
- ❌ Não use abreviações (ex: "Quad." ao invés de "Quadra de Esportes")
- ❌ Não liste comodidades da área privativa aqui
- ❌ Não liste áreas que não existem
:::

::: tip Boas Práticas
- ✅ Use os nomes padronizados da lista
- ✅ Liste apenas áreas realmente disponíveis
- ✅ Mantenha a ortografia correta
- ✅ Agrupe por tipo para melhor organização
:::
