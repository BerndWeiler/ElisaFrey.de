# Maßnahmenkatalog elisafrey.com

**Stand:** 02.08.2026
**Grundlage:** Code-Audit über sechs Dimensionen (Barrierefreiheit, Inhalt, SEO, Ladezeit, Recht, Design-System) plus visuelle Prüfung der gerenderten Seite in Desktop (1440×900) und Mobile (390×844). 65 Befunde erhoben, 60 gegen den Code gegengeprüft und bestätigt, 5 verworfen. Zusätzlich fünf Befunde aus der Browser-Messung, die im reinen Code-Audit nicht sichtbar waren.

Jeder Punkt unten ist am Code oder an einer Messung belegt. Vermutungen sind als solche gekennzeichnet.

> **Umsetzungsstand 02.08.2026:** Block A ist vollständig erledigt und im Browser gegengeprüft (Commit siehe Git-Historie). Block B, C und D sind offen.

---

## Gesamtbild

Die Seite sieht gut aus und hat eine klare Handschrift: dunkel, Gold, ruhig, hochwertige Bilder. Das Grundgerüst trägt. Die Probleme liegen in drei Schichten:

1. **Vier Sachen sind schlicht kaputt** und kosten heute Geld oder Reichweite: das Kontaktformular verliert Nachrichten, Google zeigt eine veraltete Kennzahl, das Startbild schrumpft nach acht Sekunden und legt schwarze Ränder frei, und die Datenschutzerklärung beschreibt eine Infrastruktur, die es nicht mehr gibt.
2. **Die Seite ist inhaltlich sehr dünn.** Es gibt praktisch keinen Fließtext. Wer Elisa nicht kennt, erfährt nichts über sie: kein Werdegang, kein Kampfstil, keine Ziele, kein nächster Termin. Für einen Sponsor-Entscheider gibt es nichts zu entscheiden.
3. **Die Sponsorensektion arbeitet gegen ihren Zweck.** Logos werden entfärbt, invertiert und auf 40 Prozent Deckkraft gesetzt. Zwei von vier sind faktisch unsichtbar. Es gibt kein Angebot, keine Zahlen, keine Handlungsaufforderung.

Punkt 2 und 3 sind der eigentliche Hebel. Die Seite ist aktuell eine schöne Visitenkarte, aber kein Werkzeug zur Sponsorengewinnung.

---

## A. Sofort: Fehler, die aktiv schaden — ERLEDIGT am 02.08.2026

Alle fünf Punkte sind umgesetzt. Was tatsächlich gemacht und wie es geprüft wurde, steht jeweils am Ende des Abschnitts unter „Umgesetzt".

### A1. Das Kontaktformular meldet Erfolg, obwohl die Nachricht verloren geht
`src/components/sections/Contact.tsx:104-124`

Der `catch`-Block setzt `setSubmitted(true)`. Bei jedem Netzwerkfehler sieht der Absender „Nachricht gesendet", obwohl nichts angekommen ist. Zusätzlich: Wenn der Server mit einem Fehlercode antwortet (`res.ok === false`), passiert gar nichts, das Formular steht einfach da. Und der Antwortinhalt wird nie geprüft, FormSubmit liefert im AJAX-Modus ein `success`-Feld, das ignoriert wird.

**Auswirkung:** Sponsoring- und Medienanfragen verschwinden unbemerkt. Der Absender hakt nicht nach, weil er die Bestätigung gesehen hat.

**Fix:** Dritten Zustand `error` einführen. Bei `!res.ok` und im `catch` eine sichtbare Fehlermeldung mit direkter E-Mail-Adresse als Ausweichweg anzeigen. Aufwand: klein.

**Nebenbefund:** `_honey` und `_captcha` stehen im Markup, werden im JSON-Body aber nicht mitgeschickt. Der Spam-Schutz ist damit wirkungslos.

**Umgesetzt:** Statuswerte `idle / sending / success / error` statt eines einzelnen `submitted`-Schalters. Bei Fehler bleibt das ausgefüllte Formular stehen und darüber erscheint eine Meldung mit klickbarer E-Mail-Adresse als Ausweichweg. Der Antwortkörper wird jetzt ausgewertet, nicht nur der HTTP-Status. Der Honeypot wird mitgeschickt. Während des Sendens ist der Button gesperrt und beschriftet sich um. Erfolgs- und Fehlermeldung sind als `role="status"` beziehungsweise `role="alert"` ausgezeichnet und bekommen den Fokus, damit Screenreader sie ansagen.

Im Browser gegen vier Fälle geprüft, alle mit dem erwarteten Ergebnis:

