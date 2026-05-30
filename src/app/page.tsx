import FloatingSidebar from "@/components/layout/FloatingSidebar";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import FaqSection from "@/components/sections/FaqSection";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PricingSection from "@/components/sections/PricingSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsBar from "@/components/sections/StatsBar";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TrustNotice from "@/components/sections/TrustNotice";

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingSidebar />
      <main>
        <HeroSection />
        <StatsBar />
        <ServicesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <TrustNotice />
      </main>
      <Footer />
    </>
  );
}
