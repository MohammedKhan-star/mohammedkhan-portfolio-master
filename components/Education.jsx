"use client";

import {
  GraduationCap,
  BookOpen,
  Award,
  Code2,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    year: "2025 – Present",
    degree: "Master of Computer Applications",
    institution: "Osmania University",
    description:
      "Advanced study in computer applications, software development, databases, artificial intelligence and related areas of computer science.",
    status: "Currently Pursuing",
  },
  {
    icon: GraduationCap,
    year: "2025 – Present",
    degree: "Master of Computer Applications",
    institution: "Osmania University",
    description:
      "Advanced study in computer applications, software development, databases, artificial intelligence and related areas of computer science.",
    status: "Currently Pursuing",
  },
  {
    icon: GraduationCap,
    year: "2025 – Present",
    degree: "Master of Computer Applications",
    institution: "Osmania University",
    description:
      "Advanced study in computer applications, software development, databases, artificial intelligence and related areas of computer science.",
    status: "Currently Pursuing",
  },
  
  {
    icon: GraduationCap,
    year: "2025 – Present",
    degree: "Master of Computer Applications",
    institution: "Osmania University",
    description:
      "Advanced study in computer applications, software development, databases, artificial intelligence and related areas of computer science.",
    status: "Currently Pursuing",
  },
  {
    icon: Code2,
    year: "Completed",
    degree: "Computer & Software Development",
    institution: "Professional Learning",
    description:
      "Practical learning and hands-on development across modern web technologies, programming, databases and application development.",
    status: "Completed",
  },
  {
    icon: BookOpen,
    year: "Continuous",
    degree: "Technology & AI Learning",
    institution: "Self-Learning & Practical Projects",
    description:
      "Continuous learning through software projects, documentation, experimentation and practical implementation of modern technologies.",
    status: "Ongoing",
  },
];

const focusAreas = [
  "Software Engineering",
  "Web Development",
  "Artificial Intelligence",
  "Database Systems",
  "Business Applications",
  "Full-Stack Development",
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-cyan-400/10 bg-[#020b14] py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 text-sm font-bold tracking-[0.3em] text-cyan-400">
            EDUCATION & LEARNING
          </p>

          <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
            Knowledge,
            <span className="block text-cyan-400">
              Learning & Growth
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            My academic background combined with continuous practical
            learning and software development experience.
          </p>

        </div>

        {/* Education cards */}
        <div className="mx-auto mt-14 max-w-5xl space-y-5">

          {education.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.degree}
                className="group relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 sm:p-8"
              >

                <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-start">

                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 transition group-hover:scale-105">
                    <Icon size={27} />
                  </div>

                  {/* Content */}
                  <div>

                    <div className="flex flex-wrap items-center gap-3">

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/10 bg-cyan-400/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                        <CalendarDays size={12} />
                        {item.year}
                      </span>

                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {item.status}
                      </span>

                    </div>

                    <h3 className="mt-4 text-xl font-black text-white sm:text-2xl">
                      {item.degree}
                    </h3>

                    <p className="mt-1 font-medium text-cyan-400/80">
                      {item.institution}
                    </p>

                    <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                      {item.description}
                    </p>

                  </div>

                  {/* Number */}
                  <div className="hidden text-5xl font-black text-white/[0.03] md:block">
                    {String(
                      education.indexOf(item) + 1
                    ).padStart(2, "0")}
                  </div>

                </div>

              </article>
            );
          })}

        </div>

        {/* Focus areas */}
        <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-cyan-400/10 bg-white/[0.025] p-7 sm:p-9">

          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

            <div>
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                  <Award size={20} />
                </div>

                <h3 className="text-xl font-bold text-white">
                  Areas of Focus
                </h3>

              </div>

              <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
                Areas I continue to develop through academic study,
                professional work and practical projects.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 md:max-w-xl md:justify-end">

              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-cyan-400/15 bg-cyan-400/5 px-3.5 py-2 text-xs font-medium text-slate-300"
                >
                  {area}
                </span>
              ))}

            </div>

          </div>

        </div>

        {/* Learning statement */}
        <div className="mx-auto mt-10 max-w-3xl text-center">

          <p className="text-lg font-medium leading-8 text-slate-300">
            "Learning doesn't stop with a degree.
            <span className="text-cyan-400">
              {" "}Every project is another opportunity to grow.
            </span>
            "
          </p>

          <a
            href="#projects"
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-400 transition hover:text-cyan-300"
          >
            Explore My Projects
            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>
    </section>
  );
}