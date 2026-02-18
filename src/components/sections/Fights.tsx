"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import RecordStat from "@/components/ui/RecordStat";
import FightCard from "@/components/ui/FightCard";
import StaggerChildren from "@/components/animations/StaggerChildren";
import FadeIn from "@/components/animations/FadeIn";
import { fights, profile } from "@/lib/data";

export default function Fights() {
  const titleFight = fights.find((f) => f.isTitle);
  const otherFights = fights.filter((f) => !f.isTitle);

  return (
    <section id="kaempfe" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Kämpfe" subtitle="Professioneller Boxrekord" />

        {/* Record Stats */}
        <FadeIn>
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto mb-8">
            <RecordStat value={profile.record.wins} label="Siege" type="wins" />
            <RecordStat value={profile.record.losses} label="Niederlagen" type="losses" />
            <RecordStat value={profile.record.draws} label="Unentschieden" type="draws" />
          </div>
        </FadeIn>

        {/* KO Rate */}
        <FadeIn>
          <p className="text-center text-gold text-sm md:text-base tracking-[0.2em] uppercase font-medium mb-16">
            {profile.kos} KO/TKO · {profile.koRate}% KO-Rate
          </p>
        </FadeIn>

        {/* Fight Cards */}
        <StaggerChildren className="space-y-4" staggerDelay={0.12}>
          {/* Title Fight */}
          {titleFight && <FightCard fight={titleFight} />}

          {/* Other Fights */}
          <div className="grid md:grid-cols-2 gap-4">
            {otherFights.map((fight) => (
              <FightCard key={fight.id} fight={fight} />
            ))}
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}
