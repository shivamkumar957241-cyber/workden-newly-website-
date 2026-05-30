"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = [
  ".workden-card",
  ".bento-surface",
  "[data-reveal]",
  "main section > .section-shell > div",
].join(",");

export default function MotionSystem() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (pathname === "/" || reduceMotion || !("IntersectionObserver" in window)) {
      return;
    }

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(revealSelector)).filter(
      (item) => !item.closest("[data-motion-mode='custom']"),
    );

    revealItems.forEach((item, index) => {
      item.dataset.revealReady = "true";
      item.style.transitionDelay = `${Math.min(index % 8, 7) * 40}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const target = entry.target as HTMLElement;
          target.dataset.revealVisible = "true";
          delete target.dataset.revealReady;
          observer.unobserve(target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
