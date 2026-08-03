"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ENTWURFSMODUS } from "@/lib/data";

interface PlatzhalterProps {
  children: ReactNode;
  /** Kurze Beschriftung, was an dieser Stelle fehlt. */
  label?: string;
  className?: string;
}

/**
 * Sichtbare Luecke fuer Inhalte, die noch fehlen.
 *
 * Bewusst auffaellig: gestrichelter Goldrahmen, damit beim Durchsehen der Seite
 * sofort erkennbar ist, was noch zugeliefert werden muss und wie viel Text dort
 * hingehoert. Erfundene Inhalte waeren die schlechtere Loesung, weil sie sich
 * nicht von echten unterscheiden lassen.
 *
 * Ausserhalb des Entwurfsmodus rendert die Komponente nichts. Ein Platzhalter
 * kann so nie versehentlich oeffentlich werden.
 */
export default function Platzhalter({
  children,
  label = "Fehlt noch",
  className,
}: PlatzhalterProps) {
  if (!ENTWURFSMODUS) return null;

  return (
    <div
      className={cn(
        "rounded-xl border border-dashed border-gold/40 bg-gold/[0.04] px-5 py-4",
        className
      )}
    >
      <span className="block text-[0.65rem] tracking-[0.25em] uppercase text-gold/90 mb-2">
        {label}
      </span>
      <div className="text-foreground/55 text-sm leading-relaxed italic">{children}</div>
    </div>
  );
}