| Fall | Verhalten vorher | Verhalten jetzt |
|---|---|---|
| Versand erfolgreich | Bestätigung | Bestätigung |
| HTTP 500 | gar keine Reaktion | Fehlermeldung, Eingaben bleiben erhalten |
| Netzwerkabbruch | **falsche Erfolgsmeldung** | Fehlermeldung, Eingaben bleiben erhalten |
| HTTP 200 mit `success: false` | **falsche Erfolgsmeldung** | Fehlermeldung, Eingaben bleiben erhalten |

### A2. Google zeigt eine falsche Kennzahl
`src/app/layout.tsx:12, 24, 41, 56`

An vier Stellen steht wörtlich „6-0-0, 83% KO-Rate". Die Seite selbst zeigt seit dem Update vom 17.04.2026 „100% KO-Rate". Betroffen sind Meta-Description, OpenGraph, Twitter-Card und das Person-Schema. Das ist genau der Text, den Google im Suchergebnis und WhatsApp in der Link-Vorschau ausspielt.

**Fix:** Alle vier Stellen aus `profile` in `data.ts` interpolieren statt sie hart zu duplizieren. Dann passiert das beim nächsten Kampf nicht wieder. Aufwand: klein.

**Umgesetzt:** `layout.tsx` importiert jetzt `profile` aus `data.ts` und baut daraus zwei Textbausteine, die an allen vier Stellen verwendet werden. Nach dem nächsten Kampf reicht eine Änderung in `data.ts`. Im gebauten Output verifiziert: „83% KO-Rate" kommt nicht mehr vor, alle Metadaten zeigen „6-0-0, 100% KO-Rate". Bei der Gelegenheit mitgenommen: die Gedankenstriche in denselben Zeilen (Stilregel) und die falsch deklarierten Maße des Vorschaubilds (angegeben waren 1200×630, tatsächlich 1848×2768). **Offen bleibt**, dass dieses Bild im Hochformat ist und für Social-Vorschauen ein eigenes Querformat-Motiv gebraucht wird, siehe Block D.

### A3. Das Startbild schrumpft und legt schwarze Ränder frei
`src/components/sections/Hero.tsx:37-40`

Die Animation läuft von `scale: 1.05` auf `scale: 0.9`. Ein Wert unter 1,0 macht das Bild kleiner als seinen Container. Nachgemessen nach Ablauf der acht Sekunden:

| Ansicht | Viewport | Bild danach | sichtbarer schwarzer Rand |
|---|---|---|---|
| Desktop | 1440×900 | 1296×810 | 72 px links und rechts, 45 px oben und unten |
| Mobile | 390×844 | 351×760 | 19,5 px links und rechts, 42 px oben und unten |

Der Effekt heißt im Projekt „Ken Burns Zoom", ein Ken-Burns-Effekt zoomt aber hinein, nicht heraus und schon gar nicht unter die Containergröße.

**Fix:** Zielwert auf `1.0` oder höher setzen, zum Beispiel `1.15 → 1.0` für ein langsames Heranfahren. Aufwand: klein, eine Zeile.

**Umgesetzt:** Animation läuft jetzt von `1.0` auf `1.08`, also ein langsames Heranfahren statt eines Herauszoomens unter die Containergröße. Nachgemessen nach Ablauf der acht Sekunden: Das Bild überragt den Viewport in beiden Ansichten (Desktop 1555×972 bei 1440×900, Mobile 421×912 bei 390×844), kein Rand mehr sichtbar. Im Code steht jetzt ein Kommentar, dass der Zielwert nie unter 1,0 fallen darf.

### A4. Die Datenschutzerklärung beschreibt die falsche Infrastruktur
`src/app/datenschutz/page.tsx:72-97`

Drei belegte Abweichungen:
- **Der Hoster ist falsch benannt.** Im Text steht Netlify, gehostet wird seit dem Umzug bei Hostinger.
- **FormSubmit kommt überhaupt nicht vor.** Das Kontaktformular sendet an einen US-Dienst, also eine Drittlandübermittlung, die genannt werden muss.
- **Der Text behauptet, Daten würden nicht an Dritte weitergegeben.** Genau das passiert beim Absenden des Formulars.

Dazu passend: Am Formular selbst fehlt jeder Datenschutzhinweis und jeder Link zur Datenschutzerklärung.

**Fix:** Abschnitt zum Hosting auf Hostinger umschreiben, eigenen Abschnitt „Kontaktformular / FormSubmit" ergänzen (Anbieter, Datenkategorien, Zweck, Rechtsgrundlage, Drittlandübermittlung), den Weitergabe-Satz korrigieren, unter dem Absende-Button eine Hinweiszeile mit Link ergänzen. Aufwand: mittel.

