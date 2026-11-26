import { contacto } from "@/content/proyecto";

export type Interes = "invertir" | "operar";

/** Link a WhatsApp con el mensaje precargado según el interés; null si no hay número cargado. */
export function whatsappUrl(interes: Interes = "operar"): string | null {
  const numero = contacto.whatsapp.replace(/\D/g, "");
  if (!numero) return null;
  return `https://wa.me/${numero}?text=${encodeURIComponent(contacto.mensajes[interes])}`;
}
