import { defineConfig } from "vitepress";

/**
 * Documentação pública da Chaves na Mão, reunindo as quatro integrações num
 * site só.
 *
 * Duas regras valem para qualquer mudança aqui:
 *
 * 1. Cada produto vive numa pasta com o NOME DO REPOSITÓRIO ANTIGO
 *    (`xml-documentation/`, `vehicle-api-documentation/`, ...). Isso é
 *    deliberado: tudo que vem depois do nome da pasta é idêntico à URL que o
 *    produto tinha quando era um repositório separado, então integrador que
 *    guardou o caminho reencontra a página.
 *
 * 2. `cleanUrls` fica DESLIGADO. Todas as URLs antigas terminam em `.html` e
 *    ligar essa opção faria cada uma delas responder 404 no GitHub Pages.
 */
export default defineConfig({
  base: "/documentation/",
  title: "Chaves na Mão - Documentação",
  lang: "pt-BR",
  description:
    "Documentação das integrações da Chaves na Mão: XML de imóveis, API REST de veículos, integração de leads e API de parceiros.",
  lastUpdated: true,
  cleanUrls: false,
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://cdn.chavesnamao.com.br/common/logos/favicon.ico",
      },
    ],
    [
      "style",
      {},
      `
      :root {
        --vp-c-brand-1: #DC2626;
        --vp-c-brand-2: #EF4444;
        --vp-c-brand-3: #F87171;
        --vp-c-brand-soft: rgba(220, 38, 38, 0.14);
      }
      .dark {
        --vp-c-brand-1: #F87171;
        --vp-c-brand-2: #EF4444;
        --vp-c-brand-3: #DC2626;
        --vp-c-brand-soft: rgba(248, 113, 113, 0.16);
      }
    `,
    ],
  ],
  markdown: {
    theme: "material-theme-palenight",
    lineNumbers: true,
  },
  themeConfig: {
    siteTitle: false,
    logo: {
      light:
        "https://cdn.chavesnamao.com.br/common/logos/logo-admin-login-2023.png",
      dark: "https://cdn.chavesnamao.com.br/common/logos/logo-cnm-w.png",
    },
    outline: { level: [2, 3], label: "Nesta página" },
    docFooter: { prev: "Anterior", next: "Próxima" },
    lastUpdatedText: "Atualizado em",
    darkModeSwitchLabel: "Aparência",
    returnToTopLabel: "Voltar ao topo",
    sidebarMenuLabel: "Documentações",
    search: {
      provider: "local",
      options: {
        translations: {
          button: { buttonText: "Buscar", buttonAriaLabel: "Buscar" },
          modal: {
            noResultsText: "Nenhum resultado para",
            resetButtonTitle: "Limpar busca",
            footer: {
              selectText: "selecionar",
              navigateText: "navegar",
              closeText: "fechar",
            },
          },
        },
      },
    },
    nav: [
      {
        text: "Integrações",
        items: [
          { text: "XML de imóveis", link: "/xml-documentation/" },
          {
            text: "API REST de veículos",
            link: "/vehicle-api-documentation/",
          },
          { text: "Integração de leads", link: "/lead-documentation/" },
          {
            text: "API de parceiros",
            link: "/partner-api-documentation/",
          },
        ],
      },
      {
        text: "Atualizações",
        items: [
          {
            text: "XML de imóveis",
            items: [
              { text: "v0.0.1", link: "/xml-documentation/versoes/v0.0.1" },
            ],
          },
          {
            text: "API REST de veículos",
            items: [
              {
                text: "v0.0.4",
                link: "/vehicle-api-documentation/versoes/v0.0.4",
              },
              {
                text: "v0.0.3",
                link: "/vehicle-api-documentation/versoes/v0.0.3",
              },
              {
                text: "v0.0.2",
                link: "/vehicle-api-documentation/versoes/v0.0.2",
              },
              {
                text: "v0.0.1",
                link: "/vehicle-api-documentation/versoes/v0.0.1",
              },
            ],
          },
          {
            text: "API de parceiros",
            items: [
              {
                text: "v1.0.0",
                link: "/partner-api-documentation/versoes/v1.0.0",
              },
            ],
          },
        ],
      },
    ],
    // Barra lateral por prefixo de pasta: cada produto só mostra a sua.
    // Com um array único, as quatro documentações apareceriam empilhadas em
    // todas as páginas.
    sidebar: {
      "/xml-documentation/": [
        {
          text: "Início",
          collapsed: false,
          items: [
            {
              text: "Introdução",
              link: "/xml-documentation/introducao/introducao",
            },
          ],
        },
        {
          text: "Arquivo XML",
          collapsed: false,
          items: [
            { text: "Detalhes do XML", link: "/xml-documentation/arquivo/" },
            {
              text: "Estrutura Arquivo XML",
              link: "/xml-documentation/arquivo/estrutura",
            },
          ],
        },
        {
          text: "Tags",
          collapsed: false,
          items: [
            { text: "Encoding", link: "/xml-documentation/arquivo/encoding" },
            { text: "Document", link: "/xml-documentation/arquivo/document" },
            { text: "Imóveis", link: "/xml-documentation/arquivo/imoveis" },
            { text: "Imóvel", link: "/xml-documentation/arquivo/imovel" },
            {
              text: "Especificações das Tags",
              link: "/xml-documentation/arquivo/especificacoes/especificacoes-tags",
            },
            {
              text: "Tag Descritivo",
              link: "/xml-documentation/arquivo/especificacoes/especificacoes-descritivo",
            },
            {
              text: "Tag de Fotos",
              link: "/xml-documentation/arquivo/especificacoes/especificacoes-fotos",
            },
            {
              text: "Tag Área Comum",
              link: "/xml-documentation/arquivo/especificacoes/especificacoes-area-comum",
            },
            {
              text: "Tag Área Privativa",
              link: "/xml-documentation/arquivo/especificacoes/especificacoes-area-privativa",
            },
          ],
        },
        {
          text: "Dados Suportados",
          collapsed: false,
          items: [
            {
              text: "Imóveis Suportados",
              link: "/xml-documentation/arquivo/dados-suportados/imoveis-suportados",
            },
            {
              text: "Residencial",
              link: "/xml-documentation/arquivo/dados-suportados/residencial",
            },
            {
              text: "Comercial",
              link: "/xml-documentation/arquivo/dados-suportados/comercial",
            },
            {
              text: "Estados Suportados",
              link: "/xml-documentation/arquivo/dados-suportados/estados-suportados",
            },
          ],
        },
      ],
      "/vehicle-api-documentation/": [
        {
          text: "Considerações Iniciais",
          collapsed: true,
          items: [
            {
              text: "Inicio",
              link: "/vehicle-api-documentation/01-consideracoes-iniciais/",
            },
            {
              text: "Ambiente de testes (UPDATED)",
              link: "/vehicle-api-documentation/01-consideracoes-iniciais/test-environment",
            },
            {
              text: "Ambiente de produção",
              link: "/vehicle-api-documentation/01-consideracoes-iniciais/production-environment",
            },
            {
              text: "Autenticação",
              link: "/vehicle-api-documentation/01-consideracoes-iniciais/authentication",
            },
            {
              text: "Limite de requisições",
              link: "/vehicle-api-documentation/01-consideracoes-iniciais/limit-requests",
            },
            {
              text: "Status de respostas das requisições",
              link: "/vehicle-api-documentation/01-consideracoes-iniciais/status-request",
            },
            {
              text: "Paginação e busca",
              link: "/vehicle-api-documentation/01-consideracoes-iniciais/pagination-and-search",
            },
          ],
        },
        {
          text: "Fluxo de execução da requisição (NEW)",
          collapsed: true,
          items: [
            {
              text: "Inicio",
              link: "/vehicle-api-documentation/05-previsao-execucao/",
            },
          ],
        },
        {
          text: "Veículos",
          collapsed: true,
          items: [
            { text: "Inicio", link: "/vehicle-api-documentation/02-veiculos/" },
            {
              text: "Endpoints",
              link: "/vehicle-api-documentation/02-veiculos/vehicle-endpoints",
            },
            {
              text: "Endpoints paginados",
              link: "/vehicle-api-documentation/02-veiculos/vehicle-endpoints-paginated",
            },
            {
              text: "Objeto para criação e edição do veículo",
              link: "/vehicle-api-documentation/02-veiculos/vehicle-object",
            },
            {
              text: "Objeto de retorno /vehicles/:reference",
              link: "/vehicle-api-documentation/02-veiculos/vehicle-return-object",
            },
          ],
        },
        {
          text: "Cliente",
          collapsed: true,
          items: [
            { text: "Inicio", link: "/vehicle-api-documentation/03-cliente/" },
            {
              text: "Endpoints",
              link: "/vehicle-api-documentation/03-cliente/client-endpoints",
            },
            {
              text: "Objeto de informações do plano",
              link: "/vehicle-api-documentation/03-cliente/plan-information-object",
            },
          ],
        },
        {
          text: "Publicação",
          collapsed: true,
          items: [
            {
              text: "Inicio",
              link: "/vehicle-api-documentation/04-publicacao/",
            },
            {
              text: "Endpoints",
              link: "/vehicle-api-documentation/04-publicacao/publication-endpoints",
            },
            {
              text: "Objeto de informações da publicação",
              link: "/vehicle-api-documentation/04-publicacao/publication-information-object",
            },
          ],
        },
      ],
      "/lead-documentation/": [
        {
          text: "Guia",
          collapsed: false,
          items: [
            {
              text: "Introdução",
              link: "/lead-documentation/guide/introducao",
            },
            { text: "Começando", link: "/lead-documentation/guide/comecando" },
            {
              text: "Fluxo de Integração",
              link: "/lead-documentation/guide/fluxo",
            },
          ],
        },
        {
          text: "API Reference",
          collapsed: false,
          items: [
            {
              text: "Autenticação",
              link: "/lead-documentation/api/autenticacao",
            },
            {
              text: "Webhook - Veículos",
              link: "/lead-documentation/api/veiculos",
            },
            {
              text: "Webhook - Imóveis",
              link: "/lead-documentation/api/imoveis",
            },
          ],
        },
        {
          text: "Recursos",
          collapsed: false,
          items: [
            { text: "FAQ", link: "/lead-documentation/recursos/faq" },
            { text: "Suporte", link: "/lead-documentation/recursos/suporte" },
          ],
        },
      ],
      "/partner-api-documentation/": [
        {
          text: "Considerações iniciais",
          collapsed: false,
          items: [
            {
              text: "Início",
              link: "/partner-api-documentation/01-consideracoes-iniciais/",
            },
            {
              text: "Ambiente de testes",
              link: "/partner-api-documentation/01-consideracoes-iniciais/test-environment",
            },
            {
              text: "Ambiente de produção",
              link: "/partner-api-documentation/01-consideracoes-iniciais/production-environment",
            },
            {
              text: "Autenticação",
              link: "/partner-api-documentation/01-consideracoes-iniciais/authentication",
            },
            {
              text: "Limite de requisições",
              link: "/partner-api-documentation/01-consideracoes-iniciais/limit-requests",
            },
            {
              text: "Status de respostas das requisições",
              link: "/partner-api-documentation/01-consideracoes-iniciais/status-request",
            },
            {
              text: "Formato de datas",
              link: "/partner-api-documentation/01-consideracoes-iniciais/date-format",
            },
          ],
        },
        {
          text: "Como o CRM funciona",
          collapsed: false,
          items: [
            {
              text: "Início",
              link: "/partner-api-documentation/02-como-o-crm-funciona/",
            },
            {
              text: "O caminho do lead",
              link: "/partner-api-documentation/02-como-o-crm-funciona/ciclo-do-lead",
            },
            {
              text: "Tarefas e anotações",
              link: "/partner-api-documentation/02-como-o-crm-funciona/tarefas-e-anotacoes",
            },
            {
              text: "O que parece defeito e não é",
              link: "/partner-api-documentation/02-como-o-crm-funciona/o-que-parece-defeito",
            },
          ],
        },
        {
          text: "Leads",
          collapsed: true,
          items: [
            { text: "Início", link: "/partner-api-documentation/03-leads/" },
            {
              text: "Endpoint",
              link: "/partner-api-documentation/03-leads/lead-endpoints",
            },
            {
              text: "Objeto do lead",
              link: "/partner-api-documentation/03-leads/lead-object",
            },
          ],
        },
        {
          text: "Planos",
          collapsed: true,
          items: [
            { text: "Início", link: "/partner-api-documentation/04-planos/" },
            {
              text: "Endpoint",
              link: "/partner-api-documentation/04-planos/plan-endpoints",
            },
            {
              text: "Objeto da faixa",
              link: "/partner-api-documentation/04-planos/plan-object",
            },
          ],
        },
        {
          text: "Resultado da ligação",
          collapsed: true,
          items: [
            {
              text: "Início",
              link: "/partner-api-documentation/05-resultado-da-ligacao/",
            },
            {
              text: "Endpoint",
              link: "/partner-api-documentation/05-resultado-da-ligacao/call-result-endpoints",
            },
            {
              text: "Objeto de envio",
              link: "/partner-api-documentation/05-resultado-da-ligacao/call-result-object",
            },
            {
              text: "Idempotência",
              link: "/partner-api-documentation/05-resultado-da-ligacao/idempotency",
            },
          ],
        },
        {
          text: "Fluxo recomendado",
          collapsed: true,
          items: [
            {
              text: "Início",
              link: "/partner-api-documentation/06-fluxo-recomendado/",
            },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "facebook", link: "https://www.facebook.com/ChavesNaMao" },
      { icon: "instagram", link: "https://www.instagram.com/chavesnamao/" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/company/chavesnamao/",
      },
      { icon: "youtube", link: "https://www.youtube.com/ChavesNaMao" },
    ],
    footer: {
      message: "Documentação das integrações da Chaves na Mão",
      copyright: "Copyright © 2026 Chaves na Mão",
    },
  },
});
