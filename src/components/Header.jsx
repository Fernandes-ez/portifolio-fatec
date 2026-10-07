import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/ezTechLogo.png";

const nav = [
  { label: "Formação", to: "/#formacao" },
  { label: "Experiência", to: "/#experiencia" },
  { label: "Extensão", to: "/#extensao" },
  { label: "Idiomas", to: "/#idiomas" },
  { label: "Projetos", to: "/#projetos" },
  { label: "Contato", to: "/#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-lilac/20 bg-ink">
      <div className="container-page flex h-[72px] items-center gap-8">
        <Link to="/" className="shrink-0" aria-label="Página inicial" onClick={() => setOpen(false)}>
          <img src={logo} alt="ezf.tech" className="h-10 w-32 object-cover" />
        </Link>

        <nav className="ml-auto hidden gap-[22px] lg:flex" aria-label="Seções da página">
          {nav.map((i) => (
            <Link key={i.to} to={i.to} className="text-[0.88rem] text-[#b9abcb] transition-colors hover:text-white">
              {i.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/#projetos"
          className="ml-auto hidden border-b border-amber pb-0.5 text-[0.88rem] font-semibold transition-colors hover:text-amber lg:ml-0 lg:block"
        >
          Ver projetos
        </Link>

        <button
          type="button"
          className="ml-auto p-2 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-lilac/20 bg-ink lg:hidden" aria-label="Seções da página">
          <ul className="container-page flex flex-col py-4">
            {nav.map((i) => (
              <li key={i.to}>
                <Link
                  to={i.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-lilac/10 py-3 text-[#b9abcb] hover:text-white"
                >
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
