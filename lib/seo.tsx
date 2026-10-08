import type { Metadata } from "next";
import { site } from "@/data/site";

export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | NovaLink Innovations`, description, url: path },
    twitter: { title: `${title} | NovaLink Innovations`, description },
  };
}

const address = Object.fromEntries(
  Object.entries({ "@type": "PostalAddress", ...site.address }).filter(([, v]) => v !== ""),
);

/**
 * Organization + local business entity. ProfessionalService is a LocalBusiness type, which lets
 * Google connect the site to the Melbourne Google Business Profile.
 */
export const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  logo: `${site.url}/brand/novalink-logo.png`,
  image: `${site.url}/brand/novalink-logo.png`,
  slogan: site.tagline,
  description: site.description,
  address,
  areaServed: [
    { "@type": "City", name: "Melbourne" },
    { "@type": "Country", name: "Australia" },
  ],
  contactPoint: [
    { "@type": "ContactPoint", contactType: "sales", telephone: site.phone, email: site.email, areaServed: "AU", availableLanguage: "English" },
    { "@type": "ContactPoint", contactType: "sales", telephone: site.phoneLk, areaServed: "LK", availableLanguage: "English" },
  ],
  knowsAbout: [
    "Custom software development",
    "Web development",
    "UI/UX design",
    "SaaS development",
    "Mobile app development",
    "Digital marketing",
    "Branding",
    "Search engine optimisation",
  ],
  ...(site.hours ? { openingHours: site.hours } : {}),
  sameAs: [
    ...site.socials.filter((s) => s.label !== "WhatsApp").map((s) => s.href),
    ...(site.clutch.url ? [site.clutch.url] : []),
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.clutch.rating,
    reviewCount: site.clutch.reviews,
    bestRating: "5",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  publisher: { "@id": `${site.url}/#organization` },
  inLanguage: "en-AU",
};

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Trim to Google's ~155-character snippet length at a word boundary. */
export function clampDescription(text: string, max = 155) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:—–-]$/, "")}…`;
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
