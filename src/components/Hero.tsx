import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] flex items-center" style={{ fontSize: 'initial', lineHeight: 'initial' }}>
      {/* Background Image */}
      <Image
        src="/images/chicken-hero.jpg"
        alt="Pasture-raised hens at golden hour at Harvest Moon Farm"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

      {/* Content - Left Aligned */}
      <div className="relative z-10 px-8 sm:px-12 md:px-20 max-w-2xl py-20 pt-28">
        {/* Subtitle */}
        <p className="font-source text-xs uppercase tracking-[0.3em] text-white/70 mb-4">
          Pasture-Raised Chickens
        </p>

        {/* Main Headline */}
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-[3.5rem] text-white leading-[1.15] mb-6">
          Reserve Your 2027<br />
          Pasture-Raised<br />
          Chickens
        </h1>

        {/* Decorative Divider */}
        <div className="flex items-center gap-1 mb-6 text-white/40">
          <span className="text-xs tracking-widest">&laquo;&laquo;&laquo;&laquo;</span>
        </div>

        {/* Description */}
        <p className="font-lora text-base sm:text-lg text-white/80 mb-8 max-w-md leading-relaxed">
          Raised on pasture in Northern Michigan<br />
          with room to roam and natural sunshine.
        </p>

        {/* CTA Button */}
        <a
          href="#reserve"
          className="inline-block bg-[#4A5D3A] hover:bg-[#3E4F31] text-white px-7 py-3.5 font-source font-semibold text-xs uppercase tracking-[0.15em] transition-colors rounded-sm"
        >
          Reserve My Chickens
        </a>

        {/* Deposit Note */}
        <p className="font-lora text-sm text-white/50 mt-4">
          $25 deposit per bird
        </p>
      </div>
    </section>
  );
}
