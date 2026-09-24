
"use client";

import Image from "next/image";
import { useState } from "react";
import { skillCategories } from "@/data/skills";
import {
  ArrowUpRight,
  Sparkles,
  Layers3,
  Code2,
  Database,
  Terminal,
  Wrench,
  Cpu,
  Monitor,
  ChevronRight,
} from "lucide-react";

const categoryIcons = {
  Frontend: Layers3,
  Backend: Code2,
  Database: Database,
  "Programming Languages": Terminal,
  "Tools & Platforms": Wrench,
  "Hardware Skills": Cpu,
  "Other Skills": Monitor,
};

function SkillCard({ skill }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="
        group relative flex min-h-[168px]
        flex-col items-center justify-center
        overflow-hidden rounded-2xl
        border border-white/[0.08]
        bg-[#101d30]/80 px-4 py-7
        text-center
        transition-all duration-300
        hover:-translate-y-1.5
        hover:border-cyan-400/40
        hover:bg-[#14263d]
        hover:shadow-[0_15px_45px_rgba(6,182,212,0.09)]
      "
    >
      {/* Hover glow */}
      <div
        className="
          pointer-events-none absolute -top-20
          left-1/2 h-36 w-36
          -translate-x-1/2 rounded-full
          bg-cyan-400/10 blur-3xl
          opacity-0 transition-opacity
          duration-500 group-hover:opacity-100
        "
      />

      {/* Skill logo */}
      <div
        className="
          relative flex h-[70px] w-[70px]
          items-center justify-center
          rounded-2xl border border-white/10
          bg-white p-3
          shadow-[0_8px_25px_rgba(0,0,0,0.15)]
          transition-all duration-300
          group-hover:-translate-y-1
          group-hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)]
        "
      >
        {!imageError ? (
          <Image
            src={skill.logo}
            alt={`${skill.name} logo`}
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <Code2 size={30} className="text-slate-700" />
        )}
      </div>

      {/* Skill name */}
      <h4
        className="
          relative mt-5 max-w-full
          text-sm font-semibold
          leading-5 text-slate-200
          transition-colors duration-300
          group-hover:text-cyan-300
        "
      >
        {skill.name}
      </h4>

      {/* Bottom accent */}
      <div
        className="
          absolute bottom-0 left-1/2
          h-[2px] w-0 -translate-x-1/2
          bg-gradient-to-r
          from-cyan-400 to-blue-500
          transition-all duration-500
          group-hover:w-2/3
        "
      />
    </div>
  );
}

