// HowTo structured data for blog posts that are step-by-step guides.
// Used to generate HowTo schema for Google rich results.

export type HowToData = {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string }>;
};

export const howToBySlug: Record<string, HowToData> = {
  "website-speed-checklist-before-ads": {
    name: "How to Speed Up Your Website Before Running Paid Ads",
    description: "A step-by-step checklist to optimise website speed, Core Web Vitals, and page performance before investing in paid advertising campaigns.",
    steps: [
      { name: "Run a Core Web Vitals audit", text: "Use Google PageSpeed Insights and Lighthouse to measure LCP, FID/INP, and CLS scores. Note any pages scoring below 90." },
      { name: "Compress and convert images to WebP", text: "Replace PNG and JPEG images with WebP or AVIF. Use responsive srcset to serve the right size per device. Aim for images under 150KB." },
      { name: "Remove unused CSS and JavaScript", text: "Audit render-blocking resources. Remove unused plugins, scripts, and stylesheets. Defer non-critical JavaScript." },
      { name: "Enable caching and CDN", text: "Set browser cache headers for static assets. Use a CDN (Cloudflare, BunnyCDN) to serve assets from the nearest edge location." },
      { name: "Minimise server response time (TTFB)", text: "Reduce Time to First Byte to under 200ms. Use server-side caching (Redis, OPcache), optimise database queries, and upgrade hosting if needed." },
      { name: "Fix mobile performance issues", text: "Test on real mobile devices and slow networks. Fix tap targets, eliminate intrusive interstitials, and ensure font sizes are readable without zoom." },
      { name: "Verify all fixes with a re-audit", text: "Run PageSpeed Insights and Google Search Console Core Web Vitals report again. Confirm all scores are green before launching paid campaigns." }
    ]
  },
  "shopify-conversion-fixes": {
    name: "How to Fix Shopify Conversion Rate Problems",
    description: "Step-by-step guide to identifying and fixing the most common Shopify product page and checkout issues that reduce conversion rates.",
    steps: [
      { name: "Audit your product page analytics", text: "Check bounce rate, add-to-cart rate, and checkout abandonment in Google Analytics. Identify which products have the highest drop-off." },
      { name: "Fix product image quality and loading speed", text: "Use high-resolution images with clean backgrounds. Compress to WebP format. Ensure images load in under 1 second on mobile." },
      { name: "Clarify size guides and variant selectors", text: "Add clear size charts, colour swatches, and availability indicators. Eliminate any confusion in variant selection that could cause bounces." },
      { name: "Strengthen trust signals on product pages", text: "Add customer reviews, money-back guarantee badges, secure payment icons, and return policy near the Add to Cart button." },
      { name: "Simplify the checkout flow", text: "Reduce the number of checkout steps. Enable express checkout options (Shop Pay, Apple Pay). Pre-fill address fields where possible." },
      { name: "Fix mobile cart and sticky add-to-cart", text: "Ensure the Add to Cart button is always visible on mobile. Fix any mobile-specific layout issues that hide the CTA below the fold." },
      { name: "Test and measure improvements", text: "Run A/B tests on product pages after each fix. Monitor conversion rate, average order value, and revenue per visitor for 2 weeks." }
    ]
  },
  "how-to-choose-web-developer": {
    name: "How to Choose the Right Web Developer for Your Business",
    description: "A practical step-by-step guide to evaluating, shortlisting, and hiring the right web developer or web development agency for your project.",
    steps: [
      { name: "Define your project scope and goals", text: "Write down the business problem you are solving, the platform required (Laravel, WordPress, Shopify), the budget range, and the timeline. Clear scope prevents misquotes and misalignment." },
      { name: "Evaluate the developer's portfolio", text: "Look for projects similar to yours in complexity, industry, or platform. Check for measurable outcomes: did the site improve speed, lead generation, or operational efficiency?" },
      { name: "Check technical skills for your stack", text: "Ask about specific technologies: PHP, Laravel, React, MySQL, API integrations, or Shopify Liquid. Request code examples or GitHub profile if relevant." },
      { name: "Review client testimonials and references", text: "Read verified reviews on Fiverr, Upwork, Google, or LinkedIn. Ask for direct references from clients with similar project types." },
      { name: "Assess communication and planning approach", text: "Evaluate response speed, clarity of questions, and quality of the initial project brief or discovery questions. Poor discovery questions indicate poor planning." },
      { name: "Compare pricing against project scope", text: "Avoid the cheapest quote without justification. Compare what is included: design, testing, documentation, post-launch support, and SEO setup." },
      { name: "Start with a small paid test project", text: "For larger projects, begin with a small paid task to assess code quality, communication, and delivery reliability before committing to the full scope." }
    ]
  },
  "seo-friendly-development-before-marketing": {
    name: "How to Build an SEO-Friendly Website Before Launching Marketing",
    description: "A step-by-step process for setting up the technical SEO foundations of a website before investing in paid marketing or link building.",
    steps: [
      { name: "Set up canonical URLs and clean site structure", text: "Ensure every page has a single canonical URL. Use a consistent URL structure (trailing slash or no trailing slash). Remove duplicate content issues before launch." },
      { name: "Implement metadata on every page", text: "Write unique title tags (50–60 characters) and meta descriptions (150–160 characters) for every page. Include the primary keyword and location for local pages." },
      { name: "Add structured data (JSON-LD schema)", text: "Implement schema markup: LocalBusiness, Person, Service, BreadcrumbList, FAQPage, and Article where applicable. Validate with Google Rich Results Test." },
      { name: "Configure robots.txt and XML sitemap", text: "Block non-indexable pages (thank-you, admin, staging). Submit a complete XML sitemap to Google Search Console and Bing Webmaster Tools." },
      { name: "Optimise Core Web Vitals", text: "Achieve LCP under 2.5s, INP under 200ms, and CLS under 0.1. Fix image sizes, remove render-blocking resources, and use a CDN." },
      { name: "Set up hreflang for multilingual or regional targeting", text: "If serving UAE, UK, and Canada markets, add hreflang tags for en-AE, en-GB, en-CA, and x-default to avoid duplicate content penalties across regions." },
      { name: "Connect Google Search Console and Analytics", text: "Submit the site to Google Search Console. Set up GA4 with conversion tracking. Monitor index coverage, Core Web Vitals, and search queries from day one." }
    ]
  },
  "hire-laravel-developer-guide": {
    name: "How to Hire a Laravel Developer for Your Business Project",
    description: "A step-by-step guide to finding, evaluating, and hiring a qualified Laravel developer for web applications, dashboards, APIs, and business systems.",
    steps: [
      { name: "Define the Laravel project requirements", text: "Specify whether you need a custom web application, dashboard, REST API, ERP module, or CRM system. List the features, user roles, and integrations required." },
      { name: "Look for Laravel-specific portfolio work", text: "Review the developer's portfolio for Laravel projects: multi-role admin systems, API-driven platforms, dashboards, or SaaS products. Generic PHP work is not the same as structured Laravel delivery." },
      { name: "Test backend architecture knowledge", text: "Ask about service layers, repository patterns, queues, jobs, notifications, testing, and database optimisation. A good Laravel developer should explain these without hesitation." },
      { name: "Check for API and integration experience", text: "Confirm they have built REST APIs, integrated third-party services (payment gateways, CRMs, data providers), and understand authentication patterns like Sanctum or Passport." },
      { name: "Evaluate communication and planning approach", text: "A qualified Laravel developer should ask about workflow before proposing a solution. Avoid developers who jump to code without understanding the business process." },
      { name: "Review code quality if possible", text: "Request a GitHub profile or code sample. Look for clean structure, proper naming, use of service classes, and readable migrations. Spaghetti PHP inside a Laravel folder is a red flag." },
      { name: "Agree on delivery milestones and testing", text: "Set clear milestones: database structure, backend logic, admin panel, API endpoints, and launch. Require unit or feature tests for critical workflows before handover." }
    ]
  },
  "ai-website-audit-speed-seo-conversion": {
    name: "How to Audit a Website for Speed, SEO, and Conversion Using AI Tools",
    description: "A practical step-by-step process for running a complete website audit covering performance, technical SEO, and conversion readiness using modern AI and web tools.",
    steps: [
      { name: "Run a PageSpeed Insights and Core Web Vitals check", text: "Test the homepage and key landing pages on Google PageSpeed Insights. Record LCP, INP, and CLS scores for both mobile and desktop. Note failing elements." },
      { name: "Crawl the site with a technical SEO tool", text: "Use Screaming Frog, Ahrefs Site Audit, or Semrush to crawl all pages. Check for broken links, missing meta tags, duplicate titles, redirect chains, and crawl errors." },
      { name: "Audit structured data and schema markup", text: "Use Google Rich Results Test and Schema Markup Validator. Confirm LocalBusiness, Service, Article, BreadcrumbList, and FAQPage schemas are valid and complete." },
      { name: "Review robots.txt and XML sitemap", text: "Check that robots.txt does not block important pages. Confirm the sitemap includes all indexable pages and is submitted in Google Search Console." },
      { name: "Analyse conversion elements on key pages", text: "Evaluate CTA placement, trust signals, form fields, page structure, headline clarity, and mobile usability on service pages, contact pages, and landing pages." },
      { name: "Check Google Search Console for indexing issues", text: "Review the Coverage report for excluded or errored pages. Check the Core Web Vitals report and Mobile Usability report for actionable issues." },
      { name: "Prioritise fixes by impact and implement", text: "Group issues into: critical (broken pages, indexing blocks), high (slow speed, missing schema), and medium (thin content, weak CTAs). Fix in order of business impact." }
    ]
  },
  "shopify-developer-for-hire-checklist": {
    name: "How to Hire a Shopify Developer: Checklist for Store Owners",
    description: "A step-by-step checklist to evaluate, shortlist, and hire the right Shopify developer for store builds, theme customisation, and conversion optimisation.",
    steps: [
      { name: "Define what your Shopify store needs", text: "List whether you need a theme build, custom Liquid sections, app integration, speed optimisation, or checkout customisation. Vague briefs produce vague quotes." },
      { name: "Review the developer's Shopify portfolio", text: "Look for live Shopify stores built or improved by the developer. Check product page design, mobile experience, and custom feature implementation like size guides or variant logic." },
      { name: "Check Liquid and Shopify API knowledge", text: "Ask if they can write custom Liquid templates, integrate Shopify APIs, build metafield-driven pages, or extend Online Store 2.0 sections." },
      { name: "Ask about conversion rate experience", text: "A capable Shopify developer understands conversion, not just code. Ask how they approach add-to-cart rate, product page trust signals, and mobile checkout flow." },
      { name: "Confirm app integration capability", text: "Verify they can integrate third-party apps: review apps, loyalty programmes, ERP systems, fulfilment tools, and analytics platforms without slowing the store." },
      { name: "Request a speed and performance approach", text: "Slow Shopify stores kill conversion. Ask how they handle image optimisation, script loading, Core Web Vitals, and theme performance on mobile." },
      { name: "Agree on delivery milestones and post-launch support", text: "Set clear milestones: design approval, development, testing, and launch. Confirm what post-launch support is included and how bugs will be handled." }
    ]
  },
  "custom-business-dashboard-development": {
    name: "How to Plan and Build a Custom Business Dashboard",
    description: "A step-by-step process for defining requirements, choosing a tech stack, and building a custom analytics or operational dashboard for your business.",
    steps: [
      { name: "Identify what decisions the dashboard must support", text: "List the business questions the dashboard must answer: sales trends, operational metrics, user activity, financial KPIs, or real-time data. Dashboards built without a decision focus become cluttered and unused." },
      { name: "Map the data sources and integrations required", text: "List all systems providing data: databases, CRMs, ERPs, payment gateways, spreadsheets, or third-party APIs. Confirm data is available, accessible, and consistent." },
      { name: "Define user roles and access levels", text: "Determine who will use the dashboard: executives, managers, operations staff, or customers. Each role may need different views, permissions, and drill-down access." },
      { name: "Choose between Laravel backend and React frontend", text: "For business dashboards, Laravel handles data aggregation, authentication, and API delivery. React or Next.js provides the interactive UI, charts, and real-time updates via WebSocket or polling." },
      { name: "Design the data schema and aggregation logic", text: "Plan database tables, indexes, and aggregation queries before building. Slow dashboard queries are a schema design problem, not a frontend problem." },
      { name: "Build and test the core data views first", text: "Start with the most-used views: summary cards, key charts, and the main data table. Test with real data volume. Optimise queries before adding features." },
      { name: "Add filters, exports, and drill-down features", text: "Once core views work, add date range filters, CSV/PDF exports, and drill-down navigation. Each feature should map to a decision a user actually needs to make." }
    ]
  },
  "wordpress-developer-for-hire-guide": {
    name: "How to Hire a WordPress Developer for Your Business",
    description: "A practical guide to evaluating and hiring a qualified WordPress developer for business websites, custom themes, plugins, and SEO-ready builds.",
    steps: [
      { name: "Define your WordPress project goals", text: "State what you need: a new business site, redesign, WooCommerce store, custom plugin, speed improvement, or SEO fix. Different goals require different WordPress skill sets." },
      { name: "Review portfolio for business WordPress sites", text: "Look for real business websites — not just template installs. Check for custom page builders, WooCommerce builds, multi-role sites, or plugin-free custom solutions." },
      { name: "Assess PHP and WordPress-specific knowledge", text: "Ask about custom post types, ACF, WooCommerce hooks, plugin conflicts, database queries, and child theme structure. Avoid developers who only drag-and-drop Elementor." },
      { name: "Check SEO and performance awareness", text: "A good WordPress developer understands Core Web Vitals, clean HTML output, image optimisation, and avoiding render-blocking plugins. Ask how they approach a slow WordPress site." },
      { name: "Ask about security and maintenance practices", text: "WordPress is a frequent target for attacks. Ask about user role management, plugin auditing, update strategies, backup plans, and how they handle malware." },
      { name: "Clarify what is included in the quote", text: "Confirm whether the quote includes design, mobile optimisation, SEO setup, testing, and post-launch support. Low quotes often exclude critical steps." },
      { name: "Set clear milestones and a handover plan", text: "Define deliverables: wireframes, development, content entry, testing, and launch. Agree on what documentation or training is included on handover." }
    ]
  },
  "web-application-development-services-guide": {
    name: "How to Plan Your First Custom Web Application",
    description: "A step-by-step guide to defining, scoping, and planning a custom web application build for your business, startup, or internal tool.",
    steps: [
      { name: "Write the business problem in one sentence", text: "Before technical planning, write the core problem your application must solve. For example: 'The team manages client invoices in spreadsheets and misses payment deadlines.' A clear problem prevents scope creep." },
      { name: "List the core features and user roles", text: "Define the minimum set of features required for the application to work: user accounts, data entry forms, reports, notifications, integrations, and access levels per role." },
      { name: "Choose the right technology stack", text: "Laravel is suitable for data-driven applications, dashboards, multi-role systems, and API backends. React or Next.js handles interactive frontends. Choose based on what the application does, not trends." },
      { name: "Design the database schema early", text: "Plan the database tables, relationships, and data flow before writing any code. A poorly designed schema is the most common cause of expensive rewrites later." },
      { name: "Build the backend API layer first", text: "Develop the core CRUD operations, authentication system, and business logic before building the interface. This allows testing logic independently and ensures the frontend always has accurate data." },
      { name: "Create the admin panel and reporting views", text: "Build admin controls, data export, audit logs, and reporting early so the business team can validate data accuracy before end-user features are built." },
      { name: "Plan for launch and scaling from the start", text: "Decide on hosting (VPS, cloud, managed), deployment workflow (CI/CD, GitHub Actions), database backups, and monitoring before launch. Scaling decisions made after launch are always more expensive." }
    ]
  },
  "web-developer-for-hire": {
    name: "How to Hire the Right Web Developer for Your Business Project",
    description: "A complete guide to finding, evaluating, and hiring a web developer who can solve your specific business problem, not just build a website.",
    steps: [
      { name: "Write a clear project brief before searching", text: "Define the platform, business goal, budget range, and timeline. A brief forces clarity before you speak to developers and helps you compare quotes accurately." },
      { name: "Decide between freelancer, agency, and dedicated developer", text: "Freelancers are cost-effective for defined projects. Agencies suit complex multi-team deliveries. Dedicated developers offer ongoing capacity. Match the model to your project length and complexity." },
      { name: "Search on specialist platforms", text: "For vetted freelancers, use Upwork, Fiverr Pro, or Toptal. For UAE or UK-based developers, search LinkedIn with specific skill terms: Laravel Developer Dubai, Shopify Developer London." },
      { name: "Review portfolio for projects matching your scope", text: "Ignore generic portfolio sites. Look for work that matches your industry, platform, or feature complexity: ecommerce, dashboards, integrations, or multi-role systems." },
      { name: "Send a test brief and evaluate the response", text: "Send a short brief and assess the response quality. A good developer asks clarifying questions. A weak one sends a quote immediately without understanding the requirements." },
      { name: "Check references or reviews on independent platforms", text: "Read reviews on Fiverr, Google, Clutch, or Goodfirms. Ask past clients directly about reliability, communication, and post-launch support." },
      { name: "Start with a small paid milestone", text: "For larger projects, agree on a small first milestone: discovery, wireframe, or database schema. This shows delivery quality before committing to the full engagement." }
    ]
  },
  "hire-web-developer-for-business": {
    name: "How to Hire a Web Developer for Your Business",
    description: "A practical business owner's guide to hiring a web developer: what to ask, what to check, and how to avoid common hiring mistakes.",
    steps: [
      { name: "Identify the real business problem first", text: "A web developer solves a specific problem. Define whether you need a new website, a faster site, a conversion fix, a custom application, or a system integration before searching." },
      { name: "Determine the platform and skill set required", text: "WordPress sites need PHP/WordPress expertise. Shopify stores need Liquid and Shopify API experience. Custom applications need Laravel or Node.js. Don't hire a WordPress developer to build a Laravel SaaS." },
      { name: "Set a realistic budget based on scope", text: "A business website costs differently from a custom application or ecommerce platform. Get three quotes to calibrate. Unusually low quotes typically mean shortcuts in testing, SEO setup, or post-launch support." },
      { name: "Evaluate communication quality from the first interaction", text: "The developer's response to your brief reveals their work quality. Clear questions about scope, goals, and constraints indicate a structured approach. Immediate pricing without questions is a warning sign." },
      { name: "Request a detailed proposal or project plan", text: "A professional developer should provide a milestone breakdown, technology recommendation, timeline, and what is and is not included. Vague proposals produce disputed invoices." },
      { name: "Verify technical competence with specific questions", text: "Ask about the approach for your key features: how will the dashboard be structured, how will the API integrate, how will the site score on Core Web Vitals. Technical vagueness is a red flag." },
      { name: "Include SEO and performance in the contract scope", text: "Ensure the contract includes Core Web Vitals targets, meta tag setup, sitemap, and structured data. Many developers consider these extras. They are foundational for any business website." }
    ]
  },
  "saas-web-application-developer": {
    name: "How to Plan Your First SaaS Web Application",
    description: "A step-by-step guide to planning, scoping, and starting a SaaS product from first idea to technical foundation.",
    steps: [
      { name: "Validate the problem before building anything", text: "Confirm the problem exists and people will pay to solve it. Talk to 10 potential customers, define who the target user is, and confirm the core value proposition before writing any code." },
      { name: "Define the minimum viable feature set (MVP)", text: "List only the features needed to solve the core problem for the first users. Cut everything else. SaaS products fail most often from overbuilding before validation, not underbuilding." },
      { name: "Plan the multi-tenant data model", text: "SaaS applications separate customer data by tenant. Plan how tenancy is implemented: separate databases, schema-per-tenant, or row-level tenant IDs. This decision affects every part of the application." },
      { name: "Choose Laravel as the backend framework", text: "Laravel's built-in support for authentication (Breeze, Jetstream), queues, billing (Cashier for Stripe), API resources, multi-tenancy (Spatie, Tenancy for Laravel), and testing makes it the most productive choice for SaaS backends." },
      { name: "Implement subscription billing from day one", text: "Integrate Stripe (or Paddle for global tax handling) before launch. Set up plan tiers, free trials, upgrade/downgrade flows, and webhook handling for payment events." },
      { name: "Build the onboarding and dashboard experience", text: "The onboarding flow determines retention. Build a guided setup process, empty states for new accounts, and a dashboard that shows value immediately after sign-up." },
      { name: "Plan for monitoring, support, and iteration", text: "Set up error monitoring (Sentry), uptime monitoring, and user feedback tools before launch. SaaS products improve through iteration. Build the feedback loop into the product from the start." }
    ]
  },
  "erp-software-development-guide": {
    name: "How to Plan a Custom ERP System for Your Business",
    description: "A step-by-step guide to planning, scoping, and building a custom ERP system that fits your business workflows without unnecessary complexity.",
    steps: [
      { name: "Map your current business workflows before any development", text: "Document every major workflow: procurement, inventory, invoicing, HR, production, and reporting. An ERP that does not match real workflows will be abandoned within months of launch." },
      { name: "Identify the pain points in your current system", text: "List specific problems: manual data entry, disconnected spreadsheets, duplicate records, slow reporting, or lack of real-time visibility. The ERP must solve these, not just digitise existing confusion." },
      { name: "Define the core modules required for the first phase", text: "Start with the two or three most critical modules: inventory management, invoicing, and purchasing, for example. Phase later additions. An over-scoped ERP phase one is the most common project failure." },
      { name: "Plan the user roles and access control system", text: "Define who can create, edit, approve, and view each module. ERP systems require granular role-based access control. Plan this before development — retrofitting permissions is expensive." },
      { name: "Choose Laravel as the backend framework", text: "Laravel provides a clean foundation for ERP architecture: service layers, database relationships, queues for async processing, API resources for integrations, and a maintainable codebase for multi-year projects." },
      { name: "Plan integrations with existing systems", text: "Map all external systems that must connect: accounting software, HR tools, bank feeds, ecommerce platforms, courier APIs, or legacy databases. Each integration needs its own reliability and error handling plan." },
      { name: "Build with reporting and audit trails from the start", text: "Every ERP module needs data history, change logs, and exportable reports. Build this into the data model from day one. Adding audit trails after launch requires rewriting core tables." }
    ]
  },
  "website-speed-optimization-services": {
    name: "How to Optimise Website Speed and Core Web Vitals",
    description: "A step-by-step process for auditing and improving website loading speed, Core Web Vitals scores, and overall performance for better SEO and conversion.",
    steps: [
      { name: "Measure baseline performance with PageSpeed Insights", text: "Run your homepage and key landing pages through Google PageSpeed Insights. Record LCP, INP, CLS, and overall scores for both mobile and desktop. Screenshot the results before making any changes." },
      { name: "Identify and fix Largest Contentful Paint (LCP) issues", text: "LCP above 2.5 seconds is the most common Core Web Vitals failure. Fix it by preloading the hero image, serving images in WebP or AVIF format, and reducing server response time (TTFB)." },
      { name: "Eliminate render-blocking resources", text: "Defer or async-load JavaScript that is not critical for the initial render. Move non-critical CSS to load after the page paint. Remove unused plugins, tracking scripts, and third-party widgets." },
      { name: "Optimise all images with compression and responsive sizes", text: "Convert all images to WebP. Use the HTML srcset attribute to serve different image sizes on different screen widths. Compress to under 100KB per image without visible quality loss." },
      { name: "Enable caching and use a CDN", text: "Set browser cache headers for static assets. Deploy Cloudflare or BunnyCDN to serve assets from the nearest edge location globally. CDN alone can reduce TTFB by 200–400ms." },
      { name: "Reduce Cumulative Layout Shift (CLS) below 0.1", text: "Fix CLS by always specifying width and height on images and embeds. Avoid inserting content above existing content after load. Reserve space for ads, banners, and dynamically loaded elements." },
      { name: "Verify all improvements and monitor ongoing", text: "Re-run PageSpeed Insights after each change. Submit the sitemap to Google Search Console and monitor the Core Web Vitals report weekly for regressions after plugin updates or content changes." }
    ]
  },
  "ai-search-seo-dubai-businesses": {
    name: "How to Optimise Your Business Website for AI Search",
    description: "A step-by-step guide to making your Dubai business website visible in AI-powered search results from ChatGPT, Perplexity, Google AI Overviews, and Claude.",
    steps: [
      { name: "Structure your content to answer specific business questions", text: "AI search engines extract answers from pages that directly answer questions. Write each page to answer a question: 'Who is the best Laravel developer in Dubai?' should have a clear, direct answer on your page." },
      { name: "Implement comprehensive structured data (JSON-LD schema)", text: "Add LocalBusiness, Person, Service, FAQPage, and Review schema to every relevant page. AI crawlers use structured data to understand what your business does, where you operate, and what problems you solve." },
      { name: "Add an FAQ section to every service page", text: "FAQPage schema with 5–10 business-relevant questions improves visibility in AI Overviews and Perplexity citations. Questions should match what clients actually ask before hiring a developer." },
      { name: "Build topical authority with long-form content", text: "Publish detailed guides, case studies, and comparison articles in your niche. AI search engines cite sources that demonstrate depth and expertise, not just keyword-matched pages." },
      { name: "Optimise for entity recognition", text: "Use your full name, business name, location, and service keywords consistently across your site, schema, social profiles, and external mentions. Google and AI systems build entity graphs from consistent signals." },
      { name: "Earn citations on authoritative platforms", text: "Get your business listed and reviewed on Clutch, Goodfirms, LinkedIn, and industry directories. AI search engines cross-reference these sources when generating business recommendations." },
      { name: "Allow AI crawlers in robots.txt", text: "Explicitly allow GPTBot, ClaudeBot, PerplexityBot, and OAI-SearchBot in your robots.txt. AI systems respect crawler directives. Blocking them removes you from AI-generated results entirely." }
    ]
  },
  "choose-laravel-instead-of-plugin": {
    name: "How to Decide When to Build with Laravel Instead of a Plugin",
    description: "A practical decision framework for choosing between a plugin-based solution and a custom Laravel application for business workflows.",
    steps: [
      { name: "List exactly what the plugin or WordPress solution cannot do", text: "Write down every workflow step the current plugin fails to handle. If the list is longer than three items that affect revenue, productivity, or data accuracy, a custom solution is worth evaluating." },
      { name: "Estimate the cost of workarounds over 12 months", text: "Add up staff time spent on manual exports, copy-paste tasks, plugin conflicts, and slow page loads caused by bloated plugins. This is the true hidden cost of staying with the wrong tool." },
      { name: "Identify data ownership and integration requirements", text: "If the workflow involves data that must sync with a CRM, ERP, payment system, or third-party API, Laravel's ORM and API layer handle this cleanly. Plugins require complex and often unreliable middleware." },
      { name: "Define the user roles and permission structure", text: "Businesses with multiple user types (admin, manager, staff, client) need role-based access control. Laravel's built-in auth and Gates/Policies system handles this far better than any WordPress user role plugin." },
      { name: "Map out the required database structure", text: "If the data model has relationships (orders → line items → customers → invoices), a relational database with Laravel Eloquent is the right tool. Plugin tables are flat and rarely queryable at business scale." },
      { name: "Assess the scalability requirement over 24 months", text: "Estimate transaction volume, concurrent users, and data growth. Laravel applications scale horizontally with queues, caching, and load balancing. Plugin-based solutions hit WordPress database limits quickly." },
      { name: "Get a scoped estimate before deciding", text: "A Laravel developer can scope a custom application in 2–4 hours. Compare the estimate against the annual cost of plugin subscriptions, workaround time, and the value of the workflow improvements." }
    ]
  },
  "wordpress-vs-custom-laravel": {
    name: "How to Choose Between WordPress and a Custom Laravel Application",
    description: "A structured decision process for business owners choosing between a WordPress website and a custom Laravel web application.",
    steps: [
      { name: "Define the primary purpose of the platform", text: "WordPress is built for content publishing, marketing sites, and blogs. Laravel is built for custom business logic, data workflows, and application platforms. Identify which purpose your project serves." },
      { name: "Audit the content management requirements", text: "If non-technical staff need to publish pages, blogs, and news regularly, WordPress CMS is the right choice. If the platform is primarily for business logic (orders, reports, users), CMS is secondary." },
      { name: "List all the custom features required", text: "Write every custom feature: user dashboards, booking systems, inventory, invoicing, API connections, role-based access. If more than two features require plugin workarounds, Laravel is almost always cleaner." },
      { name: "Evaluate the security and maintenance risk", text: "WordPress has thousands of plugins with frequent vulnerabilities. A custom Laravel application has a smaller attack surface. If the platform handles sensitive client or financial data, Laravel's security model is preferable." },
      { name: "Compare total cost of ownership over 3 years", text: "Factor in WordPress plugin subscription costs, developer time to resolve plugin conflicts, performance hosting costs for a bloated plugin stack, versus a Laravel application with no recurring plugin fees." },
      { name: "Assess in-house team capability for maintenance", text: "WordPress can be maintained by a marketing manager or junior developer. Laravel requires a PHP developer familiar with the framework. Match the tool to the team that will own it long-term." },
      { name: "Consider starting with WordPress and migrating later", text: "Many businesses start with WordPress for speed and migrate the business logic to Laravel once requirements are clear. A clean WordPress site with well-structured data is easier to migrate than a plugin-heavy mess." }
    ]
  },
  "ai-chatbots-laravel-wordpress-shopify": {
    name: "How to Add an AI Chatbot to Laravel, WordPress or Shopify",
    description: "A step-by-step guide to planning and implementing an AI chatbot or automation for web applications built on Laravel, WordPress, or Shopify.",
    steps: [
      { name: "Define the chatbot's specific job", text: "Identify one primary use case: lead qualification, product recommendation, customer support, or internal workflow automation. Chatbots that try to do everything fail at all of them." },
      { name: "Choose the right AI API for your use case", text: "OpenAI GPT-4 is the most versatile for general chatbots. Claude API is strong for document processing and complex reasoning. Smaller models (GPT-3.5, Mistral) are cheaper for high-volume simple tasks." },
      { name: "Design the conversation flow and fallback handling", text: "Map out the 5–10 most common user inputs and the correct responses. Design explicit fallback paths: when the chatbot cannot answer, route to a human, a contact form, or a clear 'I'll get back to you' response." },
      { name: "Integrate the API with your platform backend", text: "For Laravel: use the HTTP client or an SDK to call the AI API from a controller. For WordPress: add the API call in a custom plugin or functions.php with nonce verification. For Shopify: use a custom app or Shopify Functions." },
      { name: "Store conversation history for context", text: "AI chatbots without memory give generic responses. Store conversation turns in your database (Laravel: conversations table; WordPress: custom post type; Shopify: customer metafields) and pass history to each API call." },
      { name: "Build the frontend chat UI", text: "A simple chat widget can be built with vanilla JS and CSS for any platform. For React-based apps, use a component with local state. Ensure the widget loads asynchronously and does not block Core Web Vitals." },
      { name: "Test, monitor, and refine the model", text: "Run 50+ test conversations before launch. Monitor real conversations in the first two weeks. Collect failure cases and improve the system prompt or add explicit handling for the most common failures." }
    ]
  },
  "remote-full-stack-developer-vs-agency": {
    name: "How to Decide Between a Remote Developer and a Local Agency",
    description: "A structured framework for choosing the right engagement type — remote full-stack developer, local agency, or offshore team — for your web project.",
    steps: [
      { name: "Define the project scope and timeline clearly", text: "Projects under 3 months with a defined scope are ideal for a single remote developer. Projects requiring parallel development streams, design, and content work benefit from an agency's team structure." },
      { name: "Evaluate your internal project management capacity", text: "If you have a technical co-founder or CTO who can manage a developer, a remote developer costs 40–70% less than an agency. If no one internally can review code or manage sprints, an agency's PM overhead has real value." },
      { name: "Compare total cost, not hourly rate", text: "A remote developer at £60/hour with 2 months of focused work costs £19,200. An agency at £90/hour with 3 months (including revision cycles) costs £43,200. Total project cost is always the meaningful comparison." },
      { name: "Assess the communication requirement", text: "Remote developers work asynchronously. If your project requires daily in-person standups, whiteboard sessions, or on-site availability, a local agency may reduce friction. Most modern business web projects work better async." },
      { name: "Check post-launch accountability", text: "Agencies have contracts, SLAs, and account managers who handle post-launch support. A remote developer may disappear after delivery. Verify post-launch commitment, response time, and maintenance terms before signing." },
      { name: "Request work samples from the same tech stack", text: "Never hire based on CVs alone. Request a code sample, a live project, or a short paid test task in your actual tech stack — Laravel, React, Shopify, WordPress. This one step eliminates 80% of poor hires." },
      { name: "Start with a paid scoping session", text: "Before committing to a full project, pay a developer or agency for a scoping session (2–4 hours). The quality of the questions they ask and the clarity of the brief they produce tells you more than any portfolio." }
    ]
  },
  "php-developer-for-hire": {
    name: "How to Hire a PHP Developer for a Business Web Project",
    description: "A practical checklist for evaluating PHP developers before hiring — covering code quality, security knowledge, framework experience, and long-term maintainability.",
    steps: [
      { name: "Confirm framework expertise, not just PHP experience", text: "PHP alone is not enough. Confirm the developer works with Laravel or Symfony — modern MVC frameworks with security, ORM, and testing built in. Avoid developers who write raw PHP without a framework for new projects." },
      { name: "Review code structure and separation of concerns", text: "Request a code sample or GitHub repository. Good PHP developers separate business logic from presentation. If the sample has database queries inside HTML templates, that is a maintainability red flag." },
      { name: "Test security awareness directly", text: "Ask how they handle SQL injection prevention, CSRF protection, XSS, and authentication. A developer who says 'use prepared statements' without mentioning ORM parameterisation or framework-level protection is working at a lower level than your project needs." },
      { name: "Evaluate API development experience", text: "Modern PHP projects involve REST APIs consumed by React frontends or mobile apps. Ask about API versioning, authentication methods (JWT, Sanctum, Passport), rate limiting, and error response formats." },
      { name: "Verify database design and query optimisation skills", text: "Ask how they handle N+1 query problems, database indexing strategy, and migrations in a team environment. Developers who cannot explain eager loading in an ORM context will cause performance issues at scale." },
      { name: "Check testing and deployment practices", text: "Ask about their approach to unit and feature tests, CI/CD pipeline experience, and deployment process (Forge, Envoyer, GitHub Actions). PHP developers without testing discipline create technical debt that compounds quickly." },
      { name: "Agree a paid trial task before the full project", text: "Pay for a 4–8 hour trial task that mirrors a real part of the project. Evaluate code quality, communication, documentation, and time accuracy. This is the most reliable signal before committing to a full engagement." }
    ]
  },
  "ecommerce-website-developer-for-hire": {
    name: "How to Hire an Ecommerce Developer for Your Online Store",
    description: "A step-by-step guide for store owners evaluating and hiring the right ecommerce developer for Shopify, WooCommerce, or custom platforms.",
    steps: [
      { name: "Choose the platform before hiring the developer", text: "Shopify, WooCommerce, and custom Laravel ecommerce each require different expertise. Shopify developers know Liquid templating, the App Store, and Shopify Functions. WooCommerce developers know WordPress PHP hooks. Define the platform first." },
      { name: "Audit the developer's conversion-focused experience", text: "Request case studies showing conversion rate improvements, not just stores they built. Look for evidence of A/B testing, checkout optimisation, product page UX improvements, and mobile performance work." },
      { name: "Verify payment gateway integration knowledge", text: "Ask which payment gateways they have integrated: Stripe, PayPal, Klarna, Moneris, Afterpay. Confirm they understand regional requirements — UK VAT, Canadian taxes, UAE VAT — not just the API integration." },
      { name: "Check post-launch support and maintenance terms", text: "Ecommerce stores need ongoing maintenance: plugin updates, theme compatibility fixes, seasonal feature additions, performance monitoring. Confirm the developer's post-launch availability and response time before signing." },
      { name: "Evaluate their speed and Core Web Vitals approach", text: "A slow ecommerce site loses sales. Ask how they measure and improve LCP, INP, and CLS on product pages. Developers who mention specific tools (PageSpeed Insights, Lighthouse, GTmetrix) and techniques show real depth." },
      { name: "Request references from live ecommerce stores", text: "Ask for references from 2–3 live stores they built or worked on. Check Google reviews, Trustpilot scores, mobile experience, and page speed on those stores yourself. Live stores don't lie." },
      { name: "Get a scoped estimate with specific deliverables", text: "A professional ecommerce developer provides a written estimate covering: platform setup, theme/design, product configuration, payment integration, shipping, SEO metadata, speed optimisation, and launch testing. Vague estimates lead to scope disputes." }
    ]
  },
  "nextjs-developer-for-hire": {
    name: "How to Hire a Next.js Developer for Your Web Project",
    description: "A practical guide to identifying when Next.js is the right choice and evaluating Next.js developers before hiring.",
    steps: [
      { name: "Confirm Next.js is the right tool for your project", text: "Next.js is ideal for content-heavy sites needing SEO (SSG/SSR), React dashboards, and full-stack applications. It is overkill for simple marketing sites and not suited for complex backend logic that belongs in Laravel or Node.js." },
      { name: "Verify App Router vs Pages Router experience", text: "Next.js 13+ introduced the App Router (React Server Components, layouts, streaming). Ask which router they work with and why. Developers stuck on Pages Router for new projects in 2024 are behind the framework's direction." },
      { name: "Test TypeScript proficiency", text: "Production Next.js applications require TypeScript. Ask about their TypeScript configuration, how they type API responses, and how they handle strict mode. Developers who work in JavaScript-only Next.js produce unmaintainable code at scale." },
      { name: "Evaluate rendering strategy knowledge", text: "Ask when they use SSG (generateStaticParams), SSR (dynamic page with fetch), ISR (revalidate), and client components (use client). The ability to explain trade-offs shows production experience, not just tutorial knowledge." },
      { name: "Assess performance optimisation experience", text: "Next.js has built-in image optimisation, font loading, and bundling. Ask how they optimise Core Web Vitals in Next.js specifically — not just general web performance. Request examples of Lighthouse scores from production Next.js sites." },
      { name: "Check API routes and backend integration experience", text: "Ask how they connect Next.js to backend services: API routes, tRPC, GraphQL, or Laravel REST APIs. Full-stack Next.js projects require both frontend and backend competence — not just React knowledge." },
      { name: "Request a portfolio of production Next.js sites", text: "Request links to production Next.js applications they built. Check the PageSpeed score, check if the site uses App Router, and review the source for proper SEO metadata, Open Graph tags, and structured data." }
    ]
  },
  "laravel-vs-nodejs": {
    name: "How to Choose Between Laravel and Node.js for Your Backend",
    description: "A practical comparison framework for business owners and CTOs deciding between Laravel (PHP) and Node.js for a web application backend.",
    steps: [
      { name: "Define the primary backend workload type", text: "Laravel excels at data-heavy applications with complex database relationships, admin panels, and business workflows. Node.js excels at real-time features (chat, notifications), high-concurrency APIs, and streaming data pipelines." },
      { name: "Assess team availability and hiring market", text: "PHP/Laravel developers are more abundant and cheaper to hire than experienced Node.js developers in most markets. If you need to build a team, consider talent availability and hiring cost alongside technical fit." },
      { name: "Evaluate the database interaction complexity", text: "Laravel's Eloquent ORM and query builder handle complex relational queries elegantly. Node.js ORMs (Sequelize, Prisma) are improving but Laravel's database tooling is more mature for complex multi-table business data." },
      { name: "Consider the real-time requirement", text: "If the application requires WebSocket connections, live notifications, or collaborative features, Node.js with Socket.io or NestJS has a natural advantage. Laravel can handle real-time with Reverb or Pusher, but Node.js is the native choice." },
      { name: "Compare the ecosystem for your specific needs", text: "Laravel has Cashier (billing), Sanctum (auth), Horizon (queues), Telescope (debugging), Forge (deployment). Node.js relies on assembling individual npm packages. Laravel's curated ecosystem reduces integration time for standard business applications." },
      { name: "Evaluate long-term maintenance cost", text: "Laravel applications with Eloquent and service classes are highly readable for any PHP developer. Node.js callback patterns and async/await complexity can create maintainability issues without strong architectural discipline." },
      { name: "Prototype with Laravel unless real-time is required", text: "For most business web applications — dashboards, CRMs, ERPs, portals, APIs, ecommerce backends — Laravel delivers faster, cheaper, and with fewer integration problems. Choose Node.js only when concurrency or real-time is the primary requirement." }
    ]
  },
  "freelance-web-developer-dubai": {
    name: "How to Hire a Freelance Web Developer in Dubai",
    description: "A practical guide for Dubai businesses hiring a freelance web developer — covering rates, platforms, evaluation, and structuring the engagement.",
    steps: [
      { name: "Define the project scope and budget before searching", text: "Dubai freelance web developer rates range from AED 2,500–8,000 for small projects to AED 15,000–50,000 for custom applications. Define what you need built, the timeline, and your budget before contacting any developer." },
      { name: "Choose the right hiring platform or channel", text: "LinkedIn and direct referrals produce the highest quality Dubai freelancers. Upwork and Freelancer have Dubai-based developers but require more vetting. Local Facebook groups (Dubai Freelancers, UAE Tech) have active developers for shorter projects." },
      { name: "Verify UAE residency and professional status", text: "Ask if the developer is UAE-resident, has a freelance permit (IFZA, DMCC, or government body), and can issue a proper invoice. Working with an unlicensed freelancer creates tax and liability complications for your business." },
      { name: "Review a portfolio of relevant work in your industry", text: "Request links to 3–5 live projects in your industry. Check mobile performance, loading speed, and design quality directly. Dubai businesses often work across Arabic and English — confirm multilingual and RTL capability if needed." },
      { name: "Request a technical brief before any code is written", text: "A professional freelance developer in Dubai should provide a written scope covering pages, features, technology stack, timeline, payment milestones, and post-launch support terms. Vague proposals lead to cost overruns." },
      { name: "Agree payment milestones, not full payment upfront", text: "Structure payment in 3–4 milestones: initial deposit (30%), design approval, development completion, and final launch sign-off. This protects both parties and aligns incentives throughout the project." },
      { name: "Clarify post-launch support and IP ownership", text: "Confirm in writing who owns the code, design assets, and domain after launch. Clarify bug fix responsibility (duration), response time, and whether ongoing maintenance is included or billed separately." }
    ]
  },
  "laravel-api-development": {
    name: "How to Build a Scalable REST API with Laravel",
    description: "A step-by-step process for planning, building, and deploying a production-ready REST API using Laravel for business applications.",
    steps: [
      { name: "Plan the API resource structure and versioning", text: "Map every resource the API will expose: users, products, orders, invoices. Decide on versioning from day one (/api/v1/). APIs without versioning become impossible to maintain once clients depend on the current structure." },
      { name: "Design authentication and authorisation", text: "Use Laravel Sanctum for SPA and mobile token authentication. Use Passport for OAuth2 flows. Define roles and permissions with Laravel's Gates and Policies before writing any endpoint — authorisation retrofitted after launch is insecure." },
      { name: "Build consistent response formatting", text: "Every API response should follow the same structure: data, meta, errors. Use API Resources (Eloquent Resource classes) to transform models. Never return raw Eloquent models — they expose database column names and sensitive fields." },
      { name: "Handle validation at the request level", text: "Use Form Request classes for every endpoint that accepts input. Centralise validation rules, error messages, and authorisation checks. Controllers that contain validation logic become unreadable and untestable quickly." },
      { name: "Implement rate limiting and request throttling", text: "Use Laravel's built-in throttle middleware on all public endpoints. Set different limits per plan tier for commercial APIs. Log rate limit events. Without rate limiting, a single client script can bring down your API." },
      { name: "Write feature tests for every endpoint", text: "Use Laravel's HTTP testing helpers to write feature tests for every endpoint: happy path, validation failures, unauthorised access, and edge cases. APIs without tests break silently when business logic changes." },
      { name: "Document the API with OpenAPI/Swagger", text: "Generate API documentation from your code using scribe or l5-swagger. Document every endpoint, request parameter, response format, and error code. Internal and third-party clients cannot integrate reliably with undocumented APIs." }
    ]
  },
  "shopify-custom-theme-development": {
    name: "How to Plan a Custom Shopify Theme Development Project",
    description: "A step-by-step guide for store owners deciding when a custom Shopify theme is worth the investment and how to plan the development process.",
    steps: [
      { name: "Audit what the current theme cannot do", text: "List every UX or functionality gap the current theme creates: slow load times, poor mobile experience, inability to match brand identity, missing conversion features, or App conflicts. If the list has 5+ items affecting revenue, custom is worth evaluating." },
      { name: "Compare premium theme vs custom development cost", text: "A quality premium Shopify theme costs £100–300. A custom theme costs £3,000–12,000. Justify custom development when the conversion improvement, brand differentiation, or performance gain is worth at least 3x the development cost in annual revenue." },
      { name: "Define the theme sections and functionality requirements", text: "List every page type (home, collection, product, cart, checkout), every custom section, and every interactive feature. Shopify's Section and Block system should be mapped out before development starts." },
      { name: "Design in Figma before writing any Liquid", text: "A professional Shopify theme project starts with Figma designs for every page type on mobile and desktop. Development without approved designs creates revision cycles that double the project cost." },
      { name: "Develop with performance as a primary constraint", text: "Set a target of 90+ PageSpeed score on mobile from day one. Every section, image, font, and third-party app added to the theme affects Core Web Vitals. Measure performance after every major section is built." },
      { name: "Use Shopify's Theme Check and Online Store 2.0 standards", text: "Run Shopify Theme Check on every commit. Build sections as independent, configurable blocks. Follow Online Store 2.0 architecture so the theme works with Shopify's native editor and future platform updates." },
      { name: "Test across devices, browsers, and real checkout flows", text: "Test on iPhone Safari, Android Chrome, Firefox, and Edge. Process a real test order through checkout. Verify discount codes, cart behaviour, variant selection, and metafield display work correctly before launch." }
    ]
  },
  "web-app-vs-website": {
    name: "How to Decide If Your Business Needs a Website or a Web Application",
    description: "A practical decision framework for business owners choosing between a marketing website and a custom web application.",
    steps: [
      { name: "Identify what the platform needs to do, not what it needs to look like", text: "A website presents information and converts visitors. A web application processes data, manages state, enforces permissions, and executes business logic. The primary function determines the right choice." },
      { name: "List every user interaction beyond reading content", text: "Every interaction that creates, reads, updates, or deletes data is an application function: user login, order submission, report generation, file upload, invoice creation. Count these. Three or more complex interactions signals a web application." },
      { name: "Define the user role structure", text: "If different users see different data, have different permissions, or take different actions, you need a web application with role-based access control — not a website with a contact form." },
      { name: "Evaluate the data persistence requirement", text: "Websites display static or CMS-managed content. Web applications store business data that changes: orders, inventory, customer records, project statuses, financial records. Any real business data persistence means web application." },
      { name: "Consider integration requirements", text: "If the platform must sync with a CRM, ERP, payment processor, or third-party API in both directions, a web application with a proper API layer is required. WordPress plugins cannot reliably handle bidirectional API synchronisation." },
      { name: "Assess whether the platform generates revenue directly", text: "Platforms that process payments, manage subscriptions, or enable transactions need the security, error handling, and audit trails of a web application. Revenue-generating flows cannot be handled by a static site or CMS." },
      { name: "Plan for the starting point you can afford", text: "Many businesses start with a WordPress website and move business logic to a web application when the need is clear. A clean starting point is better than building a complex application before requirements are validated." }
    ]
  },
  "api-integration-services": {
    name: "How to Plan an API Integration for Your Business",
    description: "A step-by-step guide for business owners planning an API integration project — covering cost, scope, common mistakes, and how to manage the engagement.",
    steps: [
      { name: "Define exactly what data needs to move between systems", text: "Before hiring anyone, write a data map: what data goes from System A to System B, how often, triggered by what event, and what happens when it fails. Vague integration briefs cause scope disputes and cost overruns." },
      { name: "Identify the authentication method for each API", text: "Common API auth types: API key, OAuth 2.0, JWT, Basic Auth, and webhook signatures. Each requires different implementation. Confirm the auth method for every API in the integration before starting development." },
      { name: "Review both API documentations before scoping", text: "A developer should read both API docs (source and destination) before providing an estimate. Many integrations are blocked by undocumented rate limits, missing endpoints, or payload format mismatches discovered mid-project." },
      { name: "Design the error handling and retry logic", text: "APIs fail. Design what happens when the remote API returns a 429 (rate limit), 500 (server error), or timeout. Integrations without retry logic and alerting silently drop data and create business problems that are hard to diagnose." },
      { name: "Build with webhooks where real-time sync is required", text: "Polling APIs on a cron schedule introduces latency and burns rate limits. When the source API supports webhooks, use them for real-time sync. Webhooks also reduce API request volume, which matters at scale." },
      { name: "Create a logging and monitoring layer", text: "Log every API call: timestamp, request payload, response code, response body. Store logs for 30 days minimum. An integration without logs is impossible to debug when something goes wrong — and something always goes wrong." },
      { name: "Test against production with real data volumes", text: "Test integrations with real data volumes, not just test records. Integrations that work with 10 test records often fail with 10,000 production records due to pagination, memory limits, or rate limiting. Load test before go-live." }
    ]
  },
  "wordpress-speed-optimization": {
    name: "How to Speed Up a WordPress Website",
    description: "A technical step-by-step guide for improving WordPress website speed, Core Web Vitals scores, and page performance without breaking the site.",
    steps: [
      { name: "Audit the current state with PageSpeed Insights and GTmetrix", text: "Run the homepage and key landing pages through PageSpeed Insights and GTmetrix. Record current LCP, INP, CLS, and TTFB scores. Identify which specific issues are scoring red — don't optimise blindly." },
      { name: "Audit and remove unnecessary plugins", text: "Every active WordPress plugin adds PHP execution time, database queries, and often frontend assets. Deactivate all non-essential plugins and test. Reactivate one by one. Many sites shed 1–2 seconds by removing 5–10 unused plugins." },
      { name: "Install and configure a caching plugin properly", text: "WP Rocket, W3 Total Cache, or LiteSpeed Cache must be configured correctly — not just activated. Enable page caching, browser caching, Gzip/Brotli compression, and minification. Wrong caching settings cause broken pages, not speed." },
      { name: "Optimise every image with WebP conversion", text: "Use ShortPixel or Imagify to bulk-convert existing images to WebP. Configure lazy loading for below-fold images. Set explicit width and height on all images to prevent CLS. Images are the most common cause of slow WordPress sites." },
      { name: "Move to a better hosting environment", text: "Shared hosting is the single biggest bottleneck for WordPress performance. Moving to managed WordPress hosting (Kinsta, WP Engine, Cloudways) or a VPS with Redis and OPcache typically halves TTFB without any code changes." },
      { name: "Fix render-blocking scripts and stylesheets", text: "Use the Eliminate Render-Blocking Resources recommendations from PageSpeed. Defer non-critical JavaScript. Load Google Fonts locally with font-display: swap. Remove or async-load third-party chat widgets, tracking pixels, and popups that fire on every page." },
      { name: "Validate improvements and set up ongoing monitoring", text: "Re-run PageSpeed after each optimisation step. Check Google Search Console's Core Web Vitals report weekly after launch. Set up an uptime monitor (UptimeRobot) and performance alert to catch regressions after plugin updates." }
    ]
  },
  "ecommerce-shopify-vs-woocommerce": {
    name: "How to Choose Between Shopify and WooCommerce for Your Store",
    description: "A structured comparison framework for businesses deciding between Shopify and WooCommerce for their ecommerce build.",
    steps: [
      { name: "Define who will manage the store day-to-day", text: "Shopify is designed for non-technical merchants: adding products, processing orders, and running promotions require no development knowledge. WooCommerce requires comfort with WordPress admin, plugin management, and occasional developer support." },
      { name: "Assess the product catalogue complexity", text: "Shopify handles up to 100 variants per product natively. WooCommerce can handle more with plugins. If you need complex product configurators, custom variant attributes, or subscription products, check which platform's native or plugin support matches your catalogue." },
      { name: "Compare total platform cost over 3 years", text: "Shopify: monthly fee (£29–299) plus transaction fees on non-Shopify Payments. WooCommerce: hosting (£15–80/month) plus plugin subscriptions (£200–600/year). Neither is always cheaper — calculate your specific cost with your expected transaction volume." },
      { name: "Evaluate payment gateway requirements by market", text: "Shopify Payments is available in UAE (AED), UK (GBP), and Canada (CAD) but adds transaction fees with third-party gateways. WooCommerce supports any gateway via plugin: Stripe, Moneris, PayTabs, Telr, Klarna. Check which gateways you need." },
      { name: "Consider hosting control and data ownership", text: "WooCommerce is self-hosted: you control the server, database, and backups. Shopify hosts everything — you cannot access the database. If data portability, server-level customisation, or compliance requirements demand self-hosting, WooCommerce is the only option." },
      { name: "Assess the customisation depth required", text: "Shopify's Liquid templating and App Store handle most customisations. Very deep product page customisation, checkout modifications (requires Shopify Plus), or complex business logic requires Shopify Functions or a custom app. WooCommerce has full PHP access for any customisation." },
      { name: "Plan for scalability and traffic spikes", text: "Shopify automatically scales for traffic spikes — no infrastructure management needed. WooCommerce performance depends entirely on your hosting. For stores expecting seasonal traffic spikes, Shopify's managed infrastructure removes risk. WooCommerce requires proactive hosting management." }
    ]
  },
  "web-developer-london-guide": {
    name: "How to Hire a Web Developer in London",
    description: "A step-by-step framework for London businesses hiring a web developer — covering rates, how to evaluate proposals, and what to check before signing.",
    steps: [
      { name: "Define your project scope in writing before approaching anyone", text: "Write a one-page project brief: what needs to be built, what platform (WordPress, Shopify, Laravel, React), required features, expected user volume, timeline, and budget range. London developers who receive a clear brief provide accurate estimates. Developers who receive vague briefs provide vague prices." },
      { name: "Shortlist 3–4 developers or agencies to approach", text: "Contact 3–4 developers or agencies with your brief. Compare the quality of their responses, not just the price. A developer who asks follow-up questions about your business goals and technical constraints is thinking like an engineer. A developer who sends a price within hours without asking anything is guessing." },
      { name: "Check portfolio work on mobile with PageSpeed Insights", text: "Open each developer's portfolio on your phone and run 2 projects through Google PageSpeed Insights. A developer who builds slow websites in London is not the right choice for a business that depends on website conversions. Scores below 70 on mobile are a red flag." },
      { name: "Compare total project cost, not hourly rate", text: "A London agency at £120/hour for 3 months may cost twice as much as a senior freelancer at £85/hour who delivers the same outcome in 6 weeks. Calculate total project cost based on scope, timeline, and revision rounds. Hourly rate comparison without total cost context is misleading." },
      { name: "Request a written scope with milestones and deliverables", text: "A professional London web developer provides a written scope: pages, features, technology stack, timeline, payment milestones, and post-launch support terms. Reject any engagement that starts without a written scope. Scope disputes are the most common cause of London web project cost overruns." },
      { name: "Ask for references from similar London or UK projects", text: "Request 2–3 references from clients with similar project types in the UK. Call or email those references and ask: Was the project delivered on time? Was the final cost within the original estimate? How was communication during development? Would you hire them again?" },
      { name: "Agree post-launch support terms before signing", text: "Post-launch support is where many London web development engagements fail. Confirm in writing: who fixes bugs after launch, how quickly they respond, whether maintenance is included or billed separately, and who owns the code and domain after project completion." }
    ]
  },
  "laravel-developer-uk-guide": {
    name: "How to Hire a Laravel Developer for a UK Business Project",
    description: "A step-by-step evaluation process for UK businesses hiring a Laravel developer — covering code review, security testing, and structuring the engagement.",
    steps: [
      { name: "Define the application requirements before any developer conversations", text: "Write a technical brief: user roles, core features, data model outline, third-party integrations, expected concurrent users, and deployment environment. Laravel developers who receive a clear brief provide accurate estimates and flag architectural issues early. Vague briefs produce scope disputes mid-project." },
      { name: "Request a code sample or GitHub repository from each candidate", text: "Ask every Laravel developer candidate for a public GitHub repository or a code sample from a recent Laravel project. Look for: service classes separating business logic, Eloquent relationship definitions, Form Request classes for validation, clean controller methods under 50 lines, and consistent naming conventions." },
      { name: "Test Laravel-specific security knowledge", text: "Ask directly: how do you prevent SQL injection in Laravel? How do you handle CSRF? How do you manage environment secrets? Senior UK Laravel developers explain ORM parameterisation, Blade CSRF tokens, and .env files without prompting. Developers who give vague answers are not ready for production UK systems." },
      { name: "Evaluate testing practices with specific questions", text: "Ask what testing tools they use and request an example feature test. UK Laravel developers with production experience write HTTP feature tests using Laravel's testing suite, use factories for test data, and test both happy paths and error conditions. Developers who only do manual testing create systems that break silently." },
      { name: "Assess deployment and operations experience", text: "Ask about their deployment process: Laravel Forge, Envoyer, GitHub Actions, or manual deployment? How do they handle database migrations in production? How do they monitor application health? UK businesses running production Laravel applications need developers who own the full deployment lifecycle." },
      { name: "Agree on project-based pricing with milestones", text: "Get a project-based estimate with milestones: technical design, database schema review, feature development, testing, and launch. Milestoned contracts align incentives and provide clear checkpoints to assess progress. Avoid open-ended hourly contracts for defined-scope Laravel projects." },
      { name: "Confirm post-launch support and code ownership", text: "Confirm in writing who owns the codebase after launch, how long bug fixes are included, what the response time SLA is for critical issues, and whether ongoing feature development is available. UK Laravel applications need post-launch support — the first month after launch always surfaces edge cases." }
    ]
  },
  "shopify-developer-canada-guide": {
    name: "How to Hire a Shopify Developer for a Canadian Store",
    description: "A step-by-step process for Canadian businesses evaluating Shopify developers — covering tax configuration, payment gateways, and what to test before hiring.",
    steps: [
      { name: "Define the store requirements specific to Canada", text: "Write a brief covering: product types, target provinces for shipping, payment gateways required (Shopify Payments, Moneris, Stripe Canada), whether bilingual (French/English) is needed for Quebec, and CASL compliance requirements for email marketing. Canadian-specific requirements must be in the brief." },
      { name: "Test provincial tax configuration knowledge directly", text: "Ask each developer candidate how they configure GST, HST, PST, and QST for a Canadian Shopify store shipping to Ontario, BC, Alberta, and Quebec. A developer who cannot explain province-specific tax rates and Shopify's tax settings without looking it up should not build your Canadian store." },
      { name: "Confirm Canadian payment gateway experience", text: "Ask specifically about Moneris, Stripe Canada, and Shopify Payments. Ask about common integration challenges: Moneris test credentials, Shopify's gateway API for non-native gateways, and what happens when Shopify Payments is not available for the product category. Request confirmation of live Canadian store integrations." },
      { name: "Check Canada Post and Purolator shipping integration", text: "Canadian stores commonly need Canada Post API integration for real-time shipping rates. Ask how they configure Canada Post and Purolator in Shopify, how they handle dimensional weight, and whether they have experience with third-party shipping rate apps vs direct carrier API integration." },
      { name: "Review live Canadian Shopify stores in their portfolio", text: "Request links to 3 live Canadian Shopify stores they built. Check mobile performance (run PageSpeed Insights), verify Canadian tax rates are displayed correctly at checkout, confirm Canada Post or Purolator appears as a shipping option, and check that currency is displayed in CAD." },
      { name: "Agree on CAD-denominated project pricing with milestones", text: "Get a written estimate in CAD with milestone payment structure: deposit, design approval, development completion, testing, and launch sign-off. Confirm post-launch support duration and terms in the contract before signing." },
      { name: "Verify CASL compliance for email marketing and transactional emails", text: "If the store uses email marketing (Klaviyo, Mailchimp, Omnisend), confirm the developer has configured CASL-compliant double opt-in for Canadian subscribers. Canadian anti-spam law requires explicit consent for marketing emails — a missing or incorrect setup creates legal liability." }
    ]
  },
  "web-developer-manchester-guide": {
    name: "How to Hire a Web Developer in Manchester",
    description: "A practical step-by-step guide for Manchester and North West UK businesses hiring a web developer for their project.",
    steps: [
      { name: "Define the project type and platform before approaching developers", text: "Decide whether you need a WordPress site, a Shopify store, a Laravel application, or a React-based platform before contacting any developer. Platform choice determines the skill set required. A developer who is excellent at Shopify may be poor at Laravel. Clarity on platform prevents expensive mismatches." },
      { name: "Compare Manchester agency quotes with senior freelance estimates", text: "Get at least one agency quote and one senior freelance developer estimate for the same brief. Compare total project cost, not hourly rate. Manchester agency projects in the £5,000–£30,000 range often have £2,000–£10,000 of non-development overhead that a senior freelancer eliminates without reducing quality." },
      { name: "Request portfolio work from Manchester or North West clients", text: "Ask for 2–3 examples of live projects built for Manchester, Greater Manchester, or North West clients. Industry familiarity (logistics, retail, creative, hospitality) reduces scoping errors and development time. Local client references are easy to verify with a quick phone call." },
      { name: "Run PageSpeed Insights on their live portfolio projects", text: "Test at least two of the developer's live projects on Google PageSpeed Insights, mobile view. Manchester businesses with ecommerce or lead-generation sites need fast-loading websites. A developer whose portfolio projects score below 65 on mobile PageSpeed is not a strong candidate for performance-critical work." },
      { name: "Request a written scope with milestone breakdown", text: "A professional Manchester web developer provides a written scope: pages, features, technology choices, timeline, payment milestones, and post-launch terms. Any proposal that arrives without a milestone breakdown signals poor project management discipline — this causes budget overruns." },
      { name: "Evaluate communication quality during the proposal stage", text: "The quality of a developer's proposal communication predicts the quality of development communication. A developer who responds within 24 hours, asks clarifying questions, and provides a detailed written response is more likely to communicate well throughout a project than one who sends a brief reply after several days." },
      { name: "Confirm whether on-site presence is needed or remote is workable", text: "Most Manchester web projects are delivered fully remotely in 2024. Confirm whether your project genuinely requires on-site attendance (rare) or whether remote delivery with UK timezone availability meets your needs. Requiring local presence unnecessarily limits the talent pool and increases cost." }
    ]
  },
  "web-developer-uk-cities-guide": {
    name: "How to Hire a Web Developer Across UK Cities",
    description: "A step-by-step guide for UK businesses choosing the right web developer from London, Manchester, Birmingham, Leeds, Glasgow, Bristol, Edinburgh or Sheffield.",
    steps: [
      { name: "Define your platform and project type", text: "Before approaching any UK developer, decide whether you need WordPress, Laravel, Shopify, or a React/Next.js build. UK city developers specialise differently — a Shopify expert in Manchester may have no Laravel experience, and vice versa. Clarity on platform prevents expensive mismatches." },
      { name: "Decide whether local or remote delivery is required", text: "Most UK web projects are delivered fully remotely in 2024. UK timezone availability replaces on-site requirements for the vast majority of projects. Requiring a London or Birmingham developer when a remote UK developer delivers the same quality at lower cost limits your options unnecessarily." },
      { name: "Compare total project cost across UK cities", text: "Get quotes from London, Manchester or Birmingham-based developers alongside remote UK specialists. Compare total project cost for the same defined scope — not hourly rate. A Manchester agency at £80/hour with PM overhead can cost the same as a London agency at £130/hour." },
      { name: "Check live UK portfolio PageSpeed scores by city", text: "Run two of the developer's portfolio projects through PageSpeed Insights on mobile. UK developers claiming performance expertise should score 80+ on mobile across all portfolio projects. Regional UK developers in Leeds, Bristol, and Sheffield often outperform London equivalents on performance scores." },
      { name: "Verify UK-specific technical requirements", text: "Confirm UK VAT configuration, UK payment gateways (Stripe UK, Klarna, Clearpay), UK GDPR compliance, Royal Mail and DPD shipping integration, and hreflang en-GB implementation. These are non-negotiable for any UK-facing web project." },
      { name: "Request a written scope with GBP milestone payment", text: "A professional UK developer provides a written scope with GBP pricing, milestone breakdown, deliverables, timeline, and post-launch support terms. Agree to nothing without a written scope — this is standard practice for any UK city web engagement." }
    ]
  },
  "web-developer-canada-cities-guide": {
    name: "How to Hire a Web Developer Across Canadian Cities",
    description: "A step-by-step guide for Canadian businesses choosing the right web developer from Toronto, Vancouver, Calgary, Ottawa, Montreal or Edmonton.",
    steps: [
      { name: "Define your platform and Canadian-specific requirements", text: "Before approaching any Canadian developer, decide whether you need WordPress, Laravel, Shopify, or a custom React build. Also identify your provincial tax requirements (GST, HST, PST, or QST), whether you need bilingual content (Montreal), and your payment gateway preferences (Moneris, Stripe Canada)." },
      { name: "Match the developer to your province's tax requirements", text: "Provincial tax configuration is the most common failure point in Canadian ecommerce. Confirm the developer has configured your province's specific tax setup in Shopify or WooCommerce: Alberta (GST only), Ontario (HST 13%), BC (GST+PST 12%), Quebec (GST+QST 14.975%). Ask for specific examples." },
      { name: "For Montreal: confirm bilingual expertise", text: "Montreal web projects almost always need English and French content. Confirm WPML or Polylang experience for WordPress, Shopify Markets for Shopify, and correct hreflang en-CA and fr-CA implementation. This requires both technical and content expertise — confirm both." },
      { name: "Compare total cost across Canadian cities", text: "Compare total project cost for a defined scope from Toronto, Vancouver, Calgary, and remote Canadian developers. A Toronto agency at CAD 150/hour with overhead often costs twice as much as a senior remote specialist at CAD 80/hour for the same Shopify or Laravel deliverable." },
      { name: "Verify Canadian payment gateway experience", text: "Ask specifically about Moneris and Stripe Canada integration experience. For Ontario and Quebec businesses, Moneris is widely expected. Confirm Interac Online support for debit payment. Payment gateway misconfiguration costs Canadian businesses real sales from day one." },
      { name: "Request a written scope with CAD milestone payment", text: "A professional Canadian developer provides a written scope with CAD pricing, milestone payment structure, deliverables, timeline, and post-launch support terms. Confirm Canadian business registration and provincial tax invoicing before signing." }
    ]
  },
  "wordpress-developer-uk-guide": {
    name: "How to Hire a WordPress Developer in the UK",
    description: "A step-by-step guide for UK businesses evaluating and hiring a WordPress developer — covering what to test, platform decisions, and how to avoid common mistakes.",
    steps: [
      { name: "Decide whether WordPress is the right platform", text: "WordPress suits content-led business websites, blogs, and standard WooCommerce stores. If you need complex business logic — multi-role dashboards, ERP, CRM, or SaaS architecture — Laravel is the correct choice. Making this decision before hiring prevents expensive re-platforming later." },
      { name: "Test mobile PageSpeed on their portfolio", text: "Run two of the developer's live UK projects through Google PageSpeed Insights on mobile. A WordPress developer who cannot achieve 75+ on mobile does not understand WordPress performance — a critical requirement for UK Google rankings in 2024." },
      { name: "Check for plugin dependency vs custom development", text: "Ask which plugins they rely on for each feature type. Senior UK WordPress developers minimise plugin count, build custom post types with ACF Pro, and write PHP for non-trivial requirements. Developers who install a plugin for every feature create conflicts, security gaps, and slow sites." },
      { name: "Verify UK-specific WooCommerce experience", text: "For ecommerce projects: confirm UK VAT configuration, Stripe UK and PayPal UK gateway setup, Royal Mail and DPD shipping integration, and UK GDPR compliant cookie consent. These are not optional — they must work correctly from day one." },
      { name: "Request a written scope with milestone payment", text: "A professional UK WordPress developer provides a written scope covering pages, features, plugins, performance targets, SEO foundations, timeline, and payment milestones. Any quote without a written breakdown signals poor project management." },
      { name: "Confirm post-launch support and update responsibility", text: "WordPress security requires regular core, plugin, and theme updates. Agree on who handles post-launch updates, what is included, and at what cost. An unpatched WordPress installation is the most common cause of UK business website security incidents." }
    ]
  },
  "shopify-developer-uk-guide": {
    name: "How to Hire a Shopify Developer in the UK",
    description: "A step-by-step guide for UK businesses hiring a Shopify developer — covering UK-specific requirements, what to test, and how to evaluate Shopify expertise.",
    steps: [
      { name: "Test UK VAT configuration knowledge", text: "Ask directly how they configure UK VAT in Shopify: standard rate (20%), reduced rate (5%), and zero-rated products. This is a hard requirement. A developer who cannot explain UK tax setup will create billing errors on every UK order from day one." },
      { name: "Confirm UK payment gateway experience", text: "Ask for examples of Shopify stores with Shopify Payments UK, Klarna UK, and Clearpay configured. UK consumers expect these payment options — missing them directly impacts conversion rate on UK Shopify stores." },
      { name: "Check Shopify 2.0 theme architecture knowledge", text: "Ask whether they build on Shopify 2.0 architecture (Dawn, JSON templates, sections everywhere) or legacy Shopify themes. Legacy theme developers create technical debt that makes future customisation expensive. Shopify 2.0 is the standard since 2021." },
      { name: "Review mobile PageSpeed on their live Shopify portfolio", text: "Test two of their live Shopify stores on Google PageSpeed Insights, mobile view. UK Shopify stores with scores below 65 on mobile have a SEO and conversion problem. Slow stores rank lower in Google and lose sales to faster competitors." },
      { name: "Verify UK GDPR compliance implementation", text: "Check whether their portfolio stores have a cookie consent banner that blocks non-essential scripts before consent. UK GDPR requires technical blocking — not just a visual banner. A non-compliant cookie setup creates ICO regulatory risk." },
      { name: "Request a scope with UK launch checklist", text: "A professional UK Shopify developer provides a written scope covering VAT setup, payment gateways, shipping carriers, GDPR consent, SEO foundations (title tags, meta, sitemap, schema), and performance targets. Agree all of this before development starts." }
    ]
  },
  "web-developer-birmingham-guide": {
    name: "How to Hire a Web Developer in Birmingham",
    description: "A practical step-by-step guide for Birmingham and West Midlands businesses hiring a web developer for their project.",
    steps: [
      { name: "Define platform and project type before approaching developers", text: "Decide whether you need a WordPress site, Shopify store, Laravel application, or custom React build before contacting developers. Birmingham developers specialise differently — a Shopify specialist is not the right choice for a custom Laravel manufacturing system." },
      { name: "Check if local presence is actually required", text: "Most Birmingham and West Midlands web projects are delivered fully remotely in 2024. Remote delivery with UK timezone availability replaces on-site requirements for the vast majority of web development. Requiring Birmingham office location unnecessarily limits the talent pool." },
      { name: "Compare Birmingham agency and freelancer quotes", text: "Get one Birmingham agency quote and one senior freelance estimate for the same brief. Compare total project cost, not hourly rate. West Midlands agency projects in the £5,000–£25,000 range often have £2,000–£8,000 of non-development overhead that a senior freelancer eliminates." },
      { name: "Test portfolio performance on PageSpeed Insights", text: "Run two live portfolio projects through Google PageSpeed Insights on mobile. Birmingham businesses in retail, manufacturing, and professional services need fast-loading sites for UK Google rankings and mobile conversion. Scores below 70 on mobile indicate a performance problem." },
      { name: "Look for West Midlands or manufacturing sector experience", text: "Birmingham's industrial base (automotive, manufacturing, logistics, B2B wholesale) generates specific technical requirements. A developer with West Midlands manufacturing or logistics project experience reduces scoping time and understands the business context better than a generalist." },
      { name: "Request a written scope with milestone payment schedule", text: "Any professional Birmingham web developer provides a written scope: pages, features, platform choice, integrations, timeline, milestones, and post-launch terms. A proposal without milestones signals poor project management discipline — and budget overruns." }
    ]
  },
  "react-developer-for-hire": {
    name: "How to Hire a React Developer for Your Business Project",
    description: "A practical guide for businesses evaluating React developers — covering what to test, what to ignore, and how to match skills to actual project needs.",
    steps: [
      { name: "Define whether you need React or a full-stack developer", text: "A React developer builds frontend interfaces. If you also need a backend API, database, and authentication system, you need a full-stack developer who knows React — not just a React specialist. Define the full scope first." },
      { name: "Confirm experience with the right React ecosystem", text: "Modern React projects use TypeScript, React hooks, React Query or SWR for data fetching, and either Next.js (for SSR/SEO) or Vite (for SPA). Developers working only with class components and Redux without hooks are behind the ecosystem." },
      { name: "Test component architecture understanding", text: "Ask how they organise components, manage shared state, and avoid prop drilling. Good React developers describe compound components, context providers, and custom hooks. Developers who put all logic in a single parent component create unmaintainable code." },
      { name: "Evaluate performance optimisation knowledge", text: "Ask about useMemo, useCallback, React.memo, code splitting, and lazy loading. Ask how they profile a React app for performance issues. React developers who cannot explain unnecessary re-render prevention will create slow interfaces at scale." },
      { name: "Assess TypeScript proficiency", text: "Production React requires TypeScript. Ask how they type props, API responses, and custom hooks. Developers who type everything as 'any' or avoid TypeScript on production projects introduce bugs that are expensive to fix." },
      { name: "Check accessibility (a11y) awareness", text: "Ask about ARIA roles, keyboard navigation, semantic HTML in React components, and screen reader testing. Business applications used by employees or customers must meet accessibility standards. This is often overlooked and expensive to retrofit." },
      { name: "Request a code sample or paid trial task", text: "Pay for a 4–6 hour trial task: build a data table with filtering, sorting, and pagination using real API data. This single task reveals TypeScript skill, component structure, error handling, loading states, and accessibility — everything a CV cannot." }
    ]
  },

  "react-developer-uk-guide": {
    name: "How to Hire a React Developer in the UK",
    description: "A step-by-step guide for UK businesses evaluating React developers — covering TypeScript requirements, WCAG 2.1 AA, UK GDPR compliance, and GBP rate benchmarks.",
    steps: [
      { name: "Test TypeScript proficiency before any other evaluation", text: "Ask to see a code sample or GitHub repository. Look for: explicitly typed props with interfaces, Zod-validated API responses, generically-typed custom hooks, no 'any' in production code. UK financial services, government, and enterprise clients expect TypeScript as standard. Developers who avoid TypeScript are not production-ready for UK enterprise React." },
      { name: "For UK public sector or enterprise: verify WCAG 2.1 AA knowledge", text: "Ask specifically: how do they implement accessible modals in React? How do they handle keyboard navigation on data tables? They should describe useRef for focus management, aria-live regions, role='alert' for validation errors, and testing with NVDA and VoiceOver. WCAG 2.1 AA is a legal requirement under the UK Equality Act 2010 for public bodies." },
      { name: "Confirm UK GDPR compliant consent in React", text: "Ask how they implement ICO-compliant cookie consent in React. The correct answer describes a mechanism that technically blocks Google Analytics, Facebook Pixel, and marketing scripts before user consent is given — not just a visual banner. React applications that fire analytics before consent are not UK GDPR compliant." },
      { name: "Run a paid trial task (4–6 hours)", text: "Pay for a trial task: a data table with sorting, filtering, pagination, and accessible row actions using React, TypeScript, and React Query. This reveals TypeScript skill, component architecture, accessibility, and test coverage in one task. Senior UK React developers accept this without resistance." },
      { name: "Check modern React ecosystem proficiency", text: "Ask about: React Query or SWR for server state, Zustand or React Context for global state, Vitest or Jest for tests, and current React 18 hooks. Developers using Redux boilerplate for simple state, class components, or Create React App are not current with UK production React standards." },
      { name: "Agree GBP milestone payment with UK VAT invoicing", text: "Request a written scope covering component architecture, TypeScript requirements, accessibility, test coverage, timeline, and GBP milestone payments. Confirm UK VAT treatment on invoices (20% VAT unless the developer is below the registration threshold). For UK government projects: confirm WCAG compliance as a testable deliverable." }
    ]
  },

  "fullstack-developer-london-guide": {
    name: "How to Hire a Full Stack Developer in London",
    description: "A step-by-step guide for London businesses evaluating full stack developers — covering UK GDPR, AWS eu-west-2, GBP rate benchmarks, and London tech market specifics.",
    steps: [
      { name: "Test UK GDPR compliance knowledge across both backend and frontend", text: "Ask how they implement UK GDPR compliance in both the Laravel backend (data architecture, consent, retention policies, right to erasure) and the React/Next.js frontend (cookie consent blocking non-essential scripts, HTTPS throughout). This is the most common UK production failure point — developers who give generic answers without UK-specific implementation are not UK compliance ready." },
      { name: "For London financial services: require UK VAT billing and GoCardless experience", text: "Ask specifically about UK VAT configuration (20% standard, 5% reduced, 0% zero-rated) in billing modules, Stripe UK subscription billing via Laravel Cashier, and GoCardless direct debit integration. London financial services and SaaS companies use GoCardless for UK bank direct debit. Developers without GoCardless experience will need to learn on your project." },
      { name: "Confirm AWS eu-west-2 (London) deployment experience", text: "For London data residency requirements: ask specifically about AWS London (eu-west-2) deployment. Confirm EC2 or Elastic Beanstalk configuration, RDS in eu-west-2, CloudFront CDN with London origin, and GitHub Actions CI/CD. UK financial services clients often specify eu-west-2 for data residency compliance." },
      { name: "Request a code sample covering both Laravel and React/Next.js", text: "Review a Laravel code sample (look for service classes, Form Requests, PHPUnit tests) and a React/Next.js sample (look for TypeScript types, React Query, React Testing Library tests). Both layers must meet UK production standards independently before combining them on your project." },
      { name: "Compare London agency quotes with remote UK senior developers", text: "For projects in the £20,000–80,000 range: get a London agency quote and a remote UK senior developer estimate for the same scope. Compare total project cost. A London agency at £150/hour with PM overhead often costs 2–3× a senior remote UK developer at £80/hour for the same deliverable." },
      { name: "Agree GBP milestone payment with UK VAT invoicing", text: "Request a written scope covering platform, features, UK GDPR compliance, AWS deployment, GBP milestone payments, and post-launch support SLA. London full stack projects need clearly defined deliverables — open-ended time and materials contracts create budget overruns on complex applications." }
    ]
  },

  "php-developer-uk-guide": {
    name: "How to Hire a PHP Developer in the UK",
    description: "A step-by-step guide for UK businesses evaluating PHP and Laravel developers — covering UK GDPR compliance, UK VAT configuration, GBP rate benchmarks, and what to test before hiring.",
    steps: [
      { name: "Test UK GDPR compliance knowledge directly", text: "Ask how they implement UK GDPR compliant data handling in a Laravel or PHP application. A developer with UK production experience describes: ICO-compliant cookie consent that technically blocks scripts, right to erasure implementation, data retention policy via scheduled jobs, and consent management for UK marketing communications. Generic GDPR answers without UK-specific implementation reveal non-UK experience." },
      { name: "Request a code sample or GitHub repository", text: "Review their PHP/Laravel code. Look for: service classes separating business logic from controllers, Form Request validation classes, Eloquent scope methods for reusable queries, PHPUnit feature tests with factories, and PSR-12 coding standards. Developers without these patterns are not production-ready for UK enterprise applications." },
      { name: "For UK ecommerce: test UK VAT configuration knowledge", text: "Ask directly: how do you configure the three UK VAT rates in WooCommerce or a custom PHP billing module? They should explain 20% standard rate, 5% reduced rate (domestic fuel, children's car seats, energy-saving materials), and 0% zero-rated (most food, children's clothing, books). A developer who cannot explain the difference has not built for the UK ecommerce market." },
      { name: "Confirm Stripe UK and GoCardless integration experience", text: "For UK subscription businesses: ask about Stripe UK subscription billing via Laravel Cashier, GoCardless direct debit for UK bank payments, and UK GDPR compliant consent for email communications. GoCardless is widely expected for UK B2B and SaaS subscription billing." },
      { name: "For UK B2B platforms: confirm UK Companies House API experience", text: "UK B2B platforms often require company registration validation via the Companies House API. Ask whether they have integrated this. Also ask about UK GDPR data handling for B2B personal data collected during company registration flows." },
      { name: "Agree GBP milestone payment with UK VAT invoicing", text: "Request a written scope covering platform, features, UK GDPR compliance, UK VAT configuration, timeline, and GBP milestone payments. Confirm whether the developer is VAT-registered (and will add 20% VAT to invoices) or below the registration threshold. For UK legacy PHP modernisation: require a codebase audit milestone before feature development begins." }
    ]
  },

  "web-developer-toronto-guide": {
    name: "How to Hire a Web Developer in Toronto",
    description: "A step-by-step guide for Toronto and Ontario businesses evaluating and hiring a web developer — covering CAD rate benchmarks, Ontario HST, CASL, and platform requirements.",
    steps: [
      { name: "Define your platform and stack before approaching developers", text: "Specify Laravel, Shopify, Next.js, or WordPress before contacting Toronto developers. Toronto has strong specialists in each — but a Shopify developer for a Toronto fashion brand is a different hire than a Laravel developer for a Toronto fintech company. Platform clarity prevents misaligned quotes." },
      { name: "For fintech or financial services: require sector application experience", text: "Toronto financial services web applications (client portals, investment dashboards, KYC platforms, insurance tools) require developers with financial sector application experience. Ask for specific examples of FCA-adjacent, OSFI-adjacent, or fintech applications. Generic web developers without financial sector experience will underscope security and compliance requirements." },
      { name: "Confirm Ontario HST (13%) configuration for any ecommerce project", text: "Ontario uses HST (Harmonized Sales Tax) at 13% — combined federal GST (5%) and Ontario PST (8%). Any Toronto Shopify or WooCommerce store must collect and remit HST correctly from Ontario customers. HST misconfiguration creates Canada Revenue Agency compliance risk from the first transaction." },
      { name: "Verify CASL compliance approach for email functionality", text: "Canada's Anti-Spam Legislation (CASL) requires explicit consent for commercial electronic messages and functional unsubscribe mechanisms. Ask how the developer implements CASL-compliant consent workflows — not just a generic opt-in checkbox, but double opt-in, consent record-keeping, and compliant unsubscribe architecture." },
      { name: "Run portfolio projects through PageSpeed Insights mobile", text: "Test two live portfolio projects on Google PageSpeed Insights mobile. Toronto clients are sophisticated — slow-loading portfolio projects indicate a developer who does not apply performance fundamentals. Target 80+ on mobile for senior Toronto developers." },
      { name: "Agree CAD milestone payment with written scope", text: "Request a written scope covering platform, features, integrations, performance targets, timeline, and CAD milestone payment schedule. A professional Toronto web developer provides this without hesitation. Paying more than 30% upfront before development starts is a risk in any market." }
    ]
  },
  "web-developer-vancouver-guide": {
    name: "How to Hire a Web Developer in Vancouver",
    description: "A step-by-step guide for Vancouver and BC businesses hiring a web developer — covering BC PST, CASL, CAD rate benchmarks, and what to evaluate.",
    steps: [
      { name: "Confirm BC PST (7%) configuration for any ecommerce project", text: "British Columbia charges PST (7%) separately from federal GST (5%). BC ecommerce stores must collect both taxes from BC customers. This differs from Ontario HST (combined rate) and Alberta GST-only. Ask the developer specifically how they configure split-tax in Shopify or WooCommerce for BC — misconfiguration creates BC Ministry of Finance compliance risk." },
      { name: "Confirm billing currency if the developer works with US clients", text: "Many Vancouver developers work with US clients and may quote in USD. Confirm billing currency explicitly before comparing quotes. A developer quoting CAD 90/hour and one quoting USD 90/hour are not the same rate — USD-quoted rates are 30–35% higher than CAD equivalents at current exchange." },
      { name: "For gaming or interactive projects: require specific animation and WebGL examples", text: "Vancouver has the highest concentration of games and interactive media developers in Canada. For creative frontend, interactive brand, or WebGL projects: ask for specific live examples with Three.js, Canvas, WebGL, or GSAP — not just framework name-dropping. Vancouver has genuine specialists here; test for it." },
      { name: "Run portfolio projects through PageSpeed Insights mobile", text: "Test two live portfolio projects through PageSpeed Insights mobile. Vancouver retail, outdoor, and lifestyle brands need fast-loading Shopify stores for Google Canada rankings. Target 75+ on mobile — scores below 65 indicate a performance problem regardless of visual design quality." },
      { name: "Verify CASL compliance approach", text: "CASL applies to all Canadian businesses — Vancouver-based businesses must comply with consent and unsubscribe requirements for commercial email. Ask how the developer implements CASL compliance in contact forms, email marketing integrations, and user registration flows." },
      { name: "Agree CAD milestone payment with written scope", text: "A professional Vancouver developer provides a written scope covering platform, features, integrations, BC tax configuration, timeline, and CAD milestone payments. Require this before development starts — resist pressure to start work without a signed written scope." }
    ]
  },
  "web-developer-calgary-guide": {
    name: "How to Hire a Web Developer in Calgary",
    description: "A step-by-step guide for Calgary and Alberta businesses hiring a web developer — covering energy sector requirements, Alberta GST, CAD rate benchmarks, and what to evaluate.",
    steps: [
      { name: "For energy, oil and gas, or B2B applications: require Laravel and data modelling experience", text: "Calgary energy sector web applications — supplier portals, field data systems, asset tracking, B2B procurement — require Laravel developers with complex data modelling experience. Ask for specific examples of multi-role applications with external API integrations. Developers without B2B or energy sector application experience will underscope and under-price these projects significantly." },
      { name: "Confirm Alberta GST-only configuration for any ecommerce project", text: "Alberta charges only federal GST (5%) — no provincial sales tax. Alberta Shopify and WooCommerce tax configuration is simpler than Ontario (HST 13%) or BC (GST + PST). Confirm the developer configures Alberta correctly — even a 'GST-only' setup must be done explicitly in Shopify's tax settings." },
      { name: "Use Calgary Digital to find senior developers before generic platforms", text: "Calgary Digital's community events and job board connect Alberta businesses with senior Calgary developers more efficiently than Indeed or LinkedIn. Senior Calgary developers are often in the Calgary Digital community and can be vetted more reliably through community reputation than through a generic job posting." },
      { name: "Run portfolio projects through PageSpeed Insights mobile", text: "Test two live portfolio projects on PageSpeed Insights mobile. Calgary energy B2B portals and ecommerce stores both need fast loading for professional credibility and Google Canada rankings. Target 70+ on mobile." },
      { name: "Verify CASL compliance approach for any project with email functionality", text: "CASL applies to all Canadian businesses including Calgary and Alberta companies. Ask how the developer implements consent-based email signup, double opt-in where required, and compliant unsubscribe mechanisms. CASL compliance must be built into the application architecture, not added as an afterthought." },
      { name: "Agree CAD milestone payment with written scope", text: "Request a written scope with platform, features, integrations, Alberta tax configuration, timeline, and CAD milestone payments before development starts. Energy sector applications especially need clearly defined deliverables — open-ended time and materials contracts on B2B applications create budget overruns." }
    ]
  },
  "web-developer-ottawa-guide": {
    name: "How to Hire a Web Developer in Ottawa",
    description: "A step-by-step guide for Ottawa and National Capital Region businesses — covering government compliance, bilingual requirements, security clearance, and CAD rate benchmarks.",
    steps: [
      { name: "For government projects: verify WCAG 2.1 AA and Canada.ca design system experience", text: "Government of Canada web projects require WCAG 2.1 AA accessibility from day one. Ask the developer to explain how they test accessibility — they should name specific tools (axe DevTools, NVDA, VoiceOver, Lighthouse) and demonstrate understanding of ARIA roles, keyboard navigation, and colour contrast. Claiming 'accessibility experience' without naming testing tools is a red flag." },
      { name: "For federal contracts: confirm security clearance status and procurement framework experience", text: "Government of Canada web contracts typically require Reliability Status security clearance at minimum. Confirm the developer's clearance status and whether they are eligible for federal procurement frameworks (ProServices, SBSA). Developers without existing clearance cannot start federal work until clearance is processed — 6–8 weeks for Reliability, months for Secret." },
      { name: "For bilingual projects: require English and French content architecture experience", text: "Ottawa bilingual projects require complete content parity — not just translation. Ask how the developer handles language switching (URL structure, context preservation), bilingual CMS workflows for editors, and French-specific typography and character encoding. Machine translation is not bilingual web architecture." },
      { name: "For private sector projects: compare Ottawa agency and senior freelancer total cost", text: "For Kanata North tech companies and Ottawa private sector businesses, remote Canadian developers at CAD 75–95/hour provide Ottawa-equivalent quality. Compare total project cost between an Ottawa agency quote and a senior freelancer estimate — agency overhead on Ottawa projects in the CAD 10,000–30,000 range often adds CAD 3,000–8,000 of non-development cost." },
      { name: "Run portfolio projects through PageSpeed Insights mobile", text: "Test two live portfolio projects on PageSpeed Insights mobile. Ottawa government and enterprise clients expect professional, fast-loading platforms. Target 75+ on mobile — government projects specifically should achieve 85+ since Google Core Web Vitals is a Canadian government digital standard consideration." },
      { name: "Agree CAD milestone payment with written scope", text: "For government projects: ensure the scope covers WCAG compliance, bilingual requirements, security testing, and platform specifications explicitly. For private sector projects: agree platform, features, integrations, Ontario HST configuration, and milestone payment schedule in writing before development starts." }
    ]
  },
  "web-developer-leeds-guide": {
    name: "How to Hire a Web Developer in Leeds",
    description: "A step-by-step guide for Leeds and Yorkshire businesses evaluating and hiring a web developer — covering platform decisions, rate benchmarks, and how to structure the project.",
    steps: [
      { name: "Define your platform requirement before approaching developers", text: "Decide whether you need WordPress, Shopify, Laravel, or React/Next.js before contacting developers. Leeds developers specialise differently — a Shopify specialist for a Leeds fashion retailer is a different hire than a Laravel developer for a Leeds financial services client portal." },
      { name: "Check whether you actually need a local Leeds developer", text: "Most Leeds and Yorkshire web projects are delivered remotely in 2024. Remote UK developers in the same timezone offer equivalent senior quality at Leeds-competitive rates. Requiring a Leeds office or in-person presence unnecessarily limits the senior talent pool." },
      { name: "Get both an agency quote and a senior freelancer estimate", text: "For projects above £5,000, get one Leeds agency quote and one senior freelance estimate for the same scope. Compare total project cost — not hourly rate. Agency overhead on a Leeds project in the £8,000–25,000 range often adds £3,000–6,000 of non-development cost that a senior freelancer eliminates." },
      { name: "Run their portfolio through PageSpeed Insights on mobile", text: "Test two live portfolio projects through Google PageSpeed Insights mobile. Yorkshire businesses in retail, finance, and professional services need fast-loading sites for UK Google rankings. Scores below 70 on mobile indicate a performance problem regardless of how good the visual design looks." },
      { name: "Request a written scope with milestone payment schedule", text: "Any professional Leeds web developer provides a written scope: pages, features, platform, integrations, performance targets, timeline, and payment milestones. A quote without a written breakdown signals poor project management — and budget overruns are the typical result." },
      { name: "Confirm post-launch support and update responsibility", text: "Agree what happens after launch: who handles WordPress or plugin updates, what is included in the post-launch period, and at what cost. Leaving post-launch support undefined is the most common source of disputes in Leeds web development engagements." }
    ]
  },
  "web-developer-glasgow-guide": {
    name: "How to Hire a Web Developer in Glasgow",
    description: "A practical step-by-step guide for Glasgow and Scottish businesses evaluating and hiring a web developer — covering Scottish market specifics, rates, and platform decisions.",
    steps: [
      { name: "Define platform and project type first", text: "Specify whether you need WordPress, Shopify, Laravel, or React before contacting Glasgow developers. Glasgow specialists vary significantly — a Shopify developer for a Glasgow independent retailer is a different hire than a Laravel developer for a Glasgow public sector portal." },
      { name: "For public sector projects: confirm accessibility and procurement framework experience", text: "Scottish public sector projects require WCAG 2.1 AA accessibility compliance, Scottish Government design standards familiarity, and procurement framework experience (G-Cloud, Scotland Excel). Verify these specifically — not all Glasgow developers are set up for public procurement." },
      { name: "For tourism or hospitality: confirm booking system integration experience", text: "Glasgow tourism, accommodation, and whisky/spirits businesses typically need booking system integration (FareHarbor, Rezdy, Checkfront) or custom availability management. Ask explicitly — developers without hospitality sector experience will underscope these integrations." },
      { name: "Test portfolio performance on PageSpeed Insights mobile", text: "Run two live portfolio projects on Google PageSpeed Insights mobile. Glasgow businesses in retail, tourism, and professional services need fast-loading sites for UK Google rankings. Target 75+ on mobile — scores below 65 indicate a performance problem." },
      { name: "Compare agency and freelancer total project cost", text: "For projects above £5,000, get both a Glasgow agency quote and a senior freelance estimate. Compare total project cost. Glasgow agency overhead on £8,000–25,000 projects often adds £3,000–5,000 of non-development cost that a senior freelancer removes." },
      { name: "Agree written scope with milestone payment before starting", text: "Get a written scope covering pages, features, platform, integrations, timeline, and milestone payments before any development starts. A professional Glasgow web developer provides this without hesitation. A developer who resists a written scope is a risk." }
    ]
  },
  "web-developer-edinburgh-guide": {
    name: "How to Hire a Web Developer in Edinburgh",
    description: "A step-by-step guide for Edinburgh businesses — covering financial services requirements, tourist economy specifics, GBP rate benchmarks, and how to evaluate developers.",
    steps: [
      { name: "For financial services: require financial sector application experience", text: "Edinburgh financial services projects (client portals, adviser dashboards, compliance platforms) require developers with financial sector application experience — not generalist web developers. Ask for specific examples of FCA-adjacent or regulated sector applications. Generic WordPress developers without this experience create compliance and security risks." },
      { name: "For tourism and festival businesses: plan for seasonal traffic", text: "Edinburgh Fringe and tourism businesses must plan for 10–50x normal traffic in August. Ask the developer about load-tested hosting, CDN configuration, database caching, and high-concurrency booking system architecture. Developers who do not address seasonal load in their scoping are not festival-platform qualified." },
      { name: "Confirm WCAG 2.1 AA accessibility knowledge", text: "Scottish public sector, financial services, and large hospitality businesses are expected to meet WCAG 2.1 AA accessibility standards. Ask how the developer tests accessibility — they should name specific tools (axe DevTools, NVDA, VoiceOver, Lighthouse). Developers who cannot answer this question have not built for compliance requirements." },
      { name: "For financial applications: scope security testing explicitly", text: "Edinburgh financial services web applications require penetration testing, GDPR data handling architecture, and secure session management. These must be scoped and budgeted explicitly — they are not automatically included in a standard web development quote." },
      { name: "Test portfolio performance on PageSpeed Insights mobile", text: "Run two live portfolio projects through PageSpeed Insights mobile. Edinburgh financial services and tourism clients need fast-loading, reliable platforms — not just visually impressive ones. Target 80+ on mobile." },
      { name: "Agree written scope with milestone payment and support SLA", text: "For Edinburgh financial services projects especially: agree a written scope, milestone payment schedule, and a post-launch support SLA (response time, bug fix coverage, emergency contact). These are business-critical applications — treat the engagement accordingly." }
    ]
  },
  "web-developer-bristol-guide": {
    name: "How to Hire a Web Developer in Bristol",
    description: "A practical guide for Bristol and South West UK businesses hiring a web developer — covering Bristol's creative and tech market, rates, platform choices, and what to evaluate.",
    steps: [
      { name: "Define platform and project type before approaching Bristol developers", text: "Decide whether you need Shopify, WordPress, Laravel, or Next.js before contacting developers. Bristol developers specialise differently — a Shopify specialist for a Bristol ethical retailer is a different hire than a Laravel developer for a Bristol SaaS company." },
      { name: "For ethical or sustainability brands: seek values-aligned developer experience", text: "Bristol has a high concentration of B Corps, social enterprises, and sustainability-focused businesses. Ask whether the developer has experience with impact-focused brand communication, transparent supply chain UX, or values-led ecommerce. Developers with this background reduce briefing time significantly." },
      { name: "For creative or animation-heavy projects: confirm animation library experience", text: "Bristol's creative sector (games, media, interactive, animation) drives demand for developers with Lottie, Framer Motion, GSAP, Three.js, or Canvas experience alongside standard web skills. Ask for specific live examples — not just framework name-dropping." },
      { name: "Run portfolio projects through PageSpeed Insights mobile", text: "Test two live portfolio projects on PageSpeed Insights mobile. Bristol retail, ethical consumer, and tech businesses need fast-loading sites for UK Google rankings. Target 75+ on mobile. A visually impressive Bristol Shopify store that scores 50 on mobile PageSpeed will rank below simpler, faster competitors." },
      { name: "Compare agency and freelancer total project cost", text: "For Bristol projects above £5,000, get both an agency quote and a senior freelancer estimate for the same scope. Bristol agency overhead on £8,000–20,000 projects often embeds £3,000–5,000 of non-development cost. A senior Bristol or remote UK freelancer eliminates this overhead." },
      { name: "Agree written scope with milestone payment", text: "Request a written scope covering design, development, platform, integrations, performance targets, and payment milestones. Bristol creative agencies and freelancers in the ethical business community typically work with transparent, milestone-based contracts — any developer who resists this is a risk." }
    ]
  },
  "web-developer-sheffield-guide": {
    name: "How to Hire a Web Developer in Sheffield",
    description: "A practical guide for Sheffield and South Yorkshire businesses hiring a web developer — covering manufacturing and creative sector requirements, rates, and how to evaluate developers.",
    steps: [
      { name: "Define platform requirement before approaching Sheffield developers", text: "Specify whether you need Laravel (B2B applications, portals, manufacturing tools), Shopify (independent retail, ecommerce), WordPress (marketing websites, content management), or React/Next.js (SaaS, interactive frontends) before contacting developers. Platform determines which Sheffield specialist you need." },
      { name: "For manufacturing or B2B: confirm Laravel and complex data modelling experience", text: "Sheffield manufacturing businesses need Laravel developers with B2B application experience: multi-role user systems, complex Eloquent relationships, API integrations with ERP or inventory systems, and performance-optimised database queries. Ask for specific manufacturing or B2B portal examples — generalist web developers without this experience will underscope the project." },
      { name: "Use Sheffield Digital to find senior developers before generic platforms", text: "Sheffield Digital (sheffielddigital.org.uk) has a Slack community, regular in-person events, and a transparent jobs board. Senior Sheffield developers are often in the Sheffield Digital community and can be found faster and more reliably here than through Indeed or LinkedIn." },
      { name: "For music venues and creative sector: confirm ticketing integration experience", text: "Sheffield's significant music and arts sector (Tramlines, O2 Academy, Yellow Arch Studios) needs developers with ticketing system integration experience (Eventbrite, Dice, or custom ticketing APIs). Ask for specific examples. A developer without ticketing integration experience will scope and price this incorrectly." },
      { name: "Test portfolio performance on PageSpeed Insights mobile", text: "Run two live portfolio projects through Google PageSpeed Insights mobile. Sheffield independent retail and manufacturing B2B sites both need fast loading for UK Google rankings and professional credibility. Target 70+ on mobile." },
      { name: "Agree written scope and milestone payment before starting", text: "A professional Sheffield web developer provides a written scope: platform, features, integrations, timeline, and milestone payments. Sheffield manufacturing projects especially need clearly defined deliverables — open-ended time and materials contracts on B2B applications create budget overruns." }
    ]
  },
  "nextjs-developer-uk-guide": {
    name: "How to Hire a Next.js Developer in the UK",
    description: "A step-by-step guide for UK businesses evaluating and hiring a Next.js developer — covering App Router proficiency, TypeScript requirements, performance benchmarks, and rate expectations.",
    steps: [
      { name: "Verify App Router proficiency, not just Next.js familiarity", text: "Ask specifically whether they build with Next.js App Router (Next.js 13+) or the legacy Pages Router. App Router is the current production standard using React Server Components. Developers still defaulting to Pages Router are behind the ecosystem and will create technical debt on new UK projects." },
      { name: "Run their portfolio through PageSpeed Insights on mobile", text: "Test two of their live Next.js portfolio projects through Google PageSpeed Insights mobile view. A competent Next.js developer should achieve 80+ consistently. Scores below 70 indicate the developer is not applying Next.js performance defaults correctly — defeating the main advantage of the framework." },
      { name: "Test server component vs client component understanding", text: "Ask how they decide what is a server component and what is a client component. Senior UK Next.js developers describe data fetching patterns, avoiding 'use client' where possible to minimise client-side JavaScript, and structuring layouts to push interactivity to leaf nodes. Vague answers indicate shallow App Router experience." },
      { name: "Confirm TypeScript is used throughout the project", text: "Ask to see a code sample or GitHub repository. TypeScript must be configured throughout — not just in isolated files. UK production Next.js projects without TypeScript are harder to maintain, harder to hand over, and introduce runtime bugs that TypeScript would have caught at compile time." },
      { name: "Assess headless CMS or API integration experience", text: "Most UK Next.js projects combine a headless CMS (Contentful, Sanity, Prismic) or custom API backend with a Next.js frontend. Ask about their data fetching approach: fetch with revalidate options, parallel data loading, streaming with Suspense. These are the production patterns that distinguish senior UK Next.js specialists." },
      { name: "Agree performance and Core Web Vitals targets in writing", text: "Include Core Web Vitals targets (LCP under 2.5s, CLS under 0.1, INP under 200ms) in the project scope. A serious UK Next.js developer accepts these targets without resistance and plans the architecture to achieve them. Resistance to written performance targets is a warning sign." }
    ]
  },

  "web-developer-montreal-guide": {
    name: "How to Hire a Web Developer in Montreal",
    description: "A step-by-step guide for Montreal and Quebec businesses hiring a web developer — covering bilingual requirements, QST tax configuration, and how to evaluate developers for Quebec-specific projects.",
    steps: [
      { name: "Require bilingual web architecture experience — not just a translation plugin", text: "Ask specifically how they implement bilingual French-English websites. The correct answer describes French-first URL structure (/fr/ default), language switching that preserves page context, hreflang fr-CA and en-CA for Google, WPML or Polylang for bilingual CMS, and French-language technical SEO. A developer who answers 'WPML translation plugin' without describing URL structure and hreflang has not built a properly architected bilingual site." },
      { name: "Confirm Quebec QST (9.975%) configuration experience for any ecommerce project", text: "Ask specifically about Quebec Sales Tax configuration — how they configure both GST (5%) and QST (9.975%) in Shopify or WooCommerce to correctly collect from Quebec customers, show both taxes separately on invoices, and support Revenue Québec remittance reporting. QST is administered by Revenue Québec (not CRA). A developer who configures it as a single combined rate has created a compliance error." },
      { name: "Verify Bill 101 (Charter of the French Language) awareness", text: "For Quebec-registered businesses: ask the developer whether they are aware of Charter of the French Language requirements for digital commerce. Quebec businesses must use French as the primary language of public-facing web content, pricing, offers, and commerce. A developer without Quebec regulatory experience will not proactively flag this — and retrofitting compliance is expensive." },
      { name: "For gaming or interactive projects: confirm WebGL or Three.js experience", text: "Montreal's gaming industry cluster (Ubisoft, EA, Warner Bros) creates demand for creative frontend developers with WebGL, Three.js, Canvas, or Unity WebGL experience. For interactive brand sites or gaming-adjacent web projects, ask for specific live examples — Montreal has genuine specialists in this area." },
      { name: "Run portfolio projects through PageSpeed Insights mobile", text: "Test two live Montreal or Canadian portfolio projects on PageSpeed Insights mobile. Montreal businesses in retail, hospitality, and professional services need fast-loading sites for Canadian Google rankings. Target 75+ on mobile — slower sites rank below faster competitors in both English and French Canadian Google results." },
      { name: "Agree CAD milestone payment with written scope", text: "A professional Montreal developer provides a written scope covering platform, bilingual architecture, QST configuration, CASL compliance, and CAD milestone payment schedule. Require this before development starts — no written scope means no accountability for bilingual completeness or tax correctness." }
    ]
  },
  "web-developer-edmonton-guide": {
    name: "How to Hire a Web Developer in Edmonton",
    description: "A practical guide for Edmonton and Northern Alberta businesses hiring a web developer — covering government compliance, energy sector requirements, Alberta GST, and CAD rate benchmarks.",
    steps: [
      { name: "For government or healthcare: confirm WCAG 2.1 AA and Alberta Government standards experience", text: "Ask how the developer tests accessibility — they should name axe DevTools, NVDA, VoiceOver, and Lighthouse by name. Ask whether they are familiar with Alberta Government Design Standards. Government of Alberta and AHS web projects require WCAG 2.1 AA compliance from day one — retrofitting accessibility after launch is significantly more expensive than building it correctly from the start." },
      { name: "For energy sector field applications: confirm offline-first or PWA architecture", text: "Edmonton oil sands and Northern Alberta energy applications often need to function in areas with poor connectivity. Ask whether the developer has built Progressive Web Apps (PWAs) with service workers, offline data caching, and background sync. A developer without PWA experience cannot build a reliable field data collection application for Northern Alberta operations." },
      { name: "Confirm Alberta GST-only configuration for any ecommerce project", text: "Alberta charges only 5% federal GST — no provincial sales tax. Confirm the developer configures this correctly in Shopify or WooCommerce: a single GST rate, correct CRA reporting setup, and no PST fields. Even simple GST-only setup must be done explicitly and correctly in ecommerce platform settings." },
      { name: "For government projects: verify FOIP data handling awareness", text: "FOIP (Freedom of Information and Protection of Privacy Act) governs how Alberta public bodies handle personal information. Government of Alberta web applications must implement FOIP-compliant data collection: explicit consent, purpose limitation, data retention policies, and security architecture. Ask the developer if they have built for FOIP — if they cannot define it, they have not worked on Alberta Government projects." },
      { name: "Run portfolio projects through PageSpeed Insights mobile", text: "Test two live portfolio projects on PageSpeed Insights mobile. Edmonton government and retail clients expect professionally performing sites. Target 70+ on mobile. Government digital services increasingly track Core Web Vitals as part of service quality metrics." },
      { name: "Agree CAD milestone payment with written scope and post-launch support", text: "Request a written scope covering platform, features, Alberta GST configuration, accessibility requirements, timeline, and CAD milestone payments. For Edmonton government projects: include post-launch support SLA, security update responsibility, and FOIP incident response protocol in the agreement." }
    ]
  },
  "nextjs-developer-canada-guide": {
    name: "How to Hire a Next.js Developer in Canada",
    description: "A step-by-step guide for Canadian businesses evaluating and hiring a Next.js developer — covering App Router proficiency, TypeScript requirements, CAD rate benchmarks, and headless CMS experience.",
    steps: [
      { name: "Require App Router proficiency — not just Next.js experience", text: "Ask explicitly whether they build with Next.js App Router (Next.js 13+) or the legacy Pages Router. The App Router is the current production standard using React Server Components. Any Canadian developer defaulting to the Pages Router for new projects in 2024 is creating technical debt. This is a non-negotiable requirement for all new Canadian Next.js builds." },
      { name: "Run their portfolio through PageSpeed Insights mobile", text: "Test two live Next.js portfolio projects through Google PageSpeed Insights mobile. A senior Canadian Next.js developer should achieve 85+ consistently. Scores below 75 indicate the developer is not applying Next.js performance defaults correctly — defeating the main reason to choose Next.js over WordPress." },
      { name: "Test server component vs client component knowledge", text: "Ask how they decide what is a server component vs a client component. Senior Canadian Next.js developers describe data fetching patterns, minimising 'use client' directives to reduce bundle size, and pushing interactivity to leaf nodes. Vague answers or inability to explain the boundary indicate shallow App Router experience." },
      { name: "Confirm TypeScript is used throughout", text: "Ask to see a code sample or GitHub repository. TypeScript must be configured throughout — not just in isolated files. Canadian production Next.js projects without TypeScript are harder to maintain, harder to hand over to future developers, and introduce runtime bugs that TypeScript catches at compile time." },
      { name: "For headless Shopify: verify Canadian commerce integration experience", text: "Headless Shopify with Next.js requires experience with Shopify Storefront API, Canadian tax (HST/PST by province), Shopify Payments Canada, Canada Post shipping integration, and Klarna Canada for BNPL. Ask for live headless Shopify examples serving Canadian customers — not just Shopify experience." },
      { name: "Agree Core Web Vitals targets in the written scope", text: "Include Core Web Vitals targets in the project scope: LCP under 2.5s, CLS under 0.1, INP under 200ms. A serious Canadian Next.js developer accepts these targets and plans the architecture to achieve them. Confirm CAD invoicing, TorontoBytes or ARS Developer Ltd business registration, and milestone payment schedule before signing." }
    ]
  },
  "fullstack-developer-canada-guide": {
    name: "How to Hire a Full Stack Developer in Canada",
    description: "A step-by-step guide for Canadian businesses evaluating full stack developers — covering stack requirements, trial tasks, Canadian tax knowledge, and CAD rate benchmarks.",
    steps: [
      { name: "Define your stack before writing the job brief", text: "Specify backend (Laravel, Node.js, Django) and frontend (React, Next.js, Vue) requirements in the job brief before contacting developers. 'Full stack' without a stack specified means different things to every developer you approach — and comparing quotes becomes impossible without a shared technical baseline." },
      { name: "Ask about Canadian-specific technical requirements", text: "Ask whether they have experience with Canadian tax configuration: GST/HST/PST calculations for ecommerce, QST for Quebec, and the GST/HST registration threshold for services. Developers without Canadian ecommerce experience will misconfigure tax handling, creating CRA compliance risk from day one." },
      { name: "Verify CASL compliance awareness for any email functionality", text: "Canada's Anti-Spam Legislation (CASL) requires explicit consent for commercial electronic messages and specific unsubscribe mechanisms. Any Canadian web application sending emails must comply. Ask the developer how they implement CASL-compliant consent workflows — this is a Canadian-specific legal requirement most non-Canadian developers overlook." },
      { name: "Run a paid trial task to test real full stack competence", text: "Pay for a 4–6 hour trial task: a simple CRUD application with authentication, a React frontend, and a backend API. This reveals code structure, security practices (input validation, auth), TypeScript proficiency, and delivery reliability — more than ten portfolio conversations. Senior Canadian full stack developers accept this without resistance." },
      { name: "Compare CAD rates against city benchmarks", text: "Toronto: CAD 75–130/hour senior. Vancouver: CAD 70–120/hour. Calgary/Edmonton: CAD 55–95/hour. Ottawa: CAD 60–110/hour. Montreal: CAD 55–100/hour. Rates below these benchmarks for senior work usually indicate junior experience. Rates significantly above indicate agency overhead or very specialised enterprise skill." },
      { name: "Structure payment in milestones with a written scope", text: "Agree: 30% deposit, milestone payments at defined deliverables (design sign-off, backend complete, frontend complete, testing complete), 10% on final delivery. For Canadian contractors, confirm invoicing currency (CAD), GST/HST treatment, and whether they are a registered Canadian business or international remote contractor." }
    ]
  },

  "wordpress-developer-australia-guide": {
    name: "How to Hire a WordPress Developer in Australia",
    description: "A step-by-step guide for Australian businesses evaluating WordPress developers — covering Australian GST, Privacy Act compliance, Afterpay, Australia Post, and what to test before hiring.",
    steps: [
      { name: "Test Australian WooCommerce GST knowledge directly", text: "Ask specifically: how do you configure 10% Australian GST for a WooCommerce store with both taxable and GST-free products? A developer with genuine Australian experience describes GST-free product category configuration, tax-inclusive B2C display, and ATO-compliant invoice requirements. A developer who gives a generic 'add tax settings' answer has not built for Australian compliance." },
      { name: "Confirm Privacy Act 1988 compliant consent implementation", text: "Ask how they implement cookie consent on Australian WordPress sites. The correct answer describes a mechanism that technically blocks non-essential scripts (Google Analytics, Facebook Pixel, marketing pixels) before consent is given — not just a visual banner. Non-blocking banners are not Privacy Act compliant." },
      { name: "Verify Afterpay and Australia Post WooCommerce integration", text: "Ask for examples of Australian WooCommerce stores with Afterpay and Australia Post live shipping rates. Confirm Afterpay badge visibility on product pages, correct eligibility range, and Australia Post rate calculation at checkout. These are non-negotiable for Australian retail WooCommerce." },
      { name: "Run portfolio projects through PageSpeed Insights mobile", text: "Test two live Australian WordPress or WooCommerce portfolio projects through Google PageSpeed Insights mobile. A senior Australian WordPress developer should achieve 80+ consistently. Slow WordPress sites lose Google Australia rankings and conversion — this is directly testable before hiring." },
      { name: "Ask about post-launch WordPress maintenance approach", text: "Confirm whether they offer a structured maintenance plan: monthly core, plugin, and theme update schedule, backup before updates, staging environment for testing, and emergency contact for security incidents. An unmanaged Australian WordPress installation is the most common source of website compromises." },
      { name: "Agree AUD milestone payment with written scope", text: "Request a written scope covering design, development, GST configuration, Afterpay and Australia Post integration, Privacy Act compliance, SEO foundations, timeline, and AUD milestone payments. Confirm their ABN and GST treatment on invoices before signing." }
    ]
  },

  "fullstack-developer-australia-guide": {
    name: "How to Hire a Full Stack Developer in Australia",
    description: "A step-by-step guide for Australian businesses evaluating full stack developers — covering Laravel, React/Next.js, Privacy Act compliance, AWS Sydney, and AUD rate benchmarks.",
    steps: [
      { name: "Define your backend and frontend stack requirements", text: "Specify backend (Laravel, Node.js) and frontend (React, Next.js) in the job brief before contacting developers. 'Full stack without a stack' means different things to every developer. For most Australian businesses, Laravel 11 backend with Next.js 15 App Router frontend is the production-standard combination for 2024." },
      { name: "Test Privacy Act compliance knowledge across both layers", text: "Ask how they implement Privacy Act 1988 compliance in both the Laravel backend and the React/Next.js frontend. The backend answer should cover: APP-compliant data collection, role-based access controls, encryption at rest and in transit, data retention policies. The frontend answer should cover: cookie consent that technically blocks non-essential scripts, accessible form validation." },
      { name: "Verify Australian B2B requirements: ABN validation and GST invoicing", text: "Ask whether they have integrated the ABN Lookup API and whether they can generate ATO-compliant GST invoices from Laravel. ATO-compliant invoices require: supplier ABN, recipient ABN, GST as a separate line, sequential invoice number, and date. These are standard B2B requirements in Australia." },
      { name: "Confirm AWS Sydney (ap-southeast-2) deployment experience", text: "Ask specifically about AWS Sydney deployment: EC2 or Elastic Beanstalk, RDS database, ElastiCache, S3, and GitHub Actions CI/CD. For Australian government and healthcare clients, ap-southeast-2 is a contractual requirement. For private sector SaaS, it is a customer confidence argument during enterprise sales cycles." },
      { name: "Request a code sample covering both backend and frontend", text: "Pay for a 4–6 hour trial task: a simple Laravel CRUD API with Sanctum auth and a Next.js App Router frontend with TypeScript. This reveals: code structure, TypeScript proficiency, test coverage, error handling, and AWS deployment approach — more than ten portfolio discussions. Senior Australian full stack developers accept this without resistance." },
      { name: "Agree AUD milestone payment with technical specification milestone", text: "The most important milestone in Australian full stack projects: the technical specification (data model, API design, feature list). Pay for this milestone before any feature development begins. It commits both parties to specific deliverables and prevents the most common Australian web project failure mode: scope disputes mid-development." }
    ]
  },

  "web-developer-adelaide-guide": {
    name: "How to Hire a Web Developer in Adelaide",
    description: "A step-by-step guide for Adelaide and South Australia businesses evaluating and hiring a web developer — covering SA sector requirements, AUD rate benchmarks, and how to structure the project.",
    steps: [
      { name: "Define your platform and Adelaide-specific requirements", text: "Specify whether you need Laravel (defence portals, healthcare systems), Shopify (winery, retail, food), WordPress (government, associations, hospitality), or React/Next.js (SaaS, government). Adelaide's defence and healthcare sectors have specific requirements that a generic web developer will underscope." },
      { name: "For defence sector: confirm AGSVA clearance status", text: "For security-classified Adelaide defence projects, ask about the developer's AGSVA security clearance level: Baseline Clearance, NV1, or NV2. Uncleared developers cannot start classified work until clearance is processed — Baseline takes 3–6 months, NV1 takes 6–12 months. For unclassified defence web applications, clearance is not required." },
      { name: "For winery or food export: confirm international Shopify shipping knowledge", text: "For Barossa Valley or McLaren Vale winery Shopify stores: ask specifically about GST-free pricing for international export, country-specific wine import restrictions, adult age verification, and Australia Post wine carton dimensions. These are winery-specific requirements that generic Shopify developers consistently miss." },
      { name: "For healthcare or government: confirm WCAG 2.1 AA compliance", text: "Ask how they test WCAG 2.1 AA accessibility — they should name axe DevTools, NVDA, VoiceOver, and Lighthouse by name. SA Government Digital Standards require WCAG 2.1 AA for public-facing web platforms. Retrofitting accessibility after launch is significantly more expensive than building it correctly from the start." },
      { name: "Test portfolio performance on PageSpeed Insights mobile", text: "Run two live portfolio projects through Google PageSpeed Insights mobile. Adelaide businesses in food and wine, healthcare, and professional services need fast-loading sites for Google Australia rankings. Target 75+ on mobile." },
      { name: "Agree AUD milestone payment with written scope", text: "A professional Adelaide developer provides a written scope covering platform, features, integrations, compliance requirements, AUD milestone payments, and post-launch support. For Adelaide government or defence projects: confirm SA Government procurement compliance requirements before signing." }
    ]
  },

  "nextjs-developer-australia-guide": {
    name: "How to Hire a Next.js Developer in Australia",
    description: "A step-by-step guide for Australian businesses evaluating Next.js developers — covering App Router proficiency, Core Web Vitals targets, headless Shopify, and AUD rate benchmarks.",
    steps: [
      { name: "Require App Router proficiency — not just Next.js familiarity", text: "Ask explicitly: do they build with Next.js App Router (Next.js 13+) or the legacy Pages Router? App Router is the current production standard using React Server Components. Any Australian developer still defaulting to Pages Router for new projects in 2024 is creating technical debt. This is a non-negotiable requirement." },
      { name: "Run their portfolio through PageSpeed Insights mobile", text: "Test two live Next.js portfolio projects through Google PageSpeed Insights mobile. A senior Australian Next.js developer achieves 85+ consistently. Scores below 75 indicate the developer is not applying Next.js performance defaults correctly — defeating the main reason to choose Next.js over WordPress for google.com.au rankings." },
      { name: "Test server component vs client component knowledge", text: "Ask how they decide what is a server component and what is a client component. Senior Australian Next.js developers describe: data fetching in Server Components, minimising 'use client' directives to reduce bundle size, and pushing interactivity to leaf nodes. Vague answers indicate shallow App Router experience." },
      { name: "Confirm TypeScript is used throughout", text: "Ask to see a code sample or GitHub repository. TypeScript must be configured throughout — not just in isolated files. Australian production Next.js projects without TypeScript are harder to maintain and introduce runtime bugs that TypeScript catches at compile time." },
      { name: "For headless Shopify: verify Australian commerce integration experience", text: "Headless Shopify with Next.js requires: Shopify Storefront API integration, Australian GST (10%), Shopify Payments Australia, Afterpay configuration, and Australia Post shipping integration. Ask for live headless Shopify examples serving Australian customers — not just generic Shopify experience." },
      { name: "Include Core Web Vitals targets in the written scope", text: "Agree Core Web Vitals targets in writing: LCP under 2.5s, CLS under 0.1, INP under 200ms. A serious Australian Next.js developer accepts these targets and plans architecture to achieve them. Confirm Privacy Act compliant consent and hreflang en-AU before signing." }
    ]
  },

  "react-developer-australia-guide": {
    name: "How to Hire a React Developer in Australia",
    description: "A practical guide for Australian businesses evaluating React developers — covering TypeScript requirements, WCAG 2.1 AA compliance, Privacy Act compliance, and AUD rate benchmarks.",
    steps: [
      { name: "Test TypeScript proficiency first", text: "Ask to see a code sample or GitHub repository. Look for: explicitly typed props with interfaces, API responses typed with Zod or TypeScript interfaces, custom hooks typed with generics, no 'any' in production code. TypeScript proficiency is the single most important differentiator between Australian production React developers and developers who create runtime bugs." },
      { name: "For government or enterprise: test WCAG 2.1 AA knowledge", text: "Ask how they implement accessible modals, data tables, and form validation in React. They should describe: useRef for focus management, aria-live regions for dynamic updates, role='alert' for validation errors, and testing with NVDA and VoiceOver. Australian Government Digital Service Standards require WCAG 2.1 AA — developers who cannot answer this question are not qualified for government-standard applications." },
      { name: "Verify Privacy Act compliant cookie consent in React", text: "Ask how they implement Privacy Act 1988 compliant consent in React applications. The answer should describe a mechanism that technically blocks Google Analytics, Facebook Pixel, and other non-essential scripts before user consent. React applications that fire analytics before consent are not compliant." },
      { name: "Run a paid trial task (4–6 hours)", text: "Pay for a trial task: build a data table with sorting, filtering, pagination, and accessible row actions using React, TypeScript, and React Query against a real API. This reveals TypeScript skill, component structure, accessibility, and test coverage in one task. Senior Australian React developers accept this without resistance." },
      { name: "Confirm React 18 and modern ecosystem proficiency", text: "Ask about: React Query or SWR for server state (not useState for API data), Zustand or React Context for global state, Vitest or Jest for testing, and current React 18 hooks usage. Developers who still use Redux boilerplate for simple state, class components, or CRA are not current with Australian production React standards." },
      { name: "Agree AUD milestone payment with written scope", text: "Request a written scope covering component architecture, TypeScript requirements, accessibility standards, test coverage expectations, timeline, and AUD milestone payments. For government projects: include WCAG 2.1 AA compliance as a testable deliverable in the written scope." }
    ]
  },

  "web-developer-australia-cities-guide": {
    name: "How to Hire a Web Developer Across Australian Cities",
    description: "A step-by-step guide for Australian businesses choosing the right web developer from Sydney, Melbourne, Brisbane, Perth, or Adelaide.",
    steps: [
      { name: "Define your platform and Australian-specific requirements", text: "Before approaching any Australian developer, specify whether you need WordPress, Laravel, Shopify, or React/Next.js. Also identify your compliance requirements: Australian GST (10%), Afterpay for retail, Australia Post for ecommerce, Privacy Act 1988 for data collection, and WCAG 2.1 AA for government or healthcare. These apply in every Australian city." },
      { name: "Match the developer's city strengths to your project type", text: "Sydney for financial services, ASIC-adjacent applications, and premium ecommerce. Melbourne for design-forward Shopify, SaaS product engineering, and government WCAG compliance. Brisbane for construction B2B portals, tourism booking integration, and fast-growing tech startups. Perth for mining and resources B2B applications and PWA offline-first. Adelaide for defence sector applications, healthcare platforms, and winery ecommerce with international export." },
      { name: "Decide whether local presence is required or remote delivery works", text: "Most Australian web projects are delivered fully remotely. Security-cleared Adelaide defence work and government stakeholder workshop engagements are the primary exceptions. For Perth projects, confirm the developer has an AWST-compatible async communication approach. For all other Australian cities, remote delivery with Australian compliance expertise is the most cost-effective model." },
      { name: "Compare total project cost across Australian cities", text: "Get quotes from Sydney, Melbourne, or Brisbane-based developers alongside remote Australian specialists. Compare total project cost for the same defined scope. A Sydney CBD agency at AUD 160/hour often costs 2–3× a senior remote developer at AUD 85–95/hour for the same Shopify or Laravel deliverable." },
      { name: "Verify Australian-specific compliance knowledge", text: "Confirm Australian GST (10%) configuration, Afterpay integration, Australia Post shipping, Privacy Act 1988 compliant consent, and hreflang en-AU for Google Australia. These are non-negotiable for any Australian web project — verify knowledge before signing." },
      { name: "Agree AUD milestone payment with written scope and ABN invoicing", text: "A professional Australian developer provides a written scope with AUD pricing, milestone breakdown, deliverables, timeline, and post-launch support terms. Confirm ABN and GST treatment on invoices before signing." }
    ]
  },

  "web-developer-brisbane-guide": {
    name: "How to Hire a Web Developer in Brisbane",
    description: "A step-by-step guide for Brisbane and Queensland businesses evaluating and hiring a web developer — covering Queensland sector requirements, AUD rate benchmarks, and how to structure the project.",
    steps: [
      { name: "Define your project type and platform first", text: "Decide whether you need Laravel (construction B2B portals, resources tools), Shopify (tourism retail, Queensland consumer brands), WordPress (hospitality, tourism content sites), or React/Next.js (SaaS, government) before contacting Brisbane developers. Platform clarity prevents expensive mismatches — a Shopify specialist is not the right choice for a Laravel mining portal." },
      { name: "For tourism: confirm booking system integration experience", text: "Queensland tourism operators (tour operators, accommodation, activity providers) need FareHarbor, Rezdy, Checkfront, or TryBooking integration. Ask specifically for examples — developers without hospitality booking system experience will underscope and underquote these integrations significantly." },
      { name: "For construction or resources: require Laravel B2B application experience", text: "Brisbane construction, mining, and resources companies need Laravel developers with complex data modelling, multi-role user systems, and API integration experience. Ask for specific examples of supplier portals, procurement systems, or field data applications. Generic web developers without B2B application experience will underscope these projects." },
      { name: "Confirm Australian GST and Afterpay for any ecommerce project", text: "Ask specifically how they configure 10% Australian GST in Shopify or WooCommerce, and how they integrate Afterpay. Queensland retail and tourism businesses without Afterpay lose sales to competitors. GST misconfiguration creates ATO compliance risk from day one." },
      { name: "Test portfolio performance on PageSpeed Insights mobile", text: "Run two live portfolio projects through Google PageSpeed Insights mobile. Brisbane businesses in retail, tourism, and construction need fast-loading sites for Google Australia rankings. Target 75+ on mobile." },
      { name: "Agree AUD milestone payment with written scope", text: "Request a written scope covering platform, features, integrations, GST configuration, timeline, and AUD milestone payments before development starts. For Brisbane construction B2B applications: include post-launch support SLA and data migration plan in the written scope." }
    ]
  },

  "web-developer-perth-guide": {
    name: "How to Hire a Web Developer in Perth",
    description: "A step-by-step guide for Perth and Western Australia businesses evaluating and hiring a web developer — covering resources sector requirements, AWST timezone, AUD rate benchmarks, and what to evaluate.",
    steps: [
      { name: "Define your platform and WA-specific requirements", text: "Specify whether you need Laravel (mining portals, field data systems, B2B procurement), Shopify (retail, consumer brands), WordPress (tourism, hospitality), or React/Next.js (government, SaaS) before contacting Perth developers. Perth's resources economy creates more Laravel demand than any other Australian city." },
      { name: "For resources or agriculture: require PWA and offline-first experience", text: "Perth mining, oil and gas, and Northern Territory agriculture applications often operate in areas with poor connectivity. Ask whether the developer has built Progressive Web Apps (PWAs) with service workers and offline data caching. A developer without PWA experience cannot build a reliable field data collection application for remote WA operations." },
      { name: "Confirm AWST-compatible async communication approach", text: "Perth operates on AWST (UTC+8) — 2–3 hours behind eastern Australia. Ask how the developer handles Perth timezone projects: written briefs, Loom video walkthroughs, Figma design reviews, and milestone handovers. Developers who rely on same-timezone live calls will create scheduling friction for Perth projects." },
      { name: "Confirm Australian GST and Afterpay for any ecommerce project", text: "Australian GST (10%) and Afterpay requirements apply equally in Perth. Ask specifically — Perth retail businesses without Afterpay lose sales to eastern Australian competitors who have it." },
      { name: "Run portfolio projects through PageSpeed Insights mobile", text: "Test two live portfolio projects on PageSpeed Insights mobile. Perth businesses need fast-loading sites for Google Australia rankings. Target 75+ on mobile — Australian remote users on mobile are often on slower connections, making performance even more critical." },
      { name: "Agree AUD milestone payment with written scope", text: "A professional Perth developer provides a written scope covering platform, features, integrations, AUD milestone payments, and AWST-compatible communication protocol. Resources and mining B2B applications especially need clearly defined deliverables — open-ended time and materials contracts on complex applications create budget overruns." }
    ]
  },

  "shopify-developer-australia-guide": {
    name: "How to Hire a Shopify Developer in Australia",
    description: "A step-by-step process for Australian businesses evaluating Shopify developers — covering Australian GST, Afterpay, Australia Post, google.com.au SEO, and what to test before hiring.",
    steps: [
      { name: "Test Australian GST knowledge before anything else", text: "Ask directly: how do you configure 10% GST for a Shopify store selling taxable and GST-free products? A developer with genuine Australian Shopify experience explains GST-free product categories (fresh food, medical, educational), tax-inclusive B2C pricing, and GST shown separately on invoices. A generic answer about 'adding tax rules' reveals offshore or non-Australian experience." },
      { name: "Confirm Afterpay and Zip Pay integration experience", text: "Ask for examples of Australian Shopify stores with Afterpay and Zip Pay configured. Afterpay is mandatory in most Australian retail categories — its absence directly reduces conversion. Ask about Afterpay eligibility display on product pages, Afterpay badge placement, and minimum/maximum order value configuration." },
      { name: "Verify Australia Post API integration", text: "Ask about their Australia Post integration approach. For stores shipping nationally, live Australia Post rates based on weight, dimensions, and destination zone are expected by Australian customers. Ask whether they use Shopify's native carrier API, Australia Post's official Shopify app, or a third-party shipping rates app (Shippit, ShippingEasy)." },
      { name: "Request links to 3 live Australian Shopify stores", text: "Visit each store, run PageSpeed Insights mobile (target 75+), check for Afterpay badge on product pages, verify Australia Post shipping at checkout, and confirm GST display in the cart. These checks take under 10 minutes and immediately reveal genuine Australian Shopify experience versus generic Shopify experience." },
      { name: "Check google.com.au SEO implementation", text: "Search for the developer's portfolio stores on google.com.au for their target keywords. Australian Shopify SEO requires hreflang en-AU, LocalBusiness schema with Australian GeoCoordinates, geo.region AU meta tags, and Privacy Act compliant consent. These are not automatically implemented by Shopify — they require developer work." },
      { name: "Agree AUD milestone payment with ABN invoicing", text: "Confirm the developer provides ATO-compliant invoices: their ABN, your ABN (for B2B input tax credit claims), GST shown separately, sequential invoice number, and date. Agree AUD milestone payment structure: 30% deposit, milestone payments, 10% on launch." }
    ]
  },

  "laravel-developer-australia-guide": {
    name: "How to Hire a Laravel Developer in Australia",
    description: "A step-by-step guide for Australian businesses evaluating Laravel developers — covering Privacy Act compliance, ABN validation, Australian GST invoicing, AWS Sydney hosting, and what to test before hiring.",
    steps: [
      { name: "Test Privacy Act 1988 compliance knowledge directly", text: "Ask how they implement Australian Privacy Act compliant data handling in a Laravel application. A developer with genuine Australian production experience describes specific APP requirements: consent-based data collection (APP 3), security architecture (APP 11), access requests (APP 12), and data retention policies. Developers who give generic GDPR-style answers without Australian APP specifics have not built for Australian compliance." },
      { name: "Verify ABN validation and ATO-compliant GST invoice generation", text: "Ask whether they have integrated the Australian Business Register ABN Lookup API, and whether they can generate ATO-compliant GST invoices from Laravel. An ATO-compliant invoice requires: supplier ABN, recipient ABN (B2B), GST shown as a separate line, sequential invoice number, and date. Missing any of these makes the invoice non-compliant for input tax credit claims." },
      { name: "Assess AWS Sydney deployment experience for data sovereignty", text: "Ask about their deployment approach and whether they have deployed Laravel applications to AWS Sydney (ap-southeast-2). For government, healthcare, or financial services clients, Australian data hosting is often a contractual requirement. Ask specifically: how they configure AWS Sydney, whether they use Laravel Forge or GitHub Actions for deployment, and how they handle database backups and recovery." },
      { name: "Review code sample or GitHub repository", text: "Request a code sample or public GitHub repository. Look for: service classes separating business logic from controllers, Form Request validation classes, Eloquent scope methods, feature tests using Laravel's HTTP testing suite, and factories for test data. Developers without these patterns are not production-ready for Australian enterprise applications." },
      { name: "For government or healthcare: confirm WCAG 2.1 AA awareness", text: "Australian government and healthcare Laravel applications must produce WCAG-compliant dynamic content. Ask how they make server-generated error messages, form validation feedback, and dynamic data tables accessible. Developers who only apply accessibility to static HTML are not equipped for government-standard dynamic applications." },
      { name: "Agree AUD milestone payment with ABN-compliant invoicing", text: "Confirm the developer has an ABN, provides ATO-compliant tax invoices, and invoices in AUD. Agree milestone payment structure: 30% deposit, milestone payments at defined deliverables, 10% on final delivery with testing sign-off. For Australian government projects: confirm procurement compliance requirements before signing." }
    ]
  },

  "web-developer-australia-guide": {
    name: "How to Hire a Web Developer in Australia",
    description: "A step-by-step guide for Australian businesses evaluating and hiring a web developer — covering GST configuration, Privacy Act compliance, AUD rate benchmarks, and how to structure the engagement.",
    steps: [
      { name: "Define your platform and project type before approaching anyone", text: "Write a one-page project brief specifying whether you need WordPress, Shopify, Laravel, or React/Next.js. Australian businesses that send a platform-clear brief receive accurate estimates. Developers who receive vague briefs provide ballpark figures that balloon during development. Include business goals, required integrations, expected user volume, and timeline." },
      { name: "Confirm Australian GST (10%) configuration for any ecommerce project", text: "Australia charges a flat 10% GST on most goods and services. Ask specifically how the developer configures Australian GST in Shopify or WooCommerce: tax-inclusive vs tax-exclusive display, GST invoicing per ATO requirements, and correct ABN on invoices. GST misconfiguration creates ATO compliance risk from the first transaction." },
      { name: "Verify Australian payment gateway experience", text: "Ask for live examples of Australian ecommerce stores using Afterpay (BNPL is mainstream in Australia), Stripe Australia, and PayPal Australia. Afterpay integration is often expected by Australian consumers for purchases over AUD 50. Ask specifically about Afterpay setup — not just Stripe configuration." },
      { name: "Check Privacy Act 1988 and Australian Privacy Principles awareness", text: "Any website collecting personal information from Australian customers must comply with the Privacy Act 1988 and Australian Privacy Principles. Ask whether the developer implements compliant cookie consent, privacy policy requirements, and data handling practices. Australian Privacy Act compliance is not the same as UK GDPR — they should know the difference." },
      { name: "Run portfolio projects through PageSpeed Insights on mobile", text: "Test two live portfolio projects through Google PageSpeed Insights mobile. Australian consumers use mobile heavily — slow-loading Australian sites lose conversions and rank lower in Google Australia results. Target 75+ on mobile. Scores below 65 indicate a performance problem regardless of visual design quality." },
      { name: "Agree AUD milestone payment with written scope", text: "A professional Australian web developer provides a written scope: platform, features, integrations, AUD pricing, milestone payment schedule, and post-launch support terms. Do not start any project without a written scope and milestone payment structure. Request ABN and confirm GST treatment on invoices before signing." }
    ]
  },

  "web-developer-sydney-guide": {
    name: "How to Hire a Web Developer in Sydney",
    description: "A step-by-step guide for Sydney businesses evaluating and hiring a web developer — covering financial services requirements, NSW-specific considerations, AUD rate benchmarks, and how to structure the project.",
    steps: [
      { name: "For financial services: require sector application experience", text: "Sydney financial services projects (client portals, investment dashboards, fintech platforms, insurance tools) require developers with ASIC-adjacent application experience. Ask for specific fintech or financial sector application examples. Generic WordPress developers without financial sector experience will underscope security, compliance, and audit trail requirements that ASIC-regulated businesses need." },
      { name: "Confirm Australian GST and ABN invoicing requirements", text: "Any Sydney developer you hire must provide ATO-compliant tax invoices: their ABN, your ABN, GST amount shown separately, and correct invoice date. Ask how they invoice before signing. Developers without an ABN may create GST compliance issues for your business — withholding tax rules apply to contractors without ABNs." },
      { name: "Verify Afterpay and Australian payment gateway experience", text: "Sydney consumers expect Afterpay for mid-range purchases. Ask for live examples of Sydney Shopify or WooCommerce stores with Afterpay, Zip Pay, Stripe Australia, and PayPal Australia configured. These are not optional for Sydney retail and lifestyle ecommerce — missing them reduces conversion immediately." },
      { name: "For enterprise: assess Sydney CBD office and stakeholder management experience", text: "Sydney corporate and enterprise projects often involve multiple stakeholders, agency coordination, and formal approval processes. Ask how the developer manages stakeholder review cycles, revision rounds, and sign-off procedures. Developers without corporate project management experience underestimate Sydney enterprise timelines significantly." },
      { name: "Test portfolio performance on PageSpeed Insights mobile", text: "Run two live Sydney portfolio projects through Google PageSpeed Insights mobile. Sydney is Australia's most competitive digital market — fast-loading sites have a measurable SEO and conversion advantage. Target 80+ on mobile for financial services and enterprise work." },
      { name: "Agree AUD milestone payment with written scope and post-launch SLA", text: "For Sydney financial services and enterprise projects: agree written scope, AUD milestone payments, post-launch support SLA, and security update responsibility before development starts. Sydney corporate projects have procurement standards — a developer who resists a formal written scope is not set up for enterprise work." }
    ]
  },

  "web-developer-melbourne-guide": {
    name: "How to Hire a Web Developer in Melbourne",
    description: "A step-by-step guide for Melbourne businesses hiring a web developer — covering Melbourne's design-forward market, Victorian considerations, AUD rate benchmarks, and what to evaluate.",
    steps: [
      { name: "For design-led brands: require evidence of design and development integration", text: "Melbourne's design culture — fashion, hospitality, creative, arts — demands higher visual standards than most Australian cities. Ask whether the developer collaborates closely with UX/UI designers or designs themselves. Review portfolio projects specifically on mobile for layout quality, typography, and animation — not just speed scores. Melbourne clients notice design quality before functionality." },
      { name: "Confirm Australian GST configuration and ATO invoicing compliance", text: "Ask specifically how the developer handles Australian GST: 10% rate, tax-inclusive display for B2C, tax-exclusive for B2B, separate GST line on invoices, and ABN on every tax invoice. Victorian businesses can request GST invoices for input tax credit claims — misconfigured GST invoicing creates ATO compliance problems." },
      { name: "Verify Afterpay and BNPL payment gateway experience for Melbourne retail", text: "Melbourne retail and hospitality businesses need Afterpay, Zip Pay, and Klarna Australian configurations for Shopify or WooCommerce. BNPL adoption in Melbourne is above the Australian average — especially in fashion, homewares, and lifestyle categories. Ask for live Melbourne Shopify store examples with BNPL configured." },
      { name: "For hospitality: confirm booking and reservation system integration experience", text: "Melbourne's cafe and restaurant culture (coffee, brunch, fine dining, bars) creates strong demand for ResDiary, OpenTable, SevenRooms, or Resy integration experience. Ask specifically — a developer without hospitality system integration experience will underscope and under-price these integrations significantly." },
      { name: "Test portfolio performance on PageSpeed Insights mobile", text: "Run two live Melbourne portfolio projects through Google PageSpeed Insights mobile. Melbourne consumers are style-conscious but fast-loading sites still outrank slower competitors in Google Australia search results. Target 75+ on mobile — a visually impressive Melbourne Shopify store that scores 55 on mobile will rank below simpler, faster competitors." },
      { name: "Agree AUD milestone payment with written scope", text: "A professional Melbourne web developer provides a written scope: platform, features, integrations, AUD milestone payment schedule, and post-launch support terms. Melbourne creative projects especially need clear deliverables defined — design revision rounds, content responsibility, and launch checklist must all be specified in writing before development starts." }
    ]
  },

  "laravel-developer-london-guide": {
    name: "How to Hire a Laravel Developer in London",
    description: "A step-by-step guide for London businesses evaluating Laravel developers — covering UK GDPR compliance, London financial services requirements, GBP rate benchmarks, and what to test before hiring.",
    steps: [
      { name: "Test UK GDPR data architecture knowledge", text: "Ask how they implement UK GDPR compliant data handling in a Laravel application for a London financial services client. A developer with London production experience describes: ICO-compliant cookie consent, right to erasure implementation (soft delete and hard delete), AES-256 encryption at rest, audit trail logging (who accessed what and when), and data retention schedule enforcement via Laravel scheduled commands. Generic GDPR answers without UK-specific implementation reveal non-London experience." },
      { name: "Confirm London-specific integrations: GoCardless, Stripe UK, Companies House", text: "Ask whether they have integrated GoCardless direct debit (used by London subscription businesses), Stripe UK (with UK registered address and UK VAT on invoices), and UK Companies House API for registered address validation. Developers without London production experience miss these integrations in their initial quotes — adding significant cost and time late in the project." },
      { name: "For financial services: ask about FCA-adjacent security requirements", text: "London fintech and regulated sector clients expect: multi-factor authentication, audit trail logging, OWASP Top 10 remediation, data residency on AWS eu-west-2 (London), and penetration testing scope. Ask whether the developer has delivered Laravel applications for London financial services, insurance technology, or legal technology clients — domain knowledge here is as important as technical skill." },
      { name: "Request a code sample or GitHub repository", text: "Review their Laravel code specifically for: service class architecture (business logic out of controllers), Form Request validation classes, Eloquent scope methods, feature test coverage with database factories, and queue usage (Horizon). A controller with 300+ lines of logic indicates a developer who will build unmaintainable London applications at £80/hour." },
      { name: "Confirm UK VAT three-tier configuration in billing modules", text: "For any London billing or subscription Laravel module: ask about UK VAT configuration (20% standard, 5% reduced, 0% zero-rated) via Stripe Tax and UK HMRC-compliant invoice generation. Missing VAT configuration on a London billing module creates HMRC compliance exposure from the first invoice." },
      { name: "Agree GBP milestone payment with signed SOW and insurance confirmation", text: "London financial services clients typically require a signed Statement of Work, public liability insurance confirmation, professional indemnity insurance, and NDA before project commencement. Agree GBP milestone payments (30% deposit, milestone payments, final on delivery). Confirm whether the developer is VAT-registered (adding 20% VAT to invoices) or below the threshold." }
    ]
  },

  "wordpress-developer-london-guide": {
    name: "How to Hire a WordPress Developer in London",
    description: "A step-by-step guide for London businesses evaluating WordPress developers — covering UK GDPR cookie consent, WooCommerce UK VAT, Gutenberg block development, and GBP rate benchmarks.",
    steps: [
      { name: "Confirm UK GDPR cookie consent implementation that technically blocks scripts", text: "Ask directly: how do you implement UK GDPR compliant cookie consent on a WordPress site? The answer must include: a consent management plugin (Cookiebot, CookieYes) that technically blocks Google Analytics, Facebook Pixel, and other non-essential scripts before consent is given; granular opt-in (analytics separate from advertising); consent logging with timestamp and cookie version. A developer who says 'I add a cookie banner' without mentioning script blocking is not UK GDPR compliant." },
      { name: "Test WooCommerce UK VAT three-tier configuration knowledge", text: "Ask specifically: how do you configure the three UK VAT rates in WooCommerce? The correct answer describes: 20% standard rate for most goods; 5% reduced rate for domestic energy and children's car seats; 0% zero-rated for most food, books, and children's clothing. A WooCommerce developer who cannot explain zero-rating has not built for UK ecommerce compliance." },
      { name: "For post-Brexit EU selling: confirm Shopify Markets or WooCommerce international setup", text: "London retailers selling to EU customers after Brexit need UK VAT removed from EU orders and EU import duty calculation configured. In WooCommerce: confirm they can configure country-specific tax settings and disable UK VAT for EU shipping addresses. For Shopify: confirm Shopify Markets with Duties & Import Taxes configuration." },
      { name: "Request a Gutenberg block development code sample", text: "Ask for a custom Gutenberg block they have built with register_block_type() and a JSON schema. Review the code for: block.json configuration, InspectorControls for editor settings, theme.json alignment, and a corresponding PHP render callback or static save function. Developers who default to Elementor for new London sites are not using current WordPress architecture." },
      { name: "Run portfolio projects through PageSpeed Insights mobile", text: "Test two live London portfolio projects on Google PageSpeed Insights mobile. Target 75+ on mobile — London WordPress sites that score below 65 mobile are losing organic google.co.uk ranking to faster competitors. Performance is both a ranking factor and a UK Core Web Vitals metric that Google displays to searchers." },
      { name: "Agree GBP milestone payment with UK VAT invoicing", text: "Request a written scope covering features, UK GDPR compliance plan, UK VAT configuration approach, timeline, and GBP milestone payments. Confirm whether the developer is VAT-registered (will add 20% VAT to invoices) or below threshold. A professional London WordPress developer provides a professional written scope without hesitation." }
    ]
  },

  "shopify-developer-london-guide": {
    name: "How to Hire a Shopify Developer in London",
    description: "A step-by-step guide for London businesses and brands evaluating Shopify developers — covering UK VAT, post-Brexit EU markets, Shopify 2.0 architecture, and GBP rate benchmarks.",
    steps: [
      { name: "Confirm UK VAT three-tier configuration in Shopify Tax", text: "Ask specifically: how do you configure the three UK VAT rates in Shopify Tax? The correct answer describes: enabling Shopify Tax UK; configuring 20% standard rate as default; applying zero-rate to applicable product categories (food, books, children's clothing under VATA 1994 Schedule 8); applying 5% reduced rate to domestic fuel and children's car seats. A developer who applies 20% to all products overcharges on zero-rated items and creates HMRC exposure." },
      { name: "For stores selling to EU after Brexit: confirm Shopify Markets configuration", text: "Ask how they configure Shopify Markets for post-Brexit EU selling. The correct answer describes: enabling Shopify Duties & Import Taxes for EU markets; configuring duty thresholds per EU country (€150 DDP threshold); displaying EU country-specific prices inclusive of local VAT; and removing UK VAT from EU orders. Developers without London ecommerce experience often miss post-Brexit EU configuration entirely." },
      { name: "Confirm Shopify Payments UK, Klarna UK, and Clearpay merchant agreements", text: "Ask whether they have set up Klarna UK and Clearpay (Afterpay UK) for London merchants before. Both require separate merchant agreements beyond Shopify Payments UK. London fashion and lifestyle brands without BNPL configured lose significant conversion — especially from 18–35 London shoppers. Confirm the developer can guide the merchant through Klarna UK and Clearpay merchant applications." },
      { name: "Review Shopify 2.0 JSON template portfolio for London brands", text: "Ask to review a recent Shopify 2.0 custom theme built for a London brand. Look for: JSON templates (not Legacy Liquid templates); section schemas with named settings for client editing; theme.json global tokens for brand colours and typography; and editorial sections (hero, editorial grid, lookbook) that balance brand aesthetics with Core Web Vitals LCP scores. London fashion brands need themes editable by non-developers." },
      { name: "Test portfolio performance on PageSpeed Insights mobile", text: "Test two live London Shopify stores through Google PageSpeed Insights mobile. Target LCP under 2.5 seconds — London brand websites with LCP above 4 seconds will rank below faster competitors for London location keywords. Image optimisation (WebP, lazy loading, responsive srcset) and lazy-loaded apps are the two highest-impact London Shopify optimisations." },
      { name: "Agree GBP milestone payment with UK VAT invoicing", text: "Agree a written project scope covering theme development, UK VAT configuration, post-Brexit EU Market setup, BNPL integration, Core Web Vitals performance targets, and GBP milestone payments. London brand clients regularly add editorial section requirements during development — agree change control terms (hourly rate for out-of-scope requests) upfront." }
    ]
  },

  "laravel-developer-canada-guide": {
    name: "How to Hire a Laravel Developer in Canada",
    description: "A step-by-step guide for Canadian businesses evaluating Laravel developers — covering CASL compliance, Canadian GST/HST invoicing, PIPEDA data handling, and CAD rate benchmarks.",
    steps: [
      { name: "Test CASL compliance knowledge in Laravel applications", text: "Ask how they implement CASL (Canada's Anti-Spam Legislation) compliant consent management in a Laravel application. A developer with Canadian production experience describes: a ConsentRecord model with email, consent_type, consent_at, source_url, and ip_address fields; queue-based unsubscribe processing within CASL's 10-business-day requirement; and permanent consent evidence retention. CRTC fines for CASL violations reach CAD 10 million per violation — developers who give generic GDPR answers have not built for Canadian production." },
      { name: "Confirm Canadian GST/HST billing module experience", text: "Ask how they configure Canadian GST/HST in a Laravel billing module. The correct answer describes: Stripe Tax Canada with province nexuses (Ontario HST 13%, Nova Scotia HST 15%, BC GST+PST 12%, Alberta GST 5%, Quebec GST+QST 14.975%); Canadian Business Number (BN) displayed on generated invoices; and net/gross/tax split on invoice line items for CRA compliance." },
      { name: "For Quebec projects: confirm Law 25 PIA and data residency experience", text: "Quebec's Law 25 (updated 2023) requires Privacy Impact Assessments for new systems with automated decision-making, breach notification within 72 hours, and data localization assessment. Ask whether they have delivered Laravel applications for Quebec businesses and whether they are familiar with the Commission d'accès à l'information (CAI) requirements. For Quebec projects, AWS ca-central-1 (Montreal) hosting is the recommended data residency option." },
      { name: "Request a code sample or GitHub repository", text: "Review their Laravel code for: service class architecture, Form Request validation, Eloquent scope methods, feature tests with database factories, and environment-based configuration. Canadian Laravel production code must implement CASL consent management — look for a ConsentRecord model or equivalent in their sample code. Developers without these patterns are not production-ready for Canadian enterprise applications." },
      { name: "Confirm Stripe Canada or Interac payment integration experience", text: "For Canadian ecommerce or subscription billing: ask about Stripe Canada configuration (Canadian dollar billing, Canadian Business Number on invoices) and Interac Online or Interac Debit integration for Canadian bank payment acceptance. These are Canadian-specific payment requirements that developers without Canadian production experience regularly miss." },
      { name: "Agree CAD milestone payment with written scope", text: "Request a written scope covering platform, features, CASL compliance architecture, Canadian GST/HST configuration, timeline, and CAD milestone payments. Canadian Laravel projects use fixed-price milestone contracts with 30% deposit — budget 15–20% contingency for scope clarifications in discovery, especially for CASL and provincial tax edge cases." }
    ]
  },

  "react-developer-canada-guide": {
    name: "How to Hire a React Developer in Canada",
    description: "A step-by-step guide for Canadian businesses evaluating React developers — covering TypeScript requirements, CASL compliance, WCAG 2.1 AA, and CAD rate benchmarks.",
    steps: [
      { name: "Confirm TypeScript strict mode in all React component development", text: "Ask whether they use TypeScript strict mode for all React component development. In strict mode: noImplicitAny prevents untyped variables; strictNullChecks prevents null/undefined runtime errors; and noImplicitReturns ensures all paths return typed values. A developer who uses TypeScript only for basic type annotations — not strict mode — is not meeting Canadian financial services or government TypeScript standards." },
      { name: "Test CASL consent UI implementation knowledge", text: "Ask how they implement a CASL-compliant newsletter opt-in in a React form. The correct answer describes: an unchecked controlled checkbox (defaultChecked={false}); clear consent language specifying what the user is subscribing to; form submission passing consent_at timestamp and source_url to the backend for CASL evidence logging; and a confirmation email with a functional unsubscribe link. Developers who say 'I add a checkbox' without describing the consent evidence architecture are not CASL compliant." },
      { name: "For government or regulated sector: confirm WCAG 2.1 AA accessibility", text: "WCAG 2.1 AA is mandatory for Canadian government procurement and best practice for regulated sectors (banking, insurance, telecommunications). Ask for examples of ARIA attribute implementation in complex interactive React components: data tables with sortable columns, modal dialogs with focus trapping, autocomplete inputs with ARIA listbox, and form validation with associated error messages. Review portfolio for keyboard navigation support." },
      { name: "Confirm Next.js App Router vs plain React decision criteria", text: "Ask how they decide between Next.js and plain React for a Canadian business application. The correct answer describes: Next.js for SEO-critical pages (marketing, product, blog) using static generation or server components; plain React (or Next.js with client-only routes) for authenticated SPA dashboards where SEO is irrelevant. A developer who defaults to plain React for all projects is missing google.ca ranking opportunities for SEO-important Canadian content." },
      { name: "Review portfolio for Core Web Vitals scores on Canadian sites", text: "Test two live portfolio projects on Google PageSpeed Insights mobile. Canadian React/Next.js sites targeting google.ca should score LCP under 2.5 seconds, CLS under 0.1, and INP under 200ms. React applications without server-side rendering or static generation commonly fail LCP on mobile — this is a direct ranking factor for Canadian Google Search." },
      { name: "Agree CAD milestone payment with written scope", text: "Request a written scope covering React component architecture, TypeScript usage, CASL consent UI implementation (if applicable), WCAG 2.1 AA accessibility scope (if government/regulated), Core Web Vitals performance targets, timeline, and CAD milestone payments. Canadian React projects use fixed-price milestone contracts for defined scope — hourly retainers for ongoing feature development after launch." }
    ]
  },

  "wordpress-developer-canada-guide": {
    name: "How to Hire a WordPress Developer in Canada",
    description: "A step-by-step guide for Canadian businesses evaluating WordPress developers — covering Canadian GST/HST in WooCommerce, CASL newsletter compliance, PIPEDA cookie consent, and CAD rate benchmarks.",
    steps: [
      { name: "Test Canadian GST/HST WooCommerce configuration knowledge", text: "Ask directly: how do you configure Canadian GST/HST in WooCommerce? The correct answer describes: enabling WooCommerce Tax; creating tax rates per province (Ontario HST 13%, Nova Scotia HST 15%, BC GST+PST two rows totalling 12%, Alberta GST 5% only, Quebec GST+QST two rows totalling 14.975%); and applying tax based on shipping address. A developer who configures flat 5% GST everywhere is not Canadian tax compliant — creating CRA compliance risk from the first transaction." },
      { name: "Confirm CASL-compliant newsletter opt-in implementation in WooCommerce", text: "Ask specifically: how do you implement a CASL-compliant newsletter opt-in in WooCommerce checkout? The correct answer requires: an unchecked opt-in checkbox (not pre-ticked); clear consent language identifying the subscription; consent timestamp and source URL recorded per subscriber; and CASL evidence stored permanently even after unsubscribing. WooCommerce's default newsletter checkbox behaviour must be changed to be CASL compliant — developers who do not know this have not built Canadian WooCommerce stores." },
      { name: "Confirm PIPEDA cookie consent plugin that technically blocks scripts", text: "Canada's PIPEDA requires consent before non-essential cookies fire. Ask whether they implement a compliant cookie consent plugin (Cookiebot, CookieYes) that technically blocks Google Analytics, Facebook Pixel, and other non-essential scripts before user consent. WordPress plugins that display a cookie banner but still load analytics are not PIPEDA compliant — ask for their specific implementation approach." },
      { name: "Confirm Canada Post API integration experience for WooCommerce shipping", text: "Canada Post is the primary carrier for Canadian WooCommerce stores. Ask whether they have integrated the Canada Post Shipping plugin (or Canada Post API directly) for real-time shipping rates, tracking, and label generation. Canada Post updates their API 2–3 times per year — a developer who has integrated Canada Post understands their update cycle and maintenance requirements." },
      { name: "Request a Gutenberg block development code sample", text: "Ask to see a custom Gutenberg block they have built using register_block_type() and a block.json schema. Developers still building new Canadian WordPress sites with Elementor, Divi, or WPBakery are using outdated tools that create performance, security, and maintainability problems. Custom Gutenberg blocks built with block.json and theme.json are the current WordPress development standard." },
      { name: "Agree CAD milestone payment with written scope", text: "Request a written scope covering WooCommerce Canadian tax configuration, CASL compliance architecture, Canada Post integration, Gutenberg block development plan, Core Web Vitals performance targets, timeline, and CAD milestone payments. Canadian WordPress projects use fixed-price milestone contracts — 30% deposit, milestone payments on deliverables, final on launch." }
    ]
  },

  "php-developer-canada-guide": {
    name: "How to Hire a PHP Developer in Canada",
    description: "A step-by-step guide for Canadian businesses evaluating PHP and Laravel developers — covering CASL compliance, Canadian GST/HST invoicing, PIPEDA data handling, and CAD rate benchmarks.",
    steps: [
      { name: "Test CASL compliance knowledge in PHP/Laravel applications", text: "Ask how they implement CASL consent management in a PHP/Laravel application. A developer with Canadian production experience describes: a ConsentRecord model with email, consent_type, consent_at, source_url, and ip_address; queue-based unsubscribe processing within CASL's 10-business-day requirement; and permanent consent evidence retention (never delete ConsentRecord after unsubscribing). Developers who give generic GDPR answers instead of CASL-specific architecture do not have Canadian production experience." },
      { name: "Confirm Canadian GST/HST configuration in PHP billing modules", text: "Ask how they configure Canadian GST/HST in a PHP billing module. The correct answer describes: Stripe Tax Canada with province nexuses (Ontario HST 13%, BC GST+PST 12%, Alberta GST 5%, Quebec GST+QST 14.975%); Canadian Business Number displayed on generated invoices; and net/gross/tax split on invoice line items for CRA input tax credit claims. Flat-rate GST configuration is a Canadian tax compliance failure." },
      { name: "For Quebec: confirm Law 25 Privacy Impact Assessment experience", text: "Quebec's Law 25 requires Privacy Impact Assessments for PHP systems with automated decision-making, breach notification within 72 hours to the Commission d'accès à l'information (CAI), and data localization assessment for cross-border transfers. Ask whether they have delivered PHP applications for Quebec businesses and whether they understand Law 25 obligations beyond PIPEDA. AWS ca-central-1 (Montreal) is the recommended data residency option for Quebec-customer PHP applications." },
      { name: "Request a code sample or GitHub repository", text: "Review their PHP/Laravel code for: service class architecture (business logic separated from controllers), Form Request validation classes, Eloquent scope methods for reusable queries, PHPUnit feature tests with factories, and PSR-12 coding standards. Canadian production Laravel code should implement CASL consent management — look for a ConsentRecord model or equivalent in the sample code." },
      { name: "Confirm Canada Post or Purolator API integration for ecommerce", text: "For any Canadian PHP ecommerce application: ask about Canada Post API integration (real-time rates, tracking, manifest generation) or Purolator integration for commercial shipping clients. Canada Post API requires a separate developer account and periodic re-integration when Canada Post releases major API versions — confirm the developer has managed this update cycle." },
      { name: "Agree CAD milestone payment with written scope", text: "Request a written scope covering PHP application architecture, CASL compliance plan, Canadian GST/HST configuration approach, PIPEDA data handling architecture, timeline, and CAD milestone payments. Canadian PHP projects use fixed-price milestone contracts — 30% deposit, milestone payments, final on delivery. For Quebec projects: include Law 25 PIA and data residency assessment as explicit scope items." }
    ]
  }
};
