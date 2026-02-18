import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-[clamp(4rem,15vw,12rem)] leading-none tracking-wide text-foreground/10">
        404
      </h1>
      <p className="mt-4 text-muted text-lg">Diese Seite wurde nicht gefunden.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-foreground/20 px-8 py-3 text-sm tracking-widest uppercase text-foreground hover:border-gold hover:text-gold transition-colors"
      >
        Zurück zur Startseite
      </Link>
    </div>
  );
}
