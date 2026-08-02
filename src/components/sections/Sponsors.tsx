"use client";

import { useRef, type CSSProperties } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { sponsors } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { staggerItem } from "@/components/animations/StaggerChildren";

// Versatz zwischen den Logos, wenn sie auf Touch-Geraeten nacheinander
// in ihre Markenfarben wechseln.
const EINFAERB_VERSATZ_MS = 160;

export default function Sponsors() {
  const reiheRef = useRef<HTMLDivElement>(null);
  // Auf Touch-Geraeten ersetzt das Sichtbarwerden den fehlenden Mauszeiger.
  const imBlick = useInView(reiheRef, { once: true, amount: 0.4 });

  return (
    <section id="unterstuetzer" className="relative py-20 md:py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Unterstützer" />

        <div ref={reiheRef}>
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center">
            {sponsors.map((sponsor, i) => (
              <motion.a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={staggerItem}
                data-sichtbar={imBlick}
                aria-label={`${sponsor.name}, Website in neuem Tab öffnen`}
                className="sponsor-link group relative flex items-center justify-center
                  rounded-xl px-5 py-6 md:px-6 md:py-7
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
              >
                {/* Helle Traegerflaeche: erscheint zusammen mit den Markenfarben.
                    Ohne sie waeren Goodbean und Valueate auf dem dunklen Grund
                    nicht mehr zu erkennen. */}
                <span
                  aria-hidden="true"
                  className="sponsor-plate absolute inset-0 rounded-xl bg-[#f2f2f0]"
                  style={{ "--einfaerb-versatz": `${i * EINFAERB_VERSATZ_MS}ms` } as CSSProperties}
                />

                <span className="relative z-10 block h-11 w-full md:h-14">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="sponsor-logo object-contain"
                    sizes="(max-width: 768px) 160px, 200px"
                    style={{ "--einfaerb-versatz": `${i * EINFAERB_VERSATZ_MS}ms` } as CSSProperties}
                  />
                </span>
              </motion.a>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
