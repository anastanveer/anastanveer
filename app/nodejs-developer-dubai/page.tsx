import { SeoServicePageView } from "@/components/seo/SeoServicePageView";
import { getSeoServicePage } from "@/data/seo-pages";
import { pageMetadata } from "@/lib/seo";

const page = getSeoServicePage("nodejs-developer-dubai")!;

export const metadata = pageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: `/${page.slug}`,
  extraKeywords: page.keywords,
  image: page.image
});

export default function NodejsDeveloperDubaiPage() {
  return <SeoServicePageView page={page} />;
}
