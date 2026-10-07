# Portfólio acadêmico e profissional · Enzo Fernandes Dantas

SPA em **React + Tailwind CSS + Lucide React** (Vite), no sistema visual do ezf.tech: bandas tinta/papel/violeta, chave `{ }` como motivo, Unbounded + Instrument Sans + JetBrains Mono.

- **Home**: foto e nome, GitHub/LinkedIn/currículo, dados do curso (FATEC Zona Leste), experiência (Talk2buy), cursos de extensão, idiomas, competências e cards dos 5 projetos.
- **`/projeto/:id`**: descrição, tecnologias, repositórios, capturas de tela, minha participação e navegação entre semestres.

## Rodar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # gera dist/
npm run preview
```

Deploy estático: **GitHub Pages** (workflow em `.github/workflows/deploy.yml`, publica a cada push na `main`), Vercel (`vercel.json`) e Netlify (`public/_redirects`) já têm o fallback de SPA.

No GitHub Pages o site fica em `https://<usuário>.github.io/<repositório>/`; o caminho base vem da variável `VITE_BASE`, definida no workflow. Para testar localmente o build de Pages: `VITE_BASE=/portifolio-fatec/ npm run build`.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Dados pessoais, formação, experiência, idiomas, competências | `src/data/profile.js` |
| **Cursos de extensão** (nome, local, instituição, carga horária, período) | `extensionCourses` em `src/data/profile.js` |
| Projetos, textos de participação, screenshots | `src/data/projects.js` |
| **Foto** | `public/images/enzo.jpg` (sem ela aparece o monograma `{EF}`) |

## Sobre as capturas de tela

Geradas rodando os projetos localmente (arquivos em `public/screenshots`):

- **1º semestre**: site estático real.
- **2º semestre (2Buku)**: servidor Node.js real com MySQL/MariaDB e o banco do repositório. Capas do catálogo são de demonstração (a API do Google Books não estava acessível).
- **3º/5º (Center Pet)** e **4º (Swaply web)**: apps reais (Expo/React Native Web e Vite) com uma **API simulada**, pois o MongoDB não estava acessível. Pets, ONGs e cursos exibidos são dados de demonstração.
- **APIs** (Center Pet e Swaply): painel montado a partir das rotas reais do código.

Textos de "participação" baseados no histórico de commits dos repositórios; revise-os e ajuste conforme sua memória do que fez.
