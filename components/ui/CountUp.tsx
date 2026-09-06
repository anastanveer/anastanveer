"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A number that counts up when it scrolls into view — but which is the real
 * number the moment the page exists, not zero.
 *
 * The previous version started at 0 and only reached `value` once JavaScript had
 * run and an IntersectionObserver had fired. That put "0+ Years Experience" and
 * "0+ Projects Delivered" into the server-rendered HTML, which is what a crawler
 * reads and what a visitor sees on a slow connection. The stats sit in the hero,
 * above the fold, so it was also the first thing on the page.
 *
 * Now the rendered value is correct from the first byte, and the animation is
 * treated as the enhancement it is:
 *
 *  - Server and first client render both emit `value`, so hydration matches and
 *    the HTML is truthful with JavaScript off.
 *  - Only an element that starts *below* the fold rewinds to zero, so scrolling
 *    to it still gets the count-up. Anything already on screen keeps its number
 *    rather than flashing back to zero, which would read as a glitch.
 *  - prefers-reduced-motion is honoured: no rewind, no animation.
 */
export function CountUp({
  value,
  suffix = "",
  duration = 1600
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    // Leave the number alone unless it is genuinely far down the page. A strict
    // "is it on screen right now" test is too tight: the hero stats sit about
    // 905px down, which is a few pixels below a 900px viewport, so they would
    // rewind to zero and then sit at "0+" until the visitor happened to scroll —
    // the exact problem this component is meant to avoid. Anything within roughly
    // one and a bit screens is treated as immediately visible and keeps its value.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.25) return;

    setCount(0);

    const run = () => {
      if (animated.current) return;
      animated.current = true;
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * value));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    // tabular-nums keeps every digit the same width, so the label beside a
    // counting number does not shuffle sideways as it ticks 0 → 7 → 70 → 100.
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}
