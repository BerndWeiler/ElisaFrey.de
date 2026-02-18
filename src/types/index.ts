export interface Fight {
  id: number;
  opponent: string;
  date: string;
  location: string;
  result: "W" | "L" | "D";
  method: string;
  round: number;
  isTitle?: boolean;
  title?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  span?: "tall" | "wide" | "normal";
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface Video {
  id: string;
  src: string;
  title: string;
}
