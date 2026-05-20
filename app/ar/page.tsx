import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl, siteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "مطور ويب في دبي | لارافيل، ووردبريس، شوبيفاي — أنس تنوير",
  description: "مطور ويب محترف في دبي متخصص في لارافيل، ووردبريس، شوبيفاي، لوحات التحكم، تكامل API، تحسين السرعة وتطوير المتاجر الإلكترونية للشركات في الإمارات.",
  alternates: {
    canonical: absoluteUrl("/ar"),
    languages: {
      ar: absoluteUrl("/ar"),
      en: siteUrl,
      "x-default": siteUrl,
    },
  },
  openGraph: {
    title: "مطور ويب في دبي | أنس تنوير",
    description: "مطور ويب محترف في دبي متخصص في لارافيل، ووردبريس، شوبيفاي ولوحات التحكم للشركات في الإمارات.",
    url: absoluteUrl("/ar"),
    locale: "ar_AE",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": absoluteUrl("/ar#webpage"),
  url: absoluteUrl("/ar"),
  name: "مطور ويب في دبي — أنس تنوير",
  inLanguage: "ar",
  about: { "@id": absoluteUrl("/#person") },
  isPartOf: { "@id": absoluteUrl("/#website") },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "مطور ويب في دبي", item: absoluteUrl("/ar") },
    ],
  },
};

const services = [
  { ar: "تطوير لارافيل", en: "Laravel Developer Dubai", href: "/laravel-developer-dubai" },
  { ar: "تطوير ووردبريس", en: "WordPress Developer Dubai", href: "/wordpress-developer-dubai" },
  { ar: "تطوير شوبيفاي", en: "Shopify Developer Dubai", href: "/shopify-developer-dubai" },
  { ar: "لوحات تحكم الأعمال", en: "Dashboard Development", href: "/dashboard-development-dubai" },
  { ar: "تطوير ERP وCRM", en: "ERP Development UAE", href: "/erp-development-uae" },
  { ar: "تكامل API", en: "API Integration Services", href: "/api-integration-services" },
  { ar: "تحسين سرعة الموقع", en: "Speed Optimization Dubai", href: "/website-speed-optimization-dubai" },
  { ar: "تطوير المتاجر الإلكترونية", en: "Ecommerce Development Dubai", href: "/ecommerce-website-development-dubai" },
];

const features = [
  "أكثر من 7 سنوات من الخبرة في تطوير الويب",
  "متخصص في مشاريع الإمارات والمملكة المتحدة وكندا",
  "تسليم في الوقت المحدد مع تواصل واضح",
  "حلول مخصصة تناسب احتياجات عملك",
  "دعم ما بعد الإطلاق والصيانة المستمرة",
  "خبرة في بوابات الدفع الإماراتية (تيلر، بايتابس، ستريب)",
];

export default function ArabicLandingPage() {
  return (
    <>
      <JsonLd data={jsonLd} id="ar-page-json-ld" />

      <main dir="rtl" lang="ar" className="page-start section-pad">
        <div className="mx-auto max-w-5xl px-5">

          {/* Language switcher */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-silver/60 transition hover:text-cyan light:text-slate-500 light:hover:text-blue-600"
            >
              <ArrowLeft size={15} />
              English version
            </Link>
            <span className="rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">
              العربية
            </span>
          </div>

          {/* Hero */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 shadow-[0_4px_60px_rgba(0,0,0,0.25)] light:border-slate-200 light:bg-white light:shadow-xl md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">
              مطور ويب — دبي، الإمارات العربية المتحدة
            </p>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-white light:text-slate-950 md:text-5xl">
              مطور ويب متكامل في دبي<br />
              <span className="text-cyan">لارافيل · ووردبريس · شوبيفاي</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-silver/76 light:text-slate-600">
              أنس تنوير مطور ويب متكامل مقيم في دبي، يتخصص في بناء مواقع ويب احترافية، منصات أعمال مخصصة،
              متاجر إلكترونية، لوحات تحكم، وأنظمة ERP وCRM للشركات في الإمارات والمملكة المتحدة وكندا والعالم.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/971542435418"
                className="inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90 light:bg-emerald-500 light:text-white"
              >
                <MessageCircle size={16} />
                تواصل عبر واتساب
              </a>
              <a
                href="mailto:info@anastanveer.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan/35 hover:text-cyan light:border-slate-200 light:bg-white light:text-slate-700"
              >
                <Mail size={16} />
                info@anastanveer.com
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: "+7", label: "سنوات خبرة" },
              { value: "+100", label: "مشروع مُنجز" },
              { value: "4.9★", label: "تقييم العملاء" },
              { value: "UAE/UK/CA", label: "أسواق عالمية" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 text-center light:border-slate-100 light:bg-slate-50">
                <p className="font-display text-2xl font-bold text-cyan light:text-blue-600">{s.value}</p>
                <p className="mt-1 text-xs text-silver/60 light:text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Services grid */}
          <div className="mt-8">
            <h2 className="mb-5 font-display text-2xl font-semibold text-white light:text-slate-950">
              خدمات تطوير الويب
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan/30 light:border-slate-100 light:bg-white"
                >
                  <p className="font-display text-base font-semibold text-white group-hover:text-cyan light:text-slate-950 light:group-hover:text-blue-600">
                    {s.ar}
                  </p>
                  <p className="mt-1 text-xs text-silver/55 light:text-slate-500">{s.en}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Why choose */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.025] p-6 light:border-slate-200 light:bg-white md:p-8">
            <h2 className="mb-5 font-display text-xl font-semibold text-white light:text-slate-950">
              لماذا تختار أنس تنوير لمشروعك في الإمارات؟
            </h2>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm leading-7 text-silver/72 light:text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className="mt-6 rounded-2xl border border-white/8 bg-white/[0.02] p-6 light:border-slate-100 light:bg-slate-50">
            <h2 className="mb-3 font-display text-lg font-semibold text-white light:text-slate-950">
              من هو أنس تنوير؟
            </h2>
            <p className="text-sm leading-8 text-silver/72 light:text-slate-600">
              أنس تنوير مطور ويب متكامل مقيم في دبي بخبرة تزيد على 7 سنوات، مرتبط بشركة ARS Developer Ltd
              في المملكة المتحدة وشركة TorontoBytes في كندا. يتخصص في بناء تطبيقات لارافيل، مواقع ووردبريس،
              متاجر شوبيفاي، لوحات تحكم الأعمال، أنظمة ERP وCRM، وتكاملات API لعملاء في الإمارات والمملكة
              المتحدة وكندا وحول العالم.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["لارافيل", "PHP", "React", "Next.js", "ووردبريس", "شوبيفاي", "MySQL", "REST API", "Vue.js", "TypeScript"].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-silver/72 light:border-slate-200 light:bg-white light:text-slate-700">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 rounded-3xl border border-cyan/20 bg-cyan/8 p-8 text-center light:border-blue-200 light:bg-blue-50">
            <h2 className="font-display text-2xl font-semibold text-white light:text-slate-950">
              هل لديك مشروع في الإمارات؟
            </h2>
            <p className="mt-3 text-sm leading-7 text-silver/72 light:text-slate-600">
              أرسل لي وصفاً للمشكلة، المنصة الحالية، الهدف، والميزانية. سأراجعها وأرد بخطة عملية واضحة.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/971542435418"
                className="inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                <MessageCircle size={16} />
                واتساب: +971 54 243 5418
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan/35 light:border-slate-200 light:bg-white light:text-slate-700"
              >
                نموذج التواصل
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
