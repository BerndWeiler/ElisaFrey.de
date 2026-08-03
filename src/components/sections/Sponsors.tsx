"use client";

import { useRef, type CSSProperties } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { reichweite, sponsoringPakete, sponsors } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import Platzhalter from "@/components/ui/Platzhalter";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { staggerItem } from "@/components/animations/StaggerChildren";
import { BETREFF_EVENT } from "@/lib/kontakt";

// Versatz zwischen den Logos, wenn sie auf Touch-Geraeten nacheinander
// in ihre Markenfarben wechseln.
const EINFAERB_VERSATZ_MS = 160;

export default function Sponsors() {
  const reiheRef = useRef<HTMLDivElement>(null);
  // Auf Touch-Geraeten ersetzt das Sichtbarwerden den fehlenden Mauszeiger.
  const imBlick = useInView(reiheRef, { once: true, amount: 0.4 });

  // Zahlen, die vorliegen, werden gezeigt. Fehlende erscheinen nicht als leere
  // Karte, sondern nur im Entwurfsmodus als Hinweis, was noch zu beschaffen ist.
  const bekannteZahlen = reichweite.filter((eintrag) => eintrag.wert.trim() !== "");
  const offeneZahlen = reichweite.filter((eintrag) => eintrag.wert.trim() === "");

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

        {/* Sponsoring-Angebot
            Bis hierher zeigte die Sektion nur Logos. Ein Interessent musste den
            Umweg ueber das allgemeine Kontaktformular gehen und selbst
            formulieren, was er eigentlich will. */}
        <div className="mt-20 md:mt-28">
          <FadeIn>
            <div className="max-w-[62ch] mx-auto text-center">
              <h3 className="font-display text-3xl md:text-4xl tracking-wide uppercase mb-5">
                Sponsoring
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Profiboxen finanziert sich nicht von selbst. Training, Kampfvorbereitung,
                Anreisen und Ausrüstung tragen die Partner mit, die hinter mir stehen.
                Dafür stehen sie sichtbar dort, wo hingeschaut wird: im Ring, in den
                Aufnahmen vom Kampfabend und in allem, was danach darüber erscheint.
              </p>
            </div>
          </FadeIn>

          {/* Reichweite */}
          <FadeIn>
            <div className="mt-12 space-y-5">
              {bekannteZahlen.length > 0 && (
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                  {bekannteZahlen.map((eintrag) => (
                    <div
                      key={eintrag.label}
                      className="glass-card rounded-2xl px-8 py-6 text-center min-w-[15rem]"
                    >
                      <span className="block font-display text-4xl tracking-wide text-gold leading-none">
                        {eintrag.wert}
                      </span>
                      <span className="mt-2 block text-xs tracking-[0.15em] uppercase text-foreground/60">
                        {eintrag.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {offeneZahlen.length > 0 && (
                <Platzhalter label="Zahlen fehlen" className="max-w-3xl mx-auto">
                  Es fehlen noch: {offeneZahlen.map((e) => e.label).join(" und ")}. Ein
                  Sponsor prüft solche Angaben nach, deshalb steht hier nichts Geschätztes.
                </Platzhalter>
              )}
            </div>
          </FadeIn>

          {/* Pakete
              Karten sind hier die richtige Form: Die drei Stufen werden bewusst
              nebeneinander verglichen. Die oberste Stufe traegt als einzige den
              Goldrahmen, siehe Kommentar bei sponsoringPakete in data.ts. */}
          <StaggerChildren
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch"
            staggerDelay={0.12}
          >
            {sponsoringPakete.map((paket) => (
              <motion.div
                key={paket.name}
                variants={staggerItem}
                className={`rounded-2xl p-6 md:p-7 flex flex-col transition-all duration-300 ${
                  paket.hervorgehoben
                    ? "glass-gold hover:shadow-[0_0_30px_rgba(200,162,78,0.12)]"
                    : "glass-card glass-card-hover"
                }`}
              >
                <h4 className="font-display text-2xl tracking-wide uppercase">
                  {paket.name}
                </h4>
                <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                  {paket.beschreibung}
                </p>

                <ul className="mt-5 mb-6 space-y-2.5">
                  {paket.leistungen.map((leistung) => (
                    <li key={leistung} className="flex gap-3 text-sm text-foreground/75 leading-relaxed">
                      <span aria-hidden="true" className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {leistung}
                    </li>
                  ))}
                </ul>

                {/* mt-auto: Die Stufen haben unterschiedlich viele Leistungen. Ohne das
                    stuende die Fusszeile in jeder Karte auf einer anderen Hoehe. */}
                <span className="mt-auto block border-t border-white/5 pt-5 text-xs tracking-[0.15em] uppercase text-foreground/45">
                  Konditionen auf Anfrage
                </span>
              </motion.div>
            ))}
          </StaggerChildren>

          {/* Eigener Kontaktweg: legt den Betreff im Formular vor, damit eine
              Sponsoring-Anfrage nicht als allgemeine Nachricht ankommt. */}
          <FadeIn>
            <div className="mt-12 text-center">
              <a
                href="#kontakt"
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent(BETREFF_EVENT, { detail: "Sponsoring-Anfrage" })
                  )
                }
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full
                  bg-gold text-background font-medium text-sm tracking-wider uppercase
                  transition-all duration-300
                  hover:bg-gold-light hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(200,162,78,0.3)]
                  active:scale-[0.98]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Sponsoring anfragen
              </a>
              <p className="mt-4 text-xs text-foreground/50">
                Ich melde mich persönlich zurück, meist innerhalb weniger Tage.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
