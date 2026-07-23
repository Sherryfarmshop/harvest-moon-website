import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Background Image */}
      <Image
        src="/images/chicken-hero.jpg"
        alt="Pasture-raised hens foraging at golden hour at Harvest Moon Farm"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      {/* Content - Left Aligned */}
      <div className="relative z-10 px-8 sm:px-12 md:px-20 max-w-3xl py-20">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/logo.jpg"
            alt="Harvest Moon Farm Shop"
            width={100}
            height={100}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Subtitle */}
        <p className="font-source text-xs sm:text-sm uppercase tracking-[0.3em] text-cream/70 mb-3">
          Pasture-Raised Chickens
        </p>

        {/* Main Headline */}
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-soft-white leading-[1.15] mb-6">
          Reservations<br />
          Now Open for 2027
        </h1>

        {/* Decorative Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-px bg-cream/40" />
          <span className="text-cream/40 text-xs tracking-[0.5em]">✦✦✦✦</span>
          <div className="w-12 h-px bg-cream/40" />
        </div>

        {/* Description */}
        <p className="font-lora text-base sm:text-lg text-cream/80 mb-8 max-w-md leading-relaxed">
          Raised on pasture in Northern Michigan<br />
          with room to roam and natural sunshine.
        </p>

        {/* CTA Button */}
        <a
          href="#reserve"
          className="inline-block border-2 border-cream/60 text-cream hover:bg-cream hover:text-dark-text px-8 py-3.5 font-source font-semibold text-sm uppercase tracking-[0.2em] transition-all duration-300"
        >
          Reserve My Chickens
        </a>

        {/* Deposit Note */}
        <p className="font-lora text-sm text-cream/50 mt-4">
          $25 deposit per bird
        </p>
      </div>
    </section>
  );
}
