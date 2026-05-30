"use client";

import { RefObject } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type TimelineContentProps = {
  as?: "div" | "p";
  animationNum?: number;
  timelineRef?: RefObject<HTMLElement | null>;
  customVariants?: Variants;
  className?: string;
  children: React.ReactNode;
};

export function TimelineContent({
  as = "div",
  animationNum = 0,
  customVariants,
  className,
  children,
}: TimelineContentProps) {
  const variants =
    customVariants ??
    ({
      hidden: { opacity: 0, y: 24, scale: 0.98 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 320,
          damping: 30,
          mass: 0.72,
          delay: i * 0.04,
        },
      }),
    } satisfies Variants);

  const motionProps = {
    custom: animationNum,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-80px" },
    variants,
    className: cn(className),
  } as const;

  if (as === "p") {
    return <motion.p {...motionProps}>{children}</motion.p>;
  }

  return <motion.div {...motionProps}>{children}</motion.div>;
}

export default function TimelineAnimation() {
  return <div className="h-px w-full bg-gradient-to-r from-transparent via-[#3730A3]/60 to-transparent" />;
}
