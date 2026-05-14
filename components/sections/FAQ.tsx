"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import type { FaqItem } from "@/data/faqs";
import { allFaqs } from "@/data/faqs";

export function FAQ({ items = allFaqs }: { items?: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((faq, i) => (
        <div
          key={i}
          className={`rounded-2xl border transition-all duration-300 ${
            open === i
              ? "border-cyan/30 bg-cyan/[0.05] shadow-[0_0_28px_rgba(38,217,255,0.07)] light:border-blue-300/60 light:bg-blue-50/60"
              : "border-white/[0.08] bg-white/[0.03] hover:border-white/16 light:border-slate-200 light:bg-white light:hover:border-blue-200"
          }`}
        >
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full cursor-pointer items-start justify-between gap-4 p-6 text-left"
            aria-expanded={open === i}
          >
            <span className="font-display text-[15px] font-semibold leading-snug text-white light:text-slate-950">
              {faq.q}
            </span>
            <span
              className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                open === i
                  ? "border-cyan/40 bg-cyan/15 text-cyan light:border-blue-300 light:bg-blue-100 light:text-blue-700"
                  : "border-white/15 text-silver/50 light:border-slate-300 light:text-slate-400"
              }`}
            >
              {open === i ? <X size={12} /> : <Plus size={12} />}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key={`ans-${i}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-sm leading-7 text-silver/70 light:text-slate-600">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
