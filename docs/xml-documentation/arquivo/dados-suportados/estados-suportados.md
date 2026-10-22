# Estados Suportados

Lista de estados brasileiros suportados pelo sistema.

## Como Usar

Use a sigla do estado (UF) com 2 letras maiúsculas na tag `<estado>`:

```xml
<estado>PR</estado>
```

## Lista Completa

| Sigla | Estado | Região |
|-------|--------|--------|
| AC | Acre | Norte |
| AL | Alagoas | Nordeste |
| AP | Amapá | Norte |
| AM | Amazonas | Norte |
| BA | Bahia | Nordeste |
| CE | Ceará | Nordeste |
| DF | Distrito Federal | Centro-Oeste |
| ES | Espírito Santo | Sudeste |
| GO | Goiás | Centro-Oeste |
| MA | Maranhão | Nordeste |
| MT | Mato Grosso | Centro-Oeste |
| MS | Mato Grosso do Sul | Centro-Oeste |
| MG | Minas Gerais | Sudeste |
| PA | Pará | Norte |
| PB | Paraíba | Nordeste |
| PR | Paraná | Sul |
| PE | Pernambuco | Nordeste |
| PI | Piauí | Nordeste |
| RJ | Rio de Janeiro | Sudeste |
| RN | Rio Grande do Norte | Nordeste |
| RS | Rio Grande do Sul | Sul |
| RO | Rondônia | Norte |
| RR | Roraima | Norte |
| SC | Santa Catarina | Sul |
| SP | São Paulo | Sudeste |
| SE | Sergipe | Nordeste |
| TO | Tocantins | Norte |

## Região Norte

```xml
<estado>AC</estado> <!-- Acre -->
<estado>AP</estado> <!-- Amapá -->
<estado>AM</estado> <!-- Amazonas -->
<estado>PA</estado> <!-- Pará -->
<estado>RO</estado> <!-- Rondônia -->
<estado>RR</estado> <!-- Roraima -->
<estado>TO</estado> <!-- Tocantins -->
```

## Região Nordeste

```xml
<estado>AL</estado> <!-- Alagoas -->
<estado>BA</estado> <!-- Bahia -->
<estado>CE</estado> <!-- Ceará -->
<estado>MA</estado> <!-- Maranhão -->
<estado>PB</estado> <!-- Paraíba -->
<estado>PE</estado> <!-- Pernambuco -->
<estado>PI</estado> <!-- Piauí -->
<estado>RN</estado> <!-- Rio Grande do Norte -->
<estado>SE</estado> <!-- Sergipe -->
```

## Região Centro-Oeste

```xml
<estado>DF</estado> <!-- Distrito Federal -->
<estado>GO</estado> <!-- Goiás -->
<estado>MT</estado> <!-- Mato Grosso -->
<estado>MS</estado> <!-- Mato Grosso do Sul -->
```

## Região Sudeste

```xml
<estado>ES</estado> <!-- Espírito Santo -->
<estado>MG</estado> <!-- Minas Gerais -->
<estado>RJ</estado> <!-- Rio de Janeiro -->
<estado>SP</estado> <!-- São Paulo -->
```

## Região Sul

```xml
<estado>PR</estado> <!-- Paraná -->
<estado>RS</estado> <!-- Rio Grande do Sul -->
<estado>SC</estado> <!-- Santa Catarina -->
```

## Exemplos de Uso

### Curitiba, PR
```xml
<estado>PR</estado>
<cidade>Curitiba</cidade>
<bairro>Centro</bairro>
```

### São Paulo, SP
```xml
<estado>SP</estado>
<cidade>São Paulo</cidade>
<bairro>Vila Mariana</bairro>
```

### Rio de Janeiro, RJ
```xml
<estado>RJ</estado>
<cidade>Rio de Janeiro</cidade>
<bairro>Copacabana</bairro>
```

### Brasília, DF
```xml
<estado>DF</estado>
<cidade>Brasília</cidade>
<bairro>Asa Sul</bairro>
```

## Regras Importantes

::: warning Atenção
- Use sempre 2 letras MAIÚSCULAS
- Não use acentos ou caracteres especiais
- Não use nome completo do estado
- Siga exatamente a sigla da tabela
:::

### ✅ Correto
```xml
<estado>PR</estado>
<estado>SP</estado>
<estado>RJ</estado>
```

### ❌ Incorreto
```xml
<estado>pr</estado>          <!-- Minúsculo -->
<estado>Pr</estado>          <!-- Misto -->
<estado>Paraná</estado>      <!-- Nome completo -->
<estado>PRana</estado>       <!-- Inválido -->
<estado>P</estado>           <!-- Incompleto -->
```

## Validação

Antes de enviar seu XML, verifique:

1. ✅ Sigla tem exatamente 2 caracteres
2. ✅ Ambos os caracteres são maiúsculos
3. ✅ Sigla está na lista de estados brasileiros
4. ✅ Cidade pertence ao estado informado
5. ✅ CEP corresponde ao estado/cidade

## Combinação com Cidade

A tag `<estado>` deve sempre ser usada em conjunto com `<cidade>`:

```xml
<estado>PR</estado>
<cidade>Curitiba</cidade>
<bairro>Batel</bairro>
<cep>80420000</cep>
<endereco>Rua exemplo</endereco>
<numero>100</numero>
```

::: tip Dica
Certifique-se de que o CEP informado corresponde à cidade e estado especificados para evitar erros de localização.
:::