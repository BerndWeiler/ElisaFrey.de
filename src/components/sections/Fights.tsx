"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import RecordStat from "@/components/ui/RecordStat";
import FightCard from "@/components/ui/FightCard";
import StaggerChildren from "@/components/animations/StaggerChildren";
import FadeIn from "@/components/animations/FadeIn";
import { fights, profile } from "@/lib/data";

const MOBILE_VISIBLE_COUNT = 3;

export default function Fights() {
  const [showAll, setShowAll] = useState(false);
  const titleFight = fights.find((f) => f.isTitle);
  const otherFights = fights.filter((f) => !f.isTitle);

  // Mobile: show title fight + first N-1 other fights (total = MOBILE_VISIBLE_COUNT)
  const mobileVisibleOthers = otherFights.slice(0, MOBILE_VISIBLE_COUNT - (titleFight ? 1 : 0));
  const mobileHiddenOthers = otherFights.slice(MOBILE_VISIBLE_COUNT - (titleFight ? 1 : 0));
  const hasHidden = mobileHiddenOthers.length > 0;

  return (
    <section id="kaempfe" className="relative py-20 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Kämpfe" subtitle="Professioneller Boxrekord" />

        {/* Record Stats */}
        <FadeIn>
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto mb-8">
            <RecordStat value={profile.record.wins} label="Siege" type="wins" />
            <RecordStat value={profile.record.losses} label="Niederlagen" shortLabel="Ndl." type="losses" />
            <RecordStat value={profile.record.draws} label="Unentschieden" shortLabel="Unent." type="draws" />
          </div>
        </FadeIn>

        {/* KO Rate */}
        <FadeIn>
          <p className="text-center text-gold text-sm md:text-base tracking-[0.2em] uppercase font-medium mb-16">
            {profile.kos} KO/TKO · {profile.koRate}% KO-Rate
          </p>
        </FadeIn>

        {/* Fight Cards — Desktop: all visible */}
        <StaggerChildren className="hidden md:block space-y-4" staggerDelay={0.12}>
          {titleFight && <FightCard fight={titleFight} />}
          <div className="grid md:grid-cols-2 gap-4">
            {otherFights.map((fight) => (
              <FightCard key={fight.id} fight={fight} />
            ))}
          </div>
        </StaggerChildren>

        {/* Fight Cards — Mobile: collapsible */}
        <div className="md:hidden">
          <StaggerChildren className="space-y-4" staggerDelay={0.12}>
            {titleFight && <FightCard fight={titleFight} />}
            {mobileVisibleOthers.map((fight) => (
              <FightCard key={fight.id} fight={fight} />
            ))}
          </StaggerChildren>

          {/* Hidden fights with expand animation */}
          <AnimatePresence>
            {showAll && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="space-y-4 pt-4">
                  {mobileHiddenOthers.map((fight) => (
                    <FightCard key={fight.id} fight={fight} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle button */}
          {hasHidden && (
            <FadeIn>
              <button
                onClick={() => setShowAll(!showAll)}
                className="mt-6 w-full py-3 rounded-lg border border-white/10 text-foreground/60 text-sm tracking-wider uppercase
                  transition-all duration-300
                  hover:border-gold/30 hover:text-gold hover:shadow-[0_0_15px_rgba(200,162,78,0.1)]"
              >
                {showAll ? "Weniger anzeigen" : "Alle Kämpfe anzeigen"}
              </button>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
