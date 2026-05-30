import Link from "next/link";
import FloatingSidebar from "@/components/layout/FloatingSidebar";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const posts = [
  ["Guide", "Work From Home Data Entry Job - Beginner Guide", "A practical guide for starting with data entry work from home.", "5 min read", "/blogs/work-from-home"],
  ["Fact Check", "Online Typing Job Real or Fake?", "Learn how to identify genuine typing tasks and avoid misleading offers.", "4 min read", "/blogs/online-typing-job-real-or-fake"],
  ["Alert", "Captcha Work Safe or Not?", "Important safety signals to check before joining captcha work platforms.", "6 min read", "/blogs/captcha-work-safe-or-not"],
  ["Fact Check", "Form Filling Job Real or Fake?", "A clear breakdown of form filling jobs, risks, and verification steps.", "5 min read", "/blogs/form-filling-job-real-or-fake"],
  ["WorkDen Special", "Work From Home Opportunity on WorkDen", "How WorkDen structures remote task access and verification.", "7 min read", "/blogs/work-from-home-opportunity-workden"],
  ["Beginners", "Work From Home Jobs for Beginners", "Beginner-friendly ways to approach online task work responsibly.", "5 min read", "/blogs/work-from-home-jobs-for-beginners"],
  ["Earning", "Ghar Baithe Online Paise Kaise Kamaye?", "Hindi guide for understanding online income options from home.", "8 min read", "/blogs/ghar-baithe-online-paise-kaise-kamaye"],
  ["Platforms", "Online Earning Platforms in India", "How to compare online platforms before signing up.", "6 min read", "/blogs/online-earning-platforms-in-india"],
  ["Education", "How WorkDen Helps Beginners Online Work", "A simple overview of onboarding, guidelines, and portal access.", "4 min read", "/blogs/how-workden-helps-beginners-online-work"],
  ["Part Time", "Part Time Job Work From Home", "Part-time remote work basics for flexible schedules.", "5 min read", "/blogs/part-time-job-work-from-home"],
  ["Students", "Work From Home for Students", "How students can evaluate flexible online task options.", "4 min read", "/blogs/work-from-home-for-students"],
  ["Housewives", "Work From Home for Housewives", "Remote participation options for home-based schedules.", "5 min read", "/blogs/work-from-home-for-housewives"],
  ["WFH", "Work From Home: Data Entry Job", "A concise overview of work-from-home data entry expectations.", "6 min read", "/blogs/work-from-home"],
];

const colors: Record<string, string> = {
  Guide: "bg-[#E0E7FF] text-[#3730A3]",
  "Fact Check": "bg-amber-50 text-amber-700",
  Alert: "bg-red-50 text-red-700",
  "WorkDen Special": "bg-emerald-50 text-emerald-700",
  Beginners: "bg-[#E0E7FF] text-[#1E1B4B]",
  Earning: "bg-teal-50 text-teal-700",
  Platforms: "bg-purple-50 text-purple-700",
  Education: "bg-orange-50 text-orange-700",
  "Part Time": "bg-pink-50 text-pink-700",
  Students: "bg-cyan-50 text-cyan-700",
  Housewives: "bg-rose-50 text-rose-700",
  WFH: "bg-[#E0E7FF] text-[#1E1B4B]",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <FloatingSidebar />
      <main className="pt-16">
        <section className="bg-white py-20">
          <div className="section-shell">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h1 className="font-heading text-5xl font-extrabold text-gray-900">WorkDen Blog</h1>
              <p className="mt-4 text-lg text-gray-500">Work from home, online tasks aur digital safety se related genuine guides.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map(([category, title, desc, read, href], index) => (
                <article key={`${title}-${index}`} className={`bento-surface flex min-h-[260px] flex-col p-6 ${index === 0 ? "is-active" : ""}`}>
                  <div className="bento-content flex h-full flex-col">
                    <span className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${colors[category]}`}>{category}</span>
                    <h2 className="font-heading mt-5 text-xl font-bold leading-7 text-gray-900">{title}</h2>
                    <p className="mt-3 flex-1 text-sm leading-6 text-gray-500">{desc}</p>
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <span className="rounded-full border border-gray-200 bg-white/80 px-3 py-1 font-mono text-xs text-gray-500">{read}</span>
                      <Link className="shrink-0 whitespace-nowrap text-sm font-bold text-[#3730A3] transition hover:translate-x-1" href={href}>
                        Read Full Blog -&gt;
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
