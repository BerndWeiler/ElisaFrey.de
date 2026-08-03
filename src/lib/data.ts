import {
  Fight,
  GalleryImage,
  NaechsterKampf,
  Presseartikel,
  Sponsor,
  SponsoringPaket,
  Video,
  WegAbsatz,
} from "@/types";

/**
 * ENTWURFSMODUS
 *
 * Solange `true`, werden alle Stellen, an denen noch Text oder Zahlen von
 * Elisa fehlen, sichtbar als Luecke markiert. Das ist der Zustand, in dem sie
 * die Seite zur Freigabe sieht: Sie erkennt sofort, was noch von ihr kommt.
 *
 * Sobald alle Platzhalter ersetzt sind, hier auf `false` stellen. Dann
 * verschwinden die Markierungen und die Seite ist oeffentlich vorzeigbar.
 */
export const ENTWURFSMODUS = true;

export const profile = {
  name: "Elisa Frey",
  nickname: "",
  record: { wins: 6, losses: 0, draws: 0 },
  koRate: 100,
  kos: 6,
  title: "BDB Deutsche Meisterin",
  weightClass: "Super-Fliegengewicht",
  instagram: "https://www.instagram.com/eliisa.frey/",
  instagramHandle: "@eliisa.frey",
};

export const fights: Fight[] = [
  {
    id: 6,
    opponent: "Oliwia Koziura",
    date: "12.04.2026",
    location: "Stanglwirt, Going am Wilden Kaiser",
    result: "W",
    method: "TKO",
    round: 3,
    isTitle: true,
    title: "BDB German Super Fly: Titel verteidigt",
  },
  {
    id: 1,
    opponent: "Nicole Purwins",
    date: "15.04.2025",
    location: "Stanglwirt, Going am Wilden Kaiser",
    result: "W",
    method: "TKO",
    round: 5,
    isTitle: true,
    title: "BDB German Super Fly: Titelgewinn",
  },
  {
    id: 2,
    opponent: "Betina Krumholz",
    date: "09.2024",
    location: "Grossgmain",
    result: "W",
    method: "KO",
    round: 1,
  },
  {
    id: 3,
    opponent: "Betina Krumholz",
    date: "06.2024",
    location: "Stanglwirt, Going am Wilden Kaiser",
    result: "W",
    method: "TKO",
    round: 3,
  },
  {
    id: 4,
    opponent: "Cecile Forstner",
    date: "04.2024",
    location: "Next Generation Fight Club, Landau",
    result: "W",
    method: "TKO",
    round: 1,
  },
  {
    id: 5,
    opponent: "Emely Harsch",
    date: "03.2024",
    location: "Stanglwirt, Going am Wilden Kaiser",
    result: "W",
    method: "KO",
    round: 1,
  },
];

/**
 * Naechster Kampf.
 * Sobald ein Termin feststeht: `datum`, `datumIso`, `gegnerin`, `ort` und
 * `titel` ausfuellen. Dann bitte auch einen `SportsEvent`-Eintrag im JSON-LD
 * in src/app/layout.tsx ergaenzen, sonst kennt Google den Termin nicht.
 */
export const naechsterKampf: NaechsterKampf = {
  platzhalter: "Der nächste Titelkampf ist in Planung. Termin folgt.",
};

/**
 * Sektion „Der Weg".
 *
 * Nichts hiervon ist erfunden. Jeder Satz steht entweder in den Kampfdaten
 * weiter oben in dieser Datei oder in einem der beiden Artikel unter
 * `presseartikel`:
 *
 * - Absatz 1: Kampfdaten dieser Datei.
 * - Absatz 2: Alter, Sportstudium, Kurse am Stanglwirt und die Kinderstunden
 *   stehen in beiden Artikeln (Krone 17.04.2026, JetSet-Media 20.04.2026).
 * - Absatz 3: Bjoern Schulz als sportlicher Leiter, die Vorbereitung mit
 *   Ralf Moeller und Jana Ina Zarella stehen in der Krone.
 * - Absatz 4: Benefizzweck und die Zusammenarbeit mit dem Irmengard Hof
 *   stehen in JetSet-Media, dort auch als Zitat von Elisa und Bjoern Schulz.
 *   Die Spendensumme steht bewusst nicht drin: Die Krone nennt 12.000 Euro,
 *   JetSet-Media ueber 7.000 Euro. Widersprueche gehoeren nicht auf die Seite.
 *
 * Elisa muss den Text trotzdem lesen und freigeben. Auch Redaktionen irren:
 * Die Krone schreibt „Verena Pooth" statt Verona und „Oliwa Koziura" statt
 * Oliwia.
 */
