/**
 * Source of truth for all translatable copy. `Messages` is derived from this
 * object, so every other locale file is type-checked against it — a missing or
 * misspelled key is a compile error, not a blank space in the UI.
 *
 * Conventions:
 *  - `**bold**` inside a string is rendered by <RichText /> in place of inline <strong>.
 *  - `{year}` and friends are placeholders filled in by the component.
 *  - Proper nouns (product names, companies, certifications) stay untranslated
 *    in every locale; they are repeated here so each file is self-contained.
 *  - An empty `period` means the source resume gave no dates; the component
 *    omits the line rather than inventing one.
 */
const enUS = {
  meta: {
    title: "Johnnes Souza | Senior Backend Engineer",
    htmlLang: "en-US",
  },

  nav: {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
  },

  theme: {
    choose: "Choose visual theme",
    menuTitle: "Portfolio theme",
    chess: "Chess",
    rubik: "Rubik's Cube",
    toggleMode: "Toggle dark and light mode",
    toggleMenu: "Toggle navigation menu",
    footerMode: "Theme mode:",
  },

  language: {
    choose: "Choose language",
  },

  hero: {
    badge: "Available for backend roles",
    greeting: "Hi, I'm",
    role: "Senior Backend Engineer",
    bio: "I build and scale distributed systems, REST APIs, and microservices for payment and e-commerce platforms — mostly in Java, with Spring, Quarkus, GraphQL, and reactive programming. I've led architecture migrations and scalability initiatives for Meta, AB InBev, and Domino's Pizza.",
    ctaProjects: "View my projects",
    ctaContact: "Get in touch",
    avatarAlt:
      "Illustration of a Java developer at a desk with a laptop, a chessboard and a Rubik's cube",
  },

  about: {
    eyebrow: "About me",
    heading: "Building payment and e-commerce platforms that hold up at scale",
    paragraphs: [
      "I'm a **senior backend engineer** with over seven years of experience building distributed systems, REST APIs, and microservices for payment and e-commerce platforms. Most of that work has been high-volume and correctness-critical — the kind of system where a subtle failure costs real money.",
      "My day-to-day centers on the **Java and Spring ecosystem**, with growing use of Quarkus for services where startup time and footprint matter. I've led migrations to modular architectures and introduced a native scaling and readiness framework that cut service scale-up time from roughly two minutes to two seconds.",
      "Beyond writing code, I act as a **technical reference** for my team — running knowledge-sharing sessions on reactive programming and WebFlux, supporting engineers through migrations, and joining production incident response to trace distributed-service failures back to their root cause.",
    ],
    stats: {
      years: "Years of experience",
      clients: "Enterprise clients",
      scaleup: "Service scale-up time",
      domain: "Primary domain",
      // A stat whose value is a word rather than a figure, so it lives here with
      // the label instead of in the component's STAT_VALUES.
      domainValue: "Payments",
    },
  },

  skills: {
    eyebrow: "Skills & tools",
    heading: "The tools I reach for",
    groups: {
      core: {
        title: "Languages",
        skills: ["Java", "Python"],
      },
      frameworks: {
        title: "Backend",
        skills: ["Spring", "Spring WebFlux", "Quarkus", "GraphQL", "REST APIs", "Reactive Programming"],
      },
      data: {
        title: "Databases",
        skills: ["MongoDB", "PostgreSQL"],
      },
      devops: {
        title: "Cloud & Infrastructure",
        skills: ["Docker", "Kubernetes", "GCP"],
      },
      testing: {
        title: "Engineering",
        skills: [
          "System Design",
          "Scalability",
          "Performance Optimization",
          "Testing",
          "Incident Response",
        ],
      },
      architecture: {
        title: "Distributed Systems",
        skills: ["Microservices", "AMQP", "Event-Driven Architecture"],
      },
    },
    proficiencyTitle: "Proficiency levels",
    proficiency: {
      java: "Java / Spring",
      reactive: "Reactive Programming / WebFlux",
      microservices: "Microservices & APIs",
      databases: "MongoDB / PostgreSQL",
      cloud: "Docker / Kubernetes / GCP",
    },
    approachTitle: "How I work",
    approach:
      "I tend to become the reference my team turns to for the hard parts — reactive programming, scaling, and the production incidents nobody can reproduce locally. I'd rather explain a pattern until it clicks than let it stay tribal knowledge.",
  },

  projects: {
    eyebrow: "Selected work",
    heading: "Projects that ship, scale, and solve",
    codeLink: "Code",
    demoLink: "Live demo",
    items: {
      chessly: {
        title: "Chessly — Realtime Chess Platform",
        description:
          "A multiplayer chess platform with live matchmaking, move validation, and game history, built as a Spring Boot + WebSocket backend serving a React client.",
        tags: ["Spring Boot", "WebSocket", "PostgreSQL", "Redis"],
      },
      cubecommerce: {
        title: "CubeCommerce Microservices",
        description:
          "An event-driven e-commerce backend split into order, inventory, and payment microservices communicating over Kafka, deployed on Kubernetes.",
        tags: ["Spring Cloud", "Kafka", "Docker", "Kubernetes"],
      },
      taskforge: {
        title: "TaskForge REST API",
        description:
          "A production-grade task & project management API with JWT auth, role-based access control, pagination, and full OpenAPI documentation.",
        tags: ["Spring Security", "JWT", "MySQL", "Swagger"],
      },
      solveio: {
        title: "Solve.io — Algorithm Visualizer API",
        description:
          "A Java service that solves and streams step-by-step solutions for puzzles like the Rubik's cube (Kociemba algorithm) and N-Queens back to a web client.",
        tags: ["Java", "Algorithms", "Spring Boot", "SSE"],
      },
      grandmaster: {
        title: "GrandmasterAnalytics",
        description:
          "A data pipeline that ingests chess.com/lichess game archives, computes player statistics, and exposes insights through a GraphQL API.",
        tags: ["GraphQL", "Batch Processing", "MongoDB", "AWS S3"],
      },
      inventoryhub: {
        title: "InventoryHub",
        description:
          "A warehouse inventory system with barcode scanning support, low-stock alerts, and a reporting dashboard, built on layered architecture with Hibernate.",
        tags: ["Hibernate", "Spring MVC", "PostgreSQL", "JUnit"],
      },
    },
  },

  experience: {
    eyebrow: "Experience",
    heading: "Seven years of systems that have to be right",
    jobs: {
      senior: {
        role: "Senior Software Engineer",
        company: "CI&T — Domino's Pizza · AB InBev (BEES)",
        period: "Nov 2022 — Present",
        points: [
          "Integrated backend microservices through REST and GraphQL APIs as part of a multi-country platform expansion and redesign for Domino's Pizza.",
          "Designed and led a migration plan that restructured several services onto a cleaner, modular architecture, leading to faster feature delivery.",
          "Introduced a native scaling and readiness framework with Quarkus, reducing service scale-up time from ~2 minutes to ~2 seconds and lowering infrastructure requirements.",
          "Served as the team's technical reference for reactive programming, supporting development and troubleshooting with hands-on Java, Spring, and WebFlux experience.",
          "Conducted training sessions on reactive programming and WebFlux best practices, helping engineers adopt and apply reactive development patterns.",
        ],
      },
      mid: {
        role: "Mid-Level Software Developer",
        company: "CI&T — AB InBev (BEES, B2P Resale Platform)",
        period: "Jun 2021 — Oct 2022",
        points: [
          "Implemented the full test pyramid — unit, component, and integration testing — strengthening coverage across the B2P resale platform.",
          "Drove code reviews and led knowledge-transfer sessions, raising engineering standards and test coverage across the team.",
        ],
      },
      junior: {
        role: "Junior Software Developer",
        company: "CI&T — Meta (WhatsApp Pay)",
        period: "Feb 2019 — Jun 2021",
        points: [
          "Contributed to Java-based microservices for WhatsApp Pay, Meta's P2P payment platform, using reactive programming.",
          "Implemented features, fixed service-level issues, and developed API and service tests on production payment systems at large scale.",
        ],
      },
    },
  },

  education: {
    eyebrow: "Education & certifications",
    heading: "Formal training, and still studying",
    educationTitle: "Education",
    certificationsTitle: "Certifications",
    degrees: {
      postgrad: {
        title: "Postgraduate Specialization, Information Security",
        place: "Líbano College",
        period: "In progress — expected Dec 2026",
      },
      bachelor: {
        title: "Bachelor's Degree, Systems Analysis and Development",
        place: "Fatec — College Arthur de Azevedo",
        period: "",
      },
      technical: {
        title: "Engineering Degree, Mechatronics, Robotics and Automation Engineering",
        place: "ETEC — São Paulo State Technical School",
        period: "",
      },
    },
    certificationsEmpty: "Certifications will be listed here as I complete them.",
    /** No certifications listed on the resume yet — fill these in when you have them. */
    certifications: {},
  },

  contact: {
    eyebrow: "Contact",
    heading: "Let's talk backend architecture",
    subtext:
      "Have a role, project, or just want to talk backend architecture? My inbox is always open.",
    info: {
      email: "Email",
      phone: "Phone",
      location: "Location",
    },
    locationValue: "São Paulo, Brazil",
    availability:
      "Currently open to senior backend engineering opportunities, remote or hybrid.",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project or role...",
      submit: "Send message",
      success: "Thanks! Your message has been noted — I'll reply soon (this form is a demo).",
    },
  },

  footer: {
    copyright: "© {year} Johnnes Souza. Built with React, TypeScript & Tailwind CSS.",
  },
};

export default enUS;
export type Messages = typeof enUS;
