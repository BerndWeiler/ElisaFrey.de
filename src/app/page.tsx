"use client";

import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Fights from "@/components/sections/Fights";
import Sponsors from "@/components/sections/Sponsors";
import Gallery from "@/components/sections/Gallery";
import Videos from "@/components/sections/Videos";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

// Hinweis: Das Sieger-Popup (VictoryPopup) ist bewusst nicht eingebunden.
// Es lag als Sperrbildschirm vor jedem Seitenaufruf und war nach dem Kampf
// vom 12.04.2026 nicht mehr aktuell. Die Komponente bleibt unter
// src/components/ui/VictoryPopup.tsx liegen und kann nach einem neuen Sieg
// wieder eingebunden werden. Dann aber bitte nur einmalig anzeigen
// (localStorage-Merker) und die Stempelgroesse relativ zur Bildbreite setzen.

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <Fights />
        <Gallery />
        <Videos />
        <Sponsors />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
