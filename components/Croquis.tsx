/* Croquis de la esquina Wilde y Mendoza con el predio marcado. Esquemático, sin escala:
   reemplazar por el implantación oficial cuando esté. */
export function Croquis({ calleA, calleB }: { calleA: string; calleB: string }) {
  return (
    <svg className="croquis" viewBox="0 0 520 220" role="img" aria-label={`Croquis de la esquina ${calleA} y ${calleB} con el predio de M3 Depósitos`}>
      <path className="croquis__calle" d="M0 150 H520" />
      <path className="croquis__calle" d="M170 0 V220" />
      <text className="croquis__nombre" x="300" y="154">{calleA.toUpperCase()}</text>
      <text className="croquis__nombre" x="176" y="40" transform="rotate(90 176 40)">{calleB.toUpperCase()}</text>
      <rect className="croquis__lote" x="200" y="24" width="150" height="96" />
      <text className="croquis__lote-txt" x="214" y="78">M3</text>
    </svg>
  );
}
