import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Edge from "../ui/Edge";
import { projects, semesterLabel } from "../../data/projects";

export default function Portfolio() {
  return (
    <section id="projetos" className="band band-ink">
      <Edge at={0.1} />
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="kicker">Portfólio de projetos</p>
          <h2 className="title">Um projeto por semestre, do front-end ao back-end</h2>
          <p className="muted mt-6">
            Cada card abre uma página com descrição, tecnologias, repositórios, capturas de tela do projeto
            em funcionamento e a minha participação.
          </p>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p) => (
            <li key={p.id} className="group">
              <Link
                to={`/projeto/${p.id}`}
                className="flex h-full flex-col overflow-hidden rounded-[2px] border border-lilac/25 bg-ink-raised transition-all duration-300 hover:-translate-y-1 hover:border-lilac/70 hover:shadow-[0_20px_60px_-20px_rgba(138,18,180,0.55)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#120a1a]">
                  <img
                    src={p.screenshots[0].src}
                    alt={`Captura de tela do projeto ${p.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 bg-ink/85 px-3 py-1 font-mono text-[0.74rem] text-lilac backdrop-blur">
                    {semesterLabel(p.semester)} · {p.period}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="flex items-start justify-between gap-3 font-display text-[1.3rem] font-normal tracking-[-0.03em]">
                    {p.title}
                    <ArrowUpRight
                      size={20}
                      className="mt-1 shrink-0 text-amber transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </h3>
                  <p className="mt-1 text-[0.92rem] text-lilac">{p.tagline}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.stack.slice(0, 5).map((s) => (
                      <li key={s} className="tag">
                        {s}
                      </li>
                    ))}
                    {p.stack.length > 5 && <li className="tag">+{p.stack.length - 5}</li>}
                  </ul>
                  <span className="mt-auto pt-6 font-mono text-[0.78rem] text-amber">ver projeto →</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
