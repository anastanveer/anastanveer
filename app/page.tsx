import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { ValueGrid } from "@/components/sections/ValueGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { BlogCard } from "@/components/ui/BlogCard";
import { PricingCard } from "@/components/ui/PricingCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/animations/Reveal";
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

const statsStrip = [
  { value: "7+", label: "Years building web systems" },
  { value: "100+", label: "Projects delivered" },
  { value: "4.9★", label: "Average client rating" },
  { value: "3", label: "Global markets served" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLdForPage("/")} id="home-json-ld" />
      <JsonLd data={faqSchema(homeFaqs)} id="faq-json-ld" />
      <Hero />
      <TechMarquee />

      {/* Stats strip */}
      <section className="relative overflow-hidden border-y border-white/6 bg-white/[0.018] py-10 light:border-slate-200 light:bg-slate-50/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(38,217,255,0.07),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {statsStrip.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.07}>
                <div className="text-center">
                  <p className="font-display text-4xl font-semibold text-white md:text-5xl light:text-slate-950">
                    <span className="premium-text">{s.value}</span>
                  </p>
                  <p className="mt-2 text-sm text-silver/60 light:text-slate-500">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad relative overflow-hidden pt-20">
        <div className="absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-violet/7 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-cyan/6 blur-3xl" />
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionHeader
              eyebrow="Problems I solve"
              title="Websites, stores, dashboards, and platforms built around real business pain."
              description="I help companies replace slow pages, weak conversion flows, plugin limits, manual admin work, disconnected tools, and poor SEO foundations with practical solutions."
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

      {/* Projects */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute -right-32 top-20 h-[28rem] w-[28rem] rounded-full bg-cyan/7 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-48 w-96 rounded-full bg-violet/6 blur-3xl" />
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader
            eyebrow="Proof of problem solving"
            title="Selected work shaped around business outcomes."
            description="A practical view of platform, dashboard, ecommerce, CMS, ERP and SEO-ready website work where the focus is clarity, reliability, speed and better user experience."
          />
          <div className="mobile-rail grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills — bento asymmetric */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(139,92,246,0.09),transparent_55%),radial-gradient(ellipse_at_80%_20%,rgba(38,217,255,0.07),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] bg-[size:52px_52px]" />
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="Skills ecosystem" title="The stack I use to solve frontend, backend, ecommerce, SEO and operations problems." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([group, items], i) => (
              <Reveal key={group} delay={i * 0.06} className={i === 0 ? "md:col-span-2 lg:col-span-1" : ""}>
                <div className="premium-card glass group h-full rounded-2xl p-6">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="h-1.5 w-4 rounded-full bg-gradient-to-r from-cyan to-violet" />
                    <h3 className="font-display text-lg font-semibold text-white light:text-slate-950">{group}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-silver/72 transition group-hover:border-cyan/20 group-hover:text-silver/85 light:border-slate-900/10 light:bg-slate-50 light:text-slate-600">{item}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-48 w-[60rem] -translate-x-1/2 rounded-full bg-cyan/5 blur-3xl" />
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

      {/* Why hire */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-emerald/6 blur-3xl" />
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-violet/8 blur-3xl" />
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="Why hire Anas Tanveer" title="A developer profile for teams that need execution, clarity, and practical solutions." />
          <ValueGrid />
        </div>
      </section>

      {/* Case studies — numbered cards */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(38,217,255,0.06),transparent_55%)]" />
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <SectionHeader eyebrow="Case study highlights" title="How selected projects moved from pain point to usable system." />
            <Reveal>
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan transition hover:text-white">
                View all case studies <ArrowUpRight size={15} />
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {caseStudies.slice(0, 4).map((study, i) => (
              <Reveal key={study.title} delay={i * 0.07}>
                <article className="premium-card glass group relative overflow-hidden rounded-2xl p-7">
                  <div className="absolute right-5 top-5 font-display text-7xl font-bold leading-none text-white/[0.04] select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-0.5 w-8 rounded-full bg-gradient-to-r from-cyan to-violet" />
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">Case Study {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white light:text-slate-950">{study.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-silver/70 light:text-slate-600">{study.impact}</p>
                  <div className="mt-5 flex items-center gap-2 rounded-xl border border-emerald/20 bg-emerald/8 px-4 py-2.5">
                    <CheckCircle2 size={15} className="shrink-0 text-emerald" />
                    <p className="text-sm font-medium text-emerald">{study.result}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(139,92,246,0.1),transparent_55%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet/40 to-transparent" />
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="Engagement options" title="Choose the level of support based on the problem you need solved." />
          <div className="mobile-rail grid gap-5 lg:grid-cols-3">
            {pricing.slice(1, 4).map((plan, index) => (
              <PricingCard key={plan.title} plan={plan} index={index} />
            ))}
          </div>
          <p className="mt-6 text-sm text-silver/55 light:text-slate-500">
            Final pricing depends on scope, features, integrations, timeline, and platform.
          </p>
        </div>
      </section>

      {/* Blog */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-cyan/6 blur-3xl" />
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <SectionHeader eyebrow="Writing" title="Decision-focused notes for Laravel, WordPress, Shopify, SEO and performance." />
            <Reveal>
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan transition hover:text-white">
                All articles <ArrowUpRight size={15} />
              </Link>
            </Reveal>
          </div>
          <div className="mobile-rail grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogs.slice(0, 3).map((post, index) => (
              <BlogCard key={post.title} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(38,217,255,0.06),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="Client FAQs" title="Straight answers before trusting me with a project." />
          <FAQ />
        </div>
      </section>

      <CTASection
        title="Have a website, dashboard, store, or workflow problem?"
        text="Send the details. I'll review the goal, platform, timeline, and technical risk, then reply with a practical direction for Laravel, WordPress, Shopify, dashboards, ecommerce, SEO, or custom web systems."
      />
    </>
  );
}
