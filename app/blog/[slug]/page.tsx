import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogSeoContent } from "@/data/blogSeo";
import { blogs } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const revalidate = 86400;

const serviceMap: Record<string, { href: string; label: string }> = {
  Laravel: { href: "/laravel-developer-dubai", label: "Laravel Developer Dubai" },
  WordPress: { href: "/wordpress-developer-dubai", label: "WordPress Developer Dubai" },
  Shopify: { href: "/shopify-developer-dubai", label: "Shopify Developer Dubai" },
  Performance: { href: "/website-speed-optimization-dubai", label: "Speed Optimization Services" },
  SEO: { href: "/seo-friendly-website-development", label: "SEO-Friendly Development" },
  "AI SEO": { href: "/seo-friendly-website-development", label: "SEO-Friendly Development" },
  "AI Automation": { href: "/laravel-developer-dubai", label: "Laravel Developer Dubai" },
  "AI Audit": { href: "/website-speed-optimization-dubai", label: "Speed & SEO Audit" },
  Strategy: { href: "/web-developer-uae", label: "Hire a Web Developer — UAE" },
  Hiring: { href: "/freelance-web-developer-dubai", label: "Freelance Web Developer Dubai" },
  API: { href: "/api-integration-services", label: "API Integration Services" },
  Ecommerce: { href: "/ecommerce-website-development-dubai", label: "Ecommerce Development Dubai" },
  "Next.js": { href: "/web-developer-uae", label: "Web Developer UAE" },
  React: { href: "/web-developer-uae", label: "Web Developer UAE" },
  "Web Development": { href: "/web-developer-uae", label: "Web Developer UAE" },
};

