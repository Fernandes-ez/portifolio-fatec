/**
 * Dados do aluno (currículo oficial). Edite aqui para atualizar o site.
 * Foto: coloque o arquivo em /public/images/enzo.jpg (se não existir, aparece o monograma).
 */
export const profile = {
  name: "Enzo Fernandes Dantas",
  shortName: "Enzo Fernandes",
  role: "Desenvolvedor Júnior",
  roleFocus: "Back-End",
  location: "São Paulo, Brasil",
  phone: "+55 11 94035-4855",
  phoneLink: "https://wa.me/5511940354855",
  email: "fernandesdenzo223@gmail.com",
  photo: "/images/enzo.jpg",
  github: "https://github.com/fernandes-ez",
  linkedin: "https://www.linkedin.com/in/fernandes-ez/",
  cv: [
    { label: "Currículo (PT)", href: "/docs/Enzo-Fernandes-Curriculo-PT.pdf" },
    { label: "Resume (EN)", href: "/docs/Enzo-Fernandes-Curriculo-EN.pdf" },
  ],
  summary:
    "Desenvolvedor com experiência prática em Node.js, .NET, React e bancos SQL/NoSQL. Construo APIs RESTful, CRUDs completos e integrações entre front-end e back-end, com foco em aplicações responsivas, escaláveis e orientadas à performance.",
};

export const education = {
  institution: "FATEC Zona Leste",
  course: "Desenvolvimento de Software Multiplataforma",
  location: "São Paulo, Brasil",
  start: "01/2024",
  end: "Presente",
  forecast: "Em andamento (conclusão prevista conforme grade do curso)",
};

export const experience = {
  company: "Talk2buy",
  period: "03/2024 – Presente",
  roles: [
    {
      title: "Estagiário de Desenvolvimento de Software",
      period: "07/2024 – Presente",
      current: true,
      description:
        "Desenvolvimento de APIs RESTful e integração com front-end em React/Next.js. Implementação de microsserviços, autenticação e autorização. Otimização de consultas e manipulação de bancos de dados MySQL e MongoDB.",
      bullets: [
        "Implementação de funcionalidades em C# e .NET.",
        "Criação e ajuste de interfaces responsivas com Next.js.",
        "Integração entre front-end e back-end em aplicações de produção.",
      ],
      stack: ["C#", ".NET", "Node.js", "React", "Next.js", "MySQL", "MongoDB"],
    },
    {
      title: "Estagiário de QA",
      period: "03/2024 – 06/2024",
      current: false,
      description:
        "Criação de documentação técnica clara e acessível, testes funcionais e validação de interfaces com aderência ao design.",
      bullets: [],
      stack: ["Testes funcionais", "Documentação"],
    },
  ],
};

/**
 * Cursos de extensão / formação complementar.
 * O currículo não lista cursos de extensão com carga horária; preencha abaixo
 * (name, place, institution, hours, period) e eles aparecem automaticamente no site.
 */
export const extensionCourses = [
  // {
  //   name: "Nome do curso",
  //   place: "Cidade / Online",
  //   institution: "Instituição",
  //   hours: "40h",
  //   period: "01/2025 – 03/2025",
  // },
];

export const languages = [
  { name: "Português", level: "Nativo", value: 100 },
  { name: "Inglês", level: "Avançado", value: 80 },
  { name: "Espanhol", level: "Básico", value: 35 },
];

export const skills = [
  { group: "Linguagens", items: ["JavaScript", "TypeScript", "C#", "Java", "Python", "SQL"] },
  { group: "Back-end", items: ["Node.js", ".NET", "Spring Boot", "Express.js", "APIs RESTful", "Microsserviços"] },
  { group: "Front-end", items: ["HTML5", "CSS3", "React", "Next.js", "Bootstrap", "Tailwind CSS"] },
  { group: "Bancos de dados", items: ["MySQL", "MongoDB", "SQL", "NoSQL"] },
  { group: "Testes", items: ["Jest", "Postman", "K6", "Testes unitários e funcionais"] },
  { group: "Cloud e hospedagem", items: ["Render", "Vercel", "Netlify", "MongoDB Atlas"] },
  { group: "Ferramentas", items: ["Git", "GitHub", "VSCode", "IntelliJ", "Eclipse"] },
];
