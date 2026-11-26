/*
  Datos del proyecto M3 Depósitos, en un solo lugar.

  PH = placeholder. Todo valor marcado `ph: true` es provisorio: se muestra en la página con
  `data-assumed` y hay que reemplazarlo por el dato real antes
  de publicar. Lo que no lleva PH sale del manual de marca (nombre, ubicación, colores).
*/

export type Dato = { valor: string; ph?: boolean };

export const marca = {
  nombre: "M3 Depósitos",
  ubicacion: {
    calle: "Wilde y Mendoza", // del manual de marca (mockup del contenedor)
    barrio: "Fisherton",
    ciudad: "Rosario",
  },
};

/* Superficies y tipos de unidad. PH: todos los números. */
export const unidades: {
  id: string;
  codigo: string;
  nombre: string;
  descripcion: string;
  superficie: Dato;
  detalle: Dato;
  /* Planta esquemática, en metros. PH: tomar del plano tipo de cada unidad. */
  plano: { frente: number; fondo: number; porton: number };
}[] = [
  {
    id: "naves",
    codigo: "N",
    nombre: "Naves",
    descripcion: "Para logística, producción liviana o stock de mayorista. Portón propio sobre la calle interna.",
    superficie: { valor: "300 a 600 m²", ph: true },
    detalle: { valor: "Altura libre 8 m, portón de 4 × 5 m", ph: true },
    plano: { frente: 15, fondo: 30, porton: 4 },
  },
  {
    id: "depositos",
    codigo: "D",
    nombre: "Depósitos",
    descripcion: "Para guardar mercadería, herramientas o archivo, con acceso en vehículo hasta la puerta.",
    superficie: { valor: "60 a 150 m²", ph: true },
    detalle: { valor: "Altura libre 5 m, portón de 3 × 4 m", ph: true },
    plano: { frente: 8, fondo: 12, porton: 3 },
  },
  {
    id: "oficinas",
    codigo: "O",
    nombre: "Oficinas",
    descripcion: "En los pisos del frente, con vista a la calle y entrada separada de la playa de camiones.",
    superficie: { valor: "40 a 90 m²", ph: true },
    detalle: { valor: "Planta libre, baño y office", ph: true },
    plano: { frente: 10, fondo: 7, porton: 1 },
  },
];

/* Rango del hero: sale de la tabla de unidades (la superficie más chica y la más grande),
   así nunca la contradice. */
const extremos = unidades.flatMap((u) => (u.superficie.valor.match(/\d+/g) ?? []).map(Number));
export const rangoHero: Dato = {
  valor: `${Math.min(...extremos)} a ${Math.max(...extremos)} m²`,
  ph: unidades.some((u) => u.superficie.ph),
};

export const precio: Dato = { valor: "Precio a consultar" };

/* Servicios del complejo. PH: confirmar cada uno con el desarrollador. */
export const servicios: { titulo: string; texto: string; ph?: boolean }[] = [
  { titulo: "Acceso controlado", texto: "Un solo ingreso con guardia y registro de cada vehículo que entra y sale.", ph: true },
  { titulo: "Monitoreo las 24 horas", texto: "Cámaras en calles internas, portones y perímetro, con grabación.", ph: true },
  { titulo: "Playa de maniobras", texto: "Calles internas para que un semirremolque entre, descargue y salga sin usar la calle.", ph: true },
  { titulo: "Energía trifásica", texto: "Tablero propio en cada nave, para máquinas y autoelevadores eléctricos.", ph: true },
  { titulo: "Estacionamiento", texto: "Cocheras para autos y utilitarios separadas de la zona de carga.", ph: true },
  { titulo: "Mantenimiento común", texto: "Limpieza, iluminación y espacios verdes a cargo de la administración del complejo.", ph: true },
];

/*
  Contacto. WhatsApp y Supabase salen de variables de entorno (ver .env.example):
  si NEXT_PUBLIC_WHATSAPP no está, el botón de WhatsApp no se muestra.
*/
export const contacto = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  mensajes: {
    invertir: "Hola, quiero invertir en una unidad de M3 Depósitos. ¿Me pasan superficies, precios y disponibilidad?",
    operar: "Hola, busco una nave o depósito en M3 Depósitos para mi empresa. ¿Me pasan superficies y disponibilidad?",
  },
};