export const wegAbsaetze: WegAbsatz[] = [
  {
    text:
      "Sechs Kämpfe, sechs Siege, keiner davon über die volle Distanz. Fünf endeten in der ersten oder dritten Runde. Im April 2025 habe ich am Stanglwirt den Titel der BDB Deutschen Meisterin im Super-Fliegengewicht geholt, ein Jahr später habe ich ihn am selben Ort gegen Oliwia Koziura verteidigt, durch technischen K. o. in Runde drei.",
  },
  {
    text:
      "Ich bin 23 und studiere Sport. Der Stanglwirt in Going ist mein zweites Zuhause. Dort trainiere ich, und dort stehe ich auch selbst vor der Gruppe: Ich gebe Box- und Fitnesskurse, dazu eigene Stunden für die Kinder unter den Gästen.",
  },
  {
    text:
      "Trainiert und geführt werde ich von Björn Schulz, dem sportlichen Leiter am Stanglwirt. Auf die Titelverteidigung im April habe ich mich unter anderem mit Ralf Moeller und Jana Ina Zarella vorbereitet.",
  },
  {
    text:
      "Der Kampfabend war zugleich eine Benefizveranstaltung. Der Erlös ging an den Irmengard Hof der Björn Schulz Stiftung, eine Einrichtung für Familien mit schwer und chronisch kranken Kindern. Wir haben dort schon mehrfach mit den Kindern und ihren Eltern trainiert. Diesen Ort zu unterstützen war uns eine Herzensangelegenheit.",
  },
  {
    vonElisa: true,
    text:
      "Was noch fehlt, ist der Anfang und das Ziel: wie ich zum Boxen gekommen bin, woher ich komme, in welchem Verein ich angefangen habe. Und wo ich in zwei Jahren stehen will, welcher Titel, welche Gegnerin.",
  },
];

/**
 * Sponsoring-Pakete.
 * ENTWURF. Die Leistungen sind ein Vorschlag und muessen mit Elisa und ihrem
 * Management abgestimmt werden, bevor die Seite oeffentlich geht. Preise
 * stehen bewusst nicht drin, das ist im Sponsoring ueblich und haelt die
 * Verhandlung offen.
 */
export const sponsoringPakete: SponsoringPaket[] = [
  {
    name: "Bronze",
    beschreibung: "Der Einstieg. Sichtbarkeit auf der Website und in den Kanälen.",
    leistungen: [
      "Logo auf dieser Website, verlinkt auf Ihre Seite",
      "Nennung in den Beiträgen rund um jeden Kampf",
      "Freigegebenes Bildmaterial zur eigenen Verwendung",
    ],
  },
  {
    name: "Silber",
    beschreibung: "Sichtbar im Ring, an dem Ort, an dem die Kameras stehen.",
    leistungen: [
      "Alle Leistungen aus Bronze",
      "Logo auf Hose und Robe",
      "Nennung bei Ringansage und in Interviews",
      "Gemeinsame Aufnahmen aus dem Training",
      "Ihre Präsenz vor Ort an den Kampfterminen",
    ],
  },
  {
    // Die oberste Stufe traegt als einzige den Goldrahmen. Gold ist auf dieser
    // Seite die Auszeichnungsfarbe, deshalb muss sie zur Stufe „Gold" gehoeren
    // und nicht zu einer darunter.
    name: "Gold",
    beschreibung: "Die exklusive Stufe. Eine Marke, ein Auftritt.",
    hervorgehoben: true,
    leistungen: [
      "Alle Leistungen aus Silber",
      "Exklusive Position auf der Kampfausrüstung",
      "Auftritte bei Ihren Firmenterminen, auf Wunsch mit Trainingseinheit",
      "Gemeinsame Kampagne, inhaltlich frei abgestimmt",
    ],
  },
];

/**
 * Reichweitenzahlen fuer das Sponsoring-Modul.
 * Leerer `wert` heisst: Zahl liegt noch nicht vor. Solche Eintraege werden
 * nicht als leere Karte angezeigt, sondern im Entwurfsmodus als Luecke
 * aufgelistet. Nichts hiervon schaetzen, ein Sponsor prueft das nach.
 *
 * Instagram ist Elisas einziger Kanal, TikTok gibt es nicht (Stand 03.08.2026).
 */
export const reichweite = [
  { wert: "6.900", label: "Follower auf Instagram" },
  { wert: "", label: "Zuschauer am Kampfabend" },
  { wert: "", label: "Reichweite pro Kampfbeitrag" },
];

/**
 * Berichterstattung. Steht im Pressebereich.
 * Beide Artikel am 03.08.2026 abgerufen und inhaltlich geprueft. Neue
 * Eintraege bitte nur mit tatsaechlich geprueftem Titel und Datum, nicht
 * aus dem Gedaechtnis.
 */
