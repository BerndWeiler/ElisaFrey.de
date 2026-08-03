"use client";

import Link from "next/link";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Kontraste gegen den Hintergrund #0a0a0a, berechnet nach WCAG:
            /40 ergab 3,55:1 und lag damit unter dem Mindestwert 4,5:1 fuer
            normalen Text. /55 ergibt 5,8:1, /60 ergibt 6,8:1. */}
        <span className="font-display text-xl tracking-widest uppercase text-foreground/55">
          Elisa Frey
        </span>

        <a
          href={profile.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-gold transition-colors text-sm tracking-wider
            focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2
            focus-visible:ring-offset-background rounded-sm"
        >
          {profile.instagramHandle}
        </a>

        {/* Impressum und Datenschutz sind Pflichtangaben und muessen leicht erkennbar sein
            (§ 5 DDG). Bei /20 lag der Kontrast zum Hintergrund bei 1,71:1, die Links waren
            praktisch unsichtbar. /60 ergibt 6,78:1 und besteht damit WCAG AA. */}
        <div className="flex items-center gap-4">
          <Link href="/presse" className="text-foreground/60 hover:text-gold transition-colors text-xs tracking-wider">
            Presse
          </Link>
          <span aria-hidden="true" className="text-foreground/40">
            |
          </span>
          <Link href="/impressum" className="text-foreground/60 hover:text-gold transition-colors text-xs tracking-wider">
            Impressum
          </Link>
          <span aria-hidden="true" className="text-foreground/40">
            |
          </span>
          <Link href="/datenschutz" className="text-foreground/60 hover:text-gold transition-colors text-xs tracking-wider">
            Datenschutz
          </Link>
        </div>

        <span className="text-foreground/50 text-xs tracking-wider">
          &copy; {new Date().getFullYear()} Elisa Frey. Alle Rechte vorbehalten.
        </span>
      </div>
    </footer>
  );
}
