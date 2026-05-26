import { SeoServicePageView } from "@/components/seo/SeoServicePageView";
import { getSeoServicePage } from "@/data/seo-pages";
import { pageMetadata } from "@/lib/seo";

const page = getSeoServicePage("php-developer-australia")!;

export const metadata = pageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: `/${page.slug}`,
  extraKeywords: page.keywords,
  image: page.image,
});

export default function PhpDeveloperAustraliaPage() {
  return <SeoServicePageView page={page} />;
}
