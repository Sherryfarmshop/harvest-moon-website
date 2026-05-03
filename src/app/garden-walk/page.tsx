import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function GardenWalk() {
  return (
    <main>
      <Navbar />
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/images/garden-walk.jpg"
          alt="Garden Walk"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-x-0 top-[15%] h-[30%] z-10 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-playfair text-4xl sm:text-5xl text-cream drop-shadow-lg mb-3">
              Garden Walk
            </h1>
            <p className="font-playfair text-2xl sm:text-3xl text-cream/90 drop-shadow-md italic font-semibold">
              in the works
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
