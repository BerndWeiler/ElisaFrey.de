"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { sponsors } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { staggerItem } from "@/components/animations/StaggerChildren";

export default function Sponsors() {
  return (
    <section id="unterstuetzer" className="relative py-20 md:py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Unterstützer" />

        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 items-center">
          {sponsors.map((sponsor) => (
            <motion.a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerItem}
              className={`group relative mx-auto w-full transition-all duration-500 opacity-40 hover:opacity-80 ${
                sponsor.name === "Valueate"
                  ? "h-15 md:h-[70px] max-w-[225px]"
                  : "h-12 md:h-14 max-w-[180px]"
              }`}
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                fill
                className="object-contain transition-all duration-500"
                sizes="(max-width: 768px) 140px, 180px"
                style={{
                  filter: "invert(1) grayscale(1)",
                  mixBlendMode: "screen",
                }}
              />
            </motion.a>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
