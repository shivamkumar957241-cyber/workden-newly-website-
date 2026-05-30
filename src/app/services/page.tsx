import Link from "next/link";
import { AlertTriangle, CheckSquare, ClipboardList, Database, FileText, Mail, MessageCircle } from "lucide-react";
import FloatingSidebar from "@/components/layout/FloatingSidebar";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import GradientBlobCard from "@/components/ui/gradient-bold-card";

type Service = {
  title: string;
  text: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const services: Service[] = [
  { title: "Data Entry", text: "High-accuracy data digitization and entry tasks requiring attention to detail.", Icon: Database },
  { title: "Form Filling", text: "Structured form processing and verification for various project needs.", Icon: ClipboardList },
  { title: "Document Formatting", text: "Conversion of PDF documents to editable Word formats with strict formatting rules.", Icon: FileText },
  { title: "Content Review", text: "Grammar correction and content quality analysis tasks.", Icon: CheckSquare },
  { title: "Email-Based Tasks", text: "Sorting, categorizing, and managing email communication data.", Icon: Mail },
  { title: "Chat Support", text: "Chat-based support and query resolution tasks.", Icon: MessageCircle },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <FloatingSidebar />
      <main className="pt-16">
        <section className="bg-white py-20">
          <div className="section-shell">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-gray-900">Our Services</h1>
              <p className="mt-4 text-lg text-gray-500">Professional task-based solutions designed for accuracy and scalability.</p>
            </div>
            <div className="mt-10 flex gap-3 rounded-r-xl border-l-4 border-amber-400 bg-amber-50 p-4 text-sm text-amber-800">
              <AlertTriangle className="h-5 w-5 shrink-0" />
              <p>Note: Service availability may vary based on project requirements and user eligibility.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ title, text, Icon }) => (
                <GradientBlobCard key={title} className="min-h-[230px]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-100 bg-[#E0E7FF]/80 text-[#3730A3] shadow-sm transition-[transform,background-color] duration-[var(--motion-duration-sm)] ease-[var(--motion-spring)] group-hover:-translate-y-1 group-hover:rotate-3 group-hover:bg-[#C7D2FE]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-heading text-xl font-bold text-gray-900">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-gray-500">{text}</p>
                </GradientBlobCard>
              ))}
            </div>
            <div className="mt-14 text-center">
              <h2 className="font-heading text-3xl font-bold text-gray-900">Ready to Start?</h2>
              <Link href="/apply" className="glass-cta mt-5 px-8 py-3 font-bold">
                Apply Now -&gt;
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
