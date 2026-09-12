"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Youtube,
  Instagram,
  Mail,
  MessageCircle,
  ArrowUp,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Products", href: "#products" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/MohammedKhan-star",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "#",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "#",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "#",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-cyan-400/10 bg-[#01070d]">

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">

        {/* Main footer grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">

          {/* Brand */}
          <div>

            <Link
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-black text-cyan-400">
                ST
              </div>

              <div>
                <p className="font-black tracking-wide text-white">
                  MOHAMMED KHAN
                </p>

                <p className="mt-1 text-[9px] font-bold tracking-[0.25em] text-cyan-400">
                  FOUNDER • STACKRA TECHNOLOGIES
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Founder and software engineer building modern websites,
              business software, AI-powered applications and digital
              solutions.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
                  >
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>

          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Navigation
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-slate-500 transition hover:text-cyan-400"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-white">
              STACKRA
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <a
                href="https://stackratechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-400"
              >
                Company Website
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://stackratechnologies.com/academy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-400"
              >
                STACKRA Academy
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://github.com/MohammedKhan-star"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-cyan-400"
              >
                GitHub
                <ArrowUpRight size={14} />
              </a>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Let's Connect
            </h3>

            <div className="mt-5 space-y-4">

              <a
                href="mailto:mohammedkhan20019@gmail.com"
                className="flex items-center gap-3 text-sm text-slate-500 transition hover:text-cyan-400"
              >
                <Mail size={17} />
                mohammedkhan20019@gmail.com
              </a>

              <a
                href="https://wa.me/919618563743"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-500 transition hover:text-cyan-400"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>

            </div>

            <Link
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Start a Project
              <ArrowUpRight size={15} />
            </Link>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <div className="text-xs text-slate-600">
            © {new Date().getFullYear()} Mohammed Khan. All rights reserved.
          </div>

          <div className="text-xs text-slate-600">
            Founder of{" "}
            <span className="text-slate-400">
              STACKRA TECHNOLOGIES
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center self-start rounded-full border border-white/10 text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-400 sm:self-auto"
          >
            <ArrowUp size={16} />
          </button>

        </div>

      </div>
    </footer>
  );
}