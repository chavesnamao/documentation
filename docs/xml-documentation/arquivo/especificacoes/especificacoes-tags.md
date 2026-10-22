# Especificações tags dados imóvel

| NOME TAG | OBRIGATÓRIO | TIPO | DESCRIÇÃO |
|----------|-------------|------|-----------|
| referencia | SIM | string | Código de referencia do imóvel no sistema do cliente. Utilizado para identificação do imóvel na imobiliária e também como código de referencia de integração no portal Chaves na mão. |
| codigo_cliente | NÃO | string | Código do imóvel no sistema do cliente, pode ser o mesmo utilizado na tag "referencia" ou outro código de identificação interna no sistema do cliente. |
| link_cliente | NÃO | string | Link do imóvel no site do cliente. |
| titulo | NÃO | string | Título do imóvel colocado pelo cliente. |
| transacao | SIM | char(1) | Tipo de transação do imóvel (venda ou locação). Utilizar V para venda ou L para locação. |
| transacao2 | NÃO | char(1) | Tipo de transação secundária do imóvel (venda ou locação). Utilizar V para venda ou L para locação. Utilizar em casos de imóveis disponíveis tanto para venda quanto para locação |
| finalidade | SIM | char(2) | Finalidade do imóvel (residencial ou comercial). Utilizar RE para residencial e CO para comercial. |
| finalidade2 | NÃO | char(2) | Finalidade secundária do imóvel (residencial ou comercial). Utilizar RE para residencial e CO para comercial. Utilizar em casos de imóveis disponíveis para mais de uma finalidade. Caso o imóvel não possua duas finalidades deixar este campo vazio. |
| destaque | SIM | integer(1) | Informa se o imóvel deve aparecer em destaque no portal ou não. Utilizar 0 para não e 1 para sim. |
| tipo | SIM | string | Tipo do imóvel para a tag finalidade. Ver [lista de tipos de imóveis suportados](/xml-documentation/arquivo/dados-suportados/imoveis-suportados) de acordo com sua finalidade. |
| tipo2 | NÃO | string | Tipo do imóvel para a tag finalidade2. Ver [lista de tipos de imóveis suportados](/xml-documentation/arquivo/dados-suportados/imoveis-suportados) de acordo com sua finalidade. Caso o imóvel não possua duas finalidades, deixe este campo vazio. |
| valor | SIM | float | Valor do imóvel. Deve estar em formato float, com ponto (.) para casas decimais. Pode ser utilizado para informar tanto o valor de venda quanto de locação, caso o imóvel possua apenas um tipo de transação. Caso possua dois tipos de transações (venda ou locação), este campo deve ser utilizado para informar o valor de venda. |
| valor_locacao | NÃO | float | Valor de locação do imóvel. Deve estar em formato float, com ponto (.) para casas decimais. Utilizar somente caso o imóvel esteja disponível tanto para venda quanto para locação. |
| valor_iptu | NÃO | float | Valor do IPTU do imóvel. Deve estar em formato float, com ponto (.) para casas decimais. |
| valor_condominio | NÃO | float | Valor do condomínio do imóvel. Deve estar em formato float, com ponto (.) para casas decimais. |
| area_total | NÃO | float | Área total do imóvel. Deve estar em formato float, com ponto (.) para casas decimais. |
| area_util | NÃO | float | Área útil do imóvel. Deve estar em formato float, com ponto (.) para casas decimais. |
| conservacao | NÃO | char(1) | Estado de conservação do imóvel. Utilizar N para Novo e U para Usado. |
| quartos | NÃO | integer(3) | Quantidade de quartos do imóvel. Deve estar no formato de número inteiro. Pode possuir 2-3 (dois ou três) caracteres. |
| suites | NÃO | integer(2) | Quantidade de suítes do imóvel. Deve estar no formato de número inteiro. Pode possuir 2-3 (dois ou três) caracteres. |
| garagem | NÃO | integer(3) | Quantidade de garagens do imóvel. Deve estar no formato de número inteiro. Pode possuir 2-3 (dois ou três) caracteres. |
| banheiro | NÃO | integer(3) | Quantidade de banheiros do imóvel. Deve estar no formato de número inteiro. Pode possuir 2-3 (dois ou três) caracteres. |
| closet | NÃO | integer(2) | Quantidade de closets do imóvel. Deve estar no formato de número inteiro. Pode possuir 2 (dois) caracteres. |
| salas | NÃO | integer(2) | Quantidade de salas do imóvel. Deve estar no formato de número inteiro. Pode possuir 2 (dois) caracteres. |
| despensa | NÃO | integer(2) | Quantidade de despensas do imóvel. Deve estar no formato de número inteiro. Pode possuir 2 (dois) caracteres. |
| bar | NÃO | integer(2) | Quantidade de bares do imóvel. Deve estar no formato de número inteiro. Pode possuir 2 (dois) caracteres. |
| cozinha | NÃO | integer(2) | Quantidade de cozinhas do imóvel. Deve estar no formato de número inteiro. Pode possuir 2 (dois) caracteres. |
| quarto_empregada | NÃO | integer(2) | Quantidade de quartos de empregada do imóvel. Deve estar no formato de número inteiro. Pode possuir 2 (dois) caracteres. |
| escritorio | NÃO | integer(2) | Quantidade de escritórios do imóvel. Deve estar no formato de número inteiro. Pode possuir 2 (dois) caracteres. |
| area_servico | NÃO | integer(2) | Quantidade de áreas de serviço do imóvel. Deve estar no formato de número inteiro. Pode possuir 2 (dois) caracteres. |
| lareira | NÃO | integer(2) | Quantidade de lareiras do imóvel. Deve estar no formato de número inteiro. Pode possuir 2 (dois) caracteres. |
| varanda | NÃO | integer(2) | Quantidade de varandas e/ou sacadas do imóvel. Deve estar no formato de número inteiro. Pode possuir 2 (dois) caracteres. |
| lavanderia | NÃO | integer(2) | Quantidade de lavanderias do imóvel. Deve estar no formato de número inteiro. Pode possuir 2 (dois) caracteres. |
| estado | SIM | char(2) | Estado (uf – unidade da federação) do endereço do imóvel. Deve estar abreviado (com dois caracteres), como utilizado de forma oficial pelo Governo Federal. [Ver estados suportados](/xml-documentation/arquivo/dados-suportados/estados-suportados) |
| cidade | SIM | string | Nome da cidade do imóvel. |
| bairro | SIM | string | Nome do bairro do imóvel. |
| cep | NÃO | string(9) | O CEP do endereço do imóvel pode conter somente números, como pode também estar com a formatação oficial utilizada pelos Correios. Máximo de 9 (nove) caracteres. |
| endereco | NÃO | string(200) | Endereço do imóvel, sem o bairro, número e complemento. Somente o logradouro do imóvel deve ser enviado neste campo. Máximo de 200 (duzentos) caracteres. |
| numero | NÃO | string(10) | Número do imóvel no endereço. Máximo de 10 (dez) caracteres. |
| complemento | NÃO | string(50) | Complemento do número do imóvel no endereço. Máximo de 50 (cinquenta) caracteres. |
| descritivo | SIM | text | Descrição do imóvel. Tamanho máximo de 3000 caracteres. Ver especificações de seu conteúdo em [Especificações Descritivo](/xml-documentation/arquivo/especificacoes/especificacoes-descritivo) |
| fotos_imovel | NÃO | TAG | Depende da tag foto, url e data_atualizacao dentro da mesma, ver especificações de seu conteúdo em [Especificações Fotos](/xml-documentation/arquivo/especificacoes/especificacoes-fotos) |
| data_atualizacao | NÃO | datetime | Data de cadastro ou data da última atualização do imóvel no sistema do cliente. Priorizar o informe da data de última utilização, caso existente no sistema. Formato data/hora suportado: AAAA-MM-DD HH:MM:SS (ex: 2021-10-10 12:00:00). |
| latitude | NÃO | string | Coordenada geográfica latitude do endereço do imóvel. Deve ser informado no padrão utilizado pelo Google (ex: -49.1829). |
| longitude | NÃO | string | Coordenada geográfica longitude do endereço do imóvel. Deve ser informado no padrão utilizado pelo Google (ex: -25.4026). |
| video | NÃO | string | Link do vídeo do Youtube. Deve ser colocado o link para acessar o vídeo normalmente pelo navegador. Não pode ser utilizado embed. |
| area_comum | NÃO | TAG | Deve ser colocado os itens de área comum existentes no imóvel. Ver especificações de seu conteúdo em [Especificações Área Comum](/xml-documentation/arquivo/especificacoes/especificacoes-area-comum) |
| area_privativa | NÃO | TAG | Deve ser colocado os itens de área privativa existentes no imóvel. Ver especificações de seu conteúdo em [Especificações Área Privativa](/xml-documentation/arquivo/especificacoes/especificacoes-area-privativa) |
| aceita_troca | NÃO | integer(1) | Informa se o imóvel aceita trocas ou não. 0 para não e 1 para sim. Caso não seja informado será considerado que o imóvel não aceita trocas. |
| periodo_locacao | NÃO | integer(1) | Período de locação. Apenas enviar campo quando em caso de locação informando os valores inteiros em cada caso: 1 - Por Mês, 2 - Por Dia, 3 - Por Ano, 4 - Por Semana. Exemplo: Caso periodo de locação por dia: utilizaria o número 2 no meio da tag. |
| esconder_endereco_imovel | NÃO | integer(1) | Caso o campo venha com valor 1 os dados de endereço do imóvel não serão exibidos no portal. (permitido apenas 0 ou 1) |
| tour_360 | NÃO | string | Link do tour 360 do imóvel. Deve ser colocado o link para acessar o vídeo normalmente pelo navegador. Não pode ser utilizado embed. |
| aceita_pet | NÃO | integer(1) | Caso o campo venha com valor 1 o imóvel aceita animais de estimação. (permitido apenas 0 ou 1) |
