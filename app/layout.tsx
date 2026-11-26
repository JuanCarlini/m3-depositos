import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { KitScripts } from "@/components/KitScripts";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Respaldo de Supply Mono mientras no estén los archivos con licencia.
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const titulo = "M3 Depósitos: naves, locales y oficinas en Fisherton, Rosario";
const descripcion =
  "11.600 m² de naves en 15 unidades de 200 a 1.300 m², locales comerciales y oficinas en Wilde y Mendoza, Fisherton, Rosario.";

export const metadata: Metadata = {
  title: titulo,
  description: descripcion,
  icons: { icon: { url: "/favicon.svg", type: "image/svg+xml" } },
  openGraph: {
    type: "website",
    title: titulo,
    description: "Naves, locales comerciales y oficinas en Wilde y Mendoza, Fisherton, Rosario.",
    images: ["/share.jpg"],
  },
  twitter: { card: "summary_large_image" },
  other: {
    "site-kind": "other",
    "page-type": "product",
  },
  // canonical: pendiente hasta tener el dominio definitivo.
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fdfff2",
};

/*
  Sistema visual base en public/assets (grilla, botones, formularios, movimiento y la historia de
  fotos); m3.css aplica la marca encima. Esos scripts corren sobre el HTML estático; React solo
  hidrata el formulario.
*/
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-type="product"
      data-radius="sharp"
      data-buttons="block"
      data-motion=""
      className={`${plexSans.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="stylesheet" href="/assets/system.css" />
        <link rel="stylesheet" href="/assets/ui/cards.css" />
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <link rel="stylesheet" href="/assets/layout/layout.css" />
        <link rel="stylesheet" href="/assets/moments/photo-chapters/moment.css" />
        <link rel="stylesheet" href="/m3.css" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500)",
          }}
        />
        <link rel="modulepreload" href="/assets/moments/moments.js" />
        <link rel="modulepreload" href="/assets/moments/lib.js" />
        <link rel="modulepreload" href="/assets/moments/photo-chapters/moment.js" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <KitScripts />
      </body>
    </html>
  );
}
