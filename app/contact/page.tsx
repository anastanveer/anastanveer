import type { Metadata } from "next";
import { Clock, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactForm } from "@/components/ui/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contactFaqItems } from "@/data/faqs";
import { profile } from "@/data/site";
import { jsonLdForPage, faqSchema, pageMetadata } from "@/lib/seo";

const contactFaqs = contactFaqItems.map(({ q, a }) => ({ question: q, answer: a }));

export const metadata: Metadata = pageMetadata({
  title: "Contact Anas Tanveer | Hire Web Problem Solver in Dubai",
  description: "Contact Anas Tanveer for Laravel, WordPress, Shopify, ecommerce, dashboards, ERP, API integration, SEO and website speed fixes in Dubai.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={jsonLdForPage("/contact")} id="contact-json-ld" />
      <JsonLd data={faqSchema(contactFaqs)} id="contact-faq-json-ld" />
      <section className="section-pad page-start">
        <div className="mx-auto max-w-7xl px-5">
          <PageHero
            eyebrow="Contact"
            title="Tell Me the Web Problem You Need Solved."
            description="Send a project brief, role inquiry, agency collaboration request or direct client message with the current issue, goal, platform, timeline and required outcome."
            image="/images/contact-pricing.webp"
            imageAlt="Premium contact consultation visual"
            label="Available for Laravel, WordPress, Shopify, dashboards, ecommerce, API, ERP, SEO and speed problem solving."
            visualClassName="hidden md:block"
          />
          <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-emerald/20 bg-emerald/8 px-5 py-4 light:border-emerald-600/20 light:bg-emerald-50">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-70 light:bg-emerald-500" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald light:bg-emerald-500" />
            </span>
            <p className="text-sm font-semibold text-emerald light:text-emerald-700">Currently available for new projects</p>
            <span className="hidden text-silver/30 light:text-slate-300 sm:block">|</span>
            <span className="flex items-center gap-2 text-sm text-silver/62 light:text-slate-500">
              <Clock size={14} /> Usually replies within 4 hours
            </span>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            <ContactForm />
            <aside className="mobile-rail order-first grid gap-4 lg:order-none lg:block lg:space-y-4">
              <a className="premium-card glass group flex items-center gap-4 rounded-2xl p-4 md:gap-5 md:p-5" href="https://wa.me/971542435418">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-emerald/20 bg-emerald/10 text-emerald transition group-hover:scale-105 md:h-14 md:w-14"><MessageCircle /></span>
                <span><strong className="block text-base text-white light:text-slate-950 md:text-lg">WhatsApp</strong><span className="text-sm text-silver/70 light:text-slate-600">{profile.whatsapp}</span></span>
              </a>
              <a className="premium-card glass group flex items-center gap-4 rounded-2xl p-4 md:gap-5 md:p-5" href={`mailto:${profile.email}`}>
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan/20 bg-cyan/10 text-cyan transition group-hover:scale-105 md:h-14 md:w-14"><Mail /></span>
                <span><strong className="block text-base text-white light:text-slate-950 md:text-lg">Email</strong><span className="text-sm text-silver/70 light:text-slate-600">{profile.email}</span></span>
              </a>
              <a className="premium-card glass group flex items-center gap-4 rounded-2xl p-4 md:gap-5 md:p-5" href={profile.linkedin} target="_blank" rel="noreferrer">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-violet/20 bg-violet/10 text-violet transition group-hover:scale-105 md:h-14 md:w-14"><Linkedin /></span>
                <span><strong className="block text-base text-white light:text-slate-950 md:text-lg">LinkedIn</strong><span className="text-sm text-silver/70 light:text-slate-600">Connect with Anas</span></span>
              </a>
              <div className="premium-card glass flex items-center gap-4 rounded-2xl p-4 md:gap-5 md:p-5">
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan/20 bg-cyan/10 text-cyan md:h-14 md:w-14"><MapPin /></span>
                <span><strong className="block text-base text-white light:text-slate-950 md:text-lg">Dubai, UAE</strong><span className="text-sm text-emerald">Available for projects</span></span>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="section-pad pt-0">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="FAQs" title="What clients ask before sending the first message." />
          <FAQ items={contactFaqItems} />
        </div>
      </section>
      <CTASection title="Ready to fix the problem properly?" text="Send the project details, desired outcome, timeline, platform, and current blockers. I’ll respond with practical direction, not generic promises." />
    </>
  );
}
