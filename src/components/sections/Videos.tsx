"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import VideoCard from "@/components/ui/VideoCard";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { videos } from "@/lib/data";

export default function Videos() {
  return (
    <section id="videos" className="relative py-20 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Videos" />

        {/* Desktop: 3-column grid */}
        <StaggerChildren className="hidden md:grid grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </StaggerChildren>

        {/* Mobile: Horizontal scroll carousel */}
        <div
          className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6"
          data-lenis-prevent
        >
          <StaggerChildren className="flex gap-4 w-max">
            {videos.map((video) => (
              <div key={video.id} className="w-[80vw] flex-shrink-0 snap-center">
                <VideoCard video={video} />
              </div>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
