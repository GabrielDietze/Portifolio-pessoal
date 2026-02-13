/**
 * Traduções da aplicação - Versão Profissional
 * Foco em credibilidade e senioridade
 */

export interface Translations {
  nav: {
    home: string
    experience: string
    skills: string
    projects: string
    contact: string
  }
  hero: {
    badge: string
    title: string
    rolePrefix: string
    role: string
    description: string
    stats: {
      experience: string
      experienceLabel: string
      modules: string
      modulesLabel: string
      projects: string
      projectsLabel: string
    }
    cta: string
    viewWork: string
  }
  experience: {
    label: string
    title: string
    description: string
    items: Array<{
      company: string
      role: string
      period: string
      achievements: string[]
    }>
  }
  skills: {
    label: string
    title: string
    categories: Array<{
      title: string
      items: string[]
    }>
  }
  projects: {
    label: string
    title: string
    description: string
    items: Array<{
      title: string
      description: string
      technologies: string[]
      impact: string[]
      githubUrl?: string
      image?: string
    }>
  }
  contact: {
    label: string
    title: string
    description: string
    email: string
    sendEmailButton: string
    emailSubject: string
    emailBody: string
  }
  about: {
    label: string
    title: string
    paragraphs: string[]
    resumeButton: string
  }
  professionalHighlights: {
    label: string
    title: string
    items: Array<{
      text: string
    }>
  }
  professionalObjective: {
    label: string
    title: string
    paragraphs: string[]
  }
  education: {
    label: string
    title: string
    description: string
    items: Array<{
      course: string
      institution: string
      location: string
      status: string
    }>
  }
}

