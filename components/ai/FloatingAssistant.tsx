"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Bot, Send, Sparkles, X } from "lucide-react";

type Message = {
  role: "assistant" | "user";
  text: string;
};

const whatsappNumber = "971542435418";

const starterMessages: Message[] = [
  {
    role: "assistant",
    text:
      "Hi, I’m Anas Tanveer’s portfolio assistant. Tell me what you need: Laravel system, WordPress site, Shopify store, dashboard, ERP, speed/SEO, or a custom web problem."
  }
];

const quickPrompts = [
  "I need a Laravel dashboard",
  "I want a WordPress website",
  "Shopify store improvement",
  "Website speed / SEO help"
];

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.04 3.2A12.72 12.72 0 0 0 5.1 22.45L3.2 29.2l6.9-1.8a12.73 12.73 0 1 0 5.94-24.2Zm0 2.34a10.39 10.39 0 0 1 8.82 15.9 10.36 10.36 0 0 1-13.62 3.6l-.48-.29-4.1 1.08 1.1-4-.31-.5a10.38 10.38 0 0 1 8.59-15.79Zm-4.18 5.42c-.23 0-.59.08-.9.42-.3.34-1.18 1.16-1.18 2.82 0 1.66 1.21 3.26 1.38 3.49.17.22 2.34 3.74 5.78 5.1 2.86 1.13 3.44.9 4.06.85.62-.06 2-.82 2.28-1.62.28-.79.28-1.47.2-1.62-.09-.14-.31-.23-.65-.4-.34-.17-2-.99-2.31-1.1-.31-.12-.54-.18-.76.17-.23.34-.88 1.1-1.08 1.33-.2.23-.4.25-.74.08-.34-.17-1.43-.53-2.73-1.68a10.2 10.2 0 0 1-1.89-2.35c-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.59.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.08-.17-.76-1.84-1.04-2.52-.27-.66-.55-.57-.76-.58h-.65Z"
      />
    </svg>
  );
}

function buildAssistantReply(input: string) {
  const text = input.toLowerCase();

  if (text.includes("laravel") || text.includes("dashboard") || text.includes("admin")) {
    return "Good fit. For Laravel/dashboard work, Anas usually needs the workflow, user roles, data sources, reports needed, and timeline. Share what is manual or broken right now, and I’ll prepare a clean WhatsApp brief.";
  }

  if (text.includes("shopify") || text.includes("ecommerce") || text.includes("store")) {
    return "For Shopify/ecommerce, the useful details are product type, current theme, conversion issue, product-page problem, app limits, and speed concerns. Tell me the store goal and I’ll format it for WhatsApp.";
  }

  if (text.includes("wordpress") || text.includes("website")) {
    return "For WordPress/business websites, share the current website link, target service, pages needed, SEO location, and what feels weak: design, speed, leads, forms, or content structure.";
  }

  if (text.includes("seo") || text.includes("speed") || text.includes("page")) {
    return "For speed/SEO, Anas will need the website URL, platform, main pages, PageSpeed issue, SEO target keywords, and whether the goal is ranking, leads, or better ad landing pages.";
  }

  if (text.includes("price") || text.includes("budget") || text.includes("cost")) {
    return "Pricing depends on scope, pages/modules, integrations, content, platform, and timeline. Share your budget range and must-have features, then continue on WhatsApp for a practical estimate.";
  }

  return "Understood. To help Anas respond properly, add: project type, current website/app link, main problem, required features, budget range, and timeline. Then use the WhatsApp button below to send a ready brief.";
}

function buildWhatsAppText(messages: Message[]) {
  const userMessages = messages.filter((message) => message.role === "user").map((message) => `- ${message.text}`);
  const summary = userMessages.length ? userMessages.join("\n") : "- I want to discuss a web development project.";

  return encodeURIComponent(
    `Hi Anas, I came from anastanveer.com.\n\nProject brief:\n${summary}\n\nPlease review and guide me with the best next step.`
  );
}

