import { useState } from "react";
import { profile } from "../../data/profile";

/** Foto do aluno em máscara de arco. Sem foto em /public/images, mostra o monograma. */
export default function Avatar({ className = "" }) {
  const [failed, setFailed] = useState(false);
  const initials = profile.shortName
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <figure
      className={`relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-t-[999px] rounded-b-[2px] border border-lilac/40 bg-ink-raised ${className}`}
    >
      {failed ? (
        <div
          role="img"
          aria-label={`Monograma de ${profile.name}`}
          className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_50%_30%,rgba(138,18,180,0.55),rgba(27,16,38,0)_70%)]"
        >
          <span className="font-display text-7xl font-light tracking-[-0.06em] text-white">
            <span className="font-mono text-lilac">{"{"}</span>
            {initials}
            <span className="font-mono text-lilac">{"}"}</span>
          </span>
        </div>
      ) : (
        <img
          src={profile.photo}
          alt={`Foto de ${profile.name}`}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </figure>
  );
}
