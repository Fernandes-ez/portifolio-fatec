import Edge from "../ui/Edge";
import { BookOpenCheck, MapPin, Landmark, Clock, CalendarRange } from "lucide-react";
import { extensionCourses } from "../../data/profile";

const fields = [
  ["Curso", BookOpenCheck],
  ["Local", MapPin],
  ["Instituição", Landmark],
  ["Carga horária", Clock],
  ["Período", CalendarRange],
];

export default function Extension() {
  return (
    <section id="extensao" className="band band-paper">
      <Edge at={0.43} />
      <div className="container-page">
        <p className="kicker">Cursos de extensão</p>
        <h2 className="title">Formação complementar</h2>

        {extensionCourses.length > 0 ? (
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {extensionCourses.map((c) => {
              const meta = [
                ["Local", c.place],
                ["Instituição", c.institution],
                ["Carga horária", c.hours],
                ["Período", c.period],
              ].filter(([, v]) => v);
              return (
                <li key={c.name} className="flex flex-col rounded-[2px] border border-[color:var(--line)] bg-white/60 p-7">
                  <h3 className="font-display text-[1.2rem] tracking-[-0.03em]">{c.name}</h3>
                  {meta.length > 0 && (
                    <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-3 text-[0.92rem]">
                      {meta.map(([k, v]) => (
                        <div key={k}>
                          <dt className="font-mono text-[0.72rem] text-violet">{k}</dt>
                          <dd>{v}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                  {c.description && <p className="muted mt-5">{c.description}</p>}
                  {c.topics?.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {c.topics.map((t) => (
                        <li key={t} className="tag">
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="mt-12 rounded-[2px] border border-dashed border-violet/50 bg-white/50 p-8">
            <p className="max-w-[56ch] text-[1.02rem]">
              Os cursos de extensão aparecem aqui com nome, local, instituição, carga horária e datas.
              Cadastre-os em <code className="font-mono text-violet">src/data/profile.js</code> (lista{" "}
              <code className="font-mono text-violet">extensionCourses</code>).
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {fields.map(([label, Icon]) => (
                <li key={label} className="tag flex items-center gap-2 !text-[color:var(--muted)]">
                  <Icon size={14} className="text-violet" /> {label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