export const translations: Record<'pt' | 'en', Translations> = {
  pt: {
    nav: {
      home: 'Início',
      experience: 'Experiência',
      skills: 'Habilidades',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      badge: 'Desenvolvedor SAP ABAP',
      title: 'Gabriel Dietze',
      rolePrefix: 'Desenvolvedor',
      role: 'SAP ABAP',
      description:
        'Especialista em desenvolvimento SAP ABAP com foco em soluções empresariais escaláveis. Experiência comprovada em múltiplos módulos SAP, integrações complexas e automação de processos críticos.',
      stats: {
        experience: '',
        experienceLabel: '',
        modules: '',
        modulesLabel: '',
        projects: '',
        projectsLabel: '',
      },
      cta: 'Entre em Contato',
      viewWork: 'Ver Projetos',
    },
    experience: {
      label: 'Experiência Profissional',
      title: 'Trajetória e Conquistas',
      description:
        'Experiência sólida em desenvolvimento SAP ABAP, com foco em entregas de alto impacto e soluções inovadoras.',
      items: [
        {
          company: 'Grupo Ferroeste',
          role: 'Desenvolvedor SAP ABAP',
          period: '2024 - Atualmente',
          achievements: [
            'Desenvolvimento, manutenção e melhoria de soluções em SAP ABAP, incluindo relatórios ALV, funções, serviços, user exits, Enhancements, interfaces, SmartForms e debugging de código, com foco em performance, segurança e aderência às boas práticas SAP.',
            'Atuação nos módulos SD, MM, WM, LE, QM (principais) e FI, PP, PM, BP (apoio), participando ativamente do suporte e evolução dos processos de negócio.',
            'Criação e consumo de APIs REST para integração entre SAP e sistemas externos, garantindo automação e consistência de dados',
            'Análise e otimização de código ABAP e consultas SQL, assegurando escalabilidade e estabilidade',
            'Desenvolvimento de aplicações web integradas ao SAP utilizando Node.js e React',
            'Implementação de impressões industriais (Zebra), certificados de qualidade e telas para coletores de dados',
            'Atuação com Programação Orientada a Objetos (POO), Clean Code e metodologias ágeis',
          ],
        },
        {
          company: 'Loja do Sapo',
          role: 'Estágio em Desenvolvimento de Software',
          period: 'Jan 2024 - Set 2024',
          achievements: [
            'Análise e otimização de processos internos, eliminando gargalos e aumentando produtividade',
            'Manutenção e integração do sistema Zoho com Omie ERP, criando scripts em JavaScript e Node.js',
            'Desenvolvimento de APIs REST e manutenção de bancos de dados para integrações via HTTP e JSON',
            'Reformulação do processo de manutenção de equipamentos, criando setor de qualidade',
            'Refatoração de scripts do Zoho, melhorando segurança, desempenho e eficiência',
          ],
        },
        {
          company: 'Conexus Contabilidade',
          role: 'Estagiário de Suporte de TI',
          period: '2022 - 2023',
          achievements: [
            'Manutenção de computadores e dispositivos, garantindo disponibilidade e desempenho.',
            'Gerenciamento da infraestrutura de TI e administração de sistemas ERP.',
            'Redução do tempo de indisponibilidade e melhoria da eficiência operacional.',
          ],
        },
      ],
    },
    skills: {
      label: 'Competências Técnicas',
      title: 'Tecnologias e Ferramentas',
      categories: [
        {
          title: 'SAP ABAP',
          items: [
            'ALV',
            'SmartForms',
            'BAPIs',
            'Funções',
            'RFC',
            'Enhancements',
            'User Exits',
            'Interfaces',
            'Requests e Transportes',
            'Versionamento de Código',
            'Dicionário de Dados',
            'Debug de código',
            'Análise de dumps',
            'Impressão Zebra',
            'Certificados de Qualidade',
            'Telas para Coletores',
          ],
        },
        {
          title: 'Módulos SAP (Principais)',
          items: [
            'SD (Sales & Distribution)',
            'MM (Materials Management)',
            'WM (Warehouse Management)',
            'LE (Logistics Execution)',
            'QM (Quality Management)',
          ],
        },
        {
          title: 'Módulos SAP (Apoio)',
          items: [
            'FI (Financial Accounting)',
            'PP (Production Planning)',
            'PM (Plant Maintenance)',
            'Business Partner (BP)',
          ],
        },
        {
          title: 'Integrações',
          items: [
            'APIs REST',
            'SAP ↔ Zoho CRM',
            'SAP ↔ Google Maps',
            'SAP ↔ Aplicações Web',
            'HTTP/HTTPS',
            'JSON/XML',
            'Documentação de APIs',
          ],
        },
        {
          title: 'Tecnologias Web',
          items: [
            'Node.js (Express)',
            'React',
            'JavaScript',
            'Java',
            'Python',
            'SQL',
            'MySQL',
            'MongoDB',
          ],
        },
      ],
    },
    projects: {
      label: 'Projetos Destaque',
      title: 'Soluções Implementadas',
      description:
        'Projetos que demonstram expertise técnica e capacidade de entregar soluções de alto impacto.',
      items: [
        {
          title: 'Integração SAP com Zoho CRM',
          description:
            'Integração completa entre SAP e Zoho CRM via APIs REST, utilizando BAPIs e funções ABAP customizadas, responsável pela criação automática de Ordens de Venda, envio e sincronização de dados de clientes, pedidos, produtos, remessas e expedição. Implementação de lógica de pricing, realizando a conversão de preço bruto para líquido com base nas condições da Ordem de Venda (OV), garantindo consistência fiscal e comercial entre os sistemas.',
          technologies: ['SAP ABAP', 'REST API', 'Zoho CRM', 'BAPIs', 'SD', 'LE', 'WM', 'FI'],
          impact: [
            'Automação completa do processo comercial, eliminando lançamentos manuais de Ordens de Venda no SAP.',
            'Automação do cálculo de preços da OV conforme condições de pricing do SAP.',
            'Maior confiabilidade das informações para relatórios e tomada de decisão.',
          ],
          githubUrl: '',
          image: 'sap-zoho',
        },
        {
          title: 'Integração SAP com Google Maps',
          description:
            'Desenvolvimento de uma API de integração entre SAP e Google Maps, responsável pelo cálculo automático de distância, rotas e custos de pedágio, utilizando dados geográficos em tempo real. A solução é integrada diretamente ao SAP, permitindo o melhor cálculo de frete e definição de rotas dentro do próprio sistema, apoiando processos logísticos, decisões operacionais em tempo real e aumentando a eficiência no planejamento de transporte.',
          technologies: ['SAP ABAP', 'Google Maps API', 'REST API', 'SD', 'LE'],
          impact: [
            'Automação do cálculo de frete diretamente no SAP',
            'Redução de custos com transporte e pedágios',
            'Melhoria na tomada de decisões operacionais',
            'Integração robusta via API REST',
          ],
          githubUrl: '',
          image: 'sap-maps',
        },
        {
          title: 'Sistema de Gestão de Senhas SAP',
          description:
            'Aplicação web desenvolvida em React e Node.js, responsável por orquestrar o processo de reset de senhas SAP, incluindo validação de identidade por e-mail, comunicação segura com o SAP e execução de funções ABAP customizadas para alteração de credenciais, em conformidade com as políticas de segurança corporativas. A solução eliminou a necessidade de atendimentos de suporte para reset de senha, reduzindo chamados ao time de TI e aumentando a autonomia e a produtividade dos usuários.',
          technologies: ['SAP ABAP', 'React', 'Node.js', 'REST API'],
          impact: [
            'Automação completa do processo de reset de senhas',
            'Eliminação total do tempo de atendimento',
            'Melhoria na segurança e auditoria',
          ],
          githubUrl: '',
          image: 'sap-password',
        },
        {
          title: 'Reconhecimento Automático de Placas (ALPR)',
          description:
            'Sistema completo de reconhecimento automático de placas veiculares em tempo real utilizando YOLOv11, SORT Tracker e EasyOCR, com pipeline de processamento de imagens (upscaling, filtros, limiarização) e correção heurística de OCR.',
          technologies: ['Python', 'YOLOv11', 'OpenCV', 'EasyOCR', 'SORT', 'Pandas', 'NumPy'],
          impact: [
            'Alta precisão na detecção e rastreamento de veículos e placas em vídeos',
            'OCR robusto mesmo em frames de baixa qualidade graças ao pré-processamento dedicado',
            'Projeto acadêmico avançado demonstrando domínio de visão computacional e PID',
          ],
          githubUrl: 'https://github.com/GabrielDietze/plate-detection',
          image: 'alpr',
        },
        {
          title: 'Clone Netflix (Desafio Elite Dev)',
          description:
            'Aplicação web inspirada na Netflix, desenvolvida como parte do Desafio Elite Dev, responsável por listar, explorar e exibir detalhes de filmes por meio da integração com a API do The Movie Database (TMDB). A aplicação conta com criação e autenticação de usuários, além da funcionalidade de adicionar e gerenciar filmes em uma lista de favoritos, proporcionando uma experiência personalizada. O projeto foi desenvolvido com foco em experiência do usuário (UX), responsividade e organização do front-end.',
          technologies: ['JavaScript', 'HTML', 'CSS', 'TMDB API'],
          impact: [
            'Experiência de navegação semelhante a um streaming moderno, com capas e detalhes de filmes',
            'Fortalecimento de habilidades em consumo de APIs, manipulação de estado e layout responsivo',
            'Projeto visual forte para demonstrar competências em desenvolvimento de interfaces',
          ],
          githubUrl: 'https://github.com/GabrielDietze/Desafio-Elite-Dev',
          image: 'netflix',
        },
        {
          title: 'Compilador em Java',
          description:
            'Compilador implementado em Java puro, sem uso de bibliotecas externas, cobrindo análise léxica, sintática e semântica, além de geração de código.',
          technologies: ['Java', 'Teoria de Compiladores'],
          impact: [
            'Demonstra compreensão profunda de design de linguagens e etapas de compilação',
            'Reforça fundamentos sólidos em algoritmos, estruturas de dados e parsing',
            'Evidencia capacidade de construir sistemas complexos sem depender de frameworks pesados',
          ],
          githubUrl: 'https://github.com/GabrielDietze/Compilador_Java',
          image: 'compiler',
        },
      ],
    },
    contact: {
      label: 'Contato',
      title: 'Vamos Conversar',
      description:
        'Estou sempre aberto a discutir novos projetos, oportunidades de colaboração ou simplesmente trocar ideias sobre tecnologia SAP.',
      email: 'gabrieldietzenovy@gmail.com',
      sendEmailButton: 'Enviar E-mail',
      emailSubject: 'Contato via Portfólio - Oportunidade',
      emailBody: 'Olá Gabriel,\n\nVi seu portfólio e gostaria de conversar sobre uma oportunidade.\n\n',
    },
    about: {
      label: 'Sobre mim',
      title: 'Quem sou eu',
      paragraphs: [
        'Desenvolvedor SAP ABAP com experiência no desenvolvimento, manutenção e evolução de soluções corporativas em ambientes produtivos. Atuação sólida na criação de relatórios ALV, SmartForms, integrações entre sistemas SAP e externos, programação orientada a objetos (OO ABAP) e manipulação de banco de dados, sempre com foco em performance, organização do código e aderência às boas práticas SAP.',
        'Experiência em projetos de melhoria e sustentação, participando desde o entendimento da regra de negócio até a entrega da solução, incluindo análise técnica, desenvolvimento, testes, transporte de requests e suporte pós-implantação.',
        'Vivência com ambientes produtivos, correções emergenciais, melhorias contínuas e demandas críticas de negócio, garantindo estabilidade, rastreabilidade e qualidade das entregas.',
      ],
      resumeButton: 'Currículo PDF',
    },
    professionalHighlights: {
      label: 'Diferenciais',
      title: 'Diferenciais Profissionais',
      items: [
        {
          text: 'Forte comprometimento com qualidade de código, seguindo boas práticas e padrões SAP ABAP, com foco em performance e manutenção.',
        },
        {
          text: 'Facilidade em compreender regras de negócio e processos, traduzindo necessidades funcionais em soluções técnicas eficientes e seguras.',
        },
        {
          text: 'Experiência com análise, manutenção e refatoração de código legado, visando performance, organização e redução de riscos.',
        },
        {
          text: 'Perfil proativo, organizado e orientado a resultados, com foco em entrega de valor e estabilidade dos sistemas.',
        },
        {
          text: 'Comunicação clara e objetiva com áreas técnicas e funcionais, garantindo alinhamento e suporte pós-implantação.',
        },
      ],
    },
    professionalObjective: {
      label: 'Objetivo',
      title: 'Objetivo Profissional',
      paragraphs: [
        'Atuar como Desenvolvedor SAP ABAP em projetos corporativos e ambientes produtivos, participando ativamente da análise técnica e do entendimento das regras de negócio, com foco no desenvolvimento de soluções robustas, escaláveis e com alta performance.',
        'Buscar evolução técnica contínua para assumir responsabilidades mais complexas, contribuindo de forma estratégica para a estabilidade dos sistemas e para os resultados do negócio.',
      ],
    },
    education: {
      label: 'Formação Acadêmica',
      title: 'Educação',
      description: 'Qualificações e formações acadêmicas que complementam minha expertise técnica.',
      items: [
        {
          course: 'Bacharelado em Ciência da Computação',
          institution: 'Dom Helder',
          location: 'BH/MG',
          status: 'Em andamento - 8º Semestre',
        },
        {
          course: 'Técnico em Automação Industrial',
          institution: 'SENAI',
          location: 'Santa Luzia/MG',
          status: 'Concluído',
        },
      ],
    },
  },
  en: {
    nav: {
      home: 'Home',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      badge: 'SAP ABAP Developer',
      title: 'Gabriel Dietze',
      rolePrefix: 'SAP ABAP',
      role: 'Developer',
      description:
        'SAP ABAP development specialist focused on scalable enterprise solutions. Proven experience in multiple SAP modules, complex integrations, and critical process automation.',
      stats: {
        experience: '',
        experienceLabel: '',
        modules: '',
        modulesLabel: '',
        projects: '',
        projectsLabel: '',
      },
      cta: 'Get in Touch',
      viewWork: 'View Work',
    },
    experience: {
      label: 'Professional Experience',
      title: 'Career & Achievements',
      description:
        'Solid experience in SAP ABAP development, focused on high-impact deliveries and innovative solutions.',
      items: [
        {
          company: 'Grupo Ferroeste',
          role: 'SAP ABAP Developer',
          period: '2024 - Present',
          achievements: [
            'Development, maintenance and evolution of SAP ABAP solutions, including ALV reports, function modules, services, user exits, enhancements, interfaces, SmartForms and code debugging, with focus on performance, security and SAP best practices compliance.',
            'Working across SAP modules SD, MM, WM, LE, QM (core) and FI, PP, PM, BP (supporting), actively contributing to business process support and evolution.',
            'Creation and consumption of REST APIs for SAP and external systems integration, ensuring automation and data consistency',
            'Analysis and optimization of ABAP code and SQL queries, ensuring scalability and stability',
            'Development of web applications integrated with SAP using Node.js and React',
            'Implementation of industrial printing (Zebra), quality certificates and screens for data collectors',
            'Working with Object-Oriented Programming (OOP), Clean Code and agile methodologies',
          ],
        },
        {
          company: 'Loja do Sapo',
          role: 'Software Development Intern',
          period: 'Jan 2024 - Sep 2024',
          achievements: [
            'Analysis and optimization of internal processes, eliminating bottlenecks and increasing productivity',
            'Maintenance and integration of Zoho system with Omie ERP, creating scripts in JavaScript and Node.js',
            'Development of REST APIs and database maintenance for integrations via HTTP and JSON',
            'Restructuring of equipment maintenance process, creating quality department',
            'Refactoring of Zoho scripts, improving security, performance and efficiency',
          ],
        },
        {
          company: 'Conexus Contabilidade',
          role: 'IT Support Intern',
          period: '2022 - 2023',
          achievements: [
            'Maintenance of computers and devices, ensuring availability and performance.',
            'Management of IT infrastructure and administration of ERP systems.',
            'Reduction of downtime and improvement of operational efficiency.',
          ],
        },
      ],
    },
    skills: {
      label: 'Technical Skills',
      title: 'Technologies & Tools',
      categories: [
        {
          title: 'SAP ABAP',
          items: [
            'ALV',
            'SmartForms',
            'BAPIs',
            'Functions',
            'RFC',
            'Enhancements',
            'User Exits',
            'Interfaces',
            'Requests & Transports',
            'Code Versioning',
            'Data Dictionary',
            'Code debugging',
            'Dump analysis',
            'Zebra Printing',
            'Quality Certificates',
            'Data Collector Screens',
          ],
        },
        {
          title: 'SAP Modules (Core)',
          items: [
            'SD (Sales & Distribution)',
            'MM (Materials Management)',
            'WM (Warehouse Management)',
            'LE (Logistics Execution)',
            'QM (Quality Management)',
          ],
        },
        {
          title: 'SAP Modules (Supporting)',
          items: [
            'FI (Financial Accounting)',
            'PP (Production Planning)',
            'PM (Plant Maintenance)',
            'Business Partner (BP)',
          ],
        },
        {
          title: 'Integrations',
          items: [
            'REST APIs',
            'SAP ↔ Zoho CRM',
            'SAP ↔ Google Maps',
            'SAP ↔ Web Applications',
            'HTTP/HTTPS',
            'JSON/XML',
            'API documentation',
          ],
        },
        {
          title: 'Web Technologies',
          items: [
            'Node.js (Express)',
            'React',
            'JavaScript',
            'Java',
            'Python',
            'SQL',
            'MySQL',
            'MongoDB',
          ],
        },
      ],
    },
    projects: {
      label: 'Featured Projects',
      title: 'Implemented Solutions',
      description:
        'Projects that demonstrate technical expertise and ability to deliver high-impact solutions.',
      items: [
        {
          title: 'SAP Integration with Zoho CRM',
          description:
            'Complete integration between SAP and Zoho CRM via REST APIs, using BAPIs and custom ABAP functions. Bidirectional synchronization of master data (Business Partner) and transactional data.',
          technologies: ['SAP ABAP', 'REST API', 'Zoho CRM', 'BAPIs', 'SD', 'LE', 'WM'],
          impact: [
            'Automatic master data synchronization',
            '80% reduction in information update time',
            'Elimination of manual errors',
          ],
          githubUrl: '',
          image: 'sap-zoho',
        },
        {
          title: 'SAP Integration with Google Maps',
          description:
            'Distance, route and toll calculation solution integrated with SAP, supporting logistics processes and real-time operational decisions.',
          technologies: ['SAP ABAP', 'Google Maps API', 'REST API', 'SD', 'LE'],
          impact: [
            'Automatic calculation of optimized routes',
            'Reduction in logistics costs',
            'Improved operational decision making',
          ],
          githubUrl: '',
          image: 'sap-maps',
        },
        {
          title: 'SAP Password Management System',
          description:
            'React web application integrated with SAP for password update and reset, including confirmation email sending and use of ABAP security functions.',
          technologies: ['SAP ABAP', 'React', 'Node.js', 'REST API'],
          impact: [
            'Complete automation of password reset process',
            '90% reduction in service time',
            'Improved security and auditing',
          ],
        },

        {
          title: 'Automatic License Plate Recognition (ALPR)',
          description:
            'End-to-end real-time license plate recognition system using YOLOv11, SORT tracking and EasyOCR, with a full image-processing pipeline (upscaling, denoising, sharpening, thresholding) and heuristic corrections for OCR errors.',
          technologies: ['Python', 'YOLOv11', 'OpenCV', 'EasyOCR', 'SORT', 'Pandas', 'NumPy'],
          impact: [
            'High-accuracy detection and tracking of vehicles and license plates in video streams',
            'Robust OCR even in low-quality frames thanks to dedicated preprocessing pipeline',
            'Academic-grade project demonstrating strong skills in computer vision and PID',
          ],
          githubUrl: 'https://github.com/GabrielDietze/plate-detection',
          image: 'alpr',
        },
        {
          title: 'Netflix-like Movie Catalog (Elite Dev Challenge)',
          description:
            'Web application inspired by Netflix that lists and explores movies using The Movie Database (TMDB) API, focusing on UI, responsiveness and clean front-end architecture.',
          technologies: ['JavaScript', 'HTML', 'CSS', 'TMDB API'],
          impact: [
            'Delivers a familiar streaming-style experience with movie covers and details',
            'Strengthens front-end skills in API consumption, state handling and layout',
            'Serves as a solid visual project for demonstrating modern UI development',
          ],
          githubUrl: 'https://github.com/GabrielDietze/Desafio-Elite-Dev',
          image: 'netflix',
        },
        {
          title: 'Java Compiler from Scratch',
          description:
            'Educational compiler implemented in pure Java without external libraries, covering lexical, syntactic and semantic analysis plus code generation.',
          technologies: ['Java', 'Compiler Theory'],
          impact: [
            'Demonstrates deep understanding of language design and compilation stages',
            'Reinforces strong foundations in algorithms, data structures and parsing',
            'Highlights ability to build complex systems without relying on heavy frameworks',
          ],
          githubUrl: 'https://github.com/GabrielDietze/Compilador_Java',
          image: 'compiler',
        },
      ],
    },
    contact: {
      label: 'Contact',
      title: "Let's Talk",
      description:
        'I am always open to discussing new projects, collaboration opportunities or simply exchanging ideas about SAP technology.',
      email: 'gabrieldietzenovy@gmail.com',
      sendEmailButton: 'Send Email',
      emailSubject: 'Contact via Portfolio - Opportunity',
      emailBody: 'Hello Gabriel,\\n\\nI saw your portfolio and would like to talk about an opportunity.\\n\\n',
    },
    about: {
      label: 'About',
      title: 'Who I Am',
      paragraphs: [
        'SAP ABAP Developer with experience in development, maintenance and evolution of corporate solutions in productive environments. Strong performance in creating ALV reports, SmartForms, integrations between SAP and non-SAP systems, object-oriented programming (OO ABAP) and database manipulation, always focusing on performance, code organization and adherence to SAP best practices.',
        'Experience in improvement and maintenance projects, participating from understanding business rules to solution delivery, including technical analysis, development, testing, request transportation and post-implementation support.',
        'Experience with productive environments, emergency corrections, continuous improvements and critical business demands, ensuring stability, traceability and delivery quality.',
      ],
      resumeButton: 'Resume PDF',
    },
    professionalHighlights: {
      label: 'Highlights',
      title: 'Professional Highlights',
      items: [
        {
          text: 'Strong commitment to code quality, following best practices and SAP ABAP standards, with focus on performance and maintenance.',
        },
        {
          text: 'Ease in understanding business rules and processes, translating functional needs into efficient and secure technical solutions.',
        },
        {
          text: 'Experience with analysis, maintenance and refactoring of legacy code, aiming at performance, organization and risk reduction.',
        },
        {
          text: 'Proactive, organized and results-oriented profile, with focus on value delivery and system stability.',
        },
        {
          text: 'Clear and objective communication with technical and functional areas, ensuring alignment and post-implementation support.',
        },
      ],
    },
    professionalObjective: {
      label: 'Objective',
      title: 'Professional Objective',
      paragraphs: [
        'Act as a SAP ABAP Developer in corporate projects and productive environments, actively participating in technical analysis and understanding of business rules, focusing on developing robust, scalable solutions with high performance.',
        'Seek continuous technical evolution to assume more complex responsibilities, contributing strategically to system stability and business results.',
      ],
    },
    education: {
      label: 'Academic Background',
      title: 'Education',
      description: 'Academic qualifications and training that complement my technical expertise.',
      items: [
        {
          course: 'Bachelor of Science in Computer Science',
          institution: 'Dom Helder',
          location: 'BH/MG',
          status: 'In Progress - 8th Semester',
        },
        {
          course: 'Technical Technician in Industrial Automation',
          institution: 'SENAI',
          location: 'Santa Luzia/MG',
          status: 'Completed',
        },
      ],
    },
  },
}

/**
 * Hook para obter as traduções baseado no idioma atual
 */
export const useTranslations = (language: 'pt' | 'en'): Translations => {
  return translations[language]
}
