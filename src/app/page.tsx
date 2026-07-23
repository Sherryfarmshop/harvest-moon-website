import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import ChickenReserve from '@/components/ChickenReserve';
import WhatYoullFind from '@/components/WhatYoullFind';
import Gallery from '@/components/Gallery';
import StayOnFarm from '@/components/StayOnFarm';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <ChickenReserve />
      <WhatYoullFind />
      <Gallery />
      <StayOnFarm />
      <Visit />
      <Footer />
    </main>
  );
}
