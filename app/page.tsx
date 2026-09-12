import { Analytics } from "@vercel/analytics/next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Products from "@/components/Products";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export const metadata = {
  title:
    "Mohammed Khan | Founder & Software Engineer | STACKRA TECHNOLOGIES",

  description:
    "Mohammed Khan is the Founder of STACKRA TECHNOLOGIES and a software engineer building modern websites, business software, AI-powered applications and digital solutions.",

  keywords: [
    "Mohammed Khan",
    "Mohammed Khan Founder",
    "STACKRA TECHNOLOGIES",
    "Software Engineer",
    "Founder",
    "Full Stack Developer",
    "AI Developer",
    "Next.js Developer",
    "Web Development",
    "Business Software",
    "AI Solutions",
    "CRM Development",
    "ERP Development",
    "School Management Software",
  ],

  authors: [
    {
      name: "Mohammed Khan",
      url: "https://www.mohammedkhan.dev",
    },
  ],

  creator: "Mohammed Khan",

  metadataBase: new URL("https://www.mohammedkhan.dev"),

  alternates: {
    canonical: "https://www.mohammedkhan.dev",
  },

  openGraph: {
    title:
      "Mohammed Khan | Founder & Software Engineer | STACKRA TECHNOLOGIES",

    description:
      "Founder of STACKRA TECHNOLOGIES building modern websites, business software, AI-powered applications and digital solutions.",

    url: "https://www.mohammedkhan.dev",

    siteName: "Mohammed Khan",

    type: "website",

    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Mohammed Khan | Founder & Software Engineer",

    description:
      "Founder of STACKRA TECHNOLOGIES building software products, business systems and AI-powered solutions.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* ================= HERO ================= */}
        <Hero />

        {/* ================= ABOUT ================= */}
        <About />

        {/* ================= SERVICES ================= */}
        <Services />

        {/* ================= SKILLS ================= */}
        <Skills />

        {/* ================= PROJECTS ================= */}
        <Projects />

        {/* ================= PRODUCTS ================= */}
        <Products />

        {/* ================= EXPERIENCE ================= */}
        <Experience />

        {/* ================= EDUCATION ================= */}
        <Education />

        {/* ================= CONTACT ================= */}
        <Contact />
      </main>

      <Analytics />
    </>
  );
}