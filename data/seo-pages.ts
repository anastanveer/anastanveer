export type SeoServicePage = {
  slug: string;
  navLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  image: string;
  imageAlt: string;
  intro: string[];
  bestFor: string[];
  problems: string[];
  features: string[];
  delivery: string[];
  faqs: Array<{ question: string; answer: string }>;
  related: Array<{ label: string; href: string }>;
};

const coreRelated = [
  { label: "View portfolio work", href: "/portfolio" },
  { label: "Read case studies", href: "/case-studies" },
  { label: "Discuss a project", href: "/contact" },
  { label: "Check pricing direction", href: "/pricing" }
];

export const seoServicePages: SeoServicePage[] = [
  {
    slug: "laravel-developer-dubai",
    navLabel: "Laravel Developer Dubai",
    title: "Laravel Developer Dubai for Custom Business Systems",
    metaTitle: "Laravel Developer Dubai | Custom Web Systems",
    metaDescription: "Hire a Laravel Developer in Dubai for secure web apps, dashboards, APIs, ERP workflows, ecommerce systems and high performance business platforms.",
    keywords: ["Laravel Developer Dubai", "Laravel Web Application Development Dubai", "Custom Web Solutions Dubai"],
    image: "/images/services-architecture-760.webp",
    imageAlt: "Laravel developer Dubai business web application architecture",
    intro: [
      "Businesses usually reach Laravel when a normal website, plugin setup, or spreadsheet workflow is no longer enough. A Laravel platform can connect customers, staff, reports, payments, approvals, inventory, and admin controls in one maintainable system. As a Dubai-based full-stack developer, Anas Tanveer focuses on Laravel builds that solve operational problems instead of adding more complexity.",
      "The work starts with the business process: who uses the system, what data matters, which steps are manual, where errors happen, and what the company needs to see every day. From there, the solution can become a client portal, internal dashboard, booking platform, SaaS MVP, CRM, ERP module, ecommerce workflow, or API-driven web application.",
      "This service is built for founders, agencies, operations teams, ecommerce businesses, service companies, and recruiters who need a Laravel Developer Dubai profile with practical PHP, MySQL, REST API, dashboard, performance, and SEO-friendly development experience."
    ],
    bestFor: ["Custom dashboards and portals", "ERP or CRM modules", "Laravel APIs and integrations", "SaaS MVP foundations", "Business workflow automation"],
    problems: [
      "Manual work is slowing the team down and causing repeated mistakes.",
      "Existing plugins or tools cannot handle custom permissions, reports, or data flow.",
      "The current platform is hard to maintain, slow, or not structured for growth.",
      "Business owners need a system that makes operations easier to track and manage."
    ],
    features: ["Role-based admin panels", "Secure authentication and permissions", "REST API architecture", "Report filters and exports", "Payment and CRM integrations", "SEO-ready public pages"],
    delivery: [
      "A clean Laravel architecture is planned around real workflows, not random features. Database tables, models, controllers, validation, jobs, notifications, and frontend states are structured so the system remains easier to improve after launch.",
      "The result is a high performance web application with stronger data control, faster internal workflows, cleaner reporting, and a more professional experience for users, clients, and management teams."
    ],
    faqs: [
      { question: "Can Laravel be used for dashboards and ERP systems?", answer: "Yes. Laravel is a strong choice for dashboards, ERP modules, CRM workflows, portals, APIs, reporting systems, and secure admin panels." },
      { question: "Do you work with existing Laravel projects?", answer: "Yes. Existing Laravel codebases can be reviewed for performance, structure, bugs, integrations, UI issues, and maintainability improvements." },
      { question: "Is Laravel suitable for UAE business websites?", answer: "Laravel is suitable when the business needs custom logic, secure workflows, scalability, API integrations, or a platform beyond a standard CMS." }
    ],
    related: [
      { label: "Dashboard development in Dubai", href: "/dashboard-development-dubai" },
      { label: "API integration services", href: "/api-integration-services" },
      { label: "ERP development UAE", href: "/erp-development-uae" },
      ...coreRelated
    ]
  },
  {
    slug: "php-developer-dubai",
    navLabel: "PHP Developer Dubai",
    title: "PHP Developer Dubai for Reliable Web Platforms",
    metaTitle: "PHP Developer Dubai | Laravel, APIs, Web Systems",
    metaDescription: "PHP Developer in Dubai for Laravel systems, WordPress fixes, backend logic, APIs, dashboards, speed optimization and secure business websites.",
    keywords: ["PHP Developer Dubai", "PHP Developer UAE", "Full Stack Developer UAE"],
    image: "/images/services-architecture-760.webp",
    imageAlt: "PHP developer Dubai backend web systems visual",
    intro: [
      "PHP still powers serious business websites, Laravel platforms, WordPress systems, ecommerce stores, booking tools, dashboards, and custom integrations. The difference is not the language alone. The difference is whether the code is structured, secure, maintainable, and connected to the actual business problem.",
      "Anas Tanveer works as a PHP Developer Dubai profile for companies that need practical backend support: improving old code, fixing slow pages, building Laravel modules, customizing WordPress logic, connecting APIs, cleaning database queries, and turning unclear workflows into reliable digital systems.",
      "This service is useful when a website works on the surface but the backend is difficult to update, reports are unreliable, forms break, integrations fail, or the business has grown beyond a basic template."
    ],
    bestFor: ["Laravel and custom PHP systems", "WordPress backend fixes", "API and webhook work", "Database optimization", "Business logic cleanup"],
    problems: [
      "Old PHP code is fragile, undocumented, or difficult for the team to maintain.",
      "Forms, emails, payments, and third-party integrations fail without clear debugging.",
      "Database queries or plugin overload make the website slow under real traffic.",
      "The business needs custom backend logic that off-the-shelf tools cannot handle."
    ],
    features: ["PHP backend development", "Laravel module work", "WordPress custom logic", "Secure form handling", "MySQL query improvements", "API and webhook integrations"],
    delivery: [
      "The process begins with understanding the current issue, business impact, and technical risk. Code is then improved in a controlled way so existing pages, SEO, forms, and customer journeys are protected.",
      "The business result is a cleaner backend, fewer recurring bugs, faster workflows, and a stronger technical base for future Laravel, WordPress, ecommerce, or dashboard development."
    ],
    faqs: [
      { question: "Can you improve existing PHP websites?", answer: "Yes. Existing PHP, Laravel, and WordPress websites can be reviewed for bugs, performance issues, security gaps, and maintainability problems." },
      { question: "Do you handle PHP API integrations?", answer: "Yes. REST APIs, webhooks, payment gateways, CRM links, data imports, and automation workflows can be planned and implemented." }
    ],
    related: [
      { label: "Laravel Developer Dubai", href: "/laravel-developer-dubai" },
      { label: "WordPress Developer Dubai", href: "/wordpress-developer-dubai" },
      { label: "Website speed optimization Dubai", href: "/website-speed-optimization-dubai" },
      ...coreRelated
    ]
  },
  {
    slug: "wordpress-developer-dubai",
    navLabel: "WordPress Developer Dubai",
    title: "WordPress Developer Dubai for SEO-Ready Business Websites",
    metaTitle: "WordPress Developer Dubai | SEO Business Websites",
    metaDescription: "WordPress Developer Dubai for fast business websites, SEO structure, speed fixes, custom sections, forms, landing pages and conversion-focused design.",
    keywords: ["WordPress Developer Dubai", "WordPress SEO Developer", "SEO Friendly Website Development Dubai"],
    image: "/images/projects-suite-760.webp",
    imageAlt: "WordPress developer Dubai SEO business website preview",
    intro: [
      "A WordPress website should do more than look acceptable. For a business, it needs to explain the offer clearly, load fast on mobile, guide visitors toward contact, support local SEO, and remain easy to update without breaking the layout.",
      "Anas Tanveer provides WordPress Developer Dubai support for companies, agencies, local services, ecommerce teams, and personal brands that need a sharper website foundation. The focus is practical: page structure, custom sections, forms, schema, Core Web Vitals, clean responsive UI, and conversion-focused content flow.",
      "This is not only theme editing. It includes identifying why visitors are not converting, why Google may not understand the page, why the website feels slow, and how the WordPress build can become a stronger sales and trust asset."
    ],
    bestFor: ["Business websites", "Service landing pages", "Local SEO websites", "WordPress speed fixes", "Agency support work"],
    problems: [
      "The website looks generic and does not create enough trust in the first few seconds.",
      "Pages are slow because of heavy themes, plugins, unoptimized images, or weak hosting setup.",
      "Service pages do not target clear keywords, locations, headings, or search intent.",
      "Forms, CTAs, mobile layouts, and content sections are not built around lead generation."
    ],
    features: ["Custom WordPress sections", "SEO metadata and schema", "Fast responsive layouts", "Contact and lead forms", "Landing page improvements", "Plugin and performance cleanup"],
    delivery: [
      "The website is improved around visitor intent: what the client needs, what proof they need before contacting, and what Google needs to understand the service. Technical SEO, UI, copy flow, and speed are handled together.",
      "The result is a WordPress business website that feels more credible, loads faster, supports search visibility, and gives visitors a clearer path to request a quote or start a conversation."
    ],
    faqs: [
      { question: "Can WordPress still rank well in Google?", answer: "Yes. WordPress can rank well when technical SEO, content structure, speed, schema, internal links, and mobile experience are handled properly." },
      { question: "Do you build WordPress landing pages?", answer: "Yes. Landing pages can be built for local services, paid ads, SEO campaigns, lead generation, and business credibility." }
    ],
    related: [
      { label: "SEO-friendly website development", href: "/seo-friendly-website-development" },
      { label: "Website speed optimization Dubai", href: "/website-speed-optimization-dubai" },
      { label: "Freelance web developer Dubai", href: "/freelance-web-developer-dubai" },
      ...coreRelated
    ]
  },
  {
    slug: "shopify-developer-dubai",
    navLabel: "Shopify Developer Dubai",
    title: "Shopify Developer Dubai for Ecommerce Conversion",
    metaTitle: "Shopify Developer Dubai | Store Customization",
    metaDescription: "Shopify Developer Dubai for product page UX, theme customization, size selectors, metafields, speed, checkout confidence and ecommerce conversion improvements.",
    keywords: ["Shopify Developer Dubai", "Shopify Customization Expert", "Ecommerce Optimization"],
    image: "/images/projects-suite-760.webp",
    imageAlt: "Shopify developer Dubai ecommerce customization visual",
    intro: [
      "Shopify stores lose sales when customers cannot understand products quickly, choose variants confidently, trust the store, or move through the mobile buying journey without friction. Small UX and logic issues can create real revenue problems.",
      "Anas Tanveer works on Shopify customization for stores that need better product pages, size mapping, metafields, custom Liquid sections, mobile layout cleanup, conversion blocks, speed improvements, and reliable theme logic without damaging the store.",
      "This service is built for ecommerce owners, agencies, product brands, and teams that need a Shopify Developer Dubai profile with practical frontend, Liquid, JavaScript, UX, and performance experience."
    ],
    bestFor: ["Product page improvements", "Size selector systems", "Metafield-based content", "Theme customization", "Conversion-focused ecommerce UX"],
    problems: [
      "Customers hesitate because variants, size information, product benefits, or delivery details are unclear.",
      "The theme looks polished but does not support the real buying questions customers ask.",
      "Apps add cost and slow the store when a lean custom section would work better.",
      "Mobile users struggle with product layout, sticky buttons, trust signals, or checkout flow."
    ],
    features: ["Custom Liquid sections", "Metafield workflows", "Variant and size logic", "Product trust blocks", "Mobile UX cleanup", "Theme speed improvements"],
    delivery: [
      "The work focuses on the buying decision. Product content, UI states, selectors, labels, trust details, and page speed are adjusted so customers can understand, compare, choose, and move forward with less doubt.",
      "The impact is a cleaner ecommerce experience, fewer support questions, stronger buying confidence, and a more maintainable Shopify theme that can support future campaigns."
    ],
    faqs: [
      { question: "Can Shopify be customized without too many apps?", answer: "Yes. Many store improvements can be handled through Liquid sections, metafields, JavaScript, and theme logic without adding unnecessary apps." },
      { question: "Do you improve Shopify product pages?", answer: "Yes. Product pages can be improved for variant selection, size guidance, trust signals, mobile UX, speed, and conversion clarity." }
    ],
    related: [
      { label: "Ecommerce website development Dubai", href: "/ecommerce-website-development-dubai" },
      { label: "Website speed optimization Dubai", href: "/website-speed-optimization-dubai" },
      { label: "API integration services", href: "/api-integration-services" },
      ...coreRelated
    ]
  },
  {
    slug: "web-developer-uae",
    navLabel: "Web Developer UAE",
    title: "Web Developer UAE for Business Websites and Systems",
    metaTitle: "Web Developer UAE | Laravel, WordPress, Shopify",
    metaDescription: "Web Developer UAE for Laravel systems, WordPress websites, Shopify stores, dashboards, ERP workflows, APIs, SEO and speed optimization.",
    keywords: ["Web Developer UAE", "Full Stack Developer UAE", "Custom Website Development Dubai"],
    image: "/images/anas-premium-hero-1100.webp",
    imageAlt: "Web developer UAE portfolio and business systems visual",
    intro: [
      "Businesses in the UAE often need more than a visual website. They need digital systems that explain services, collect leads, connect workflows, improve speed, support SEO, and make daily operations easier to manage.",
      "Anas Tanveer works as a Web Developer UAE profile across Laravel, PHP, WordPress, Shopify, React, Next.js, MySQL, REST APIs, dashboards, ecommerce, ERP workflows, and SEO-friendly development. The goal is to build practical web solutions that help companies reduce confusion and improve business output.",
      "This page is useful for agencies, recruiters, founders, local service companies, ecommerce owners, and businesses looking for a developer who can understand technical requirements and business outcomes together."
    ],
    bestFor: ["Business websites", "Portfolio and company sites", "Custom web applications", "Ecommerce systems", "Dashboard and API work"],
    problems: [
      "The website does not explain the business clearly or generate enough qualified inquiries.",
      "The company uses disconnected tools that make staff work harder than necessary.",
      "Pages are slow, poorly structured, or missing SEO foundations before marketing begins.",
      "The business needs a developer who can handle frontend, backend, CMS, and integrations."
    ],
    features: ["Laravel and PHP development", "WordPress business sites", "Shopify ecommerce work", "React and Next.js interfaces", "SEO and PageSpeed foundations", "API and dashboard development"],
    delivery: [
      "The approach connects user experience, technical structure, performance, content clarity, and maintainability. Each project is planned around the person using it and the business result expected from it.",
      "The result is a cleaner web presence, stronger systems, better conversion paths, and a foundation that can support UAE, UK, Canada, and international client requirements."
    ],
    faqs: [
      { question: "Do you work with UAE and international clients?", answer: "Yes. The portfolio supports UAE, UK, Canada, agency, startup, ecommerce, service business, and remote project requirements." },
      { question: "Can one developer handle both frontend and backend?", answer: "Yes, for many business websites, Laravel systems, WordPress sites, Shopify customizations, dashboards, APIs, and performance improvements." }
    ],
    related: [
      { label: "Freelance web developer Dubai", href: "/freelance-web-developer-dubai" },
      { label: "Laravel Developer Dubai", href: "/laravel-developer-dubai" },
      { label: "WordPress Developer Dubai", href: "/wordpress-developer-dubai" },
      ...coreRelated
    ]
  },
  {
    slug: "freelance-web-developer-dubai",
    navLabel: "Freelance Web Developer Dubai",
    title: "Freelance Web Developer Dubai for Serious Projects",
    metaTitle: "Freelance Web Developer Dubai | Business Systems",
    metaDescription: "Freelance Web Developer Dubai for Laravel, WordPress, Shopify, dashboards, ecommerce, APIs, SEO-ready websites and business problem solving.",
    keywords: ["Freelance Web Developer Dubai", "Dubai Web Developer", "Full Stack Developer UAE"],
    image: "/images/anas-premium-hero-1100.webp",
    imageAlt: "Freelance web developer Dubai personal portfolio visual",
    intro: [
      "Hiring a freelance developer should not feel risky. A business needs someone who can understand the problem, communicate clearly, protect the existing website, deliver usable work, and avoid unnecessary technical complexity.",
      "Anas Tanveer offers freelance web development in Dubai for clients, recruiters, agencies, founders, and business owners who need Laravel, WordPress, Shopify, dashboards, ecommerce, APIs, ERP workflows, speed optimization, and SEO-ready website support.",
      "The positioning is practical: not only writing code, but identifying what is broken, what is slowing conversion, what workflow needs automation, and how the digital system can become more useful to the business."
    ],
    bestFor: ["Project-based freelance work", "Agency white-label support", "Recruiter evaluation", "Remote collaboration", "Direct client fixes and builds"],
    problems: [
      "The business needs a reliable developer but does not want a generic low-quality template approach.",
      "Agencies need extra development capacity without losing quality or communication control.",
      "Recruiters need a portfolio that shows real Laravel, WordPress, Shopify, and dashboard capability.",
      "Existing websites need cleanup, speed, SEO, forms, integrations, or better conversion paths."
    ],
    features: ["Project scoping support", "Business-focused development", "Static and CMS websites", "Custom Laravel systems", "Shopify and ecommerce support", "SEO and speed readiness"],
    delivery: [
      "The project starts with a clear brief, platform review, priority list, and expected outcome. Work is delivered in practical stages so feedback, testing, and launch planning stay controlled.",
      "The result is a smoother client experience, cleaner technical delivery, and a stronger chance that the website or system actually helps the business after launch."
    ],
    faqs: [
      { question: "Are you available for freelance projects in Dubai?", answer: "Yes. Anas Tanveer is available for freelance, remote, agency, recruiter, and business web development projects." },
      { question: "Can you work on fixed scope projects?", answer: "Yes. Fixed scope work is possible when features, pages, integrations, content, and launch requirements are clearly defined." }
    ],
    related: [
      { label: "Web Developer UAE", href: "/web-developer-uae" },
      { label: "Pricing", href: "/pricing" },
      { label: "Resume", href: "/resume" },
      ...coreRelated
    ]
  },
  {
    slug: "dashboard-development-dubai",
    navLabel: "Dashboard Development Dubai",
    title: "Dashboard Development Dubai for Business Visibility",
    metaTitle: "Dashboard Development Dubai | Admin Panels",
    metaDescription: "Dashboard Development Dubai for admin panels, analytics, reports, role permissions, finance views, operations tracking and Laravel business systems.",
    keywords: ["Dashboard Development Dubai", "Business Dashboard Developer", "Laravel Dashboard Development"],
    image: "/images/projects-suite-760.webp",
    imageAlt: "Dashboard development Dubai analytics and admin panel visual",
    intro: [
      "A dashboard is only useful when it helps people make decisions faster. Many businesses have data, but it is scattered across spreadsheets, emails, payment tools, CRMs, ecommerce stores, and manual reports.",
      "Anas Tanveer builds dashboard and admin panel systems for Dubai and UAE businesses using Laravel, PHP, MySQL, React, charts, filters, exports, and role-based workflows. The goal is to make operational data easier to understand and act on.",
      "This service is useful for finance dashboards, ecommerce reporting, staff portals, ERP modules, CRM views, order tracking, inventory dashboards, performance reports, and management panels."
    ],
    bestFor: ["Finance dashboards", "Admin panels", "Operations reporting", "Inventory and order tracking", "CRM and ERP views"],
    problems: [
      "Managers cannot see accurate numbers quickly enough to make decisions.",
      "Reports are created manually and consume staff time every week.",
      "Different roles need different access levels, but the current system does not support permissions.",
      "The dashboard has too much visual noise and not enough actionable information."
    ],
    features: ["KPI cards and charts", "Advanced filters", "Role permissions", "Exportable reports", "Data tables and search", "API-connected metrics"],
    delivery: [
      "The dashboard is planned around decisions, not decoration. Metrics, filters, roles, and report views are selected based on what the team actually needs to monitor.",
      "The impact is better visibility, faster reporting, fewer manual mistakes, and a more professional backend experience for management, staff, and clients."
    ],
    faqs: [
      { question: "Can dashboards connect to existing systems?", answer: "Yes. Dashboards can connect to APIs, databases, ecommerce platforms, CRMs, payment systems, and custom Laravel modules." },
      { question: "Do you build role-based admin panels?", answer: "Yes. Role permissions, staff access levels, admin controls, and secure workflows can be included." }
    ],
    related: [
      { label: "Laravel Developer Dubai", href: "/laravel-developer-dubai" },
      { label: "ERP development UAE", href: "/erp-development-uae" },
      { label: "API integration services", href: "/api-integration-services" },
      ...coreRelated
    ]
  },
  {
    slug: "erp-development-uae",
    navLabel: "ERP Development UAE",
    title: "ERP Development UAE for Practical Business Operations",
    metaTitle: "ERP Development UAE | Laravel Business Systems",
    metaDescription: "ERP Development UAE for Laravel modules, inventory, orders, invoices, reports, staff workflows, CRM data and business automation systems.",
    keywords: ["ERP Developer UAE", "ERP System Development", "Business Automation Developer Dubai"],
    image: "/images/Portfolio/ERP/1.avif",
    imageAlt: "ERP development UAE operational dashboard visual",
    intro: [
      "ERP development becomes important when daily operations are too complex for spreadsheets, WhatsApp messages, paper notes, and disconnected tools. A practical ERP system should help teams manage records, approvals, stock, customers, orders, invoices, staff actions, and reports in one controlled workflow.",
      "Anas Tanveer develops ERP and CRM-style modules for UAE businesses using Laravel, PHP, MySQL, role permissions, reporting, PDF generation, API integrations, and admin dashboards. The goal is to reduce manual tracking and give business owners a clearer operational view.",
      "This service is useful for trading, distribution, oil and gas, ecommerce, service businesses, agencies, local companies, and operations teams that need custom workflows rather than generic software."
    ],
    bestFor: ["Inventory workflows", "Customer and order records", "Staff roles and approvals", "Invoices and reports", "Custom business automation"],
    problems: [
      "Business records are scattered across Excel files, staff chats, emails, and manual notes.",
      "Managers cannot quickly track orders, invoices, customers, inventory, or staff actions.",
      "Off-the-shelf software does not match the business workflow or requires too many workarounds.",
      "Reports are late, incomplete, or dependent on one person doing manual updates."
    ],
    features: ["Inventory and order modules", "Customer records", "Role-based workflows", "Invoice and PDF reports", "Approval flows", "Management dashboards"],
    delivery: [
      "The ERP structure is designed from the workflow outward. Each module is mapped to the people, records, statuses, reports, and approvals the business needs every day.",
      "The result is a more controlled operation, better reporting, fewer manual errors, faster staff workflows, and a system that can grow as the company adds new requirements."
    ],
    faqs: [
      { question: "Can an ERP be built in phases?", answer: "Yes. ERP systems should usually be built in phases, starting with the highest-impact workflows such as records, orders, inventory, reports, or approvals." },
      { question: "Is Laravel suitable for ERP development?", answer: "Yes. Laravel is a strong fit for ERP modules because it supports secure authentication, database structure, queues, roles, reports, and API integrations." }
    ],
    related: [
      { label: "Dashboard development Dubai", href: "/dashboard-development-dubai" },
      { label: "Laravel Developer Dubai", href: "/laravel-developer-dubai" },
      { label: "API integration services", href: "/api-integration-services" },
      ...coreRelated
    ]
  },
  {
    slug: "ecommerce-website-development-dubai",
    navLabel: "Ecommerce Website Development Dubai",
    title: "Ecommerce Website Development Dubai for Better Buying Journeys",
    metaTitle: "Ecommerce Website Development Dubai | Shopify & Custom",
    metaDescription: "Ecommerce Website Development Dubai for Shopify stores, custom Laravel ecommerce, product UX, checkout confidence, speed, SEO and conversion optimization.",
    keywords: ["Ecommerce Website Developer Dubai", "Ecommerce Optimization", "Shopify Developer Dubai"],
    image: "/images/projects-suite-760.webp",
    imageAlt: "Ecommerce website development Dubai product and dashboard visual",
    intro: [
      "An ecommerce website has to answer customer doubts quickly. Product details, pricing, size choices, delivery information, trust signals, mobile layout, page speed, and checkout flow all affect whether a visitor buys or leaves.",
      "Anas Tanveer supports ecommerce website development in Dubai across Shopify, WordPress/WooCommerce, Laravel ecommerce systems, product UX, SEO foundations, Core Web Vitals, analytics-ready structure, and API integrations.",
      "This service is useful for brands, product stores, service sellers, agencies, and businesses that need a store experience built around conversion, maintainability, and search visibility."
    ],
    bestFor: ["Shopify stores", "WooCommerce websites", "Custom Laravel ecommerce", "Product page UX", "Conversion and speed improvements"],
    problems: [
      "Customers do not understand product value, variants, size guidance, or delivery terms quickly enough.",
      "The store looks attractive but feels slow, confusing, or unreliable on mobile.",
      "The business needs custom product logic, inventory flow, reports, or API integrations.",
      "SEO pages, product metadata, schema, and internal links are weak before marketing starts."
    ],
    features: ["Product page structure", "Cart and checkout UX", "Shopify customization", "WooCommerce support", "Custom ecommerce logic", "SEO and speed foundations"],
    delivery: [
      "The ecommerce build is planned around the buying journey: discovery, product understanding, trust, selection, cart, checkout, and post-purchase workflow.",
      "The result is a store that feels easier to use, supports organic visibility, improves buying confidence, and gives the business a stronger platform for campaigns and future growth."
    ],
    faqs: [
      { question: "Should ecommerce use Shopify or Laravel?", answer: "Shopify is often best for faster store launches and product selling. Laravel is better when the business needs custom workflows, dashboards, or complex backend logic." },
      { question: "Can you improve an existing ecommerce site?", answer: "Yes. Existing ecommerce websites can be improved for speed, product UX, SEO, theme logic, mobile layout, and conversion clarity." }
    ],
    related: [
      { label: "Shopify Developer Dubai", href: "/shopify-developer-dubai" },
      { label: "Website speed optimization Dubai", href: "/website-speed-optimization-dubai" },
      { label: "SEO-friendly website development", href: "/seo-friendly-website-development" },
      ...coreRelated
    ]
  },
  {
    slug: "api-integration-services",
    navLabel: "API Integration Services",
    title: "API Integration Services for Connected Business Workflows",
    metaTitle: "API Integration Services | Laravel, CRM, Payments",
    metaDescription: "API integration services for Laravel, WordPress, Shopify, CRMs, payment gateways, webhooks, dashboards, automation and third-party business tools.",
    keywords: ["API Integration Services", "API Integration Developer Dubai", "Custom Web Solutions Dubai"],
    image: "/images/services-architecture-760.webp",
    imageAlt: "API integration services connected business systems visual",
    intro: [
      "APIs become valuable when they remove duplicate work. If staff are copying customer data, checking payments manually, exporting reports, or moving records between tools, the business is losing time and accuracy.",
      "Anas Tanveer provides API integration services for Laravel, WordPress, Shopify, dashboards, CRMs, payment gateways, maps, email tools, webhooks, reporting systems, and custom automation workflows.",
      "This service is useful for businesses that want their website, dashboard, ecommerce store, and internal tools to share data safely and reliably."
    ],
    bestFor: ["Payment integrations", "CRM connections", "Shopify and ecommerce APIs", "Dashboard data feeds", "Webhook automation"],
    problems: [
      "Teams manually copy data between systems, creating delays and mistakes.",
      "Payment, CRM, email, map, or reporting tools are not connected to the website.",
      "API failures are not logged clearly, making problems hard to debug.",
      "The business needs secure data exchange without exposing sensitive information."
    ],
    features: ["REST API development", "Webhook handling", "OAuth flows", "Payment gateway integrations", "CRM and email tool connections", "Data import and export workflows"],
    delivery: [
      "The integration is planned around data accuracy, permissions, error handling, and the business process. Endpoints, payloads, retries, logs, and admin controls are structured for maintainability.",
      "The result is a connected workflow with less manual effort, cleaner data, faster reporting, and fewer operational gaps between the tools the business already uses."
    ],
    faqs: [
      { question: "Can APIs connect Shopify, Laravel, and CRMs?", answer: "Yes. APIs can connect ecommerce stores, Laravel dashboards, CRMs, payment gateways, email platforms, maps, and reporting tools." },
      { question: "Do API integrations work on static websites?", answer: "Static websites can use external form services and third-party scripts, but secure custom API processing usually needs a backend or external service." }
    ],
    related: [
      { label: "Laravel Developer Dubai", href: "/laravel-developer-dubai" },
      { label: "Dashboard development Dubai", href: "/dashboard-development-dubai" },
      { label: "ERP development UAE", href: "/erp-development-uae" },
      ...coreRelated
    ]
  },
  {
    slug: "website-speed-optimization-dubai",
    navLabel: "Website Speed Optimization Dubai",
    title: "Website Speed Optimization Dubai for Core Web Vitals",
    metaTitle: "Website Speed Optimization Dubai | PageSpeed",
    metaDescription: "Website speed optimization Dubai for Core Web Vitals, image compression, caching, JavaScript cleanup, WordPress performance and faster business websites.",
    keywords: ["Website Speed Optimization Dubai", "Core Web Vitals Optimization UAE", "PageSpeed Developer Dubai"],
    image: "/images/services-architecture-760.webp",
    imageAlt: "Website speed optimization Dubai Core Web Vitals visual",
    intro: [
      "Slow websites quietly damage trust, SEO, paid traffic, and conversion. Visitors may leave before the offer is understood, and search engines may struggle to reward a page that feels heavy or unstable on mobile.",
      "Anas Tanveer provides website speed optimization in Dubai for WordPress, Shopify, Laravel, Next.js, static websites, landing pages, ecommerce stores, and business websites that need stronger Core Web Vitals.",
      "The work focuses on real improvements: image sizing, WebP/AVIF, lazy loading, caching, script cleanup, font loading, CSS reduction, server configuration, plugin review, and better rendering behavior."
    ],
    bestFor: ["WordPress speed fixes", "Shopify theme performance", "Next.js static sites", "Image and script optimization", "Core Web Vitals improvements"],
    problems: [
      "The website feels slow on mobile even if it looks acceptable on desktop.",
      "Large images, heavy scripts, plugins, or poor caching increase load time.",
      "Lighthouse reports show render blocking, unused JavaScript, layout shift, or oversized images.",
      "SEO campaigns are limited because the website foundation is not fast enough."
    ],
    features: ["Image compression and responsive sizing", "Cache and header setup", "Script and CSS cleanup", "Font optimization", "Lazy loading", "Core Web Vitals review"],
    delivery: [
      "The optimization starts with measurement, then fixes are applied carefully so design, tracking, forms, animations, and SEO remain intact. The goal is not to remove useful features, but to make the existing experience faster and cleaner.",
      "The result is a faster website, better visitor experience, stronger search foundation, lower bounce risk, and a more professional digital presence."
    ],
    faqs: [
      { question: "Can speed be improved without redesigning?", answer: "Yes. Many speed improvements come from image sizing, caching, script cleanup, font loading, and hosting configuration without changing the UI." },
      { question: "Do speed fixes help SEO?", answer: "Speed is one part of SEO. It supports better user experience, Core Web Vitals, crawl efficiency, conversion, and paid traffic performance." }
    ],
    related: [
      { label: "SEO-friendly website development", href: "/seo-friendly-website-development" },
      { label: "WordPress Developer Dubai", href: "/wordpress-developer-dubai" },
      { label: "Shopify Developer Dubai", href: "/shopify-developer-dubai" },
      ...coreRelated
    ]
  },
  {
    slug: "seo-friendly-website-development",
    navLabel: "SEO-Friendly Website Development",
    title: "SEO-Friendly Website Development for Search-Ready Businesses",
    metaTitle: "SEO-Friendly Website Development Dubai",
    metaDescription: "SEO-friendly website development in Dubai with semantic HTML, metadata, schema, sitemap, internal linking, Core Web Vitals and conversion-ready pages.",
    keywords: ["SEO Friendly Website Development Dubai", "Technical SEO Web Developer Dubai", "Custom Website Development Dubai"],
    image: "/images/services-architecture-760.webp",
    imageAlt: "SEO-friendly website development semantic structure visual",
    intro: [
      "A website should not wait for marketing before it becomes search-ready. The technical foundation, page structure, headings, internal links, metadata, schema, speed, image alt text, and service content should be planned before launch.",
      "Anas Tanveer builds SEO-friendly websites for Dubai and UAE businesses using semantic HTML, Next.js, WordPress, Laravel, Shopify, structured metadata, JSON-LD schema, sitemap, robots, canonical URLs, and Core Web Vitals awareness.",
      "This service is useful for businesses that want their website to be understandable for users and search engines from day one, without turning the design into keyword-stuffed content."
    ],
    bestFor: ["Service business websites", "Local SEO pages", "Portfolio and company sites", "Landing pages", "Technical SEO foundations"],
    problems: [
      "Pages look finished but have weak headings, duplicate titles, missing schema, or unclear search intent.",
      "The website has no clean internal linking path between services, portfolio, blog, and contact.",
      "Images, scripts, mobile UI, or layout shifts weaken the page experience.",
      "Google cannot clearly understand the entity, services, location, and topical relevance."
    ],
    features: ["Semantic heading structure", "Unique titles and descriptions", "JSON-LD schema", "Sitemap and robots setup", "Internal linking plan", "Fast responsive pages"],
    delivery: [
      "The website is structured around topics, entities, user intent, and conversion. Each important page has a clear role, helpful content, crawlable links, and metadata that matches what the page actually provides.",
      "The result is a cleaner search foundation, stronger topical authority, better crawlability, and a website that can support content, ads, local SEO, and lead generation more effectively."
    ],
    faqs: [
      { question: "What makes a website SEO-friendly?", answer: "An SEO-friendly website has clear structure, useful content, semantic headings, crawlable links, metadata, schema, fast loading, mobile usability, and clean indexable pages." },
      { question: "Can SEO be added after launch?", answer: "Yes, but it is stronger when SEO foundations are planned during development because page structure, speed, content, schema, and internal links work together." }
    ],
    related: [
      { label: "Website speed optimization Dubai", href: "/website-speed-optimization-dubai" },
      { label: "WordPress Developer Dubai", href: "/wordpress-developer-dubai" },
      { label: "Web Developer UAE", href: "/web-developer-uae" },
      ...coreRelated
    ]
  }
];

export function getSeoServicePage(slug: string) {
  return seoServicePages.find((page) => page.slug === slug);
}
