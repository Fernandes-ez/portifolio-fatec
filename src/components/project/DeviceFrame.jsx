/** Moldura de navegador (desktop) ou de celular (phone) em torno da captura de tela. */
export default function DeviceFrame({ device, src, alt, onClick, eager = false }) {
  const img = (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      className={device === "phone" ? "block w-full" : "block w-full"}
    />
  );

  const body =
    device === "phone" ? (
      <div className="mx-auto w-full max-w-[260px] rounded-[2.2rem] border border-lilac/40 bg-[#0e0716] p-2.5 shadow-[0_30px_80px_-30px_rgba(138,18,180,0.6)]">
        <div className="mx-auto mb-1.5 h-1.5 w-16 rounded-full bg-white/15" />
        <div className="overflow-hidden rounded-[1.7rem] bg-white">{img}</div>
      </div>
    ) : (
      <div className="overflow-hidden rounded-[6px] border border-lilac/30 bg-[#0e0716] shadow-[0_30px_80px_-30px_rgba(138,18,180,0.55)]">
        <div className="flex items-center gap-1.5 border-b border-lilac/20 bg-ink-raised px-3.5 py-2.5">
          <i className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <i className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <i className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-3 h-4 flex-1 rounded-sm bg-white/[0.07]" />
        </div>
        <div className="max-h-[520px] overflow-hidden">{img}</div>
      </div>
    );

  return (
    <button
      type="button"
      onClick={onClick}
      className="group block w-full cursor-zoom-in text-left transition-transform duration-300 hover:-translate-y-1"
      aria-label={`Ampliar: ${alt}`}
    >
      {body}
    </button>
  );
}
