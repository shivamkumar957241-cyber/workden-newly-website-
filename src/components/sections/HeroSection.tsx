"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  BadgeCheck,
  CheckCircle,
  ClipboardList,
  Database,
  FileCheck2,
  Lock,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import PaperShaderBackground from "@/components/ui/background-paper-shaders";
import { renderCanvas } from "@/components/ui/canvas";
import { GLSLHills } from "@/components/ui/glsl-hills";
import LiquidButton from "@/components/ui/liquid-glass-button";
import { TextRotate } from "@/components/ui/text-rotate";

const fadeUp = {
  initial: { opacity: 0, y: 24, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1 },
};

const springIn = {
  type: "spring" as const,
  stiffness: 320,
  damping: 30,
  mass: 0.72,
};

const floatingCards = [
  {
    className: "left-[7%] top-[24%] hidden xl:flex",
    icon: <Lock className="h-5 w-5" />,
    title: "SSL Secured",
    text: "Encrypted portal access",
  },
  {
    className: "right-[7%] top-[24%] hidden xl:flex",
    icon: <FileCheck2 className="h-5 w-5" />,
    title: "Verified Workflow",
    text: "Quality-based review",
  },
  {
    className: "left-[12%] bottom-[22%] hidden 2xl:flex",
    icon: <Database className="h-5 w-5" />,
    title: "Data Tasks",
    text: "Structured remote work",
  },
  {
    className: "right-[12%] bottom-[22%] hidden 2xl:flex",
    icon: <ClipboardList className="h-5 w-5" />,
    title: "Task Portal",
    text: "v2.4.0 Stable",
  },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 20]);

  useEffect(() => {
    const cleanup = renderCanvas("hero-cursor-canvas");
    return cleanup;
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative isolate min-h-screen overflow-hidden bg-white pt-20 sm:pt-28">
      <motion.div style={{ y: parallaxY }} className="absolute inset-0 -z-20">
        <PaperShaderBackground className="absolute inset-0" />
      </motion.div>
      <GLSLHills className="absolute inset-x-0 bottom-0 z-[-1] h-[62vh] opacity-80" cameraZ={132} speed={0.22} opacity={0.3} />
      <canvas id="hero-cursor-canvas" className="pointer-events-none absolute inset-0 z-0 h-full w-full" />

      {floatingCards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...springIn, delay: 0.52 + index * 0.04 }}
          className={`absolute z-0 w-[240px] items-center gap-3 rounded-2xl border border-indigo-100 bg-white/82 p-4 shadow-[0_18px_50px_rgba(55,48,163,0.12)] backdrop-blur-xl ${card.className}`}
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E0E7FF] text-[#3730A3]">
            {card.icon}
          </div>
          <div>
            <div className="font-heading text-base font-extrabold text-gray-900">{card.title}</div>
            <div className="mt-1 text-sm leading-5 text-gray-500">{card.text}</div>
          </div>
        </motion.div>
      ))}

      <div className="section-shell relative z-10 flex min-h-[calc(100vh-5rem)] items-center justify-center py-8 sm:py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ ...springIn, delay: 0.04 }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-sm font-bold text-[#3730A3] shadow-sm backdrop-blur"
          >
            <ShieldCheck className="h-4 w-4" />
            Enterprise-Grade Security
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ ...springIn, delay: 0.08 }}
            className="font-heading mt-5 max-w-5xl text-balance text-4xl font-extrabold leading-[1.05] tracking-normal text-gray-950 sm:mt-7 sm:text-5xl lg:text-7xl"
          >
            Professional Digital Task{" "}
            <span className="inline-flex justify-center">
              <TextRotate
                texts={["Platform", "Portal", "Workflow", "Dashboard"]}
                mainClassName="inline-flex min-w-[9ch] overflow-hidden text-[#3730A3]"
                splitBy="characters"
                staggerDuration={0.018}
                staggerFrom="last"
                rotationInterval={2800}
                transition={{ type: "spring", damping: 30, stiffness: 360 }}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ ...springIn, delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-8 text-gray-600 md:text-xl"
          >
            A professional work from home task platform designed for accuracy, transparency, and secure remote work in India.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ ...springIn, delay: 0.16 }}
            className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
          >
            <Link href="/apply" className="w-full sm:w-auto">
              <LiquidButton className="w-full rounded-xl bg-[#3730A3] px-8 py-3 text-base text-white sm:w-auto">
                Apply Now -&gt;
              </LiquidButton>
            </Link>
            <button
              className="w-full rounded-xl border-2 border-[#3730A3] bg-white/75 px-8 py-3 text-base font-bold text-[#3730A3] shadow-sm backdrop-blur transition-[transform,box-shadow,background-color] duration-[var(--motion-duration-sm)] ease-[var(--motion-spring)] hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#E0E7FF] hover:shadow-[0_14px_30px_rgba(55,48,163,0.14)] active:translate-y-0 active:scale-[0.97] sm:w-auto"
              onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            >
              How It Works ↓
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ ...springIn, delay: 0.2 }}
            className="mt-8 grid w-full max-w-4xl gap-3 grid-cols-1 sm:grid-cols-3"
          >
            <HeroStat icon={<CheckCircle />} title="Verified Tasks" text="Structured quality evaluation" />
            <HeroStat icon={<BadgeCheck />} title="Platform Active" text="System version v2.4.0 stable" />
            <HeroStat icon={<Lock />} title="Secure Access" text="Encrypted data transmission" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroStat({ icon, title, text }: { icon: React.ReactElement; title: string; text: string }) {
  return (
    <div className="min-h-[150px] rounded-2xl border border-indigo-100 bg-white/82 p-5 text-left shadow-[0_12px_34px_rgba(55,48,163,0.08)] backdrop-blur">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#E0E7FF] text-[#3730A3] [&_svg]:h-5 [&_svg]:w-5">
        {icon}
      </div>
      <div className="font-heading text-base font-extrabold text-gray-900">{title}</div>
      <p className="mt-1 text-sm leading-5 text-gray-500">{text}</p>
    </div>
  );
}
