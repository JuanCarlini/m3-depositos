"use client";

import { useEffect, useRef, type FormEvent } from "react";
import { enviarLead, type Lead } from "@/lib/leads";

/*
  Formulario de consulta. system.js valida en el submit:
  marca aria-invalid, muestra el .field__error de cada campo y mueve el foco al primero.
  Si la validación pasó, este componente manda el lead a Supabase y solo entonces muestra la
  confirmación. La línea de estado no la maneja React: la escriben system.js y este handler.
*/
const ENVIADO = "Tu pedido de disponibilidad está enviado. Te respondemos por email con planos y precios.";
const FALLO = "No pudimos enviar el pedido. Probá de nuevo en un rato; lo que escribiste quedó guardado.";

export function ContactForm({ boton, whatsapp }: { boton: string; whatsapp: string | null }) {
  const status = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // "Pedir planos de naves" (en Unidades) deja escrito el tipo de unidad en el formulario.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[data-unidad]");
      const campo = formRef.current?.elements.namedItem("mensaje") as HTMLTextAreaElement | null;
      if (a && campo && !campo.value.trim()) campo.value = `Me interesan: ${a.dataset.unidad}`;
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  const say = (t: string) => {
    if (status.current) status.current.textContent = t;
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    // system.js ya frenó el envío si había campos para corregir.
    if (e.nativeEvent.defaultPrevented) return;
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) return;
    const datos = new FormData(form);
    if (datos.get("empresa_web")) return; // honeypot: los bots completan este campo oculto
    const lead: Lead = {
      interes: datos.get("interes") === "invertir" ? "invertir" : "operar",
      nombre: String(datos.get("nombre") ?? "").trim(),
      email: String(datos.get("email") ?? "").trim(),
      telefono: String(datos.get("telefono") ?? "").trim(),
      mensaje: String(datos.get("mensaje") ?? "").trim(),
    };
    const boton = form.querySelector<HTMLButtonElement>('[type="submit"]');
    const espera = setTimeout(() => say("Enviando"), 300);
    if (boton) {
      boton.disabled = true;
      boton.setAttribute("aria-busy", "true");
    }
    try {
      await enviarLead(lead);
      clearTimeout(espera);
      form.reset();
      say(ENVIADO);
    } catch {
      clearTimeout(espera);
      say(FALLO);
    } finally {
      if (boton) {
        boton.disabled = false;
        boton.removeAttribute("aria-busy");
      }
    }
  }

  return (
    <form
      className="form consulta__form"
      ref={formRef}
      noValidate
      onSubmit={onSubmit}
      data-fix="{n} campos para corregir."
      aria-label="Pedido de disponibilidad"
    >
      <fieldset className="field interes">
        <legend>Me interesa</legend>
        <div className="interes__opts">
          <label>
            <input type="radio" name="interes" value="operar" defaultChecked required />
            <span>Usar una unidad para mi empresa</span>
          </label>
          <label>
            <input type="radio" name="interes" value="invertir" required />
            <span>Invertir en una unidad</span>
          </label>
        </div>
      </fieldset>
      <div className="field">
        <label htmlFor="f-nombre">Nombre y apellido</label>
        <input id="f-nombre" name="nombre" type="text" autoComplete="name" required minLength={2} maxLength={120} aria-describedby="f-nombre-err" />
        <p className="field__error" id="f-nombre-err" hidden>Escribí tu nombre y apellido.</p>
      </div>
      <div className="field">
        <label htmlFor="f-email">Email</label>
        <input id="f-email" name="email" type="email" autoComplete="email" inputMode="email" required maxLength={200} aria-describedby="f-email-err" />
        <p className="field__error" id="f-email-err" hidden>Escribí un email con @, por ejemplo nombre@empresa.com.ar.</p>
      </div>
      <div className="field">
        <label htmlFor="f-tel">Teléfono (opcional)</label>
        <input id="f-tel" name="telefono" type="tel" autoComplete="tel" inputMode="tel" maxLength={40} />
      </div>
      <div className="field">
        <label htmlFor="f-msg">Qué superficie buscás (opcional)</label>
        <textarea id="f-msg" name="mensaje" autoComplete="off" maxLength={2000} rows={3} />
      </div>
      <div className="field field--check">
        <label>
          <input type="checkbox" name="acepta" required aria-describedby="f-acepta-err" />
          <span>
            Acepto que M3 Depósitos guarde estos datos para responder mi consulta (
            <a className="link" href="/privacidad/">privacidad</a>).
          </span>
        </label>
        <p className="field__error" id="f-acepta-err" hidden>Marcá la casilla para que podamos guardar tu consulta.</p>
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="f-web">No completar</label>
        <input id="f-web" name="empresa_web" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="btn-row">
        <button className="btn btn--primary" type="submit">
          {boton}
        </button>
      </div>
      <p className="form__status" role="status" data-form-status ref={status} suppressHydrationWarning />
      <p className="consulta__nota">
        Te escribe el equipo comercial de M3 Depósitos, sin compromiso.
        {whatsapp && (
          <>
            {" "}Si preferís, <a className="link" href={whatsapp} target="_blank" rel="noopener">escribinos por WhatsApp</a>.
          </>
        )}
      </p>
    </form>
  );
}
