"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

// Entrance animation: transform/opacity only (CLS-safe), one-shot (INP-safe). The
// LCP is the full-bleed background image, which renders instantly (not faded).
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } }
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } }
};

// Cinematic immersive hero: full-bleed AI visual with a slow Ken Burns zoom,
// layered scrims for readability, and a staggered content entrance.
export function Hero() {
  // The poster image is the LCP and the mobile/reduced-motion fallback. The
  // cinematic video only mounts on a desktop fine-pointer device with motion
  // allowed — so mobile never downloads it (perf + battery safe).
  const [showVideo, setShowVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const okMotion = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (okMotion && finePointer) setShowVideo(true);
  }, []);

  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
      {/* Full-bleed background image (LCP + poster + mobile fallback) with slow zoom */}
      <Image
        src="/images/hero-ai-command-center.webp"
        alt="Futuristic full-stack developer command center with holographic dashboards overlooking the Dubai skyline at night"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="hero-kenburns -z-20 object-cover object-center"
      />
      {/* Desktop-only cinematic video that fades in over the poster once playing */}
      {showVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onPlaying={() => setVideoReady(true)}
          className={`absolute inset-0 -z-20 h-full w-full object-cover object-center transition-opacity duration-[1200ms] ease-out ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/videos/hero-command-center.webm" type="video/webm" />
          <source src="/videos/hero-command-center.mp4" type="video/mp4" />
        </video>
      )}
      {/* Readability scrims */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/25 to-ink/55" />
      {/* Accent glows */}
      <div className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-80 w-80 rounded-full bg-cyan/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-10 top-10 -z-10 h-72 w-72 rounded-full bg-violet/15 blur-[120px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-7xl px-5 pb-12 pt-28 md:pt-32"
      >
        <div className="max-w-2xl">
          {/* eyebrow */}
          <motion.div
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-medium text-cyan shadow-glow backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            Available for new projects · Dubai, UAE
          </motion.div>

          {/* name */}
          <motion.div variants={item} className="mb-4 flex items-center gap-2.5">
            <span className="h-px w-8 bg-gradient-to-r from-cyan to-violet" aria-hidden="true" />
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-white/80">Anas Tanveer</p>
          </motion.div>

          {/* headline */}
          <motion.h1
            variants={item}
            className="max-w-[16ch] font-display text-[2.7rem] font-bold leading-[1.0] tracking-[-0.015em] text-white min-[430px]:text-5xl lg:text-6xl xl:text-[4.4rem]"
          >
            I Build Web Systems That Solve{" "}
            <span className="premium-text">Real Business Problems</span> in Dubai
          </motion.h1>

          {/* description */}
          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-7 text-silver/85 md:text-lg md:leading-8">
            Full-stack Laravel, WordPress, Shopify and Next.js builds — fast, SEO-ready platforms,
            dashboards and stores engineered around real workflow and conversion problems.
          </motion.p>

          {/* tech chips */}
          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-2">
            {techChips.map((tech) => (
              <span
                key={tech.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-sm font-medium text-silver/85 backdrop-blur-md transition hover:border-cyan/40 hover:text-white"
              >
                <BrandIcon name={tech.icon} className="h-[18px] w-[18px] rounded-sm" />
                {tech.label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticButton href="/work">View Portfolio</MagneticButton>
            <MagneticButton href="/contact" variant="secondary">Get a Free Quote</MagneticButton>
            <a
              href="/files/anas-tanveer-web-developer-cv.pdf"
              download
              className="inline-flex items-center gap-2 px-2 text-sm font-medium text-cyan transition hover:text-white"
            >
              <Download size={15} /> Download CV
            </a>
          </motion.div>
          <motion.p variants={item} className="mt-3 text-sm text-silver/60">
            or{" "}
            <a
              href="https://wa.me/971542435418?text=Hi%20Anas%2C%20I%27d%20like%20to%20book%20a%20free%2020-min%20discovery%20call."
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-emerald underline-offset-2 hover:underline"
            >
              book a free 20-min discovery call on WhatsApp
            </a>
          </motion.p>
        </div>

        {/* Stats strip — premium glass card (2x2) on mobile, inline border-top on desktop */}
        <motion.div
          variants={item}
          className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 rounded-2xl border border-white/12 bg-white/[0.05] p-5 shadow-glow backdrop-blur-md sm:mt-12 sm:flex sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-5 sm:rounded-none sm:border-0 sm:border-t sm:border-white/12 sm:bg-transparent sm:p-0 sm:pt-6 sm:shadow-none sm:backdrop-blur-none"
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
}
