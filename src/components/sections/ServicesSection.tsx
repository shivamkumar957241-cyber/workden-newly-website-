import {
  CheckSquare,
  ClipboardList,
  Database,
  FileText,
  Mail,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import GradientBlobCard from "@/components/ui/gradient-bold-card";
import LiquidButton from "@/components/ui/liquid-glass-button";

const services = [
  { title: "Data Entry", description: "High-accuracy data digitization and entry tasks requiring strict attention to detail.", icon: Database },
  { title: "Form Filling", description: "Structured form processing and verification for various project needs.", icon: ClipboardList },
  { title: "Document Formatting", description: "Conversion of PDF documents to editable Word formats with strict formatting rules.", icon: FileText },
  { title: "Content Review", description: "Grammar correction and content quality analysis tasks.", icon: CheckSquare },
  { title: "Email-Based Tasks", description: "Sorting, categorizing, and managing email communication data.", icon: Mail },
  { title: "Chat Support", description: "Chat-based support and query resolution tasks.", icon: MessageCircle },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-[#F9FAFB] py-20">
      <div className="section-shell">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-heading text-4xl font-bold text-gray-900">Available Work Types</h2>
          <p className="mt-3 text-gray-500">Diverse digital tasks tailored to accuracy and efficiency.</p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <GradientBlobCard key={service.title} className="min-h-[210px]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-100 bg-[#E0E7FF]/80 text-[#3730A3] shadow-sm transition-[transform,background-color] duration-[var(--motion-duration-sm)] ease-[var(--motion-spring)] group-hover:-translate-y-1 group-hover:rotate-3 group-hover:bg-[#C7D2FE]">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">{service.description}</p>
            </GradientBlobCard>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/services">
            <LiquidButton className="bg-[#3730A3] px-8 py-3 text-white">View All Services -&gt;</LiquidButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
