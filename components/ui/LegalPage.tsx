import type { ReactNode } from "react";

export type LegalSection = {
  heading: string;
  body: ReactNode[];
  bullets?: ReactNode[];
};

/**
 * Shared shell for the legal pages (privacy, terms, disclaimer).
 *
 * Typography and spacing intentionally mirror the blog article body so the legal
 * pages read as part of the same site rather than a bolted-on template: same
 * `section-pad page-start` rhythm, same heading scale, same light-mode tokens.
 */
export function LegalPage({
  eyebrow = "Legal",
  title,
  lead,
  updated,
  sections,
  footNote
}: {
  eyebrow?: string;
  title: string;
  lead: string;
  updated: string;
  sections: LegalSection[];
  footNote?: ReactNode;
}) {
  return (
    <section className="section-pad page-start">
      <div className="mx-auto max-w-4xl px-5">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan">{eyebrow}</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-white light:text-slate-950 md:text-5xl">{title}</h1>
        <p className="mt-6 text-lg leading-8 text-silver/76 light:text-slate-600">{lead}</p>
        <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-1.5 text-xs font-medium text-silver/62 light:border-slate-900/10 light:bg-slate-50 light:text-slate-500">
          Last updated {updated}
        </p>

        <div className="mt-12 space-y-12">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-2xl font-semibold text-white light:text-slate-950 md:text-3xl">{section.heading}</h2>
              <div className="mt-5 space-y-4">
                {section.body.map((paragraph, i) => (
                  <p className="text-base leading-8 text-silver/74 light:text-slate-600" key={i}>
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.bullets?.length ? (
                <div className="mt-5 space-y-3">
                  {section.bullets.map((item, i) => (
                    <p className="flex gap-3 text-base leading-7 text-silver/78 light:text-slate-700" key={i}>
                      <span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {footNote ? (
          <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.035] p-6 text-base leading-8 text-silver/74 light:border-slate-900/10 light:bg-slate-50 light:text-slate-600">
            {footNote}
          </div>
        ) : null}
      </div>
    </section>
  );
}
