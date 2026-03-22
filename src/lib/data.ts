import { Fight, GalleryImage, Sponsor, Video } from "@/types";

export const profile = {
  name: "Elisa Frey",
  nickname: "",
  record: { wins: 5, losses: 0, draws: 0 },
  koRate: 100,
  kos: 5,
  title: "BDB Deutsche Meisterin",
  weightClass: "Super-Fliegengewicht",
  instagram: "https://www.instagram.com/eliisa.frey/",
  instagramHandle: "@eliisa.frey",
};

export const fights: Fight[] = [
  {
    id: 1,
    opponent: "Nicole Purwins",
    date: "15.04.2025",
    location: "Stanglwirt, Going am Wilden Kaiser",
    result: "W",
    method: "TKO",
    round: 5,
    isTitle: true,
    title: "BDB Deutsche Meisterschaft",
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

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/hero-belt.jpg",
    alt: "Elisa Frey mit BDB Meisterschaftsgürtel",
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
    logo: "/images/sponsors/goodbean.webp",
    url: "https://goodbean.coffee/",
  },
  {
    name: "Poolcultur",
    logo: "/images/sponsors/poolcultur.jpg",
    url: "https://www.poolcultur.de/",
  },
  {
    name: "Valueate",
    logo: "/images/sponsors/valueate.png",
    url: "https://valueate.de/",
  },
];
