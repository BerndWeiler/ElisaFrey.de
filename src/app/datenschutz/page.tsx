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
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-2">
              <span className="text-foreground/90">Valueate</span>
              <br />
              Inhaber: Bernd Weiler
              <br />
              Birkenharder Straße 10
              <br />
              88400 Biberach
              <br />
              Deutschland
              <br />
              E-Mail: kontakt@valueate.de
              <br />
              Telefon: +49 152 0623 7493
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-medium text-base mb-2">3. Datenerfassung auf dieser Website</h2>

            <h3 className="text-foreground/90 text-sm font-medium mt-4 mb-1">Server-Log-Dateien</h3>
            <p>
              Der Hostinganbieter dieser Website (siehe Punkt 4) erhebt und speichert automatisch
              Informationen in sogenannten Server-Log-Dateien, die Ihr Browser übermittelt. Dies
              sind:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-foreground/60">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mt-2">
              Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist
              Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im technisch fehlerfreien
              Betrieb und in der Sicherheit dieser Website. Auf die Speicherdauer der Log-Dateien
              habe ich keinen unmittelbaren Einfluss, sie richtet sich nach den Vorgaben des
              Hostinganbieters (siehe Punkt 4).
            </p>

            <h3 className="text-foreground/90 text-sm font-medium mt-4 mb-1">Kontaktformular</h3>
            <p>
              Wenn Sie über das Kontaktformular eine Anfrage senden, werden die von Ihnen
              eingegebenen Angaben (Name, E-Mail-Adresse, Betreff und Nachricht) zum Zweck der
              Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen verarbeitet.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, bei nicht vertragsbezogenen Anfragen
              das berechtigte Interesse an der Beantwortung nach Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p className="mt-2">
              Für die technische Zustellung wird der Dienst FormSubmit eingesetzt. Beim Absenden
              werden Ihre Formularangaben an dessen Server übertragen und von dort per E-Mail
              zugestellt. Der Anbieter hat seinen Sitz in den USA, es findet also eine Übermittlung
              in ein Drittland statt. Weitere Informationen finden Sie unter{" "}
              <a
                href="https://formsubmit.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                formsubmit.co
              </a>
              . Wenn Sie diese Übermittlung vermeiden möchten, können Sie mich stattdessen direkt
              per E-Mail an die unter Punkt 2 genannte Adresse erreichen.
            </p>
            <p className="mt-2">
              Anfragen über dieses Formular betreffen die sportliche Laufbahn von Elisa Frey.
              FormSubmit stellt sie deshalb unmittelbar an das Postfach ihres Trainers und Managers
              zu, der sie dort bearbeitet. Empfänger Ihrer Angaben sind also FormSubmit als
              technischer Dienstleister und das Management von Elisa Frey als Bearbeiter. An weitere
              Dritte gebe ich Ihre Angaben nicht. Gelöscht werden sie, sobald die Anfrage erledigt
              ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
            <p className="mt-2">
              Die Angaben im Formular sind weder gesetzlich noch vertraglich vorgeschrieben. Sie
              sind allein deshalb erforderlich, weil ich Ihre Anfrage ohne Namen, E-Mail-Adresse und
              Nachricht nicht beantworten kann. Machen Sie diese Angaben nicht, entsteht Ihnen kein
              Nachteil, die Anfrage kommt dann lediglich nicht zustande.
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
              .
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-medium text-base mb-2">5. Externe Links</h2>
            <p>
              Diese Website enthält Links zu externen Websites, unter anderem zu Instagram, zu
              BoxRec und zu den Websites der auf dieser Seite genannten Unterstützer. Beim Anklicken
              dieser Links werden Sie auf die Server der jeweiligen Anbieter weitergeleitet. Dort
              gelten deren Datenschutzbestimmungen. Solange Sie einen Link nicht anklicken, werden
              keine Daten an diese Anbieter übertragen.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-medium text-base mb-2">6. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO).
              Ebenso haben Sie ein Recht auf Berichtigung (Art. 16 DSGVO), auf Löschung
              (Art. 17 DSGVO), auf Einschränkung der Verarbeitung (Art. 18 DSGVO) und auf
              Datenübertragbarkeit (Art. 20 DSGVO).
            </p>
            <p className="mt-2">
              Werden Ihre Daten auf Grundlage berechtigter Interessen nach Art. 6 Abs. 1 lit. f
              DSGVO verarbeitet, können Sie der Verarbeitung aus Gründen, die sich aus Ihrer
              besonderen Situation ergeben, jederzeit widersprechen (Art. 21 DSGVO). Haben Sie eine
              Einwilligung erteilt, können Sie diese jederzeit mit Wirkung für die Zukunft
              widerrufen.
            </p>
            <p className="mt-2">
              Unabhängig davon steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu
              (Art. 77 DSGVO). Zuständig ist der Landesbeauftragte für den Datenschutz und die
              Informationsfreiheit Baden-Württemberg, Lautenschlagerstraße 20, 70173 Stuttgart.
            </p>
            <p className="mt-2">
              Für alle Anliegen rund um Ihre Daten erreichen Sie mich unter den in Punkt 2
              genannten Kontaktdaten.
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
