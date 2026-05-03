import Image from 'next/image';
import Navbar from '@/components/Navbar';

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
        <div className="absolute inset-x-0 top-0 h-[45%] z-10 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="font-playfair text-4xl sm:text-5xl text-cream drop-shadow-lg mb-3">
              Garden Walk
            </h1>
            <p className="font-lora text-xl sm:text-2xl text-cream/80 drop-shadow-md italic">
              in the works
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
