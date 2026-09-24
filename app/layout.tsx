
import type { Metadata, Viewport } from "next";

import "./globals.css";
import ThemeWrapper from "./theme-wrapper";

/* =========================================================
   FOUNDER BRAND CONFIGURATION
========================================================= */

const siteConfig = {
  name: "Mohammed Khan",

  title:
    "Mohammed Khan | Founder & Software Engineer | STACKRA TECHNOLOGIES",

  description:
    "Official portfolio of Mohammed Khan, Founder of STACKRA TECHNOLOGIES. Building AI-powered applications, modern websites, SaaS platforms, CRM, ERP and intelligent business software.",

  url: "https://www.mohammedkhan.dev",

  company: "STACKRA TECHNOLOGIES",

  companyUrl: "https://stackratechnologies.com",

  image: "/profile/profile3.png",

  social: {
    github: "https://github.com/MohammedKhan-star",

    linkedin:
      "https://www.linkedin.com/in/mohammed-khan-7905a621a/",

    youtube:
      "https://www.youtube.com/@Engineermohammedkhan",

    instagram:
      "https://www.instagram.com/mohammedkhan.dev/",
  },
};

/* =========================================================
   GLOBAL SEO METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  applicationName: "Mohammed Khan Portfolio",

  title: {
    default: siteConfig.title,
    template: "%s | Mohammed Khan",
  },

  description: siteConfig.description,

  keywords: [
    "Mohammed Khan",
    "Mohammed Khan Founder",
    "Mohammed Khan Software Engineer",
    "STACKRA TECHNOLOGIES",
    "Founder of STACKRA TECHNOLOGIES",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "JavaScript Developer",
    "AI Developer",
    "AI-Powered Business Software",
    "SaaS Development",
    "CRM Development",
    "ERP Development",
    "Web Application Development",
    "Software Development",
    "Hyderabad Software Developer",
  ],

  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.name,

  publisher: siteConfig.company,

  category: "technology",

  alternates: {
    canonical: "/",
  },

  /* =======================================================
     OPEN GRAPH — LINKEDIN, WHATSAPP, FACEBOOK
  ======================================================= */

  openGraph: {
    type: "profile",

    locale: "en_IN",

    url: siteConfig.url,

    siteName: "Mohammed Khan | Official Portfolio",

    title: siteConfig.title,

    description: siteConfig.description,

    firstName: "Mohammed",

    lastName: "Khan",

    username: "mohammedkhan",

    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt:
          "Mohammed Khan — Founder of STACKRA TECHNOLOGIES",
      },
    ],
  },

  /* =======================================================
     TWITTER / X
  ======================================================= */

  twitter: {
    card: "summary_large_image",

    title: siteConfig.title,

    description: siteConfig.description,

    images: [siteConfig.image],
  },

  /* =======================================================
     SEARCH ENGINE INDEXING
  ======================================================= */

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

  /* =======================================================
     ADDITIONAL METADATA
  ======================================================= */

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,

    address: false,

    telephone: false,
  },

  other: {
    "theme-color": "#071426",
  },
};

/* =========================================================
   VIEWPORT
========================================================= */

export const viewport: Viewport = {
  width: "device-width",

  initialScale: 1,

  themeColor: "#071426",
};

/* =========================================================
   STRUCTURED DATA — PERSON
========================================================= */

const personSchema = {
  "@context": "https://schema.org",

  "@type": "Person",

  "@id": `${siteConfig.url}/#person`,

  name: siteConfig.name,

  url: siteConfig.url,

  image: `${siteConfig.url}${siteConfig.image}`,

  description: siteConfig.description,

  jobTitle: [
    "Founder",
    "Software Engineer",
    "Full Stack Developer",
  ],

  worksFor: {
    "@type": "Organization",

    "@id": `${siteConfig.companyUrl}/#organization`,

    name: siteConfig.company,

    url: siteConfig.companyUrl,
  },

  founder: {
    "@type": "Organization",

    "@id": `${siteConfig.companyUrl}/#organization`,

    name: siteConfig.company,

    url: siteConfig.companyUrl,
  },

  sameAs: [
    siteConfig.social.github,
    siteConfig.social.linkedin,
    siteConfig.social.youtube,
    siteConfig.social.instagram,
  ],
};

/* =========================================================
   STRUCTURED DATA — WEBSITE
========================================================= */

const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  "@id": `${siteConfig.url}/#website`,

  name: "Mohammed Khan | Official Portfolio",

  url: siteConfig.url,

  description: siteConfig.description,

  inLanguage: "en-IN",

  publisher: {
    "@id": `${siteConfig.url}/#person`,
  },
};

/* =========================================================
   STRUCTURED DATA — PROFILE PAGE
========================================================= */

const profileSchema = {
  "@context": "https://schema.org",

  "@type": "ProfilePage",

  "@id": `${siteConfig.url}/#profile`,

  url: siteConfig.url,

  name: siteConfig.title,

  description: siteConfig.description,

  mainEntity: {
    "@id": `${siteConfig.url}/#person`,
  },

  isPartOf: {
    "@id": `${siteConfig.url}/#website`,
  },
};

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      personSchema,
      websiteSchema,
      profileSchema,
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <head>
        {/* Founder and portfolio structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
      </head>

      <body className="min-h-screen bg-[#071426] text-slate-100 antialiased">
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}