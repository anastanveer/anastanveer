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
  ...seoRoutes
] as const;

export function pageMetadata({
  title,
  description,
  path = "/",
  extraKeywords = [],
  image = "/images/anas-premium-hero.webp"
}: {
  title: string;
  description: string;
  path?: string;
  extraKeywords?: string[];
  image?: string;
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
      languages: {
        "en-AE": url,
        "en-US": url,
        "en-GB": url,
        "x-default": url
      }
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
      type: "website",
      locale: "en_AE",
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
      images: [imageUrl]
    },
    verification: {
      other: {
        "geo.region": "AE-DU",
        "geo.placename": "Dubai",
        "ICBM": "25.2048,55.2708"
      }
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
      url: siteUrl,
      image: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/anas-resume.webp"),
        width: 400,
        height: 400,
        caption: "Anas Tanveer – Full-Stack Developer Dubai"
      },
      email: "mailto:info@anastanveer.com",
      telephone: "+971542435418",
      nationality: "Pakistani",
      knowsLanguage: ["en"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressRegion: "Dubai",
        addressCountry: "AE"
      },
      worksFor: {
        "@type": "Organization",
        "@id": "https://arsdeveloper.co.uk/#organization",
        name: "ARS Developer Ltd",
        url: "https://arsdeveloper.co.uk"
      },
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "Full-Stack Web Development" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Laravel Application Development" }
      ],
      sameAs: [
        "https://www.linkedin.com/in/anas-fullstackdev/",
        siteUrl,
        "https://arsdeveloper.co.uk"
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
        "Web Security Best Practices"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": absoluteUrl("/#professional-service"),
      name: "Anas Tanveer Full-Stack Development",
      url: siteUrl,
      image: absoluteUrl("/images/anas-premium-hero.webp"),
      telephone: "+971542435418",
      email: "mailto:info@anastanveer.com",
      priceRange: "$$",
      founder: { "@id": absoluteUrl("/#person") },
      areaServed: [
        { "@type": "City", name: "Dubai" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "United Kingdom" },
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
        name: "Business Web Problem Solving Services",
        itemListElement: [
          "Laravel Web Applications",
          "WordPress Business Websites",
          "Shopify Ecommerce Stores",
          "Business Dashboards",
          "ERP and CRM Systems",
          "Website Speed Optimization",
          "Business Automation",
          "Technical SEO Foundations"
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name
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
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00"
        }
      ],
      currenciesAccepted: "AED, GBP, USD, CAD",
      paymentAccepted: "Bank Transfer, Online Payment"
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: "Anas Tanveer",
      url: siteUrl,
      inLanguage: "en-AE",
      publisher: { "@id": absoluteUrl("/#person") },
      description:
        "Dubai-based full-stack web problem solver portfolio for Laravel, WordPress, Shopify, ecommerce, dashboards, ERP, APIs, speed optimization and SEO-friendly web applications.",
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/?q={search_term_string}`,
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
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/anas-premium-hero.webp"),
        width: 1400,
        height: 788
      },
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
    {
      "@type": "SiteNavigationElement",
      "@id": absoluteUrl("/#site-navigation"),
      name: routes.map((route) => route.name),
      url: routes.map((route) => absoluteUrl(route.path))
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
  const graph = jsonLdForPage("/")["@graph"].filter((item) => {
    if (!item || typeof item !== "object" || !("@type" in item)) return false;
    return !["WebPage", "BreadcrumbList", "Blog"].includes(String(item["@type"]));
  });

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}
