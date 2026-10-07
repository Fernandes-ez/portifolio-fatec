import Edge from "../ui/Edge";
import Brace from "../ui/Brace";
import { languages, skills } from "../../data/profile";

export default function Languages() {
  return (
    <section id="idiomas" className="band band-violet">
      <Edge at={0.43} />
      <div className="container-page">
        <p className="kicker">Idiomas e competências</p>
        <h2 className="title">Idiomas, linguagens e ferramentas do dia a dia</h2>

        <div className="mt-14 grid gap-14 lg:grid-cols-[4fr_7fr]">
          <div>
            <h3 className="font-mono text-[0.78rem] text-amber">idiomas</h3>
            <ul className="mt-6 space-y-7">
              {languages.map((l) => (
                <li key={l.name}>
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-[1.15rem] tracking-[-0.03em]">{l.name}</span>
                    <span className="font-mono text-[0.78rem] text-amber">{l.level}</span>
                  </div>
                  <div
                    className="mt-3 h-[3px] bg-white/20"
                    role="progressbar"
                    aria-label={`${l.name}: ${l.level}`}
                    aria-valuenow={l.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="h-full bg-amber" style={{ width: `${l.value}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative pl-6 md:pl-14">
            <Brace className="absolute bottom-0 left-0 top-0 h-full w-8 text-lilac opacity-70 md:w-12" />
            <h3 className="font-mono text-[0.78rem] text-amber">competências</h3>
            <ul className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {skills.map((g) => (
                <li key={g.group}>
                  <p className="font-display text-[0.98rem] tracking-[-0.03em]">{g.group}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {g.items.map((i) => (
                      <li key={i} className="tag !text-white/90">
                        {i}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
