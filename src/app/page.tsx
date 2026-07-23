import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OpeningBanner from '@/components/OpeningBanner';
import WelcomeReservations from '@/components/WelcomeReservations';
import ChickenReserve from '@/components/ChickenReserve';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <OpeningBanner />
      <WelcomeReservations />
      <ChickenReserve />
      <Footer />
    </main>
  );
}
