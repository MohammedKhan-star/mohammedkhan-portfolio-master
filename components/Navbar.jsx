
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Youtube,
  ArrowUpRight,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Products", href: "#products" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [

  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohammed-khan-7905a621a/",
    icon: Linkedin,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Engineermohammedkhan",
    icon: Youtube,
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "home";

      for (const link of navLinks) {
        const id = link.href.slice(1);
        const section = document.getElementById(id);

        if (
          section &&
          section.getBoundingClientRect().top <= 160
        ) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-4 rounded-2xl border border-cyan-400/15 bg-[#071426]/95 px-4 shadow-xl shadow-black/20 backdrop-blur-xl sm:px-6"
        >
          {/* Brand */}
          <Link
            href="/#home"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-700 shadow-lg shadow-cyan-500/20 transition-transform group-hover:scale-105">
              <span className="text-lg font-black text-white">
                MK
              </span>
            </div>

            <div className="hidden min-[380px]:block">
              <p className="text-sm font-black text-white sm:text-base">
                Mohammed Khan
              </p>

              <p className="text-[10px] font-semibold uppercase tracking-widest text-cyan-400">
                Software Engineer
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 2xl:flex">
            {navLinks.map((link) => {
              const isActive =
                activeSection === link.href.slice(1);

              return (
                <Link
                  key={link.name}
                  href={`/${link.href}`}
                  aria-current={
                    isActive ? "location" : undefined
                  }
                  className={`rounded-xl px-2.5 py-2 text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-cyan-400/10 text-cyan-300"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop social links */}
          <div className="hidden items-center gap-2 lg:flex">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white 2xl:hidden"
          >
            {menuOpen ? (
              <X size={23} />
            ) : (
              <Menu size={23} />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile and tablet navigation */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 2xl:hidden">
          {/* Backdrop */}
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation"
            className="absolute inset-0 bg-[#020817]/85 backdrop-blur-sm"
          />

          {/* Menu panel */}
          <div
            id="mobile-navigation"
            className="absolute inset-x-4 bottom-4 top-[100px] mx-auto max-w-lg overflow-y-auto rounded-3xl border border-cyan-400/20 bg-[#091628] p-5 shadow-2xl sm:inset-x-6 sm:p-7"
          >
            <div className="mb-5 border-b border-white/10 pb-5">
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Navigation
              </p>

              <h2 className="mt-2 text-2xl font-black text-white">
                Explore My Portfolio
              </h2>
            </div>

            {/* Mobile links */}
            <div className="space-y-1.5">
              {navLinks.map((link, index) => {
                const isActive =
                  activeSection === link.href.slice(1);

                return (
                  <Link
                    key={link.name}
                    href={`/${link.href}`}
                    onClick={closeMenu}
                    className={`flex items-center justify-between rounded-xl border px-4 py-3 transition-colors ${
                      isActive
                        ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                        : "border-transparent text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-xs font-bold text-slate-500">
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      <span className="text-sm font-semibold">
                        {link.name}
                      </span>
                    </span>

                    <ArrowUpRight size={16} />
                  </Link>
                );
              })}
            </div>

            {/* Mobile social links */}
            <div className="mt-7 border-t border-white/10 pt-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                Connect With Me
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
                    >
                      <Icon size={19} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}