"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BlogCard } from "@/components/ui/BlogCard";
import type { BlogPost } from "@/data/site";

const PER_PAGE = 9;

/**
 * Client-side pagination for the blog index.
 *
 * Every post stays in the rendered HTML and is hidden with CSS rather than
 * unmounted. On a statically exported, SEO-driven site the /blog page is the main
 * internal link hub — rendering only the current page would strip the rest of the crawlable
 * links out of the markup. Hiding keeps them in the document while the reader
 * still sees one page at a time.
 */
export function BlogPagination({ posts }: { posts: BlogPost[] }) {
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const pageCount = Math.max(1, Math.ceil(posts.length / PER_PAGE));

  /**
   * Page buttons to show. Up to seven pages every number is listed; beyond that
   * it collapses to first / neighbours-of-current / last with gaps, so the row
   * stays one clean line no matter how many articles get published. `"gap"`
   * marks an elided run.
   */
  const pages = useMemo<(number | "gap")[]>(() => {
    if (pageCount <= 7) return Array.from({ length: pageCount }, (_, i) => i + 1);
    const out: (number | "gap")[] = [1];
    const from = Math.max(2, page - 1);
    const to = Math.min(pageCount - 1, page + 1);
    if (from > 2) out.push("gap");
    for (let n = from; n <= to; n++) out.push(n);
    if (to < pageCount - 1) out.push("gap");
    out.push(pageCount);
    return out;
  }, [page, pageCount]);

  const go = (next: number) => setPage(Math.min(pageCount, Math.max(1, next)));

  // Bring the top of the list into view when the page changes, but never on the
  // initial paint — that would yank the reader past the hero on arrival.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [page]);

  if (posts.length <= PER_PAGE) {
    return (
      <div className="mobile-rail mt-10 grid gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <BlogCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    );
  }

  const start = (page - 1) * PER_PAGE;
  const end = start + PER_PAGE;

  const navButton =
    "grid h-10 w-10 place-items-center rounded-lg border border-white/12 bg-white/8 text-silver transition hover:border-cyan/35 hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-white/12 disabled:hover:text-silver light:border-slate-900/10 light:bg-slate-900/5 light:text-slate-700 light:hover:border-blue-500/35 light:hover:text-slate-950";

  return (
    <>
      <div ref={gridRef} className="mobile-rail mt-10 grid gap-5 scroll-mt-28 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => {
          const visible = index >= start && index < end;
          return (
            <div key={post.slug} className={visible ? "contents" : "hidden"} aria-hidden={visible ? undefined : true}>
              <BlogCard post={post} index={visible ? index - start : 0} />
            </div>
          );
        })}
      </div>

      <nav className="mt-12 flex flex-wrap items-center justify-center gap-2" aria-label="Blog pagination">
        <button type="button" className={navButton} onClick={() => go(page - 1)} disabled={page === 1} aria-label="Previous page">
          <ChevronLeft className="h-4 w-4" />
        </button>

        {pages.map((n, i) => {
          if (n === "gap") {
            return (
              <span key={`gap-${i}`} aria-hidden="true" className="grid h-10 w-6 place-items-center text-sm text-silver/45 light:text-slate-400">
                …
              </span>
            );
          }
          const active = n === page;
          return (
            <button
              key={n}
              type="button"
              onClick={() => go(n)}
              aria-label={`Go to page ${n}`}
              aria-current={active ? "page" : undefined}
              className={
                active
                  ? "grid h-10 w-10 place-items-center rounded-lg border border-cyan/35 bg-cyan/12 text-sm font-semibold text-cyan shadow-glow light:border-blue-500/30 light:bg-blue-50 light:text-blue-700"
                  : `${navButton} text-sm font-medium`
              }
            >
              {n}
            </button>
          );
        })}

        <button type="button" className={navButton} onClick={() => go(page + 1)} disabled={page === pageCount} aria-label="Next page">
          <ChevronRight className="h-4 w-4" />
        </button>
      </nav>

      <p className="mt-4 text-center text-xs text-silver/55 light:text-slate-500" aria-live="polite">
        Page {page} of {pageCount} · {posts.length} articles
      </p>
    </>
  );
}
