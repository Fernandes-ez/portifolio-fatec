/* Chave horizontal que faz a transição entre as bandas; a ponta aponta para o título. */
export default function Edge({ at = 0.1 }) {
  const w = 1440;
  const b = 64;
  const x = Math.round(w * at);
  const line = `M0 ${b}H${x - 64}C${x - 20} ${b} ${x} ${b - 10} ${x} 4C${x} ${b - 10} ${x + 20} ${b} ${x + 64} ${b}H${w}`;
  return (
    <svg className="edge" viewBox={`0 0 ${w} 72`} preserveAspectRatio="none" aria-hidden="true">
      <path d={`${line}V72H0Z`} className="edge-fill" />
      <path d={line} className="edge-line" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
