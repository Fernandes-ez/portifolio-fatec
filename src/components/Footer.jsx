import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-lilac/20 bg-ink py-9 text-[0.9rem] text-[#b9abcb]">
      <div className="container-page flex flex-col justify-between gap-2 md:flex-row">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Portfólio acadêmico · FATEC Zona Leste · Desenvolvimento de Software Multiplataforma</span>
      </div>
    </footer>
  );
}
