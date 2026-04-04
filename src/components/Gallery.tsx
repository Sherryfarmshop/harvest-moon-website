'use client';

import { useState } from 'react';
import Image from 'next/image';

const images = [
  { src: '/images/gallery-meadow.jpg', alt: 'Wildflower meadow under big sky' },
  { src: '/images/gallery-harvest-moon.jpg', alt: 'Harvest moon over the farm' },
  { src: '/images/gallery-sunset.jpg', alt: 'Deep orange sunset over treeline' },
  { src: '/images/gallery-deer-fall.jpg', alt: 'Deer under fall maples' },
  { src: '/images/gallery-moonrise.jpg', alt: 'Moonrise through pines at dusk' },
  { src: '/images/gallery-dog-sunset.jpg', alt: 'Farm dog watching sunset' },
  { src: '/images/gallery-hilltop-tree.jpg', alt: 'Lone tree on hilltop with green fields' },
  { src: '/images/gallery-treeline.jpg', alt: 'Spruce and pines with golden field' },
  { src: '/images/gallery-aurora.jpg', alt: 'Northern lights over the farm' },
  { src: '/images/gallery-barn.jpg', alt: 'Red barn with stone foundation' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="bg-soft-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-dark-text mb-4">
              The Farm
            </h2>
            <p className="font-lora text-dark-text/70 text-lg italic">
              Every season, every hour, a different kind of beautiful.
            </p>
            <div className="w-16 h-0.5 bg-harvest-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {images.map((img) => (
              <button
                key={img.src}
                onClick={() => setLightbox(img.src)}
                className="relative aspect-square overflow-hidden rounded-md group cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl z-10 hover:text-cream transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            ✕
          </button>
          <img
            src={lightbox}
            alt="Farm gallery image"
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      )}
    </>
  );
}
