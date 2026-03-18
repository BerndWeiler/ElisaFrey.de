import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | Elisa Frey",
};

export default function Impressum() {
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

        <h1 className="font-display text-4xl md:text-5xl tracking-wide uppercase mb-12">
          Impressum
        </h1>

        <div className="space-y-8 text-foreground/70 leading-relaxed text-sm">
          <section>
            <h2 className="text-foreground font-medium text-base mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              Bernd Weiler<br />
              Birkenharder Straße 10<br />
              88400 Biberach<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-medium text-base mb-2">Kontakt</h2>
            <p>
              E-Mail: kontakt@valueate.de<br />
              Telefon: +49 152 0623 7493
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-medium text-base mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              Bernd Weiler<br />
              Birkenharder Straße 10<br />
              88400 Biberach
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-medium text-base mb-2">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>
            <p className="mt-2">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
              umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-medium text-base mb-2">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
              Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
              Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-medium text-base mb-2">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
              sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