*Hinweis: Das ist keine Rechtsberatung, sondern der Abgleich zwischen dem, was der Code tut, und dem, was der Text behauptet. Die Formulierungen gehören von jemandem geprüft, der das rechtlich verantworten kann.*

**Umgesetzt:** Abschnitt 4 nennt jetzt Hostinger mit Anschrift und verlinkt deren Datenschutzerklärung. Der Abschnitt zum Kontaktformular beschreibt die tatsächlichen Datenkategorien, beide Rechtsgrundlagen, den Einsatz von FormSubmit, die Übermittlung in die USA und den Ausweichweg per direkter E-Mail. Der falsche Satz zur Nichtweitergabe ist ersetzt durch eine Formulierung, die den tatsächlichen Zustellweg beschreibt, plus Löschfrist. Am Formular selbst steht jetzt unter dem Button ein Hinweis mit Verweis auf die Datenschutzerklärung. Im gebauten Output verifiziert: null Treffer für „Netlify", je ein Treffer für „Hostinger" und „FormSubmit", der alte Weitergabe-Satz ist verschwunden.

**Weiterhin zu klären, nicht durch Code lösbar:** Als Verantwortlicher steht Bernd Weiler beziehungsweise Valueate im Impressum und in der Datenschutzerklärung, die Anfragen laufen aber an das Postfach des Trainers. Wer die Seite rechtlich betreibt und wer Empfänger der Formulardaten ist, sollte einmal sauber festgelegt und dann in beiden Texten konsistent abgebildet werden.

### A5. Das Siegerbild-Popup blockiert jeden einzelnen Besuch
`src/components/ui/VictoryPopup.tsx:27, 31`

`useState(true)` ohne Merker: Das Popup erscheint bei jedem Seitenaufruf neu, auch beim zwanzigsten Besuch und vier Monate nach dem Kampf. Es sperrt den Seiten-Scroll und legt sich bildschirmfüllend vor den Inhalt. Google stuft solche Interstitials negativ ein, und für wiederkehrende Besucher ist es schlicht eine Hürde.

Auf Mobile kommt ein Darstellungsfehler dazu: Der Stempel ist mit fester Pixelgröße gesetzt und nimmt dort **79 Prozent der Bildbreite und 72 Prozent der Bildfläche** ein. Elisa ist auf dem Siegerbild kaum noch zu erkennen.

**Fix:** Anzeige einmalig machen (`localStorage`-Merker mit dem Kampfdatum als Schlüssel) plus Ablaufdatum. Stempelgröße relativ zur Bildbreite skalieren. Den Sieg dauerhaft als Banner oder in der Kampfliste zeigen statt als Sperrbildschirm. Aufwand: klein.

**Umgesetzt, abweichend vom Vorschlag:** Auf ausdrückliche Entscheidung wurde das Popup **vollständig entfernt** statt nur einmalig gemacht, weil der Kampf vom 12.04.2026 nicht mehr aktuell ist. Die Einbindung in `page.tsx` ist raus, die Komponente `VictoryPopup.tsx` bleibt mit einem erklärenden Kommentar liegen und kann nach einem neuen Sieg wieder eingehängt werden. Die beiden bekannten Schwächen (jedes Mal sichtbar, fester Stempel) sind im Kommentar vermerkt, damit sie beim Wiedereinsatz nicht erneut auftreten.

Angenehmer Nebeneffekt: `victory-stanglwirt.jpg` mit 3,83 MB wurde per `priority` vorgeladen und war damit das schwerste Element beim Seitenstart. Dieser Vorabruf ist jetzt weg. Die Datei muss aber im Projekt bleiben, weil das JSON-LD sie als Bild für den Titelkampf referenziert. Google holt sie beim Crawlen, Besucher laden sie nicht mehr mit. Verkleinern lohnt sich trotzdem, siehe B4.

Im Browser verifiziert: kein Stempel und kein Popup-Bild mehr im Dokument, `body`-Scrollsperre nicht mehr gesetzt, Seite ab dem ersten Moment scrollbar.

---

## B. Kurzfristig: sichtbare Qualität

### B1. Die Sponsorenlogos sind halb unsichtbar
`src/components/sections/Sponsors.tsx:24, 36-40`

Drei Effekte übereinander: `filter: invert(1) grayscale(1)`, `mixBlendMode: screen` und `opacity-40`. Das Ergebnis hängt vom Dateiformat ab, deshalb sieht jedes Logo anders aus:

| Logo | Format | Transparenz | Ergebnis auf der Seite |
|---|---|---|---|
| goodbean.webp | WebP | ja | gut lesbar |
| stanglwirt.png | PNG | nein, weißer Grund | fast unsichtbar |
| poolcultur.jpg | JPEG (CMYK-Druckfarbraum) | nein | fast unsichtbar |
| valueate.png | PNG | nein, weißer Grund | sichtbarer Kasten drumherum |

