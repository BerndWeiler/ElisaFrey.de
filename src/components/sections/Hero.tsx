"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { profile } from "@/lib/data";

function generateExplosionParticles(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
    const distance = 20 + Math.random() * 30;
    return {
      id: i,
      dx: Math.cos(angle) * distance,
      dy: Math.sin(angle) * distance,
      size: 2 + Math.random() * 2,
      duration: 0.5 + Math.random() * 0.3,
      delay: Math.random() * 0.1,
    };
  });
}

export default function Hero() {
  const [fuseComplete, setFuseComplete] = useState(false);
  const explosionParticles = useMemo(() => generateExplosionParticles(14), []);

  useEffect(() => {
    const timer = setTimeout(() => setFuseComplete(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end">
      {/* Background Image — slow cinematic zoom */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 0.9 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero-ring.jpg"
          alt="Elisa Frey im Boxring"
          fill
          priority
          className="object-cover object-[center_25%]"
          sizes="100vw"
        />
      </motion.div>

      {/* Bottom gradient — lets the image breathe at the top, fades to dark for text */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 35%, rgba(10,10,10,0.3) 55%, rgba(10,10,10,0.8) 80%, rgba(10,10,10,0.98) 100%)",
        }}
      />

      {/* Vignette — subtle darkening at edges for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center 40%, transparent 40%, rgba(10,10,10,0.5) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl">
          {/* Name */}
          <h1 className="font-display text-[clamp(3rem,12vw,12rem)] leading-[0.85] tracking-wide uppercase">
            <TextReveal text="ELISA" delay={0.3} />
            <br />
            <TextReveal text="FREY" delay={0.6} />
          </h1>

          {/* Fuse Line */}
          <div className="relative mt-6 w-48 overflow-visible" style={{ height: 16 }}>
            {/* Unburned fuse (gold, low opacity) */}
            <motion.div
              className="absolute left-0 right-0 origin-left"
              style={{
                top: "50%",
                height: 1,
                marginTop: -0.5,
                background: "rgba(200, 162, 78, 0.3)",
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.2, ease: "easeOut" }}
            />

            {/* Burned trail (darkens fuse behind the spark) */}
            <motion.div
              className="absolute left-0 right-0 origin-left"
              style={{
                top: "50%",
                height: 1,
                marginTop: -0.5,
                background: "rgba(10, 10, 10, 0.85)",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.0, duration: 1.5, ease: "linear" }}
            />

            {/* Wandering spark */}
            <motion.div
              className="absolute rounded-full"
              style={{
                width: 8,
                height: 8,
                top: "50%",
                marginTop: -4,
                marginLeft: -4,
                background: "radial-gradient(circle, #f5e6b8, #d4b366, #C8A24E)",
                boxShadow:
                  "0 0 8px 3px rgba(200,162,78,0.9), 0 0 16px 6px rgba(200,162,78,0.4)",
              }}
              initial={{ left: "0%", opacity: 0, scale: 0 }}
              animate={{
                left: "100%",
                opacity: [0, 1, 1, 1, 0],
                scale: [0, 1, 1, 1, 0],
              }}
              transition={{
                left: { delay: 1.0, duration: 1.5, ease: "linear" },
                opacity: {
                  delay: 1.0,
                  duration: 1.5,
                  times: [0, 0.03, 0.5, 0.95, 1],
                },
                scale: {
                  delay: 1.0,
                  duration: 1.5,
                  times: [0, 0.03, 0.1, 0.95, 1],
                },
              }}
            />

            {/* Explosion particles at fuse end */}
            <AnimatePresence>
              {fuseComplete &&
                explosionParticles.map((p) => (
                  <motion.div
                    key={p.id}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                      width: p.size,
                      height: p.size,
                      left: "100%",
                      top: "50%",
                      marginLeft: -p.size / 2,
                      marginTop: -p.size / 2,
                      background: "radial-gradient(circle, #d4b366, #C8A24E)",
                      boxShadow: "0 0 6px rgba(200, 162, 78, 0.9)",
                    }}
                    initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0.8, 0],
                      x: p.dx,
                      y: p.dy,
                      scale: [0, 1.2, 0.8, 0],
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                      duration: p.duration,
                      delay: p.delay,
                      ease: "easeOut",
                    }}
                  />
                ))}
            </AnimatePresence>
          </div>

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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 2.6,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="mt-8 flex items-baseline gap-3 flex-wrap origin-left"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-display text-6xl md:text-7xl">
                <AnimatedCounter target={profile.record.wins} />
              </span>
              <span className="text-foreground/40 font-display text-5xl md:text-6xl">
                -
              </span>
              <span className="font-display text-6xl md:text-7xl">
                <AnimatedCounter target={profile.record.losses} />
              </span>
              <span className="text-foreground/40 font-display text-5xl md:text-6xl">
                -
              </span>
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
        transition={{ delay: 3.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-foreground/30 text-xs tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-foreground/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
