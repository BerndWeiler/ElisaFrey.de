"use client";

import { useSyncExternalStore } from "react";

const ABFRAGE = "(prefers-reduced-motion: reduce)";

/**
 * Meldet, ob im Betriebssystem „Bewegung reduzieren" eingeschaltet ist.
 *
 * Warum nicht `useReducedMotion` aus Framer Motion: Dessen Wert landet in
 * einem `useState`-Startwert und wird danach nie wieder gelesen. Bei einem
 * statischen Export steht beim ersten Rendern im Browser noch das Markup aus
 * dem Build, der Haken bleibt dadurch auf `false` haengen. Nachgemessen am
 * 03.08.2026: Die Videos behielten `autoplay` und `loop`, obwohl die
 * Medienabfrage im selben Dokument `true` lieferte.
 *
 * `useSyncExternalStore` ist genau fuer diesen Fall gebaut. Es liefert beim
 * Build und beim ersten Rendern im Browser denselben Wert (`false`), sodass
 * kein Hydrationsfehler entsteht, und stellt unmittelbar danach auf den
 * echten Wert um. Aenderungen der Systemeinstellung kommen ebenfalls an,
 * ohne dass die Seite neu geladen werden muss.
 */
export function useBewegungReduzieren(): boolean {
  return useSyncExternalStore(abonnieren, lesen, lesenBeimBuild);
}

function abonnieren(neuLesen: () => void) {
  const abfrage = window.matchMedia(ABFRAGE);
  abfrage.addEventListener("change", neuLesen);
  return () => abfrage.removeEventListener("change", neuLesen);
}

function lesen() {
  return window.matchMedia(ABFRAGE).matches;
}

function lesenBeimBuild() {
  return false;
}
