"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Globe2,
  MapPin,
  Sparkles,
  Star,
  Workflow
} from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BrandIcon } from "@/components/ui/BrandIcon";

const techChips = [
  { label: "Laravel", icon: "laravel" as const },
  { label: "React / Next.js", icon: "react" as const },
  { label: "WordPress", icon: "wordpress" as const },
  { label: "Shopify", icon: "shopify" as const }
];

const trustItems = ["Dubai Based", "7+ Years Experience", "100+ Projects", "UK Registered"];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-24 md:pt-28">
      {/* Ambient depth */}
      <div className="hero-glow-a absolute left-1/2 top-10 -z-10 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-cyan/10 blur-3xl light:bg-blue-300/24" />
      <div className="hero-glow-b absolute right-0 top-24 -z-10 h-[30rem] w-[30rem] rounded-full bg-violet/12 blur-3xl light:bg-violet-300/24" />
      <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-72 w-72 rounded-full bg-emerald/8 blur-[120px] light:bg-emerald-200/30" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] xl:gap-14">
        {/* ── LEFT ── */}
        <div className="min-w-0">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-medium text-cyan shadow-glow light:border-blue-500/25 light:bg-blue-50 light:text-blue-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            <Sparkles size={15} /> Problem-solving developer profile
          </div>

          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-px w-8 bg-gradient-to-r from-cyan to-violet" aria-hidden="true" />
            <p className="font-display text-base font-semibold uppercase tracking-[0.16em] premium-text">Anas Tanveer</p>
          </div>

          <h1 className="max-w-[15ch] break-words font-display text-[2.6rem] font-bold leading-[1.02] tracking-[-0.01em] text-white min-[430px]:text-5xl lg:text-[3.7rem] light:text-slate-950">
            I Build Web Systems That Solve{" "}
            <span className="premium-text">Real Business Problems</span>
          </h1>

          <div className="mt-5 flex max-w-xl flex-wrap items-center gap-2">
            {techChips.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-sm font-medium text-silver/78 transition hover:border-cyan/30 hover:text-white light:border-slate-900/10 light:bg-white light:text-slate-700"
              >
                <BrandIcon name={item.icon} className="h-[18px] w-[18px] rounded-sm" />
                {item.label}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-xl border-l-2 border-cyan/40 pl-5 text-base leading-7 text-silver/82 md:text-lg md:leading-8 light:border-blue-500/40 light:text-slate-600">
            Faster Laravel platforms, WordPress websites, Shopify stores, dashboards and SEO-ready
            systems — built around real workflow and conversion problems, not templates.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <MagneticButton href="/work">View Portfolio</MagneticButton>
            <MagneticButton href="/contact" variant="secondary">Get a Free Quote</MagneticButton>
          </div>
          <p className="mt-3 text-sm text-silver/55 light:text-slate-500">
            or{" "}
            <a
              href="https://wa.me/971542435418?text=Hi%20Anas%2C%20I%27d%20like%20to%20book%20a%20free%2020-min%20discovery%20call."
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-emerald underline-offset-2 hover:underline light:text-emerald-600"
            >
              book a free 20-min discovery call on WhatsApp
            </a>
          </p>

          <div className="mt-5 inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 rounded-full border border-emerald/25 bg-emerald/10 px-4 py-2 text-sm font-semibold text-emerald light:border-emerald-600/25 light:bg-emerald-50 light:text-emerald-700">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-70 light:bg-emerald-500" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald light:bg-emerald-500" />
            </span>
            Available — Limited Spots This Quarter
            <span className="text-silver/55 light:text-slate-500">·</span>
            <span className="font-normal text-silver/65 light:text-slate-500">Replies within 4 hours</span>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-silver/72 light:text-slate-600">
            {trustItems.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_16px_rgba(38,217,255,0.75)]" />
                {badge}
              </span>
            ))}
            <a
              href="/files/anas-tanveer-web-developer-cv.pdf"
              download
              className="inline-flex items-center gap-2 font-medium text-cyan hover:text-white light:hover:text-blue-700"
            >
              <Download size={15} /> Download CV
            </a>
          </div>
        </div>

        {/* ── RIGHT (visual) ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-w-0 lg:pl-2"
        >
          <div className="hero-frame rounded-[1.25rem]">
            <div className="relative z-[1] overflow-hidden rounded-[1.25rem]">
              <Image
                src="/images/anas-hero-ai-1100.webp"
                alt="Full-stack developer command center with holographic dashboards overlooking the Dubai skyline at night"
                width={1100}
                height={614}
                priority
                fetchPriority="high"
                className="h-[19rem] w-full object-cover object-center sm:h-[25rem] lg:h-[31rem] xl:h-[34rem]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/78 via-black/8 to-black/30 light:from-slate-950/40 light:via-transparent light:to-slate-950/10" />

              {/* top tag */}
              <div className="shimmer-badge absolute left-3 right-3 top-3 overflow-hidden rounded-full border border-white/18 bg-black/45 px-3 py-2 text-white shadow-glow backdrop-blur-xl light:border-white/50 light:bg-slate-950/70 sm:left-5 sm:right-auto sm:top-5 sm:px-4 sm:py-2.5">
                <span className="relative z-[1] flex items-center gap-2 text-xs font-semibold sm:text-sm">
                  <Workflow size={16} className="text-cyan" />
                  Laravel • Dashboards • Ecommerce • SEO
                </span>
              </div>

              {/* bottom stats */}
              <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/14 bg-black/55 p-3 backdrop-blur-xl light:border-white/30 light:bg-slate-950/70 sm:bottom-5 sm:left-5 sm:right-5 sm:p-4 sm:shadow-premium">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { num: 7, suffix: "+", label: "Years Experience" },
                    { num: 100, suffix: "+", label: "Projects Delivered" },
                    { num: 3, suffix: " Markets", label: "UAE / UK / Canada" }
                  ].map(({ num, suffix, label }) => (
                    <div key={label}>
                      <p className="font-display text-base font-bold leading-tight text-white sm:text-xl">
                        <CountUp value={num} suffix={suffix} duration={1400} />
                      </p>
                      <p className="mt-1 line-clamp-1 text-[10px] text-white/68 sm:text-xs">{label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex w-max max-w-full items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-3 py-1.5 text-xs font-semibold text-cyan sm:mt-4 sm:py-2">
                  <MapPin size={15} />
                  Dubai, UAE
                  <span className="hidden items-center gap-1 text-white/58 sm:inline-flex">
                    <Globe2 size={13} /> UAE / UK / Canada
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating glass HUD chips (desktop) — add depth */}
          <div className="absolute -top-5 right-10 z-20 hidden items-center gap-2.5 rounded-2xl border border-white/15 bg-black/65 px-4 py-2.5 shadow-premium backdrop-blur-xl lg:flex light:border-slate-200 light:bg-white/90">
            <div className="flex" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div>
              <p className="font-display text-sm font-bold leading-none text-white light:text-slate-900">4.9/5</p>
              <p className="mt-1 text-[10px] leading-none text-white/60 light:text-slate-500">Client rating</p>
            </div>
          </div>

          <div className="absolute -left-5 top-1/2 z-20 hidden -translate-y-1/2 items-center gap-2.5 rounded-2xl border border-white/15 bg-black/65 px-4 py-2.5 shadow-premium backdrop-blur-xl lg:flex light:border-slate-200 light:bg-white/90">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald/15 text-emerald">
              <ArrowUpRight size={18} />
            </span>
            <div>
              <p className="font-display text-sm font-bold leading-none text-white light:text-slate-900">Full-Stack</p>
              <p className="mt-1 text-[10px] leading-none text-white/60 light:text-slate-500">Frontend + Backend</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
