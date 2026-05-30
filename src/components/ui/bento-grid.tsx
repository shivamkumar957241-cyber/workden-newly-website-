"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  CheckCircle,
  Globe,
  TrendingUp,
  Video,
} from "lucide-react";

export interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items?: BentoItem[];
}

const itemsSample: BentoItem[] = [
  {
    title: "Analytics Dashboard",
    meta: "v2.4.1",
    description: "Real-time metrics with AI-powered insights and predictive analytics",
    icon: <TrendingUp className="h-4 w-4 text-indigo-800" />,
    status: "Live",
    tags: ["Statistics", "Reports", "AI"],
    hasPersistentHover: true,
  },
  {
    title: "Task Manager",
    meta: "84 completed",
    description: "Automated workflow management with priority scheduling",
    icon: <CheckCircle className="h-4 w-4 text-emerald-500" />,
    status: "Updated",
    tags: ["Productivity", "Automation"],
  },
  {
    title: "Media Library",
    meta: "12GB used",
    description: "Cloud storage with intelligent content processing",
    icon: <Video className="h-4 w-4 text-purple-500" />,
    tags: ["Storage", "CDN"],
  },
  {
    title: "Global Network",
    meta: "6 regions",
    description: "Multi-region deployment with edge computing",
    icon: <Globe className="h-4 w-4 text-sky-500" />,
    status: "Beta",
    tags: ["Infrastructure", "Edge"],
  },
];

function BentoGrid({ items = itemsSample }: BentoGridProps) {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => {
        const content = (
          <>
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div>
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E0E7FF] transition-all duration-300 group-hover:bg-[#E0E7FF]">
                    {item.icon}
                  </div>
                  <span
                    className={cn(
                      "rounded-lg px-3 py-1 font-mono text-xs font-semibold backdrop-blur-sm transition-colors duration-300",
                      "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100",
                    )}
                  >
                    {item.status || "Active"}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading text-xl font-extrabold leading-7 tracking-normal text-gray-900">
                    {item.title}
                    {item.meta && (
                      <span className="ml-2 rounded-full bg-gray-100 px-2 py-0.5 align-middle text-xs font-semibold text-gray-500">
                        {item.meta}
                      </span>
                    )}
                  </h3>
                  <p className="text-sm font-medium leading-6 text-gray-600">{item.description}</p>
                </div>
              </div>

              <div className="flex items-end justify-between gap-4">
                <div className="flex min-w-0 flex-wrap gap-2 text-xs text-gray-500">
                  {item.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-gray-200 bg-white/70 px-2.5 py-1 backdrop-blur-sm transition-all duration-200 hover:bg-[#E0E7FF] hover:text-[#3730A3]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="shrink-0 whitespace-nowrap text-sm font-bold text-[#3730A3] opacity-100 transition-all group-hover:translate-x-1">
                  {item.cta || "Explore ->"}
                </span>
              </div>
            </div>

            <div
              className={cn(
                "absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-transparent via-[#3730A3]/6 to-transparent p-px transition-opacity duration-300",
                item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100",
              )}
            />
          </>
        );

        const className = cn(
          "group relative flex min-h-[280px] overflow-hidden rounded-xl border border-gray-100/80 bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(55,48,163,0.05)] transition-all duration-300 will-change-transform",
          "hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(55,48,163,0.12)]",
          item.hasPersistentHover && "-translate-y-0.5 shadow-[0_12px_32px_rgba(55,48,163,0.12)]",
        );

        if (item.cta) {
          return (
            <Link key={`${item.title}-${index}`} href="/apply" className={className}>
              {content}
            </Link>
          );
        }

        return (
          <div key={`${item.title}-${index}`} className={className}>
            {content}
          </div>
        );
      })}
    </div>
  );
}

export { BentoGrid };
export default BentoGrid;
