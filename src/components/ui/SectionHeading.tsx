"use client";

import { cn } from "@/lib/utils";
import FadeIn from "@/components/animations/FadeIn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <FadeIn className={cn("mb-16", align === "center" && "text-center", className)}>
      <h2
        className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-wide uppercase"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-6 h-px w-20 bg-gold mx-auto" style={align === "left" ? { marginLeft: 0 } : undefined} />
    </FadeIn>
  );
}
