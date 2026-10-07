const color = {
  GET: "text-emerald-300",
  POST: "text-amber",
  PUT: "text-sky-300",
  PATCH: "text-lilac",
  DELETE: "text-rose-300",
};

/** Painel visual dos endpoints reais da API (extraídos do código das rotas). */
export default function ApiPanel({ api }) {
  const total = api.groups.reduce((n, g) => n + g.routes.length, 0);
  return (
    <div className="overflow-hidden rounded-[6px] border border-lilac/30 bg-[#0e0716] shadow-[0_30px_80px_-30px_rgba(138,18,180,0.55)]">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-lilac/20 bg-ink-raised px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <i className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <i className="h-2.5 w-2.5 rounded-full bg-white/20" />
        </span>
        <span className="font-mono text-[0.8rem] text-white">{api.name}</span>
        <span className="font-mono text-[0.74rem] text-[#b9abcb]">{total} endpoints · base {api.base}</span>
      </div>

      <p className="border-b border-lilac/10 px-5 py-3 font-mono text-[0.74rem] text-lilac">{api.stack}</p>

      <div className="grid gap-px bg-lilac/10 md:grid-cols-2">
        {api.groups.map((g) => (
          <section key={g.name} className="bg-[#0e0716] p-5">
            <h4 className="font-mono text-[0.78rem] text-lilac">
              <span className="text-white/40">{"{ "}</span>
              {g.name}
              <span className="text-white/40">{" }"}</span>
            </h4>
            <ul className="mt-3 space-y-1.5 font-mono text-[0.78rem]">
              {g.routes.map(([m, path]) => (
                <li key={m + path} className="flex gap-3">
                  <span className={`w-[3.4rem] shrink-0 font-medium ${color[m]}`}>{m}</span>
                  <span className="break-all text-white/85">
                    {api.base}
                    {path}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t border-lilac/10 px-5 py-4">
        <span className="mr-2 font-mono text-[0.74rem] text-[#b9abcb]">models</span>
        {api.models.map((m) => (
          <span key={m} className="rounded-[2px] border border-lilac/30 px-2.5 py-1 font-mono text-[0.74rem] text-lilac">
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}
