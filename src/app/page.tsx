import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import SecuritySection from '@/components/SecuritySection';
import GlobalCoverageSection from '@/components/GlobalCoverageSection';
import DeveloperPlatformSection from '@/components/DeveloperPlatformSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AppSection from '@/components/AppSection';
import CTASection from '@/components/CTASection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <SecuritySection />
        <GlobalCoverageSection />
        <DeveloperPlatformSection />
        <TestimonialsSection />
        <AppSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
