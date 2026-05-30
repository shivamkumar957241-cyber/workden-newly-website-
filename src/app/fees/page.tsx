import FloatingSidebar from "@/components/layout/FloatingSidebar";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PricingSection from "@/components/sections/PricingSection";

export default function FeesPage() {
  return (
    <>
      <Navbar />
      <FloatingSidebar />
      <main className="pt-16">
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}
