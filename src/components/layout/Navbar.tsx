"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import BrandLogo from "@/components/ui/brand-logo";
import LiquidButton from "@/components/ui/liquid-glass-button";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/fees" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Support", href: "/support" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-2">
      <nav
        className={`section-shell mt-2 transition-all duration-300 ${
          scrolled
            ? "max-w-5xl rounded-2xl border border-indigo-200/80 bg-[#E0E7FF]/78 px-5 shadow-[0_18px_45px_rgba(55,48,163,0.16)] backdrop-blur-xl duration-[var(--motion-duration-md)] ease-[var(--motion-spring)]"
            : "max-w-7xl rounded-2xl border border-indigo-100/80 bg-gradient-to-r from-white/92 via-[#F5F3FF]/88 to-[#E0E7FF]/92 px-7 shadow-[0_12px_34px_rgba(55,48,163,0.10)] backdrop-blur-xl duration-[var(--motion-duration-md)] ease-[var(--motion-spring)]"
        }`}
      >
        <div className="relative flex min-h-16 flex-wrap items-center justify-between gap-6 py-3 lg:flex-nowrap lg:gap-0">
          <Link href="/" className="flex items-center gap-2">
            <BrandLogo className="h-11 w-11" priority />
            <span className="font-heading text-2xl font-extrabold text-gray-900">WorkDen</span>
          </Link>

          <nav className="absolute inset-0 m-auto hidden h-fit w-fit lg:block">
            <ul className="flex items-center gap-8 text-sm font-semibold">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      className={`block rounded-full px-3 py-2 transition ${
                        active
                          ? "bg-white/70 text-[#3730A3] shadow-sm"
                          : "text-gray-700 hover:bg-white/55 hover:text-[#3730A3] hover:-translate-y-0.5"
                      }`}
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <Link href="/apply">
              <LiquidButton className="bg-[#3730A3] px-5 py-2 text-sm text-white">Apply Now</LiquidButton>
            </Link>
          </div>

          <details className="group relative z-20 -mr-2 lg:hidden">
            <summary
              aria-label="Toggle menu"
              aria-controls="mobile-navigation"
              className="mobile-nav-summary rounded-xl border border-gray-200 bg-white/80 p-2.5 text-gray-800 shadow-sm backdrop-blur focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3730A3]/20"
            >
              <Menu className="h-5 w-5 group-open:hidden" />
              <X className="hidden h-5 w-5 group-open:block" />
            </summary>
            <div
              id="mobile-navigation"
              className="absolute right-0 top-14 max-h-[calc(100dvh-6.25rem)] w-[min(calc(100vw-2rem),24rem)] origin-top overflow-y-auto overscroll-contain rounded-3xl border border-gray-200 bg-white/95 p-4 shadow-2xl shadow-zinc-300/20 backdrop-blur-xl animate-in"
            >
              <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    className={`rounded-xl px-4 py-3 text-base font-semibold transition ${
                      pathname === link.href ? "bg-[#E0E7FF] text-[#3730A3]" : "text-gray-700 hover:bg-[#E0E7FF] hover:text-[#3730A3]"
                    }`}
                    href={link.href}
                    onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  className="glass-cta mt-3 px-4 py-3 text-center font-bold"
                  href="/apply"
                  onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}
                >
                  Apply Now
                </Link>
              </nav>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
