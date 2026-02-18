"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end">
      {/* Background Image */}
      <Image
        src="/images/hero-belt.jpg"
        alt="Elisa Frey mit BDB Meisterschaftsgürtel"
        fill
        priority
        className="object-cover object-top"
        sizes="100vw"
      />

      {/* Gradient Overlay */}
      <div className="gradient-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl">
          {/* Name */}
          <h1 className="font-display text-[clamp(3rem,12vw,12rem)] leading-[0.85] tracking-wide uppercase">
            <TextReveal text="ELISA" delay={0.3} />
            <br />
            <TextReveal text="FREY" delay={0.6} />
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-6 text-foreground/60 text-sm md:text-base tracking-[0.3em] uppercase"
          >
            Unbesiegt · Deutsche Meisterin · {profile.weightClass}
          </motion.p>

          {/* Record */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-8 flex items-baseline gap-3 flex-wrap"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-display text-6xl md:text-7xl">
                <AnimatedCounter target={profile.record.wins} />
              </span>
              <span className="text-foreground/40 font-display text-5xl md:text-6xl">-</span>
              <span className="font-display text-6xl md:text-7xl">
                <AnimatedCounter target={profile.record.losses} />
              </span>
              <span className="text-foreground/40 font-display text-5xl md:text-6xl">-</span>
              <span className="font-display text-6xl md:text-7xl">
                <AnimatedCounter target={profile.record.draws} />
              </span>
            </div>
            <span className="text-gold text-sm md:text-base tracking-[0.2em] uppercase font-medium">
              All Wins by KO
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-foreground/30 text-xs tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-foreground/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
