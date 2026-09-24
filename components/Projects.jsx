"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Sparkles,
  Globe,
  GraduationCap,
  BarChart3,
} from "lucide-react";

const projects = [
  {
    featured: true,
    icon: Sparkles,
    category: "AI • BUSINESS MANAGEMENT",
    title: "STACKRA AI",
    description:
      "An intelligent business management platform designed to bring CRM, sales, finance, projects, inventory, reporting and AI assistance into one system.",
    image: "/project/stackra-ai.png",
    technologies: [
      "Next.js",
      "JavaScript",
      "MongoDB",
      "Mongoose",
      "AI",
    ],
    live: "#",
    github: "#",
  },
  {
    icon: Globe,
    category: "CORPORATE WEBSITE",
    title: "STACKRA TECHNOLOGIES",
    description:
      "The official corporate platform for STACKRA TECHNOLOGIES, presenting software development, AI solutions and digital services.",
    image: "/project/stackra.png",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "SEO",
    ],
    live: "https://stackratechnologies.com",
    github: "#",
  },
  {
    icon: GraduationCap,
    category: "EDUCATION • LMS",
    title: "STACKRA ACADEMY",
    description:
      "An educational platform designed for computer training, courses, learning resources and digital education.",
    image: "/project/stackra-acadamy.png",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
    ],
    live: "https://stackratechnologies.com/academy",
    github: "#",
  },
  {
    icon: BarChart3,
    category: "BUSINESS SOFTWARE",
    title: "CRM & BUSINESS SYSTEMS",
    description:
      "Custom business platforms for managing customers, leads, sales, operations, reporting and day-to-day workflows.",
    image: "/project/CRM.png",
    technologies: [
      "Next.js",
      "MongoDB",
      "REST APIs",
    ],
    live: "#",
    github: "#",
  },
];

function ProjectImage({ project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} project`}
        width={1000}
        height={650}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
    );
  }

  const Icon = project.icon;

  return (
    <div className="flex h-full min-h-[260px] items-center justify-center bg-gradient-to-br from-cyan-400/10 via-white/[0.02] to-transparent">
      <div className="text-center">
        <Icon
          size={60}
          className="mx-auto text-cyan-400"
        />

        <p className="mt-4 text-sm font-bold uppercase tracking-widest text-slate-400">
          Project Preview
        </p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-cyan-400/10 bg-[#020b14] py-24"
    >
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold tracking-[0.3em] text-cyan-400">
              SELECTED WORK
            </p>

            <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
              Products & Projects
              <span className="block text-cyan-400">
                I've Built
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
              A selection of software, websites and digital products built
              with modern technologies and real business use cases in mind.
            </p>
          </div>

          <Link
            href="https://github.com/MohammedKhan-star"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
          >
            View GitHub
            <ArrowUpRight size={17} />
          </Link>

        </div>

        {/* Projects */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">

          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className={`group overflow-hidden rounded-3xl border border-cyan-400/10 bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 ${
                  project.featured ? "lg:col-span-2" : ""
                }`}
              >

                {/* Project image */}
                <div
                  className={`relative overflow-hidden border-b border-white/5 ${
                    project.featured
                      ? "h-[320px] sm:h-[430px]"
                      : "h-[260px]"
                  }`}
                >
                  <ProjectImage project={project} />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#020b14]/80 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full border border-cyan-400/20 bg-[#020b14]/80 px-3 py-1.5 text-[10px] font-bold tracking-widest text-cyan-400 backdrop-blur">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">

                  <div className="flex flex-col justify-between gap-6 sm:flex-row">

                    <div className="max-w-2xl">

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                          <Icon size={20} />
                        </div>

                        <h3 className="text-2xl font-black text-white">
                          {project.title}
                        </h3>

                      </div>

                      <p className="mt-4 leading-7 text-slate-400">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* Links */}
                    <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end">

                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                        >
                          Live Demo
                          <ExternalLink size={15} />
                        </a>
                      )}

                      {project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-400"
                        >
                          GitHub
                          <Github size={15} />
                        </a>
                      )}

                    </div>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">

          <p className="text-sm text-slate-500">
            Want to build something similar?
          </p>

          <Link
            href="#contact"
            className="mt-3 inline-flex items-center gap-2 text-lg font-bold text-cyan-400 hover:text-cyan-300"
          >
            Let's discuss your project
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}