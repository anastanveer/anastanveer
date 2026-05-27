import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Providers } from "@/components/layout/Providers";
import { FloatingAssistant } from "@/components/ai/FloatingAssistant";
import { CursorGlow } from "@/components/animations/CursorGlow";
import { MobileRailEffects } from "@/components/animations/MobileRailEffects";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, siteJsonLd } from "@/lib/seo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = pageMetadata({
  title: "Anas Tanveer | Full-Stack Laravel Developer Dubai",
  description:
    "Dubai web problem solver for Laravel, WordPress, Shopify, dashboards, APIs, ecommerce, speed and SEO-ready business systems.",
  path: "/"
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = siteJsonLd();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="gllYNE1pcbGLwfP2PMahnrbVB6fcVfM0x0gbbsiBSCg" />
        {/* RSS / Feed */}
        <link rel="alternate" type="application/rss+xml" title="Anas Tanveer Web Development Blog" href="https://anastanveer.com/feed.xml" />
        {/* Sitemaps */}
        <link rel="sitemap" type="application/xml" title="Main Sitemap" href="https://anastanveer.com/sitemap.xml" />
        <link rel="sitemap" type="application/xml" title="Image Sitemap" href="https://anastanveer.com/sitemap-images.xml" />
        <link rel="sitemap" type="application/xml" title="News Sitemap" href="https://anastanveer.com/sitemap-news.xml" />
        {/* Author & identity */}
        <link rel="author" href="https://anastanveer.com/about" />
        <link rel="me" href="https://www.linkedin.com/in/anas-fullstackdev/" />
        <link rel="me" href="https://github.com/anastanveer" />
        {/* Performance preconnects */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta name="theme-color" content="#0a0a0f" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#f8fafc" media="(prefers-color-scheme: light)" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3DEZL0WXWD" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-3DEZL0WXWD');gtag('config','AW-658923491');"
          }}
        />
        <script async src="https://www.google.com/recaptcha/api.js?render=6Lf_8-ksAAAAAJt3RbumC-30_Y6CrVfo5u_uvx7f" />
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.add('light')}catch(e){}"
          }}
        />
      </head>
      <body className={`${inter.variable} ${display.variable} font-sans antialiased`} suppressHydrationWarning>
        <JsonLd data={jsonLd} id="site-json-ld" />
        <Providers>
          <ScrollProgress />
          <CursorGlow />
          <MobileRailEffects />
          <div className="pointer-events-none fixed inset-0 -z-10 grid-bg animate-grid opacity-70" />
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingAssistant />
        </Providers>
      </body>
    </html>
  );
}
