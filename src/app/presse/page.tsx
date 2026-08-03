import type { Metadata } from "next";
import Link from "next/link";
import KopierText from "@/components/ui/KopierText";
import { fights, fotograf, profile } from "@/lib/data";
import { EMPFAENGER } from "@/lib/kontakt";

export const metadata: Metadata = {
  title: "Presse | Elisa Frey",
  description:
    "Pressebereich von Elisa Frey: Kurzvita, Faktenblatt, Bildmaterial und Ansprechpartner für Medienanfragen.",
};

// Der oberste Eintrag in data.ts ist der juengste Kampf.
const letzterKampf = fights[0];

const kurzvita =
  `Elisa Frey ist Profiboxerin im ${profile.weightClass} und amtierende Deutsche Meisterin des BDB. ` +
  "Seit ihrem Profidebüt im März 2024 ist sie in sechs Kämpfen ungeschlagen und hat jeden " +
  "davon vorzeitig beendet. Den Meistertitel gewann sie im April 2025 gegen Nicole Purwins, " +
  "im April 2026 verteidigte sie ihn gegen Oliwia Koziura durch technischen K. o. in Runde drei. " +
  "Trainiert und gemanagt wird sie von Björn Schulz.";

const fakten: { begriff: string; wert: string }[] = [
  { begriff: "Name", wert: profile.name },
  { begriff: "Gewichtsklasse", wert: profile.weightClass },
  { begriff: "Titel", wert: profile.title },
  {
    begriff: "Bilanz",
    wert: `${profile.record.wins} Siege, ${profile.record.losses} Niederlagen, ${profile.record.draws} Unentschieden`,
  },
  {
    begriff: "Vorzeitige Siege",
    wert: `${profile.kos} von ${profile.record.wins} (${profile.koRate} Prozent)`,
  },
  { begriff: "Profidebüt", wert: "März 2024" },
  {
    begriff: "Letzter Kampf",
    wert: `${letzterKampf.date}, ${letzterKampf.location}, Sieg durch ${letzterKampf.method} in Runde ${letzterKampf.round}`,
  },
  { begriff: "Trainer und Management", wert: "Björn Schulz" },
];

export default function Presse() {
  return (
    <main className="min-h-screen py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-foreground/40 hover:text-gold transition-colors text-sm tracking-wider mb-12"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück
        </Link>

        <h1 className="font-display text-4xl md:text-5xl tracking-wide uppercase mb-4">
          Presse
        </h1>
        <p className="text-foreground/60 leading-relaxed mb-14 max-w-[62ch]">
          Alles, was für einen Beitrag gebraucht wird, an einer Stelle. Was hier fehlt,
          bekommen Sie über mein Management, auch kurzfristig.
        </p>

        <div className="space-y-14">
          <section>
            <h2 className="font-display text-2xl tracking-wide uppercase mb-4">Kurzvita</h2>
            <KopierText text={kurzvita} label="Kurzvita kopieren" />
          </section>

          <section>
            <h2 className="font-display text-2xl tracking-wide uppercase mb-4">Faktenblatt</h2>
            <dl className="glass-card rounded-2xl divide-y divide-white/5">
              {fakten.map((eintrag) => (
                <div
                  key={eintrag.begriff}
                  className="grid grid-cols-1 sm:grid-cols-[minmax(0,13rem)_1fr] gap-1 sm:gap-6 px-6 py-4"
                >
                  <dt className="text-xs tracking-[0.15em] uppercase text-foreground/45 sm:pt-0.5">
                    {eintrag.begriff}
                  </dt>
                  <dd className="text-foreground/80 text-sm leading-relaxed">{eintrag.wert}</dd>
                </div>
              ))}
              <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,13rem)_1fr] gap-1 sm:gap-6 px-6 py-4">
                <dt className="text-xs tracking-[0.15em] uppercase text-foreground/45 sm:pt-0.5">
                  Vollständiger Rekord
                </dt>
                <dd className="text-sm">
                  <a
                    href="https://boxrec.com/en/box-pro/1235889"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light transition-colors"
                  >
                    BoxRec Profil
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="font-display text-2xl tracking-wide uppercase mb-4">Bildmaterial</h2>
            <div className="glass-card rounded-2xl p-6 space-y-3 text-sm text-foreground/70 leading-relaxed">
              <p>
                Die Aufnahmen auf dieser Website sind für die Verwendung im Web
                aufbereitet und für den Druck zu klein. Freigegebenes Material in
                Druckauflösung stelle ich auf Anfrage bereit.
              </p>
              <p>
                Alle Kampf- und Portraitaufnahmen stammen von{" "}
                <a
                  href={fotograf.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  {fotograf.name}
                </a>{" "}
                ({fotograf.handle}). Bei jeder Veröffentlichung ist die Urheberangabe{" "}
                <span className="text-foreground/90">© {fotograf.name}</span> anzugeben.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl tracking-wide uppercase mb-4">
              Ansprechpartner
            </h2>
            <div className="glass-card rounded-2xl p-6">
              <span className="block text-xs tracking-[0.15em] uppercase text-foreground/45 mb-2">
                Trainer und Management
              </span>
              <span className="block text-foreground font-medium">Björn Schulz</span>
              <a
                href={`mailto:${EMPFAENGER}?subject=Presseanfrage%20Elisa%20Frey`}
                className="mt-1 inline-block text-gold hover:text-gold-light transition-colors text-sm"
              >
                {EMPFAENGER}
              </a>
              <p className="mt-4 text-sm text-foreground/60">
                Elisa Frey auf Instagram:{" "}
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  {profile.instagramHandle}
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
