export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohammed Khan",
    url: "https://www.mohammedkhan.dev",
    jobTitle: "Founder & Software Engineer",
    description:
      "Founder of STACKRA TECHNOLOGIES and software engineer building modern websites, business software and AI-powered applications.",
    worksFor: {
      "@type": "Organization",
      name: "STACKRA TECHNOLOGIES",
      url: "https://stackratechnologies.com",
    },
    knowsAbout: [
      "Software Development",
      "Web Development",
      "Next.js",
      "React",
      "JavaScript",
      "MongoDB",
      "Artificial Intelligence",
      "Business Software",
      "CRM",
      "ERP",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}