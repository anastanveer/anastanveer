"use client";

import { Star, RefreshCw } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { testimonials } from "@/data/site";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => {
        const fill = Math.min(1, Math.max(0, rating - (i - 1)));
        return (
          <span key={i} className="relative inline-block">
            <Star size={14} className="text-white/15" fill="currentColor" />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star size={14} className="text-amber-400" fill="currentColor" />
            </span>
          </span>
        );
      })}
      <span className="ml-1.5 text-xs font-semibold text-amber-400">{rating.toFixed(1)}</span>
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan/30 to-cyan/10 text-sm font-bold text-cyan ring-1 ring-cyan/20">
      {name[0].toUpperCase()}
    </div>
  );
}

export function Testimonials() {
  const left = testimonials.filter((_, i) => i % 2 === 0);
  const right = testimonials.filter((_, i) => i % 2 !== 0);

  return (
    <section className="section-pad">
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
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 light:border-slate-200 light:bg-white">
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} size={13} className="text-amber-400" fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-semibold text-white light:text-slate-900">4.9 / 5</span>
              <span className="text-xs text-silver/55 light:text-slate-500">via Fiverr</span>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 hidden gap-5 md:grid md:grid-cols-2">
          <div className="grid gap-5 self-start">
            {left.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </div>
          <div className="grid gap-5 self-start md:mt-8">
            {right.map((t, i) => (
              <Reveal key={i} delay={i * 0.08 + 0.04}>
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:hidden">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial: t }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <article className="premium-card glass rounded-2xl p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Avatar name={t.name} />
          <div>
            <p className="text-sm font-semibold text-white light:text-slate-900">{t.name}</p>
            <p className="mt-0.5 text-xs text-silver/55 light:text-slate-500">
              {t.flag} {t.location}
            </p>
          </div>
        </div>
        {t.isRepeat && (
          <span className="flex items-center gap-1.5 rounded-full border border-emerald/25 bg-emerald/10 px-2.5 py-1 text-xs font-semibold text-emerald">
            <RefreshCw size={11} />
            Repeat Client
          </span>
        )}
      </div>

      <div className="mt-4">
        <StarRating rating={t.rating} />
      </div>

      <blockquote className="mt-4 text-sm leading-7 text-silver/78 light:text-slate-600">
        &ldquo;{t.text}&rdquo;
      </blockquote>

      <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-4 light:border-slate-100">
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-silver/55 light:border-slate-200 light:bg-slate-50 light:text-slate-500">
          {t.service}
        </span>
        <span className="text-xs text-silver/40 light:text-slate-400">via Fiverr</span>
      </div>
    </article>
  );
}
