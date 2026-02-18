"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-medium text-sm tracking-wider uppercase transition-all duration-300";

  const variants = {
    primary:
      "bg-gold text-background hover:bg-gold-light hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(200,162,78,0.3)] active:scale-[0.98]",
    outline:
      "border border-foreground/20 text-foreground hover:border-gold hover:text-gold hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(200,162,78,0.1)] active:scale-[0.98]",
    ghost: "text-foreground/60 hover:text-foreground",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
