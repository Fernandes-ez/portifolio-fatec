/**
 * Projetos por semestre. Os textos de "participação" foram escritos a partir do
 * histórico de commits dos repositórios (autoria do Enzo sob os aliases
 * Fernandes-ez / fernandes-ez / fernandes / Enzo Fernandes / efernades).
 * Ajuste livremente: o site lê tudo daqui.
 *
 * Screenshots: arquivos em /public/screenshots (gerados rodando os apps).
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
      { src: "/screenshots/s1-home.webp", device: "desktop", caption: "Home: escolha entre conta de água e de luz" },
      { src: "/screenshots/s1-agua.webp", device: "desktop", caption: "Conta de água: recomendações por faixa de consumo" },
      { src: "/screenshots/s1-luz.webp", device: "desktop", caption: "Conta de luz: dicas de economia por faixa" },
    ],
    captureNote: "Capturas reais: o site estático foi servido localmente e fotografado em um navegador.",
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
    id: "2buku",
    semester: 2,
    period: "2024.2",
    title: "2Buku",
    tagline: "Plataforma de troca de livros usados",
    description:
      "Plataforma para facilitar a troca de livros usados, promovendo a leitura, a sustentabilidade e a conexão entre leitores. Os usuários navegam pelo catálogo, enviam propostas de troca ao dono do livro, que é notificado por e-mail e pode aceitar ou recusar; com a troca confirmada, os contatos são enviados por e-mail para combinarem a logística. Integra a API do Google Books (busca), IBGE (localidades), Nodemailer (notificações) e Cloudinary (imagens).",
    stack: ["Node.js", "Express", "MySQL", "Handlebars/EJS", "Bootstrap", "Nodemailer", "Cloudinary", "Google Books API"],
    repos: [{ label: "2Buku.com", url: "https://github.com/Celegattodev/2Buku.com" }],
    screenshots: [
      { src: "/screenshots/s2-login.webp", device: "desktop", caption: "Entrada: login e cadastro" },
      { src: "/screenshots/s2-catalogo.webp", device: "desktop", caption: "Catálogo: mais populares e novidades" },
      { src: "/screenshots/s2-perfil.webp", device: "desktop", caption: "Perfil do usuário com “Meus Livros”" },
    ],
    captureNote:
      "Capturas reais: o servidor Node.js rodou localmente com MySQL/MariaDB e o banco do repositório. Capas e dados do catálogo são de demonstração, pois a API do Google Books não é acessível no ambiente de captura.",
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
      { src: "/screenshots/s3-home.webp", device: "phone", caption: "App: home com destaque de pets e ONGs" },
      { src: "/screenshots/s3-catalogo.webp", device: "phone", caption: "App: catálogo com busca e filtros" },
      { src: "/screenshots/s3-login.webp", device: "phone", caption: "App: login e fluxos de cadastro" },
    ],
    api: {
      name: "center-pet-api",
      base: "/api",
      stack: "Express 4 · Mongoose 8 · JWT · bcrypt · Nodemailer · Firebase Admin · New Relic",
      groups: [
        { name: "auth", routes: [["POST", "/auth/login"], ["POST", "/auth/logout"], ["POST", "/auth/forgot-password"], ["POST", "/auth/reset-password"]] },
        { name: "adopters", routes: [["POST", "/adopters/register"], ["GET", "/adopters"], ["GET", "/adopters/:adopterId"], ["PATCH", "/adopters/editProfile/:id"], ["PATCH", "/adopters/updateSafeAdopter"], ["DELETE", "/adopters/delete/:adopterId"]] },
        { name: "ongs", routes: [["POST", "/ongs/register"], ["GET", "/ongs"], ["GET", "/ongs/:id"], ["PATCH", "/ongs/editProfile/:id"], ["DELETE", "/ongs/delete/:id"]] },
        { name: "pets", routes: [["POST", "/pets/register"], ["GET", "/pets"], ["GET", "/pets/by-ong/:ongId"], ["GET", "/pets/:petId"], ["PATCH", "/pets/update/:petId"], ["DELETE", "/pets/delete/:petId"]] },
        { name: "adoptions", routes: [["POST", "/adoptions/create"], ["GET", "/adoptions"], ["GET", "/adoptions/by-ong/:ongId"], ["POST", "/adoptions/accept/:id"], ["POST", "/adoptions/reject/:id"], ["PATCH", "/adoptions/update/:id"], ["DELETE", "/adoptions/:id"]] },
        { name: "emails", routes: [["POST", "/emails/welcome/adopter"], ["POST", "/emails/welcome/ong"], ["POST", "/emails/delete/adopter"], ["POST", "/emails/delete/ong"]] },
      ],
      models: ["adopter", "ong", "pet", "adoption", "passwordResetToken"],
    },
    captureNote:
      "Capturas reais do app (Expo/React Native Web) rodando localmente. Pets e ONGs exibidos são dados de demonstração servidos por uma API simulada, pois o banco MongoDB não estava acessível no ambiente de captura. O painel da API é montado a partir das rotas reais do código.",
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
      { src: "/screenshots/s4-dashboard.webp", device: "desktop", caption: "Web: catálogo de cursos e estatísticas" },
      { src: "/screenshots/s4-login.webp", device: "desktop", caption: "Web: login" },
    ],
    api: {
      name: "swaply-api",
      base: "/api",
      stack: "Express 4 · Mongoose 7 · JWT · Passport (Google) · Helmet · Joi · node-cron · Stripe · Jitsi",
      groups: [
        { name: "auth", routes: [["POST", "/auth/register"], ["POST", "/auth/login"], ["POST", "/auth/refresh-token"], ["GET", "/auth/verify-token"], ["POST", "/auth/forgot-password"], ["POST", "/auth/reset-password"], ["GET", "/auth/google"], ["POST", "/auth/logout"]] },
        { name: "courses", routes: [["GET", "/courses"], ["GET", "/courses/popular"], ["GET", "/courses/featured"], ["GET", "/courses/categories"]] },
        { name: "users", routes: [["GET", "/users/profile"], ["POST", "/users/avatar"], ["GET", "/users/credits/balance"], ["GET", "/users/favorites"], ["GET", "/users/enrolled-courses"], ["GET", "/users/teaching-courses"], ["GET", "/users/calendar"], ["GET", "/users/reviews/stats"], ["POST", "/users/become-instructor"]] },
        { name: "notifications", routes: [["GET", "/notifications"], ["GET", "/notifications/unread-count"], ["PUT", "/notifications/:id/read"], ["PUT", "/notifications/mark-all-read"], ["DELETE", "/notifications/clear-all"]] },
        { name: "classes · instructors", routes: [["GET", "/classes/history"], ["GET", "/instructors/:id/calendar"]] },
        { name: "stats", routes: [["GET", "/stats"], ["GET", "/stats/courses"], ["GET", "/stats/users"]] },
      ],
      models: ["User", "Course", "Class", "ScheduledClass", "Enrollment", "InstructorAvailability", "Review", "Payment", "Notification", "PlatformFeedback"],
    },
    captureNote:
      "Capturas reais da interface web (Vite) rodando localmente. Os cursos e números exibidos são dados de demonstração servidos por uma API simulada, pois o banco MongoDB não estava acessível no ambiente de captura. O painel da API é montado a partir das rotas reais do código.",
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
      { src: "/screenshots/s3-pet.webp", device: "phone", caption: "Detalhes do pet" },
      { src: "/screenshots/s5-register-ong.webp", device: "phone", caption: "Cadastro de ONG" },
      { src: "/screenshots/s3-ongs.webp", device: "phone", caption: "ONGs em destaque" },
    ],
    captureNote:
      "Capturas reais do app (Expo/React Native Web) rodando localmente, com pets e ONGs de demonstração servidos por uma API simulada. O logotipo oficial não está versionado no repositório e foi substituído por um texto.",
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
