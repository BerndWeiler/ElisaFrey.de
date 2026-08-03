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

        {/* Eine einzige Liste fuer beide Ansichten.
            Vorher standen Desktop-Raster und Handy-Karussell nebeneinander im
            Markup, jeweils per hidden beziehungsweise md:hidden ausgeblendet.
            Dadurch lagen sechs video-Elemente fuer drei Videos im Dokument.
            Ab md wird aus dem waagerecht scrollbaren Streifen ein Raster. */}
        <div
          className="-mx-6 px-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide
            md:mx-0 md:px-0 md:overflow-visible"
          data-lenis-prevent
        >
          <StaggerChildren className="flex gap-4 w-max md:grid md:w-auto md:grid-cols-3 md:gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="w-[80vw] flex-shrink-0 snap-center md:w-auto md:flex-shrink"
              >
                <VideoCard video={video} />
              </div>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
