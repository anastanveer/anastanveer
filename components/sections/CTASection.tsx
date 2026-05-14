import { MagneticButton } from "@/components/ui/MagneticButton";

export function CTASection({
  title = "Have a web problem that needs a practical solution?",
  text = "Send the current issue, platform, goal, and timeline. I'll review the context and reply with a clear next step for Laravel, WordPress, Shopify, dashboards, APIs, SEO, speed, ecommerce, or custom web systems."
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(38,217,255,0.12),transparent_55%),radial-gradient(ellipse_at_80%_100%,rgba(139,92,246,0.1),transparent_50%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-5">
        <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 shadow-premium backdrop-blur-sm md:p-14 light:border-slate-200 light:bg-white/80">
          {/* Inner top beam */}
          <div className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-cyan/55 to-transparent" />
          {/* Big BG number */}
          <div className="pointer-events-none absolute right-8 top-4 select-none font-display text-[10rem] font-bold leading-none text-white/[0.025] md:text-[14rem]">
            ?
          </div>
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="eyebrow-beam mb-4 inline-block text-xs font-semibold uppercase tracking-[0.26em] text-cyan">Discuss the problem</p>
              <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-5xl light:text-slate-950">{title}</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-silver/70 light:text-slate-600">{text}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:flex-col md:justify-end">
              <MagneticButton href="/contact">Hire Me</MagneticButton>
              <MagneticButton href="https://wa.me/971542435418" variant="secondary">WhatsApp</MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
