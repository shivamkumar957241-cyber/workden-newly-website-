import FloatingSidebar from "@/components/layout/FloatingSidebar";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const sections = [
  ["Platform Nature", "WorkDen is a digital task facilitation platform and does not create employment. Participation is independent."],
  ["Eligibility", "Users must be 18 or older. Inaccurate information may result in suspension or termination."],
  ["Registration", "Accurate details are required. Duplicate or fraudulent accounts are not permitted."],
  ["Application & Approval", "Access is activated after payment confirmation. Credentials are shared after payment verification."],
  ["Fees & Refund Policy", "Fees are generally non-refundable once services are activated. Refunds apply only for duplicate payment or verified technical issues."],
  ["Task Rules", "Fake submissions, automation tools, and policy violations are prohibited."],
  ["Earnings & Payments", "Earnings are performance-based. There is no fixed income or guarantee."],
  ["Account Suspension", "Accounts may be suspended for fraud, suspicious activity, or repeated low-quality submissions."],
  ["Chargebacks & Disputes", "False chargebacks may result in permanent suspension and possible legal action."],
  ["Intellectual Property", "WorkDen content and branding cannot be reproduced without written permission."],
  ["Limitation of Liability", "WorkDen is not liable for indirect or consequential damages."],
  ["Modifications", "Terms may be updated anytime. Continued use indicates acceptance."],
  ["Governing Law", "These terms are governed by the laws of India and Indian jurisdiction."],
  ["Contact Information", "support@workden.online | Bangalore, India"],
];

export default function TermsPage() {
  return (
    <>
      <Navbar /><FloatingSidebar />
      <main className="pt-16"><section className="bg-white py-20"><div className="section-shell max-w-4xl">
        <span className="rounded-full bg-[#E0E7FF] px-4 py-1.5 text-sm font-bold text-[#3730A3]">Effective Date: 03 December 2025</span>
        <h1 className="font-heading mt-5 text-5xl font-extrabold text-gray-900">Terms & Conditions</h1>
        <div className="mt-10 space-y-4">{sections.map(([h, p], i) => <article key={h} className="workden-card p-6"><h2 className="font-heading text-xl font-bold text-gray-900">{i + 1}. {h}</h2><p className="mt-3 leading-7 text-gray-600">{p}</p></article>)}</div>
      </div></section></main><Footer />
    </>
  );
}
