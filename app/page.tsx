import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { Process } from "@/components/sections/Process";
import { ValueGrid } from "@/components/sections/ValueGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { BlogCard } from "@/components/ui/BlogCard";
import { PricingCard } from "@/components/ui/PricingCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { VisualPanel } from "@/components/ui/VisualPanel";
import { blogs, caseStudies, pricing, projects, services, skills } from "@/data/site";
import { seoServicePages } from "@/data/seo-pages";
import { jsonLdForPage, faqSchema } from "@/lib/seo";

const homeFaqs = [
  { question: "How do you understand the real problem before coding?", answer: "I ask about the business goal, users, current pain, platform, workflow, integrations, SEO needs, timeline, and what success should look like. Then I suggest the simplest reliable path." },
  { question: "Do you work with UAE, UK, Canada, and international clients?", answer: "Yes. I support Dubai, UAE, UK, Canada and remote clients, agencies, recruiters, founders, ecommerce stores, service businesses, SaaS teams and local companies." },
  { question: "Can you handle both design and development?", answer: "Yes. I can plan UX, structure conversion copy, build the frontend, develop Laravel/WordPress/Shopify features, and prepare the site for speed, SEO and launch." },
  { question: "Do you build custom dashboards and ERP systems?", answer: "Yes. I build Laravel dashboards, admin panels, ERP/CRM modules, reports, user roles, API integrations, automation workflows and business-specific tools." },
  { question: "Is SEO included in development?", answer: "Technical SEO foundations are planned in premium builds: semantic headings, metadata, schema, page speed, responsive UX, internal structure and crawl-friendly content architecture." },
  { question: "What makes your work different from a normal template setup?", answer: "I do not just place sections on a page. I connect design, content, performance, backend logic, integrations and business workflow so the final product solves a real problem." }
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLdForPage("/")} id="home-json-ld" />
      <JsonLd data={faqSchema(homeFaqs)} id="faq-json-ld" />
      <Hero />
      <TechMarquee />

      <section className="section-pad pt-0">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionHeader
              eyebrow="Problems I solve"
              title="Websites, stores, dashboards, and platforms built around real business pain."
              description="I help companies replace slow pages, weak conversion flows, plugin limits, manual admin work, disconnected tools, and poor SEO foundations with practical Laravel, WordPress, Shopify, API, dashboard, ERP and performance solutions."
            />
            <VisualPanel
              src="/images/services-architecture-760.webp"
              alt="Premium Laravel WordPress Shopify business systems visual"
              label="Laravel, WordPress, Shopify, ERP, APIs, SEO and performance in one business-ready stack."
            />
          </div>
          <div className="mobile-rail grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {seoServicePages.slice(0, 6).map((page) => (
              <Link
                className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-sm font-medium text-silver/72 transition hover:border-cyan/35 hover:text-cyan light:border-slate-900/10 light:bg-white light:text-slate-700"
                href={`/${page.slug}`}
                key={page.slug}
              >
                {page.navLabel}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader
            eyebrow="Proof of problem solving"
            title="Selected work shaped around business outcomes."
            description="A practical view of platform, dashboard, ecommerce, CMS, map, ERP and SEO-ready website work where the focus is clarity, reliability, speed, admin control and better user experience."
          />
          <div className="mobile-rail grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="Skills ecosystem" title="The stack I use to solve frontend, backend, ecommerce, SEO and operations problems." />
          <div className="mobile-rail grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([group, items]) => (
              <div className="premium-card glass rounded-lg p-6" key={group}>
                <h3 className="font-display text-xl font-semibold text-white light:text-slate-950">{group}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-silver/72 light:border-slate-900/10 light:bg-slate-900/5 light:text-slate-600">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 grid items-end gap-8 lg:grid-cols-[1fr_0.72fr]">
            <SectionHeader eyebrow="Work process" title="How I turn a business problem into a launch-ready web solution." />
            <p className="max-w-xl text-sm leading-7 text-silver/72 light:text-slate-600">
              A clear workflow for recruiters, agencies, founders and clients: understand the problem, plan the user flow, build cleanly, test carefully, optimize speed and SEO, then support the launch.
            </p>
          </div>
          <Process />
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="Why hire Anas Tanveer" title="A developer profile for teams that need execution, clarity, and practical solutions." />
          <ValueGrid />
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="Case study highlights" title="How selected projects moved from pain point to usable system." />
          <div className="mobile-rail grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article className="premium-card glass rounded-lg p-6" key={study.title}>
                <h3 className="font-display text-xl font-semibold text-white light:text-slate-950">{study.title}</h3>
                <p className="mt-4 text-sm leading-7 text-silver/72 light:text-slate-600">{study.impact}</p>
                <p className="mt-4 text-sm font-medium text-cyan">{study.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="Engagement options" title="Choose the level of support based on the problem you need solved." />
          <div className="mobile-rail grid gap-5 lg:grid-cols-3">
            {pricing.slice(1, 4).map((plan, index) => (
              <PricingCard key={plan.title} plan={plan} index={index} />
            ))}
          </div>
          <p className="mt-6 text-sm text-silver/60 light:text-slate-500">
            Final pricing depends on scope, features, integrations, timeline, and platform.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="Writing" title="Decision-focused notes for Laravel, WordPress, Shopify, SEO and performance." />
          <div className="mobile-rail grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogs.slice(0, 3).map((post, index) => (
              <BlogCard key={post.title} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="Client FAQs" title="Straight answers before trusting me with a project." />
          <FAQ />
        </div>
      </section>

      <CTASection
        title="Have a website, dashboard, store, or workflow problem?"
        text="Send the details. I’ll review the goal, platform, timeline, and technical risk, then reply with a practical direction for Laravel, WordPress, Shopify, dashboards, ecommerce, SEO, or custom web systems."
      />
    </>
  );
}
