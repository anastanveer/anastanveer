"use client";

import { Star, RefreshCw } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { testimonials, type Testimonial } from "@/data/site";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => {
        const fill = Math.min(1, Math.max(0, rating - (i - 1)));
        return (
          <span key={i} className="relative inline-block">
            <Star size={13} className="text-white/15" fill="currentColor" />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <Star size={13} className="text-amber-400" fill="currentColor" />
            </span>
          </span>
        );
      })}
      <span className="ml-1 text-xs font-semibold text-amber-400">{rating.toFixed(1)}</span>
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <article className="premium-card glass mx-3 w-80 shrink-0 rounded-2xl p-5 light:border-slate-200/80">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan/30 to-cyan/10 text-xs font-bold text-cyan ring-1 ring-cyan/20">
            {t.name[0].toUpperCase()}
          </div>
          <div>
            <p className="text-sm font-semibold text-white light:text-slate-900">{t.name}</p>
            <p className="text-[11px] text-silver/50 light:text-slate-500">{t.flag} {t.location}</p>
          </div>
        </div>
        {t.isRepeat && (
          <span className="flex shrink-0 items-center gap-1 rounded-full border border-emerald/25 bg-emerald/10 px-2 py-0.5 text-[10px] font-semibold text-emerald">
            <RefreshCw size={9} /> Repeat
          </span>
        )}
      </div>
      <StarRating rating={t.rating} />
      <blockquote className="mt-3 text-sm leading-6 text-silver/72 light:text-slate-600">
        &ldquo;{t.text}&rdquo;
      </blockquote>
      <div className="mt-3 flex items-center justify-between border-t border-white/8 pt-3 light:border-slate-100">
        <span className="text-[11px] text-silver/45 light:text-slate-400">{t.service}</span>
        <span className="text-[11px] font-medium text-silver/40 light:text-slate-400">Verified client review</span>
      </div>
    </article>
  );
}

const row1 = [...testimonials, ...testimonials, ...testimonials];
const row2 = [...testimonials].reverse().concat([...testimonials].reverse(), [...testimonials].reverse());

export function Testimonials() {
  return (
    <section className="section-pad overflow-hidden">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="mb-3 flex items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan">Client Reviews</p>
            <span className="h-px flex-1 bg-white/8 light:bg-slate-200" />
          </div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold text-white light:text-slate-950 md:text-4xl">
              What clients say
            </h2>
            <div className="shimmer-badge flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 light:border-slate-200 light:bg-white">
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} size={12} className="text-amber-400" fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-semibold text-white light:text-slate-900">4.9 / 5</span>
              <span className="text-xs text-silver/50 light:text-slate-500">Verified client reviews</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-10 space-y-4">
        {/* Row 1 — scrolls left */}
        <div className="marquee-fade">
          <div className="flex animate-marquee marquee-track">
            {row1.map((t, i) => <Card key={`r1-${i}`} t={t} />)}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="marquee-fade">
          <div className="flex animate-marquee-reverse marquee-track">
            {row2.map((t, i) => <Card key={`r2-${i}`} t={t} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
