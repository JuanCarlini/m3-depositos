/*
  Planta esquemática de una unidad: el rectángulo (frente x fondo) y el portón como un hueco en el
  frente. Todas las plantas usan la misma escala (la de la unidad más grande), así se pueden comparar
  entre sí. Las medidas son provisorias (PH) hasta tener los planos.
*/
export function UnitPlan({
  frente,
  fondo,
  porton,
  escala,
  label,
}: {
  frente: number;
  fondo: number;
  porton: number;
  /** Frente y fondo máximos entre todas las unidades: fijan la escala común. */
  escala: { frente: number; fondo: number };
  label: string;
}) {
  const W = 300, H = 180, pad = 28;
  const k = Math.min((W - pad * 2) / escala.frente, (H - pad * 2) / escala.fondo);
  const w = frente * k, h = fondo * k, x = (W - w) / 2, y = (H - h) / 2 - 6;
  const p = porton * k, px = x + (w - p) / 2;
  return (
    <svg className="plan" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label}>
      <path className="plan__wall" d={`M${px} ${y + h} H${x} V${y} H${x + w} V${y + h} H${px + p}`} />
      <path className="plan__gate" d={`M${px} ${y + h} H${px + p}`} />
      <text className="plan__dim" x={x + w / 2} y={y + h + 20} textAnchor="middle">{frente} m</text>
      <text className="plan__dim" x={x + w + 8} y={y + h / 2 + 4}>{fondo} m</text>
    </svg>
  );
}

/* Cartel de señalética del manual (N 01, raya, palabra y flecha), hecho en tipografía.
   Es un link: la flecha lleva a lo que el cartel señala. */
export function Cartel({ codigo, numero, palabra, href }: { codigo: string; numero: string; palabra: string; href: string }) {
  return (
    <a className="cartel" href={href} aria-label={`Ver las ${palabra.toLowerCase()}`}>
      <span className="cartel__code" aria-hidden="true">{codigo}</span>
      <span className="cartel__num" aria-hidden="true">{numero}</span>
      <span className="cartel__rule" aria-hidden="true" />
      <span className="cartel__word" aria-hidden="true">{palabra}</span>
      {/* Flecha de cartel como la del manual: cabeza en L de trazo grueso y vástago diagonal con
          corte recto, dibujados como formas rellenas para que la unión quede limpia. */}
      <svg className="cartel__arrow" viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
        <path d="M29 11h5v23H11v-5h18z" />
        <polygon points="8.77,5.23 32.77,29.23 29.23,32.77 5.23,8.77" />
      </svg>
    </a>
  );
}