Zusätzlich entfernt `grayscale(1)` alle Markenfarben, und `opacity-40` drückt alles auf 40 Prozent Deckkraft. Das ungenutzte Feld `light?: boolean` in `src/types/index.ts:31` war offenbar als Lösung gedacht und wird nirgends ausgewertet.

**Auswirkung:** Wer Elisa unterstützt, wird schlechter dargestellt als auf jeder Vereinswebsite. Das ist das falsche Signal an bestehende und künftige Partner.

**Fix:** Filter und Blend-Mode entfernen. Pro Sponsor eine freigestellte Logovariante hinterlegen und auf eine helle Trägerfläche legen, so wie es die Projekt-CLAUDE.md ohnehin beschreibt. Grunddeckkraft auf mindestens 70 Prozent. `poolcultur.jpg` beim Sponsor als PNG oder SVG anfordern, die aktuelle Datei ist 750 KB groß im Druckfarbraum. Aufwand: mittel.

### B2. Auf dem Handy überlappen sich Bilanz und Scroll-Hinweis
`src/components/sections/Hero.tsx:219-235`

Nachgemessen bei 390×844: „All Wins by KO" endet bei y=757, „Scroll" beginnt bei y=756. Überlappung von 1 px vertikal und 63 px horizontal. Auf Desktop tritt das nicht auf (33 px Abstand). Ursache ist die Kombination aus `h-screen`, umbrechendem Text und dem absolut positionierten Scroll-Indikator.

**Fix:** Scroll-Indikator auf kleinen Viewports ausblenden oder den unteren Innenabstand des Inhaltsblocks erhöhen. Aufwand: klein.

### B3. Das Startbild ist zu klein für große Bildschirme
`public/images/hero-ring.jpg`

Die Datei ist 900×1600 Pixel bei 56 KB. Auf einem 1440er Bildschirm wird sie über die volle Breite gezogen, auf einem 4K-Monitor noch weiter. Das Bild ist sichtbar weich. Der Rest der Bibliothek hat das umgekehrte Problem (siehe B4), dieses eine Bild ist unterdimensioniert.

**Fix:** Aus dem Original in mindestens 2400 px Breite neu exportieren. Aufwand: klein.

### B4. 155 MB Assets, davon 143 MB Video in 4K
`public/videos/`, `public/images/`

Mit ffprobe nachgemessen:

| Datei | Größe | Auflösung | Bitrate | Länge |
|---|---|---|---|---|
| seilspringen.mp4 | 85,6 MB | 2160×3840 | 21,7 Mbit/s | 31,2 s |
| schattenboxen.mp4 | 43,9 MB | 2160×3840 | 20,2 Mbit/s | 17,2 s |
| bandage.mp4 | 17,3 MB | 2160×3840 | 10,5 Mbit/s | 13,0 s |

Die Videos werden in einem Rahmen von rund 400 px Breite abgespielt. Ausgeliefert wird 4K. Dazu kommt `victory-stanglwirt.jpg` mit 3,83 MB bei 4800×4000 Pixeln, das wegen `priority` per Preload noch vor allem anderen geladen wird und damit die gemessene Ladezeit dominiert.

Weil `next.config.ts` wegen des statischen Exports `images.unoptimized: true` setzt, erzeugt Next.js **kein einziges `srcset`** (im Build-Output verifiziert). Alle `sizes`-Angaben im Code sind wirkungslos, jedes Bild wird in voller Auflösung ausgeliefert. 18 von 37 Bildern im DOM sind mehr als doppelt so groß wie ihre Darstellung.

**Fix:**
- Videos einmalig auf 1080×1920 reencodieren, crf 23, Tonspur entfernen (sie laufen ohnehin stumm), `-movflags +faststart`. Erwartung: unter 15 MB gesamt statt 143 MB.
- `victory-stanglwirt.jpg` auf 1600 px lange Kante als WebP, gemessen rund 313 KB statt 3,83 MB. Es wird seit dem Entfernen des Popups nicht mehr von Besuchern geladen, aber vom JSON-LD als Bild des Titelkampfs referenziert und daher von Google abgerufen.
- Batch-Lauf über `public/images/`: lange Kante auf 1600 px, WebP mit Qualität 82.
- Vier unreferenzierte Bilder löschen (`gallery-team-emotion.jpg`, `gallery-studio-4.jpg`, `gallery-studio-5.jpg`, `Savethedate.jpeg`, zusammen 1,6 MB) sowie `public/__forms.html`, eine verwaiste Netlify-Datei, die öffentlich erreichbar und indexierbar ist.

