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
      </section>
      <Footer />
    </main>
  );
}