export function generateStaticParams() {
  const today = new Date().toISOString().slice(0, 10);
  return blogs.filter((post) => post.publishedAt <= today).map((post) => ({ slug: post.slug }));
}

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);

  if (!post) {
    return pageMetadata({
      title: "Blog | Anas Tanveer",
      description: "Web development notes by Anas Tanveer.",
      path: "/blog"
    });
  }

  return pageMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
    image: post.image,
    extraKeywords: blogSeoContent[post.slug]?.focusKeywords ?? []
  });
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const today = new Date().toISOString().slice(0, 10);
  const seoContent = blogSeoContent[post.slug];
  const allSections = [...post.sections, ...(seoContent?.expandedSections ?? [])];
  const serviceLink = serviceMap[post.tag] ?? null;

  const relatedPosts = blogs
    .filter((b) => b.slug !== post.slug && b.tag === post.tag && b.publishedAt <= today)
    .slice(0, 3);

  const actionSection = seoContent
    ? [
        "How to turn this into a real project decision",
        "Start by writing the business problem in one line. For example: the website is slow, the Shopify product page is confusing, the WordPress site does not generate quality leads, or the Laravel dashboard cannot support the workflow anymore. A clear problem statement makes the technical decision easier.",
        "Next, separate the requirement into user experience, backend logic, SEO, speed, integrations and content. This prevents the common mistake of redesigning a page when the real issue is data structure, plugin conflict, weak copy, poor mobile UX or missing automation.",
        "For Dubai, UAE and international clients, the strongest web solution is usually the one that improves trust, reduces manual work, loads fast on mobile and gives visitors a clear reason to contact the business. That is the standard I use when planning Laravel, WordPress, Shopify, ecommerce, dashboard and SEO-focused work."
      ]
    : [];
  const articleText = [
    post.title,
    post.excerpt,
    ...(seoContent?.intro ?? []),
    ...allSections.reduce<string[]>((items, section) => {
      items.push(section.heading, ...section.body);
      return items;
    }, []),
    ...(seoContent?.checklist ?? []),
    ...actionSection,
    ...(seoContent?.faqs.reduce<string[]>((items, item) => {
      items.push(item.question, item.answer);
      return items;
    }, []) ?? [])
  ].join(" ");
  const wordCount = articleText.trim().split(/\s+/).length;
  const readingMinutes = Math.max(4, Math.ceil(wordCount / 175));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.image),
    keywords: seoContent?.focusKeywords ?? [],
    articleSection: [post.tag, "Web Development", "SEO", "Business Systems"],
    wordCount,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: "Anas Tanveer",
      url: absoluteUrl("/about")
    },
    publisher: {
      "@type": "Organization",
      name: "ARS Developer Ltd",
      url: "https://arsdeveloper.co.uk"
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`)
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
      { "@type": "ListItem", position: 3, name: post.title, item: absoluteUrl(`/blog/${post.slug}`) }
    ]
  };

  const faqJsonLd =
    seoContent && seoContent.faqs.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: seoContent.faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer
            }
          }))
        }
      : null;

  return (
    <>
      <JsonLd data={jsonLd} id={`${post.slug}-blog-json-ld`} />
      <JsonLd data={breadcrumbJsonLd} id={`${post.slug}-breadcrumb-json-ld`} />
      {faqJsonLd ? <JsonLd data={faqJsonLd} id={`${post.slug}-faq-json-ld`} /> : null}
      <section className="section-pad page-start">
        <div className="mx-auto max-w-4xl px-5">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan">
            <ArrowLeft size={16} /> Back to blog
          </Link>
          <div className="mt-7">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan">{post.tag}</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white light:text-slate-950 md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-silver/76 light:text-slate-600">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-silver/60 light:text-slate-500">
              <span>{readingMinutes} min read</span>
              <span>{wordCount.toLocaleString("en-AE")} words</span>
              <span>Updated {new Date(post.updatedAt).toLocaleDateString("en-AE", { year: "numeric", month: "short", day: "numeric" })}</span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl px-5">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={post.image}
              alt={`${post.title} article visual`}
              width={1440}
              height={806}
              priority
              className="aspect-[16/9] w-full object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/46 via-transparent to-transparent" />
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-8 px-5 lg:grid-cols-[0.72fr_0.28fr]">
          <article className="glass rounded-2xl p-6 md:p-9">
            {seoContent?.intro?.length ? (
              <div className="mb-10 rounded-2xl border border-cyan/20 bg-cyan/10 p-5 light:border-blue-500/20 light:bg-blue-50">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan light:text-blue-700">Practical overview</p>
                <div className="mt-4 space-y-4">
                  {seoContent.intro.map((paragraph) => (
                    <p className="text-base leading-8 text-silver/78 light:text-slate-700" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}

            {allSections.map((section) => (
              <section className="mb-10 last:mb-0" key={section.heading}>
                <h2 className="font-display text-2xl font-semibold text-white light:text-slate-950 md:text-3xl">{section.heading}</h2>
                <div className="mt-5 space-y-4">
                  {section.body.map((paragraph) => (
                    <p className="text-base leading-8 text-silver/74 light:text-slate-600" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                {(() => {
                  const img = (section as { image?: { src: string; alt: string } }).image;
                  return img ? (
                    <div className="mt-7 overflow-hidden rounded-2xl border border-white/10 light:border-slate-200">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={900}
                        height={506}
                        className="aspect-[16/9] w-full object-cover"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  ) : null;
                })()}
              </section>
            ))}

            {seoContent?.checklist?.length ? (
              <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-5 light:border-slate-200 light:bg-white">
                <h2 className="font-display text-2xl font-semibold text-white light:text-slate-950 md:text-3xl">Practical checklist</h2>
                <div className="mt-5 grid gap-3">
                  {seoContent.checklist.map((item) => (
                    <p className="flex gap-3 text-base leading-7 text-silver/78 light:text-slate-700" key={item}>
                      <CheckCircle2 size={18} className="mt-1 shrink-0 text-emerald" />
                      {item}
                    </p>
                  ))}
                </div>
              </section>
            ) : null}

            {seoContent ? (
              <section className="mt-10">
                <h2 className="font-display text-2xl font-semibold text-white light:text-slate-950 md:text-3xl">
                  How to turn this into a real project decision
                </h2>
                <div className="mt-5 space-y-4">
                  <p className="text-base leading-8 text-silver/74 light:text-slate-600">
                    Start by writing the business problem in one line. For example: the website is slow, the Shopify product page is confusing, the WordPress site does not generate quality leads, or the Laravel dashboard cannot support the workflow anymore. A clear problem statement makes the technical decision easier.
                  </p>
                  <p className="text-base leading-8 text-silver/74 light:text-slate-600">
                    Next, separate the requirement into user experience, backend logic, SEO, speed, integrations and content. This prevents the common mistake of redesigning a page when the real issue is data structure, plugin conflict, weak copy, poor mobile UX or missing automation.
                  </p>
                  <p className="text-base leading-8 text-silver/74 light:text-slate-600">
                    For Dubai, UAE and international clients, the strongest web solution is usually the one that improves trust, reduces manual work, loads fast on mobile and gives visitors a clear reason to contact the business. That is the standard I use when planning Laravel, WordPress, Shopify, ecommerce, dashboard and SEO-focused work.
                  </p>
                </div>
              </section>
            ) : null}

            {seoContent?.faqs?.length ? (
              <section className="mt-10">
                <h2 className="font-display text-2xl font-semibold text-white light:text-slate-950 md:text-3xl">FAQs</h2>
                <div className="mt-5 grid gap-4">
                  {seoContent.faqs.map((item) => (
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 light:border-slate-200 light:bg-white" key={item.question}>
                      <h3 className="text-lg font-semibold text-white light:text-slate-950">{item.question}</h3>
                      <p className="mt-3 text-base leading-7 text-silver/74 light:text-slate-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {serviceLink ? (
              <section className="mt-10 rounded-2xl border border-cyan/20 bg-cyan/10 p-6 light:border-blue-500/20 light:bg-blue-50">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan light:text-blue-700">Related service</p>
                <p className="mt-2 text-sm text-silver/65 light:text-slate-600">Looking for hands-on help with this?</p>
                <Link
                  href={serviceLink.href}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-5 py-2.5 text-sm font-semibold text-cyan transition hover:bg-cyan/20 light:border-blue-500/30 light:bg-blue-100 light:text-blue-700 light:hover:bg-blue-200"
                >
                  {serviceLink.label} <ArrowUpRight size={14} />
                </Link>
              </section>
            ) : null}

            {seoContent?.relatedLinks?.length ? (
              <section className="mt-10 rounded-2xl border border-cyan/20 bg-cyan/10 p-6 light:border-blue-500/20 light:bg-blue-50">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan light:text-blue-700">Related services</p>
                <p className="mt-2 text-sm text-silver/65 light:text-slate-600">Need help applying this to your project?</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {seoContent.relatedLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-1.5 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-semibold text-cyan transition hover:bg-cyan/20 light:border-blue-500/30 light:bg-blue-100 light:text-blue-700 light:hover:bg-blue-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}
          </article>

          <aside className="h-max space-y-5 lg:sticky lg:top-28">
            <div className="rounded-2xl border border-cyan/20 bg-cyan/10 p-5 light:border-blue-500/20 light:bg-blue-50">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan light:text-blue-700">Key takeaways</p>
              <div className="mt-5 grid gap-4">
                {post.takeaways.map((item) => (
                  <p className="flex gap-3 text-sm leading-6 text-silver/78 light:text-slate-700" key={item}>
                    <CheckCircle2 size={17} className="mt-1 shrink-0 text-emerald" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
            {seoContent?.focusKeywords?.length ? (
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 light:border-slate-200 light:bg-white">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan light:text-blue-700">Topics covered</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {seoContent.focusKeywords.map((keyword) => (
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-silver/72 light:border-slate-200 light:bg-slate-50 light:text-slate-600" key={keyword}>
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
            {seoContent?.relatedLinks?.length ? (
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 light:border-slate-200 light:bg-white">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan light:text-blue-700">Related pages</p>
                <div className="mt-4 grid gap-3">
                  {seoContent.relatedLinks.map((link) => (
                    <Link className="text-sm font-semibold text-white transition hover:text-cyan light:text-slate-800 light:hover:text-blue-700" href={link.href} key={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      {relatedPosts.length > 0 ? (
        <section className="mx-auto max-w-6xl px-5 pb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan">More on {post.tag}</p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-white light:text-slate-950">Related Articles</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="glass group flex flex-col overflow-hidden rounded-2xl transition hover:border-cyan/30"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={related.image}
                    alt={related.title}
                    width={640}
                    height={360}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full border border-cyan/25 bg-cyan/10 px-2.5 py-0.5 text-xs font-semibold text-cyan backdrop-blur-md">
                    {related.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-semibold leading-snug text-white light:text-slate-950">{related.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-silver/65 light:text-slate-600 line-clamp-2">{related.excerpt}</p>
                  <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan">
                    Read article <ArrowUpRight size={14} />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <CTASection
        title="Need help applying this to your website?"
        text="Send your current website, platform, issue and goal. I'll help you identify the practical fix for speed, SEO, Shopify, WordPress, Laravel, dashboards, APIs or ecommerce workflows."
      />
    </>
  );
}
