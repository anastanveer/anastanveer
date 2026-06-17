import { cn } from "@/lib/utils";

const brandMap = {
  laravel:    { bg: "#FF2D20", color: "#ffffff", initials: "L",   type: "badge" },
  wordpress:  { bg: "#0073AA", color: "#ffffff", initials: "WP",  type: "badge" },
  shopify:    { bg: "#7AB55C", color: "#ffffff", initials: "S",   type: "badge" },
  react:      { bg: "#20232A", color: "#61DAFB", initials: "R",   type: "react" },
  nextjs:     { bg: "#000000", color: "#ffffff", initials: "N",   type: "nextjs" },
  php:        { bg: "#777BB4", color: "#ffffff", initials: "PHP", type: "badge" },
  mysql:      { bg: "#4479A1", color: "#ffffff", initials: "My",  type: "badge" },
  vue:        { bg: "#4FC08D", color: "#ffffff", initials: "V",   type: "vue" },
  typescript: { bg: "#3178C6", color: "#ffffff", initials: "TS",  type: "ts" },
  javascript: { bg: "#F7DF1E", color: "#323330", initials: "JS",  type: "badge" },
  nodejs:     { bg: "#339933", color: "#ffffff", initials: "N",   type: "badge" },
  tailwind:   { bg: "#06B6D4", color: "#ffffff", initials: "TW",  type: "badge" },
  python:     { bg: "#3776AB", color: "#ffffff", initials: "PY",  type: "badge" },
  git:        { bg: "#F05032", color: "#ffffff", initials: "G",   type: "badge" },
  figma:      { bg: "#F24E1E", color: "#ffffff", initials: "Fi",  type: "badge" },
  redis:      { bg: "#DC382D", color: "#ffffff", initials: "R",   type: "badge" },
  docker:     { bg: "#2496ED", color: "#ffffff", initials: "D",   type: "badge" },
  graphql:    { bg: "#E10098", color: "#ffffff", initials: "GQ",  type: "badge" },
  aws:        { bg: "#FF9900", color: "#232F3E", initials: "AWS", type: "badge" },
  framermotion:      { bg: "#0F1115", color: "#FF4D8D", initials: "FM",  type: "badge" },
  gsap:              { bg: "#0A0A0A", color: "#88CE02", initials: "GS",  type: "badge" },
  restapis:          { bg: "#0EA5E9", color: "#ffffff", initials: "API", type: "badge" },
  livewire:          { bg: "#FB70A9", color: "#ffffff", initials: "LW",  type: "badge" },
  authentication:    { bg: "#475569", color: "#ffffff", initials: "Au",  type: "badge" },
  queues:            { bg: "#7C3AED", color: "#ffffff", initials: "Q",   type: "badge" },
  liquid:            { bg: "#3E9B4F", color: "#ffffff", initials: "Lq",  type: "badge" },
  woocommerce:       { bg: "#96588A", color: "#ffffff", initials: "Wo",  type: "badge" },
  acf:               { bg: "#00699D", color: "#ffffff", initials: "ACF", type: "badge" },
  elementor:         { bg: "#D0006F", color: "#ffffff", initials: "El",  type: "badge" },
  postgresql:        { bg: "#336791", color: "#ffffff", initials: "PG",  type: "badge" },
  databasedesign:    { bg: "#0EA5A4", color: "#ffffff", initials: "DB",  type: "badge" },
  reports:           { bg: "#2563EB", color: "#ffffff", initials: "Rp",  type: "badge" },
  indexes:           { bg: "#0891B2", color: "#ffffff", initials: "Ix",  type: "badge" },
  dataimports:       { bg: "#0D9488", color: "#ffffff", initials: "DI",  type: "badge" },
  corewebvitals:     { bg: "#34A853", color: "#ffffff", initials: "CWV", type: "badge" },
  schema:            { bg: "#6366F1", color: "#ffffff", initials: "Sc",  type: "badge" },
  metadata:          { bg: "#8B5CF6", color: "#ffffff", initials: "Md",  type: "badge" },
  caching:           { bg: "#EA580C", color: "#ffffff", initials: "Ca",  type: "badge" },
  imageoptimization: { bg: "#DB2777", color: "#ffffff", initials: "IO",  type: "badge" },
  lighthouse:        { bg: "#F44B21", color: "#ffffff", initials: "LH",  type: "badge" },
  vercel:            { bg: "#000000", color: "#ffffff", initials: "Ve",  type: "badge" },
  cpanel:            { bg: "#FF6C2C", color: "#ffffff", initials: "cP",  type: "badge" },
  cloudhosting:      { bg: "#0284C7", color: "#ffffff", initials: "CH",  type: "badge" },
  analytics:         { bg: "#E37400", color: "#ffffff", initials: "An",  type: "badge" },
} as const;

export type BrandName = keyof typeof brandMap;

