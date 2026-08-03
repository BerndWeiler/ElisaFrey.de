export interface Fight {
  id: number;
  opponent: string;
  date: string;
  location: string;
  result: "W" | "L" | "D";
  method?: string;
  round?: number;
  isTitle?: boolean;
  title?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  span?: "tall" | "wide" | "normal";
}

export interface Video {
  id: string;
  src: string;
  title: string;
  poster?: string;
}

/**
 * Der naechste Kampftermin. Solange `datum` fehlt, zeigt die Sektion den
 * ehrlichen Platzhaltertext statt eines erfundenen Termins.
 */
export interface NaechsterKampf {
  /** Format DD.MM.YYYY. Leer lassen, solange kein Termin bestaetigt ist. */
  datum?: string;
  /** ISO-Format YYYY-MM-DD, wird fuer das JSON-LD und die Restzeit gebraucht. */
  datumIso?: string;
  gegnerin?: string;
  ort?: string;
  titel?: string;
  /** Wird angezeigt, solange kein Datum feststeht. */
  platzhalter: string;
}

/**
 * Ein Absatz der Sektion „Der Weg".
 * `vonElisa` markiert Absaetze, die Elisa selbst schreiben muss. Sie werden
 * im Entwurfsmodus sichtbar als Luecke dargestellt, damit beim Durchsehen
 * klar ist, was noch fehlt und wie viel Text dort hingehoert.
 */
export interface WegAbsatz {
  text: string;
  vonElisa?: boolean;
}

export interface Presseartikel {
  medium: string;
  titel: string;
  /** Anzeigeformat DD.MM.YYYY */
  datum: string;
  url: string;
  /** Ein Satz dazu, worum es geht. Steht unter dem Titel. */
  notiz: string;
}

export interface SponsoringPaket {
  name: string;
  beschreibung: string;
  leistungen: string[];
  /** Hebt die empfohlene Stufe optisch hervor (glass-gold). */
  hervorgehoben?: boolean;
}

export interface Sponsor {
  name: string;
  logo: string;
  /**
   * Logos werden freigestellt (transparenter Hintergrund) erwartet. Die
   * Darstellung vereinheitlicht sie per CSS zur hellen Silhouette und zeigt
   * die Markenfarben erst im aktiven Zustand, siehe .sponsor-logo in globals.css.
   */
  url: string;
}
