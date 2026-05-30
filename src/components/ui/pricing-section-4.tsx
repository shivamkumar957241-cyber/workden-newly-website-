"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles as SparklesComp } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import NumberFlow from "@number-flow/react";
import { CheckCircle } from "lucide-react";
import type { Variants } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "Basic Access",
    description: "Starter access for individuals beginning with digital task work.",
    price: 249,
    buttonText: "Start Now",
    buttonVariant: "outline" as const,
    badge: "Starter Plan",
    includes: [
      "Access includes:",
      "Access to 2 Task Categories",
      "Digital WorkDen ID Card",
      "Email Support Only",
      "Standard Task Approval",
      "Minimum Withdrawal Rs 1000",
      "No Maximum Limit",
    ],
  },
  {
    name: "Full Access",
    description: "Best value with all task categories, training, and priority support.",
    price: 499,
    buttonText: "Apply Now",
    buttonVariant: "default" as const,
    popular: true,
    badge: "Most Popular",
    includes: [
      "Everything in Basic, plus:",
      "Access to All Tasks",
      "Basic Training Module Included",
      "Priority Email Support",
      "Standard Task Approval Time",
      "Minimum Withdrawal Rs 1000",
      "No Maximum Limit",
    ],
  },
  {
    name: "Ultimate Access",
    description: "VIP access with professional ID, guided training, and faster approval.",
    price: 699,
    buttonText: "Get VIP Access",
    buttonVariant: "outline" as const,
    badge: "VIP Premium",
    includes: [
      "Everything in Full, plus:",
      "Professional VIP ID Card",
      "Step-by-Step Training",
      "Live + Priority Support",
      "Fast Task Approval",
      "Minimum Withdrawal Rs 1000",
      "No Maximum Limit",
    ],
  },
  {
    name: "Ultimate Pro",
    description: "Complete access with webinar support, easier task flow, and lower withdrawal.",
    price: 999,
    buttonText: "Apply Now",
    buttonVariant: "default" as const,
    badge: "VIP Pro",
    includes: [
      "Everything in Ultimate, plus:",
      "Complete Training + Live Webinar",
      "Easy & Less Tasks",
      "Live + Priority Support",
      "Fast Task Approval",
      "Minimum Withdrawal Rs 500",
      "No Maximum Limit",
    ],
  },
];

