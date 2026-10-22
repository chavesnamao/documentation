# Estrutura do Arquivo XML

Na estrutura do arquivo XML, é necessária a utilização de todas as tags, mesmo que não sejam de preenchimento obrigatório, deixando seu conteúdo vazio.

## Case Sensitive

::: warning Importante
O arquivo deve contar com a estrutura de tags **"case sensitive"**, ou seja, para funcionarem corretamente, devem possuir os caracteres em maiúsculo/minúsculo conforme apresentados neste documento.
:::

## Regras Importantes

1. **Todas as tags devem estar presentes** - Mesmo que vazias, todas as tags especificadas na documentação devem existir no XML
2. **Tags vazias** - Podem ser representadas como `<tag></tag>` ou `<tag/>`
3. **Valores numéricos** - Devem ser informados sem separadores de milhar ou decimais (exceto quando especificado)
4. **Texto longo** - Use CDATA para textos com caracteres especiais: `<![CDATA[texto aqui]]>`

## Validação

Certifique-se de que seu XML:
- Está bem formado (todas as tags abertas são fechadas)
- Usa encoding UTF-8
- Contém todas as tags obrigatórias
- Respeita a hierarquia especificada
- Usa valores válidos para cada campo

::: tip Dica
Use um validador XML para verificar se seu arquivo está bem formado antes de disponibilizá-lo para integração.
:::
