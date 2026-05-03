import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function GardenWalk() {
  return (
    <main>
      <Navbar />
      <section className="relative min-h-screen flex items-center justify-center">
        <Image
          src="/images/garden-walk.jpg"
          alt="Garden Walk — Garden in the works"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 text-center">
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl text-cream mb-4 drop-shadow-lg">
            Garden Walk
          </h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-px bg-cream/60" />
            <span className="text-cream/80 text-2xl">✿❀✿❀✿</span>
            <div className="w-12 h-px bg-cream/60" />
          </div>
          <p className="font-playfair text-xl sm:text-2xl text-cream/90 drop-shadow-md">
            Garden in the works
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
