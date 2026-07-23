import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AnnouncementStrip from '@/components/AnnouncementStrip';
import WelcomeSection from '@/components/WelcomeSection';
import WhyDifferent from '@/components/WhyDifferent';
import FooterCTA from '@/components/FooterCTA';
import FooterBar from '@/components/FooterBar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AnnouncementStrip />
      <WelcomeSection />
      <WhyDifferent />
      <FooterCTA />
      <FooterBar />
    </main>
  );
}
