"use client";

import Link from "next/link";
import {
  Sparkles,
  ReceiptText,
  UsersRound,
  Building2,
  GraduationCap,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const products = [
  {
    icon: Sparkles,
    label: "AI PLATFORM",
    title: "STACKRA AI",
    description:
      "An intelligent business management platform bringing business operations, CRM, finance, projects, inventory, sales, reports and AI assistance into one platform.",
    status: "In Development",
    href: "#",
  },
  {
    icon: ReceiptText,
    label: "BUSINESS SOFTWARE",
    title: "AI Invoice & Billing",
    description:
      "A modern billing solution designed to simplify invoices, payments, receipts and business transaction management.",
    status: "Product",
    href: "#",
  },
  {
    icon: UsersRound,
    label: "BUSINESS SOLUTION",
    title: "STACKRA CRM",
    description:
      "Customer and lead management software for organizing contacts, sales opportunities, communication and business relationships.",
    status: "Product",
    href: "#",
  },
  {
    icon: Building2,
    label: "BUSINESS SOLUTION",
    title: "STACKRA ERP",
    description:
      "Integrated business management software designed to connect operations, inventory, finance, projects and reporting.",
    status: "Product",
    href: "#",
  },
  {
    icon: GraduationCap,
    label: "EDUCATION",
    title: "STACKRA Academy",
    description:
      "A digital learning and computer training platform for courses, technology education and practical skill development.",
    status: "Live",
    href: "https://stackratechnologies.com/academy",
  },
  {
    icon: BarChart3,
    label: "ANALYTICS",
    title: "Business Analytics",
    description:
      "Data-driven dashboards and reporting solutions that help organizations understand performance and make informed decisions.",
    status: "Solution",
    href: "#",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative overflow-hidden border-t border-cyan-400/10 bg-[#020b14] py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="max-w-3xl">

          <p className="mb-3 text-sm font-bold tracking-[0.3em] text-cyan-400">
            STACKRA ECOSYSTEM
          </p>

          <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
            Products & Solutions
            <span className="block text-cyan-400">
              Built by STACKRA
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Technology products and business solutions designed to help
            organizations simplify operations, improve productivity and
            grow digitally.
          </p>

        </div>

        {/* Product grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => {
            const Icon = product.icon;

            return (
              <article
                key={product.title}
                className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-3xl border border-cyan-400/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
              >

                {/* Top */}
                <div className="flex items-start justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 transition group-hover:scale-110">
                    <Icon size={27} />
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {product.status}
                  </span>

                </div>

                {/* Content */}
                <p className="mt-7 text-[10px] font-bold tracking-[0.25em] text-cyan-400/70">
                  {product.label}
                </p>

                <h3 className="mt-2 text-2xl font-black text-white">
                  {product.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                  {product.description}
                </p>

                {/* CTA */}
                {product.href !== "#" ? (
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-cyan-400 transition hover:text-cyan-300"
                  >
                    Explore Product
                    <ArrowUpRight size={16} />
                  </a>
                ) : (
                  <Link
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-cyan-400 transition hover:text-cyan-300"
                  >
                    Discuss Solution
                    <ArrowUpRight size={16} />
                  </Link>
                )}

              </article>
            );
          })}

        </div>

        {/* Company connection */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8 sm:p-10">

          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

            <div className="max-w-2xl">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                Built Under
              </p>

              <h3 className="mt-3 text-3xl font-black text-white">
                STACKRA TECHNOLOGIES
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                A technology company focused on software development,
                artificial intelligence, digital platforms and business
                solutions.
              </p>

            </div>

            <a
              href="https://stackratechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Visit STACKRA
              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}