import Edge from "../ui/Edge";
import { experience } from "../../data/profile";

export default function Experience() {
  return (
    <section id="experiencia" className="band band-ink">
      <Edge at={0.1} />
      <div className="container-page">
        <p className="kicker">Experiência profissional</p>
        <h2 className="title">
          Código em produção na <span className="braced">{experience.company}</span>
        </h2>
        <p className="muted mt-4 font-mono text-[0.8rem]">{experience.period}</p>

        <ol className="relative mt-14 max-w-4xl border-l border-lilac/30 pl-8">
          {experience.roles.map((r) => (
            <li key={r.title} className="relative pb-14 last:pb-0">
              <span
                className={`absolute -left-[41px] top-2 h-4 w-4 rounded-full border ${
                  r.current ? "border-amber bg-amber" : "border-lilac bg-ink"
                }`}
                aria-hidden="true"
              />
              <p className="font-mono text-[0.78rem] text-lilac">
                {r.period}
                {r.current && <span className="ml-3 text-amber">● atual</span>}
              </p>
              <h3 className="mt-2 font-display text-[1.3rem] font-normal leading-tight tracking-[-0.03em]">
                {r.title}
              </h3>
              <p className="muted mt-4 max-w-[60ch]">{r.description}</p>
              {r.bullets.length > 0 && (
                <ul className="mt-4 space-y-1.5 text-[0.95rem] text-[#d8cfe6]">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="text-amber">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              <ul className="mt-5 flex flex-wrap gap-2">
                {r.stack.map((s) => (
                  <li key={s} className="tag">
                    {s}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
