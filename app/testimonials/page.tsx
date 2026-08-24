import type { Metadata } from "next";
import Link from "next/link";
import { Star, Quote, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { jsonLdForPage, pageMetadata, pageTypeSchema } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Client Reviews & Testimonials | Anas Tanveer",
  description: "Real client reviews for Anas Tanveer — full-stack web developer Dubai. Laravel, WordPress, Shopify, dashboard and API projects reviewed by international clients.",
  path: "/testimonials",
  extraKeywords: [
    "Anas Tanveer Reviews",
    "Web Developer Dubai Reviews",
    "Laravel Developer Dubai Testimonials",
    "Hire Web Developer Dubai Reviews",
    "ARS Developer Reviews"
  ]
});

const reviews = [
  {
    author: "Steve Barlow",
    platform: "Fiverr",
    rating: 5,
    date: "2024-08-10",
    project: "Laravel Web Platform",
    location: "United Kingdom",
    body: "Another fantastic project from Anas. He understands the requirements, provides fully functional updates, makes changes quickly, and delivers a truly excellent product. I highly recommend Anas.",
    highlight: "Understands requirements and delivers excellent results."
  },
  {
    author: "Said B.",
    platform: "Fiverr",
    rating: 5,
    date: "2024-06-20",
    project: "Laravel Dashboard System",
    location: "France",
    body: "2nd collaboration with Anas — fast, precise and high quality work. Excellent results delivered on time. Will definitely work together again.",
    highlight: "Fast, precise, high quality. Will work together again."
  },
  {
    author: "J. Nagle",
    platform: "Fiverr",
    rating: 5,
    date: "2024-04-15",
    project: "Custom Web Application",
    location: "Ireland",
    body: "Anas did a great job as per usual. Reliable, fast and always delivers exactly what is needed. Highly recommended.",
    highlight: "Reliable, fast, always delivers exactly what is needed."
  },
  {
    author: "Rushil C.",
    platform: "Fiverr",
    rating: 5,
    date: "2024-02-05",
    project: "Shopify Customization",
    location: "Canada",
    body: "Excellent experience working with Anas Tanveer. His professionalism, attention to detail, and ability to deliver bug-free work were exceptional.",
    highlight: "Professionalism, attention to detail, bug-free delivery."
  },
];

const aggregateRatingJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": absoluteUrl("/#local-business"),
  name: "Anas Tanveer Web Development",
  url: absoluteUrl("/"),
  telephone: "+971542435418",
  email: "info@anastanveer.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: String(reviews.length),
    reviewCount: String(reviews.length),
    bestRating: "5",
    worstRating: "1",
  },
  review: reviews.map((r) => ({
    "@type": "Review",
    "@id": `${absoluteUrl("/testimonials")}#review-${r.author.replace(/\s/g, "-").toLowerCase()}`,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.rating),
      bestRating: "5",
      worstRating: "1"
    },
    author: {
      "@type": "Person",
      name: r.author,
      ...(r.location ? { address: { "@type": "PostalAddress", addressCountry: r.location } } : {})
    },
    datePublished: r.date,
    reviewBody: r.body,
    name: r.highlight,
    itemReviewed: {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/#local-business"),
      name: "Anas Tanveer Web Development"
    },
    publisher: { "@type": "Organization", name: r.platform }
  })),
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
    { "@type": "ListItem", position: 2, name: "Testimonials", item: absoluteUrl("/testimonials") },
  ],
};

