# Tag de Fotos

A tag `<fotos_imovel>` contém todas as fotos do imóvel.

## Estrutura

```xml
<fotos_imovel>
    <foto>
        <url>URL_DA_FOTO</url>
        <data_atualizacao>DATA_HORA</data_atualizacao>
    </foto>
    <!-- Mais fotos... -->
</fotos_imovel>
```

## Características

- **Obrigatória**: Não
- **Repetível**: Sim, pode conter múltiplas tags `<foto>`
- **Posição**: Dentro da tag `<imovel>`

## Tag foto

Cada foto é representada por uma tag `<foto>` que contém:

### url
- **Tipo**: URL
- **Obrigatório**: Sim
- **Descrição**: URL completa da imagem
- **Formato**: JPEG, JPG, PNG, WEBP
- **Exemplo**: `<url>https://www.imobiliaria.com.br/fotos/apto-001-sala.jpg</url>`

### data_atualizacao
- **Tipo**: Data/Hora
- **Obrigatório**: Não
- **Formato**: YYYY-MM-DD HH:MM:SS
- **Descrição**: Data e hora da última atualização da foto
- **Exemplo**: `<data_atualizacao>2023-11-15 17:00:00</data_atualizacao>`

## Exemplo Completo

```xml
<fotos_imovel>
    <foto>
        <url>https://www.imobiliaria.com.br/imovel/imagens/ap01-fachada.jpeg</url>
        <data_atualizacao>2023-11-15 17:00:00</data_atualizacao>
    </foto>
    <foto>
        <url>https://www.imobiliaria.com.br/imovel/imagens/ap01-sala.jpeg</url>
        <data_atualizacao>2023-11-15 17:00:00</data_atualizacao>
    </foto>
    <foto>
        <url>https://www.imobiliaria.com.br/imovel/imagens/ap01-cozinha.jpeg</url>
        <data_atualizacao>2023-11-15 17:00:00</data_atualizacao>
    </foto>
    <foto>
        <url>https://www.imobiliaria.com.br/imovel/imagens/ap01-quarto1.jpeg</url>
        <data_atualizacao>2023-11-15 17:00:00</data_atualizacao>
    </foto>
    <foto>
        <url>https://www.imobiliaria.com.br/imovel/imagens/ap01-banheiro.jpeg</url>
        <data_atualizacao>2023-11-15 17:00:00</data_atualizacao>
    </foto>
</fotos_imovel>
```

## Recomendações

### Quantidade de Fotos
- **Mínimo recomendado**: 5 fotos
- **Máximo**: Até 30 fotos

### Qualidade das Imagens
- **Resolução mínima**: 800x600 pixels
- **Resolução recomendada**: 1920x1080 pixels
- **Tamanho do arquivo**: Máximo 5MB por foto
- **Formato**: JPEG, JPG, PNG, WEBP

### Ordem das Fotos
As fotos são exibidas na ordem em que aparecem no XML. Recomenda-se:
1. Foto da fachada/externa
2. Sala
3. Cozinha
4. Quartos
5. Banheiros
6. Áreas de serviço
7. Garagem
8. Áreas comuns

### URLs das Fotos
- Devem ser URLs públicas e acessíveis
- Devem usar HTTPS sempre que possível
- Devem retornar a imagem diretamente (não uma página HTML)
- Devem estar sempre disponíveis

## Exemplo Vazio

Se o imóvel não tiver fotos ainda, pode deixar a tag vazia:

```xml
<fotos_imovel></fotos_imovel>
```

ou

```xml
<fotos_imovel/>
```

## Problemas Comuns

::: warning Atenção
- ❌ URLs que retornam erro 404
- ❌ URLs que exigem autenticação
- ❌ URLs de serviços temporários de compartilhamento
- ❌ URLs locais (localhost, IPs privados)
- ❌ Fotos muito pesadas (carregamento lento)
:::

::: tip Boas Práticas
- ✅ Use CDN para hospedar as imagens
- ✅ Otimize as imagens antes de disponibilizar
- ✅ Use nomes descritivos nos arquivos
- ✅ Mantenha backup das imagens
- ✅ Teste todas as URLs antes de enviar
:::
