// As capturas ficam em src/assets/screenshots e entram no bundle do Vite (nome com hash,
// caminho base correto em qualquer deploy).
const files = import.meta.glob("../assets/screenshots/*.webp", { eager: true, query: "?url", import: "default" });
const shot = (name) => files[`../assets/screenshots/${name}.webp`];

/**
 * Projetos por semestre. Os textos de "participação" foram escritos a partir do
 * histórico de commits dos repositórios (autoria do Enzo sob os aliases
 * Fernandes-ez / fernandes-ez / fernandes / Enzo Fernandes / efernades).
 * Ajuste livremente: o site lê tudo daqui.
 *
 * Screenshots: arquivos em /src/assets/screenshots (gerados rodando os apps).
 * - device "desktop" | "phone" define a moldura exibida.
 */

export const projects = [
  /* ------------------------------------------------------------------ 1º */
  {
    id: "projeto-integrador-dw",
    semester: 1,
    period: "2024.1",
    title: "Controle de Água e Luz",
    tagline: "Projeto Integrador de Desenvolvimento Web",
    description:
      "Site para ajudar pessoas a controlarem os gastos com contas de água e luz. A landing page apresenta o tema, as empresas fornecedoras de São Paulo (Sabesp e Enel), páginas de recomendações por faixa de consumo (m³ de água e kWh de energia), além de telas de login, cadastro e “sobre nós”. Desenvolvido em grupo de quatro pessoas, aplicando os fundamentos de lógica e desenvolvimento web.",
    stack: ["HTML5", "CSS3", "JavaScript", "Git/GitHub"],
    repos: [{ label: "ProjetoIntegrador-DW", url: "https://github.com/ArtuTuin/ProjetoIntegrador-DW" }],
    screenshots: [
      { src: shot("s1-home"), device: "desktop", caption: "Home: escolha entre conta de água e de luz" },
      { src: shot("s1-agua"), device: "desktop", caption: "Conta de água: recomendações por faixa de consumo" },
      { src: shot("s1-luz"), device: "desktop", caption: "Conta de luz: dicas de economia por faixa" },
    ],
    participation: {
      summary:
        "Atuei no front-end do projeto: construí a landing page inicial e as páginas internas, cuidando de estrutura semântica, estilos e imagens, e organizei o código com Git em equipe.",
      bullets: [
        "Landing page (home) com a divisão água × luz, navegação e rodapé com links para Sabesp e Enel.",
        "Estilização responsiva com CSS3 (layout, fundos temáticos, cards expansíveis nas páginas de recomendação).",
        "Páginas de login, cadastro e sobre nós, com formulários e tratamento visual dos campos.",
        "Tratamento e organização dos assets de imagem (ícones, plano de fundo, logotipo).",
        "Versionamento colaborativo: commits, resolução de conflitos e revisão do README do grupo.",
      ],
      tech: [
        ["HTML5", "Estrutura semântica das páginas e formulários"],
        ["CSS3", "Layout, tema visual e componentes expansíveis"],
        ["JavaScript", "Interações da interface"],
        ["Git/GitHub", "Trabalho em equipe e controle de versão"],
      ],
      commits: 9,
      totalCommits: 25,
    },
  },

  /* ------------------------------------------------------------------ 2º */
  {
    id: "buku",
    semester: 2,
    period: "2024.2",
    title: "Buku",
    tagline: "Plataforma de troca de livros usados",
    description:
      "Plataforma para facilitar a troca de livros usados, promovendo a leitura, a sustentabilidade e a conexão entre leitores. Os usuários navegam pelo catálogo, enviam propostas de troca ao dono do livro, que é notificado por e-mail e pode aceitar ou recusar; com a troca confirmada, os contatos são enviados por e-mail para combinarem a logística. Integra a API do Google Books (busca), IBGE (localidades), Nodemailer (notificações) e Cloudinary (imagens).",
    stack: ["Node.js", "Express", "MySQL", "Handlebars/EJS", "Bootstrap", "Nodemailer", "Cloudinary", "Google Books API"],
    repos: [{ label: "2Buku.com", url: "https://github.com/Celegattodev/2Buku.com" }],
    screenshots: [
      { src: shot("s2-login"), device: "desktop", caption: "Entrada: login e cadastro" },
      { src: shot("s2-catalogo"), device: "desktop", caption: "Catálogo: mais populares e novidades" },
      { src: shot("s2-perfil"), device: "desktop", caption: "Perfil do usuário com “Meus Livros”" },
    ],
    participation: {
      summary:
        "Fui responsável pelo back-end em Node.js/Express e pela camada de dados em MySQL, além do sistema de e-mails transacionais que sustenta o fluxo de trocas.",
      bullets: [
        "Modelagem e manutenção do banco MySQL (usuários, livros, favoritos, imagens) e da conexão com o servidor.",
        "Rotas de autenticação e CRUD de usuários: cadastro, login com bcrypt, sessões, recuperação e alteração de senha.",
        "Notificações por e-mail com Nodemailer e templates EJS: conta criada, livro solicitado, status da troca, dados alterados, conta excluída.",
        "Notificações de atividade (propostas recebidas, aceitas e recusadas) e mensagens de erro para exclusão de conta.",
        "Integração com APIs externas (Google Books, IBGE, Cloudinary) e configuração de deploy (Procfile).",
      ],
      tech: [
        ["Node.js + Express", "Servidor, rotas e middlewares de autenticação"],
        ["MySQL", "Schema relacional, consultas e integridade"],
        ["Nodemailer + EJS", "E-mails transacionais com templates"],
        ["bcrypt + sessions", "Hash de senhas e sessões persistentes"],
        ["Cloudinary / Google Books / IBGE", "Imagens, busca de livros e localidades"],
      ],
      commits: 36,
      totalCommits: 78,
    },
  },

  /* ------------------------------------------------------------------ 3º */
  {
    id: "center-pet",
    semester: 3,
    period: "2025.1",
    title: "Center Pet",
    tagline: "Plataforma de adoção para ONGs",
    description:
      "Plataforma para ONGs divulgarem animais para adoção e para adotantes encontrarem o pet ideal com segurança. A API Node.js/Express com MongoDB oferece CRUDs de adotantes, ONGs, pets e adoções (com fluxo de aceite/recusa), autenticação JWT, recuperação de senha e e-mails transacionais. O aplicativo mobile consome a API e apresenta catálogo com filtros, perfil de ONGs, formulário de adoção e painel de estatísticas.",
    stack: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Nodemailer", "Firebase Admin", "React Native", "Expo"],
    repos: [
      { label: "center-pet-api", url: "https://github.com/Center-Pet/center-pet-api" },
      { label: "center-pet-mobile", url: "https://github.com/Center-Pet/center-pet-mobile" },
    ],
    screenshots: [
      { src: shot("s3-home"), device: "phone", caption: "App: home com destaque de pets e ONGs" },
      { src: shot("s3-catalogo"), device: "phone", caption: "App: catálogo com busca e filtros" },
      { src: shot("s3-login"), device: "phone", caption: "App: login e fluxos de cadastro" },
    ],
    participation: {
      summary:
        "Desenvolvi a API REST do Center Pet do zero, da conexão com o banco ao fluxo de adoção e e-mails, versionando as entregas de forma incremental (0.0.1 → 0.7.4).",
      bullets: [
        "Estrutura do projeto, conexão com MongoDB (Mongoose) e separação de ambientes por variáveis (.env por ambiente).",
        "CRUD completo de adotantes, ONGs e pets, incluindo listagem por ONG, filtros e atualização parcial (PATCH).",
        "Fluxo de adoção: solicitação, aceite e recusa, com validações de regra de negócio no controller e no middleware.",
        "Autenticação JWT com blacklist de tokens no logout e recuperação de senha por token temporário.",
        "E-mails transacionais com templates (boas-vindas, solicitação, adoção aprovada/recusada, exclusão de conta).",
        "Integração com o app mobile e front responsivo para múltiplos dispositivos.",
      ],
      tech: [
        ["Node.js + Express", "Rotas REST, controllers e middlewares"],
        ["MongoDB + Mongoose", "Modelos de adotante, ONG, pet e adoção"],
        ["JWT + bcrypt", "Autenticação, autorização e hash de senha"],
        ["Nodemailer", "Templates e envio de e-mails"],
        ["Firebase Admin / New Relic", "Integrações de serviço e observabilidade"],
      ],
      commits: 50,
      totalCommits: 67,
    },
  },

  /* ------------------------------------------------------------------ 4º */
  {
    id: "swaply",
    semester: 4,
    period: "2025.2",
    title: "Swaply",
    tagline: "Ecossistema de troca de conhecimentos",
    description:
      "Plataforma onde pessoas ensinam e aprendem usando um sistema de créditos (1 crédito = 1 hora de aula). A API em Node.js/Express e MongoDB cobre autenticação (JWT e Google OAuth), cursos, agendamento de aulas com videoconferência (Jitsi/Zoom), pagamentos, notificações por e-mail e in-app, avaliações e estatísticas. A interface web em React 19 + Vite segue Atomic Design, com tema escuro e recursos de acessibilidade.",
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Stripe", "Jitsi", "React 19", "Vite", "Jest", "Docker"],
    repos: [
      { label: "swaply-api", url: "https://github.com/Swaply-Conhecimento/swaply-api" },
      { label: "swaply-web", url: "https://github.com/Swaply-Conhecimento/swaply-web" },
    ],
    screenshots: [
      { src: shot("s4-dashboard"), device: "desktop", caption: "Web: catálogo de cursos e estatísticas" },
      { src: shot("s4-login"), device: "desktop", caption: "Web: login" },
    ],
    participation: {
      summary:
        "Atuei nas duas pontas do Swaply: no back-end (autenticação, notificações, agendamento, favoritos, feedback e e-mails) e no front-end React (páginas, tema escuro, acessibilidade e roteamento por URL).",
      bullets: [
        "Autenticação e segurança: verificação de token, tratamento de erros, validação com Joi e cadastro assíncrono com envio de e-mail em segundo plano.",
        "Agendamento de aulas, calendário do usuário e lembretes automáticos por jobs (cron) com templates de e-mail.",
        "Integração com Jitsi: geração de token e criação de reuniões para as aulas ao vivo.",
        "Funcionalidades de favoritos, endpoints de estatísticas e sistema de feedback (avaliação da plataforma e dos cursos) com notificações in-app e por e-mail.",
        "Front-end: Dashboard, EditProfile, PlatformReview, modais de curso, toasts, tema escuro e acessibilidade (aria, teclado, controle de fonte, filtro para daltonismo).",
        "Roteamento por URL direta e redirecionamento pós-login, com rewrite configurado para deploy na Vercel.",
      ],
      tech: [
        ["Node.js + Express", "Controllers, services e rotas da API"],
        ["MongoDB + Mongoose", "Modelos de usuário, curso, aula e notificação"],
        ["JWT + Joi + Helmet", "Autenticação, validação e segurança HTTP"],
        ["node-cron + Nodemailer", "Jobs de lembrete e e-mails"],
        ["React 19 + Vite", "Interface em Atomic Design e contextos de estado"],
        ["Jest · Docker · Vercel", "Testes, containerização e deploy"],
      ],
      commits: 31,
      totalCommits: 57,
    },
  },

  /* ------------------------------------------------------------------ 5º */
  {
    id: "center-pet-mobile",
    semester: 5,
    period: "2026.1",
    title: "Center Pet Mobile",
    tagline: "Evolução mobile: UI/UX e consumo avançado de serviços",
    description:
      "Evolução do Center Pet para um aplicativo nativo em React Native + Expo (Expo 54, RN 0.81), estilizado com NativeWind (Tailwind). Foram refinados a navegação (React Navigation), a camada de serviços HTTP, a persistência local (AsyncStorage), o upload de imagens, os filtros de catálogo e um contexto de acessibilidade. Inclui telas para adotantes e ONGs: catálogo, detalhes do pet, formulário de adoção segura, cadastro de pets e ONGs, painel de estatísticas, configurações e recuperação de senha.",
    stack: ["React Native", "Expo 54", "NativeWind", "React Navigation", "AsyncStorage", "Context API", "REST"],
    repos: [{ label: "center-pet-mobile", url: "https://github.com/Center-Pet/center-pet-mobile" }],
    screenshots: [
      { src: shot("s3-pet"), device: "phone", caption: "Detalhes do pet" },
      { src: shot("s5-register-ong"), device: "phone", caption: "Cadastro de ONG" },
      { src: shot("s3-ongs"), device: "phone", caption: "ONGs em destaque" },
    ],
    participation: {
      summary:
        "Participei da evolução do app com a base do projeto anterior e com a Center Pet API que desenvolvi no 3º semestre, que é o backend consumido pelos serviços mobile.",
      bullets: [
        "Incorporação da base web legada (React/Vite) do projeto, mantida como referência para a migração gradual das telas para React Native.",
        "Camada de serviços do app (petService, ongService, adoptionService, authService) consumindo os endpoints da API REST que construí: pets, ONGs, adoções e autenticação JWT.",
        "Contrato da API (rotas, payloads e e-mails transacionais) mantido estável para o app: cadastro, login, recuperação de senha e fluxo de adoção.",
        "Revisão de telas e fluxos de adotantes e ONGs no app, no padrão visual da marca.",
      ],
      tech: [
        ["React Native + Expo", "App multiplataforma Android, iOS e web"],
        ["NativeWind", "Estilização com Tailwind em componentes nativos"],
        ["React Navigation", "Pilha de navegação autenticada e pública"],
        ["AsyncStorage + Context", "Sessão, filtros e acessibilidade persistidos"],
        ["REST / Center Pet API", "Consumo dos endpoints de pets, ONGs e adoções"],
      ],
      commits: 2,
      totalCommits: 6,
    },
  },
];

export const semesterLabel = (n) => `${n}º semestre`;
export const getProject = (id) => projects.find((p) => p.id === id);
