import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
      <Image
        src="/images/chicken-hero.jpg"
        alt="Pasture-raised hen with fresh eggs at Harvest Moon Farm"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p className="font-source text-sm sm:text-base uppercase tracking-[0.3em] text-cream/80 mb-4">
          Harvest Moon Farm Shop
        </p>
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-soft-white leading-tight mb-6">
          Pasture-Raised Chickens
        </h1>
        <p className="font-lora text-lg sm:text-xl text-cream/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Reservations now open for 2027. Raised on open pasture, moved daily, fed all-natural feed — the way it should be.
        </p>
        <a
          href="#reserve"
          className="inline-block bg-barn-red hover:bg-barn-red/90 text-cream px-8 py-4 rounded font-source font-semibold text-base uppercase tracking-wider transition-colors shadow-lg"
        >
          Reserve My Chickens
        </a>
      </div>
    </section>
  );
}
