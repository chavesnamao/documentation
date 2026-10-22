# Documentação Chaves na Mão

Documentação pública das integrações da Chaves na Mão, construída com
[VitePress](https://vitepress.dev) e publicada no GitHub Pages.

**Site:** https://chavesnamao.github.io/documentation/

Reúne quatro documentações que antes viviam em repositórios separados:

| Pasta                        | Documentação             | Repositório de origem       |
| ---------------------------- | ------------------------ | --------------------------- |
| `docs/xml-documentation/`     | XML de imóveis            | `xml-documentation`          |
| `docs/vehicle-api-documentation/` | API REST de veículos  | `vehicle-api-documentation`  |
| `docs/lead-documentation/`    | Integração de leads       | `lead-documentation`         |
| `docs/partner-api-documentation/` | API de parceiros      | novo                         |

## Duas regras que não podem ser quebradas

**1. O nome da pasta de cada produto é o nome do repositório antigo.** Parece redundante, e é
proposital: tudo que vem depois do nome da pasta é idêntico à URL que aquela página tinha quando
era um repositório separado. Integrador que guardou o caminho reencontra a página, e o
redirecionamento dos endereços antigos é uma simples troca de prefixo. Renomear uma dessas pastas
quebra links que estão em contrato, e-mail e código de terceiro.

**2. `cleanUrls` fica desligado.** Todas as URLs publicadas até hoje terminam em `.html`. Ligar
essa opção faria cada uma delas responder 404 no GitHub Pages.

## Rodar localmente

```bash
npm install
npm run docs:dev
```

Abre em http://localhost:5173/documentation/ (repare no caminho: o `base` vale também em
desenvolvimento).

Para conferir o site como ele vai ficar publicado:

```bash
npm run docs:build
npm run docs:preview
```

O build **falha em link quebrado**, então ele já serve de verificação.

## Publicar

Automático: todo push na branch `main` dispara `.github/workflows/deploy.yml`, que constrói o site
e publica no GitHub Pages.

## Estrutura

```
docs/
├── .vitepress/config.mts     menu, barra lateral por produto, tema e metadados
├── index.md                  portal, com as quatro integrações
├── public/                   assets compartilhados
├── xml-documentation/
├── vehicle-api-documentation/
├── lead-documentation/
└── partner-api-documentation/
```

A barra lateral é um objeto com uma chave por produto (`'/xml-documentation/': [...]`). Sem isso,
as quatro documentações apareceriam empilhadas na barra de todas as páginas.

## Adicionar uma página

1. Crie o `.md` dentro da pasta do produto.
2. Registre em `docs/.vitepress/config.mts`, na chave da barra lateral daquele produto.
3. Rode `npm run docs:build` antes de abrir a PR: link quebrado derruba o build.

Mudança de contrato de API também merece uma linha em `versoes/` do produto correspondente.

## Os repositórios antigos

`xml-documentation`, `vehicle-api-documentation` e `lead-documentation` continuam existindo, com o
GitHub Pages ligado, servindo apenas páginas de redirecionamento para cá. É o que mantém
funcionando os endereços que integradores já têm salvos. Não desligue o Pages deles.
