import FloatingSidebar from "@/components/layout/FloatingSidebar";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const sections = [
  ["Information We Collect", "We may collect personal information, account and task information, and technical information such as IP address, browser, device, timestamps, and cookies."],
  ["How We Use Your Information", "We use information to create and manage accounts, allocate and review tasks, ensure platform security, communicate updates, and prevent fraud."],
  ["Data Sharing & Disclosure", "Information is not sold, rented, or traded. It may be shared with trusted service providers, legal authorities, or when needed to protect rights and safety."],
  ["Data Security", "Reasonable safeguards are implemented, but no digital platform can guarantee complete security."],
  ["Cookies & Tracking Technologies", "Cookies may be used for login sessions and improved user experience."],
  ["User Responsibilities", "Users must keep credentials confidential and provide accurate information. Misuse may result in suspension."],
  ["Task Data & Uploaded Files", "Uploaded files are used strictly for verification and quality review and are not reused or distributed."],
  ["Registration Fees & Refund Policy", "A one-time fee may be charged and is non-refundable under any circumstances once access is activated."],
  ["Third-Party Services", "WorkDen is not responsible for external platforms such as payment gateways or external links."],
  ["Data Retention", "Data is retained only as long as necessary for platform operation and legal or audit requirements."],
  ["User Rights", "Users may request access, correction, or deletion through support. Requests are handled within a reasonable timeframe."],
  ["Children's Privacy", "Services are intended for users 18 and above. We do not knowingly collect data from minors."],
  ["Policy Updates", "This policy may be updated periodically. Continued use of the platform indicates acceptance."],
  ["Governing Law", "This policy is governed by the laws of India."],
];

export default function PrivacyPage() {
  return <PolicyPage title="Privacy Policy" sub="Your privacy and data protection are important to us." badge="Last Updated: 3 December 2025" sections={sections} />;
}

function PolicyPage({ title, sub, badge, sections }: { title: string; sub: string; badge: string; sections: string[][] }) {
  return (
    <>
      <Navbar /><FloatingSidebar />
      <main className="pt-16"><section className="bg-white py-20"><div className="section-shell max-w-4xl">
        <span className="rounded-full bg-[#E0E7FF] px-4 py-1.5 text-sm font-bold text-[#3730A3]">{badge}</span>
        <h1 className="font-heading mt-5 text-5xl font-extrabold text-gray-900">{title}</h1><p className="mt-4 text-lg text-gray-500">{sub}</p>
        <div className="mt-10 space-y-4">{sections.map(([h, p], i) => <article key={h} className="workden-card p-6"><h2 className="font-heading text-xl font-bold text-gray-900">{i + 1}. {h}</h2><p className="mt-3 leading-7 text-gray-600">{p}</p></article>)}</div>
        <p className="mt-8 text-sm text-gray-500">Contact: support@workden.online</p>
      </div></section></main><Footer />
    </>
  );
}
