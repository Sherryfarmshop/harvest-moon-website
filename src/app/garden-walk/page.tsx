import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function GardenWalk() {
  return (
    <main>
      <Navbar />
      <section className="relative min-h-screen flex items-center justify-end overflow-hidden">
        <Image
          src="/images/garden-walk.jpg"
          alt="Garden Walk"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 text-right pr-12 sm:pr-20 md:pr-32">
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl text-cream drop-shadow-lg">
            Garden Walk
          </h1>
          <div className="flex items-center justify-end gap-2 my-4">
            <div className="w-8 h-px bg-cream/60" />
            <svg className="w-16 h-6 text-cream/80" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 12C40 12 34 6 28 8C22 10 24 16 28 16C32 16 34 12 34 12" stroke="currentColor" strokeWidth="1" fill="none"/>
              <path d="M40 12C40 12 46 6 52 8C58 10 56 16 52 16C48 16 46 12 46 12" stroke="currentColor" strokeWidth="1" fill="none"/>
              <path d="M40 12C40 12 36 4 32 2" stroke="currentColor" strokeWidth="1" fill="none"/>
              <path d="M40 12C40 12 44 4 48 2" stroke="currentColor" strokeWidth="1" fill="none"/>
              <path d="M10 12L28 12" stroke="currentColor" strokeWidth="0.5"/>
              <path d="M52 12L70 12" stroke="currentColor" strokeWidth="0.5"/>
              <path d="M40 12L40 20" stroke="currentColor" strokeWidth="0.5"/>
              <path d="M36 14C36 14 38 18 40 20C42 18 44 14 44 14" stroke="currentColor" strokeWidth="0.5" fill="none"/>
            </svg>
            <div className="w-8 h-px bg-cream/60" />
          </div>
          <p className="font-lora text-lg sm:text-xl text-cream/80 drop-shadow-md tracking-wide">
            Garden in the works
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
