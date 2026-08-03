"use client";

import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";
import { useBewegungReduzieren } from "@/lib/bewegung";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const bewegungReduzieren = useBewegungReduzieren();

  useEffect(() => {
    // Weiches Scrollen ist selbst eine Bewegung, die man nicht angefordert hat.
    // Bei „Bewegung reduzieren" bleibt es beim nativen Scrollverhalten.
    if (bewegungReduzieren) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let angefordert = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time);
      angefordert = requestAnimationFrame(raf);
    });

    return () => {
      // Ohne das Abbestellen lief die Schleife nach dem Abbau weiter und rief
      // raf auf einer bereits zerstoerten Lenis-Instanz auf.
      cancelAnimationFrame(angefordert);
      lenis.destroy();
    };
  }, [bewegungReduzieren]);

  // reducedMotion="user" schaltet in allen Framer-Motion-Komponenten die
  // Transform-Animationen ab und laesst nur noch Ein- und Ausblenden zu.
  // Das gilt zentral fuer FadeIn, StaggerChildren, TextReveal und den Hero,
  // ohne dass jede Komponente es selbst abfragen muss.
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