export function FloatingAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(starterMessages);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);

  const whatsappHref = useMemo(() => `https://wa.me/${whatsappNumber}?text=${buildWhatsAppText(messages)}`, [messages]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      messagesRef.current?.scrollTo({
        top: messagesRef.current.scrollHeight,
        behavior: "smooth"
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [messages]);

  function sendMessage(value = input) {
    const clean = value.trim();
    if (!clean) return;

    setMessages((current) => [
      ...current,
      { role: "user", text: clean },
      { role: "assistant", text: buildAssistantReply(clean) }
    ]);
    setInput("");
    window.setTimeout(() => inputRef.current?.focus(), 80);
  }

  return (
    <div className="pointer-events-none fixed inset-x-3 bottom-24 z-[60] flex flex-col items-end lg:bottom-6 lg:left-auto lg:right-4">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, x: 18, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 14, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto mb-3 flex max-h-[calc(100dvh-8.5rem)] w-full max-w-[22rem] flex-col overflow-hidden rounded-3xl border border-white/12 bg-ink/94 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-2xl light:border-slate-900/10 light:bg-white/95"
          >
            <div className="relative border-b border-white/10 p-3.5 light:border-slate-900/10">
              <div className="absolute inset-x-0 top-0 h-px bg-premium-gradient" />
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl border border-cyan/25 bg-cyan/10 text-cyan shadow-glow">
                    <Bot size={18} />
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold text-white light:text-slate-950">Anas AI Assistant</p>
                    <p className="text-xs text-silver/65 light:text-slate-600">Project guide and WhatsApp handoff</p>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Close assistant"
                  onClick={() => setIsOpen(false)}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-silver transition hover:border-cyan/35 hover:text-white light:border-slate-900/10 light:bg-slate-50 light:text-slate-700"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            <div
              ref={messagesRef}
              className="min-h-0 flex-1 space-y-3 overflow-y-auto p-3.5 [scrollbar-color:rgba(38,217,255,0.45)_transparent] [scrollbar-width:thin]"
            >
              {messages.map((message, index) => (
                <div className={message.role === "user" ? "flex justify-end" : "flex justify-start"} key={`${message.role}-${index}`}>
                  <div
                    className={
                      message.role === "user"
                        ? "max-w-[84%] rounded-2xl rounded-br-md bg-premium-gradient px-4 py-3 text-sm font-medium leading-6 text-ink"
                        : "max-w-[88%] rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.055] px-4 py-3 text-sm leading-6 text-silver/82 light:border-slate-900/10 light:bg-slate-50 light:text-slate-700"
                    }
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 p-3.5 light:border-slate-900/10">
              <div className="mb-3 grid grid-cols-2 gap-2">
                {quickPrompts.map((prompt) => (
                  <button
                    className="rounded-2xl border border-white/10 bg-white/[0.045] px-3 py-2 text-left text-[11px] font-medium leading-4 text-silver/72 transition hover:border-cyan/35 hover:text-cyan light:border-slate-900/10 light:bg-slate-50 light:text-slate-600"
                    key={prompt}
                    type="button"
                    onClick={() => sendMessage(prompt)}
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              <form
                className="flex gap-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  sendMessage();
                }}
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Type your project problem..."
                  className="min-h-12 flex-1 rounded-2xl border border-white/10 bg-white/[0.06] px-4 text-sm text-white outline-none transition placeholder:text-silver/45 focus:border-cyan/45 focus:bg-white/[0.08] light:border-slate-900/10 light:bg-slate-50 light:text-slate-950 light:placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan/25 bg-cyan/10 text-cyan transition hover:bg-cyan/15"
                >
                  <Send size={18} />
                </button>
              </form>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-emerald/25 bg-emerald/15 px-4 text-sm font-semibold text-emerald transition hover:bg-emerald/20"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Continue on WhatsApp <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="pointer-events-auto flex flex-col items-end gap-2">
        <button
          type="button"
          aria-label="Open AI assistant"
          onClick={() => setIsOpen((value) => !value)}
          className="group relative grid h-12 w-12 place-items-center rounded-full border border-cyan/30 bg-ink/88 text-cyan shadow-[0_16px_44px_rgba(38,217,255,0.18)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:scale-105 hover:bg-cyan/12 light:border-blue-500/25 light:bg-white/92 sm:h-14 sm:w-14"
        >
          <span className="absolute inset-0 rounded-full bg-cyan/20 opacity-0 blur-md transition group-hover:opacity-100" />
          <span className="absolute -left-1 -top-1 h-3 w-3 rounded-full bg-emerald shadow-[0_0_18px_rgba(50,240,164,0.8)]" />
          <Sparkles size={19} />
        </button>
      </div>
    </div>
  );
}
