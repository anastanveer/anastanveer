import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { LegalPage } from "@/components/ui/LegalPage";
import { jsonLdForPage, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use | Using This Site and Working With Me",
  description:
    "The terms covering anastanveer.com — how enquiries and quotes work, who owns portfolio and blog content, acceptable use, limitation of liability, and the governing law for ARS Developer Ltd (UK company 17039150).",
  path: "/terms"
});

const link = "text-cyan underline underline-offset-4 hover:text-cyan/80 light:text-blue-700 light:hover:text-blue-800";

export default function TermsPage() {
  return (
    <>
      <JsonLd data={jsonLdForPage("/terms")} id="terms-json-ld" />
      <LegalPage
        title="Terms of Use"
        updated="18 August 2026"
        lead="The ground rules for using this site, and what does and does not count as an agreement between us. Written to be read, not to be survived."
        sections={[
          {
            heading: "Who you are agreeing with",
            body: [
              "This site is run by me, Anas Tanveer, a full-stack developer based in Dubai. Commercial work is contracted through ARS Developer Ltd, registered in England and Wales under company number 17039150.",
              "By browsing anastanveer.com you accept the terms below. If you disagree with any of them, the honest answer is to stop using the site — there is nothing hidden here that a workaround would help with."
            ]
          },
          {
            heading: "This site is not a quote",
            body: [
              "Everything on this site — service pages, pricing indications, case studies, article estimates — is information, not an offer. Nothing here forms a contract on its own.",
              "Sending me an enquiry does not create an obligation on either side. Work starts when we have agreed scope, price and timeline in writing, and not before. That agreement, not this website, governs the project."
            ]
          },
          {
            heading: "Enquiries and response times",
            body: [
              "I answer enquiries myself, usually within one business day. I am one person in one timezone (GST, UTC+4), so occasionally that slips — a delayed reply is not a rejection.",
              "I reserve the right to decline work. Usually that is because the project is outside what I am genuinely good at, and you are better served by someone else."
            ]
          },
          {
            heading: "Who owns what on this site",
            body: [
              "The design, code, written articles, images and structure of this site belong to me unless credited otherwise. You are welcome to read it, quote a paragraph with a link back, and share it. You may not republish articles wholesale, pass the writing off as your own, or scrape the content to train or populate another site.",
              "Client work shown in the portfolio and case studies is displayed with permission. The underlying intellectual property in those projects belongs to the clients who commissioned it, not to me and certainly not to visitors. Logos and brand names are the property of their respective owners and appear here to identify work, not to imply endorsement."
            ]
          },
          {
            heading: "Deliverables on paid projects",
            body: [
              "For commissioned work, ownership of the delivered code and assets transfers to you once the project is paid for in full. Before that point I retain it.",
              "That transfer does not cover third-party components — open-source libraries, licensed themes, paid plugins, stock imagery — which stay under their own licences. It also does not cover the general techniques, patterns and reusable tooling I bring to every project; those remain mine to use elsewhere."
            ]
          },
          {
            heading: "About the articles",
            body: [
              <>The blog is general guidance drawn from my own project experience. It is not professional, legal, financial or regulatory advice, and it cannot account for your specific situation. The full position is set out on the <a className={link} href="/disclaimer/">disclaimer page</a>, which forms part of these terms.</>,
              "Cost figures in articles are indicative ranges based on projects I have actually delivered, not fixed prices. Technology moves; an article accurate when written may age badly. Check the publish date."
            ]
          },
          {
            heading: "Acceptable use",
            body: [
              "Ordinary use of this site needs no permission. The following is not welcome:"
            ],
            bullets: [
              "Attempting to breach, probe or disrupt the site, its forms, or the server behind it.",
              "Automated scraping, bulk downloading, or harvesting content or contact details.",
              "Using the contact forms to send spam, malware, or unsolicited sales pitches.",
              "Republishing content as your own, or reselling it in any form.",
              "Anything that misrepresents your identity or your relationship with me or ARS Developer Ltd."
            ]
          },
          {
            heading: "Advertising and third-party content",
            body: [
              "This site may display advertising served by Google AdSense and other third-party vendors. Those ads, and the sites they lead to, are not mine and are not endorsements. If an advertiser treats you badly, that is a matter between you and them.",
              "The same applies to external links in articles. I link to things I found useful at the time; I do not control what happens to them afterwards."
            ]
          },
          {
            heading: "Availability",
            body: [
              "I try to keep the site up and current, but I do not guarantee uninterrupted availability. Hosting fails, deployments break, and pages get rewritten. Content may be changed or removed at any time without notice."
            ]
          },
          {
            heading: "Limitation of liability",
            body: [
              "To the fullest extent permitted by law, neither I nor ARS Developer Ltd accept liability for loss or damage arising from your use of this site or reliance on its content — including lost profits, lost data, business interruption, or decisions taken on the basis of an article.",
              "Where liability cannot lawfully be excluded, it is limited to the amount you have actually paid me, which for a website visitor is nothing. Liability for death or personal injury caused by negligence, or for fraud, is not excluded — the law does not permit that and I would not want to."
            ]
          },
          {
            heading: "Governing law",
            body: [
              "These terms are governed by the laws of England and Wales, consistent with the registration of ARS Developer Ltd, and the courts of England and Wales have exclusive jurisdiction over any dispute arising from this site.",
              "Individual client contracts may specify a different governing law or venue. Where they do, the contract wins over this page for that project."
            ]
          },
          {
            heading: "Changes",
            body: [
              "These terms will change as the site and the business change. The revision date at the top is the authoritative one. Continuing to use the site after a revision means you accept the current version."
            ]
          }
        ]}
        footNote={
          <>
            Anything here unclear, or want something confirmed in writing before we start? Email{" "}
            <a className={link} href="mailto:info@anastanveer.com">info@anastanveer.com</a>. I would rather answer the question up front than argue about it later.
          </>
        }
      />
      <CTASection
        title="Ready to scope something properly?"
        text="Tell me the problem and the constraints, and I&apos;ll come back with scope, price and timeline in writing before any work starts."
      />
    </>
  );
}
