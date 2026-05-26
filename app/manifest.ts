import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Anas Tanveer - Full-Stack Developer Dubai",
    short_name: "Anas Tanveer",
    description: "Laravel, WordPress, Shopify, dashboard, ecommerce and SEO-ready web development portfolio.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#05070d",
    theme_color: "#05070d",
    categories: ["business", "productivity", "developer"],
    lang: "en-AE",
    prefer_related_applications: false,
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ],
    shortcuts: [
      {
        name: "Contact",
        short_name: "Contact",
        description: "Send a project inquiry",
        url: "/contact",
        icons: [{ src: "/icon-192.png", sizes: "192x192", type: "image/png" }]
      },
      {
        name: "Portfolio",
        short_name: "Portfolio",
        description: "View project portfolio",
        url: "/portfolio",
        icons: [{ src: "/icon-192.png", sizes: "192x192", type: "image/png" }]
      }
    ],
    screenshots: [
      {
        src: "/images/anas-premium-hero.webp",
        sizes: "1400x788",
        type: "image/webp",
        form_factor: "wide"
      }
    ]
  };
}
