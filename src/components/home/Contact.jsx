import Edge from "../ui/Edge";
import Brace from "../ui/Brace";
import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { profile } from "../../data/profile";

export default function Contact() {
  const channels = [
    { icon: Mail, label: "E-mail", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "WhatsApp", value: profile.phone, href: profile.phoneLink },
    { icon: GithubIcon, label: "GitHub", value: "github.com/fernandes-ez", href: profile.github },
    { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/fernandes-ez", href: profile.linkedin },
  ];
  return (
    <section id="contato" className="band band-paper">
      <Edge at={0.1} />
      <Brace className="absolute bottom-24 right-[-10px] top-28 hidden h-[calc(100%-13rem)] w-[clamp(60px,8vw,120px)] -scale-x-100 text-violet opacity-50 md:block" />
      <div className="container-page relative">
        <p className="kicker">Contato</p>
        <h2 className="title max-w-[22ch]">
          Vamos conversar sobre <span className="braced !text-violet">oportunidades</span>?
        </h2>
        <p className="muted mt-6 max-w-[52ch]">
          Estou em busca de oportunidades como desenvolvedor back-end júnior. Fale comigo por qualquer um dos canais abaixo.
        </p>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-[2px] border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <li key={label} className="bg-paper">
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 transition-colors hover:bg-white"
              >
                <Icon size={20} className="shrink-0 text-violet" />
                <span>
                  <span className="block font-mono text-[0.72rem] text-violet">{label}</span>
                  <span className="break-all font-medium">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="muted mt-6 flex items-center gap-2 text-[0.9rem]">
          <MapPin size={15} className="text-violet" /> {profile.location}
        </p>
      </div>
    </section>
  );
}
