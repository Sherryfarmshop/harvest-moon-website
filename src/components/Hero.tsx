import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] flex items-center mt-14 overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/chicken-hero.jpg"
        alt="Pasture-raised chickens on our Northern Michigan family farm near Charlevoix"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(30,20,10,0.72) 0%, rgba(30,20,10,0.45) 55%, rgba(30,20,10,0.08) 100%)' }} />

      {/* Text content */}
      <div className="relative z-10 px-6 sm:px-10 md:px-16 max-w-2xl py-16">

        {/* Logo — no white circle, 25% larger */}
        <div className="mb-6">
          <Image
            src="/images/logo.jpg"
            alt="Harvest Moon Farm Shop"
            width={140}
            height={140}
            className=""
          />
        </div>

        {/* Small caps subtitle */}
        <p className="font-source text-[11px] uppercase tracking-[0.35em] text-white/70 mb-4">
          Pasture-Raised Chickens
        </p>

        {/* Main headline — H1 for SEO */}
        <h1 className="font-playfair text-[2.4rem] sm:text-[3rem] md:text-[3.4rem] text-white leading-[1.1] italic mb-5">
          Reserve Your 2027<br />
          Pasture-Raised Chickens
        </h1>

        {/* Decorative flourish */}
        <div className="flex items-center gap-1 mb-5 text-white/35">
          <span className="text-[11px] tracking-[0.4em]">‹‹‹‹</span>
        </div>

        {/* Description — SEO optimized */}
        <p className="font-lora text-[15px] text-white/80 mb-8 leading-relaxed">
          Locally raised pasture-raised chicken near Charlevoix, Michigan. Our chickens enjoy fresh pasture, natural sunshine, and room to roam on our Northern Michigan family farm.
        </p>

        {/* CTA Button */}
        <a
          href="https://xbysrj-1m.myshopify.com/products/2027-pasture-raised-whole-chicken" target="_blank" rel="noopener noreferrer"
          className="inline-block bg-[#4A5D3A] hover:bg-[#3E4F31] text-white px-7 py-3.5 font-source font-semibold text-[11px] uppercase tracking-[0.2em] transition-colors rounded-sm shadow-lg"
        >
          Reserve My Chickens
        </a>

        {/* Deposit note — larger, bold, bright white */}
        <p className="font-lora text-[18px] font-bold text-white mt-4 uppercase tracking-[0.1em]">
          $25 Deposit Per Bird
        </p>
      </div>
    </section>
  );
}

