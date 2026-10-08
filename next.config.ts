import type { NextConfig } from "next";

/** Legacy static-site URLs → new routes (permanent, to preserve rankings). */
const legacy: [string, string][] = [
  ["/index.html", "/"],
  ["/index-light.html", "/"],
  ["/about-us-light.html", "/about"],
  ["/about-us.html", "/about"],
  ["/service-details-light.html", "/services"],
  ["/portfolio-col-3-light.html", "/#work"],
  ["/portfolio-masonry-light.html", "/#work"],
  ["/portfolio-details-gallery-light.html", "/#work"],
  ["/career.html", "/careers"],
  ["/job-application-form.html", "/careers#apply"],
  ["/contact-us-light.html", "/contact"],
  ["/faq-light.html", "/contact"],
];

/** URLs of the current static site (…/about.html etc.) → clean routes. */
const htmlPages: [string, string][] = [
  ["/about.html", "/about"],
  ["/services.html", "/services"],
  ["/careers.html", "/careers"],
  ["/contact.html", "/contact"],
  ["/privacy.html", "/privacy"],
  ["/terms.html", "/terms"],
];

/** One canonical host: www.novalinkinnovations.com → novalinkinnovations.com (matches the canonical tags). */
const canonicalHost = "novalinkinnovations.com";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${canonicalHost}` }],
        destination: `https://${canonicalHost}/:path*`,
        permanent: true,
      },
      ...legacy.map(([source, destination]) => ({ source, destination, permanent: true })),
      ...htmlPages.map(([source, destination]) => ({ source, destination, permanent: true })),
      { source: "/projects/:slug.html", destination: "/projects/:slug", permanent: true },
      { source: "/work", destination: "/#work", permanent: true },
      { source: "/projects", destination: "/#work", permanent: true },
    ];
  },
};

export default nextConfig;
