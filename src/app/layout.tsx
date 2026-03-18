import type { Metadata } from "next";
import { bebasNeue, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.elisafrey.com"),
  title: "Elisa Frey | Unbesiegte Deutsche Meisterin im Profi-Boxen",
  description:
    "Elisa Frey – Unbesiegte Profi-Boxerin (5-0-0, 100% KO-Rate), BDB Deutsche Meisterin im Super-Fliegengewicht.",
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
      "Unbesiegte Profi-Boxerin (5-0-0, 100% KO-Rate), BDB Deutsche Meisterin im Super-Fliegengewicht.",
    url: "https://www.elisafrey.com",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
