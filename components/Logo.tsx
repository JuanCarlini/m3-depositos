/*
  Logo de M3 Depósitos según el manual (1.3 Construcción): un módulo x = grosor del marco,
  3x de aire entre el marco y el texto, 4x entre "M3" y "DEPÓSITOS". En CSS (m3.css, .logo)
  todo se mide en x, así que escala sin deformarse. Mínimos: isologotipo 105 px, isotipo 24 px.
  Cuando llegue el SVG oficial del logo, reemplazar este componente por el archivo.
*/
export function Isologotipo({ className = "" }: { className?: string }) {
  return (
    <span className={`logo ${className}`} role="img" aria-label="M3 Depósitos">
      <span aria-hidden="true">M3</span>
      <span aria-hidden="true" className="logo__name">DEPÓSITOS</span>
    </span>
  );
}

export function Isotipo({ className = "" }: { className?: string }) {
  return (
    <span className={`logo logo--iso ${className}`} role="img" aria-label="M3 Depósitos">
      <span aria-hidden="true">M3</span>
    </span>
  );
}
