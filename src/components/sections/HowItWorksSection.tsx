import GradientBlobCard from "@/components/ui/gradient-bold-card";

const steps = [
  ["Apply on WorkDen", "Submit your application through the official platform."],
  ["Review & Approval", "Applications are reviewed based on verification and criteria."],
  ["Access Dashboard", "Approved users receive secure login credentials."],
  ["Task & Quality Check", "Tasks are evaluated for accuracy and compliance."],
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="section-shell">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-heading text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-3 text-gray-500">A simple and structured onboarding process designed for transparency and efficiency.</p>
        </div>
        <div className="relative grid gap-4 grid-cols-2 md:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-6 hidden border-t-2 border-dashed border-[#3730A3]/40 md:block" />
          {steps.map(([title, text], index) => (
            <GradientBlobCard key={title} className="relative min-h-[180px] sm:min-h-[220px] text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/50 bg-[#3730A3] font-heading text-xl font-extrabold text-white shadow-[0_12px_28px_rgba(55,48,163,0.24)] transition-[transform,box-shadow] duration-[var(--motion-duration-sm)] ease-[var(--motion-spring)] group-hover:-translate-y-1 group-hover:scale-110">
                {index + 1}
              </div>
              <h3 className="font-heading mt-4 text-lg font-bold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">{text}</p>
            </GradientBlobCard>
          ))}
        </div>
      </div>
    </section>
  );
}
