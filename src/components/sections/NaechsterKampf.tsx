"use client";

import FadeIn from "@/components/animations/FadeIn";
import { naechsterKampf, profile } from "@/lib/data";

/**
 * Band direkt unter dem Hero.
 *
 * Ohne bestaetigten Termin steht hier bewusst ein ehrlicher Hinweis statt eines
 * erfundenen Datums. Die Seite endete bis dahin in der Vergangenheit: juengster
 * Eintrag war der Kampf vom 12.04.2026. Fuer Fans gab es keinen Grund
 * wiederzukommen, fuer Sponsoren keinen Anlass, jetzt zu handeln.
 *
 * Sobald ein Termin feststeht, in src/lib/data.ts eintragen und zusaetzlich
 * einen SportsEvent-Eintrag im JSON-LD in src/app/layout.tsx ergaenzen.
 */
export default function NaechsterKampfBand() {
  const { datum, gegnerin, ort, titel, platzhalter } = naechsterKampf;
  const stehtFest = Boolean(datum);

  return (
    <section id="naechster-kampf" className="relative px-6 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <div
            className="glass-gold rounded-2xl px-6 py-7 md:px-10 md:py-8
              flex flex-col gap-5 text-center
              md:flex-row md:items-center md:justify-between md:gap-8 md:text-left"
          >
            <div className="min-w-0">
              <span className="block text-[0.7rem] tracking-[0.25em] uppercase text-gold mb-2">
                Nächster Kampf
              </span>

              {stehtFest ? (
                <>
                  <p className="font-display text-3xl md:text-4xl tracking-wide uppercase leading-none">
                    {datum}
                    {gegnerin && (
                      <span className="text-foreground/70"> gegen {gegnerin}</span>
                    )}
                  </p>
                  {(ort || titel) && (
                    <p className="mt-2 text-foreground/60 text-sm">
                      {[titel, ort].filter(Boolean).join(" · ")}
                    </p>
                  )}
                </>
              ) : (
                <p className="font-display text-2xl md:text-3xl tracking-wide uppercase leading-tight text-foreground/85">
                  {platzhalter}
                </p>
              )}
            </div>

            {/* Ohne Termin ist Instagram der Ort, an dem er zuerst stehen wird.
                Das gibt dem Band auch im Wartezustand einen Nutzen. */}
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center justify-center gap-2 self-center
                rounded-full border border-gold/40 px-6 py-2.5
                text-xs tracking-[0.15em] uppercase text-gold
                transition-all duration-300
                hover:border-gold hover:bg-gold/10 hover:shadow-[0_0_20px_rgba(200,162,78,0.15)]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
            >
              Termin zuerst auf Instagram
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H9m8 0v8" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
