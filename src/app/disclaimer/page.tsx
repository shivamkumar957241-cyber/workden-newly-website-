import FloatingSidebar from "@/components/layout/FloatingSidebar";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const cards = [
  ["No Income Guarantee", "WorkDen does not guarantee income, fixed earnings, or continuous task availability. Earnings depend entirely on task approval, accuracy levels, and project-specific criteria. We promote a performance-based environment.", "border-amber-400"],
  ["Task Availability", "Task availability is dynamic and depends strictly on ongoing project requirements and client demands. Access to the portal provides the opportunity to work but does not ensure a fixed volume of daily tasks.", "border-[#3730A3]"],
  ["User Responsibility", "The user is solely responsible for compliance with task guidelines and quality standards. WorkDen is not liable for user-side technical issues, device compatibility problems, or internet connectivity failures.", "border-[#3730A3]"],
];

export default function DisclaimerPage() {
  return (
    <>
      <Navbar /><FloatingSidebar />
      <main className="pt-16"><section className="bg-white py-20"><div className="section-shell max-w-4xl">
        <h1 className="font-heading text-5xl font-extrabold text-gray-900">Platform Disclaimer</h1>
        <p className="mt-4 text-lg text-gray-500">Important information regarding platform usage, user expectations, and professional guidelines.</p>
        <div className="mt-10 space-y-5">{cards.map(([h, p, b]) => <article key={h} className={`rounded-r-2xl border-l-4 ${b} bg-white p-6 shadow-sm`}><h2 className="font-heading text-2xl font-bold text-gray-900">{h}</h2><p className="mt-3 leading-7 text-gray-600">{p}</p></article>)}</div>
        <div className="mt-8 rounded-2xl bg-[#E0E7FF] p-6 text-gray-700">By accessing or using this platform, you acknowledge that you have read, understood, and agreed to the terms outlined in this disclaimer.</div>
        <p className="mt-8 text-sm text-gray-500">WorkDen • Professional Transparency | Last Updated: December, 2025</p>
      </div></section></main><Footer />
    </>
  );
}
