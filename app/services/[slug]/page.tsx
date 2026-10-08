import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { getService, services } from "@/data/services";
import { getServicePage, serviceHref, servicePages } from "@/data/service-pages";
import { getProject } from "@/data/projects";
import { site } from "@/data/site";
import { pageMeta, breadcrumbJsonLd, faqJsonLd, JsonLd } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { Reveal } from "@/components/ui/Reveal";
import { pad } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((p) => ({ slug: p.path }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const page = getServicePage(slug);
  if (!page) return {};
  return pageMeta({ title: page.seoTitle, description: page.metaDescription, path: `/services/${page.path}` });
}

export default async function ServicePage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const page = getServicePage(slug);
  const service = page && getService(page.slug);
  if (!page || !service) notFound();

  const url = `${site.url}/services/${page.path}`;
  const related = service.related.map(getProject).filter((p) => p != null);
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${page.path}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${url}#service`,
            name: `${service.title} in Melbourne`,
            serviceType: service.title,
            description: page.metaDescription,
            provider: { "@id": `${site.url}/#organization` },
            areaServed: [
              { "@type": "City", name: "Melbourne" },
              { "@type": "Country", name: "Australia" },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: service.title,
              itemListElement: service.capabilities.map((c) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: c },
              })),
            },
            url,
          },
          faqJsonLd(page.faqs),
        ]}
      />

      <PageHero crumb={service.title} label={`Service ${service.number}`} lines={[page.h1[0], { text: page.h1[1], className: "text-blue" }]} intro={page.intro}>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={`/contact?type=${encodeURIComponent(service.slug)}`} size="lg">
            Get a quote
          </Button>
          <Button href="#faq" size="lg" variant="secondary" arrow="down-right">
            Common questions
          </Button>
        </div>
      </PageHero>

      {/* Overview */}
      <section aria-labelledby="overview-h" className="border-b border-line py-20 md:py-28">
        <div className="container-x grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <EyebrowLabel as="h2" index="01">
              <span id="overview-h">Overview</span>
            </EyebrowLabel>
          </div>
          <div className="space-y-6 md:col-span-8">
            {page.overview.map((p, i) => (
              <Reveal key={i}>
                <p className={i === 0 ? "text-title font-medium" : "text-lede text-grey-2"}>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we build */}
      <section aria-labelledby="capabilities-h" className="border-b border-line bg-white py-20 md:py-28">
        <div className="container-x">
          <EyebrowLabel index="02">What we offer</EyebrowLabel>
          <h2 id="capabilities-h" className="text-headline mt-6 max-w-2xl font-medium">
            {service.title} services
          </h2>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {service.capabilities.map((c, i) => (
              <li key={c} className="bg-white p-7 md:p-10">
                <p className="text-label text-blue-ink">{pad(i + 1)}</p>
                <h3 className="text-title mt-5 font-medium">{c}</h3>
                <p className="mt-3 text-grey-2">{page.capabilityDetails[c]}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Problems */}
      <section aria-labelledby="problems-h" className="border-b border-line py-20 md:py-28">
        <div className="container-x grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <EyebrowLabel index="03">Problems we solve</EyebrowLabel>
            <h2 id="problems-h" className="text-headline mt-6 font-medium">
              When this is the right fit
            </h2>
          </div>
          <dl className="divide-y divide-line border-y border-line md:col-span-8">
            {service.problems.map((p) => (
              <div key={p} className="grid gap-3 py-7 md:grid-cols-2 md:gap-8">
                <dt className="text-title font-medium">{p}</dt>
                <dd className="text-grey-2">{page.problemDetails[p]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process-h" className="border-b border-line bg-white py-20 md:py-28">
        <div className="container-x">
          <EyebrowLabel index="04">How we work</EyebrowLabel>
          <h2 id="process-h" className="text-headline mt-6 max-w-2xl font-medium">
            Our process
          </h2>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <li key={step} className="bg-white p-7">
                <p className="text-label text-blue-ink">{pad(i + 1)}</p>
                <h3 className="text-title mt-5 font-medium">{step}</h3>
                <p className="mt-3 text-grey-2">{page.processDetails[step]}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why + related work */}
      <section aria-labelledby="why-h" className="border-b border-line py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <EyebrowLabel index="05">Why NovaLink</EyebrowLabel>
            <h2 id="why-h" className="text-headline mt-6 font-medium">
              Why Melbourne businesses choose us
            </h2>
            <ul className="mt-8 space-y-4">
              {page.why.map((w) => (
                <li key={w} className="flex gap-3 text-lg">
                  <span aria-hidden className="mt-3 size-1.5 shrink-0 bg-blue" />
                  {w}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-grey-2">
              Rated {site.clutch.rating}/5 on Clutch from {site.clutch.reviews} reviews.
            </p>
          </div>
          {related.length > 0 && (
            <div className="lg:col-span-6">
              <h2 className="text-label text-grey-2">Related case studies</h2>
              <ul className="mt-3 divide-y divide-line border-y border-line">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/projects/${p.slug}`} className="group flex min-h-16 items-center justify-between gap-6 py-4">
                      <span>
                        <span className="link-u text-title font-medium">{p.title}</span>
                        <span className="mt-1 block text-sm text-grey-2">{p.problem}</span>
                      </span>
                      <ArrowUpRight aria-hidden className="size-4 shrink-0 text-grey-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" aria-labelledby="faq-h" className="scroll-mt-20 border-b border-line bg-white py-20 md:py-28">
        <div className="container-x grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <EyebrowLabel index="06">FAQ</EyebrowLabel>
            <h2 id="faq-h" className="text-headline mt-6 font-medium">
              Common questions
            </h2>
          </div>
          <div className="divide-y divide-line border-y border-line md:col-span-8">
            {page.faqs.map((f) => (
              <details key={f.q} className="group py-6" open>
                <summary className="text-title flex cursor-pointer list-none items-start justify-between gap-6 font-medium">
                  <h3>{f.q}</h3>
                  <span aria-hidden className="mt-1 text-blue transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl text-grey-2">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <nav aria-label="Other services" className="border-b border-line py-16">
        <div className="container-x">
          <h2 className="text-label text-grey-2">Other services</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {others.map((s) => (
              <li key={s.slug}>
                <Link href={serviceHref(s.slug)} className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-line-strong bg-white px-4 text-sm transition-colors hover:border-blue hover:text-blue">
                  <span className="text-label text-blue-ink">{s.number}</span>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <CTASection />
    </>
  );
}