export const presseartikel: Presseartikel[] = [
  {
    medium: "Kronen Zeitung",
    titel: "Mit früherem Mr. Universum zum Box-Triumph",
    datum: "17.04.2026",
    url: "https://www.krone.at/4109751",
    notiz:
      "Bericht über die Titelverteidigung am Stanglwirt, mit Stimmen aus dem Umfeld des Kampfabends.",
  },
  {
    medium: "JetSet-Media",
    titel: "Charity-Kampf von Profiboxerin Elisa Frey im Bio-Hotel Stanglwirt",
    datum: "20.04.2026",
    url: "https://www.jetset-media.de/charity-kampf-von-profiboxerin-elisa-frey-im-bio-hotel-stanglwirt/",
    notiz:
      "Ausführliche Reportage vom Kampfabend, dessen Erlös an den Irmengard Hof der Björn Schulz Stiftung ging.",
  },
];

/** Bildrechte. Steht im Impressum und im Pressebereich. */
export const fotograf = {
  name: "Marc-Rene Lochmann",
  /** So lautet das Wasserzeichen in den Aufnahmen. */
  handle: "@marc_rene_lochmann",
  instagram: "https://www.instagram.com/marc_rene_lochmann/",
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery-stanglwirt-sieg-1.jpg",
    alt: "Elisa Frey nach der Titelverteidigung am Stanglwirt, 12.04.2026",
    span: "normal",
  },
  {
    src: "/images/gallery-stanglwirt-team.jpg",
    alt: "Elisa Frey mit Team und Unterstützern nach dem Titelkampf",
    span: "normal",
  },
  {
    src: "/images/gallery-stanglwirt-ecke.jpg",
    alt: "Elisa Frey wird in der Ringecke vorbereitet",
    span: "normal",
  },
  {
    src: "/images/gallery-stanglwirt-action.jpg",
    alt: "Kampfszene am Stanglwirt",
    span: "normal",
  },
  {
    src: "/images/gallery-stanglwirt-ring.jpg",
    alt: "Elisa Frey im Ring am Stanglwirt",
    span: "normal",
  },
  {
    src: "/images/gallery-stanglwirt-sieg-2.jpg",
    alt: "Siegermoment nach der BDB Titelverteidigung",
    span: "normal",
  },
  {
    src: "/images/hero-belt.jpg",
    alt: "Elisa Frey mit BDB Meisterschaftsgürtel",
    span: "tall",
  },
  {
    src: "/images/gallery-stanglwirt-portrait.jpg",
    alt: "Elisa Frey konzentriert vor dem Kampf",
    span: "tall",
  },
  {
    src: "/images/gallery-golden-gloves.jpg",
    alt: "Elisa Frey mit goldenen Boxhandschuhen",
    span: "tall",
  },
  {
    src: "/images/gallery-fight-mountains.jpg",
    alt: "Elisa Frey im Kampf vor Bergkulisse",
    span: "normal",
  },
  {
    src: "/images/gallery-faceoff.jpg",
    alt: "Face-Off im Ring",
    span: "normal",
  },
  {
    src: "/images/gallery-ring-corner.jpg",
    alt: "Elisa Frey in der Ringecke",
    span: "normal",
  },
  {
    src: "/images/gallery-fight-action.jpg",
    alt: "Kampfszene mit Ringrichter",
    span: "normal",
  },
  {
    src: "/images/gallery-action-studio.jpg",
    alt: "Elisa Frey im Studio",
    span: "normal",
  },
  {
    src: "/images/gallery-profile-ring.jpg",
    alt: "Elisa Frey Profil im Ring",
    span: "tall",
  },
  {
    src: "/images/gallery-weighin.jpg",
    alt: "Wiegen vor dem Kampf",
    span: "normal",
  },
];

export const videos: Video[] = [
  { id: "1", src: "/videos/bandage.mp4", title: "Bandagierung", poster: "/images/poster-bandage.jpg" },
  { id: "2", src: "/videos/schattenboxen.mp4", title: "Schattenboxen", poster: "/images/poster-schattenboxen.jpg" },
  { id: "3", src: "/videos/seilspringen.mp4", title: "Seilspringen", poster: "/images/poster-seilspringen.jpg" },
];

export const sponsors: Sponsor[] = [
  {
    name: "Stanglwirt",
    logo: "/images/sponsors/stanglwirt.png",
    url: "https://www.stanglwirt.com/",
  },
  {
    name: "Goodbean",
    logo: "/images/sponsors/goodbean.png",
    url: "https://goodbean.coffee/",
  },
  {
    name: "Poolcultur",
    logo: "/images/sponsors/poolcultur.png",
    url: "https://www.poolcultur.de/",
  },
  {
    name: "Valueate",
    logo: "/images/sponsors/valueate.png",
    url: "https://valueate.de/",
  },
];
