"use client";

import { useEffect, useRef, useState } from "react";

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const duration = 2800;
      const animate = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * 5000));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      observer.disconnect();
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" ref={ref} className="bg-[#3730A3] py-12">
      <div className="section-shell grid grid-cols-2 gap-8 md:grid-cols-4">
        <Stat value={`${count.toLocaleString("en-IN")}+`} label="Active Members" />
        <Stat value="SSL" label="Secured Platform" />
        <Stat value="v2.4.0" label="Platform Version" />
        <Stat value={<><span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse" />Active</>} label="Platform Status" />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div className="text-center">
      <div className="font-heading text-2xl sm:text-4xl font-extrabold text-white">{value}</div>
      <div className="mt-1 text-xs sm:text-sm font-medium text-white/70">{label}</div>
    </div>
  );
}
