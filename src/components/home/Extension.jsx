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
            {extensionCourses.map((c) => (
              <li key={c.name} className="rounded-[2px] border border-[color:var(--line)] bg-white/60 p-7">
                <h3 className="font-display text-[1.15rem] tracking-[-0.03em]">{c.name}</h3>
                <dl className="mt-5 grid grid-cols-2 gap-4 text-[0.92rem]">
                  <div><dt className="font-mono text-[0.72rem] text-violet">Local</dt><dd>{c.place}</dd></div>
                  <div><dt className="font-mono text-[0.72rem] text-violet">Instituição</dt><dd>{c.institution}</dd></div>
                  <div><dt className="font-mono text-[0.72rem] text-violet">Carga horária</dt><dd>{c.hours}</dd></div>
                  <div><dt className="font-mono text-[0.72rem] text-violet">Período</dt><dd>{c.period}</dd></div>
                </dl>
              </li>
            ))}
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
