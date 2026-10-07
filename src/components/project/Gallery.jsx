import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import DeviceFrame from "./DeviceFrame";

export default function Gallery({ shots, title }) {
  const [open, setOpen] = useState(null);
  const closeRef = useRef(null);
  const count = shots.length;

  const go = useCallback((d) => setOpen((i) => (i === null ? i : (i + d + count) % count)), [count]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, go]);

  const phones = shots.filter((s) => s.device === "phone");
  const desktops = shots.filter((s) => s.device !== "phone");
  const idx = (s) => shots.indexOf(s);

  const Item = ({ s }) => (
    <figure>
      <DeviceFrame device={s.device} src={s.src} alt={`${title}: ${s.caption}`} onClick={() => setOpen(idx(s))} />
      <figcaption className="mt-4 font-mono text-[0.78rem] text-[#b9abcb]">{s.caption}</figcaption>
    </figure>
  );

  return (
    <>
      {desktops.length > 0 && (
        <div className="grid gap-10 md:grid-cols-2">
          {desktops.map((s, i) => (
            <div key={s.src} className={i === 0 && desktops.length % 2 === 1 ? "md:col-span-2" : ""}>
              <Item s={s} />
            </div>
          ))}
        </div>
      )}
      {phones.length > 0 && (
        <div className={`grid gap-10 sm:grid-cols-2 lg:grid-cols-3 ${desktops.length ? "mt-14" : ""}`}>
          {phones.map((s) => (
            <Item key={s.src} s={s} />
          ))}
        </div>
      )}

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Captura de tela: ${shots[open].caption}`}
          className="fixed inset-0 z-[100] flex flex-col bg-ink/95 backdrop-blur-sm"
          onClick={() => setOpen(null)}
        >
          <div className="flex items-center justify-between px-5 py-4" onClick={(e) => e.stopPropagation()}>
            <p className="font-mono text-[0.8rem] text-lilac">
              {open + 1}/{count} · {shots[open].caption}
            </p>
            <button ref={closeRef} type="button" onClick={() => setOpen(null)} aria-label="Fechar" className="p-2 hover:text-amber">
              <X size={26} />
            </button>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6">
            {count > 1 && (
              <button
                type="button"
                aria-label="Anterior"
                className="absolute left-2 z-10 rounded-full bg-ink-raised/90 p-3 hover:text-amber md:left-6"
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
              >
                <ChevronLeft size={26} />
              </button>
            )}
            <img
              src={shots[open].src}
              alt={`${title}: ${shots[open].caption}`}
              className="max-h-full max-w-full overflow-auto rounded-[4px] border border-lilac/30 object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            {count > 1 && (
              <button
                type="button"
                aria-label="Próxima"
                className="absolute right-2 z-10 rounded-full bg-ink-raised/90 p-3 hover:text-amber md:right-6"
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
              >
                <ChevronRight size={26} />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
