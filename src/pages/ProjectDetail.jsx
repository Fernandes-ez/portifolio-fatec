import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Info } from "lucide-react";
import Edge from "../components/ui/Edge";
import Brace from "../components/ui/Brace";
import { GithubIcon } from "../components/ui/Icons";
import Gallery from "../components/project/Gallery";
import ApiPanel from "../components/project/ApiPanel";
import { projects, getProject, semesterLabel } from "../data/projects";
import { profile } from "../data/profile";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProject(id);

  useEffect(() => {
    if (project) document.title = `${project.title} | ${profile.shortName}`;
  }, [project]);

  if (!project) return <Navigate to="/404" replace />;

  const i = projects.indexOf(project);
  const prev = projects[i - 1];
  const next = projects[i + 1];
  const { participation: part } = project;

  return (
    <>
      {/* ------------------------------------------------------------ hero */}
      <section className="band band-ink pt-14 md:pt-[72px]">
        <Brace className="absolute bottom-[160px] left-[-20px] top-12 hidden w-[clamp(70px,10vw,150px)] text-lilac opacity-50 md:block" />
        <div className="container-page relative">
          <Link to="/#projetos" className="text-link inline-flex items-center gap-2 font-mono text-[0.8rem]">
            <ArrowLeft size={14} /> todos os projetos
          </Link>

          <p className="kicker mt-10">
            {semesterLabel(project.semester)} · {project.period}
          </p>
          <h1 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] font-normal leading-[1.03] tracking-[-0.05em]">
            {project.title}
          </h1>
          <p className="mt-4 font-display text-[clamp(1rem,1.8vw,1.35rem)] font-light tracking-[-0.03em] text-lilac">
            {project.tagline}
          </p>

          <div className="mt-12 grid gap-12 lg:grid-cols-[7fr_5fr]">
            <div>
              <h2 className="font-mono text-[0.78rem] text-amber">descrição do projeto</h2>
              <p className="muted mt-4 max-w-[62ch] text-[1.08rem]">{project.description}</p>

              <h2 className="mt-10 font-mono text-[0.78rem] text-amber">tecnologias usadas</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <li key={s} className="tag !text-white/90">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="self-start rounded-[2px] border border-lilac/25 bg-white/[0.04] p-6">
              <h2 className="font-mono text-[0.78rem] text-amber">código no GitHub</h2>
              <ul className="mt-5 space-y-3">
                {project.repos.map((r) => (
                  <li key={r.url}>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 rounded-[2px] border border-lilac/25 px-4 py-3.5 transition-colors hover:border-amber hover:bg-white/5"
                    >
                      <span className="flex items-center gap-3 font-mono text-[0.86rem]">
                        <GithubIcon size={18} /> {r.label}
                      </span>
                      <ExternalLink size={16} className="text-amber transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="muted mt-5 font-mono text-[0.74rem]">{part.commits} de {part.totalCommits} commits identificados no histórico</p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ screenshots */}
      <section id="telas" className="band band-ink !pt-8 md:!pt-8">
        <div className="container-page">
          <p className="kicker">Projeto em funcionamento</p>
          <h2 className="title">Capturas de tela</h2>

          {project.api && (
            <div className="mt-12">
              <ApiPanel api={project.api} />
            </div>
          )}

          <div className={project.api ? "mt-16" : "mt-12"}>
            <Gallery shots={project.screenshots} title={project.title} />
          </div>

          <p className="mt-12 flex max-w-3xl gap-3 border-l-2 border-amber pl-4 text-[0.88rem] text-[#b9abcb]">
            <Info size={18} className="mt-0.5 shrink-0 text-amber" />
            {project.captureNote}
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------- participação */}
      <section id="participacao" className="band band-paper">
        <Edge at={0.1} />
        <div className="container-page grid gap-14 lg:grid-cols-[5fr_7fr]">
          <div>
            <p className="kicker">Minha participação</p>
            <h2 className="title">O que eu construí neste projeto</h2>
            <p className="muted mt-6 max-w-[48ch] text-[1.05rem]">{part.summary}</p>
          </div>

          <div>
            <ul className="space-y-4">
              {part.bullets.map((b) => (
                <li key={b} className="flex gap-4 border-b border-[color:var(--line)] pb-4">
                  <span className="mt-1 font-mono text-violet">→</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 font-mono text-[0.78rem] text-violet">tecnologias aplicadas</h3>
            <dl className="mt-5 grid gap-px overflow-hidden rounded-[2px] border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2">
              {part.tech.map(([name, use]) => (
                <div key={name} className="bg-paper p-5">
                  <dt className="font-display text-[0.98rem] tracking-[-0.03em]">{name}</dt>
                  <dd className="muted mt-1 text-[0.9rem]">{use}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- navegação */}
      <section className="band band-ink !pb-24">
        <Edge at={0.43} />
        <div className="container-page grid gap-6 md:grid-cols-2">
          {prev ? (
            <Link to={`/projeto/${prev.id}`} className="group border border-lilac/25 p-6 transition-colors hover:border-amber">
              <span className="flex items-center gap-2 font-mono text-[0.76rem] text-lilac">
                <ArrowLeft size={14} /> {semesterLabel(prev.semester)}
              </span>
              <span className="mt-2 block font-display text-[1.25rem] tracking-[-0.03em]">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/projeto/${next.id}`} className="group border border-lilac/25 p-6 text-right transition-colors hover:border-amber">
              <span className="flex items-center justify-end gap-2 font-mono text-[0.76rem] text-lilac">
                {semesterLabel(next.semester)} <ArrowRight size={14} />
              </span>
              <span className="mt-2 block font-display text-[1.25rem] tracking-[-0.03em]">{next.title}</span>
            </Link>
          ) : (
            <Link to="/#contato" className="group border border-lilac/25 p-6 text-right transition-colors hover:border-amber">
              <span className="flex items-center justify-end gap-2 font-mono text-[0.76rem] text-lilac">
                fim da trajetória <ArrowRight size={14} />
              </span>
              <span className="mt-2 block font-display text-[1.25rem] tracking-[-0.03em]">Entrar em contato</span>
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