export default function PricingSection6() {
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants: Variants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.16,
        duration: 0.65,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <div data-motion-mode="custom" className="relative mx-auto min-h-screen overflow-hidden bg-black px-4 sm:px-5 pb-12 sm:pb-20" ref={pricingRef}>
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute left-1/2 top-0 h-96 w-[100vw] -translate-x-1/2 overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px]" />
        <SparklesComp
          density={1000}
          direction="bottom"
          speed={0.45}
          color="#FFFFFF"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </TimelineContent>

      <TimelineContent
        animationNum={5}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute left-0 top-[-114px] z-0 flex h-[113.625vh] w-full flex-col items-start justify-start overflow-hidden"
      >
        <div
          className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] rounded-full"
          style={{
            border: "200px solid #3131f5",
            filter: "blur(92px)",
            WebkitFilter: "blur(92px)",
          }}
        />
      </TimelineContent>

      <article className="relative z-10 mx-auto mb-8 max-w-3xl space-y-4 pt-24 sm:pt-32 text-center px-2 sm:px-0">
        <div className="mx-auto w-fit rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold text-emerald-200">
          One-Time Fee | No Hidden Charges
        </div>
        <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.08}
            staggerFrom="first"
            reverse
            containerClassName="justify-center"
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 36,
              delay: 0,
            }}
          >
            Professional Membership Plans
          </VerticalCutReveal>
        </h2>

        <TimelineContent as="p" animationNum={0} timelineRef={pricingRef} customVariants={revealVariants} className="text-gray-300">
          Transparent one-time access fee for secure onboarding, portal verification, and structured WorkDen support.
        </TimelineContent>
      </article>

      <div
        className="absolute left-[10%] right-[10%] top-0 z-0 h-full w-[80%]"
        style={{
          backgroundImage: "radial-gradient(circle at center, #206ce8 0%, transparent 70%)",
          opacity: 0.6,
          mixBlendMode: "multiply",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-4 sm:gap-5 py-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan, index) => (
          <TimelineContent key={plan.name} as="div" animationNum={2 + index} timelineRef={pricingRef} customVariants={revealVariants}>
            <Card
              className={`group relative h-full overflow-hidden border-neutral-800 text-white transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                plan.popular
                  ? "z-20 border-[#3730A3]/60 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 shadow-[0px_-13px_220px_0px_#0900ff]"
                  : "z-10 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 hover:border-[#3730A3]/60"
              }`}
            >
              {plan.popular && (
                <div className="absolute right-5 top-5 rounded-full bg-[#3730A3] px-3 py-1 text-xs font-bold text-white">
                  Recommended
                </div>
              )}
              <CardHeader className="text-left">
                <div className="flex min-h-8 items-center justify-between gap-3 pr-24">
                  <h3 className="font-heading text-2xl font-extrabold leading-8">{plan.name}</h3>
                </div>
                <span className="w-fit rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold text-[#E0E7FF]">
                  {plan.badge}
                </span>
                <div className="flex items-baseline pt-3">
                  <span className="font-heading text-4xl font-extrabold">
                    Rs{" "}
                    <NumberFlow value={plan.price} className="font-heading text-4xl font-extrabold" />
                  </span>
                  <span className="ml-1 text-sm text-gray-300">/ One-time</span>
                </div>
                <p className="min-h-[72px] text-sm leading-6 text-gray-300">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <Link
                  href="/apply"
                  className={`mb-6 flex w-full items-center justify-center rounded-xl p-4 text-base font-bold transition-all duration-300 hover:scale-[1.02] ${
                    plan.popular || plan.buttonVariant === "default"
                      ? "border border-[#3730A3] bg-gradient-to-t from-[#3730A3] to-[#1E1B4B] text-white shadow-lg shadow-[#1E1B4B]/50"
                      : "border border-neutral-700 bg-gradient-to-t from-neutral-950 to-neutral-700 text-white shadow-lg shadow-neutral-950"
                  }`}
                >
                  {plan.buttonText} -&gt;
                </Link>

                <div className="space-y-3 border-t border-neutral-700 pt-4">
                  <h4 className="text-base font-semibold">{plan.includes[0]}</h4>
                  <ul className="space-y-2">
                    {plan.includes.slice(1).map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        <span className="text-sm leading-6 text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>

      <div className="relative z-10 mx-auto mt-8 grid max-w-5xl gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
        <div className="rounded-xl border border-neutral-700 bg-neutral-900/80 p-6 text-white transition-[transform,box-shadow,border-color] duration-[var(--motion-duration-md)] ease-[var(--motion-spring)] hover:-translate-y-2 hover:border-[#3730A3]/60 hover:shadow-xl">
          <h3 className="font-heading text-xl font-bold">What the Fee Covers</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>Account setup and verification</li>
            <li>Secure portal access</li>
            <li>Infrastructure and platform security</li>
            <li>Professional onboarding support</li>
          </ul>
        </div>
        <div className="rounded-xl border border-neutral-700 bg-neutral-900/80 p-6 text-white transition-[transform,box-shadow,border-color] duration-[var(--motion-duration-md)] ease-[var(--motion-spring)] hover:-translate-y-2 hover:border-[#3730A3]/60 hover:shadow-xl">
          <h3 className="font-heading text-xl font-bold">Payment Policy</h3>
          <p className="mt-4 text-sm leading-6 text-gray-300">
            Payments are securely processed. Portal access is activated after successful payment confirmation. Fees are non-refundable once access is activated.
          </p>
        </div>
      </div>
    </div>
  );
}
