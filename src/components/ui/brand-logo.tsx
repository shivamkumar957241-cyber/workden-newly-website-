import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export default function BrandLogo({ className, imageClassName, priority = false }: BrandLogoProps) {
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 overflow-hidden rounded-full border border-white/70 bg-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_10px_24px_rgba(15,23,42,0.18)] ring-1 ring-indigo-100",
        className,
      )}
    >
      <Image
        src="/workden-logo.png"
        alt="WorkDen logo"
        width={96}
        height={96}
        priority={priority}
        className={cn("h-full w-full object-cover", imageClassName)}
      />
    </span>
  );
}
