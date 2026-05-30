"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import LiquidButton from "@/components/ui/liquid-glass-button";

export const faqs = [
  ["How can I apply on WorkDen?", "You can apply through our official application portal by clicking the Apply Now button. You will need to provide basic details and complete the verification steps."],
  ["Is there any registration or portal access fee?", "Yes, WorkDen charges a one-time portal access fee for account setup, infrastructure, and secure verification. Please refer to our Pricing page for details."],
  ["How long does application approval take?", "The review and approval process typically takes 2 to 3 business hours after successful verification and fee payment."],
  ["Can my application be rejected?", "Yes, applications can be rejected if verification fails, if the applicant does not meet our internal quality criteria, or if any fake screenshot, edited document, or fraudulent payment proof is submitted."],
  ["What type of tasks are available on WorkDen?", "Available work includes Data Entry, Form Filling, Content Review, Chat Support, and Email-based administrative tasks."],
  ["How are tasks assigned to users?", "Tasks are allocated based on plan level, user accuracy ratings, and project availability. Premium users often get priority allocation."],
  ["What happens if my task is rejected?", "Rejected tasks do not qualify for credit. Multiple rejections due to poor accuracy can lead to temporary account suspension."],
  ["Does WorkDen guarantee income or fixed earnings?", "No. WorkDen is a task-based platform. Earnings depend entirely on your accuracy and the volume of tasks you successfully complete."],
  ["Are registration or portal access fees refundable?", "No. The fee covers setup, verification, and portal access costs, and is non-refundable under any circumstances."],
  ["How can I contact WorkDen support?", "You can reach us via email at support@workden.online or use the contact form on our Support page."],
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="bg-white py-20">
      <div className="section-shell">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="font-heading text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-3 text-gray-500">Common queries about applications, tasks, and WorkDen policies.</p>
        </div>
        <div className="mx-auto max-w-3xl">
          {faqs.map(([question, answer], index) => (
            <div key={question} className="border-b border-gray-100">
              <button className="flex w-full items-center justify-between gap-3 py-4 text-left" onClick={() => setOpen(open === index ? -1 : index)}>
                <span className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E0E7FF] text-xs font-bold text-[#3730A3]">{index + 1}</span>
                  <span className="font-heading font-bold text-gray-900">{question}</span>
                </span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-[#3730A3] transition ${open === index ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0.92 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0.94 }}
                    transition={{ type: "spring", stiffness: 360, damping: 32, mass: 0.7 }}
                    className="origin-top overflow-hidden"
                  >
                    <p className="pb-4 pl-7 sm:pl-10 text-sm leading-6 text-gray-500">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 sm:mt-12 max-w-3xl rounded-2xl bg-[#F9FAFB] p-6 sm:p-8 text-center">
          <h3 className="font-heading text-2xl font-bold text-gray-900">Still Need Help?</h3>
          <p className="mt-2 text-gray-500">Contact our support team for verification and queries.</p>
          <Link href="/support">
            <LiquidButton className="mt-5 bg-[#3730A3] px-8 py-3 text-white">Contact Support -&gt;</LiquidButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
