"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Video } from "@/types";
import { useBewegungReduzieren } from "@/lib/bewegung";
import { staggerItem } from "@/components/animations/StaggerChildren";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  // Merker im Ref statt im Zustand: Er steuert nichts an der Darstellung.
  // Als Zustand loeste er bei jedem Video einen zusaetzlichen Renderdurchlauf
  // aus, den ESLint zu Recht als set-state-in-effect anmahnte.
  const geladen = useRef(false);
  const isInView = useInView(containerRef, { once: true, margin: "200px" });
  const bewegungReduzieren = useBewegungReduzieren();

  useEffect(() => {
    // Bei „Bewegung reduzieren" startet nichts von allein. Stattdessen bekommt
    // das Video Bedienelemente, mit denen man es selbst starten kann.
    if (!isInView || geladen.current || bewegungReduzieren) return;
    const el = videoRef.current;
    if (!el) return;
    geladen.current = true;
    el.src = video.src;
    el.load();
    el.play().catch(() => {});
  }, [isInView, video.src, bewegungReduzieren]);

  return (
    <motion.div
      ref={containerRef}
      variants={staggerItem}
      className="glass-card glass-card-hover rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300"
    >
      <div className="relative aspect-[9/16] bg-black/40">
        <video
          ref={videoRef}
          src={bewegungReduzieren ? video.src : undefined}
          autoPlay={!bewegungReduzieren}
          muted
          loop={!bewegungReduzieren}
          controls={bewegungReduzieren}
          playsInline
          preload={bewegungReduzieren ? "metadata" : "none"}
          poster={video.poster}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center gap-2 px-4 py-3">
        <span className="text-muted text-xs tracking-[0.15em] uppercase">
          {video.title}
        </span>
      </div>
    </motion.div>
  );
}
