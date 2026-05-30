import Link from "next/link";
import { AlertTriangle, Mail, MessageCircle, Send } from "lucide-react";
import FloatingSidebar from "@/components/layout/FloatingSidebar";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Contact2 } from "@/components/ui/contact-2";
import { RatingInteraction } from "@/components/ui/emoji-rating";
import GradientBlobCard from "@/components/ui/gradient-bold-card";

export default function SupportPage() {
  return (
    <>
      <Navbar />
      <FloatingSidebar />
      <main className="pt-16">
        <section className="bg-white py-20">
          <div className="section-shell">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h1 className="font-heading text-5xl font-extrabold text-gray-900">Support Center</h1>
              <p className="mt-4 text-lg text-gray-500">Official channels for platform-related queries and assistance.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Info title="Official Email" text="support@workden.online | Response Time: 24-48 business hours" />
              <Info title="Working Hours" text="Mon-Sat, 10:00 AM - 7:00 PM IST" />
              <GradientBlobCard as="div" className="min-h-[180px] border-amber-200 border-l-4 border-l-amber-400 text-amber-900">
                <div className="flex gap-2 font-heading font-bold">
                  <AlertTriangle className="h-5 w-5" /> Fraud Notice
                </div>
                <p className="mt-2 text-sm leading-6">
                  WorkDen communicates only through official channels. No personal WhatsApp payments. Pay only on official details provided by an authorized WorkDen telecaller or recruiter.
                </p>
              </GradientBlobCard>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                "Submit Query - Fill out the support form with accurate details.",
                "Ticket Review - Our team reviews your request within 24-48 hours.",
                "Resolution - You receive a response via official email communication.",
              ].map((item, index) => (
                <GradientBlobCard key={item} as="div" className="min-h-[180px]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3730A3] font-heading text-2xl font-bold text-white shadow-[0_12px_28px_rgba(55,48,163,0.22)] transition-transform duration-[var(--motion-duration-sm)] ease-[var(--motion-spring)] group-hover:scale-110">
                    {index + 1}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{item}</p>
                </GradientBlobCard>
              ))}
            </div>

            <Contact2 />

            <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-[0_12px_32px_rgba(55,48,163,0.08)]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">How was your support experience?</p>
              <RatingInteraction className="mt-6" />
              <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#3730A3]/30 to-transparent" />
            </div>

            <div className="mt-12">
              <h2 className="font-heading text-2xl font-bold text-gray-900">Contact Channels</h2>
              <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                <Channel icon={<Mail />} text="Support Email: support@workden.online" href="mailto:support@workden.online" />
                <Channel icon={<Mail />} text="Info Email: info@workden.online" href="mailto:info@workden.online" />
                <Channel icon={<MessageCircle />} text="WhatsApp Support: +91 92627 25686" href="https://wa.me/919262725686" />
                <Channel icon={<Send />} text="Telegram: Message on Telegram" href="https://t.me/workden_helpdesk" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return (
    <GradientBlobCard as="div" className="min-h-[180px]">
      <h2 className="font-heading font-bold text-gray-900">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-gray-500">{text}</p>
    </GradientBlobCard>
  );
}

function Channel({ icon, text, href }: { icon: React.ReactElement; text: string; href: string }) {
  return (
    <Link
      className="flex min-h-16 items-center gap-3 rounded-lg border border-gray-200 p-3 text-sm font-semibold text-gray-600 hover:border-[#3730A3] hover:text-[#3730A3]"
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      <span className="[&_svg]:h-5 [&_svg]:w-5">{icon}</span>
      {text}
    </Link>
  );
}
