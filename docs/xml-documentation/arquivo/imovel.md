# Tag Imóvel

A tag `<imovel>` contém todas as informações de um único imóvel.

## Descrição

TAG `<imovel>`, Tag que informa o conteúdo de cada imóvel do cliente, deve estar dentro da tag `<imoveis>` e ser finalizada a cada imóvel contido na lista. Podem conter quantas tags `<imovel>` forem necessárias dentro da tag `<imoveis>`.

## Características

- **Obrigatória**: Sim (pelo menos uma)
- **Posição**: Dentro da tag `<imoveis>`
- **Repetível**: Sim, pode haver múltiplas tags `<imovel>`

## Sintaxe

```xml
<imoveis>
    <imovel>
        <!-- Todas as informações do imóvel -->
    </imovel>
</imoveis>
```

## Exemplo Completo

```xml
<imovel>
    <referencia>AP01</referencia>
    <codigo_cliente>AP01</codigo_cliente>
    <link_cliente>https://www.imobiliariateste.com.br/imovel/ap01</link_cliente>
    <titulo>Apartamento Exemplo 01</titulo>
    <transacao>V</transacao>
    <transacao2></transacao2>
    <finalidade>RE</finalidade>
    <finalidade2></finalidade2>
    <destaque>1</destaque>
    <tipo>Apartamento</tipo>
    <tipo2></tipo2>
    <valor>210000</valor>
    <valor_locacao></valor_locacao>
    <valor_iptu></valor_iptu>
    <valor_condominio>560</valor_condominio>
    <area_total>70</area_total>
    <area_util>52</area_util>
    <conservacao></conservacao>
    <quartos>1</quartos>
    <suites>1</suites>
    <garagem>1</garagem>
    <banheiro>2</banheiro>
    <closet>1</closet>
    <salas></salas>
    <despensa></despensa>
    <bar></bar>
    <cozinha>1</cozinha>
    <quarto_empregada></quarto_empregada>
    <escritorio></escritorio>
    <area_servico></area_servico>
    <lareira></lareira>
    <varanda></varanda>
    <lavanderia></lavanderia>
    <aceita_pet>1</aceita_pet>
    <estado>PR</estado>
    <cidade>Curitiba</cidade>
    <bairro>Novo Mundo</bairro>
    <cep>88888888</cep>
    <endereco>Rua demonstração</endereco>
    <numero>250</numero>
    <complemento></complemento>
    <esconder_endereco_imovel>1</esconder_endereco_imovel>
    <descritivo><![CDATA[ Essa é uma breve descrição de teste do imóvel. ]]></descritivo>
    <fotos_imovel>
        <foto>
            <url>https://www.imobiliariateste.com.br/imovel/imagens/ap01-cozinha.jpeg</url>
            <data_atualizacao>2023-11-15 17:00:00</data_atualizacao>
        </foto>
        <foto>
            <url>https://www.imobiliariateste.com.br/imovel/imagens/ap01-sala.jpeg</url>
            <data_atualizacao>2023-11-15 17:00:00</data_atualizacao>
        </foto>
    </fotos_imovel>
    <data_atualizacao></data_atualizacao>
    <latitude></latitude>
    <longitude></longitude>
    <video></video>
    <tour_360></tour_360>
    <area_comum>
        <item>Academia</item>
        <item>Acessibilidade</item>
    </area_comum>
    <area_privativa>
        <item>Adega</item>
        <item>Aquecedor</item>
    </area_privativa>
    <aceita_troca></aceita_troca>
    <periodo_locacao></periodo_locacao>
</imovel>
```

## Regras Importantes

::: warning Atenção
- Todas as tags devem estar presentes, mesmo que vazias
- Use CDATA para textos com caracteres especiais em `<descritivo>`
- Valores numéricos não devem conter separadores de milhar
- Tags booleanas usam 0 (não) ou 1 (sim)
:::

## Próximos Passos

- [Especificações das Tags](/xml-documentation/arquivo/especificacoes/especificacoes-tags) - Especificações técnicas
- [Dados Suportados](/xml-documentation/arquivo/dados-suportados/imoveis-suportados) - Valores aceitos para cada campo
