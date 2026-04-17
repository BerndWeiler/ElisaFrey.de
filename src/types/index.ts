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
  url: string;
  /** Logo is already light/suited for dark backgrounds — skip invert filter */
  light?: boolean;
}