Aufwand: mittel, ffmpeg ist auf dem Rechner vorhanden.

### B5. Die Galerie ist per Tastatur nicht bedienbar
`src/components/ui/FilmStrip.tsx:20-35`

Der Klick-Handler sitzt auf einem `<figure>`. Das ist nicht fokussierbar, es gibt kein `tabIndex`, kein `role`, kein `onKeyDown`. Die Lightbox lässt sich also ausschließlich mit Maus oder Finger öffnen. Ist sie offen, funktioniert sie korrekt (Escape schließt, der Schließen-Button ist ein echtes `<button>`), die Barriere liegt allein am Einstieg.

**Fix:** `<figure>` durch `<button type="button" aria-label={image.alt}>` ersetzen und einen goldenen Fokusring ergänzen. Dabei zwei Folgeprobleme mitlösen: Das Laufband pausiert bisher nur bei `:hover`, es muss auch bei `:focus-within` stoppen, sonst wandert das fokussierte Bild weg. Und die zweite Hälfte des verdoppelten Arrays braucht `aria-hidden` und `tabIndex={-1}`, sonst entstehen 32 statt 16 Tab-Stopps. Aufwand: klein.

### B6. Zu blasse Texte
`src/components/layout/Footer.tsx:10, 18, 24, 28, 33`, `src/components/sections/Contact.tsx:138, 152, 166, 180`

Gemessene Kontrastverhältnisse gegen den Hintergrund:
- Impressum- und Datenschutz-Link im Footer: **1,7:1** (Mindestwert 4,5:1)
- Formular-Platzhalter mit `text-white/20`: rund **2:1**
- Weitere Footer-Elemente mit `/40`-Opazität: unter 3:1

Dazu: `focus:outline-none` auf allen vier Formularfeldern entfernt den Fokusrahmen des Browsers und ersetzt ihn nur durch eine dezente Randfarbe.

**Fix:** Footer-Links auf `text-foreground/70`, Copyright auf `/60`, Platzhalter auf `text-white/40` oder heller. `focus:outline-none` durch `focus-visible:outline-2 focus-visible:outline-gold` ersetzen. Aufwand: klein, bleibt optisch zurückhaltend.

### B7. Bewegung ohne Ausschalter
`src/app/globals.css` (gesamte Datei), diverse Komponenten

`prefers-reduced-motion` wird an keiner Stelle des Projekts berücksichtigt. Dauerhaft laufen: das Galerie-Laufband (75 s Endlosschleife), drei Videos in Endlosschleife, der rotierende Funkenrahmen und der pulsierende Schein im Popup. Dazu die einmaligen, aber kräftigen Effekte: Bildschütteln im Popup, 18 wegfliegende Partikel, ein Stempel, der von 3,6-facher Größe heranspringt.

Für Menschen mit vestibulären Beschwerden ist besonders das Popup problematisch, weil es unausweichlich vor dem ersten Inhalt steht. WCAG 2.2.2 (Pause, Stop, Hide) ist Level A, also Grundanforderung.

**Fix:** Globalen `@media (prefers-reduced-motion: reduce)`-Block in `globals.css`, der Animationen und Übergänge auf ein Minimum setzt, plus Abfrage in den Framer-Motion-Komponenten. Aufwand: mittel.

**Nebenbefund:** `.breathe-zoom` in `globals.css:154-161` wird nirgends verwendet, toter Code. `spark-glow-pulse` animiert `box-shadow`, was den Browser dauerhaft neu zeichnen lässt. Besser über die Deckkraft eines Pseudo-Elements lösen.

### B8. Englische Fragmente auf einer deutschen Seite
`Hero.tsx:220, 234`, `Contact.tsx:24, 146`, `data.ts:25, 36, 129`

„All Wins by KO", „Scroll", „Let's Connect", „Email", „BDB German Super Fly".

**Fix:** „Alle Siege durch KO", Pfeil statt „Scroll" oder „Nach unten", „Kontakt aufnehmen", „E-Mail". Bei den Titel-Badges ist die englische Verbandsbezeichnung vertretbar, weil sie der offizielle Titelname ist, das sollte aber bewusst entschieden werden. Aufwand: klein.

### B9. Gedankenstriche als Pausenmarker
`Contact.tsx:27`, `layout.tsx:12, 33, 87, 102, 106, 123, 138`, `data.ts:25, 36`, `impressum/page.tsx:6`

Beispiel aus `Contact.tsx:27`: „Ob Medienanfragen, Sponsoring-Möglichkeiten oder Kooperationen – ich freue mich über jede Nachricht." Das Zeichen ist per Codepoint-Prüfung U+2013. Betrifft auch die Texte, die Google im Suchergebnis anzeigt.

