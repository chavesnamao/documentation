# Objeto do lead

Cada item do array `leads`.

| Campo               | Tipo             | Nulo? | O que é                                                                     |
| ------------------- | ---------------- | ----- | --------------------------------------------------------------------------- |
| `lead_id`           | string           | não   | Id do lead no CRM. É o mesmo id usado no resultado da ligação.                |
| `nome_contato`      | string           | não   | Nome da pessoa com quem falar.                                                |
| `nome_empresa`      | string           | não   | Empresa, quando existe. **Cai no nome do contato quando não existe.**         |
| `tipo_lead`         | string           | sim   | Perfil da empresa. `null` na maioria dos leads.                               |
| `produto`           | string           | não   | `imoveis` ou `veiculos`.                                                      |
| `faixa_quantidade`  | string           | sim   | Faixa de anúncios do anunciante, ex. `"21 a 50"`. **Faixa, não número.**      |
| `telefone`          | string           | não   | Só dígitos, com DDI e DDD. Ex. `5547992880000`.                               |
| `cidade`            | string           | sim   | Cidade do contato.                                                            |
| `uf`                | string           | sim   | Sigla de 2 letras.                                                            |
| `parado_desde`      | data ISO 8601    | sim   | Última interação com o contato.                                               |
| `na_etapa_desde`    | data ISO 8601    | sim   | Entrada na etapa atual.                                                       |
| `na_base_desde`     | data ISO 8601    | sim   | Quando o contato passou a existir.                                            |
| `levantou_a_mao_em` | data ISO 8601    | sim   | Só em lead de entrada, cerca de 3% da fila.                                   |

## As quatro datas

Todas em ISO 8601 com fuso, e `null` quando não se aplicam.

| Data                | Responde à pergunta                                   | Use para                                                |
| ------------------- | ----------------------------------------------------- | ------------------------------------------------------- |
| `parado_desde`      | Há quanto tempo ninguém toca neste lead?               | Priorizar. É o mesmo eixo do filtro `parado_ha`.         |
| `na_etapa_desde`    | Há quanto tempo ele está travado nesta etapa?          | Identificar lead empacado na qualificação.               |
| `na_base_desde`     | Desde quando este contato existe?                      | Separar lead novo de lead antigo.                        |
| `levantou_a_mao_em` | Quando ele pediu contato?                              | Priorizar quem procurou a gente. Raro: `null` em 97%.    |

::: warning Não existe data de criação do lead
E é de propósito. No CRM ela é regravada a cada remanejamento, então diria "lead de hoje" sobre
alguém que está na base há anos. Para a idade real do relacionamento, use `na_base_desde`.
:::

## Campos que costumam enganar

**`nome_empresa`** quase nunca é razão social. Só 11% dos leads têm empresa cadastrada, e dentro
desses 1 em cada 4 é cópia do nome do contato. Quando não há empresa, devolvemos o nome do contato
para o campo nunca vir vazio.

**`tipo_lead`** vem `null` na maioria. Ele depende de a empresa existir e ter o perfil preenchido.
Não deduza o tipo pelo nome.

**`faixa_quantidade`** é faixa porque o estoque do anunciante muda sem aviso. Ela é a entrada certa
para consultar [a tabela de planos](../04-planos/index.md): use o número que o anunciante informar
na conversa, não a faixa.

Mais sobre o estado real da base em
[O que parece defeito e não é](../02-como-o-crm-funciona/o-que-parece-defeito.md).
