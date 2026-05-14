import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Clock } from "lucide-react";
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
import { SkillsVisual } from "@/components/sections/SkillsVisual";
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

      {/* ── Stats strip ─────────────────────────────────────── */}
      <section className="relative overflow-hidden border-y border-white/8 py-10 light:border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 via-violet/5 to-emerald/5 light:from-blue-50 light:via-violet-50/50 light:to-emerald-50/50" />
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "7+", label: "Years Experience", color: "text-cyan light:text-blue-600" },
              { value: "100+", label: "Projects Delivered", color: "text-violet light:text-violet-600" },
              { value: "4.9★", label: "Client Rating", color: "text-amber-400 light:text-amber-500" },
              { value: "3", label: "Global Markets", color: "text-emerald light:text-emerald-600" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.07}>
                <div className="text-center">
                  <p className={`font-display text-4xl font-bold md:text-5xl ${s.color}`}>{s.value}</p>
                  <p className="mt-2 text-sm text-silver/60 light:text-slate-500">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 01 / Services ────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute -left-48 top-10 h-[36rem] w-[36rem] rounded-full bg-violet/8 blur-[100px] light:bg-violet-200/40" />
        <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-cyan/7 blur-3xl light:bg-blue-200/40" />
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionHeader
              eyebrow="01 / Problems I Solve"
              title="Websites, stores, dashboards, and platforms built around real business pain."
              description="I help companies replace slow pages, weak conversion flows, plugin limits, manual admin work, disconnected tools, and poor SEO foundations."
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
                className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-sm font-medium text-silver/72 transition hover:border-cyan/35 hover:text-cyan light:border-slate-200 light:bg-white light:text-slate-600 light:hover:border-blue-400 light:hover:text-blue-700"
                href={`/${page.slug}`}
                key={page.slug}
              >
                {page.navLabel}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 / Projects ────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute -right-32 top-20 h-[30rem] w-[30rem] rounded-full bg-cyan/8 blur-[100px] light:bg-blue-200/40" />
        <div className="absolute bottom-0 left-1/4 h-48 w-80 rounded-full bg-violet/6 blur-3xl light:bg-violet-200/30" />
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              eyebrow="02 / Portfolio"
              title="Selected work shaped around business outcomes."
            />
            <Reveal>
              <Link href="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan transition hover:text-white light:text-blue-700 light:hover:text-blue-900">
                View all work <ArrowUpRight size={15} />
              </Link>
            </Reveal>
          </div>
          <div className="mobile-rail grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 / Skills Visual ───────────────────────────────── */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.032)_1px,transparent_1px)] bg-[size:52px_52px] light:bg-[linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_60%,rgba(139,92,246,0.1),transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(38,217,255,0.08),transparent_50%)] light:bg-[radial-gradient(ellipse_at_20%_60%,rgba(139,92,246,0.06),transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(37,99,235,0.06),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="03 / Skills Ecosystem" title="The stack I use to solve frontend, backend, ecommerce, SEO and operations problems." />
          <SkillsVisual />
        </div>
      </section>

      {/* ── 04 / Process ─────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-40 w-[56rem] -translate-x-1/2 rounded-full bg-cyan/5 blur-3xl light:bg-blue-200/30" />
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 grid items-end gap-8 lg:grid-cols-[1fr_0.65fr]">
            <SectionHeader eyebrow="04 / Work Process" title="How I turn a business problem into a launch-ready web solution." />
            <Reveal>
              <p className="text-sm leading-7 text-silver/65 light:text-slate-600">
                A clear workflow for recruiters, agencies, founders and clients: understand the problem, plan, build, test, optimize and support.
              </p>
            </Reveal>
          </div>
          <Process />
        </div>
      </section>

      {/* ── 05 / Case Studies ─────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(38,217,255,0.07),transparent_50%),radial-gradient(ellipse_at_20%_80%,rgba(52,211,153,0.07),transparent_50%)] light:bg-[radial-gradient(ellipse_at_70%_30%,rgba(37,99,235,0.05),transparent_50%),radial-gradient(ellipse_at_20%_80%,rgba(16,185,129,0.05),transparent_50%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <SectionHeader eyebrow="05 / Case Studies" title="How selected projects moved from pain point to usable system." />
            <Reveal>
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan transition hover:text-white light:text-blue-700 light:hover:text-blue-900">
                All case studies <ArrowUpRight size={15} />
              </Link>
            </Reveal>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {caseStudies.slice(0, 4).map((study, i) => (
              <Reveal key={study.title} delay={i * 0.07}>
                <article className="premium-card glass group relative overflow-hidden rounded-2xl p-7 light:bg-white/90 light:border-slate-200">
                  <div className="pointer-events-none absolute right-6 top-4 select-none font-display text-[6rem] font-bold leading-none text-white/[0.05] light:text-slate-900/[0.04]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-0.5 w-6 rounded-full bg-gradient-to-r from-cyan to-violet" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan light:text-blue-700">Case {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white light:text-slate-950">{study.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-silver/68 light:text-slate-600">{study.impact}</p>
                  <div className="mt-5 flex items-center gap-2 rounded-xl border border-emerald/25 bg-emerald/8 px-4 py-2.5 light:border-emerald-200 light:bg-emerald-50">
                    <CheckCircle2 size={14} className="shrink-0 text-emerald light:text-emerald-600" />
                    <p className="text-sm font-medium text-emerald light:text-emerald-700">{study.result}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 / Why hire ─────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-emerald/6 blur-3xl light:bg-emerald-200/30" />
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-violet/8 blur-3xl light:bg-violet-200/30" />
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="06 / Why Work With Me" title="A developer profile for teams that need execution, clarity, and practical solutions." />
          <ValueGrid />
        </div>
      </section>

      {/* ── 07 / Pricing ─────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(139,92,246,0.12),transparent_55%)] light:bg-[radial-gradient(ellipse_at_50%_100%,rgba(124,58,237,0.06),transparent_55%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet/45 to-transparent" />
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="07 / Pricing" title="Choose the level of support based on the problem you need solved." />
          <div className="mobile-rail grid gap-5 lg:grid-cols-3">
            {pricing.slice(1, 4).map((plan, index) => (
              <PricingCard key={plan.title} plan={plan} index={index} />
            ))}
          </div>
          <p className="mt-6 text-sm text-silver/50 light:text-slate-500">
            Final pricing depends on scope, features, integrations, timeline, and platform.
          </p>
        </div>
      </section>

      {/* ── 08 / Blog — featured layout ───────────────────────── */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-cyan/6 blur-3xl light:bg-blue-200/30" />
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <SectionHeader eyebrow="08 / Writing" title="Decision-focused notes for Laravel, WordPress, Shopify, SEO and performance." />
            <Reveal>
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan transition hover:text-white light:text-blue-700 light:hover:text-blue-900">
                All articles <ArrowUpRight size={15} />
              </Link>
            </Reveal>
          </div>

          {/* Featured post large + 2 side */}
          <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
            {/* Large featured */}
            <Reveal>
              <Link href={`/blog/${blogs[0].slug}`} className="premium-card glass group relative block overflow-hidden rounded-2xl light:bg-white/90 light:border-slate-200">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={blogs[0].image}
                    alt={blogs[0].title}
                    width={760}
                    height={428}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 56vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-cyan/30 bg-cyan/15 px-3 py-1 text-xs font-semibold text-cyan backdrop-blur-md">
                    {blogs[0].tag}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-semibold leading-tight text-white light:text-slate-950">{blogs[0].title}</h3>
                  <p className="mt-3 text-sm leading-7 text-silver/70 light:text-slate-600">{blogs[0].excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-silver/50 light:text-slate-400">
                    <span className="flex items-center gap-1.5"><Clock size={12} /> {blogs[0].readingTime}</span>
                    <span className="flex items-center gap-1.5 font-semibold text-cyan light:text-blue-700">Read article <ArrowUpRight size={13} /></span>
                  </div>
                </div>
              </Link>
            </Reveal>

            {/* 2 side posts */}
            <div className="flex flex-col gap-5">
              {blogs.slice(1, 3).map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index + 1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 09 / Testimonials ─────────────────────────────────── */}
      <Testimonials />

      {/* ── 10 / FAQ ─────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(38,217,255,0.06),transparent_50%)] light:bg-[radial-gradient(ellipse_at_30%_50%,rgba(37,99,235,0.04),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="10 / FAQs" title="Straight answers before trusting me with a project." />
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
