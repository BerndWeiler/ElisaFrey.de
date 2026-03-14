"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const TARGET_DATE = new Date("2026-04-12T20:00:00");

function generateSparkles(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const t = i / count;
    let x: number, y: number, dx: number, dy: number;

    if (t < 0.25) {
      x = t * 4 * 100;
      y = 0;
      dx = (Math.random() - 0.5) * 24;
      dy = -(12 + Math.random() * 24);
    } else if (t < 0.5) {
      x = 100;
      y = (t - 0.25) * 4 * 100;
      dx = 12 + Math.random() * 24;
      dy = (Math.random() - 0.5) * 24;
    } else if (t < 0.75) {
      x = 100 - (t - 0.5) * 4 * 100;
      y = 100;
      dx = (Math.random() - 0.5) * 24;
      dy = 12 + Math.random() * 24;
    } else {
      x = 0;
      y = 100 - (t - 0.75) * 4 * 100;
      dx = -(12 + Math.random() * 24);
      dy = (Math.random() - 0.5) * 24;
    }

    return {
      id: i,
      x: `${x}%`,
      y: `${y}%`,
      dx,
      dy,
      delay: (i / count) * 1.2 + Math.random() * 0.3,
      size: 2 + Math.random() * 3,
      duration: 0.7 + Math.random() * 0.5,
      repeatDelay: 0.6 + Math.random() * 0.4,
    };
  });
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(): TimeLeft | null {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function SaveTheDate() {
  const [visible, setVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calcTimeLeft);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (visible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVisible(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const close = () => setVisible(false);
  const sparkles = useMemo(() => generateSparkles(28), []);

  const units = timeLeft
    ? [
        { value: timeLeft.days, label: "Tage" },
        { value: timeLeft.hours, label: "Stunden" },
        { value: timeLeft.minutes, label: "Minuten" },
        { value: timeLeft.seconds, label: "Sekunden" },
      ]
    : null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={close}
        >
          {/* Close X — larger, gold hover, with label on desktop */}
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 flex items-center gap-2
              text-foreground/50 hover:text-gold transition-colors duration-300 group"
            onClick={close}
            aria-label="Schließen"
          >
            <span className="hidden md:inline text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Schließen
            </span>
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-6 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Spark Border Image */}
            <div className="relative p-[3px] rounded-lg spark-glow">
              {/* Rotating spark gradient = animated fuse border */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <div
                  className="absolute inset-[-100%] spark-spin"
                  style={{
                    background: `conic-gradient(
                      from 0deg at 50% 50%,
                      transparent 0%,
                      transparent 50%,
                      rgba(200,162,78,0.04) 62%,
                      rgba(200,162,78,0.15) 72%,
                      #C8A24E 80%,
                      #f5e6b8 87%,
                      #ffffff 90%,
                      #f5e6b8 93%,
                      #C8A24E 97%,
                      transparent 100%
                    )`,
                  }}
                />
              </div>
              {/* Static faint fuse line underneath */}
              <div className="absolute inset-0 rounded-lg border border-gold/15" />
              {/* Image */}
              <div className="relative rounded-[calc(0.5rem-3px)] overflow-hidden">
                <Image
                  src="/images/Savethedate.jpeg"
                  alt="Save the Date — Elisa Frey, 12.04.2026, Stanglwirt"
                  width={600}
                  height={1067}
                  className="max-h-[50vh] md:max-h-[60vh] w-auto object-contain breathe-zoom"
                  sizes="(max-width: 768px) 90vw, 500px"
                  priority
                />
              </div>
            </div>

            {/* Countdown with sparkles */}
            {units ? (
              <div className="relative w-full max-w-sm" style={{ overflow: "visible" }}>
                {/* Sparkle particles around countdown */}
                {sparkles.map((s) => (
                  <motion.div
                    key={s.id}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                      width: s.size,
                      height: s.size,
                      left: s.x,
                      top: s.y,
                      background: "radial-gradient(circle, #d4b366, #C8A24E)",
                      boxShadow: "0 0 6px rgba(200, 162, 78, 0.9)",
                    }}
                    initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0.8, 0],
                      x: s.dx,
                      y: s.dy,
                      scale: [0, 1.2, 0.8, 0],
                    }}
                    transition={{
                      duration: s.duration,
                      delay: s.delay,
                      repeat: Infinity,
                      repeatDelay: s.repeatDelay,
                      ease: "easeOut",
                    }}
                  />
                ))}
                <div className="grid grid-cols-4 gap-3">
                  {units.map((unit) => (
                    <div
                      key={unit.label}
                      className="glass-card flex flex-col items-center py-3 px-2 rounded-lg cursor-default
                        transition-all duration-300
                        hover:scale-[1.08] hover:border-gold/30
                        hover:shadow-[0_0_20px_rgba(200,162,78,0.25)]"
                    >
                      <span className="font-display text-3xl md:text-4xl text-gold leading-none">
                        {String(unit.value).padStart(2, "0")}
                      </span>
                      <span className="font-sans text-[10px] md:text-xs text-foreground/60 uppercase tracking-wider mt-1">
                        {unit.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <span className="font-display text-3xl text-gold tracking-wider">
                JETZT LIVE
              </span>
            )}

            {/* CTA Close Button */}
            <button
              onClick={close}
              className="mt-2 px-8 py-3 rounded-lg border border-gold/30 text-gold font-sans text-sm tracking-wider uppercase
                transition-all duration-300
                hover:bg-gold/10 hover:border-gold/50 hover:shadow-[0_0_20px_rgba(200,162,78,0.2)]"
            >
              Weiter zur Seite
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
