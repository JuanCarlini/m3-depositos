/*
  Datos del proyecto M3 Depósitos, en un solo lugar.

  PH = placeholder. Todo valor marcado `ph: true` es provisorio: se muestra en la página con
  `data-assumed` y hay que reemplazarlo por el dato real antes de publicar.
  Superficies, cantidades y características: ficha del proyecto (26/11/2026).
*/

export type Dato = { valor: string; ph?: boolean };

export const marca = {
  nombre: "M3 Depósitos",
  ubicacion: {
    calle: "Wilde y Mendoza",
    barrio: "Fisherton",
    ciudad: "Rosario",
  },
};

/* Números del proyecto. */
export const resumen = {
  navesM2: "11.600 m²",
  navesCantidad: "15 unidades",
  navesRango: "200 a 1.300 m²",
  localesM2: "530 m²",
  oficinasM2: "600 m²",
};

/* Tipos de unidad. */
export const unidades: {
  id: string;
  codigo: string;
  nombre: string;
  descripcion: string;
  superficie: Dato;
  detalle: Dato;
  /* Planta esquemática, en metros. PH: tomar del plano tipo de cada unidad. */
  plano: { frente: number; fondo: number; porton: number; ph: boolean };
}[] = [
  {
    id: "naves",
    codigo: "N",
    nombre: "Naves",
    descripcion: `${resumen.navesM2} de naves en ${resumen.navesCantidad}, para operaciones de distinta escala. Se puede incorporar entrepiso.`,
    superficie: { valor: resumen.navesRango },
    detalle: { valor: "Piso de hormigón llaneado para alto tránsito y cerramientos con panel Cover" },
    plano: { frente: 20, fondo: 40, porton: 5, ph: true },
  },
  {
    id: "locales",
    codigo: "L",
    nombre: "Locales comerciales",
    descripcion: "Sobre el frente del desarrollo, para comercio y atención al público.",
    superficie: { valor: `${resumen.localesM2} en total` },
    detalle: { valor: "Office, sanitarios y espacios en doble altura" },
    plano: { frente: 10, fondo: 15, porton: 3, ph: true },
  },
  {
    id: "oficinas",
    codigo: "O",
    nombre: "Oficinas",
    descripcion: "En la planta alta del frente, con áreas comunes y salida a la terraza verde.",
    superficie: { valor: "Módulos de hasta 50 m²" },
    detalle: { valor: `${resumen.oficinasM2} en total, con áreas comunes, servicios y terraza verde accesible` },
    plano: { frente: 7, fondo: 7, porton: 1, ph: true },
  },
];

export const precio: Dato = { valor: "Precio a consultar" };

/* Infraestructura del complejo (ficha del proyecto). */
export const servicios: { titulo: string; texto: string; ph?: boolean }[] = [
  { titulo: "Red de desagües", texto: "Desagües en todo el predio y las calles internas." },
  { titulo: "Alumbrado", texto: "Iluminación en calles internas y accesos." },
  { titulo: "Agua potable", texto: "Conexión de agua potable en cada unidad." },
  { titulo: "Panel Cover", texto: "Cerramientos de las naves con panel Cover." },
  { titulo: "Hormigón llaneado", texto: "Pisos de hormigón llaneado preparados para alto tránsito." },
  { titulo: "Entrepisos", texto: "Posibilidad de incorporar entrepisos en las naves." },
];

/*
  Contacto. WhatsApp y Supabase salen de variables de entorno (ver .env.example):
  si NEXT_PUBLIC_WHATSAPP no está, el botón de WhatsApp no se muestra.
*/
export const contacto = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  mensajes: {
    invertir: "Hola, quiero invertir en una unidad de M3 Depósitos. ¿Me pasan superficies, precios y disponibilidad?",
    operar: "Hola, busco una nave, local u oficina en M3 Depósitos para mi empresa. ¿Me pasan superficies y disponibilidad?",
  },
};
