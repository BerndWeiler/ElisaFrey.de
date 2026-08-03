"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import Platzhalter from "@/components/ui/Platzhalter";
import { wegAbsaetze } from "@/lib/data";

/**
 * Sektion „Der Weg".
 *
 * Die Startseite bestand bis hierher aus Ueberschriften, Kennzahlen, Bildern
 * und Videos. Wer Elisa nicht kennt, erfuhr nichts ueber sie, und Suchmaschinen
 * fanden ausser der Meta-Description kaum Text zum Indexieren.
 *
 * Der erste Absatz ist aus den gepruefen Kampfdaten belegt. Alles Weitere sind
 * markierte Luecken: Werdegang, Trainingsalltag und Ziele sind Aussagen ueber
 * eine reale Person und werden deshalb nicht erfunden, sondern von Elisa
 * geschrieben.
 */
export default function Weg() {
  return (
    <section id="weg" className="relative py-20 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Der Weg" subtitle="Wer hier in den Ring steigt" />

        {/* lg:items-center: Bild und Text sind selten gleich hoch. Oben buendig
            entstuende neben der kuerzeren Spalte ein auffaelliges Loch. */}
        <div className="grid lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-start lg:items-center">
          <FadeIn direction="right">
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl glass-card">
              <Image
                src="/images/gallery-stanglwirt-portrait.jpg"
                alt="Elisa Frey konzentriert vor dem Kampf"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="space-y-5 max-w-[68ch]">
              {wegAbsaetze.map((absatz, i) =>
                absatz.vonElisa ? (
                  <Platzhalter key={i} label="Text von Elisa">
                    {absatz.text}
                  </Platzhalter>
                ) : (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "text-foreground/80 text-lg leading-relaxed"
                        : "text-foreground/70 leading-relaxed"
                    }
                  >
                    {absatz.text}
                  </p>
                )
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
