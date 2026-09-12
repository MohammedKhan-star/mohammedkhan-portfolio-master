"use client";

import Link from "next/link";
import {
  Globe2,
  BrainCircuit,
  UsersRound,
  Building2,
  GraduationCap,
  ShoppingCart,
  BarChart3,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Globe2,
    number: "01",
    title: "Website Development",
    description:
      "Modern, responsive and SEO-friendly websites for businesses, startups, professionals and organizations.",
    technologies: "Next.js • React • Tailwind CSS",
  },
  {
    icon: BrainCircuit,
    number: "02",
    title: "AI Solutions",
    description:
      "AI-powered applications, assistants and intelligent workflows designed to improve business productivity.",
    technologies: "AI • APIs • Automation",
  },
  {
    icon: UsersRound,
    number: "03",
    title: "CRM Systems",
    description:
      "Custom customer relationship platforms for managing leads, customers, sales and business communication.",
    technologies: "Next.js • MongoDB • REST API",
  },
  {
    icon: Building2,
    number: "04",
    title: "ERP & Business Software",
    description:
      "Integrated business management systems covering operations, finance, inventory, projects and reporting.",
    technologies: "Next.js • MongoDB • Cloud",
  },
  {
    icon: GraduationCap,
    number: "05",
    title: "School & Academy Systems",
    description:
      "Digital platforms for schools, colleges, academies and training organizations.",
    technologies: "Web • LMS • Management Systems",
  },
  {
    icon: ShoppingCart,
    number: "06",
    title: "E-Commerce Solutions",
    description:
      "Professional online stores with product management, orders, payments and customer experiences.",
    technologies: "Next.js • Payments • Database",
  },
  {
    icon: BarChart3,
    number: "07",
    title: "Business Dashboards",
    description:
      "Powerful dashboards and analytics that help businesses understand performance and make better decisions.",
    technologies: "Charts • Analytics • APIs",
  },
  {
    icon: Smartphone,
    number: "08",
    title: "Custom Web Applications",
    description:
      "Tailored web applications built around your specific business process, workflow or product idea.",
    technologies: "React • Next.js • Node.js",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-cyan-400/10 bg-[#020b14] py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-bold tracking-[0.3em] text-cyan-400">
            WHAT I BUILD
          </p>

          <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
            Technology Solutions
            <span className="block text-cyan-400">
              For Real Businesses
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            From websites and AI applications to complete business
            management platforms, I build digital solutions designed around
            real business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-3xl border border-cyan-400/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
              >

                {/* Number */}
                <div className="absolute right-5 top-5 text-xs font-bold tracking-widest text-slate-700 transition group-hover:text-cyan-400/50">
                  {service.number}
                </div>

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 transition group-hover:scale-110">
                  <Icon size={27} />
                </div>

                {/* Content */}
                <h3 className="mt-7 text-xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">
                  {service.description}
                </p>

                <p className="mt-5 border-t border-white/5 pt-4 text-[11px] font-medium uppercase tracking-wide text-cyan-400/80">
                  {service.technologies}
                </p>

                {/* CTA */}
                <Link
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-cyan-400"
                >
                  Discuss Your Project
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

              </article>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8 sm:p-10">

          <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                Have a project in mind?
              </p>

              <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Let's turn your idea into a product.
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                Tell me about your business, idea or problem and let's
                explore the right technology solution.
              </p>
            </div>

            <Link
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Start a Project
              <ArrowUpRight size={17} />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}