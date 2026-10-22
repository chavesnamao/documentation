# Tag Imóveis

A tag `<imoveis>` contém a lista de todos os imóveis que serão integrados ao portal.

## Descrição

TAG `<imoveis>`. Essa tag informa o início da lista de imóveis do cliente, deve ser finalizada quando terminado a lista de imóveis do cliente e deve estar dentro da tag `<Document>`.

## Características

- **Obrigatória**: Sim
- **Posição**: Dentro da tag `<Document>`
- **Filhos**: Uma ou mais tags `<imovel>`

## Sintaxe

```xml
<Document>
    <imoveis>
        <!-- Um ou mais imóveis aqui -->
    </imoveis>
</Document>
```

## Estrutura

A tag `<imoveis>` funciona como um container para todos os imóveis que serão enviados:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Document>
    <imoveis>
        <imovel>
            <!-- Dados do primeiro imóvel -->
        </imovel>
        <imovel>
            <!-- Dados do segundo imóvel -->
        </imovel>
        <imovel>
            <!-- Dados do terceiro imóvel -->
        </imovel>
        <!-- ... mais imóveis ... -->
    </imoveis>
</Document>
```

## Quantidade de Imóveis

- **Mínimo**: 1 imóvel
- **Máximo**: Sem limite definido

## Regras Importantes

::: warning Atenção
- A tag `<imoveis>` deve estar sempre dentro de `<Document>`
- Deve conter pelo menos uma tag `<imovel>`
- Cada imóvel deve ser representado por uma tag `<imovel>` completa
- Não adicione conteúdo texto diretamente dentro de `<imoveis>`, apenas tags `<imovel>`
:::

## Próximos Passos

- [Tag Imóvel](/xml-documentation/arquivo/imovel) - Conheça todas as tags que compõem cada imóvel
