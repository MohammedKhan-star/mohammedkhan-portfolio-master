"use client";

import { useState } from "react";
import {
  Mail,
  MessageCircle,
  MapPin,
  Send,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const projectTypes = [
  "Business Website",
  "Web Application",
  "AI Solution",
  "CRM",
  "ERP",
  "School Management System",
  "E-Commerce",
  "Custom Software",
  "Other",
];

const budgetOptions = [
  "Below ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Let's Discuss",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappNumber = "919618563743";

    const text = `
Hello Mohammed,

I would like to discuss a project.

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Project Type: ${form.projectType}
Budget: ${form.budget}

Project Details:
${form.message}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-cyan-400/10 bg-[#020b14] py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-3 text-sm font-bold tracking-[0.3em] text-cyan-400">
            LET'S CONNECT
          </p>

          <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">
            Let's Build Something
            <span className="block text-cyan-400">
              Great Together
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Have a business idea, software requirement or project in mind?
            Tell me what you are trying to build and let's discuss the right
            technology solution.
          </p>

        </div>

        {/* Main grid */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">

          {/* Contact information */}
          <div className="space-y-5">

            {/* WhatsApp */}
            <a
              href="https://wa.me/919618563743"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-3xl border border-cyan-400/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                  <MessageCircle size={23} />
                </div>

                <div className="flex-1">

                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    WhatsApp
                  </p>

                  <h3 className="mt-1 font-bold text-white">
                    Start a Conversation
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Discuss your project directly with me.
                  </p>

                </div>

                <ArrowUpRight
                  size={18}
                  className="text-slate-500 transition group-hover:text-cyan-400"
                />

              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:mohammedkhan20019@gmail.com"
              className="group block rounded-3xl border border-cyan-400/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                  <Mail size={23} />
                </div>

                <div className="flex-1">

                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Email
                  </p>

                  <h3 className="mt-1 font-bold text-white">
                    mohammedkhan20019@gmail.com
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Send your project requirements.
                  </p>

                </div>

                <ArrowUpRight
                  size={18}
                  className="text-slate-500 transition group-hover:text-cyan-400"
                />

              </div>
            </a>

            {/* Location */}
            <div className="rounded-3xl border border-cyan-400/10 bg-white/[0.025] p-6">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                  <MapPin size={23} />
                </div>

                <div>

                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Based In
                  </p>

                  <h3 className="mt-1 font-bold text-white">
                    Hyderabad, India
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Available for remote projects.
                  </p>

                </div>

              </div>

            </div>

            {/* Company */}
            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-6">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Founder
              </p>

              <h3 className="mt-2 text-2xl font-black text-white">
                STACKRA TECHNOLOGIES
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Software development, AI solutions, business systems and
                digital products.
              </p>

              <a
                href="https://stackratechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300"
              >
                Visit Company
                <ArrowUpRight size={16} />
              </a>

            </div>

          </div>

          {/* Form */}
          <div className="rounded-3xl border border-cyan-400/10 bg-white/[0.025] p-6 sm:p-8">

            {submitted ? (
              <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                  <CheckCircle2 size={32} />
                </div>

                <h3 className="mt-6 text-2xl font-black text-white">
                  WhatsApp Opened
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                  Your project details have been prepared. Complete the
                  conversation in WhatsApp to send your enquiry.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-full border border-cyan-400/20 px-5 py-2.5 text-sm font-semibold text-cyan-400 hover:bg-cyan-400/10"
                >
                  Send Another Enquiry
                </button>

              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                    Project Enquiry
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-white">
                    Tell Me About Your Project
                  </h3>
                </div>

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-semibold text-slate-300"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold text-slate-300"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50"
                    />
                  </div>

                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-semibold text-slate-300"
                  >
                    Phone / WhatsApp
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50"
                  />
                </div>

                {/* Project type */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="mb-2 block text-xs font-semibold text-slate-300"
                  >
                    What do you want to build?
                  </label>

                  <select
                    id="projectType"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#07131f] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/50"
                  >
                    <option value="">
                      Select project type
                    </option>

                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-xs font-semibold text-slate-300"
                  >
                    Estimated Budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#07131f] px-4 py-3 text-sm text-white outline-none focus:border-cyan-400/50"
                  >
                    <option value="">
                      Select budget range
                    </option>

                    {budgetOptions.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold text-slate-300"
                  >
                    Project Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your idea, requirements, features or business problem..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-black text-slate-950 transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/10"
                >
                  Send Project Enquiry
                  <Send size={17} />
                </button>

                <p className="text-center text-[11px] leading-5 text-slate-500">
                  Your enquiry will open WhatsApp with the details you
                  provided.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}