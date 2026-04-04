import Banner from '@/components/Banner';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import WhatYoullFind from '@/components/WhatYoullFind';
import IceCreamFeature from '@/components/IceCreamFeature';
import Gallery from '@/components/Gallery';
import StayOnFarm from '@/components/StayOnFarm';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Banner />
      <Navbar />
      <Hero />
      <Intro />
      <WhatYoullFind />
      <IceCreamFeature />
      <Gallery />
      <StayOnFarm />
      <Visit />
      <Footer />
    </main>
  );
}
