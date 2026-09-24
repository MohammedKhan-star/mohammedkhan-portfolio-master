
"use client";

import {
  GraduationCap,
  BookOpen,
  Award,
  Code2,
  CalendarDays,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const education = [
  {
    id: "01",
    icon: GraduationCap,
    year: "2025 – 2027",
    degree: "Master of Computer Applications",
    shortDegree: "MCA",
    institution: "Osmania University",
    category: "POSTGRADUATE",
    description:
      "Advanced academic study in software engineering, database management, artificial intelligence, machine learning and computer applications.",
    status: "Currently Pursuing",
    ongoing: true,
    tags: ["Software Engineering", "AI & ML", "DBMS"],
    featured: true,
  },
  {
    id: "02",
    icon: Code2,
    year: "2022 – 2025",
    degree: "Full Stack Web Development & Software Engineering",
    shortDegree: "FULL STACK",
    institution: "NxtWave Academy · CCBP 4.0",
    category: "PROFESSIONAL TRAINING",
    description:
      "Intensive software development training focused on full-stack web technologies, programming fundamentals, problem-solving and practical application development.",
    status: "Completed",
    ongoing: false,
    tags: ["Web Development", "Programming", "Full Stack"],
    featured: false,
  },
  {
    id: "03",
    icon: GraduationCap,
    year: "2018 – 2021",
    degree: "Bachelor of Science in Computer Science (MECS)",
    shortDegree: "B.Sc.",
    institution: "Osmania University",
    category: "UNDERGRADUATE",
    description:
      "Undergraduate studies in mathematics, electronics and computer science, establishing a foundation in programming, computing and analytical problem-solving.",
    status: "Completed",
    ongoing: false,
    tags: ["Computer Science", "Mathematics", "Electronics"],
    featured: false,
  },
  {
    id: "04",
    icon: GraduationCap,
    year: "2016 – 2018",
    degree: "Computer Science & Engineering",
    shortDegree: "CSE",
    institution: "Osmania University",
    category: "ACADEMIC EDUCATION",
    description:
      "Academic studies in computer science and engineering, building foundational technical knowledge.",
    status: "Completed",
    ongoing: false,
    tags: ["Computer Science", "Engineering"],
    featured: false,
  },
  {
    id: "05",
    icon: Code2,
    year: "Professional Learning",
    degree: "Computer & Software Development",
    shortDegree: "DEVELOPMENT",
    institution: "Practical Training",
    category: "TECHNICAL SKILLS",
    description:
      "Hands-on development across modern web technologies, programming, databases and application development.",
    status: "Completed",
    ongoing: false,
    tags: ["JavaScript", "React", "Databases"],
    featured: false,
  },
  {
    id: "06",
    icon: BookOpen,
    year: "Continuous",
    degree: "Technology & AI Learning",
    shortDegree: "LIFELONG",
    institution: "Self-Learning & Practical Projects",
    category: "CONTINUOUS LEARNING",
    description:
      "Exploring emerging technologies through software projects, technical documentation, experimentation and practical implementation.",
    status: "Ongoing",
    ongoing: true,
    tags: ["Artificial Intelligence", "Innovation", "Projects"],
    featured: false,
  },
];

const focusAreas = [
  "Software Engineering",
  "Full-Stack Development",
  "Artificial Intelligence",
  "Database Systems",
  "Business Applications",
  "Cloud Technologies",
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative isolate overflow-hidden border-t border-white/5 bg-[#050b18] py-24 text-white sm:py-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.07] blur-[130px]" />

        <div className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-violet-600/[0.07] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-5 py-2.5">
            <Sparkles size={15} className="text-cyan-400" />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
              Education & Learning
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            The Journey of
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              Continuous Growth
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            A combination of academic knowledge,
            professional training and hands-on
            software engineering experience.
          </p>
        </div>

        {/* Education timeline */}
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute bottom-8 left-[23px] top-8 w-px bg-gradient-to-b from-cyan-400/60 via-sky-500/30 to-transparent sm:left-[31px]" />

          <div className="space-y-8">
            {education.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="group relative pl-16 sm:pl-24"
                >
                  {/* Timeline marker */}
                  <div
                    className={`absolute left-0 top-8 z-10 flex h-12 w-12 items-center justify-center rounded-2xl border shadow-xl transition-all duration-300 group-hover:scale-110 sm:h-16 sm:w-16 ${
                      item.featured
                        ? "border-cyan-300/40 bg-cyan-400 text-slate-950 shadow-cyan-500/20"
                        : "border-cyan-400/20 bg-[#101d32] text-cyan-400"
                    }`}
                  >
                    <Icon size={item.featured ? 29 : 25} />
                  </div>

                  {/* Card */}
                  <article
                    className={`relative overflow-hidden rounded-[28px] border p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:p-8 ${
                      item.featured
                        ? "border-cyan-400/30 bg-gradient-to-br from-cyan-400/[0.09] via-[#0d192c] to-violet-500/[0.05] shadow-xl shadow-cyan-950/20"
                        : "border-white/[0.08] bg-[#0c1627]/90 hover:border-cyan-400/30 hover:shadow-cyan-950/20"
                    }`}
                  >
                    {item.featured && (
                      <div className="absolute right-0 top-0 rounded-bl-2xl border-b border-l border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-cyan-300">
                        Current Education
                      </div>
                    )}

                    {/* Top information */}
                    <div className="flex flex-wrap items-center gap-3 pr-0 sm:pr-32">
                      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-1.5 text-xs font-semibold text-cyan-300">
                        <CalendarDays size={13} />
                        {item.year}
                      </span>

                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold ${
                          item.ongoing
                            ? "border-emerald-400/20 bg-emerald-400/[0.07] text-emerald-300"
                            : "border-white/10 bg-white/[0.04] text-slate-400"
                        }`}
                      >
                        {item.ongoing ? (
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        ) : (
                          <CheckCircle2 size={12} />
                        )}

                        {item.status}
                      </span>
                    </div>

                    {/* Degree */}
                    <div className="mt-7">
                      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                        {item.category}
                      </p>

                      <h3 className="max-w-2xl text-xl font-bold leading-snug tracking-tight text-white transition-colors group-hover:text-cyan-200 sm:text-2xl">
                        {item.degree}
                      </h3>

                      <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-cyan-400 sm:text-base">
                        <GraduationCap
                          size={17}
                          className="shrink-0"
                        />
                        {item.institution}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="my-6 h-px bg-gradient-to-r from-white/10 to-transparent" />

                    {/* Description */}
                    <p className="max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                      {item.description}
                    </p>

                    {/* Skill tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-white/[0.07] bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Decorative number */}
                    <span className="pointer-events-none absolute bottom-4 right-6 select-none text-6xl font-black tracking-tighter text-white/[0.025] sm:text-8xl">
                      {item.id}
                    </span>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* Focus areas */}
        <div className="mx-auto mt-20 max-w-5xl overflow-hidden rounded-[30px] border border-cyan-400/15 bg-gradient-to-br from-[#101f35] to-[#0a1222] p-7 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                <Award size={24} />
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white">
                Areas of Expertise & Focus
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Technical disciplines I continue to
                develop through academic study,
                professional experience and practical
                software projects.
              </p>
            </div>

            <div className="flex max-w-xl flex-wrap gap-2.5">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-xl border border-cyan-400/10 bg-cyan-400/[0.045] px-4 py-2.5 text-xs font-medium text-slate-200 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Learning statement */}
        <div className="mx-auto mt-20 max-w-3xl text-center">
          <BookOpen
            size={28}
            className="mx-auto mb-6 text-cyan-400"
          />

          <blockquote className="text-xl font-medium leading-relaxed text-slate-200 sm:text-2xl">
            "Learning doesn't stop with a degree.
            <span className="text-cyan-400">
              {" "}Every project is another opportunity to grow.
            </span>
            "
          </blockquote>

          <a
            href="#projects"
            className="group mt-9 inline-flex items-center gap-3 rounded-xl border border-cyan-400/25 bg-cyan-400/10 px-7 py-3.5 text-sm font-bold text-cyan-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/20"
          >
            Explore My Projects

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}