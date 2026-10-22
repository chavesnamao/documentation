# Tag Document

A tag `Document` é a tag raiz do arquivo XML e indica o início do documento.

## Descrição

TAG `<Document>`. Tag para indicar o início do documento, deve ser finalizada ao término do arquivo.

## Características

- **Obrigatória**: Sim
- **Posição**: Tag raiz do documento
- **Filhos**: Deve conter a tag `<imoveis>`

## Sintaxe

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Document>
    <!-- Conteúdo do documento -->
</Document>
```

## Estrutura

A tag `Document` deve englobar todo o conteúdo do arquivo XML e conter obrigatoriamente a tag `<imoveis>`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Document>
    <imoveis>
        <!-- Lista de imóveis aqui -->
    </imoveis>
</Document>
```

## Exemplo Completo

```xml
<?xml version="1.0" encoding="UTF-8"?>
<Document>
    <imoveis>
        <imovel>
            <referencia>AP01</referencia>
            <!-- ... outras tags do imóvel ... -->
        </imovel>
        <imovel>
            <referencia>AP02</referencia>
            <!-- ... outras tags do imóvel ... -->
        </imovel>
    </imoveis>
</Document>
```

## Regras Importantes

::: warning Atenção
- A tag `<Document>` deve ser a primeira tag após a declaração XML
- Deve ser fechada ao final do arquivo (`</Document>`)
- Não pode haver conteúdo fora desta tag
:::

## Próximos Passos

- [Tag Imóveis](/xml-documentation/arquivo/imoveis) - Entenda a tag que contém a lista de imóveis
- [Tag Imóvel](/xml-documentation/arquivo/imovel) - Veja todas as tags que compõem cada imóvel
