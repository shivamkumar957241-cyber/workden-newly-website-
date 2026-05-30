"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type GradientBlobCardProps = React.HTMLAttributes<HTMLElement> & {
  as?: "article" | "div";
  children: React.ReactNode;
};

export default function GradientBlobCard({
  as = "article",
  className,
  children,
  ...props
}: GradientBlobCardProps) {
  const Comp = as;

  return (
    <Comp
      className={cn(
        "card-hover-line group relative overflow-hidden rounded-2xl border border-indigo-100/80 bg-white/92 p-6 pb-9 shadow-[0_8px_28px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-[transform,box-shadow,border-color] duration-[var(--motion-duration-md)] ease-[var(--motion-spring)] hover:-translate-y-2 hover:border-indigo-200 hover:shadow-[0_22px_52px_rgba(55,48,163,0.14)]",
        className,
      )}
      {...props}
    >
      <div className="gradient-card-blob absolute left-1/2 top-1/2 z-0 h-40 w-40 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 opacity-35 blur-[18px]" />
      <div className="absolute -right-14 -top-14 z-0 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(55,48,163,0.20),rgba(199,210,254,0.10)_48%,transparent_70%)] blur-xl transition-transform duration-[var(--motion-duration-lg)] ease-[var(--motion-spring)] group-hover:translate-x-3 group-hover:translate-y-3 group-hover:scale-125" />
      <div className="absolute -bottom-20 left-8 z-0 h-28 w-44 rounded-full bg-[radial-gradient(circle,rgba(224,231,255,0.72),transparent_68%)] blur-2xl transition-transform duration-[var(--motion-duration-lg)] ease-[var(--motion-spring)] group-hover:-translate-y-2 group-hover:scale-110" />
      <div className="absolute inset-[1px] z-[1] rounded-[15px] bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(255,255,255,0.86))] backdrop-blur-[18px] outline outline-1 outline-white/80" />
      <div className="relative z-10">{children}</div>
    </Comp>
  );
}
