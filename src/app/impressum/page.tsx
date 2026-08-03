import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | Elisa Frey",
  description: "Impressum der Website elisafrey.com. Angaben gemäß § 5 DDG.",
  robots: { index: false, follow: false },
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
            <h2 className="text-foreground font-medium text-base mb-2">Angaben gemäß § 5 DDG</h2>
            <p>
              <span className="text-foreground/90">Valueate</span>
              <br />
              Inhaber: Bernd Weiler
              <br />
              Birkenharder Straße 10
              <br />
              88400 Biberach
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-medium text-base mb-2">Kontakt</h2>
            <p>
              E-Mail: kontakt@valueate.de
              <br />
              Telefon: +49 152 0623 7493
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-medium text-base mb-2">Umsatzsteuer-Identifikationsnummer</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              <br />
              DE461341413
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-medium text-base mb-2">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              <span className="text-foreground/90">Valueate</span>
              <br />
              Bernd Weiler
              <br />
              Birkenharder Straße 10
              <br />
              88400 Biberach
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-medium text-base mb-2">Haftung für Inhalte</h2>
            <p>
              Für eigene Inhalte auf diesen Seiten bin ich nach den allgemeinen Gesetzen
              verantwortlich. Für fremde Informationen, die ich lediglich übermittle,
              zwischenspeichere oder speichere, gelten die Haftungsbeschränkungen der Artikel 4 bis 6
              der Verordnung (EU) 2022/2065 (Gesetz über digitale Dienste). Nach Artikel 8 dieser
              Verordnung bin ich nicht verpflichtet, übermittelte oder gespeicherte Informationen zu
              überwachen oder aktiv nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
              hindeuten.
            </p>
            <p className="mt-2">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden entsprechender Rechtsverletzungen entferne ich diese Inhalte umgehend.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-medium text-base mb-2">Haftung für Links</h2>
            <p>
              Dieses Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen
              Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
              mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-medium text-base mb-2">Urheberrecht</h2>
            <p>
              Die auf diesen Seiten veröffentlichten Inhalte und Werke unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
              außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
              jeweiligen Autors oder Erstellers. Downloads und Kopien dieser Seite sind nur für den
              privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </section>

          {/* Bildnachweis: Der Urheber ist nach § 13 UrhG zu nennen. Die Aufnahmen
              tragen zwar ein Wasserzeichen, das ersetzt die Nennung aber nicht. */}
          <section>
            <h2 className="text-foreground font-medium text-base mb-2">Bildnachweise</h2>
            <p>
              Alle Kampf- und Portraitaufnahmen auf dieser Website:
              <br />
              <span className="text-foreground/90">© marc_rene_lochmann</span>
            </p>
            <p className="mt-2">
              Die Logos der auf dieser Website genannten Unterstützer sind Eigentum der
              jeweiligen Unternehmen und werden mit deren Einverständnis verwendet.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-medium text-base mb-2">Verbraucherstreitbeilegung</h2>
            <p>
              Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
