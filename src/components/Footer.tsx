import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-dark-text text-cream/80 py-16">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery-sunset.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-dark-text/85" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/images/logo.jpg"
            alt="Harvest Moon Farm Shop"
            width={120}
            height={120}
            className="rounded-full mx-auto"
          />
        </div>

        <p className="font-playfair text-xl text-cream mb-6">
          Harvest Moon Farm Shop
        </p>

        <div className="font-lora text-sm space-y-1 mb-6 text-cream/65">
          <p>3133 US Highway 31 S, Charlevoix, Michigan 49720</p>
          <p>
            <a
              href="tel:7347160475"
              className="hover:text-harvest-gold transition-colors"
            >
              734-716-0475
            </a>
          </p>
          <p className="mt-2">
            Summer Hours: Wed–Sat 11 AM – 8 PM | Sun 11 AM – 5 PM
          </p>
        </div>

        <div className="w-16 h-px bg-cream/20 mx-auto mb-6" />

        <p className="text-xs text-cream/40 font-source">
          &copy; 2026 Harvest Moon Farm Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
