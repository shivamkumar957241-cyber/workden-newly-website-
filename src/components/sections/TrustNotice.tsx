import { ShieldCheck } from "lucide-react";

export default function TrustNotice() {
  return (
    <section id="trust" className="bg-white py-16">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl rounded-r-2xl border-l-4 border-[#3730A3] bg-[#E0E7FF] p-8">
          <h2 className="font-heading flex items-center gap-2 text-xl font-bold text-[#3730A3]">
            <ShieldCheck className="h-5 w-5" /> Trust & Transparency
          </h2>
          <p className="mt-3 text-sm leading-7 text-gray-700">
            Platform Notice: WorkDen operates as a task facilitation platform and does not provide employment or fixed income.
          </p>
          <p className="mt-1 text-sm leading-7 text-gray-700">Accuracy Policy: Tasks are evaluated based on strict quality standards. No guaranteed income.</p>
        </div>
      </div>
    </section>
  );
}
