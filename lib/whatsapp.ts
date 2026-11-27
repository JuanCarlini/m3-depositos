import { contacto } from "@/content/proyecto";

/** Link a WhatsApp con el mensaje precargado; null si no hay número cargado. */
export function whatsappUrl(): string | null {
  const numero = contacto.whatsapp.replace(/\D/g, "");
  return numero ? `https://wa.me/${numero}?text=${encodeURIComponent(contacto.mensaje)}` : null;
}
