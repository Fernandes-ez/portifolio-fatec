import Edge from "../ui/Edge";
import { GraduationCap, CalendarRange, MapPin, Flag } from "lucide-react";
import { education } from "../../data/profile";

export default function Education() {
  const items = [
    { icon: GraduationCap, label: "Faculdade", value: education.institution },
    { icon: MapPin, label: "Local", value: education.location },
    { icon: CalendarRange, label: "Início", value: education.start },
    { icon: Flag, label: "Conclusão", value: education.end === "Presente" ? "Em andamento" : education.end },
  ];
  return (
    <section id="formacao" className="band band-paper">
      <Edge at={0.14} />
      <div className="container-page grid gap-12 lg:grid-cols-[5fr_7fr]">
        <div>
          <p className="kicker">Formação acadêmica</p>
          <h2 className="title">Graduação em {education.course}</h2>
        </div>
        <div>
          <p className="muted max-w-[52ch] text-[1.08rem]">
            Curso superior de tecnologia da FATEC Zona Leste, com foco em desenvolvimento para web, mobile e
            back-end. Os projetos integradores de cada semestre estão reunidos na seção de portfólio.
          </p>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-[2px] border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2">
            {items.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 bg-paper p-6">
                <Icon size={20} className="mt-1 shrink-0 text-violet" />
                <div>
                  <dt className="font-mono text-[0.74rem] text-violet">{label}</dt>
                  <dd className="mt-1 font-medium">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
          <p className="muted mt-5 font-mono text-[0.78rem]">
            {education.start} – {education.end}
          </p>
        </div>
      </div>
    </section>
  );
}
