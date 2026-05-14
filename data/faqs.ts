export const allFaqs = [
  {
    q: "What is technical SEO and what does it include?",
    a: "Technical SEO is the infrastructure layer that determines whether Google can find, crawl, understand, and rank your pages. It covers correct HTML semantics and heading hierarchy, XML sitemaps, robots.txt, canonical URLs, HTTPS, structured data (JSON-LD schema), Core Web Vitals (LCP, CLS, INP), mobile-first usability, page speed, internal link architecture, breadcrumb navigation, hreflang for multilingual sites, and crawl budget optimization. Without a clean technical foundation, no amount of content or backlinks will reach its full potential."
  },
  {
    q: "How do you implement Schema markup and structured data?",
    a: "I use JSON-LD — Google's preferred format — injected server-side into the page <head>. Schema types I implement: Person, Organization, LocalBusiness, ProfessionalService, WebSite, WebPage, BreadcrumbList, FAQPage, Article, BlogPosting, HowTo, Service, Product, Review, AggregateRating, and SiteNavigationElement. This enables rich results in Google Search (star ratings, FAQ dropdowns, breadcrumbs, sitelinks) which typically increase click-through rates by 20–30% compared to plain blue links."
  },
  {
    q: "How do you fix Core Web Vitals — LCP, CLS, and INP?",
    a: "LCP (Largest Contentful Paint) is fixed by serving WebP/AVIF images with explicit width/height, preloading hero images, using CDN delivery, and eliminating render-blocking resources. CLS (Cumulative Layout Shift) is fixed by setting explicit dimensions on all images and embeds, avoiding dynamically injected content above the fold, and using CSS transforms for animations. INP (Interaction to Next Paint, Google's 2024 replacement for FID) is improved by reducing JS main-thread blocking, deferring non-critical scripts, using passive event listeners, and code-splitting large bundles."
  },
  {
    q: "What page speed score should a business website target?",
    a: "Target 90+ on mobile and 95+ on desktop in Lighthouse/PageSpeed Insights for a real competitive SEO advantage. Key metrics to hit: LCP under 2.5s, INP under 200ms, CLS under 0.1, TTFB under 800ms, FCP under 1.8s. I achieve these through WebP image optimization with lazy-loading, critical CSS inlining, font subsetting with display:swap, code splitting, aggressive caching headers, and minimal third-party script payloads."
  },
  {
    q: "What is E-E-A-T and how does it affect Google rankings?",
    a: "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness — the framework Google's Quality Raters use to evaluate content quality. Experience means first-hand knowledge (case studies, real project results, testimonials). Expertise is demonstrated through comprehensive, technically accurate content. Authoritativeness comes from backlinks, mentions, and consistent publishing. Trustworthiness is built via HTTPS, privacy policy, contact information, real reviews, and schema markup confirming identity. I build E-E-A-T signals into site structure, schema, and content architecture from day one."
  },
  {
    q: "How do you handle Semantic SEO and entity optimization?",
    a: "Semantic SEO goes beyond keywords to build topical authority through entities and relationships. I implement: entity markup using Schema.org types (Person, Organization, Place, Product) to help Google understand what a page is about rather than just what it says. Internal linking builds a knowledge graph Google can follow. Content is structured around topic clusters — a pillar page covers a broad topic; cluster pages cover specific subtopics, all linked bidirectionally. Named entities (people, tools, locations, brands) are used consistently so Google's Knowledge Graph associates the site with authority on those subjects."
  },
  {
    q: "How do you optimize for AI search — ChatGPT, Perplexity, and Google SGE?",
    a: "AI search tools (ChatGPT Browse, Perplexity, Google's AI Overview) pull from pages that are structured, authoritative, and factually precise. To appear in AI-generated answers: use clear heading hierarchy so content is easily parseable, write in direct answer format (question → concise answer → supporting detail), implement FAQPage and HowTo schema, build topical authority by covering a subject comprehensively across multiple linked pages, earn mentions from trusted domains, and keep content factually accurate with specific numbers and sources. AI search rewards E-E-A-T signals more heavily than traditional search."
  },
  {
    q: "What is JavaScript SEO and why does it matter?",
    a: "JavaScript SEO is the practice of ensuring that content rendered by JavaScript is properly discoverable by search engine crawlers. Googlebot can execute JavaScript but does so in a second crawl wave — sometimes hours or days after the initial HTML crawl. This means JS-only content (rendered entirely in the browser) may not get indexed quickly or at all. I solve this through: server-side rendering (SSR) for critical content, Next.js static generation for pre-built HTML, proper use of dynamic rendering where needed, and auditing JavaScript output using the URL Inspection tool in Google Search Console."
  },
  {
    q: "How do you optimize WordPress sites for Google rankings?",
    a: "WordPress SEO at the code level: remove unused plugins bloating HTML/CSS/JS output, implement custom JSON-LD schema without Yoast dependency, configure LiteSpeed Cache or WP Rocket for optimal caching rules, serve WebP via ShortPixel or Imagify, disable WordPress emoji scripts and oEmbeds in functions.php, build .htaccess rules for GZIP/Brotli compression and browser caching, set canonical tags on all paginated and archive pages, and implement clean H1–H6 semantic structure with proper internal anchor text."
  },
  {
    q: "Can you improve Shopify SEO and product page rankings?",
    a: "Yes. Shopify SEO work includes: custom JSON-LD Product and BreadcrumbList schema on all product and collection pages, resolving duplicate content from /collections/ and /products/ URL patterns via canonical tags, optimizing image ALT text and filenames, configuring collection page copy for keyword clusters, implementing Review and AggregateRating schema for star rich results, noindexing faceted navigation variants, and improving page speed by removing unused theme sections and lazy-loading app scripts."
  },
  {
    q: "How do you build an SEO-friendly Laravel application?",
    a: "In Laravel, SEO is architected into the foundation: dynamic metadata injected at controller level (title, description, OG tags), JSON-LD schema rendered server-side in Blade or Inertia layouts, clean semantic URL slugs (no numeric IDs, no underscores), server-generated XML sitemaps with changefreq and lastmod timestamps, robots.txt with correct disallow paths, server-side rendering of critical content (no SEO-invisible JS-only output), proper HTTP status codes (301, 404, 410), and Lighthouse 90+ performance via route caching, Eloquent query optimization, and Redis."
  },
  {
    q: "What is the difference between on-page, off-page, and technical SEO?",
    a: "Technical SEO is the infrastructure: crawlability, page speed, schema, Core Web Vitals, HTTPS, sitemaps — it lets Google access and understand your site. On-page SEO is content signals on each page: title tags, meta descriptions, H1–H6 hierarchy, keyword placement, image ALTs, content depth, and internal links — relevance signals. Off-page SEO is external authority: backlinks from trusted domains, brand mentions, and reviews — credibility signals. All three compound each other. I focus on technical and on-page during development, which is where most sites have the biggest fixable gaps."
  },
  {
    q: "How do you handle redirects and HTTP status codes for SEO?",
    a: "Incorrect HTTP responses destroy crawl efficiency and lose link equity. I audit and fix: 301 Permanent Redirects for all URL changes (never 302 for permanent moves), 404 cleanup with redirect chains resolved (A→B→C chains should be A→C), 410 Gone status for intentionally removed pages (tells Google faster than 404), 200 status on all live pages, and canonical tags on duplicate or near-duplicate content. In Laravel I implement redirect logic at the route level; in WordPress via .htaccess or redirect plugins with server-level rules. Every redirect preserves approximately 90–99% of the original page's link equity."
  },
  {
    q: "How do you structure internal links for SEO authority flow?",
    a: "I implement pillar-cluster architecture: service hub pages linked contextually from all related blog posts and sub-pages using exact-match and semantic anchor text. Every blog post includes a Related Services section linking to relevant service pages. Case studies cross-link to the service they demonstrate. Footer navigation targets high-priority keyword pages. Breadcrumb navigation is built with BreadcrumbList schema on every page. The goal is ensuring no important page is more than 2 clicks from the homepage and that PageRank flows toward pages that need to rank."
  },
  {
    q: "Do you provide local SEO foundations for Dubai and UAE businesses?",
    a: "Yes. Every Dubai/UAE project gets: geo-targeted title tags and meta descriptions using city-level keywords (Dubai, Sharjah, Abu Dhabi, UAE), LocalBusiness and ProfessionalService schema with UAE PostalAddress and GeoCoordinates, hreflang en-AE tagging, Google Business Profile optimization guidance, consistent NAP (Name, Address, Phone) across all pages, city-specific service area pages for high-volume local queries, and Google Maps embed with geo markup. This tells Google exactly where you serve and boosts near-me and location-intent search visibility."
  },
  {
    q: "What is crawl budget and why does it matter for large sites?",
    a: "Crawl budget is the number of pages Googlebot will crawl on your site within a given timeframe. For small sites (under 500 pages) it rarely matters, but for ecommerce, sites with faceted filters, or WordPress sites with tag/category/archive proliferation, Googlebot can exhaust its budget on low-value pages before reaching important ones. I optimize crawl budget by blocking faceted URLs via robots.txt or canonical, consolidating tag archives, using noindex on paginated pages beyond page 2, submitting priority pages via XML sitemap, and removing orphaned pages."
  },
  {
    q: "How do you use log file analysis for advanced SEO auditing?",
    a: "Log file analysis reads the raw server access logs to see exactly which URLs Googlebot crawled, how often, and what HTTP responses it received. This reveals: pages getting crawled too frequently (wasted budget), important pages being missed entirely, crawl depth issues (pages deep in the site Googlebot never reaches), and server errors that only appear to bots. Tools: Screaming Frog Log File Analyser, GoAccess for real-time analysis. Combined with Google Search Console's Coverage report and URL Inspection tool, log analysis is the most accurate picture of how Google actually experiences your site."
  },
  {
    q: "How do you optimize for voice search and featured snippets?",
    a: "Voice search queries are conversational and question-based (how, what, why, where, who). To capture them: use exact question phrasing as H2/H3 headings followed immediately by a concise 40–60 word direct answer (this is what Google extracts for featured snippets), implement FAQPage schema on every Q&A section, structure content in lists and tables where possible (Google prefers these for snippet extraction), target long-tail conversational keywords (e.g. 'best Laravel developer in Dubai' → 'who is the best web developer in Dubai UAE'), and achieve fast page speed since voice results favor fast-loading pages."
  },
  {
    q: "How long does technical SEO take to show results in Google?",
    a: "Schema markup can appear as rich results within 24–72 hours of Googlebot reindexing. Core Web Vitals improvements reflect in Google Search Console's CWV report within 28 days. Page speed improvements show immediately in Lighthouse. Full ranking impact from a complete technical SEO overhaul is typically measurable within 3–6 months, depending on site authority, competition level, and crawl frequency. Sites with strong existing authority move faster — technical fixes unblock rankings that content and links have already earned."
  },
  {
    q: "Is SEO and performance built into every project by default?",
    a: "Yes — always. Every project I deliver includes: semantic HTML with correct heading hierarchy, WebP-optimized images with explicit dimensions, title and meta description targeting primary keywords, Open Graph and Twitter Card tags, canonical URLs, JSON-LD schema (WebPage, BreadcrumbList, Organization/Person), mobile-first responsive design, HTTPS configuration, and a Lighthouse score above 90 for performance and SEO. Advanced schema types (FAQPage, HowTo, Product, Review, AggregateRating), deep keyword architecture, and page speed above 95 are included in premium-tier builds."
  }
];
