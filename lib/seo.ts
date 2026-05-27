import type { Metadata } from "next";
import { seoServicePages } from "@/data/seo-pages";
import { absoluteUrl, siteUrl } from "@/lib/utils";

const keywords = [
  // Dubai / UAE local market
  "Full Stack Developer Dubai",
  "Laravel Developer Dubai",
  "PHP Developer Dubai",
  "WordPress Developer Dubai",
  "Shopify Developer Dubai",
  "Web Developer UAE",
  "Freelance Web Developer Dubai",
  "Custom Website Development Dubai",
  "Ecommerce Website Developer Dubai",
  "Business Dashboard Developer Dubai",
  "ERP Developer UAE",
  "Website Speed Optimization Dubai",
  "SEO Friendly Website Development Dubai",
  "Laravel Web Application Developer Dubai",
  "Custom Dashboard Developer UAE",
  "Business Automation Developer Dubai",
  "Shopify Conversion Optimization Dubai",
  "WordPress SEO Developer Dubai",
  "SaaS Platform Developer UAE",
  "API Integration Developer Dubai",
  "Trading Platform Developer Dubai",
  "Core Web Vitals Optimization UAE",
  "Technical SEO Web Developer Dubai",
  // UK market keywords
  "Web Developer London",
  "Laravel Developer London",
  "WordPress Developer London",
  "Shopify Developer London",
  "Web Developer UK",
  "Laravel Developer UK",
  "WordPress Developer UK",
  "React Developer UK",
  "Next.js Developer UK",
  "Full Stack Developer London",
  "Full Stack Developer UK",
  "Freelance Web Developer London",
  "Web Development London",
  "Custom Web Development UK",
  "Ecommerce Developer UK",
  "Shopify Developer UK",
  "Web Developer Manchester",
  "Web Developer Birmingham",
  "Web Developer Leeds",
  "Web Developer Glasgow",
  "Web Developer Edinburgh",
  "Web Developer Bristol",
  "Laravel Developer Manchester",
  "Laravel Developer Birmingham",
  "WordPress Developer Manchester",
  "Shopify Developer Manchester",
  "Shopify Developer Birmingham",
  "PHP Developer UK",
  "PHP Developer London",
  "Web Developer Sheffield",
  // Canada market keywords
  "Web Developer Toronto",
  "Laravel Developer Toronto",
  "WordPress Developer Toronto",
  "WordPress Developer Canada",
  "Shopify Developer Canada",
  "Web Developer Canada",
  "Laravel Developer Canada",
  "Full Stack Developer Toronto",
  "Web Development Canada",
  "Freelance Web Developer Toronto",
  "Ecommerce Developer Canada",
  "Web Developer Vancouver",
  "Web Developer Calgary",
  "Web Developer Ottawa",
  "Web Developer Montreal",
  "Web Developer Edmonton",
  "Shopify Developer Toronto",
  "Shopify Developer Vancouver",
  "WordPress Developer Vancouver",
  "Laravel Developer Vancouver",
  "Full Stack Developer Canada",
  "Full Stack Developer Toronto",
  "React Developer Canada",
  "WordPress Developer Canada",
  "Next.js Developer Canada",
  "Next.js Developer Toronto",
  "Web Developer Calgary",
  "Web Developer Ottawa",
  "Web Developer Toronto Guide",
  "Web Developer Vancouver Guide",
  "Web Developer Leeds Guide",
  "Web Developer Glasgow Guide",
  "Web Developer Edinburgh Guide",
  "Web Developer Bristol Guide",
  "Web Developer Sheffield Guide",
  "Web Developer Australia",
  "Web Developer Sydney",
  "Web Developer Melbourne",
  "Web Developer Brisbane",
  "Web Developer Perth",
  "Web Developer Adelaide",
  "Laravel Developer Australia",
  "Shopify Developer Australia",
  "WordPress Developer Australia",
  "React Developer Australia",
  "Next.js Developer Australia",
  "Full Stack Developer Australia",
  "Freelance Web Developer Australia",
  "Laravel Developer Toronto",
  "Shopify Developer Toronto",
  // Global IT industry high-volume terms
  "Hire Full Stack Developer",
  "Hire Laravel Developer",
  "Remote Laravel Developer",
  "Freelance PHP Developer",
  "Hire Web Developer Online",
  "Custom Web Application Developer",
  "Business Web Solutions Developer",
  "Shopify Expert Developer",
  "WordPress Developer for Hire",
  "Laravel Application Development Services",
  "Full Stack Developer for Hire",
  "Ecommerce Developer for Hire",
  "Web Application Development Services",
  "Professional Full Stack Developer",
  "Remote Full Stack Developer",
  "Custom Dashboard Development Services",
  "PHP Laravel Developer",
  "Business Automation Web Developer",
  "API Integration Development Services",
  "ERP Development Services",
  "CRM Development Services",
  "SaaS Web Application Developer",
  "Web Performance Optimization Services",
  "Technical SEO Developer",
  "WordPress Custom Development Services"
];

const seoRoutes = seoServicePages.map((page) => ({
  path: `/${page.slug}`,
  name: page.navLabel,
  priority: 0.78,
  changeFrequency: "monthly" as const
}));