// name → BrandName lookup for TechMarquee strings
export const techNameToIcon: Record<string, BrandName> = {
  "laravel": "laravel",
  "wordpress": "wordpress",
  "shopify": "shopify",
  "react": "react",
  "react.js": "react",
  "next.js": "nextjs",
  "nextjs": "nextjs",
  "vue.js": "vue",
  "vue": "vue",
  "typescript": "typescript",
  "javascript": "javascript",
  "js": "javascript",
  "php": "php",
  "mysql": "mysql",
  "node.js": "nodejs",
  "nodejs": "nodejs",
  "tailwind css": "tailwind",
  "tailwind": "tailwind",
  "python": "python",
  "git": "git",
  "figma": "figma",
  "redis": "redis",
  "docker": "docker",
  "graphql": "graphql",
  "aws": "aws",
  "framer motion": "framermotion",
  "gsap": "gsap",
  "rest apis": "restapis",
  "livewire": "livewire",
  "authentication": "authentication",
  "queues": "queues",
  "liquid": "liquid",
  "woocommerce": "woocommerce",
  "acf": "acf",
  "elementor": "elementor",
  "postgresql": "postgresql",
  "database design": "databasedesign",
  "reports": "reports",
  "indexes": "indexes",
  "data imports": "dataimports",
  "core web vitals": "corewebvitals",
  "schema": "schema",
  "metadata": "metadata",
  "caching": "caching",
  "image optimization": "imageoptimization",
  "lighthouse": "lighthouse",
  "vercel": "vercel",
  "cpanel": "cpanel",
  "cloud hosting": "cloudhosting",
  "analytics": "analytics",
};

// Slug → stack icons for service pages
export const slugToStack: Record<string, BrandName[]> = {
  "laravel-developer-dubai":              ["laravel", "php", "mysql"],
  "wordpress-developer-dubai":            ["wordpress", "php", "mysql"],
  "shopify-developer-dubai":              ["shopify", "javascript"],
  "dashboard-development-dubai":          ["laravel", "vue", "mysql"],
  "erp-development-uae":                  ["laravel", "php", "mysql"],
  "api-integration-services":             ["laravel", "nodejs", "php"],
  "website-speed-optimization-dubai":     ["wordpress", "php", "tailwind"],
  "ecommerce-website-development-dubai":  ["shopify", "wordpress", "javascript"],
  "fullstack-developer-dubai":            ["laravel", "react", "nextjs", "typescript"],
  "react-developer-dubai":               ["react", "nextjs", "typescript"],
  "nextjs-developer-dubai":              ["nextjs", "react", "typescript"],
  "nodejs-developer-dubai":              ["nodejs", "javascript", "mysql"],
  "typescript-developer-dubai":          ["typescript", "react", "nextjs"],
  "vue-developer-dubai":                 ["vue", "javascript", "laravel"],
  "mysql-developer-dubai":              ["mysql", "laravel", "php"],
  "crm-development-dubai":              ["laravel", "mysql", "php"],
  "saas-developer-dubai":               ["laravel", "react", "mysql"],
  "wordpress-seo-dubai":                ["wordpress", "php"],
  "wordpress-maintenance-dubai":        ["wordpress", "php", "mysql"],
  "hire-laravel-developer":             ["laravel", "php", "mysql"],
  "ecommerce-developer-dubai":          ["shopify", "wordpress"],
  "web-developer-abu-dhabi":            ["laravel", "wordpress", "react"],
  "web-developer-sharjah":              ["laravel", "wordpress", "shopify"],
  "web-developer-ajman":                ["wordpress", "shopify"],
  "web-developer-ras-al-khaimah":       ["wordpress", "laravel"],
  "php-developer-dubai":                ["php", "laravel", "mysql"],
};

function ReactSvg() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="none">
      <rect width="24" height="24" rx="4" fill="#20232A" />
      <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.6" stroke="#61DAFB" strokeWidth="1.1" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.6" stroke="#61DAFB" strokeWidth="1.1" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.6" stroke="#61DAFB" strokeWidth="1.1" transform="rotate(120 12 12)" />
    </svg>
  );
}

function VueSvg() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="none">
      <rect width="24" height="24" rx="4" fill="#1a1a2e" />
      <path d="M2 4L12 20.5L22 4H17.5L12 14L6.5 4H2Z" fill="#4FC08D" />
      <path d="M6.5 4L12 14L17.5 4H13.5L12 9L10.5 4H6.5Z" fill="#35495E" />
    </svg>
  );
}

function TsSvg() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <text x="3.5" y="17" fill="white" fontSize="10.5" fontWeight="bold" fontFamily="system-ui,sans-serif">TS</text>
    </svg>
  );
}

function NextjsSvg() {
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full" fill="none">
      <rect width="24" height="24" rx="4" fill="#000000" />
      <path d="M7 17V7L18.5 17H15.5L7 9.5V17H7Z" fill="white" />
      <path d="M14 7H17V10L14 7Z" fill="white" />
    </svg>
  );
}

function BadgeSvg({ bg, color, initials }: { bg: string; color: string; initials: string }) {
  const len = initials.length;
  const fontSize = len >= 3 ? "7.5" : len === 2 ? "9.5" : "12";
  return (
    <svg viewBox="0 0 24 24" className="h-full w-full">
      <rect width="24" height="24" rx="4" fill={bg} />
      <text
        x="12"
        y={len >= 3 ? "15.5" : "16"}
        fill={color}
        fontSize={fontSize}
        fontWeight="bold"
        fontFamily="system-ui,sans-serif"
        textAnchor="middle"
      >
        {initials}
      </text>
    </svg>
  );
}

export function BrandIcon({ name, className }: { name: BrandName; className?: string }) {
  const brand = brandMap[name];
  if (!brand) return null;
  const cls = cn("inline-block shrink-0 h-5 w-5", className);

  let svg: React.ReactNode;
  switch (brand.type) {
    case "react":  svg = <ReactSvg />;  break;
    case "vue":    svg = <VueSvg />;    break;
    case "ts":     svg = <TsSvg />;     break;
    case "nextjs": svg = <NextjsSvg />; break;
    default:       svg = <BadgeSvg bg={brand.bg} color={brand.color} initials={brand.initials} />;
  }
  return <span className={cls}>{svg}</span>;
}
