"use client";

import { motion } from "motion/react";
import { TestimonialsColumn, TestimonialItem } from "@/components/ui/testimonials-columns-1";

const testimonials: TestimonialItem[] = [
  {
    text: "WorkDen has completely changed my financial situation. I earn consistently and support is responsive.",
    name: "Priya Sharma",
    role: "Delhi",
  },
  {
    text: "As a student, this platform helped me earn extra income without affecting studies.",
    name: "Rohit Kumar",
    role: "Mumbai",
  },
  {
    text: "Flexible work options and clear guidelines. Genuine platform experience.",
    name: "Anjali Patel",
    role: "Bangalore",
  },
  {
    text: "The onboarding was clear, and task instructions are structured enough to follow confidently.",
    name: "Amit Verma",
    role: "Jaipur",
  },
  {
    text: "I like that the platform focuses on accuracy and review instead of confusing promises.",
    name: "Neha Singh",
    role: "Lucknow",
  },
  {
    text: "Support replies helped me understand the process and payment verification steps properly.",
    name: "Karan Mehta",
    role: "Pune",
  },
];

export default function TestimonialsSection() {
  return (
    <section data-motion-mode="custom" id="testimonials" className="relative overflow-hidden bg-[#F9FAFB] py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative mx-auto mb-12 flex max-w-[540px] flex-col items-center justify-center text-center"
        >
          <div className="flex justify-center">
            <div className="rounded-lg border border-gray-200 bg-white px-4 py-1 text-sm font-bold text-[#3730A3] shadow-sm">
              Testimonials
            </div>
          </div>
          <h2 className="font-heading mt-5 text-4xl font-extrabold tracking-normal text-gray-900">Success Stories</h2>
          <p className="mt-4 text-gray-500">Real user feedback from our members.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative overflow-hidden sm:[mask-image:linear-gradient(to_right,transparent,black_14%,black_86%,transparent)]"
        >
          <TestimonialsColumn testimonials={testimonials} duration={28} />
        </motion.div>
      </div>
    </section>
  );
}
