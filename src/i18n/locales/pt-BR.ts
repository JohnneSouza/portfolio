import type { Messages } from "./en-US";

/**
 * Brazilian Portuguese. Typed as `Messages`, so this file must mirror en-US
 * exactly — every key present, none extra. Technology names (Spring, Quarkus,
 * Kubernetes, …) and official credential titles stay untranslated.
 */
const ptBR: Messages = {
  meta: {
    title: "Johnnes Souza | Engenheiro de Backend Sênior",
    htmlLang: "pt-BR",
  },

  nav: {
    about: "Sobre",
    skills: "Habilidades",
    projects: "Projetos",
    experience: "Experiência",
    contact: "Contato",
  },

  theme: {
    choose: "Escolher tema visual",
    menuTitle: "Tema do portfólio",
    chess: "Xadrez",
    rubik: "Cubo de Rubik",
    toggleMode: "Alternar entre modo claro e escuro",
    toggleMenu: "Alternar menu de navegação",
    footerMode: "Modo do tema:",
  },

  language: {
    choose: "Escolher idioma",
  },

  hero: {
    badge: "Disponível para vagas de back-end",
    greeting: "Olá, eu sou",
    role: "Engenheiro de Backend Sênior",
    bio: "Construo e escalo sistemas distribuídos, APIs REST e microsserviços para plataformas de pagamento e e-commerce — principalmente em Java, com Spring, Quarkus, GraphQL e programação reativa. Liderei migrações de arquitetura e iniciativas de escalabilidade para Meta, AB InBev e Domino's Pizza.",
    ctaProjects: "Ver meus projetos",
    ctaContact: "Entrar em contato",
    avatarAlt:
      "Ilustração de um desenvolvedor Java em uma mesa com um notebook, um tabuleiro de xadrez e um cubo de Rubik",
  },

  about: {
    eyebrow: "Sobre mim",
    heading: "Construindo plataformas de pagamento e e-commerce que aguentam escala",
    paragraphs: [
      "Sou um **engenheiro de back-end sênior** com mais de sete anos de experiência construindo sistemas distribuídos, APIs REST e microsserviços para plataformas de pagamento e e-commerce. A maior parte desse trabalho foi em ambientes de alto volume e críticos para correção — o tipo de sistema em que uma falha sutil custa dinheiro de verdade.",
      "Meu dia a dia gira em torno do **ecossistema Java e Spring**, com uso crescente de Quarkus em serviços onde tempo de startup e footprint importam. Liderei migrações para arquiteturas modulares e introduzi um framework nativo de scaling e readiness que reduziu o tempo de scale-up dos serviços de cerca de dois minutos para dois segundos.",
      "Além de escrever código, atuo como **referência técnica** para o meu time — conduzindo sessões de compartilhamento sobre programação reativa e WebFlux, apoiando engenheiros durante migrações e participando da resposta a incidentes em produção para rastrear falhas em serviços distribuídos até a causa raiz.",
    ],
    stats: {
      years: "Anos de experiência",
      clients: "Clientes corporativos",
      scaleup: "Tempo de scale-up",
      domain: "Área principal",
      domainValue: "Pagamentos",
    },
  },

  skills: {
    eyebrow: "Habilidades e ferramentas",
    heading: "As ferramentas que eu uso",
    groups: {
      core: {
        title: "Linguagens",
        skills: ["Java", "Python"],
      },
      frameworks: {
        title: "Backend",
        skills: ["Spring", "Spring WebFlux", "Quarkus", "GraphQL", "APIs REST", "Programação Reativa"],
      },
      data: {
        title: "Bancos de Dados",
        skills: ["MongoDB", "PostgreSQL"],
      },
      devops: {
        title: "Cloud e Infraestrutura",
        skills: ["Docker", "Kubernetes", "GCP"],
      },
      testing: {
        title: "Engenharia",
        skills: [
          "System Design",
          "Escalabilidade",
          "Otimização de Performance",
          "Testes",
          "Resposta a Incidentes",
        ],
      },
      architecture: {
        title: "Sistemas Distribuídos",
        skills: ["Microsserviços", "AMQP", "Arquitetura Orientada a Eventos"],
      },
    },
    proficiencyTitle: "Níveis de proficiência",
    proficiency: {
      java: "Java / Spring",
      reactive: "Programação Reativa / WebFlux",
      microservices: "Microsserviços e APIs",
      databases: "MongoDB / PostgreSQL",
      cloud: "Docker / Kubernetes / GCP",
    },
    approachTitle: "Como eu trabalho",
    approach:
      "Costumo me tornar a referência a que o time recorre nas partes difíceis — programação reativa, escalabilidade e os incidentes de produção que ninguém consegue reproduzir localmente. Prefiro explicar um padrão até ele fazer sentido a deixá-lo como conhecimento tribal.",
  },

  projects: {
    eyebrow: "Trabalhos selecionados",
    heading: "Projetos que entregam, escalam e resolvem",
    codeLink: "Código",
    demoLink: "Demo ao vivo",
    items: {
      chessly: {
        title: "Chessly — Plataforma de Xadrez em Tempo Real",
        description:
          "Uma plataforma de xadrez multiplayer com matchmaking ao vivo, validação de jogadas e histórico de partidas, construída como um back-end Spring Boot + WebSocket que serve um cliente React.",
        tags: ["Spring Boot", "WebSocket", "PostgreSQL", "Redis"],
      },
      cubecommerce: {
        title: "CubeCommerce Microservices",
        description:
          "Um back-end de e-commerce orientado a eventos, dividido em microsserviços de pedidos, estoque e pagamentos que se comunicam via Kafka, implantado no Kubernetes.",
        tags: ["Spring Cloud", "Kafka", "Docker", "Kubernetes"],
      },
      taskforge: {
        title: "TaskForge REST API",
        description:
          "Uma API de gerenciamento de tarefas e projetos de nível produtivo, com autenticação JWT, controle de acesso baseado em papéis, paginação e documentação OpenAPI completa.",
        tags: ["Spring Security", "JWT", "MySQL", "Swagger"],
      },
      solveio: {
        title: "Solve.io — API de Visualização de Algoritmos",
        description:
          "Um serviço Java que resolve e transmite, passo a passo, soluções para quebra-cabeças como o cubo de Rubik (algoritmo de Kociemba) e N-Queens para um cliente web.",
        tags: ["Java", "Algoritmos", "Spring Boot", "SSE"],
      },
      grandmaster: {
        title: "GrandmasterAnalytics",
        description:
          "Um pipeline de dados que ingere arquivos de partidas do chess.com/lichess, calcula estatísticas dos jogadores e expõe insights por meio de uma API GraphQL.",
        tags: ["GraphQL", "Processamento em Lote", "MongoDB", "AWS S3"],
      },
      inventoryhub: {
        title: "InventoryHub",
        description:
          "Um sistema de estoque de armazém com suporte a leitura de código de barras, alertas de estoque baixo e um painel de relatórios, construído sobre arquitetura em camadas com Hibernate.",
        tags: ["Hibernate", "Spring MVC", "PostgreSQL", "JUnit"],
      },
    },
  },

  experience: {
    eyebrow: "Experiência",
    heading: "Sete anos construindo sistemas que precisam estar certos",
    jobs: {
      senior: {
        role: "Engenheiro de Software Sênior",
        company: "CI&T — Domino's Pizza · AB InBev (BEES)",
        period: "Nov 2022 — Atual",
        points: [
          "Integrei microsserviços de back-end por meio de APIs REST e GraphQL como parte de uma expansão e redesign de plataforma multi-país para a Domino's Pizza.",
          "Projetei e liderei um plano de migração que reestruturou vários serviços em uma arquitetura mais limpa e modular, resultando em entregas mais rápidas.",
          "Introduzi um framework nativo de scaling e readiness com Quarkus, reduzindo o tempo de scale-up dos serviços de ~2 minutos para ~2 segundos e diminuindo a demanda de infraestrutura.",
          "Atuei como referência técnica do time em programação reativa, apoiando o desenvolvimento e a resolução de problemas com experiência prática em Java, Spring e WebFlux.",
          "Conduzi treinamentos sobre programação reativa e boas práticas de WebFlux, ajudando os engenheiros a adotar e aplicar padrões reativos.",
        ],
      },
      mid: {
        role: "Desenvolvedor de Software Pleno",
        company: "CI&T — AB InBev (BEES, Plataforma de Revenda B2P)",
        period: "Jun 2021 — Out 2022",
        points: [
          "Implementei a pirâmide completa de testes — unitários, de componente e de integração — fortalecendo a cobertura da plataforma de revenda B2P.",
          "Conduzi code reviews e liderei sessões de transferência de conhecimento, elevando os padrões de engenharia e a cobertura de testes do time.",
        ],
      },
      junior: {
        role: "Desenvolvedor de Software Júnior",
        company: "CI&T — Meta (WhatsApp Pay)",
        period: "Fev 2019 — Jun 2021",
        points: [
          "Contribuí com microsserviços em Java para o WhatsApp Pay, a plataforma de pagamentos P2P da Meta, usando programação reativa.",
          "Implementei funcionalidades, corrigi problemas em nível de serviço e desenvolvi testes de API e de serviço em sistemas de pagamento em produção de grande escala.",
        ],
      },
    },
  },

  education: {
    eyebrow: "Formação e certificações",
    heading: "Formação formal, e ainda estudando",
    educationTitle: "Formação",
    certificationsTitle: "Certificações",
    degrees: {
      postgrad: {
        title: "Pós-graduação em Segurança da Informação",
        place: "Líbano College",
        period: "Em andamento — conclusão prevista Dez 2026",
      },
      bachelor: {
        title: "Bacharelado em Análise e Desenvolvimento de Sistemas",
        place: "Fatec — Faculdade Arthur de Azevedo",
        period: "",
      },
      technical: {
        title: "Graduação em Engenharia Mecatrônica, Robótica e Automação",
        place: "ETEC — Escola Técnica Estadual de São Paulo",
        period: "",
      },
    },
    certificationsEmpty: "As certificações serão listadas aqui conforme eu concluir.",
    /** Nenhuma certificação listada no currículo ainda — preencha quando tiver. */
    certifications: {},
  },

  contact: {
    eyebrow: "Contato",
    heading: "Vamos falar sobre arquitetura de back-end",
    subtext:
      "Tem uma vaga, um projeto, ou só quer conversar sobre arquitetura de back-end? Minha caixa de entrada está sempre aberta.",
    info: {
      email: "E-mail",
      phone: "Telefone",
      location: "Localização",
    },
    locationValue: "São Paulo, Brasil",
    availability:
      "Atualmente aberto a oportunidades sênior de engenharia de back-end, remotas ou híbridas.",
    form: {
      name: "Nome",
      namePlaceholder: "Seu nome",
      email: "E-mail",
      emailPlaceholder: "voce@exemplo.com",
      message: "Mensagem",
      messagePlaceholder: "Conte sobre seu projeto ou vaga...",
      submit: "Enviar mensagem",
      success:
        "Obrigado! Sua mensagem foi registrada — responderei em breve (este formulário é uma demonstração).",
    },
  },

  footer: {
    copyright: "© {year} Johnnes Souza. Construído com React, TypeScript e Tailwind CSS.",
  },
};

export default ptBR;
