import { Link } from "react-router-dom";
import { Download, GraduationCap, MapPin, Building2 } from "lucide-react";
import Brace from "../ui/Brace";
import Avatar from "../ui/Avatar";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { profile, education, experience } from "../../data/profile";
import { projects } from "../../data/projects";

export default function Hero() {
  const totalCommits = projects.reduce((n, p) => n + p.participation.commits, 0);
  const stats = [
    { label: "Projetos", value: String(projects.length), text: "um por semestre, de 2024 a 2026" },
    { label: "Commits", value: `${totalCommits}+`, text: "contribuições identificadas nos repositórios" },
    { label: "Experiência", value: "2 empresas", text: "estágio em desenvolvimento na Talk2buy e suporte de TI no Aqua Fit Club" },
  ];

  return (
    <section id="home" className="band band-ink pt-16 md:pt-[88px]">
      <Brace className="absolute bottom-[180px] left-[-20px] top-12 hidden h-[calc(100%-228px)] w-[clamp(90px,13vw,200px)] text-lilac opacity-[0.55] md:block" />

      <div className="container-page relative grid gap-12 md:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] md:gap-16 md:pl-[clamp(0px,7vw,110px)]">
        <div>
          <p className="kicker">
            {profile.role} · {profile.location}
          </p>
          <h1 className="font-display text-[clamp(2.2rem,5.2vw,4.6rem)] font-normal leading-[1.02] tracking-[-0.05em]">
            {profile.name}
          </h1>
          <p className="mt-6 font-display text-[clamp(1.1rem,2vw,1.6rem)] font-light tracking-[-0.03em] text-lilac">
            Desenvolvedor <span className="braced text-white">{profile.roleFocus}</span>
          </p>
          <p className="muted mt-8 max-w-[52ch] text-[1.1rem]">{profile.summary}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn">
              <GithubIcon /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-line">
              <LinkedinIcon /> LinkedIn
            </a>
            <a href={profile.cv[0].href} download className="text-link inline-flex items-center gap-2">
              <Download size={16} /> Baixar currículo
            </a>
          </div>

          <ul className="mt-9 flex flex-col gap-x-6 gap-y-2 text-[0.88rem] text-[#b9abcb] sm:flex-row sm:flex-wrap">
            <li className="flex items-center gap-2">
              <GraduationCap size={16} className="text-amber" /> {education.institution}
            </li>
            <li className="flex items-center gap-2">
              <Building2 size={16} className="text-amber" /> {experience.company}
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-amber" /> {profile.location}
            </li>
          </ul>
        </div>

        <div className="self-end">
          <Avatar />
          <div className="mt-6 rounded-[2px] border border-lilac/25 bg-white/[0.04] p-5 backdrop-blur">
            <p className="font-mono text-[0.74rem] text-lilac">cursando</p>
            <p className="mt-1 font-display text-[1.05rem] leading-snug tracking-[-0.03em]">{education.course}</p>
            <p className="muted mt-1 text-[0.9rem]">
              {education.institution} · desde {education.start}
            </p>
          </div>
        </div>
      </div>

      <dl className="container-page mt-20 grid gap-8 border-t border-lilac/20 pt-10 md:grid-cols-3 md:pl-[clamp(0px,7vw,110px)]">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="font-mono text-[0.74rem] text-lilac">{s.label}</dt>
            <dd className="mt-2">
              <span className="font-display text-[1.7rem] tracking-[-0.04em]">{s.value}</span>
              <span className="muted mt-1 block text-[0.92rem]">{s.text}</span>
            </dd>
          </div>
        ))}
      </dl>

      <div className="container-page mt-12 md:pl-[clamp(0px,7vw,110px)]">
        <Link to="/#formacao" className="text-link font-mono text-[0.8rem]">
          rolar para conhecer a trajetória ↓
        </Link>
      </div>
    </section>
  );
}
