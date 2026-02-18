"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  gold?: boolean;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  gold = false,
  hover = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        gold ? "glass-gold" : "glass-card",
        hover && "glass-card-hover cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
