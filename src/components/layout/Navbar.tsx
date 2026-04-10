"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { navItems, isNavGroup } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  // On homepage: transparent over dark hero, white text. On scroll or other pages: cream bg, dark text.
  const isDark = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <img
            src={isDark ? "/images/logo-white.png" : "/images/logo-color.png"}
            alt="Almaworks"
            className="h-8 w-auto transition-all duration-300"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) =>
            isNavGroup(item) ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    isDark ? "text-white/80 hover:text-white" : "text-[#1A1A1A]/70 hover:text-[#1A1A1A]"
                  }`}
                >
                  {item.label}
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {openDropdown === item.label && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="min-w-[180px] rounded-xl border border-warm-border bg-cream p-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-4 py-2.5 text-sm font-medium text-[#1A1A1A]/70 transition-colors hover:bg-cream-dark hover:text-[#1A1A1A]"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isDark ? "text-white/80 hover:text-white" : "text-[#1A1A1A]/70 hover:text-[#1A1A1A]"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/get-involved"
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              isDark
                ? "bg-white text-[#1A1A1A] hover:bg-white/90"
                : "bg-[#1A1A1A] text-white hover:bg-[#333]"
            }`}
          >
            Get Involved
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-0.5 w-6 transition-all duration-300 ${
                isDark ? "bg-white" : "bg-[#1A1A1A]"
              } ${i === 0 && mobileOpen ? "translate-y-2 rotate-45" : ""} ${
                i === 1 && mobileOpen ? "opacity-0" : ""
              } ${i === 2 && mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`overflow-hidden transition-all duration-300 md:hidden ${mobileOpen ? "max-h-[500px]" : "max-h-0"}`}>
        <div className="space-y-1 bg-cream px-6 pb-6 pt-2">
          {navItems.map((item) =>
            isNavGroup(item) ? (
              <div key={item.label}>
                <p className="px-3 pt-4 pb-1 text-xs font-semibold uppercase tracking-wider text-[#6B6B6B]/50">
                  {item.label}
                </p>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[#1A1A1A]/70 transition-colors hover:bg-cream-dark hover:text-[#1A1A1A]"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[#1A1A1A]/70 transition-colors hover:bg-cream-dark hover:text-[#1A1A1A]"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/get-involved"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block rounded-full bg-[#1A1A1A] px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </header>
  );
}
