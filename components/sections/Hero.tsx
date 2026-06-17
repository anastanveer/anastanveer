"use client";

import Image from "next/image";
import { Download, Star } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BrandIcon } from "@/components/ui/BrandIcon";

const techChips = [
  { label: "Laravel", icon: "laravel" as const },
  { label: "React / Next.js", icon: "react" as const },
  { label: "WordPress", icon: "wordpress" as const },
  { label: "Shopify", icon: "shopify" as const }
];

const heroStats = [
  { value: 7, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: " Markets", label: "UAE / UK / Canada" }
];

// Cinematic immersive hero: full-bleed AI visual behind the content with layered
// scrims for readability. Dark by design in both themes (premium dark hero over a
// light/dark body). No animation on the LCP headline to protect Core Web Vitals.
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
      {/* Full-bleed background image (LCP) */}
      <Image
        src="/images/anas-hero-ai-1600.webp"
        alt="Full-stack developer command center with holographic dashboards overlooking the Dubai skyline at night"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      {/* Readability scrims */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/25 to-ink/55" />
      {/* Accent glows */}
      <div className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-80 w-80 rounded-full bg-cyan/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-10 top-10 -z-10 h-72 w-72 rounded-full bg-violet/15 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 pt-28 md:pt-32">
        <div className="max-w-2xl">
          {/* eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-medium text-cyan shadow-glow backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            Available for new projects · Dubai, UAE
          </div>

          {/* name */}
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-px w-8 bg-gradient-to-r from-cyan to-violet" aria-hidden="true" />
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-white/80">Anas Tanveer</p>
          </div>

          {/* headline */}
          <h1 className="max-w-[16ch] font-display text-[2.7rem] font-bold leading-[1.0] tracking-[-0.015em] text-white min-[430px]:text-5xl lg:text-6xl xl:text-[4.4rem]">
            I Build Web Systems That Solve{" "}
            <span className="premium-text">Real Business Problems</span> in Dubai
          </h1>

          {/* description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-silver/85 md:text-lg md:leading-8">
            Full-stack Laravel, WordPress, Shopify and Next.js builds — fast, SEO-ready platforms,
            dashboards and stores engineered around real workflow and conversion problems.
          </p>

          {/* tech chips */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {techChips.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-sm font-medium text-silver/85 backdrop-blur-md transition hover:border-cyan/40 hover:text-white"
              >
                <BrandIcon name={item.icon} className="h-[18px] w-[18px] rounded-sm" />
                {item.label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticButton href="/work">View Portfolio</MagneticButton>
            <MagneticButton href="/contact" variant="secondary">Get a Free Quote</MagneticButton>
            <a
              href="/files/anas-tanveer-web-developer-cv.pdf"
              download
              className="inline-flex items-center gap-2 px-2 text-sm font-medium text-cyan transition hover:text-white"
            >
              <Download size={15} /> Download CV
            </a>
          </div>
          <p className="mt-3 text-sm text-silver/60">
            or{" "}
            <a
              href="https://wa.me/971542435418?text=Hi%20Anas%2C%20I%27d%20like%20to%20book%20a%20free%2020-min%20discovery%20call."
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-emerald underline-offset-2 hover:underline"
            >
              book a free 20-min discovery call on WhatsApp
            </a>
          </p>
        </div>

        {/* Stats strip */}
        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-white/12 pt-6">
          {heroStats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-2xl font-bold leading-none text-white sm:text-3xl">
                <CountUp value={s.value} suffix={s.suffix} duration={1400} />
              </p>
              <p className="mt-1.5 text-xs text-silver/60">{s.label}</p>
            </div>
          ))}
          <div className="flex items-center gap-2.5">
            <div className="flex" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div>
              <p className="font-display text-2xl font-bold leading-none text-white sm:text-3xl">4.9</p>
              <p className="mt-1.5 text-xs text-silver/60">Client Rating</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <span className="rounded-full border border-emerald/30 bg-emerald/10 px-3 py-1.5 text-xs font-semibold text-emerald">
              UK Registered Business
            </span>
            <span className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-silver/80">
              Replies within 4 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
