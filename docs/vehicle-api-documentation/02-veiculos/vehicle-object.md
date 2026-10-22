# Objeto para criação e edição do veículo
**JSON**

```json
{
    "doors": 0,
    "color": "BLACK",
    "gearbox": "AUTOMATIC",
    "fuel": "GASOLINE",
    "reference": "string",
    "type": "C",
    "licensePlate": "string",
    "document": "string",
    "mileage": 0,
    "manufacturedYear": 0,
    "trimId": 0,
    "modelYear": 0,
    "value": 0,
    "amountPerInstallment": 0,
    "amountOfInstallments": 0,
    "deposit": 0,
    "accessories": [
        3,
        6
    ],
    "pictures": [
        {
            "source": "string"
        }
    ],
    "description": "string",
    "title": "string",
    "otherInfos": [
        7,
        10
    ],
    "videoUrl": "string",
    "acceptExchange": false
}
```

**ATRIBUTOS**

| Campo | Tipo | Obrigatório | Descrição |
| --- | --- | --- | --- |
| reference | string | Sim | Id do veículo no lado do integrador, deve ser único por cliente. Tamanho máximo: 90 caracteres. |
| value | string | Sim | Valor do veículo, exibido no anúncio do portal. Valor Mínimo: 0. |
| deposit | number | Sim | Valor de entrada para o veículo, se o veículo não possuir opção de entrada, insira o valor como 0. Valor Mínimo: 0. |
| amountPerInstallment | number | Sim | Valor de cada parcela do veículo, se o veículo não possuir opção de parcelamento, insira o valor como 0. Valor Mínimo: 0. |
| amountOfInstallments | number | Sim | Quantidade de parcelas do veículo, se o veículo não possuir opção de parcelamento, insira o valor como 0. Valor Mínimo: 0. |
| type | string | Sim | Tipo do veículo. Valores possíveis: 'C' para carros e buggys, 'M' para Motocicletas. |
| color | string | Sim | Cor do veículo. Consulte os valores possíveis na descrição. |
| gearbox | string | Sim | Tipo do câmbio do veículo. Consulte os valores possíveis na descrição. |
| fuel | string | Sim | Tipo do combustível do veículo. Consulte os valores possíveis na descrição. |
| mileage | number | Sim | Quilometragem do veículo, se o veículo for novo, utilizar valor 0. Valor Mínimo: 0. |
| doors | number | Sim (para type = C) | Quantidade de portas do veículo, se for moto, omitir o campo ou especificar como valor 0. Valor Mínimo (Para carros): 2, Valor Máximo (Para carros): 5. |
| manufacturedYear | number | Sim | Ano de fabricação do veículo. Valor Mínimo: 1886. |
| modelYear | number | Opcional | Ano do modelo do veículo. Se não for especificado, será salvo igual ao ano de fabricação do veículo. Valor Mínimo: 1886. |
| licensePlate | string | Sim (se mileage > 0) | Veículos com mileage maior que zero devem possuir placa. A placa não deve ter hífen e deve bater com a expressão regular ^[A-Z]{3}[0-9][0-9A-Z][0-9]{2}$, em conformidade com a Resolução 780/2019 CONTRAN, de 26 de junho de 2019 (mercosul e placas brasileiras). |
| document | string | Opcional | Número do documento do veículo. Tamanho máximo: 20 caracteres. |
| description | string | Opcional | Descrição do anúncio. Tamanho máximo: 4000 caracteres. Tamanho máximo recomendável: 850 caracteres. |
| title | string | Opcional | Título do anúncio. Tamanho máximo: 100 caracteres. |
| pictures | object[] | Sim | Array de objetos com cada objeto especificando a URL de origem da foto. Mínimo de itens: 1, Máximo de itens: 16. Consulte a descrição para mais detalhes. |
| accessories | number[] | Sim | Array de IDs de acessórios aos quais o veículo contém. Consulte o endpoint /vehicles/accessories para verificar IDs dos acessórios disponíveis. |
| trimId | number | Sim | ID da versão do veículo. Consulte os endpoints descritos para localizar o ID da versão do veículo. |
| otherInfos | number[] | Opcional | Array de IDs de 'outras informações' conhecido também como  'Opções do vendedor'. Consulte o endpoint /vehicles/otherinfo para verificar IDs disponíveis. |
| videoUrl | string | Opcional | Link do vídeo do Youtube ou Vimeo. Deve ser colocado o link para acessar o vídeo normalmente pelo navegador. Não pode ser utilizado embed. Não aceitamos Shorts do YouTube nem valores nulos! |
| acceptExchange | boolean | Opcional | Parâmetro que informa se permite trocas ou não |

**type** - Tipo do veículo.

| Valor | Descrição |
|-------|------|
| C     | Para carros e buggys |
| M     | Para Motocicletas |

**color** - Cor do veículo.

| Valor | Descrição        |
|-------|------------------|
| BLACK | Preto            |
| RED   | Vermelho         |
| SILVER | Prata           |
| GREEN | Verde            |
| YELLOW | Amarelo         |
| BLUE  | Azul             |
| METALLIC_WHITE | Branco metálico |
| GREY  | Cinza            |
| LEAD  | Chumbo           |
| BEIGE | Bege             |
| ORANGE | Laranja         |
| BURGUNDY | Bordo         |
| BROWN | Marrom           |
| GOLDEN | Dourado         |
| PURPLE | Roxo            |
| PINK  | Rosa             |
| MULTICOLORED | Várias Cores |
| OTHER | Outra Cor         |
| WINE  | Vinho            |
| PEARL_WHITE | Branco pérola|
| CHAMPAGNE | Cor Champagne |
| BRONZE | Cor Bronze       |

**gearbox** - Tipo do câmbio do veículo.

| Valor     | Descrição                     |
|-----------|-------------------------------|
| AUTOMATIC | Qualquer câmbio automático    |
| MANUAL    | Qualquer câmbio manual        |

**fuel** - Tipo do combustível do veículo.

| Valor         | Descrição                       |
|---------------|---------------------------------|
| ETHANOL       | Estritamente Álcool             |
| GASOLINE      | Estritamente Gasolina           |
| DIESEL        | Estritamente Diesel             |
| FLEX          | Álcool e Gasolina               |
| GNV+ETHANOL   | GNV e Álcool                    |
| GNV+GASOLINE  | GNV e Gasolina                  |
| GNV+FLEX      | GNV, Álcool e Gasolina          |
| HYBRID        | Motor de combustão e elétrico    |
| ELETRIC       | Estritamente elétrico           |
| GNV           | Estritamente GNV                |