export const routes = [
  { path: "/", name: "Home", priority: 1, changeFrequency: "weekly" },
  { path: "/about", name: "About", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services", name: "Services", priority: 0.95, changeFrequency: "weekly" },
  { path: "/work", name: "Work", priority: 0.9, changeFrequency: "weekly" },
  { path: "/portfolio", name: "Portfolio", priority: 0.9, changeFrequency: "weekly" },
  { path: "/case-studies", name: "Case Studies", priority: 0.85, changeFrequency: "monthly" },
  { path: "/pricing", name: "Pricing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/resume", name: "Resume", priority: 0.9, changeFrequency: "monthly" },
  { path: "/blog", name: "Blog", priority: 0.75, changeFrequency: "weekly" },
  { path: "/contact", name: "Contact", priority: 0.9, changeFrequency: "monthly" },
  { path: "/testimonials", name: "Testimonials", priority: 0.85, changeFrequency: "monthly" },
  { path: "/ar", name: "مطور ويب دبي", priority: 0.85, changeFrequency: "monthly" },
  ...seoRoutes
] as const;

function getGeoMeta(path: string): { "geo.region": string; "geo.placename": string; ICBM: string } {
  const UK_CITY_MAP: Record<string, { region: string; place: string; icbm: string }> = {
    manchester: { region: "GB-ENG", place: "Manchester, England", icbm: "53.4808,-2.2426" },
    birmingham: { region: "GB-ENG", place: "Birmingham, England", icbm: "52.4862,-1.8904" },
    leeds: { region: "GB-ENG", place: "Leeds, England", icbm: "53.8008,-1.5491" },
    bristol: { region: "GB-ENG", place: "Bristol, England", icbm: "51.4545,-2.5879" },
    london: { region: "GB-ENG", place: "London, England", icbm: "51.5074,-0.1278" },
    glasgow: { region: "GB-SCT", place: "Glasgow, Scotland", icbm: "55.8642,-4.2518" },
    edinburgh: { region: "GB-SCT", place: "Edinburgh, Scotland", icbm: "55.9533,-3.1883" },
    sheffield: { region: "GB-ENG", place: "Sheffield, England", icbm: "53.3811,-1.4701" },
  };
  const CA_CITY_MAP: Record<string, { region: string; place: string; icbm: string }> = {
    toronto: { region: "CA-ON", place: "Toronto, Ontario", icbm: "43.6532,-79.3832" },
    vancouver: { region: "CA-BC", place: "Vancouver, British Columbia", icbm: "49.2827,-123.1207" },
    calgary: { region: "CA-AB", place: "Calgary, Alberta", icbm: "51.0447,-114.0719" },
    ottawa: { region: "CA-ON", place: "Ottawa, Ontario", icbm: "45.4215,-75.6972" },
    montreal: { region: "CA-QC", place: "Montreal, Quebec", icbm: "45.5017,-73.5673" },
    edmonton: { region: "CA-AB", place: "Edmonton, Alberta", icbm: "53.5461,-113.4938" },
  };
  const AU_CITY_MAP: Record<string, { region: string; place: string; icbm: string }> = {
    sydney: { region: "AU-NSW", place: "Sydney, New South Wales", icbm: "-33.8688,151.2093" },
    melbourne: { region: "AU-VIC", place: "Melbourne, Victoria", icbm: "-37.8136,144.9631" },
    brisbane: { region: "AU-QLD", place: "Brisbane, Queensland", icbm: "-27.4698,153.0251" },
    perth: { region: "AU-WA", place: "Perth, Western Australia", icbm: "-31.9505,115.8605" },
    adelaide: { region: "AU-SA", place: "Adelaide, South Australia", icbm: "-34.9285,138.6007" },
  };
  const slug = path.replace(/^\//, "");
  for (const [city, geo] of Object.entries(UK_CITY_MAP)) {
    if (slug.includes(city)) return { "geo.region": geo.region, "geo.placename": geo.place, ICBM: geo.icbm };
  }
  if (slug.includes("-uk") || slug.includes("laravel-developer-london") || slug.includes("react-developer-uk") || slug.includes("fullstack-developer-london") || slug.includes("wordpress-developer-uk")) {
    return { "geo.region": "GB", "geo.placename": "United Kingdom", ICBM: "51.5074,-0.1278" };
  }
  for (const [city, geo] of Object.entries(AU_CITY_MAP)) {
    if (slug.includes(city)) return { "geo.region": geo.region, "geo.placename": geo.place, ICBM: geo.icbm };
  }
  if (slug.includes("-australia")) {
    return { "geo.region": "AU", "geo.placename": "Australia", ICBM: "-33.8688,151.2093" };
  }
  for (const [city, geo] of Object.entries(CA_CITY_MAP)) {
    if (slug.includes(city)) return { "geo.region": geo.region, "geo.placename": geo.place, ICBM: geo.icbm };
  }
  if (slug.includes("-canada")) {
    return { "geo.region": "CA", "geo.placename": "Canada", ICBM: "43.6532,-79.3832" };
  }
  return { "geo.region": "AE-DU", "geo.placename": "Dubai", ICBM: "25.2048,55.2708" };
}

export function pageMetadata({
  title,
  description,
  path = "/",
  extraKeywords = [],
  image = "/images/anas-premium-hero.webp",
  type = "website",
  article
}: {
  title: string;
  description: string;
  path?: string;
  extraKeywords?: string[];
  image?: string;
  type?: "website" | "article";
  article?: { publishedTime?: string; modifiedTime?: string; authors?: string[] };
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    applicationName: "Anas Tanveer Portfolio",
    authors: [{ name: "Anas Tanveer", url: siteUrl }],
    icons: {
      icon: [
        { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
      shortcut: ["/favicon-32.png"]
    },
    creator: "Anas Tanveer",
    publisher: "ARS Developer Ltd",
    category: "Web Development",
    classification: "Full-Stack Web Developer Portfolio",
    referrer: "origin-when-cross-origin",
    keywords: [...keywords, ...extraKeywords],
    alternates: {
      canonical: url,
      languages: (() => {
        const geo = getGeoMeta(path);
        const isUK = geo["geo.region"].startsWith("GB");
        const isCA = geo["geo.region"].startsWith("CA");
        if (isUK) {
          return { "en-GB": url, "en-AE": absoluteUrl("/"), "en-US": url, "x-default": absoluteUrl("/") };
        }
        if (isCA) {
          return { "en-CA": url, "en-GB": absoluteUrl("/web-developer-uk"), "en-AE": absoluteUrl("/"), "x-default": absoluteUrl("/") };
        }
        return { "en-AE": url, "en-US": url, "en-GB": absoluteUrl("/web-developer-uk"), "en-CA": absoluteUrl("/web-developer-canada"), "ar-AE": absoluteUrl("/ar"), "x-default": url };
      })()
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Anas Tanveer",
      type,
      locale: (() => {
        const g = getGeoMeta(path);
        if (g["geo.region"].startsWith("GB")) return "en_GB";
        if (g["geo.region"].startsWith("CA")) return "en_CA";
        return "en_AE";
      })(),
      ...(type === "article" && article
        ? {
            publishedTime: article.publishedTime,
            modifiedTime: article.modifiedTime,
            authors: article.authors
          }
        : {}),
      images: [
        {
          url: imageUrl,
          width: 1400,
          height: 788,
          alt: "Anas Tanveer premium full-stack developer brand visual"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@anastanveer_dev",
      site: "@anastanveer_dev"
    },
    verification: {
      other: getGeoMeta(path)
    },
    other: {
      // Dublin Core metadata for academic / AI citation
      "dc.title": title,
      "dc.description": description,
      "dc.creator": "Anas Tanveer",
      "dc.publisher": "ARS Developer Ltd",
      "dc.language": "en",
      "dc.subject": "Web Development, Laravel, WordPress, Shopify, Dubai",
      "dc.rights": `Copyright ${new Date().getFullYear()} Anas Tanveer`,
      // Open Graph locale alternates for international reach
      "og:locale:alternate": ["en_GB", "en_CA", "en_AU", "ar_AE"],
      // Twitter rich card labels
      "twitter:label1": "Location",
      "twitter:data1": "Dubai, UAE",
      "twitter:label2": "Services",
      "twitter:data2": "Laravel · WordPress · Shopify · React"
    }
  };
}

export function jsonLdForPage(path: string, breadcrumbs: Array<{ name: string; url: string }> = []) {
  const pageUrl = absoluteUrl(path);
  const defaultBreadcrumbs = breadcrumbs.length
    ? breadcrumbs
    : [
        { name: "Home", url: absoluteUrl("/") },
        ...(path === "/" ? [] : [{ name: routes.find((route) => route.path === path)?.name ?? "Page", url: pageUrl }])
      ];

  return {
    "@context": "https://schema.org",
    "@graph": [
    {
      "@type": "Person",
      "@id": absoluteUrl("/#person"),
      name: "Anas Tanveer",
      givenName: "Anas",
      familyName: "Tanveer",
      alternateName: ["Anas Full Stack Developer", "Anas Laravel Developer", "Anas Web Developer Dubai"],
      jobTitle: [
        "Full-Stack Web Developer",
        "Laravel Developer",
        "PHP Developer",
        "WordPress Developer",
        "Shopify Developer",
        "Business Web Problem Solver",
        "Freelance Web Developer",
        "Custom Web Application Developer"
      ],
      description: "Dubai-based full-stack web developer with 7+ years of experience solving business web problems using Laravel, PHP, WordPress, Shopify, React, Next.js, dashboards, ERP, CRM, SaaS, and API integrations for UAE, UK, and Canadian clients.",
      url: siteUrl,
      image: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/anas-resume.webp"),
        width: 400,
        height: 400,
        caption: "Anas Tanveer – Full-Stack Developer Dubai"
      },
      email: "info@anastanveer.com",
      telephone: "+971542435418",
      nationality: "Pakistani",
      knowsLanguage: [
        { "@type": "Language", name: "English" },
        { "@type": "Language", name: "Urdu" }
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE"
      },
      worksFor: { "@id": "https://arsdeveloper.co.uk/#organization" },
      affiliation: [
        { "@id": "https://arsdeveloper.co.uk/#organization" },
        { "@id": "https://torontobytes.ca/#organization" }
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Full-Stack Web Development",
          description: "7+ years professional experience in full-stack web development with Laravel, PHP, React, MySQL, REST APIs and modern web frameworks."
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Laravel Application Development",
          description: "Expert-level Laravel development: custom platforms, APIs, dashboards, ERP, SaaS, and scalable backend architecture."
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Shopify Development & Conversion Optimisation"
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Technical SEO & Core Web Vitals Optimisation"
        }
      ],
      award: [
        "100+ Successful Web Development Projects Delivered",
        "4.9-star client rating across international projects",
        "Top Rated Freelancer — Fiverr Web Development"
      ],
      numberOfEmployees: { "@type": "QuantitativeValue", value: 1 },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: "+971542435418",
          email: "info@anastanveer.com",
          availableLanguage: ["English"],
          areaServed: ["AE", "GB", "CA"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "08:00",
            closes: "22:00"
          }
        }
      ],
      mainEntityOfPage: { "@id": absoluteUrl("/#webpage") },
      sameAs: [
        "https://www.linkedin.com/in/anas-fullstackdev/",
        siteUrl,
        "https://arsdeveloper.co.uk",
        "https://torontobytes.ca",
        "https://clutch.co/profile/anastanveer",
        "https://dev.to/anastanveer",
        "https://github.com/anastanveer",
        "https://www.goodfirms.co/company/anastanveer",
        "https://stackoverflow.com/users/anastanveer",
        "https://www.upwork.com/freelancers/anastanveer",
        "https://www.fiverr.com/anastanveer"
      ],
      knowsAbout: [
        ...keywords,
        "REST API Integration",
        "Custom Dashboard Development",
        "Ecommerce Development",
        "Trading Platform Development",
        "Core Web Vitals",
        "Technical SEO",
        "Business Automation",
        "Website Problem Solving",
        "Shopify Conversion Optimization",
        "Laravel Dashboard Development",
        "MySQL Database Design",
        "React Frontend Development",
        "Next.js Web Development",
        "Tailwind CSS",
        "Vue.js Development",
        "Git Version Control",
        "AWS Cloud Services",
        "Docker Containerization",
        "Redis Caching",
        "Web Security Best Practices",
        "UK Web Development",
        "London Web Developer",
        "Manchester Web Developer",
        "Birmingham Web Developer",
        "Leeds Web Developer",
        "Glasgow Web Developer",
        "Edinburgh Web Developer",
        "Bristol Web Developer",
        "Canadian Web Development",
        "Toronto Web Developer",
        "Vancouver Web Developer",
        "Calgary Web Developer",
        "Ottawa Web Developer",
        "UK Ecommerce Development",
        "Canadian Ecommerce Development",
        "UK Laravel Development",
        "Laravel Developer London",
        "Canadian Laravel Development",
        "UK Shopify Development",
        "Canadian Shopify Development",
        "WordPress Developer UK",
        "React Developer UK",
        "Next.js Developer UK",
        "WordPress Developer London",
        "Shopify Developer London",
        "Full Stack Developer London",
        "Web Developer Birmingham",
        "Web Developer Leeds",
        "Web Developer Bristol",
        "Web Developer Sheffield",
        "React Developer Canada",
        "Next.js Developer Canada",
        "WordPress Developer Canada",
        "Web Developer Montreal",
        "Web Developer Edmonton",
        "Web Developer Dubai Marina",
        "Web Developer Business Bay",
        "Web Developer JLT",
        "Web Developer Jumeirah Lake Towers",
        "Web Developer Downtown Dubai",
        "Web Developer Deira",
        "Web Developer Al Rashidiya",
        "Web Developer Al Furjan",
        "Laravel Developer Sharjah",
        "Shopify Developer Ajman",
        "Web Developer Australia",
        "Web Developer Sydney",
        "Web Developer Melbourne",
        "Shopify Developer Australia",
        "Laravel Developer Australia"
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Full-Stack Web Developer",
        description: "Designs, builds, and delivers custom web applications, Laravel platforms, WordPress websites, Shopify stores, business dashboards, REST APIs, and ERP systems for clients in Dubai, UAE, UK, Canada, and Australia.",
        occupationLocation: [
          { "@type": "City", name: "Dubai" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Canada" }
        ],
        skills: "Laravel, PHP, WordPress, Shopify, React, Next.js, MySQL, REST APIs, Tailwind CSS, Vue.js, Node.js, AWS, Docker, Redis, Technical SEO"
      },
      interactionStatistic: [
        {
          "@type": "InteractionCounter",
          interactionType: "https://schema.org/ReviewAction",
          userInteractionCount: 100
        },
        {
          "@type": "InteractionCounter",
          interactionType: "https://schema.org/LikeAction",
          userInteractionCount: 4900
        }
      ],
      potentialAction: [
        {
          "@type": "ContactAction",
          name: "Hire Anas Tanveer",
          target: [absoluteUrl("/contact")]
        },
        {
          "@type": "ViewAction",
          name: "View Portfolio",
          target: [absoluteUrl("/portfolio")]
        }
      ],
      workExample: [
        {
          "@type": "CreativeWork",
          name: "Trading Platform for Prop Firm Dubai",
          description: "Laravel-based trading platform with calculators, account flows, dashboards, admin controls and payment readiness.",
          url: absoluteUrl("/case-studies/trading-platform-prop-firm-dubai"),
          keywords: "Laravel, PHP, Trading Platform, Dashboard, Dubai"
        },
        {
          "@type": "CreativeWork",
          name: "Business Finance Dashboard & Analytics System",
          description: "Custom Laravel dashboard with analytics, filters, exports, role-aware views and reporting flows.",
          url: absoluteUrl("/case-studies/business-finance-dashboard-analytics"),
          keywords: "Laravel, Dashboard, Analytics, Business Intelligence"
        },
        {
          "@type": "CreativeWork",
          name: "Shopify Conversion Optimization & Size Mapping",
          description: "Shopify size selector and product-specific mapping workflow using Liquid theme logic and metafields.",
          url: absoluteUrl("/case-studies/shopify-conversion-optimization-size-mapping"),
          keywords: "Shopify, Liquid, Conversion Optimization, Ecommerce"
        },
        {
          "@type": "CreativeWork",
          name: "ERP Operations Workflow System Dubai",
          description: "Custom ERP with modules for records, staff workflows, reporting, approvals and role-based business controls.",
          url: absoluteUrl("/case-studies/erp-operations-workflow-system-dubai"),
          keywords: "Laravel, ERP, Business Automation, Dubai"
        }
      ],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Laravel Web Application Development", description: "Custom Laravel applications, dashboards, SaaS, ERP and API integrations for Dubai, UK and Canadian businesses." },
          areaServed: ["AE", "GB", "CA"],
          availableLanguage: "English"
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "WordPress Development Dubai", description: "Business WordPress websites with SEO foundations, custom themes and plugin development." },
          areaServed: ["AE", "GB", "CA"],
          availableLanguage: "English"
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Shopify Development & Conversion Optimization", description: "Shopify store development, theme customization and conversion rate optimization for ecommerce businesses." },
          areaServed: ["AE", "GB", "CA"],
          availableLanguage: "English"
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Business Dashboard Development", description: "Custom analytics dashboards, reporting tools and business intelligence interfaces using React and Laravel." },
          areaServed: ["AE", "GB", "CA"],
          availableLanguage: "English"
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Website Speed & Core Web Vitals Optimization", description: "Site performance audits and optimization to improve LCP, FID, CLS scores and Google rankings." },
          areaServed: ["AE", "GB", "CA"],
          availableLanguage: "English"
        }
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": absoluteUrl("/#professional-service"),
      name: "Anas Tanveer Full-Stack Development",
      url: siteUrl,
      image: absoluteUrl("/images/anas-premium-hero.webp"),
      telephone: "+971542435418",
      email: "info@anastanveer.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE"
      },
      founder: { "@id": absoluteUrl("/#person") },
      areaServed: [
        { "@type": "City", name: "Dubai" },
        { "@type": "City", name: "Abu Dhabi" },
        { "@type": "City", name: "Sharjah" },
        { "@type": "City", name: "Ajman" },
        { "@type": "City", name: "Ras Al Khaimah" },
        { "@type": "City", name: "Fujairah" },
        { "@type": "City", name: "Umm Al Quwain" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "City", name: "London" },
        { "@type": "City", name: "Manchester" },
        { "@type": "City", name: "Birmingham" },
        { "@type": "City", name: "Leeds" },
        { "@type": "City", name: "Glasgow" },
        { "@type": "City", name: "Edinburgh" },
        { "@type": "City", name: "Bristol" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "City", name: "Toronto" },
        { "@type": "City", name: "Vancouver" },
        { "@type": "City", name: "Calgary" },
        { "@type": "City", name: "Montreal" },
        { "@type": "City", name: "Ottawa" },
        { "@type": "City", name: "Edmonton" },
        { "@type": "Country", name: "Canada" },
        { "@type": "AdministrativeArea", name: "Worldwide" }
      ],
      availableChannel: {
        "@type": "ServiceChannel",
        serviceType: "Remote and On-site",
        availableLanguage: { "@type": "Language", name: "English" }
      },
      serviceType: [
        "Laravel Web Application Development",
        "PHP Web Development",
        "WordPress Website Development",
        "Shopify Customization",
        "Ecommerce Website Development",
        "Business Dashboard Development",
        "ERP and CRM Development",
        "REST API Integration",
        "SEO Friendly Website Development",
        "Website Speed Optimization",
        "Business Web Problem Solving",
        "Shopify Conversion Optimization",
        "Custom Dashboard Development",
        "Business Automation Development",
        "SaaS Platform Development",
        "Custom Web Application Development",
        "Trading Platform Development",
        "Business Workflow Automation"
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Business Web Development Services — Dubai, UK & Canada",
        itemListElement: [
          "Laravel Web Applications",
          "WordPress Business Websites",
          "Shopify Ecommerce Stores",
          "Business Dashboards",
          "ERP and CRM Systems",
          "Website Speed Optimization",
          "Business Automation",
          "Technical SEO Foundations",
          "React and Next.js Development",
          "Laravel Developer UK",
          "WordPress Developer UK",
          "Shopify Developer UK",
          "React Developer UK",
          "Laravel Developer Canada",
          "Shopify Developer Canada",
          "Web Developer London",
          "Web Developer Dubai"
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            areaServed: ["AE", "GB", "CA"]
          }
        }))
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/#local-business"),
      name: "Anas Tanveer",
      image: absoluteUrl("/images/anas-premium-hero.webp"),
      url: siteUrl,
      telephone: "+971542435418",
      email: "info@anastanveer.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.2048,
        longitude: 55.2708
      },
      openingHours: ["Mo-Th 08:00-22:00", "Su 08:00-22:00", "Fr 10:00-20:00", "Sa 10:00-20:00"],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
          opens: "08:00",
          closes: "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Friday", "Saturday"],
          opens: "10:00",
          closes: "20:00"
        }
      ],
      currenciesAccepted: "AED, GBP, USD, CAD",
      paymentAccepted: "Bank Transfer, Online Payment",
      hasMap: "https://maps.google.com/?q=Dubai,UAE",
      areaServed: [
        { "@type": "City", name: "Dubai" },
        { "@type": "Place", name: "Dubai Marina" },
        { "@type": "Place", name: "Business Bay" },
        { "@type": "Place", name: "Jumeirah Lake Towers" },
        { "@type": "Place", name: "Downtown Dubai" },
        { "@type": "Place", name: "Deira" },
        { "@type": "Place", name: "Al Rashidiya" },
        { "@type": "Place", name: "Al Furjan" },
        { "@type": "Place", name: "DIFC Dubai" },
        { "@type": "Place", name: "Dubai Silicon Oasis" },
        { "@type": "Place", name: "Jumeirah" },
        { "@type": "Place", name: "Bur Dubai" },
        { "@type": "City", name: "Abu Dhabi" },
        { "@type": "City", name: "Sharjah" },
        { "@type": "City", name: "Ajman" },
        { "@type": "City", name: "Ras Al Khaimah" },
        { "@type": "City", name: "Fujairah" },
        { "@type": "City", name: "Umm Al Quwain" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "City", name: "London" },
        { "@type": "City", name: "Manchester" },
        { "@type": "City", name: "Birmingham" },
        { "@type": "City", name: "Leeds" },
        { "@type": "City", name: "Glasgow" },
        { "@type": "City", name: "Edinburgh" },
        { "@type": "City", name: "Bristol" },
        { "@type": "City", name: "Sheffield" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "City", name: "Toronto" },
        { "@type": "City", name: "Vancouver" },
        { "@type": "City", name: "Calgary" },
        { "@type": "City", name: "Ottawa" },
        { "@type": "City", name: "Montreal" },
        { "@type": "City", name: "Edmonton" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "Australia" }
      ],
      potentialAction: {
        "@type": "ContactAction",
        name: "Hire Anas Tanveer",
        target: [absoluteUrl("/contact")]
      }
    },
    {
      "@type": "Organization",
      "@id": "https://arsdeveloper.co.uk/#organization",
      name: "ARS Developer Ltd",
      alternateName: "ARS Developer",
      url: "https://arsdeveloper.co.uk",
      foundingDate: "2020",
      numberOfEmployees: { "@type": "QuantitativeValue", value: 1 },
      logo: {
        "@type": "ImageObject",
        url: "https://arsdeveloper.co.uk/logo.png",
        width: 200,
        height: 60
      },
      description: "UK-based web development company providing Laravel, WordPress, Shopify and custom business web solutions for clients across the United Kingdom and Europe.",
      founder: { "@id": absoluteUrl("/#person") },
      employee: { "@id": absoluteUrl("/#person") },
      address: {
        "@type": "PostalAddress",
        addressCountry: "GB"
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "info@anastanveer.com",
        availableLanguage: "English"
      },
      areaServed: [
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "AdministrativeArea", name: "England" },
        { "@type": "AdministrativeArea", name: "Scotland" },
        { "@type": "City", name: "London" },
        { "@type": "City", name: "Manchester" },
        { "@type": "City", name: "Birmingham" },
        { "@type": "City", name: "Leeds" },
        { "@type": "City", name: "Glasgow" },
        { "@type": "City", name: "Edinburgh" },
        { "@type": "City", name: "Bristol" },
        { "@type": "Country", name: "United Arab Emirates" }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://torontobytes.ca/#organization",
      name: "TorontoBytes",
      url: "https://torontobytes.ca",
      foundingDate: "2021",
      numberOfEmployees: { "@type": "QuantitativeValue", value: 1 },
      logo: {
        "@type": "ImageObject",
        url: "https://torontobytes.ca/logo.png",
        width: 200,
        height: 60
      },
      description: "Canadian web development company serving businesses across Canada and North America with Laravel, WordPress, Shopify, dashboards and custom web solutions.",
      founder: { "@id": absoluteUrl("/#person") },
      employee: { "@id": absoluteUrl("/#person") },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "Ontario",
        addressCountry: "CA"
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "info@anastanveer.com",
        availableLanguage: "English"
      },
      areaServed: [
        { "@type": "Country", name: "Canada" },
        { "@type": "AdministrativeArea", name: "Ontario" },
        { "@type": "AdministrativeArea", name: "British Columbia" },
        { "@type": "AdministrativeArea", name: "Alberta" },
        { "@type": "City", name: "Toronto" },
        { "@type": "City", name: "Vancouver" },
        { "@type": "City", name: "Calgary" },
        { "@type": "City", name: "Ottawa" },
        { "@type": "City", name: "Montreal" },
        { "@type": "City", name: "Edmonton" }
      ]
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: "Anas Tanveer",
      url: siteUrl,
      inLanguage: "en-AE",
      publisher: { "@id": absoluteUrl("/#person") },
      description:
        "Full-stack web developer portfolio for Laravel, WordPress, Shopify, ecommerce, dashboards, ERP, APIs, speed optimization and SEO-friendly web applications — serving Dubai, UAE, UK and Canada.",
      copyrightYear: new Date().getFullYear(),
      dateModified: "2026-05-27",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${siteUrl}/blog?q={search_term_string}` },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: routes.find((route) => route.path === path)?.name ?? "Anas Tanveer",
      isPartOf: { "@id": absoluteUrl("/#website") },
      about: { "@id": absoluteUrl("/#person") },
      author: { "@id": absoluteUrl("/#person") },
      datePublished: "2024-01-01",
      dateModified: "2026-05-27",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/anas-premium-hero.webp"),
        width: 1400,
        height: 788
      },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", ".page-hero-title", ".section-header-title"]
      },
      significantLink: [
        absoluteUrl("/services"),
        absoluteUrl("/contact"),
        absoluteUrl("/portfolio"),
        absoluteUrl("/blog")
      ],
      inLanguage: "en-AE"
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: defaultBreadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    },
    path === "/blog"
      ? {
          "@type": "Blog",
          "@id": absoluteUrl("/blog#blog"),
          name: "Anas Tanveer Web Development Insights",
          url: absoluteUrl("/blog")
        }
      : null
    ].filter(Boolean)
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer
      }
    }))
  };
}

export function siteJsonLd() {
  const graph = jsonLdForPage("/")["@graph"]
    .filter((item) => {
      if (!item || typeof item !== "object" || !("@type" in item)) return false;
      return !["WebPage", "BreadcrumbList", "Blog"].includes(String(item["@type"]));
    })
    .map((item) => {
      if (item && typeof item === "object" && "@type" in item && item["@type"] === "LocalBusiness") {
        return {
          ...item,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            ratingCount: "4",
            bestRating: "5",
            worstRating: "1"
          },
          review: [
            {
              "@type": "Review",
              reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
              author: { "@type": "Person", name: "Steve Barlow" },
              reviewBody: "Another fantastic project from Anas. He understands the requirements, provides fully functional updates, makes changes quickly, and delivers a truly excellent product. I highly recommend Anas."
            },
            {
              "@type": "Review",
              reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
              author: { "@type": "Person", name: "Said B." },
              reviewBody: "2nd collaboration with Anas — fast, precise and high quality work. Excellent results delivered on time. Will definitely work together again."
            },
            {
              "@type": "Review",
              reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
              author: { "@type": "Person", name: "J. Nagle" },
              reviewBody: "Anas did a great job as per usual. Reliable, fast and always delivers exactly what is needed. Highly recommended."
            },
            {
              "@type": "Review",
              reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
              author: { "@type": "Person", name: "Rushil C." },
              reviewBody: "Excellent experience working with Anas Tanveer. His professionalism, attention to detail, and ability to deliver bug-free work were exceptional."
            }
          ],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: "+971542435418",
            email: "info@anastanveer.com",
            availableLanguage: "English",
            areaServed: ["AE", "GB", "CA"]
          }
        };
      }
      return item;
    });

  // UK LocalBusiness entity for ARS Developer Ltd
  const ukLocalBusiness = {
    "@type": "LocalBusiness",
    "@id": "https://arsdeveloper.co.uk/#local-business",
    name: "ARS Developer Ltd",
    alternateName: "Anas Tanveer UK Web Developer",
    url: "https://arsdeveloper.co.uk",
    telephone: "+447000000000",
    email: "info@anastanveer.com",
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
      addressRegion: "England"
    },
    founder: { "@id": absoluteUrl("/#person") },
    areaServed: [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "City", name: "London" },
      { "@type": "City", name: "Manchester" },
      { "@type": "City", name: "Birmingham" },
      { "@type": "City", name: "Leeds" },
      { "@type": "City", name: "Bristol" },
      { "@type": "City", name: "Glasgow" },
      { "@type": "City", name: "Edinburgh" },
      { "@type": "City", name: "Sheffield" }
    ],
    serviceType: [
      "Web Development UK",
      "Laravel Developer UK",
      "Laravel Developer London",
      "WordPress Developer UK",
      "WordPress Developer London",
      "Shopify Developer UK",
      "React Developer UK",
      "Full Stack Developer UK",
      "Full Stack Developer London",
      "PHP Developer UK",
      "Next.js Developer UK",
      "Web Developer Manchester",
      "Web Developer Birmingham",
      "Web Developer Leeds",
      "Web Developer Glasgow",
      "Web Developer Edinburgh",
      "Web Developer Bristol",
      "Web Developer Sheffield"
    ],
    openingHours: ["Mo-Fr 09:00-18:00"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "4",
      bestRating: "5",
      worstRating: "1"
    },
    sameAs: [
      "https://arsdeveloper.co.uk",
      absoluteUrl("/web-developer-uk"),
      absoluteUrl("/web-developer-london"),
      absoluteUrl("/laravel-developer-uk"),
      absoluteUrl("/laravel-developer-london"),
      absoluteUrl("/wordpress-developer-uk"),
      absoluteUrl("/wordpress-developer-london"),
      absoluteUrl("/shopify-developer-uk"),
      absoluteUrl("/react-developer-uk"),
      absoluteUrl("/fullstack-developer-london"),
      absoluteUrl("/web-developer-manchester"),
      absoluteUrl("/web-developer-birmingham"),
      absoluteUrl("/web-developer-leeds"),
      absoluteUrl("/web-developer-glasgow"),
      absoluteUrl("/web-developer-edinburgh"),
      absoluteUrl("/web-developer-bristol"),
      absoluteUrl("/web-developer-sheffield"),
      absoluteUrl("/php-developer-uk"),
      absoluteUrl("/react-developer-uk"),
      absoluteUrl("/fullstack-developer-london")
    ]
  };

  // Canada LocalBusiness entity for TorontoBytes
  const canadaLocalBusiness = {
    "@type": "LocalBusiness",
    "@id": "https://torontobytes.ca/#local-business",
    name: "TorontoBytes",
    alternateName: "Anas Tanveer Canada Web Developer",
    url: "https://torontobytes.ca",
    email: "info@anastanveer.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "Ontario",
      addressCountry: "CA"
    },
    founder: { "@id": absoluteUrl("/#person") },
    areaServed: [
      { "@type": "City", name: "Toronto" },
      { "@type": "City", name: "Vancouver" },
      { "@type": "City", name: "Calgary" },
      { "@type": "City", name: "Montreal" },
      { "@type": "City", name: "Ottawa" },
      { "@type": "City", name: "Edmonton" },
      { "@type": "Country", name: "Canada" }
    ],
    serviceType: [
      "Web Development Canada",
      "Laravel Developer Canada",
      "WordPress Developer Canada",
      "Shopify Developer Canada",
      "Full Stack Developer Canada",
      "Web Developer Vancouver",
      "Web Developer Calgary",
      "Web Developer Ottawa",
      "Web Developer Montreal",
      "Web Developer Edmonton",
      "WordPress Developer Canada",
      "React Developer Canada",
      "Next.js Developer Canada",
      "Full Stack Developer Canada"
    ],
    openingHours: ["Mo-Fr 09:00-18:00"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "4",
      bestRating: "5",
      worstRating: "1"
    },
    sameAs: [
      "https://torontobytes.ca",
      absoluteUrl("/web-developer-canada"),
      absoluteUrl("/web-developer-toronto"),
      absoluteUrl("/web-developer-vancouver"),
      absoluteUrl("/web-developer-calgary"),
      absoluteUrl("/web-developer-ottawa"),
      absoluteUrl("/web-developer-montreal"),
      absoluteUrl("/web-developer-edmonton"),
      absoluteUrl("/laravel-developer-canada"),
      absoluteUrl("/shopify-developer-canada"),
      absoluteUrl("/wordpress-developer-canada"),
      absoluteUrl("/react-developer-canada"),
      absoluteUrl("/fullstack-developer-canada"),
      absoluteUrl("/nextjs-developer-canada")
    ]
  };

  // Individual UK city LocalBusiness entities
  const ukCityLocalBusinesses = [
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/web-developer-manchester#local-business"),
      name: "Web Developer Manchester — Anas Tanveer",
      url: absoluteUrl("/web-developer-manchester"),
      address: { "@type": "PostalAddress", addressLocality: "Manchester", addressRegion: "GB-ENG", addressCountry: "GB" },
      geo: { "@type": "GeoCoordinates", latitude: 53.4808, longitude: -2.2426 },
      areaServed: [{ "@type": "City", name: "Manchester" }, { "@type": "AdministrativeArea", name: "Greater Manchester" }],
      serviceType: ["Web Development", "Laravel Development", "WordPress Development", "Shopify Development"],
      parentOrganization: { "@id": "https://arsdeveloper.co.uk/#local-business" },
      founder: { "@id": absoluteUrl("/#person") }
    },
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/web-developer-birmingham#local-business"),
      name: "Web Developer Birmingham — Anas Tanveer",
      url: absoluteUrl("/web-developer-birmingham"),
      address: { "@type": "PostalAddress", addressLocality: "Birmingham", addressRegion: "GB-ENG", addressCountry: "GB" },
      geo: { "@type": "GeoCoordinates", latitude: 52.4862, longitude: -1.8904 },
      areaServed: [{ "@type": "City", name: "Birmingham" }, { "@type": "AdministrativeArea", name: "West Midlands" }],
      serviceType: ["Web Development", "Laravel Development", "WordPress Development", "Shopify Development"],
      parentOrganization: { "@id": "https://arsdeveloper.co.uk/#local-business" },
      founder: { "@id": absoluteUrl("/#person") }
    },
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/web-developer-leeds#local-business"),
      name: "Web Developer Leeds — Anas Tanveer",
      url: absoluteUrl("/web-developer-leeds"),
      address: { "@type": "PostalAddress", addressLocality: "Leeds", addressRegion: "GB-ENG", addressCountry: "GB" },
      geo: { "@type": "GeoCoordinates", latitude: 53.8008, longitude: -1.5491 },
      areaServed: [{ "@type": "City", name: "Leeds" }, { "@type": "AdministrativeArea", name: "West Yorkshire" }],
      serviceType: ["Web Development", "Laravel Development", "WordPress Development", "Shopify Development"],
      parentOrganization: { "@id": "https://arsdeveloper.co.uk/#local-business" },
      founder: { "@id": absoluteUrl("/#person") }
    },
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/web-developer-glasgow#local-business"),
      name: "Web Developer Glasgow — Anas Tanveer",
      url: absoluteUrl("/web-developer-glasgow"),
      address: { "@type": "PostalAddress", addressLocality: "Glasgow", addressRegion: "GB-SCT", addressCountry: "GB" },
      geo: { "@type": "GeoCoordinates", latitude: 55.8642, longitude: -4.2518 },
      areaServed: [{ "@type": "City", name: "Glasgow" }, { "@type": "AdministrativeArea", name: "Scotland" }],
      serviceType: ["Web Development", "Laravel Development", "WordPress Development", "Shopify Development"],
      parentOrganization: { "@id": "https://arsdeveloper.co.uk/#local-business" },
      founder: { "@id": absoluteUrl("/#person") }
    },
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/web-developer-edinburgh#local-business"),
      name: "Web Developer Edinburgh — Anas Tanveer",
      url: absoluteUrl("/web-developer-edinburgh"),
      address: { "@type": "PostalAddress", addressLocality: "Edinburgh", addressRegion: "GB-SCT", addressCountry: "GB" },
      geo: { "@type": "GeoCoordinates", latitude: 55.9533, longitude: -3.1883 },
      areaServed: [{ "@type": "City", name: "Edinburgh" }, { "@type": "AdministrativeArea", name: "Scotland" }],
      serviceType: ["Web Development", "Laravel Development", "WordPress Development", "Shopify Development"],
      parentOrganization: { "@id": "https://arsdeveloper.co.uk/#local-business" },
      founder: { "@id": absoluteUrl("/#person") }
    },
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/web-developer-bristol#local-business"),
      name: "Web Developer Bristol — Anas Tanveer",
      url: absoluteUrl("/web-developer-bristol"),
      address: { "@type": "PostalAddress", addressLocality: "Bristol", addressRegion: "GB-ENG", addressCountry: "GB" },
      geo: { "@type": "GeoCoordinates", latitude: 51.4545, longitude: -2.5879 },
      areaServed: [{ "@type": "City", name: "Bristol" }, { "@type": "AdministrativeArea", name: "South West England" }],
      serviceType: ["Web Development", "Laravel Development", "WordPress Development", "Shopify Development"],
      parentOrganization: { "@id": "https://arsdeveloper.co.uk/#local-business" },
      founder: { "@id": absoluteUrl("/#person") }
    },
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/web-developer-sheffield#local-business"),
      name: "Web Developer Sheffield — Anas Tanveer",
      url: absoluteUrl("/web-developer-sheffield"),
      address: { "@type": "PostalAddress", addressLocality: "Sheffield", addressRegion: "GB-ENG", addressCountry: "GB" },
      geo: { "@type": "GeoCoordinates", latitude: 53.3811, longitude: -1.4701 },
      areaServed: [{ "@type": "City", name: "Sheffield" }, { "@type": "AdministrativeArea", name: "South Yorkshire" }],
      serviceType: ["Web Development", "Laravel Development", "WordPress Development", "Shopify Development"],
      parentOrganization: { "@id": "https://arsdeveloper.co.uk/#local-business" },
      founder: { "@id": absoluteUrl("/#person") }
    }
  ];

  // Individual Canadian city LocalBusiness entities
  const canadaCityLocalBusinesses = [
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/web-developer-toronto#local-business"),
      name: "Web Developer Toronto — Anas Tanveer",
      url: absoluteUrl("/web-developer-toronto"),
      address: { "@type": "PostalAddress", addressLocality: "Toronto", addressRegion: "CA-ON", addressCountry: "CA" },
      geo: { "@type": "GeoCoordinates", latitude: 43.6532, longitude: -79.3832 },
      areaServed: [{ "@type": "City", name: "Toronto" }, { "@type": "AdministrativeArea", name: "Ontario" }],
      serviceType: ["Web Development", "Laravel Development", "React Development", "Next.js Development", "Shopify Development"],
      parentOrganization: { "@id": "https://torontobytes.ca/#local-business" },
      founder: { "@id": absoluteUrl("/#person") }
    },
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/web-developer-vancouver#local-business"),
      name: "Web Developer Vancouver — Anas Tanveer",
      url: absoluteUrl("/web-developer-vancouver"),
      address: { "@type": "PostalAddress", addressLocality: "Vancouver", addressRegion: "CA-BC", addressCountry: "CA" },
      geo: { "@type": "GeoCoordinates", latitude: 49.2827, longitude: -123.1207 },
      areaServed: [{ "@type": "City", name: "Vancouver" }, { "@type": "AdministrativeArea", name: "British Columbia" }],
      serviceType: ["Web Development", "Laravel Development", "WordPress Development", "Shopify Development"],
      parentOrganization: { "@id": "https://torontobytes.ca/#local-business" },
      founder: { "@id": absoluteUrl("/#person") }
    },
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/web-developer-calgary#local-business"),
      name: "Web Developer Calgary — Anas Tanveer",
      url: absoluteUrl("/web-developer-calgary"),
      address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "CA-AB", addressCountry: "CA" },
      geo: { "@type": "GeoCoordinates", latitude: 51.0447, longitude: -114.0719 },
      areaServed: [{ "@type": "City", name: "Calgary" }, { "@type": "AdministrativeArea", name: "Alberta" }],
      serviceType: ["Web Development", "Laravel Development", "WordPress Development", "Shopify Development"],
      parentOrganization: { "@id": "https://torontobytes.ca/#local-business" },
      founder: { "@id": absoluteUrl("/#person") }
    },
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/web-developer-ottawa#local-business"),
      name: "Web Developer Ottawa — Anas Tanveer",
      url: absoluteUrl("/web-developer-ottawa"),
      address: { "@type": "PostalAddress", addressLocality: "Ottawa", addressRegion: "CA-ON", addressCountry: "CA" },
      geo: { "@type": "GeoCoordinates", latitude: 45.4215, longitude: -75.6972 },
      areaServed: [{ "@type": "City", name: "Ottawa" }, { "@type": "AdministrativeArea", name: "Ontario" }],
      serviceType: ["Web Development", "Laravel Development", "WordPress Development", "Shopify Development"],
      parentOrganization: { "@id": "https://torontobytes.ca/#local-business" },
      founder: { "@id": absoluteUrl("/#person") }
    },
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/web-developer-montreal#local-business"),
      name: "Web Developer Montreal — Anas Tanveer",
      url: absoluteUrl("/web-developer-montreal"),
      address: { "@type": "PostalAddress", addressLocality: "Montreal", addressRegion: "CA-QC", addressCountry: "CA" },
      geo: { "@type": "GeoCoordinates", latitude: 45.5017, longitude: -73.5673 },
      areaServed: [{ "@type": "City", name: "Montreal" }, { "@type": "AdministrativeArea", name: "Quebec" }],
      serviceType: ["Web Development", "Laravel Development", "WordPress Development", "Shopify Development", "Bilingual Web Development"],
      parentOrganization: { "@id": "https://torontobytes.ca/#local-business" },
      founder: { "@id": absoluteUrl("/#person") }
    },
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/web-developer-edmonton#local-business"),
      name: "Web Developer Edmonton — Anas Tanveer",
      url: absoluteUrl("/web-developer-edmonton"),
      address: { "@type": "PostalAddress", addressLocality: "Edmonton", addressRegion: "CA-AB", addressCountry: "CA" },
      geo: { "@type": "GeoCoordinates", latitude: 53.5461, longitude: -113.4938 },
      areaServed: [{ "@type": "City", name: "Edmonton" }, { "@type": "AdministrativeArea", name: "Alberta" }],
      serviceType: ["Web Development", "Laravel Development", "WordPress Development", "Shopify Development"],
      parentOrganization: { "@id": "https://torontobytes.ca/#local-business" },
      founder: { "@id": absoluteUrl("/#person") }
    }
  ];

  const australiaCityLocalBusinesses = [
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/web-developer-sydney#local-business"),
      name: "Web Developer Sydney — Anas Tanveer",
      url: absoluteUrl("/web-developer-sydney"),
      address: { "@type": "PostalAddress", addressLocality: "Sydney", addressRegion: "AU-NSW", addressCountry: "AU" },
      geo: { "@type": "GeoCoordinates", latitude: -33.8688, longitude: 151.2093 },
      areaServed: [{ "@type": "City", name: "Sydney" }, { "@type": "AdministrativeArea", name: "New South Wales" }],
      serviceType: ["Web Development", "Laravel Development", "React Development", "Shopify Development"],
      founder: { "@id": absoluteUrl("/#person") }
    },
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/web-developer-melbourne#local-business"),
      name: "Web Developer Melbourne — Anas Tanveer",
      url: absoluteUrl("/web-developer-melbourne"),
      address: { "@type": "PostalAddress", addressLocality: "Melbourne", addressRegion: "AU-VIC", addressCountry: "AU" },
      geo: { "@type": "GeoCoordinates", latitude: -37.8136, longitude: 144.9631 },
      areaServed: [{ "@type": "City", name: "Melbourne" }, { "@type": "AdministrativeArea", name: "Victoria" }],
      serviceType: ["Web Development", "Laravel Development", "WordPress Development", "Shopify Development"],
      founder: { "@id": absoluteUrl("/#person") }
    },
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/web-developer-brisbane#local-business"),
      name: "Web Developer Brisbane — Anas Tanveer",
      url: absoluteUrl("/web-developer-brisbane"),
      address: { "@type": "PostalAddress", addressLocality: "Brisbane", addressRegion: "AU-QLD", addressCountry: "AU" },
      geo: { "@type": "GeoCoordinates", latitude: -27.4698, longitude: 153.0251 },
      areaServed: [{ "@type": "City", name: "Brisbane" }, { "@type": "AdministrativeArea", name: "Queensland" }],
      serviceType: ["Web Development", "Laravel Development", "WordPress Development", "Shopify Development"],
      founder: { "@id": absoluteUrl("/#person") }
    },
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/web-developer-perth#local-business"),
      name: "Web Developer Perth — Anas Tanveer",
      url: absoluteUrl("/web-developer-perth"),
      address: { "@type": "PostalAddress", addressLocality: "Perth", addressRegion: "AU-WA", addressCountry: "AU" },
      geo: { "@type": "GeoCoordinates", latitude: -31.9505, longitude: 115.8605 },
      areaServed: [{ "@type": "City", name: "Perth" }, { "@type": "AdministrativeArea", name: "Western Australia" }],
      serviceType: ["Web Development", "Laravel Development", "WordPress Development", "Shopify Development"],
      founder: { "@id": absoluteUrl("/#person") }
    },
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/web-developer-adelaide#local-business"),
      name: "Web Developer Adelaide — Anas Tanveer",
      url: absoluteUrl("/web-developer-adelaide"),
      address: { "@type": "PostalAddress", addressLocality: "Adelaide", addressRegion: "AU-SA", addressCountry: "AU" },
      geo: { "@type": "GeoCoordinates", latitude: -34.9285, longitude: 138.6007 },
      areaServed: [{ "@type": "City", name: "Adelaide" }, { "@type": "AdministrativeArea", name: "South Australia" }],
      serviceType: ["Web Development", "Laravel Development", "WordPress Development", "Shopify Development"],
      founder: { "@id": absoluteUrl("/#person") }
    }
  ];

  // Add SiteNavigationElement once at the site level (not per-page)
  const navItems = routes.map((route) => ({
    "@type": "SiteNavigationElement",
    "@id": `${absoluteUrl(route.path)}#nav`,
    name: route.name,
    url: absoluteUrl(route.path)
  }));

  const servicesCatalog = {
    "@type": "ItemList",
    "@id": absoluteUrl("/services#catalog"),
    name: "Web Development Services by Anas Tanveer",
    description: "Complete catalog of web development services available in Dubai, UAE, UK, Canada, and Australia.",
    numberOfItems: 12,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Laravel Web Application Development", url: absoluteUrl("/laravel-developer-dubai") },
      { "@type": "ListItem", position: 2, name: "WordPress Development", url: absoluteUrl("/wordpress-developer-dubai") },
      { "@type": "ListItem", position: 3, name: "Shopify Development", url: absoluteUrl("/shopify-developer-dubai") },
      { "@type": "ListItem", position: 4, name: "React & Next.js Development", url: absoluteUrl("/react-developer-dubai") },
      { "@type": "ListItem", position: 5, name: "Business Dashboard Development", url: absoluteUrl("/dashboard-development-dubai") },
      { "@type": "ListItem", position: 6, name: "Ecommerce Website Development", url: absoluteUrl("/ecommerce-website-development-dubai") },
      { "@type": "ListItem", position: 7, name: "API Integration Services", url: absoluteUrl("/api-integration-services") },
      { "@type": "ListItem", position: 8, name: "Website Speed Optimization", url: absoluteUrl("/website-speed-optimization-dubai") },
      { "@type": "ListItem", position: 9, name: "CRM Development Dubai", url: absoluteUrl("/crm-development-dubai") },
      { "@type": "ListItem", position: 10, name: "SaaS Developer Dubai", url: absoluteUrl("/saas-developer-dubai") },
      { "@type": "ListItem", position: 11, name: "Full Stack Developer Dubai", url: absoluteUrl("/fullstack-developer-dubai") },
      { "@type": "ListItem", position: 12, name: "Freelance Web Developer Dubai", url: absoluteUrl("/freelance-web-developer-dubai") }
    ]
  };

  const definedTermSet = {
    "@type": "DefinedTermSet",
    "@id": absoluteUrl("/#tech-glossary"),
    name: "Web Development Technologies — Anas Tanveer",
    description: "Core technologies and frameworks used by Anas Tanveer for client projects in Dubai and internationally.",
    hasDefinedTerm: [
      { "@type": "DefinedTerm", name: "Laravel", description: "PHP framework for building custom web applications, dashboards, ERP systems, REST APIs, and SaaS platforms.", url: absoluteUrl("/laravel-developer-dubai") },
      { "@type": "DefinedTerm", name: "WordPress", description: "CMS platform for business websites, blogs, and WooCommerce ecommerce stores with SEO-ready structure.", url: absoluteUrl("/wordpress-developer-dubai") },
      { "@type": "DefinedTerm", name: "Shopify", description: "Ecommerce platform for building online stores with payment gateway integration, product management, and conversion optimisation.", url: absoluteUrl("/shopify-developer-dubai") },
      { "@type": "DefinedTerm", name: "React", description: "JavaScript library for building fast, interactive frontend web applications and single-page apps.", url: absoluteUrl("/react-developer-dubai") },
      { "@type": "DefinedTerm", name: "Next.js", description: "React-based framework for server-rendered, SEO-optimised web applications with static export support.", url: absoluteUrl("/nextjs-developer-dubai") },
      { "@type": "DefinedTerm", name: "PHP", description: "Server-side programming language used with Laravel for secure, scalable web application backends.", url: absoluteUrl("/php-developer-dubai") },
      { "@type": "DefinedTerm", name: "MySQL", description: "Relational database management system used for storing structured business data in web applications.", url: absoluteUrl("/") },
      { "@type": "DefinedTerm", name: "REST API", description: "Application Programming Interface standard for integrating web services, payment gateways, CRMs, and third-party platforms.", url: absoluteUrl("/api-integration-services") }
    ]
  };

  return {
    "@context": "https://schema.org",
    "@graph": [...graph, ukLocalBusiness, canadaLocalBusiness, ...ukCityLocalBusinesses, ...canadaCityLocalBusinesses, ...australiaCityLocalBusinesses, ...navItems, servicesCatalog, definedTermSet]
  };
}

