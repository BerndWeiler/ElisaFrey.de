"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

interface RecordStatProps {
  value: number;
  label: string;
  shortLabel?: string;
  type: "wins" | "losses" | "draws";
}

function generateSparkles(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const t = i / count;
    let x: number, y: number, dx: number, dy: number;

    if (t < 0.25) {
      // Top edge
      x = t * 4 * 100;
      y = 0;
      dx = (Math.random() - 0.5) * 24;
      dy = -(12 + Math.random() * 24);
    } else if (t < 0.5) {
      // Right edge
      x = 100;
      y = (t - 0.25) * 4 * 100;
      dx = 12 + Math.random() * 24;
      dy = (Math.random() - 0.5) * 24;
    } else if (t < 0.75) {
      // Bottom edge
      x = 100 - (t - 0.5) * 4 * 100;
      y = 100;
      dx = (Math.random() - 0.5) * 24;
      dy = 12 + Math.random() * 24;
    } else {
      // Left edge
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

export default function RecordStat({ value, label, shortLabel, type }: RecordStatProps) {
  const [hovered, setHovered] = useState(false);
  const sparkles = useMemo(() => generateSparkles(28), []);

  if (type === "wins") {
    return (
      <motion.div
        className="relative rounded-2xl p-6 text-center"
        style={{
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          overflow: "visible",
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{
          scale: 1.06,
          y: -4,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {/* Default border */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ border: "1px solid rgba(255, 255, 255, 0.06)" }}
          animate={{ opacity: hovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Gold glow border on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            border: "1px solid rgba(200, 162, 78, 0.5)",
            boxShadow:
              "0 0 30px rgba(200, 162, 78, 0.2), 0 0 60px rgba(200, 162, 78, 0.08), inset 0 0 30px rgba(200, 162, 78, 0.05)",
          }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Inner gold gradient glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(200, 162, 78, 0.06) 0%, transparent 70%)",
          }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Sparkle particles */}
        <AnimatePresence>
          {hovered &&
            sparkles.map((s) => (
              <motion.div
                key={s.id}
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: s.size,
                  height: s.size,
                  left: s.x,
                  top: s.y,
                  background:
                    "radial-gradient(circle, #d4b366, #C8A24E)",
                  boxShadow: "0 0 6px rgba(200, 162, 78, 0.9)",
                }}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0.8, 0],
                  x: s.dx,
                  y: s.dy,
                  scale: [0, 1.2, 0.8, 0],
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: s.duration,
                  delay: s.delay,
                  repeat: Infinity,
                  repeatDelay: s.repeatDelay,
                  ease: "easeOut",
                }}
              />
            ))}
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            className="font-display text-4xl md:text-5xl text-foreground"
            animate={{ color: hovered ? "#d4b366" : "#f5f5f5" }}
            transition={{ duration: 0.3 }}
          >
            <AnimatedCounter target={value} />
          </motion.div>
          <motion.p
            className="mt-2 text-xs tracking-[0.2em] uppercase"
            animate={{ color: hovered ? "#C8A24E" : "#888888" }}
            transition={{ duration: 0.3 }}
          >
            {shortLabel ? (
              <>
                <span className="hidden md:inline">{label}</span>
                <span className="md:hidden">{shortLabel}</span>
              </>
            ) : (
              label
            )}
          </motion.p>
        </div>
      </motion.div>
    );
  }

  // Losses & Draws: Elegant enhanced hover
  return (
    <motion.div
      className="relative rounded-2xl p-6 text-center"
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      whileHover={{
        scale: 1.04,
        y: -3,
        background: "rgba(255, 255, 255, 0.07)",
        borderColor: "rgba(255, 255, 255, 0.15)",
        boxShadow:
          "0 12px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 255, 255, 0.04)",
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="font-display text-4xl md:text-5xl text-foreground">
        <AnimatedCounter target={value} />
      </div>
      <p className="mt-2 text-muted text-xs tracking-[0.2em] uppercase">
        {shortLabel ? (
          <>
            <span className="hidden md:inline">{label}</span>
            <span className="md:hidden">{shortLabel}</span>
          </>
        ) : (
          label
        )}
      </p>
    </motion.div>
  );
}
