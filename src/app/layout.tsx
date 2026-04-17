import type { Metadata } from "next";
import { bebasNeue, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://elisafrey.com"),
  alternates: {
    canonical: "https://elisafrey.com",
  },
  title: "Elisa Frey | Unbesiegte Deutsche Meisterin im Profi-Boxen",
  description:
    "Elisa Frey – Unbesiegte Profi-Boxerin (6-0-0, 83% KO-Rate), BDB Deutsche Meisterin im Super-Fliegengewicht.",
  keywords: [
    "Elisa Frey",
    "Boxen",
    "Deutsche Meisterin",
    "Super-Fliegengewicht",
    "BDB",
    "Profi-Boxen",
  ],
  openGraph: {
    title: "Elisa Frey | Unbesiegte Deutsche Meisterin",
    description:
      "Unbesiegte Profi-Boxerin (6-0-0, 83% KO-Rate), BDB Deutsche Meisterin im Super-Fliegengewicht.",
    url: "https://elisafrey.com",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/images/hero-belt.jpg",
        width: 1200,
        height: 630,
        alt: "Elisa Frey – Unbesiegte Deutsche Meisterin im Profi-Boxen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elisa Frey | Unbesiegte Deutsche Meisterin",
    description:
      "Unbesiegte Profi-Boxerin (6-0-0, 83% KO-Rate), BDB Deutsche Meisterin im Super-Fliegengewicht.",
    images: ["/images/hero-belt.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Elisa Frey",
      url: "https://elisafrey.com",
      image: "https://elisafrey.com/images/hero-belt.jpg",
      jobTitle: "Professionelle Boxerin",
      description:
        "Unbesiegte Profi-Boxerin (6-0-0, 83% KO-Rate), BDB Deutsche Meisterin im Super-Fliegengewicht.",
      sameAs: [
        "https://www.instagram.com/eliisa.frey/",
        "https://boxrec.com/en/box-pro/1235889",
      ],
      knowsAbout: [
        "Profi-Boxen",
        "Super-Fliegengewicht",
        "BDB Deutsche Meisterschaft",
      ],
      award: "BDB Deutsche Meisterin im Super-Fliegengewicht",
    },
    {
      "@type": "SportsEvent",
      name: "BDB Deutsche Meisterschaft im Super-Fliegengewicht",
      image: "https://elisafrey.com/images/hero-belt.jpg",
      startDate: "2025-04-15",
      endDate: "2025-04-15",
      eventStatus: "https://schema.org/EventCompleted",
      location: {
        "@type": "Place",
        name: "Stanglwirt",
        address: "Going am Wilden Kaiser, Österreich",
      },
      performer: {
        "@type": "Person",
        name: "Elisa Frey",
        url: "https://elisafrey.com",
      },
      organizer: {
        "@type": "Organization",
        name: "BDB — Bund Deutscher Berufsboxer",
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/SoldOut",
        price: "0",
        priceCurrency: "EUR",
        validFrom: "2025-03-01",
        url: "https://elisafrey.com/#kaempfe",
      },
      competitor: [
        { "@type": "Person", name: "Elisa Frey" },
        { "@type": "Person", name: "Nicole Purwins" },
      ],
      description:
        "BDB Deutsche Meisterschaft — Elisa Frey vs Nicole Purwins, Sieg durch TKO in Runde 5.",
    },
    {
      "@type": "SportsEvent",
      name: "BDB German Super Fly — Titelverteidigung",
      image: "https://elisafrey.com/images/victory-stanglwirt.jpg",
      startDate: "2026-04-12T20:00:00+02:00",
      endDate: "2026-04-12T23:00:00+02:00",
      eventStatus: "https://schema.org/EventCompleted",
      location: {
        "@type": "Place",
        name: "Hotel Stanglwirt",
        address: "Going am Wilden Kaiser, Österreich",
      },
      performer: {
        "@type": "Person",
        name: "Elisa Frey",
        url: "https://elisafrey.com",
      },
      organizer: {
        "@type": "Organization",
        name: "BDB — Bund Deutscher Berufsboxer",
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/SoldOut",
        price: "0",
        priceCurrency: "EUR",
        validFrom: "2026-03-01",
        url: "https://elisafrey.com/#kaempfe",
      },
      competitor: [
        { "@type": "Person", name: "Elisa Frey" },
        { "@type": "Person", name: "Oliwia Koziura" },
      ],
      description:
        "BDB German Super Fly — Elisa Frey verteidigt ihren Titel am 12.04.2026 im Hotel Stanglwirt gegen Oliwia Koziura und gewinnt.",
    },
    {
      "@type": "WebSite",
      name: "Elisa Frey",
      url: "https://elisafrey.com",
      inLanguage: "de",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
