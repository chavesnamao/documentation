# Tag Descritivo

A tag `<descritivo>` contém a descrição textual do imóvel, exibida na página do anúncio no portal.

## Estrutura

```xml
<descritivo><![CDATA[
Texto descritivo do imóvel aqui.
]]></descritivo>
```

## Características

- **Obrigatória**: Sim
- **Tipo**: text
- **Tamanho máximo**: 3000 caracteres
- **Posição**: Dentro da tag `<imovel>`

## Uso do CDATA

::: tip Recomendação
Utilize **sempre** a tag `<![CDATA[ ... ]]>` para envolver o conteúdo do descritivo. Isso garante que caracteres especiais como `<`, `>`, `&`, aspas e acentos sejam interpretados corretamente.
:::

O `CDATA` informa ao parser XML que o conteúdo interno deve ser tratado como texto puro, sem interpretar marcações XML.

### Exemplo com CDATA (recomendado)

```xml
<descritivo><![CDATA[
Apartamento com 2 quartos, 1 suíte & varanda gourmet.
Valor abaixo do mercado! Agende sua visita.
]]></descritivo>
```

### Exemplo sem CDATA (não recomendado)

```xml
<!-- ❌ Isso pode causar erro no XML -->
<descritivo>Apartamento com 2 quartos, 1 suíte & varanda gourmet.</descritivo>
```

::: danger Atenção
Sem o `CDATA`, caracteres como `&` e `<` causam erro de parsing no XML, podendo invalidar todo o arquivo.
:::

## Quebra de Linha

Dentro do `CDATA`, você pode utilizar **duas formas** para quebrar linhas no descritivo:

### 1. Quebra de linha natural (Enter)

Basta pressionar **Enter** no texto. A quebra de linha será preservada dentro do `CDATA`.

```xml
<descritivo><![CDATA[
Apartamento espaçoso no centro da cidade.

2 quartos sendo 1 suíte.
Cozinha planejada com armários embutidos.
Varanda gourmet com churrasqueira.

Condomínio com piscina e academia.
Próximo a escolas e supermercados.
]]></descritivo>
```

### 2. Tags HTML de quebra de linha

Você também pode utilizar as tags HTML `<br>` ou `<br/>` para forçar a quebra de linha.

```xml
<descritivo><![CDATA[
Apartamento espaçoso no centro da cidade.<br><br>
2 quartos sendo 1 suíte.<br>
Cozinha planejada com armários embutidos.<br>
Varanda gourmet com churrasqueira.<br><br>
Condomínio com piscina e academia.<br>
Próximo a escolas e supermercados.
]]></descritivo>
```

::: info Observação
Ambas as formas são aceitas e podem ser combinadas. Use a que for mais prática para o seu sistema.
:::

## Exemplo Completo

```xml
<descritivo><![CDATA[
Lindo apartamento com 2 quartos sendo 1 suíte, sala de estar e jantar,
cozinha planejada, área de serviço e varanda.

Condomínio completo com piscina, academia e salão de festas.

Localização privilegiada no bairro Novo Mundo, próximo a comércios,
escolas e transporte público.

Agende sua visita!
]]></descritivo>
```

## Problemas Comuns

::: warning Atenção
- ❌ Não usar `CDATA` e incluir caracteres especiais (`&`, `<`, `>`)
- ❌ Ultrapassar o limite de 3000 caracteres
- ❌ Enviar o descritivo totalmente vazio
- ❌ Incluir código HTML complexo (tabelas, scripts, estilos)
:::

::: tip Boas Práticas
- ✅ Sempre utilize `CDATA` para envolver o descritivo
- ✅ Use Enter ou `<br>` para organizar o texto em parágrafos
- ✅ Descreva os diferenciais do imóvel de forma clara e objetiva
- ✅ Mantenha o texto dentro do limite de 3000 caracteres
- ✅ Evite textos em CAIXA ALTA ou com excesso de pontuação (!!!)
:::
