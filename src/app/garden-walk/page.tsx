import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function GardenWalk() {
  return (
    <main>
      <Navbar />
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/garden-walk.jpg"
          alt="Garden Walk"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 pt-24 sm:pt-32 text-center px-6">
          <h1 className="font-playfair text-4xl sm:text-5xl text-cream drop-shadow-lg mb-3">
            Garden Walk
          </h1>
          <p className="font-lora text-lg sm:text-xl text-cream/80 drop-shadow-md italic">
            in the works
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
