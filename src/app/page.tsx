import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AnnouncementStrip from '@/components/AnnouncementStrip';
import HowReservations from '@/components/HowReservations';
import WhyDifferent from '@/components/WhyDifferent';
import WelcomeSection from '@/components/WelcomeSection';
import ShopSection from '@/components/ShopSection';
import FooterCTA from '@/components/FooterCTA';
import FooterBar from '@/components/FooterBar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AnnouncementStrip />
      <HowReservations />
      <WhyDifferent />
      <WelcomeSection />
      <ShopSection />
      <FooterCTA />
      <FooterBar />
    </main>
  );
}
