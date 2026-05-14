"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend",
    pct: 93,
    color: ["#26d9ff", "#8b5cf6"],
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"]
  },
  {
    label: "Backend",
    pct: 96,
    color: ["#8b5cf6", "#34d399"],
    items: ["Laravel", "PHP", "REST APIs", "Livewire", "Authentication", "Queues"]
  },
  {
    label: "CMS & Ecommerce",
    pct: 91,
    color: ["#34d399", "#26d9ff"],
    items: ["WordPress", "Shopify", "Liquid", "WooCommerce", "ACF", "Elementor"]
  },
  {
    label: "Database",
    pct: 87,
    color: ["#f59e0b", "#ef4444"],
    items: ["MySQL", "PostgreSQL", "Database Design", "Reports", "Indexes", "Data Imports"]
  },
  {
    label: "SEO & Performance",
    pct: 89,
    color: ["#26d9ff", "#34d399"],
    items: ["Core Web Vitals", "Schema", "Metadata", "Caching", "Image Optimization", "Lighthouse"]
  },
  {
    label: "Tools",
    pct: 84,
    color: ["#8b5cf6", "#f59e0b"],
    items: ["Git", "Figma", "Vercel", "cPanel", "Cloud Hosting", "Analytics"]
  }
];

const R = 54;
const C = 2 * Math.PI * R;

function Ring({
  pct,
  color,
  label,
  items,
  index
}: {
  pct: number;
  color: [string, string];
  label: string;
  items: string[];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const gradId = `ring-grad-${index}`;

  const offset = C - (inView ? (pct / 100) * C : 0);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="premium-card glass group flex flex-col items-center rounded-2xl p-6 text-center light:bg-white/90 light:border-slate-200"
    >
      {/* SVG Ring */}
      <div className="relative">
        <svg width="130" height="130" viewBox="0 0 130 130" className="-rotate-90">
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={color[0]} />
              <stop offset="100%" stopColor={color[1]} />
            </linearGradient>
          </defs>
          {/* Track */}
          <circle
            cx="65" cy="65" r={R}
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="9"
            className="light:stroke-slate-200"
          />
          {/* Progress */}
          <motion.circle
            cx="65" cy="65" r={R}
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth="9"
            strokeLinecap="round"
            strokeDasharray={C}
            initial={{ strokeDashoffset: C }}
            animate={{ strokeDashoffset: inView ? C - (pct / 100) * C : C }}
            transition={{ duration: 1.5, delay: index * 0.07 + 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ filter: `drop-shadow(0 0 8px ${color[0]}66)` }}
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="font-display text-3xl font-bold text-white light:text-slate-950"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.07 + 0.4 }}
          >
            <CountUp value={pct} inView={inView} delay={index * 0.07 + 0.2} />
            <span className="text-base" style={{ color: color[0] }}>%</span>
          </motion.span>
        </div>
      </div>

      {/* Label */}
      <p className="mt-3 font-display text-base font-semibold text-white light:text-slate-900">{label}</p>

      {/* Skill pills */}
      <div className="mt-4 flex flex-wrap justify-center gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs text-silver/70 transition group-hover:border-white/20 group-hover:text-silver/90 light:border-slate-200 light:bg-slate-50 light:text-slate-600"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function CountUp({ value, inView, delay }: { value: number; inView: boolean; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay }}
    >
      <motion.span>
        {inView ? <AnimatedNumber value={value} delay={delay} /> : "0"}
      </motion.span>
    </motion.span>
  );
}

function AnimatedNumber({ value, delay }: { value: number; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      onAnimationComplete={() => {
        if (!ref.current) return;
        const start = performance.now();
        const duration = 1400;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          if (ref.current) ref.current.textContent = String(Math.round(ease * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }}
    >
      0
    </motion.span>
  );
}

export function SkillsVisual() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((g, i) => (
        <Ring
          key={g.label}
          label={g.label}
          pct={g.pct}
          color={g.color as [string, string]}
          items={g.items}
          index={i}
        />
      ))}
    </div>
  );
}
