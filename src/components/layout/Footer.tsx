"use client";

import Link from "next/link";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display text-xl tracking-widest uppercase text-foreground/40">
          Elisa Frey
        </span>

        <a
          href={profile.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/40 hover:text-gold transition-colors text-sm tracking-wider"
        >
          {profile.instagramHandle}
        </a>

        <div className="flex items-center gap-4">
          <Link href="/impressum" className="text-foreground/20 hover:text-foreground/40 transition-colors text-xs tracking-wider">
            Impressum
          </Link>
          <span className="text-foreground/10">|</span>
          <Link href="/datenschutz" className="text-foreground/20 hover:text-foreground/40 transition-colors text-xs tracking-wider">
            Datenschutz
          </Link>
        </div>

        <span className="text-foreground/20 text-xs tracking-wider">
          &copy; {new Date().getFullYear()} Elisa Frey. Alle Rechte vorbehalten.
        </span>
      </div>
    </footer>
  );
}
