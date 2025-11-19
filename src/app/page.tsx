import CEOProfile from '@/components/ceo-profile';
import FaqSection from '@/components/faq-section';
import HeroSection from '@/components/hero-section';
import Testimonials from '@/components/testimonials';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CEOProfile />
      <Testimonials />
      <FaqSection />
    </>
  );
}
