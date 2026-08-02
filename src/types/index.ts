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
