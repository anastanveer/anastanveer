import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Mail, MessageCircle, ArrowUpRight, Star, Clock, Users, Zap, Shield } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl, siteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "مطور ويب في دبي | لارافيل، ووردبريس، شوبيفاي — أنس تنوير",
  description: "مطور ويب محترف في دبي متخصص في لارافيل، ووردبريس، شوبيفاي، لوحات التحكم، تكامل API، تحسين السرعة وتطوير المتاجر الإلكترونية للشركات في الإمارات.",
  keywords: ["مطور ويب دبي", "مطور لارافيل دبي", "مطور ووردبريس دبي", "مطور شوبيفاي دبي", "تطوير مواقع الإمارات", "مطور ويب الإمارات", "تطوير تطبيقات الويب دبي", "مطور PHP دبي"],
  robots: { index: true, follow: true },
  alternates: {
    canonical: absoluteUrl("/ar"),
    languages: {
      "ar-AE": absoluteUrl("/ar"),
      "en-AE": siteUrl,
      "en-US": siteUrl,
      "en-GB": siteUrl,
      "x-default": siteUrl,
    },
  },
  openGraph: {
    title: "مطور ويب في دبي | أنس تنوير — لارافيل، ووردبريس، شوبيفاي",
    description: "مطور ويب محترف في دبي متخصص في لارافيل، ووردبريس، شوبيفاي ولوحات التحكم للشركات في الإمارات.",
    url: absoluteUrl("/ar"),
    siteName: "أنس تنوير",
    locale: "ar_AE",
    type: "website",
    images: [{ url: absoluteUrl("/images/anas-premium-hero.webp"), width: 1400, height: 788, alt: "أنس تنوير — مطور ويب دبي" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "مطور ويب في دبي | أنس تنوير",
    description: "مطور ويب محترف في دبي — لارافيل، ووردبريس، شوبيفاي، لوحات التحكم، API.",
    images: [absoluteUrl("/images/anas-premium-hero.webp")]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": absoluteUrl("/ar#webpage"),
      url: absoluteUrl("/ar"),
      name: "مطور ويب في دبي — أنس تنوير | لارافيل، ووردبريس، شوبيفاي",
      inLanguage: "ar",
      about: { "@id": absoluteUrl("/#person") },
      author: { "@id": absoluteUrl("/#person") },
      isPartOf: { "@id": absoluteUrl("/#website") },
      datePublished: "2024-09-01",
      dateModified: "2025-05-22",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/anas-premium-hero.webp"),
        width: 1400,
        height: 788
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2"]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": absoluteUrl("/ar#breadcrumb"),
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "مطور ويب في دبي", item: absoluteUrl("/ar") },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": absoluteUrl("/ar#service-ar"),
      name: "أنس تنوير — مطور ويب دبي",
      description: "مطور ويب متكامل في دبي يتخصص في لارافيل، ووردبريس، شوبيفاي، لوحات التحكم، أنظمة ERP وCRM، تكامل API وتطوير المتاجر الإلكترونية للشركات في الإمارات والمملكة المتحدة وكندا.",
      url: absoluteUrl("/ar"),
      inLanguage: "ar",
      provider: { "@id": absoluteUrl("/#person") },
      areaServed: [
        { "@type": "City", name: "دبي" },
        { "@type": "City", name: "أبوظبي" },
        { "@type": "City", name: "الشارقة" },
        { "@type": "Country", name: "الإمارات العربية المتحدة" }
      ],
      availableLanguage: [
        { "@type": "Language", name: "Arabic" },
        { "@type": "Language", name: "English" }
      ],
      serviceType: ["تطوير لارافيل", "تطوير ووردبريس", "تطوير شوبيفاي", "لوحات تحكم الأعمال", "تطوير ERP وCRM", "تكامل API"]
    },
    {
      "@type": "FAQPage",
      "@id": absoluteUrl("/ar#faq"),
      inLanguage: "ar",
      mainEntity: [
        {
          "@type": "Question",
          name: "كم تكلفة تطوير موقع ويب في دبي؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "تتراوح تكلفة تطوير المواقع الإلكترونية بين 500 دولار للمواقع البسيطة و5000 دولار أو أكثر للمنصات الكاملة مع لوحات التحكم وتكامل API. تواصل معي لأحدد التكلفة الدقيقة بناءً على متطلبات مشروعك."
          }
        },
        {
          "@type": "Question",
          name: "هل تعمل مع شركات في الإمارات العربية المتحدة؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نعم، أعمل مع شركات في دبي، أبوظبي، الشارقة وسائر إمارات الدولة. لديّ خبرة في بوابات الدفع الإماراتية مثل تيلر وبايتابس وسترايب."
          }
        },
        {
          "@type": "Question",
          name: "ما هي التقنيات التي تتخصص فيها؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "أتخصص في لارافيل، PHP، React، Next.js، ووردبريس، شوبيفاي، MySQL، REST API، Vue.js وTypeScript. بناءً على متطلباتك أختار المنصة الأنسب لمشروعك."
          }
        },
        {
          "@type": "Question",
          name: "كم يستغرق تطوير الموقع الإلكتروني؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "يستغرق الموقع البسيط 1-2 أسبوع، والمنصات المتوسطة 3-6 أسابيع، والأنظمة الكاملة مع ERP وCRM من 6 إلى 12 أسبوع. أُحدد جدولاً زمنياً دقيقاً بعد مراجعة متطلباتك."
          }
        },
        {
          "@type": "Question",
          name: "هل تقدم خدمات الصيانة والدعم بعد الإطلاق؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نعم، أقدم خدمات الصيانة المستمرة، التحديثات الأمنية، وإضافة الميزات الجديدة لمشروعك بعد إطلاقه."
          }
        },
        {
          "@type": "Question",
          name: "هل يمكنك تحسين موقعي الحالي بدلاً من بناء موقع جديد؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "بالتأكيد. كثير من مشاريعي هي تحسين وتطوير مواقع قائمة — تحسين السرعة، إضافة ميزات، أو إعادة بناء أجزاء محددة دون تغيير كل شيء."
          }
        }
      ]
    }
  ]
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

