"use client";

import Image from "next/image";
import { GalleryImage } from "@/types";

interface FilmStripProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

export default function FilmStrip({ images, onImageClick }: FilmStripProps) {
  // Das Array wird verdoppelt, damit das Laufband nahtlos umlaufen kann.
  const doppelt = [...images, ...images];

  return (
    <div className="filmstrip-container overflow-hidden w-full" data-lenis-prevent>
      <div className="filmstrip-track gap-4">
        {doppelt.map((bild, i) => {
          const echterIndex = i % images.length;
          // Die zweite Haelfte ist nur die optische Wiederholung der ersten.
          // Ohne diesen Ausschluss haette man 32 Tabstopps statt 16, und
          // Screenreader wuerden jedes Bild zweimal ansagen.
          const istKopie = i >= images.length;

          return (
            <button
              key={i}
              type="button"
              onClick={() => onImageClick(echterIndex)}
              aria-label={istKopie ? undefined : `${bild.alt}, groß anzeigen`}
              aria-hidden={istKopie || undefined}
              tabIndex={istKopie ? -1 : undefined}
              className="group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-xl
                focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2
                focus-visible:ring-offset-background"
            >
              <Image
                src={bild.src}
                alt={istKopie ? "" : bild.alt}
                width={bild.span === "tall" ? 280 : 450}
                height={bild.span === "tall" ? 400 : 400}
                className="h-[280px] md:h-[400px] w-auto object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 280px, 400px"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
