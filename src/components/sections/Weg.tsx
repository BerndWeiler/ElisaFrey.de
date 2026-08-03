"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import Platzhalter from "@/components/ui/Platzhalter";
import { wegAbsaetze } from "@/lib/data";
import { useBewegungReduzieren } from "@/lib/bewegung";

const VIDEO = "/videos/training-berge.mp4";

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
  const spalteRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const geladen = useRef(false);
  const imBlick = useInView(spalteRef, { once: true, margin: "200px" });
  const bewegungReduzieren = useBewegungReduzieren();

  // Erst laden, wenn die Sektion in die Naehe des Sichtfelds kommt. Das Video
  // wiegt gut 2 MB und soll den ersten Seitenaufbau nicht ausbremsen.
  // Der Merker liegt bewusst in einem Ref und nicht im Zustand: Er steuert
  // keine Darstellung, ein zusaetzlicher Renderdurchlauf waere sinnlos.
  //
  // Bei „Bewegung reduzieren" startet nichts von allein, dafuer gibt es unten
  // Bedienelemente.
  useEffect(() => {
    if (!imBlick || geladen.current || bewegungReduzieren) return;
    const el = videoRef.current;
    if (!el) return;
    geladen.current = true;
    el.src = VIDEO;
    el.load();
    el.play().catch(() => {});
  }, [imBlick, bewegungReduzieren]);

  return (
    <section id="weg" className="relative py-20 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Der Weg" subtitle="Wer hier in den Ring steigt" />

        {/* lg:items-center: Video und Text sind selten gleich hoch. Oben buendig
            entstuende neben der kuerzeren Spalte ein auffaelliges Loch. */}
        <div className="grid lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-start lg:items-center">
          <FadeIn direction="right">
            {/* 4:5 statt des Hochformats aus der Quelle. Bei 9:16 war die
                Videospalte fast doppelt so hoch wie der Text und riss rechts
                ein Loch auf. Der Zuschnitt steckt in der Datei selbst, damit
                keine Bildbereiche geladen werden, die niemand sieht. */}
            <div
              ref={spalteRef}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl glass-card bg-black/40"
            >
              <video
                ref={videoRef}
                src={bewegungReduzieren ? VIDEO : undefined}
                autoPlay={!bewegungReduzieren}
                muted
                loop={!bewegungReduzieren}
                controls={bewegungReduzieren}
                playsInline
                preload={bewegungReduzieren ? "metadata" : "none"}
                poster="/images/poster-training-berge.jpg"
                aria-label="Elisa Frey beim Pratzentraining vor Bergkulisse"
                className="absolute inset-0 w-full h-full object-cover"
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
