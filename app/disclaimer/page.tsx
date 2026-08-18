import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { LegalPage } from "@/components/ui/LegalPage";
import { jsonLdForPage, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Disclaimer | Advice, Pricing and Advertising",
  description:
    "What the articles on anastanveer.com are and are not — general guidance rather than professional advice, indicative pricing, why results vary, external link limits, and disclosure of Google AdSense advertising.",
  path: "/disclaimer"
});

const link = "text-cyan underline underline-offset-4 hover:text-cyan/80 light:text-blue-700 light:hover:text-blue-800";

export default function DisclaimerPage() {
  return (
    <>
      <JsonLd data={jsonLdForPage("/disclaimer")} id="disclaimer-json-ld" />
      <LegalPage
        title="Disclaimer"
        updated="18 August 2026"
        lead="I write about what has worked on real projects. That is useful, and it is also not the same thing as advice about your specific situation. Here is where the line sits."
        sections={[
          {
            heading: "The articles are guidance, not professional advice",
            body: [
              "Everything in the blog comes out of building things for clients in Dubai, the UK and Canada. It is opinion and general guidance, informed by practice.",
              "It is not professional, legal, financial, tax or regulatory advice, and no article can account for your business, your contracts, your jurisdiction or your risk tolerance. Before making a decision with real money or legal consequences attached, talk to someone qualified in that field who can look at your actual circumstances."
            ]
          },
          {
            heading: "Reading an article does not make me your developer",
            body: [
              "No client relationship is created by reading this site, subscribing to anything, or sending me a message. That relationship begins only when we have a signed or written agreement covering scope, price and timeline.",
              "Until then, treat what you read here the way you would treat a useful conversation at a conference: worth having, not a substitute for someone reviewing your specifics."
            ]
          },
          {
            heading: "Pricing figures are indicative",
            body: [
              "Cost ranges in articles — Laravel builds, WordPress sites, Shopify work, dashboards, ERP systems, integrations — are honest ballparks from projects I have actually delivered. They exist so you can tell whether a quote you have received is in a sane range.",
              "They are not quotes and they are not fixed prices. Real cost moves with scope, integrations, data migration, design complexity, content volume, third-party licences and how quickly decisions get made on your side. Two projects described in the same sentence can differ by a factor of three.",
              <>For an actual number, send me the specifics through the <a className={link} href="/contact/">contact page</a> and I will give you one in writing.</>
            ]
          },
          {
            heading: "Results vary, and I will not pretend otherwise",
            body: [
              "Case studies and outcomes described here happened for those clients, in their market, with their product and their team. They are examples, not projections.",
              "Nothing on this site is a guarantee of revenue, rankings, traffic, conversion rate, or performance. Anyone promising you a specific business result from a website build is selling you something. Technical work can remove obstacles and create opportunity; it cannot guarantee what you do with it."
            ]
          },
          {
            heading: "Accuracy and age",
            body: [
              "I aim to be accurate at the time of writing, and I correct mistakes when they are pointed out. But this field moves — framework versions, platform pricing, Google's behaviour, UAE and UK regulations all shift.",
              "Every article carries a publish date. If it is old, verify before relying on it. I make no warranty that content remains current, complete or error-free."
            ]
          },
          {
            heading: "External links",
            body: [
              "Articles link to documentation, tools, and other people's writing because those things were genuinely helpful. Once you click through, you are on a site I do not own, control or monitor.",
              "A link is not an endorsement of that company, its products, its pricing or its privacy practices, and I am not responsible for what you find there or what happens as a result. Check anything important yourself."
            ]
          },
          {
            heading: "Advertising disclosure",
            body: [
              "This site may display advertising served through Google AdSense and other third-party ad vendors. When it does, I earn revenue if those ads are shown or clicked.",
              "I do not choose the individual adverts, I do not vet the advertisers, and their appearance here is not a recommendation. Ad placement never influences what I write — an article recommending Laravel over WordPress says that because of project experience, not because of what is in the ad slot beside it.",
              <>How advertising cookies work, and how to switch personalised ads off, is set out in the <a className={link} href="/privacy-policy/">privacy policy</a>.</>
            ]
          },
          {
            heading: "Affiliate and commercial relationships",
            body: [
              "If an article ever contains an affiliate link, or covers a product I have a commercial relationship with, that will be stated plainly in the article itself — not buried on this page.",
              "As of the date at the top, the only commercial content on this site is my own services and third-party advertising as described above."
            ]
          },
          {
            heading: "Limitation",
            body: [
              <>To the fullest extent permitted by law, neither I nor ARS Developer Ltd (registered in England and Wales, company number 17039150) accept liability for loss arising from reliance on anything published here. The full position is in the <a className={link} href="/terms/">terms of use</a>.</>
            ]
          }
        ]}
        footNote={
          <>
            Spotted something inaccurate or out of date? Tell me and I will fix it — email{" "}
            <a className={link} href="mailto:info@anastanveer.com">info@anastanveer.com</a>. Corrections are welcome, not an inconvenience.
          </>
        }
      />
      <CTASection
        title="Want advice about your actual situation?"
        text="General articles only go so far. Send me your specifics and I&apos;ll tell you what I would do — and whether you even need to build anything."
      />
    </>
  );
}
