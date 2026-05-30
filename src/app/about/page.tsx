import { CheckCircle } from "lucide-react";
import FloatingSidebar from "@/components/layout/FloatingSidebar";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <FloatingSidebar />
      <main className="pt-16">
        <section className="bg-white py-20">
          <div className="section-shell">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-gray-900">About WorkDen</h1>
              <p className="mt-4 text-lg text-gray-500">Building a transparent, structured and secure digital task ecosystem across India.</p>
            </div>
            <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
              <div className="space-y-5 text-gray-600 leading-8">
                <p>Founded in 2024, WorkDen is a structured digital task facilitation platform designed to connect individuals with skill-based, remote task opportunities.</p>
                <p>Our platform focuses on accuracy, transparency, and responsible digital participation. We provide users with access to a professional task portal where work is assigned based on eligibility, project demand, and performance compliance.</p>
                <p>WorkDen operates on a task-based performance model. The platform does not provide employment contracts or guaranteed income.</p>
              </div>
              <img className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team collaboration" />
            </div>
            <InfoBlock />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function InfoBlock() {
  const purpose = ["Structured task allocation system", "Accuracy-based quality review", "Secure portal infrastructure", "Transparent participation policies"];
  const work = ["Apply and complete verification to access the professional task portal.", "Tasks are allocated based on project availability and eligibility criteria.", "Submitted work undergoes structured quality review before approval.", "Earnings depend on accuracy, compliance, and guideline adherence."];
  return (
    <div className="mt-16 space-y-12">
      <section>
        <h2 className="font-heading text-3xl font-bold text-gray-900">Our Purpose</h2>
        <p className="mt-3 max-w-4xl text-gray-600">We aim to create a professional digital environment where individuals can participate in flexible, skill-driven tasks under clearly defined guidelines and quality standards.</p>
        <div className="mt-6 grid gap-3 grid-cols-1 sm:grid-cols-2">
          {purpose.map((item) => <div key={item} className="flex gap-2 text-gray-700"><CheckCircle className="h-5 w-5 text-[#3730A3]" />{item}</div>)}
        </div>
      </section>
      <section className="grid gap-4 grid-cols-2 md:grid-cols-4">
        {work.map((item, index) => <div key={item} className="workden-card p-5"><div className="font-heading text-2xl font-bold text-[#3730A3]">{index + 1}</div><p className="mt-2 text-sm leading-6 text-gray-600">{item}</p></div>)}
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        <div className="workden-card p-6"><h3 className="font-heading text-2xl font-bold">Mission</h3><p className="mt-3 text-gray-600">To establish a secure and transparent digital task platform that upholds professional standards, structured workflows, and responsible user participation.</p></div>
        <div className="workden-card p-6"><h3 className="font-heading text-2xl font-bold">Vision</h3><p className="mt-3 text-gray-600">To become a trusted and recognized name in India&apos;s digital task ecosystem by enabling skill-based remote participation through structured and ethical operations.</p></div>
      </section>
      <section className="grid gap-4 md:grid-cols-4">
        {["Registered Name: WorkDen", "Established: 2024", "Platform Category: Digital Task Facilitation", "Operational Presence: India"].map((item) => <div key={item} className="rounded-xl bg-[#F9FAFB] p-4 text-sm font-semibold text-gray-700">{item}</div>)}
      </section>
    </div>
  );
}