const process = [
  {
    step: "01",
    title: "مراجعة المتطلبات",
    desc: "أرسل لي وصف المشكلة، المنصة الحالية، الهدف، والميزانية. أراجع كل شيء خلال 24 ساعة.",
    icon: MessageCircle,
  },
  {
    step: "02",
    title: "خطة عملية واضحة",
    desc: "أُحدد التقنية المناسبة، الجدول الزمني، التكلفة، وكل خطوة في المشروع بشفافية.",
    icon: Zap,
  },
  {
    step: "03",
    title: "التطوير والتسليم",
    desc: "أبني المشروع بكود نظيف، أختبره بالكامل، وأُسلّمه مع توثيق واضح وتدريب إذا لزم.",
    icon: Shield,
  },
  {
    step: "04",
    title: "الدعم المستمر",
    desc: "أوفر دعماً ما بعد الإطلاق، تحديثات، وصيانة لضمان استمرارية عمل مشروعك بكفاءة.",
    icon: Users,
  },
];

const projects = [
  {
    title: "منصة تداول للشركات المالية",
    desc: "منصة تداول كاملة مع لوحة تحكم متقدمة، تكامل مع بورصات المال، وإدارة المحافظ الاستثمارية.",
    tech: ["لارافيل", "Vue.js", "MySQL", "API"],
    result: "معالجة آلاف العمليات يومياً",
    href: "/case-studies/trading-platform-prop-firm-dubai",
  },
  {
    title: "نظام ERP لإدارة العمليات",
    desc: "نظام ERP متكامل لإدارة المخزون، الموارد البشرية، المحاسبة، والمشتريات لشركة إماراتية.",
    tech: ["لارافيل", "PHP", "MySQL", "REST API"],
    result: "تقليل وقت العمليات بنسبة 60%",
    href: "/case-studies/erp-operations-workflow-system-dubai",
  },
  {
    title: "متجر شوبيفاي مع تحسين التحويل",
    desc: "تحسين منطق الأحجام والفلترة في متجر شوبيفاي لزيادة نسبة التحويل وتجربة المستخدم.",
    tech: ["شوبيفاي", "Liquid", "JavaScript"],
    result: "زيادة التحويلات بنسبة 35%",
    href: "/case-studies/shopify-conversion-optimization-size-mapping",
  },
];

const faqs = [
  {
    q: "كم تكلفة تطوير موقع ويب في دبي؟",
    a: "تتراوح التكلفة بين 500 دولار للمواقع البسيطة و5000 دولار أو أكثر للمنصات الكاملة. تواصل معي لأُحدد التكلفة الدقيقة بناءً على متطلبات مشروعك.",
  },
  {
    q: "هل تعمل مع شركات في الإمارات العربية المتحدة؟",
    a: "نعم، أعمل مع شركات في دبي، أبوظبي، الشارقة وجميع إمارات الدولة. لديّ خبرة في بوابات الدفع الإماراتية مثل تيلر وبايتابس.",
  },
  {
    q: "كم يستغرق تطوير الموقع الإلكتروني؟",
    a: "المواقع البسيطة 1-2 أسبوع، المنصات المتوسطة 3-6 أسابيع، الأنظمة الكاملة من 6 إلى 12 أسبوع. أُحدد الجدول الزمني الدقيق بعد مراجعة متطلباتك.",
  },
  {
    q: "هل تقدم خدمات الصيانة والدعم بعد الإطلاق؟",
    a: "نعم، أقدم خدمات الصيانة المستمرة، التحديثات الأمنية، وإضافة المميزات الجديدة لمشروعك بعد إطلاقه.",
  },
  {
    q: "هل يمكنك تحسين موقعي الحالي بدلاً من بناء موقع جديد؟",
    a: "بالتأكيد. كثير من مشاريعي هي تحسين وتطوير مواقع قائمة — تحسين السرعة، إضافة مميزات، أو إعادة بناء أجزاء محددة دون تغيير كل شيء.",
  },
];