**Fix:** Durch Punkt, Komma oder Doppelpunkt ersetzen. Aufwand: klein.

### B10. Die Anrede wechselt mitten auf der Seite
`Contact.tsx:139, 153, 181` gegen `impressum/page.tsx` und `datenschutz/page.tsx`

Das Formular duzt („Dein Name", „deine@email.de", „Deine Nachricht"), die Rechtstexte siezen. Für Fans passt Duzen, für einen Sponsoring-Entscheider, der über ein Budget verfügt, wirkt es unpassend. Der Fließtext daneben ist neutral gehalten und bricht dadurch nicht.

**Fix:** Anredefrei formulieren („Name", „E-Mail-Adresse", „Worum geht es?"). Das funktioniert für beide Zielgruppen. Aufwand: klein. **Das ist eine Entscheidung, keine reine Korrektur.**

---

## C. Substanz: was der Seite inhaltlich fehlt

Dieser Block ist kein Bugfix, sondern der eigentliche Hebel. Alle Punkte sind belegt durch die Prüfung, dass es die entsprechenden Inhalte im Projekt schlicht nicht gibt.

### C1. Es gibt keinen Fließtext über Elisa
Die Startseite besteht aus Überschriften, Kennzahlen, Bildern und Videos. Zusammenhängender Text existiert praktisch nicht. Wer sie nicht kennt, erfährt nichts: kein Werdegang, kein Alter, keine Herkunft, kein Kampfstil, keine Ziele, kein Verein, kein Trainingsstandort.

Das trifft zwei Gruppen gleichzeitig: Menschen, die verstehen wollen, wen sie da unterstützen sollen, und Suchmaschinen, die außer der Meta-Description kaum Text zum Indexieren finden.

**Maßnahme:** Sektion „Über mich" oder „Der Weg" zwischen Hero und Kämpfe, 200 bis 300 Wörter: Werdegang, Kampfstil (die hohe Abschlussquote lässt sich aus den eigenen Daten belegen), Trainingsumfeld, Ziele für die nächsten zwei Jahre. Aufwand: mittel, hauptsächlich Textarbeit mit Elisa.

### C2. Es gibt kein Sponsoring-Angebot
Die Sektion „Unterstützer" zeigt vier Logos und sonst nichts. Kein Satz dazu, was Sponsoring bei Elisa bedeutet, keine Leistungen, keine Reichweitenzahlen, keine Handlungsaufforderung. Ein Interessent müsste den Umweg über das allgemeine Kontaktformular gehen und selbst formulieren, was er eigentlich will.

Das ist besonders auffällig, weil im Projektordner bereits ein Outreach-Plan für einen großen Marken-Sponsor liegt. Die Website unterstützt diese Akquise aktuell nicht.

**Maßnahme:** Unter die Logos ein Sponsoring-Modul: kurzer Nutzenabsatz, zwei bis drei Paketstufen mit konkreten Leistungen (Logo auf Hose, Bandenwerbung, Social-Media-Nennungen, Auftritte), belastbare Reichweitenzahlen, eigener Kontaktweg mit vorbelegtem Betreff. Optional ein Sponsoring-PDF zum Herunterladen. Aufwand: mittel bis groß, inhaltlich abzustimmen.

### C3. Die Seite endet in der Vergangenheit
Es gibt keinen Hinweis auf den nächsten Kampf, keine Termine, keinen Ausblick. Der jüngste Eintrag ist vom 12.04.2026, also knapp vier Monate alt. Für Fans gibt es keinen Grund wiederzukommen, für Sponsoren keinen Anlass, jetzt zu handeln.

**Maßnahme:** Sektion „Nächster Kampf" oberhalb der Bilanz. Solange kein Datum feststeht, ein ehrlicher Platzhalter („Nächster Titelkampf in Planung"). Sobald ein Termin steht, mit `SportsEvent`-Schema im JSON-LD, dann kann Google ihn als Termin ausspielen. Aufwand: mittel.

### C4. Kein einziges Kampfvideo
`src/lib/data.ts:160-162`

Die drei Videos zeigen Bandagieren, Schattenboxen und Seilspringen. Alle drei sind Trainingsclips. Eine Boxerin mit sechs Siegen und einer Abschlussquote von 100 Prozent zeigt keine einzige Sekunde Wettkampf.

**Maßnahme:** Mindestens einen Highlight-Clip von 30 bis 60 Sekunden, inklusive des TKO gegen Oliwia Koziura, an die erste Stelle. Falls die Bildrechte beim Veranstalter liegen: Freigabe einholen, das ist erfahrungsgemäß machbar. Aufwand: mittel, abhängig von Material und Rechten.

### C5. Kein Pressebereich, kein Media-Kit
Journalisten und Sponsoren brauchen wiederkehrend dasselbe: Kurzvita zum Kopieren, freigegebene Fotos in Druckauflösung mit Copyright-Angabe, einen Ansprechpartner mit direkter E-Mail-Adresse. Nichts davon existiert. Auf der ganzen Seite gibt es keine einzige E-Mail-Adresse, nur Instagram-Profile und ein Formular.

**Maßnahme:** Pressebereich als Unterseite, plus eine direkte E-Mail-Adresse für Anfragen. Aufwand: mittel.

### C6. Der Fotograf wird nirgends genannt
Die Galeriebilder tragen das Wasserzeichen „© marc_rene_lochmann". Weder im Impressum noch sonst irgendwo auf der Seite wird er als Urheber genannt.

**Maßnahme:** Bildnachweis ins Impressum, optional ein `credit`-Feld pro Bild in `src/types/index.ts` und Anzeige in der Lightbox. Aufwand: klein.

---

## D. Feinschliff

### Struktur und Auszeichnung
- **Die Überschrift der Seite lautet für Suchmaschinen „ELISAFREY"** (ohne Leerzeichen). `TextReveal` setzt jeden Buchstaben einzeln, der Zeilenumbruch dazwischen erzeugt keinen Wortabstand im Textinhalt. Gemessen in beiden Ansichten. Fix: `aria-label="Elisa Frey"` am `<h1>`. Klein.
- **Alle Kampfkarten stehen doppelt im DOM.** Desktop- und Mobile-Variante werden beide gerendert und nur per CSS ein-/ausgeblendet. Gemessen: 9 Überschriften für 6 Kämpfe, 3 davon doppelt. Screenreader lesen alles zweimal. Klein bis mittel.
- **Vier von sechs Kämpfen fehlen im JSON-LD.** `layout.tsx:68-139` enthält nur die beiden Titelkämpfe. Mittel.
- **Das OpenGraph-Bild ist im Hochformat.** `hero-belt.jpg` ist 1848×2768, deklariert werden 1200×630. Facebook, LinkedIn und WhatsApp schneiden es unkontrolliert zu. Fix: dediziertes Vorschaubild in 1200×630. Klein.
- **`sitemap.xml` hat kein `lastmod`** und wurde seit dem Kampf-Update nicht angefasst. Klein.
- **Das Impressum beruft sich durchgehend auf das TMG**, das seit 2024 durch das DDG abgelöst ist. Betroffen: `impressum/page.tsx:6, 30, 59-60`. Klein.
- **Als Verantwortlicher im Impressum steht die Agentur, nicht Elisa Frey.** Das sollte bewusst geklärt werden, je nachdem wer die Seite tatsächlich betreibt.

### Design-System
- **Das Sieg-Kürzel „W" ist neongrün** (`FightCard.tsx:40`, `text-green-400` = #4ade80). Das ist die lauteste Farbe der gesamten Seite und steht in keiner Beziehung zur Palette. Fix: `text-gold`. Klein.
- **Rot ist unbemerkt zur zweiten Markenfarbe geworden.** #C8102E steht zehnmal im Popup-Stempel, dazu #ff5a6e in den Partikeln, dazu weitere Rottöne im Favicon. Keiner davon ist als Token hinterlegt. Entscheidung nötig: entweder als Zweitfarbe dokumentieren oder auf Gold vereinheitlichen.
- **Vier konkurrierende Definitionen derselben Glasoberfläche.** `glass-card` in `globals.css` gegen Inline-Styles in `RecordStat.tsx` und anderen. Mittel.
- **Zwei verschiedene Hellgold-Werte:** `--color-gold-light: #d4b366` als Token, daneben viermal hartkodiert #f5e6b8. Klein.
- **Die Bilanz gewichtet 6 Siege genauso stark wie 0 Niederlagen und 0 Unentschieden.** Drei gleich große Karten nebeneinander. Die Geschichte ist „sechs Siege, alle vorzeitig", nicht „drei Zahlen". Auf Mobile werden die Beschriftungen zudem zu „Ndl." und „Unent." abgekürzt, was schwer verständlich ist. Gestalterische Entscheidung, mittel.
- **Die Galerie zeigt auf Desktop nur zweieinhalb Bilder gleichzeitig.** 16 Bilder laufen in einem einzelnen Laufband durch, das 75 Sekunden für einen Umlauf braucht. Wer nicht wartet, sieht einen Bruchteil. Überlegenswert: Laufband plus darunter ein Raster, oder ein schnelleres Band. Mittel.
- **Die Navigation zeigt nicht, wo man gerade ist.** Kein aktiver Zustand beim Scrollen. Klein.

### Technik
- **`npm run lint` schlägt fehl.** Ein Fehler in `VideoCard.tsx:25`, Regel `react-hooks/set-state-in-effect`. Klein.
- **Die Unterstreichung der Navigationslinks animiert `width`** (`globals.css:168-182`). Breitenänderungen zwingen den Browser zum Neuberechnen des Layouts. Sauberer über `transform: scaleX()` mit `transform-origin`. Klein.
- **Die Scroll-Sperre ist dreifach implementiert**, in `Navbar.tsx:25-31` ohne Aufräumfunktion. Wenn Popup und Menü zusammentreffen, kann die Seite gesperrt bleiben. Klein.
- **Der Deploy-Workflow hat keinerlei Größenprüfung.** Nach der Bildoptimierung wäre ein Schwellwert sinnvoll, damit nicht unbemerkt wieder 4K-Videos ins Repository wandern. Klein.
- **Popup und Lightbox haben keine Dialog-Semantik** (`role="dialog"`, `aria-modal`, Fokusverwaltung). Mittel.
- **Kein Sprunglink zum Inhalt**, beide `<nav>`-Elemente ohne Bezeichnung. Klein.

---

## Was gut ist

Damit die Liste nicht den Eindruck erweckt, die Seite sei schlecht:

- **Die visuelle Handschrift sitzt.** Dunkel, Gold, viel Ruhe, große Typografie. Das wirkt wertig und nicht nach Baukasten.
- **Die Bildsprache ist stark.** Die Stanglwirt-Bilder mit dem einheitlichen Color-Grading sind das beste Argument der Seite.
- **Der Aufbau ist richtig sortiert.** Wer sie ist, was sie geleistet hat, wie sie aussieht, wer sie unterstützt, wie man sie erreicht.
- **Die Mobile-Anpassung ist durchdacht**, etwa das Aufklappen der Kampfliste statt endloser Scrollstrecke.
- **Das Fundament ist sauber:** typisierte Daten an einer zentralen Stelle, wiederverwendbare Animations-Komponenten, ein echtes Design-Token-System. Die Abweichungen oben sind Ausreißer, nicht die Regel.

---

## Vorschlag zur Reihenfolge

**Schritt 1: erledigt am 02.08.2026.** A1 bis A5 sind umgesetzt und im Browser gegengeprüft. **Offen und wichtig:** Re-Indexierung in der Search Console beantragen, sobald der Hostinger-Deploy durch ist. Die Meta-Description hat sich geändert, Google zeigt sonst weiter die alte Fassung mit der falschen KO-Rate.

**Schritt 2, ein Abend:** B1 (Sponsorenlogos) und B4 (Assets). Beide haben sofort sichtbare Wirkung, das eine gestalterisch, das andere bei der Ladezeit auf dem Handy.

**Schritt 3, verteilt:** restliche B-Punkte. Viele davon sind Einzeiler.

**Schritt 4, mit Elisa gemeinsam:** Block C. Das ist Textarbeit und braucht ihre Zuarbeit, hat aber den größten Effekt auf das eigentliche Ziel.

**Schritt 5, bei Gelegenheit:** Block D.

---

## Methodik

- **Code-Audit:** sechs parallele Prüfungen (Barrierefreiheit, Inhalt, SEO, Ladezeit, Recht, Design-System) über den vollständigen Quellcode, jeweils mit der Auflage, jeden Befund mit Datei, Zeile oder Messwert zu belegen.
- **Gegenprüfung:** jeder einzelne Befund wurde von einer unabhängigen zweiten Prüfung am Code nachgerechnet. 60 von 65 haben das überstanden, 5 wurden verworfen (darunter eine falsche Norm-Auslegung bei Touch-Zielen und eine unbelegte Behauptung zu einem Schema.org-Feld).
- **Visuelle Prüfung:** Seite im echten Browser gerendert, Desktop 1440×900 und Mobile 390×844, sektionsweise Aufnahmen nach vollständigem Durchscrollen, plus gezielte Messungen von Element-Positionen, Bildauflösungen und Kontrastwerten.
- **Asset-Messung:** Dateigrößen, Pixelmaße, Farbräume und Videobitraten direkt an den Dateien gemessen, nicht geschätzt.

Nicht geprüft: tatsächliche Ladezeiten unter echten Netzbedingungen (nur lokal gemessen), Verhalten in Safari und Firefox (geprüft wurde Chromium), Rechtstexte auf inhaltliche Richtigkeit (nur auf Übereinstimmung mit dem Code).
