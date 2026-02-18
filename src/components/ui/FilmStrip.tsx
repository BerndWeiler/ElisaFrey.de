"use client";

import Image from "next/image";
import { GalleryImage } from "@/types";

interface FilmStripProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

export default function FilmStrip({ images, onImageClick }: FilmStripProps) {
  const doubled = [...images, ...images];

  return (
    <div className="filmstrip-container overflow-hidden w-full" data-lenis-prevent>
      <div className="filmstrip-track gap-4">
        {doubled.map((image, i) => {
          const realIndex = i % images.length;
          return (
            <div
              key={i}
              className="group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-xl"
              onClick={() => onImageClick(realIndex)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.span === "tall" ? 280 : 450}
                height={image.span === "tall" ? 400 : 400}
                className="h-[280px] md:h-[400px] w-auto object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 280px, 400px"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
