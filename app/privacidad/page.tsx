import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacidad: M3 Depósitos",
  description: "Qué datos guarda M3 Depósitos cuando pedís disponibilidad y para qué los usa.",
};

/* Texto base: revisarlo con el asesor legal del desarrollador antes de publicar. */
export default function Privacidad() {
  return (
    <main id="top" className="legal">
      <div className="wrap measure stack-4" style={{ paddingBlock: "120px 96px" }}>
        <p><Link className="link" href="/">Volver a M3 Depósitos</Link></p>
        <h1>Privacidad</h1>
        <p>
          Cuando completás el formulario de disponibilidad guardamos tu nombre, tu email y, si los
          escribís, tu teléfono y la superficie que buscás. Los usamos solo para responder tu consulta
          y mandarte información de las unidades.
        </p>
        <p>
          No vendemos ni compartimos estos datos con terceros. Podés pedir que los corrijamos o los
          borremos respondiendo cualquiera de nuestros emails.
        </p>
      </div>
    </main>
  );
}
