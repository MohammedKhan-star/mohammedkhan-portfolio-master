
"use client";

import {
  Briefcase,
  CalendarDays,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Linkedin,
  Code2,
  GraduationCap,
  BookOpen,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Founder and Software Engineer",
    company: "STACKRA TECHNOLOGIES",
    period: "Present",
    location: "Hyderabad, India",
    type: "Entrepreneurship",
    current: true,
    icon: Briefcase,
    description:
      "Building innovative software, AI-powered business solutions and modern web applications.",
    responsibilities: [
      "Developing STACKRA AI business management platform.",
      "Building SaaS products and CRM applications.",
      "Designing and developing modern websites.",
      "Managing software development and product strategy.",
    ],
    skills: [
      "Next.js",
      "React",
      "JavaScript",
      "MongoDB",
      "Artificial Intelligence",
      "SaaS",
    ],
  },
  {
    id: 2,
    role: "Computer Department Incharge and Instructor",
    company: "Madina Tul Uloom High School",
    period: "2022 – Present",
    location: "Hyderabad, India",
    type: "Education",
    current: true,
    icon: GraduationCap,
    description:
      "Teaching computer science, managing the computer department and helping students develop practical computing skills.",
    responsibilities: [
      "Teaching computer fundamentals and programming.",
      "Managing computer laboratory activities.",
      "Preparing assignments and examinations.",
      "Mentoring students in computer technology.",
    ],
    skills: [
      "Computer Science",
      "Teaching",
      "MS Office",
      "Programming",
    ],
  },
  {
    id: 3,
    role: "Exam Coordinator & Computer Trainer",
    company: "Samdani Computer Training Centre",
    period: "2021 – Present",
    location: "Hyderabad, India",
    type: "Training & Administration",
    current: true,
    icon: GraduationCap,
    description:
      "Coordinating examinations and delivering practical computer training.",
    responsibilities: [
      "Managing examination coordination.",
      "Conducting computer training sessions.",
      "Preparing practical examination materials.",
      "Supporting students during assessments.",
    ],
    skills: [
      "Exam Coordination",
      "Computer Training",
      "Administration",
      "Student Mentoring",
    ],
  },
  {
    id: 4,
    role: "Full Stack Engineer",
    company: "SkillFied Mentor",
    period: "Feb 2026 – Mar 2026 · 2 mos",
    location: "Hyderabad, Telangana, India · Remote",
    type: "Internship",
    current: false,
    icon: Code2,
    description:
      "Completed a Full Stack Engineer internship at SkillFied Mentor, focusing on front-end design and JavaScript.",
    responsibilities: [
      "Practiced front-end design and development.",
      "Worked with JavaScript and web development concepts.",
      "Developed practical full-stack engineering skills.",
    ],
    skills: [
      "Front-End Design",
      "JavaScript",
      "Full Stack Engineering",
    ],
  },
  {
    id: 5,
    role: "Intensive Training Program",
    company: "NxtWave",
    period: "2022 – 2025",
    location: "India · Online",
    type: "Professional Training",
    current: false,
    icon: BookOpen,
    description:
      "Intensive technology training program focused on software development and practical programming skills.",
    responsibilities: [
      "Studied software development and programming concepts.",
      "Practiced problem-solving and coding.",
      "Developed practical web development skills.",
      "Completed hands-on learning activities.",
    ],
    skills: [
      "Programming",
      "Web Development",
      "Problem Solving",
      "Software Development",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 px-5 py-24 text-white"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
            MY CAREER JOURNEY
          </span>

          <h2 className="mt-7 text-4xl font-bold md:text-5xl">
            Professional{" "}
            <span className="text-blue-500">
              Experience
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            My journey in software engineering,
            entrepreneurship, professional training
            and computer education.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-blue-500 via-blue-500/40 to-transparent md:left-7" />

          <div className="space-y-10">
            {experiences.map((exp) => {
              const Icon = exp.icon;

              return (
                <div
                  key={exp.id}
                  className="relative pl-14 md:pl-20"
                >
                  {/* Timeline icon */}
                  <div className="absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/40 bg-slate-900 text-blue-400 shadow-lg shadow-blue-500/10 md:left-2">
                    <Icon size={20} />
                  </div>

                  {/* Experience card */}
                  <article className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 md:p-8">

                    {/* Role and company */}
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="mb-4 flex flex-wrap gap-2">
                          <span className="rounded-md bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                            {exp.type}
                          </span>

                          {exp.current && (
                            <span className="rounded-md bg-green-500/10 px-3 py-1 text-xs text-green-400">
                              Current
                            </span>
                          )}
                        </div>

                        <h3 className="text-2xl font-bold transition-colors group-hover:text-blue-400">
                          {exp.role}
                        </h3>

                        <p className="mt-2 text-lg font-semibold text-blue-400">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Date and location */}
                    <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
                      <span className="flex items-center gap-2">
                        <CalendarDays size={16} />
                        {exp.period}
                      </span>

                      <span className="flex items-center gap-2">
                        <MapPin size={16} />
                        {exp.location}
                      </span>
                    </div>

                    <div className="my-6 h-px bg-slate-800" />

                    {/* Description */}
                    <p className="leading-relaxed text-slate-300">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mt-6 space-y-3">
                      {exp.responsibilities.map(
                        (item, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2
                              size={18}
                              className="mt-1 shrink-0 text-blue-500"
                            />

                            <p className="text-sm leading-relaxed text-slate-400">
                              {item}
                            </p>
                          </div>
                        )
                      )}
                    </div>

                    {/* Skills */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-1.5 text-xs text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* LinkedIn button */}
        <div className="mt-16 text-center">
          <a
            href="https://www.linkedin.com/in/mohammed-khan-7905a621a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20"
          >
            <Linkedin size={20} />
            View My LinkedIn
            <ExternalLink size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}