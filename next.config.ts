import type { NextConfig } from "next";

// Export estático: la landing se sirve como HTML/CSS/JS desde `out/` (Vercel o cualquier hosting).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
