"use client";

import { useEffect } from "react";

/*
  Los scripts de public/assets (menú, movimiento, historia de fotos, validación) modifican el DOM.
  Se cargan recién cuando React terminó de hidratar, para que no haya desajustes de hidratación.
*/
const SCRIPTS = ["/assets/system.js", "/assets/motion/motion.js"];

export function KitScripts() {
  useEffect(() => {
    for (const src of SCRIPTS) {
      if (document.querySelector(`script[src="${src}"]`)) continue;
      const s = document.createElement("script");
      s.type = "module";
      s.src = src;
      document.body.appendChild(s);
    }
  }, []);
  return null;
}