function StarRow({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
      ))}
    </span>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd data={jsonLdForPage("/testimonials")} id="testimonials-page-json-ld" />
      <JsonLd data={aggregateRatingJsonLd} id="testimonials-rating-json-ld" />
      <JsonLd data={pageJsonLd} id="testimonials-breadcrumb-json-ld" />
      <JsonLd
        data={pageTypeSchema("CollectionPage", "/testimonials", {
          name: "Client Reviews & Testimonials — Anas Tanveer Web Developer Dubai",
          description: "Verified client reviews for Anas Tanveer. Laravel, WordPress, Shopify, dashboard and API projects reviewed by international clients from UK, France, Ireland, Canada and UAE.",
          items: reviews.map((r) => ({
            name: `${r.author} — ${r.project}`,
            url: `${absoluteUrl("/testimonials")}#review-${r.author.replace(/\s/g, "-").toLowerCase()}`,
            description: r.highlight
          }))
        })}
        id="testimonials-collection-json-ld"
      />

      <section className="page-start section-pad">
        <div className="mx-auto max-w-5xl px-5">

          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-silver/55 light:text-slate-400">
              <li><Link href="/" className="hover:text-cyan light:hover:text-blue-600">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-silver/85 light:text-slate-600">Testimonials</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">Client Reviews</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white light:text-slate-950 md:text-5xl">
              What Clients Say About Working with Anas Tanveer
            </h1>
            <p className="mt-5 text-base leading-8 text-silver/72 light:text-slate-600">
              Verified reviews from international clients across Laravel platforms, WordPress websites,
              Shopify stores, dashboards and custom web application projects.
            </p>
          </div>

          {/* Aggregate score */}
          <div className="mb-10 flex flex-wrap items-center gap-6 rounded-2xl border border-amber-400/20 bg-amber-400/8 px-6 py-5 light:border-amber-200 light:bg-amber-50">
            <div className="text-center">
              <p className="font-display text-5xl font-bold text-amber-400">4.9</p>
              <StarRow count={5} />
              <p className="mt-1 text-xs text-silver/55 light:text-slate-500">out of 5</p>
            </div>
            <div className="h-12 w-px bg-white/10 light:bg-slate-200" />
            <div className="space-y-1">
              <p className="text-sm font-semibold text-white light:text-slate-950">{reviews.length} verified reviews</p>
              <p className="text-xs text-silver/60 light:text-slate-500">Verified client reviews from completed projects</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Laravel", "WordPress", "Shopify", "Dashboard", "API"].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-silver/65 light:border-slate-200 light:bg-white light:text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Review cards */}
          <div className="grid gap-5 md:grid-cols-2">
            {reviews.map((review) => (
              <div
                key={review.author}
                className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-6 shadow-[0_4px_40px_rgba(0,0,0,0.2)] light:border-slate-200 light:bg-white light:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-lg font-semibold text-white light:text-slate-950">{review.author}</p>
                    <p className="text-xs text-silver/55 light:text-slate-400">{review.location} · Verified client review</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <StarRow count={review.rating} />
                    <p className="mt-1 text-[10px] text-silver/45 light:text-slate-400">
                      {new Date(review.date).toLocaleDateString("en-AE", { year: "numeric", month: "short" })}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-2">
                  <Quote size={16} className="mt-0.5 shrink-0 text-cyan/50" />
                  <p className="text-sm leading-7 text-silver/72 light:text-slate-600">{review.body}</p>
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-xl border border-cyan/15 bg-cyan/8 px-3 py-2 light:border-blue-100 light:bg-blue-50">
                  <CheckCircle2 size={13} className="shrink-0 text-cyan light:text-blue-600" />
                  <p className="text-xs font-medium text-cyan/80 light:text-blue-700">{review.highlight}</p>
                </div>

                <p className="mt-4 border-t border-white/8 pt-3 text-[11px] font-medium text-silver/45 light:border-slate-100 light:text-slate-400">
                  Project: {review.project}
                </p>
              </div>
            ))}
          </div>

          {/* Service links */}
          <div className="mt-12 border-t border-white/8 pt-8 light:border-slate-100">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-silver/45 light:text-slate-400">Services These Clients Used</p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Laravel Developer Dubai", href: "/laravel-developer-dubai" },
                { label: "WordPress Developer Dubai", href: "/wordpress-developer-dubai" },
                { label: "Shopify Developer Dubai", href: "/shopify-developer-dubai" },
                { label: "Dashboard Development Dubai", href: "/dashboard-development-dubai" },
                { label: "Full Stack Developer Dubai", href: "/fullstack-developer-dubai" },
                { label: "API Integration Services", href: "/api-integration-services" },
              ].map((l) => (
                <Link key={l.href} href={l.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-silver/72 transition hover:border-cyan/35 hover:text-cyan light:border-slate-200 light:bg-white light:text-slate-700">
                  {l.label} <ArrowUpRight size={12} />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CTASection
        title="Ready to start your project?"
        text="Send the business problem, platform, goal, and timeline. I will review it and reply with a clear practical direction."
      />
    </>
  );
}
