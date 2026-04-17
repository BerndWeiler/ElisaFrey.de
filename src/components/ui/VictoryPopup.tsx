"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const STAMP_IMPACT_DELAY = 1.4;
const CTA_DELAY = 2.1;

function generateImpactParticles(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
    const distance = 90 + Math.random() * 80;
    return {
      id: i,
      dx: Math.cos(angle) * distance,
      dy: Math.sin(angle) * distance,
      size: 4 + Math.random() * 4,
      duration: 0.7 + Math.random() * 0.4,
      delay: Math.random() * 0.06,
      gold: i % 2 === 0,
    };
  });
}

export default function VictoryPopup() {
  const [visible, setVisible] = useState(true);
  const [stampPhase, setStampPhase] = useState(false);

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

  useEffect(() => {
    const t = setTimeout(() => setStampPhase(true), STAMP_IMPACT_DELAY * 1000);
    return () => clearTimeout(t);
  }, []);

  const close = () => setVisible(false);
  const particles = useMemo(() => generateImpactParticles(18), []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4"
          onClick={close}
        >
          {/* Close X */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: CTA_DELAY, duration: 0.4 }}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-20 flex items-center gap-2
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
          </motion.button>

          {/* Content */}
          <div
            className="flex flex-col items-center gap-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image container with shake on stamp impact */}
            <motion.div
              className="relative"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={
                stampPhase
                  ? {
                      scale: 1,
                      opacity: 1,
                      x: [0, -10, 9, -6, 4, -2, 0],
                      y: [0, 6, -4, 3, -2, 1, 0],
                    }
                  : { scale: 1, opacity: 1 }
              }
              transition={
                stampPhase
                  ? {
                      scale: { duration: 0 },
                      opacity: { duration: 0 },
                      x: { duration: 0.45, delay: 0.05, ease: "easeOut" },
                      y: { duration: 0.45, delay: 0.05, ease: "easeOut" },
                    }
                  : { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }
              }
            >
              {/* Gold-glow spark border */}
              <div className="relative p-[3px] rounded-lg spark-glow">
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
                <div className="absolute inset-0 rounded-lg border border-gold/15" />

                {/* Image */}
                <div className="relative rounded-[calc(0.5rem-3px)] overflow-hidden">
                  <Image
                    src="/images/victory-stanglwirt.jpg"
                    alt="Elisa Frey nach der Titelverteidigung am Stanglwirt, 12.04.2026"
                    width={600}
                    height={1067}
                    className="max-h-[68vh] w-auto object-contain"
                    sizes="(max-width: 768px) 90vw, 500px"
                    priority
                  />
                </div>
              </div>

              {/* White flash on stamp impact */}
              <AnimatePresence>
                {stampPhase && (
                  <motion.div
                    key="flash"
                    className="absolute inset-0 rounded-lg bg-white pointer-events-none"
                    initial={{ opacity: 0.38 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                )}
              </AnimatePresence>

              {/* Impact particles — radiate from stamp center */}
              {stampPhase && (
                <div
                  className="absolute pointer-events-none"
                  style={{ left: "50%", top: "68%", width: 0, height: 0 }}
                >
                  {particles.map((p) => (
                    <motion.div
                      key={p.id}
                      className="absolute rounded-full"
                      style={{
                        width: p.size,
                        height: p.size,
                        marginLeft: -p.size / 2,
                        marginTop: -p.size / 2,
                        background: p.gold
                          ? "radial-gradient(circle, #f5e6b8, #C8A24E)"
                          : "radial-gradient(circle, #ff5a6e, #C8102E)",
                        boxShadow: p.gold
                          ? "0 0 6px rgba(200, 162, 78, 0.9)"
                          : "0 0 6px rgba(200, 16, 46, 0.9)",
                      }}
                      initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0.8, 0],
                        x: p.dx,
                        y: p.dy,
                        scale: [0, 1.2, 0.8, 0],
                      }}
                      transition={{
                        duration: p.duration,
                        delay: p.delay,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Stamp — vintage round stamp with banner, stars, arc text */}
              <motion.div
                className="absolute pointer-events-none"
                style={{
                  left: "50%",
                  top: "68%",
                  x: "-50%",
                  y: "-50%",
                  transformOrigin: "center center",
                }}
                initial={{ scale: 3.6, rotate: 0, opacity: 0 }}
                animate={
                  stampPhase
                    ? { scale: 1, rotate: -8, opacity: 0.9 }
                    : { scale: 3.6, rotate: 0, opacity: 0 }
                }
                transition={{
                  scale: { type: "spring", stiffness: 260, damping: 12, mass: 0.9 },
                  rotate: { type: "spring", stiffness: 220, damping: 14 },
                  opacity: { duration: 0.15 },
                }}
              >
                <svg
                  viewBox="0 0 320 300"
                  style={{ width: 260, height: 244, overflow: "visible" }}
                  aria-hidden="true"
                >
                  <defs>
                    {/* Grunge filter — gentle edge displacement + subtle ink loss */}
                    <filter
                      id="stamp-grunge"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="140%"
                    >
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.025"
                        numOctaves="2"
                        seed="6"
                        result="edgeN"
                      />
                      <feDisplacementMap
                        in="SourceGraphic"
                        in2="edgeN"
                        scale="2.5"
                        result="disp"
                      />
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.7"
                        numOctaves="2"
                        seed="11"
                        result="inkN"
                      />
                      <feColorMatrix
                        in="inkN"
                        values="0 0 0 0 0
                                0 0 0 0 0
                                0 0 0 0 0
                                8 8 8 0 -0.9"
                        result="mask"
                      />
                      <feComposite in="disp" in2="mask" operator="in" />
                    </filter>

                    {/* Invisible paths for arc text */}
                    {/* Top arc (sweep=1 = top): baseline near inner ring, letters extend toward outer ring */}
                    <path
                      id="victory-top-arc"
                      d="M 42 150 A 118 118 0 0 1 278 150"
                      fill="none"
                    />
                    {/* Bottom arc (sweep=0 = bottom): baseline near outer ring, letters extend toward inner */}
                    <path
                      id="victory-bottom-arc"
                      d="M 24 150 A 136 136 0 0 0 296 150"
                      fill="none"
                    />
                    {/* Radial fade gradient for the paper backdrop */}
                    <radialGradient
                      id="victory-paper-fade"
                      cx="160"
                      cy="150"
                      r="200"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#e8e6e2" stopOpacity="0.92" />
                      <stop offset="0.62" stopColor="#e8e6e2" stopOpacity="0.9" />
                      <stop offset="0.85" stopColor="#e8e6e2" stopOpacity="0.45" />
                      <stop offset="1" stopColor="#e8e6e2" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Paper-like backdrop — radial fade to transparent at edges */}
                  <rect
                    x="-60"
                    y="-60"
                    width="440"
                    height="420"
                    fill="url(#victory-paper-fade)"
                  />

                  <g filter="url(#stamp-grunge)">
                    {/* Outer thick ring */}
                    <circle
                      cx="160"
                      cy="150"
                      r="143"
                      fill="none"
                      stroke="#C8102E"
                      strokeWidth="6"
                    />
                    {/* Inner thin ring — much closer to center, creates 33px wide band for text */}
                    <circle
                      cx="160"
                      cy="150"
                      r="110"
                      fill="none"
                      stroke="#C8102E"
                      strokeWidth="2"
                    />

                    {/* Top arc text — ELISA FREY */}
                    <text
                      fill="#C8102E"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "26px",
                        letterSpacing: "6px",
                      }}
                    >
                      <textPath
                        href="#victory-top-arc"
                        startOffset="50%"
                        textAnchor="middle"
                      >
                        ELISA FREY
                      </textPath>
                    </text>

                    {/* Bottom arc text — BDB SEIT 1949 */}
                    <text
                      fill="#C8102E"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "22px",
                        letterSpacing: "5px",
                      }}
                    >
                      <textPath
                        href="#victory-bottom-arc"
                        startOffset="50%"
                        textAnchor="middle"
                      >
                        BDB SEIT 1949
                      </textPath>
                    </text>

                    {/* Top row of stars */}
                    <g fill="#C8102E">
                      {[-44, -22, 0, 22, 44].map((offset) => (
                        <path
                          key={`t-${offset}`}
                          d="M 0,-7 L 1.54,-2.16 L 6.66,-2.16 L 2.56,0.82 L 4.11,5.66 L 0,2.68 L -4.11,5.66 L -2.56,0.82 L -6.66,-2.16 L -1.54,-2.16 Z"
                          transform={`translate(${160 + offset} 88)`}
                        />
                      ))}
                    </g>

                    {/* Bottom row of stars */}
                    <g fill="#C8102E">
                      {[-44, -22, 0, 22, 44].map((offset) => (
                        <path
                          key={`b-${offset}`}
                          d="M 0,-7 L 1.54,-2.16 L 6.66,-2.16 L 2.56,0.82 L 4.11,5.66 L 0,2.68 L -4.11,5.66 L -2.56,0.82 L -6.66,-2.16 L -1.54,-2.16 Z"
                          transform={`translate(${160 + offset} 212)`}
                        />
                      ))}
                    </g>

                    {/* Central banner — rotated, extends beyond circle like reference */}
                    <g transform="rotate(-10 160 150)">
                      {/* Outer border */}
                      <rect
                        x="-5"
                        y="127"
                        width="330"
                        height="46"
                        fill="none"
                        stroke="#C8102E"
                        strokeWidth="5"
                      />
                      {/* Inner border (parallel, creates double frame) */}
                      <rect
                        x="2"
                        y="134"
                        width="316"
                        height="32"
                        fill="none"
                        stroke="#C8102E"
                        strokeWidth="1.5"
                      />
                      {/* Banner text */}
                      <text
                        x="160"
                        y="160"
                        textAnchor="middle"
                        fill="#C8102E"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "32px",
                          letterSpacing: "5px",
                          fontWeight: 700,
                        }}
                      >
                        TITEL VERTEIDIGT
                      </text>
                    </g>
                  </g>
                </svg>
              </motion.div>
            </motion.div>

            {/* CTA Close Button — fades in after impact */}
            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: CTA_DELAY, duration: 0.5 }}
              onClick={close}
              className="mt-2 px-8 py-3 rounded-lg border border-gold/30 text-gold font-sans text-sm tracking-wider uppercase
                transition-all duration-300
                hover:bg-gold/10 hover:border-gold/50 hover:shadow-[0_0_20px_rgba(200,162,78,0.2)]"
            >
              Weiter zur Seite
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
