"use client";

import { useEffect, useRef, useState } from "react";

interface KopierTextProps {
  /** Der Text, der in die Zwischenablage geht. Wird auch angezeigt. */
  text: string;
  label?: string;
}

/**
 * Textblock mit Kopierschaltflaeche.
 *
 * Journalisten brauchen immer dasselbe: eine Kurzvita, die sie uebernehmen
 * koennen, ohne sie aus dem Fliesstext der Seite zusammenzusuchen.
 */
export default function KopierText({ text, label = "Text kopieren" }: KopierTextProps) {
  const [kopiert, setKopiert] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  // Rueckmeldung nach ein paar Sekunden zuruecksetzen, aber nur solange die
  // Komponente noch im Baum haengt.
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const kopieren = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setKopiert(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setKopiert(false), 2500);
    } catch {
      // Aeltere Browser oder fehlende Berechtigung: Der Text steht sichtbar
      // da und laesst sich von Hand markieren. Keine Fehlermeldung noetig.
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6">
      <p className="text-foreground/75 leading-relaxed">{text}</p>

      <button
        type="button"
        onClick={kopieren}
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2
          text-xs tracking-[0.15em] uppercase text-foreground/70
          transition-all duration-300
          hover:border-gold/50 hover:text-gold
          focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
      >
        {kopiert ? (
          <>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Kopiert
          </>
        ) : (
          <>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 8V6a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2h-2M6 8h8a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2z" />
            </svg>
            {label}
          </>
        )}
      </button>

      <span role="status" aria-live="polite" className="sr-only">
        {kopiert ? "Text in die Zwischenablage kopiert" : ""}
      </span>
    </div>
  );
}
