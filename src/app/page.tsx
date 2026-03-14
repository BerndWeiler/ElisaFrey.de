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
import SaveTheDate from "@/components/ui/SaveTheDate";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <SaveTheDate />
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
