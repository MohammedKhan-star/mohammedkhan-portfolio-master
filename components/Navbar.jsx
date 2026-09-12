"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 160;

        if (window.scrollY >= sectionTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3"
          : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <nav
          className={`relative rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "border-cyan-400/20 bg-[#020b14]/90 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl"
              : "border-white/10 bg-[#020b14]/70 backdrop-blur-xl"
          }`}
        >

          <div className="flex h-[70px] items-center justify-between px-4 sm:px-5">

            {/* ================= LOGO ================= */}

            <Link
              href="#home"
              onClick={closeMenu}
              className="group flex items-center gap-3"
            >

              {/* Replace this path with your actual logo path */}
              <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-cyan-400/20 bg-white/[0.03]">
                <Image
                  src="/profile/stackra.png"
                  alt="STACKRA TECHNOLOGIES"
                  fill
                  priority
                  className="object-contain p-1.5 transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="hidden leading-none sm:block">

                <p className="text-sm font-black tracking-wide text-white">
                  MOHAMMED KHAN
                </p>

                <p className="mt-1 text-[9px] font-bold tracking-[0.25em] text-cyan-400">
                  FOUNDER • STACKRA
                </p>

              </div>

            </Link>

            {/* ================= DESKTOP NAV ================= */}

            <div className="hidden items-center gap-1 lg:flex">

              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative rounded-xl px-3 py-2.5 text-[13px] font-medium transition-all duration-200 ${
                      isActive
                        ? "text-cyan-400"
                        : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    {item.name}

                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-cyan-400" />
                    )}
                  </Link>
                );
              })}

            </div>

            {/* ================= DESKTOP CTA ================= */}

            <Link
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 lg:flex"
            >
              Let's Talk
              <ArrowUpRight size={16} />
            </Link>

            {/* ================= MOBILE BUTTON ================= */}

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-white/[0.03] text-cyan-400 transition hover:bg-cyan-400/10 lg:hidden"
            >
              {menuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>

          </div>

          {/* ================= MOBILE MENU ================= */}

          {menuOpen && (
            <div className="border-t border-white/10 px-4 pb-4 pt-3 lg:hidden">

              <div className="flex flex-col gap-1">

                {navItems.map((item) => {
                  const isActive =
                    activeSection === item.href.slice(1);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                        isActive
                          ? "bg-cyan-400/10 text-cyan-400"
                          : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                <Link
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Let's Talk
                  <ArrowUpRight size={16} />
                </Link>

              </div>

            </div>
          )}

        </nav>
      </div>
    </header>
  );
}