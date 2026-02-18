"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { sponsors } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { staggerItem } from "@/components/animations/StaggerChildren";

export default function Sponsors() {
  return (
    <section id="unterstuetzer" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Unterstützer" />

        <StaggerChildren className="flex items-center justify-center gap-12 md:gap-20 flex-wrap">
          {sponsors.map((sponsor) => (
            <motion.a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerItem}
              className="group relative h-10 md:h-14 w-28 md:w-44 shrink-0 transition-all duration-500 opacity-40 hover:opacity-80"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                fill
                className="object-contain transition-all duration-500"
                sizes="(max-width: 768px) 120px, 180px"
                style={{
                  filter: sponsor.light
                    ? undefined
                    : "invert(1) grayscale(1)",
                }}
              />
            </motion.a>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
