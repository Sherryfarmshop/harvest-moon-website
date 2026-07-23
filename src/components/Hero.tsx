import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] flex items-center mt-14">
      <Image
        src="/images/chicken-hero.jpg"
        alt="Pasture-raised hens at golden hour at Harvest Moon Farm"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
      <div className="relative z-10 px-8 sm:px-12 md:px-16 lg:px-20 max-w-xl py-16">
        <p className="font-source text-[10px] uppercase tracking-[0.35em] text-white/60 mb-5">
          Pasture-Raised Chickens
        </p>
        <h1 className="font-playfair text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] text-white leading-[1.1] mb-5 italic">
          Reserve Your 2027<br />Pasture-Raised<br />Chickens
        </h1>
        <div className="flex items-center gap-1 mb-5 text-white/35">
          <span className="text-[10px] tracking-[0.3em]">‹‹‹‹</span>
        </div>
        <p className="font-lora text-[15px] text-white/75 mb-8 leading-relaxed">
          Raised on pasture in Northern Michigan<br />with room to roam and natural sunshine.
        </p>
        <a href="#reserve" className="inline-block bg-[#4A5D3A] text-white px-6 py-3 font-source font-semibold text-[11px] uppercase tracking-[0.2em] hover:bg-[#3E4F31] transition-colors">
          Reserve My Chickens
        </a>
        <p className="font-lora text-[13px] text-white/45 mt-4">$25 deposit per bird</p>
      </div>
    </section>
  );
}
