"use client";

import { motion } from "framer-motion";
import { Fight } from "@/types";
import { staggerItem } from "@/components/animations/StaggerChildren";

interface FightCardProps {
  fight: Fight;
}

export default function FightCard({ fight }: FightCardProps) {
  return (
    <motion.article
      variants={staggerItem}
      className={
        fight.isTitle
          ? "glass-gold rounded-2xl p-6 md:p-8 hover:shadow-[0_0_25px_rgba(200,162,78,0.15)] hover:border-gold/50 transition-all duration-300"
          : "glass-card rounded-2xl p-6 md:p-8 hover:bg-[rgba(255,255,255,0.06)] hover:-translate-y-0.5 hover:border-gold/20 hover:shadow-[0_4px_20px_rgba(200,162,78,0.08)] transition-all duration-300"
      }
    >
      {fight.isTitle && fight.title && (
        <div className="mb-4 inline-block rounded-full bg-gold/20 px-4 py-1">
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">
            {fight.title}
          </span>
        </div>
      )}

      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h3 className="font-display text-2xl md:text-3xl tracking-wide uppercase">
            vs {fight.opponent}
          </h3>
          <p className="mt-1 text-muted text-sm">
            {fight.date} · {fight.location}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-green-400 font-display text-xl tracking-wider">
            {fight.result}
          </span>
          {fight.method && (
            <>
              <span className="text-foreground/40">·</span>
              <span className="text-gold font-medium text-sm tracking-wider uppercase">
                {fight.method}
                {fight.round ? ` R${fight.round}` : ""}
              </span>
            </>
          )}
        </div>
      </div>
    </motion.article>
  );
}
