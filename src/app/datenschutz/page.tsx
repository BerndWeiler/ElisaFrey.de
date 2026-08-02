import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz | Elisa Frey",
  description: "Datenschutzerklärung der Website elisafrey.com.",
  robots: { index: false, follow: false },
};

export default function Datenschutz() {
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
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-foreground/70 leading-relaxed text-sm">
          <section>
            <h2 className="text-foreground font-medium text-base mb-2">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-foreground/90 text-sm font-medium mt-4 mb-1">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-medium text-base mb-2">2. Verantwortliche Stelle</h2>
            <p>
              Bernd Weiler<br />
              Birkenharder Straße 10<br />
              88400 Biberach<br />
              Deutschland<br />
              E-Mail: kontakt@valueate.de<br />
              Telefon: +49 152 0623 7493
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-medium text-base mb-2">3. Datenerfassung auf dieser Website</h2>

            <h3 className="text-foreground/90 text-sm font-medium mt-4 mb-1">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-foreground/60">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mt-2">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="text-foreground/90 text-sm font-medium mt-4 mb-1">Kontaktformular</h3>
            <p>
              Wenn Sie uns über das Kontaktformular eine Anfrage senden, werden die von Ihnen
              eingegebenen Angaben (Name, E-Mail-Adresse, Betreff und Nachricht) zum Zweck der
              Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen verarbeitet. Die
              Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, bei nicht
              vertragsbezogenen Anfragen auf Grundlage unseres berechtigten Interesses an der
              Beantwortung nach Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p className="mt-2">
              Für die technische Zustellung setzen wir den Dienst FormSubmit ein. Beim Absenden
              werden Ihre Formularangaben an dessen Server übertragen und von dort per E-Mail an
              das für Anfragen zuständige Postfach zugestellt. Der Anbieter hat seinen Sitz in
              den USA, es findet also eine Übermittlung in ein Drittland statt. Weitere
              Informationen finden Sie unter{" "}
              <a
                href="https://formsubmit.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                formsubmit.co
              </a>
              . Wenn Sie diese Übermittlung vermeiden möchten, können Sie uns stattdessen direkt
              per E-Mail an die unter Punkt 2 genannte Adresse kontaktieren.
            </p>
            <p className="mt-2">
              Über den beschriebenen Weg der Zustellung hinaus geben wir Ihre Angaben nicht an
              Dritte weiter. Sie werden gelöscht, sobald sie für den Zweck der Bearbeitung nicht
              mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-medium text-base mb-2">4. Hosting</h2>
            <p>
              Diese Website wird bei Hostinger (Hostinger International Ltd., 61 Lordou Vironos
              Street, 6023 Larnaca, Zypern) gehostet. Der Anbieter verarbeitet dabei die oben
              genannten Server-Log-Dateien. Details entnehmen Sie der Datenschutzerklärung von
              Hostinger:{" "}
              <a
                href="https://www.hostinger.de/datenschutz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                hostinger.de/datenschutz
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-medium text-base mb-2">5. Externe Links</h2>
            <p>
              Diese Website enthält Links zu externen Diensten (Instagram, BoxRec). Beim Anklicken
              dieser Links werden Sie auf die Server der jeweiligen Anbieter weitergeleitet. Dort
              gelten die Datenschutzbestimmungen der jeweiligen Anbieter.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-medium text-base mb-2">6. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
              Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
              Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese jederzeit für die
              Zukunft widerrufen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können
              Sie sich jederzeit an uns wenden.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-medium text-base mb-2">7. Cookies</h2>
            <p>
              Diese Website verwendet keine Cookies und keine Tracking- oder Analyse-Tools.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
