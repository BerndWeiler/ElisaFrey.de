"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Video } from "@/types";
import { staggerItem } from "@/components/animations/StaggerChildren";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    // Browsers sometimes block autoplay even when muted — force play on mount
    el.play().catch(() => {});
  }, []);

  return (
    <motion.div
      variants={staggerItem}
      className="glass-card glass-card-hover rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300"
    >
      <div className="relative aspect-[9/16] bg-black/40">
        <video
          ref={videoRef}
          src={video.src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
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
