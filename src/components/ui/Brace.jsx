/* Chave vertical: o símbolo da marca, usada como abertura/fechamento de seções. */
export default function Brace({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 100 400" preserveAspectRatio="none" aria-hidden="true">
      <path
        className="brace-path"
        d="M88 4C46 4 50 36 50 76v84c0 28-16 40-44 40 28 0 44 12 44 40v84c0 40-4 72 38 72"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        pathLength={1}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
