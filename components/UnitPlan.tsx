/*
  Planta esquemática de una unidad: el rectángulo a escala (frente x fondo), el portón como
  un hueco en el frente y el código de la unidad en Supply Mono, como la señalética del manual.
  Las medidas son provisorias (PH) hasta tener los planos.
*/
export function UnitPlan({
  codigo,
  frente,
  fondo,
  porton,
  label,
}: {
  codigo: string;
  frente: number;
  fondo: number;
  porton: number;
  label: string;
}) {
  const W = 300, H = 180, pad = 28;
  const k = Math.min((W - pad * 2) / frente, (H - pad * 2) / fondo);
  const w = frente * k, h = fondo * k, x = (W - w) / 2, y = (H - h) / 2 - 6;
  const p = porton * k, px = x + (w - p) / 2;
  return (
    <svg className="plan" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label}>
      <path className="plan__wall" d={`M${px} ${y + h} H${x} V${y} H${x + w} V${y + h} H${px + p}`} />
      <path className="plan__gate" d={`M${px} ${y + h} H${px + p}`} />
      <text className="plan__code" x={x + 8} y={y + 24}>{codigo}</text>
      <text className="plan__dim" x={x + w / 2} y={y + h + 20} textAnchor="middle">{frente} m</text>
      <text className="plan__dim" x={x + w + 8} y={y + h / 2 + 4}>{fondo} m</text>
    </svg>
  );
}

/* Cartel de señalética del manual (D 01, raya, palabra y flecha), hecho en tipografía. */
export function Cartel({ codigo, numero, palabra }: { codigo: string; numero: string; palabra: string }) {
  return (
    <div className="cartel" role="img" aria-label={`Cartel de señalética ${codigo} ${numero}, ${palabra}`}>
      <span className="cartel__code">{codigo}</span>
      <span className="cartel__num">{numero}</span>
      <span className="cartel__rule" />
      <span className="cartel__word">{palabra}</span>
      <svg className="cartel__arrow" viewBox="0 0 40 40" aria-hidden="true">
        <path d="M8 8 32 32M32 14v18H14" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="square" />
      </svg>
    </div>
  );
}