const reviews = [
  { author: "Steve Barlow", location: "المملكة المتحدة", body: "مشروع رائع من أنس. يفهم المتطلبات، يُقدّم نتائج ممتازة، ويُنجز العمل بسرعة وجودة عالية.", rating: 5 },
  { author: "Said B.", location: "فرنسا", body: "التعاون الثاني مع أنس — سريع، دقيق وعالي الجودة. نتائج ممتازة تُسلَّم في الوقت المحدد.", rating: 5 },
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
          <div className="mt-10">
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

          {/* How it works — process */}
          <div className="mt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">كيف أعمل</p>
            <h2 className="mt-2 mb-6 font-display text-2xl font-semibold text-white light:text-slate-950">
              من فكرتك إلى موقع يعمل — 4 خطوات واضحة
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {process.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.step} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 light:border-slate-200 light:bg-white">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="font-display text-3xl font-bold text-cyan/30 light:text-blue-200">{p.step}</span>
                      <Icon size={20} className="text-cyan light:text-blue-600" />
                    </div>
                    <p className="mb-2 font-display text-base font-semibold text-white light:text-slate-950">{p.title}</p>
                    <p className="text-sm leading-7 text-silver/65 light:text-slate-600">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Projects */}
          <div className="mt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">مشاريع منجزة</p>
            <h2 className="mt-2 mb-6 font-display text-2xl font-semibold text-white light:text-slate-950">
              أمثلة حقيقية من مشاريع سابقة
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              {projects.map((proj) => (
                <Link
                  key={proj.href}
                  href={proj.href}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-cyan/25 light:border-slate-200 light:bg-white"
                >
                  <p className="font-display text-base font-semibold text-white group-hover:text-cyan light:text-slate-950 light:group-hover:text-blue-600">
                    {proj.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-silver/65 light:text-slate-600">{proj.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-silver/60 light:border-slate-200 light:bg-slate-50 light:text-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 rounded-xl border border-emerald/20 bg-emerald/8 px-3 py-2 light:border-emerald-100 light:bg-emerald-50">
                    <CheckCircle2 size={13} className="shrink-0 text-emerald light:text-emerald-600" />
                    <p className="text-xs font-medium text-emerald/85 light:text-emerald-700">{proj.result}</p>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-cyan/70 group-hover:text-cyan light:text-blue-600">
                    اقرأ تفاصيل المشروع <ArrowUpRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Client reviews */}
          <div className="mt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">آراء العملاء</p>
            <h2 className="mt-2 mb-6 font-display text-2xl font-semibold text-white light:text-slate-950">
              ماذا يقول العملاء؟
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {reviews.map((r) => (
                <div key={r.author} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 light:border-slate-200 light:bg-white">
                  <div className="mb-3 flex items-center gap-1">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm leading-7 text-silver/72 light:text-slate-600">"{r.body}"</p>
                  <p className="mt-3 text-xs font-semibold text-white light:text-slate-950">{r.author}</p>
                  <p className="text-[11px] text-silver/45 light:text-slate-400">{r.location} · Fiverr</p>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link href="/testimonials" className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan/75 hover:text-cyan light:text-blue-600">
                عرض جميع التقييمات <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>

          {/* Why choose */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.025] p-6 light:border-slate-200 light:bg-white md:p-8">
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

          {/* FAQ */}
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">أسئلة شائعة</p>
            <h2 className="mt-2 mb-6 font-display text-2xl font-semibold text-white light:text-slate-950">
              أسئلة شائعة حول تطوير المواقع في دبي
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 light:border-slate-200 light:bg-white">
                  <p className="mb-2 font-display text-base font-semibold text-white light:text-slate-950">{faq.q}</p>
                  <p className="text-sm leading-7 text-silver/65 light:text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* About */}
          <div className="mt-8 rounded-2xl border border-white/8 bg-white/[0.02] p-6 light:border-slate-100 light:bg-slate-50">
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
            <div className="mb-2 flex justify-center">
              <Clock size={28} className="text-cyan light:text-blue-600" />
            </div>
            <h2 className="font-display text-2xl font-semibold text-white light:text-slate-950">
              هل لديك مشروع في الإمارات؟
            </h2>
            <p className="mt-3 text-sm leading-7 text-silver/72 light:text-slate-600">
              أرسل لي وصفاً للمشكلة، المنصة الحالية، الهدف، والميزانية.<br />
              سأراجعها وأرد بخطة عملية واضحة خلال 24 ساعة.
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