// Page-type specific schemas for Google entity understanding
export function pageTypeSchema(
  type: "AboutPage" | "ContactPage" | "ProfilePage" | "CollectionPage" | "ItemListPage",
  path: string,
  options: {
    name: string;
    description: string;
    items?: Array<{ name: string; url: string; description?: string }>;
  }
) {
  const url = absoluteUrl(path);
  const base = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#${type.toLowerCase()}`,
    name: options.name,
    description: options.description,
    url,
    isPartOf: { "@id": absoluteUrl("/#website") },
    about: { "@id": absoluteUrl("/#person") },
    inLanguage: "en-AE"
  };
  if ((type === "CollectionPage" || type === "ItemListPage") && options.items?.length) {
    return {
      ...base,
      mainEntity: {
        "@type": "ItemList",
        itemListElement: options.items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          url: item.url,
          ...(item.description ? { description: item.description } : {})
        }))
      }
    };
  }
  return base;
}

// HowTo schema for step-by-step blog posts
export function howToSchema(options: {
  name: string;
  description: string;
  url: string;
  steps: Array<{ name: string; text: string }>;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: options.name,
    description: options.description,
    url: options.url,
    ...(options.image ? { image: { "@type": "ImageObject", url: absoluteUrl(options.image) } } : {}),
    author: { "@id": absoluteUrl("/#person") },
    step: options.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text
    }))
  };
}

// Review aggregate schema for testimonials/reviews pages
export function reviewAggregateSchema(reviews: Array<{
  author: string;
  rating: number;
  date: string;
  body: string;
  platform?: string;
}>) {
  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteUrl("/#local-business-reviews"),
    name: "Anas Tanveer Web Development",
    url: siteUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating,
      ratingCount: String(reviews.length),
      bestRating: "5",
      worstRating: "1"
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5"
      },
      author: { "@type": "Person", name: r.author },
      datePublished: r.date,
      reviewBody: r.body,
      ...(r.platform ? { publisher: { "@type": "Organization", name: r.platform } } : {})
    }))
  };
}
