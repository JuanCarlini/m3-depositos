/*
  Envío de leads a Supabase por su API REST, desde el navegador.
  El sitio es un export estático, así que no hay servidor propio: la tabla `leads` tiene RLS
  y la clave publicable solo puede insertar (ver supabase/migrations). Nunca usar acá la service key.
*/
export type Lead = {
  interes: "invertir" | "operar";
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
};

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const leadsConfigurado = Boolean(URL && KEY);

export async function enviarLead(lead: Lead): Promise<void> {
  if (!leadsConfigurado) throw new Error("Supabase sin configurar");
  const res = await fetch(`${URL}/rest/v1/leads`, {
    method: "POST",
    headers: {
      apikey: KEY,
      Authorization: `Bearer ${KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      ...lead,
      origen: "landing",
      user_agent: navigator.userAgent.slice(0, 300),
    }),
  });
  if (!res.ok) throw new Error(`Supabase ${res.status}`);
}