export default function Skills() {
  const totalSkills = skillCategories.reduce(
    (total, category) => total + category.skills.length,
    0
  );

  return (
    <section
      id="skills"
      className="
        relative isolate overflow-hidden
        border-t border-white/5
        bg-[#050b18] px-5 py-24
        text-white sm:px-8 sm:py-32
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="
            absolute -left-40 top-20
            h-[500px] w-[500px]
            rounded-full bg-cyan-500/[0.07]
            blur-[130px]
          "
        />

        <div
          className="
            absolute -right-40 top-1/3
            h-[500px] w-[500px]
            rounded-full bg-violet-600/[0.07]
            blur-[130px]
          "
        />

        <div
          className="
            absolute bottom-0 left-1/3
            h-[400px] w-[400px]
            rounded-full bg-blue-600/[0.05]
            blur-[120px]
          "
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div
            className="
              mb-7 inline-flex items-center
              gap-2 rounded-full
              border border-cyan-400/20
              bg-cyan-400/[0.06]
              px-5 py-2.5
            "
          >
            <Sparkles size={15} className="text-cyan-400" />

            <span
              className="
                text-xs font-bold uppercase
                tracking-[0.22em] text-cyan-300
              "
            >
              Technology Stack
            </span>
          </div>

          <h2
            className="
              text-4xl font-black
              tracking-tight sm:text-5xl
              lg:text-6xl
            "
          >
            Skills &{" "}
            <span
              className="
                bg-gradient-to-r
                from-cyan-300 via-sky-400
                to-violet-400
                bg-clip-text text-transparent
              "
            >
              Expertise
            </span>
          </h2>

          <p
            className="
              mx-auto mt-7 max-w-2xl
              text-base leading-8
              text-slate-400 sm:text-lg
            "
          >
            Technologies, tools and practical skills
            I use to engineer modern applications,
            develop digital products and solve
            real-world business challenges.
          </p>
        </div>

        {/* Technology overview */}
        <div
          className="
            mx-auto mb-20 grid max-w-4xl
            grid-cols-2 gap-4
            sm:grid-cols-3
          "
        >
          {[
            {
              value: `${totalSkills}+`,
              label: "Skills & Technologies",
              icon: Code2,
            },
            {
              value: `${skillCategories.length}`,
              label: "Technology Categories",
              icon: Layers3,
            },
            {
              value: "Full Stack",
              label: "Development Focus",
              icon: Terminal,
            },
          ].map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="
                  flex flex-col items-center
                  rounded-2xl border
                  border-white/[0.08]
                  bg-[#101d30]/70
                  px-4 py-7 text-center
                  last:col-span-2
                  sm:last:col-span-1
                "
              >
                <Icon
                  size={22}
                  className="mb-4 text-cyan-400"
                />

                <p
                  className="
                    text-2xl font-black
                    tracking-tight text-white
                    sm:text-3xl
                  "
                >
                  {stat.value}
                </p>

                <p
                  className="
                    mt-2 text-xs font-medium
                    text-slate-400
                  "
                >
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Categories */}
        <div className="space-y-20">
          {skillCategories.map((category, index) => {
            const Icon =
              categoryIcons[category.title] || Code2;

            return (
              <div key={category.title}>
                {/* Category header */}
                <div
                  className="
                    mb-8 flex flex-wrap
                    items-center gap-4
                  "
                >
                  <div
                    className="
                      flex h-12 w-12 shrink-0
                      items-center justify-center
                      rounded-2xl
                      border border-cyan-400/20
                      bg-cyan-400/10
                      text-cyan-400
                    "
                  >
                    <Icon size={23} />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        mb-1 text-[10px]
                        font-bold uppercase
                        tracking-[0.2em]
                        text-cyan-400/70
                      "
                    >
                      Category{" "}
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3
                      className="
                        text-xl font-bold
                        tracking-tight text-white
                        sm:text-2xl
                      "
                    >
                      {category.title}
                    </h3>
                  </div>

                  <span
                    className="
                      ml-auto rounded-full
                      border border-white/10
                      bg-white/[0.04]
                      px-3 py-1.5
                      text-xs font-medium
                      text-slate-400
                    "
                  >
                    {category.skills.length} Skills
                  </span>

                  <div
                    className="
                      hidden h-px flex-1
                      bg-gradient-to-r
                      from-cyan-400/20
                      to-transparent lg:block
                    "
                  />
                </div>

                {/* Skill grid */}
                <div
                  className="
                    grid grid-cols-2 gap-4
                    sm:grid-cols-3
                    md:grid-cols-4
                    lg:grid-cols-5
                    xl:grid-cols-6
                  "
                >
                  {category.skills.map((skill) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured statement */}
        <div
          className="
            relative mt-24 overflow-hidden
            rounded-[30px]
            border border-cyan-400/15
            bg-gradient-to-br
            from-[#102238]
            via-[#0c1a2e]
            to-[#10152b]
            p-8 sm:p-12
          "
        >
          <div
            className="
              pointer-events-none absolute
              -right-16 -top-16
              h-64 w-64 rounded-full
              bg-cyan-400/10 blur-3xl
            "
          />

          <div
            className="
              relative flex flex-col
              gap-8 md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <div className="max-w-2xl">
              <div
                className="
                  mb-5 flex h-12 w-12
                  items-center justify-center
                  rounded-2xl
                  border border-cyan-400/20
                  bg-cyan-400/10
                  text-cyan-400
                "
              >
                <Sparkles size={23} />
              </div>

              <h3
                className="
                  text-2xl font-bold
                  tracking-tight text-white
                  sm:text-3xl
                "
              >
                Engineering With Purpose
              </h3>

              <p
                className="
                  mt-4 max-w-xl
                  text-sm leading-8
                  text-slate-400
                  sm:text-base
                "
              >
                Technology is a tool. The real goal is
                to select the right technologies,
                solve meaningful problems and deliver
                reliable digital experiences.
              </p>
            </div>

            <a
              href="#projects"
              className="
                group inline-flex shrink-0
                items-center justify-center
                gap-3 self-start
                rounded-xl
                border border-cyan-400/30
                bg-cyan-400/10
                px-6 py-3.5
                text-sm font-bold
                text-cyan-300
                transition-all duration-300
                hover:border-cyan-400/60
                hover:bg-cyan-400/20
              "
            >
              Explore My Work

              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-14 flex items-center justify-center gap-3 text-center">
          <div className="h-px w-10 bg-cyan-400/20" />

          <p
            className="
              text-xs font-medium
              uppercase tracking-[0.16em]
              text-slate-500
            "
          >
            Always Learning · Always Building
          </p>

          <div className="h-px w-10 bg-cyan-400/20" />
        </div>
      </div>
    </section>
  );
}