"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    let frame = 0;

    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let activeCard: HTMLElement | null = null;
    let activeRect: DOMRect | null = null;

    const handlePointerMove = (event: PointerEvent) => {
      const card = (event.target as Element | null)?.closest?.(".premium-card") as HTMLElement | null;
      if (!card) return;

      if (card !== activeCard) {
        activeCard = card;
        activeRect = card.getBoundingClientRect();
      }

      if (!activeRect) return;

      const rect = activeRect;
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const px = x / rect.width - 0.5;
      const py = y / rect.height - 0.5;

      card.style.setProperty("--card-x", `${x}px`);
      card.style.setProperty("--card-y", `${y}px`);
      card.style.setProperty("--card-rx", `${(-py * 4.4).toFixed(2)}deg`);
      card.style.setProperty("--card-ry", `${(px * 4.4).toFixed(2)}deg`);
    };

    const resetCard = (card: HTMLElement | null) => {
      if (!card) return;
      card.style.removeProperty("--card-rx");
      card.style.removeProperty("--card-ry");
      card.style.removeProperty("--card-x");
      card.style.removeProperty("--card-y");
      if (card === activeCard) {
        activeCard = null;
        activeRect = null;
      }
    };

    const handlePointerLeave = (event: PointerEvent) => {
      resetCard((event.target as Element | null)?.closest?.(".premium-card") as HTMLElement | null);
    };

    const clearActiveRect = () => {
      activeRect = null;
    };

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave, true);
    window.addEventListener("resize", clearActiveRect, { passive: true });
    window.addEventListener("scroll", clearActiveRect, { passive: true });

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave, true);
      window.removeEventListener("resize", clearActiveRect);
      window.removeEventListener("scroll", clearActiveRect);
    };
  }, []);

  return children;
}
