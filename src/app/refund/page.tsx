import FloatingSidebar from "@/components/layout/FloatingSidebar";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const sections = [
  ["General Refund Policy", "Payments are generally non-refundable once portal access and onboarding are activated. Refunds may apply for duplicate payment, verified technical failure, or portal access not provided within a reasonable time after successful payment."],
  ["Digital Nature of Services", "WorkDen provides digital access to tasks, dashboards, onboarding materials, and platform features. Once access is granted upon payment, it cannot typically be revoked."],
  ["User Responsibility", "Users should carefully review service details, eligibility requirements, and guidelines before payment. Completing a transaction confirms agreement to this policy."],
  ["Non-Refundable Situations", "Change of mind, inactivity after access, lack of understanding of guidelines, dissatisfaction unrelated to technical failure, user-side technical issues, or personal reasons unrelated to service delivery are non-refundable."],
  ["Chargeback & Dispute Policy", "Contact support first for resolution. False or fraudulent disputes may result in account suspension and further review."],
  ["Agreement Confirmation", "By making payment, you acknowledge reading and agreeing to this Refund Policy."],
];

export default function RefundPage() {
  return (
    <>
      <Navbar /><FloatingSidebar />
      <main className="pt-16"><section className="bg-white py-20"><div className="section-shell max-w-4xl">
        <h1 className="font-heading text-5xl font-extrabold text-gray-900">Refund Policy</h1>
        <p className="mt-4 text-lg text-gray-500">Please read this policy carefully before making any payment.</p>
        <div className="mt-10 space-y-4">{sections.map(([h, p], i) => <article key={h} className="workden-card p-6"><h2 className="font-heading text-xl font-bold text-gray-900">{i + 1}. {h}</h2><p className="mt-3 leading-7 text-gray-600">{p}</p></article>)}</div>
        <p className="mt-8 text-sm text-gray-500">Contact: support@workden.online</p>
      </div></section></main><Footer />
    </>
  );
}
