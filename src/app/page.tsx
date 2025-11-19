import CEOProfile from '@/components/ceo-profile';
import FaqSection from '@/components/faq-section';
import HeroSection from '@/components/hero-section';
import RobotGallery from '@/components/robot-gallery';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CEOProfile />
      <RobotGallery />
      <FaqSection />
    </>
  );
}
