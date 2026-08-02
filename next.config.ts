import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Ohne diese Zeile legt der Export "datenschutz.html" UND einen Ordner
  // "datenschutz/" nebeneinander an. Der Apache auf Hostinger sieht den Ordner,
  // leitet /datenschutz auf /datenschutz/ um und findet dort keine index.html
  // -> 403. Impressum und Datenschutz waren dadurch nicht erreichbar.
  // Mit trailingSlash landet die Seite als "datenschutz/index.html" im Ordner.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.178.51"],
};

export default nextConfig;
