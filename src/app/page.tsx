"use client";

import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Fights from "@/components/sections/Fights";
import Gallery from "@/components/sections/Gallery";
import Videos from "@/components/sections/Videos";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <Fights />
        <Gallery />
        <Videos />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
