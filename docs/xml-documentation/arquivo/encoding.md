# Encoding

A codificação de caracteres é um aspecto crítico para o correto funcionamento da integração.

## Codificação Suportada

Atualmente a codificação suportada é: **`UTF-8`**

```xml
<?xml version="1.0" encoding="UTF-8"?>
```

## Importância do UTF-8

::: danger Atenção Crítica
O arquivo XML deverá **obrigatoriamente** conter a codificação de caracteres `UTF-8`.
:::

### Problemas com Codificação Incorreta

Se o arquivo for enviado com uma codificação diferente de UTF-8, poderão ocorrer diversos problemas:

- ❌ **Caracteres acentuados** - Todos os caracteres acentuados (á, é, í, ó, ú, ã, õ, ç, etc.) poderão conter erros
- ❌ **Alocação incorreta** - O imóvel poderá não ser alocado no bairro correto, cidade correta ou tipo de imóvel correto
- ❌ **Problemas visuais** - Textos podem aparecer com símbolos estranhos no lugar de letras acentuadas
- ❌ **Problemas técnicos** - Falhas no processamento e importação dos dados