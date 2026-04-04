import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
      <Image
        src="/images/website-hero.jpg"
        alt="Harvest Moon Farm at golden hour"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-soft-white text-shadow leading-tight mb-6">
          A Place to Slow Down, Gather, and Take a Little Piece of the Farm Home
        </h1>
        <p className="font-lora text-lg sm:text-xl text-cream/90 text-shadow-sm tracking-wide">
          Harvest Moon Farm Shop
        </p>
      </div>
    </section>
  );
}
