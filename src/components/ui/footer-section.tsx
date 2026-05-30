"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  BadgeCheck,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import BrandLogo from "@/components/ui/brand-logo";

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSectionData {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSectionData[] = [
  {
    label: "Quick Links",
    links: [
      { title: "Home", href: "/" },
      { title: "About Us", href: "/about" },
      { title: "Services", href: "/services" },
      { title: "Membership Details", href: "/fees" },
      { title: "Apply Now", href: "/apply" },
    ],
  },
  {
    label: "Legal",
    links: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms & Conditions", href: "/terms" },
      { title: "Disclaimer", href: "/disclaimer" },
      { title: "Refund Policy", href: "/refund" },
    ],
  },
  {
    label: "Contact",
    links: [
      { title: "info@workden.online", href: "mailto:info@workden.online", icon: Mail },
      { title: "support@workden.online", href: "mailto:support@workden.online", icon: Mail },
      { title: "WhatsApp: +91 92627 25686", href: "https://wa.me/919262725686", icon: MessageCircle },
      { title: "Telegram: workden_helpdesk", href: "https://t.me/workden_helpdesk", icon: Send },
    ],
  },
  {
    label: "Social Links",
    links: [
      { title: "Facebook", href: "https://www.facebook.com/people/Workden-India/61583820256534/", icon: MessageCircle },
      { title: "Instagram", href: "https://www.instagram.com/workden_wfh", icon: Camera },
      { title: "LinkedIn", href: "https://www.linkedin.com/in/workden-india-315391383/", icon: Send },
    ],
  },
];

export function FooterSection() {
  return (
    <footer
      data-motion-mode="custom"
      className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center rounded-t-[2rem] border-t border-indigo-200/80 bg-[radial-gradient(35%_128px_at_50%_0%,rgba(55,48,163,0.16),transparent),linear-gradient(180deg,#F5F3FF_0%,#FFFFFF_55%)] px-7 py-12 shadow-[0_-18px_60px_rgba(55,48,163,0.10)] md:px-10 lg:py-16"
    >
      <div className="absolute left-1/2 right-1/2 top-0 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3730A3]/40 blur" />

      <div className="grid w-full gap-12 xl:grid-cols-[1.12fr_3fr] xl:items-start xl:gap-16">
        <AnimatedContainer className="max-w-[390px] space-y-5">
          <div className="group flex items-center gap-3">
            <BrandLogo className="size-12 transition-transform duration-300 group-hover:scale-105" />
            <div className="font-heading text-2xl font-extrabold text-gray-900">WorkDen</div>
          </div>
          <p className="max-w-sm text-sm leading-6 text-gray-500">
            A verified digital task platform delivering structured online work opportunities with transparency, secure workflow, and compliance standards.
          </p>
          <div className="w-fit rounded-lg border border-indigo-100 bg-white/70 px-3 py-2 text-xs font-semibold text-gray-500 shadow-sm">
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="size-3.5 text-[#3730A3]" />
              MSME (Udyam): UDYAM-KR-03-0640514
            </span>
          </div>
          <div className="space-y-2 text-sm text-gray-500">
            <div className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[#3730A3]" />
              <span>Ashok Nagar, Bangalore - 560001</span>
            </div>
            <div className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[#3730A3]" />
              <span>Parsuram Pur, Motihari - 845416</span>
            </div>
          </div>
        </AnimatedContainer>

        <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 md:grid-cols-[0.85fr_1fr_1.35fr_0.85fr] xl:gap-x-14">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="min-w-0">
                <h3 className="font-heading text-xs font-extrabold uppercase tracking-wider text-gray-900">{section.label}</h3>
                <ul className="mt-4 space-y-3 text-sm text-gray-500">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="relative inline-flex max-w-full items-start gap-2 leading-6 transition-all duration-300 hover:text-[#3730A3]"
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                      >
                        {link.icon && <link.icon className="mt-1 size-4 shrink-0" />}
                        <span className="min-w-0 break-words">{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      <div className="mt-12 flex w-full flex-col justify-between gap-3 border-t border-indigo-100 pt-6 text-xs text-gray-400 md:flex-row">
        <span>© 2026 WorkDen. All rights reserved.</span>
        <span>Structured Digital Task Platform</span>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
