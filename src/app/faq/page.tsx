import FloatingSidebar from "@/components/layout/FloatingSidebar";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import FaqSection from "@/components/sections/FaqSection";

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <FloatingSidebar />
      <main className="pt-16">
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
