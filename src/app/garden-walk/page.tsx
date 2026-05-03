import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function GardenWalk() {
  return (
    <main>
      <Navbar />
      <section className="relative min-h-screen flex flex-col">
        <div className="relative w-full h-[60vh] sm:h-[70vh]">
          <Image
            src="/images/garden-walk.jpg"
            alt="Garden Walk"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex-1 flex items-center justify-center bg-dark-text px-6 py-12">
          <div className="text-center">
            <h1 className="font-playfair text-4xl sm:text-5xl text-cream mb-3">
              Garden Walk
            </h1>
            <p className="font-lora text-lg sm:text-xl text-cream/70 italic">
              in the works
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
