import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function GardenWalk() {
  return (
    <main>
      <Navbar />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/garden-walk.jpg"
          alt="Garden Walk"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-playfair text-4xl sm:text-5xl text-cream drop-shadow-lg">
            Garden Walk
          </h1>
          <div className="w-16 h-0.5 bg-cream/60 mx-auto my-4" />
          <p className="font-lora text-lg sm:text-xl text-cream/90 drop-shadow-md">
            Garden in the works
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
