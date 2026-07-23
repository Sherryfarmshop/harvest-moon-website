import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OpeningBanner from '@/components/OpeningBanner';
import WelcomeReservations from '@/components/WelcomeReservations';
import ChickenReserve from '@/components/ChickenReserve';
import Gallery from '@/components/Gallery';
import StayOnFarm from '@/components/StayOnFarm';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <OpeningBanner />
      <WelcomeReservations />
      <ChickenReserve />
      <Gallery />
      <StayOnFarm />
      <Visit />
      <Footer />
    </main>
  );
}
