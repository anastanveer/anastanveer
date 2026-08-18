import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { LegalPage } from "@/components/ui/LegalPage";
import { jsonLdForPage, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | How I Handle Your Data",
  description:
    "How I collect, use and protect data on anastanveer.com — contact form enquiries, Google Analytics, Google AdSense and advertising cookies, retention periods, and your rights under GDPR and the UAE PDPL.",
  path: "/privacy-policy"
});

const link = "text-cyan underline underline-offset-4 hover:text-cyan/80 light:text-blue-700 light:hover:text-blue-800";

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={jsonLdForPage("/privacy-policy")} id="privacy-policy-json-ld" />
      <LegalPage
        title="Privacy Policy"
        updated="18 August 2026"
        lead="This is my personal site, so I will keep this plain. Here is exactly what gets collected when you visit, why it exists, how long I keep it, and how to get rid of it if you want to."
        sections={[
          {
            heading: "Who is behind this site",
            body: [
              "I am Anas Tanveer, a full-stack Laravel developer based in Dubai, UAE. I work with clients across the UAE, the UK and Canada, and I trade through ARS Developer Ltd, registered in England and Wales (company number 17039150).",
              <>For anything on this page — a question, a correction, or a request to delete your data — email me at <a className={link} href="mailto:info@anastanveer.com">info@anastanveer.com</a>. It comes straight to me, not a ticket queue.</>
            ]
          },
          {
            heading: "What I actually collect",
            body: [
              "Two things, and they are separate."
            ],
            bullets: [
              <><strong className="text-white light:text-slate-950">What you send me.</strong> If you fill in the contact form or the free website audit form, I receive your name, email, and whatever you write in the message — usually a phone number and a description of your project. You choose what to put in there.</>,
              <><strong className="text-white light:text-slate-950">What your browser reports.</strong> Analytics and advertising tools record things like the pages you viewed, roughly where you are (country or city level), your device and browser, and which site sent you here. This is aggregated. I cannot look at it and identify you by name.</>
            ]
          },
          {
            heading: "Why I collect it",
            body: [
              "Form submissions exist so I can reply to you. That is the whole purpose. I do not add you to a mailing list, I do not sell your details, and I do not pass them to third parties for marketing.",
              "Analytics exists so I know which articles people actually read and which pages waste everyone's time. It is how I decide what to write next. Advertising data exists because this site may display ads, and those ads are served by Google."
            ]
          },
          {
            heading: "Google Analytics",
            body: [
              "I use Google Analytics 4 to understand traffic patterns. It sets cookies that record a randomised identifier for your browser, not your identity. IP addresses are anonymised.",
              <>If you would rather not be counted at all, Google publishes an official browser add-on that blocks it everywhere: <a className={link} href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer noopener">tools.google.com/dlpage/gaoptout</a>.</>
            ]
          },
          {
            heading: "Google AdSense, DoubleClick and advertising cookies",
            body: [
              "This site may display advertising served through Google AdSense. A few things follow from that, and you should know all of them.",
              "Google uses cookies — including the DoubleClick DART cookie — to serve ads based on your previous visits to this site and other sites on the internet. Third-party vendors and ad networks other than Google may also serve ads here, and they may use their own cookies to measure how those ads perform.",
              "I do not control those cookies, I cannot read them, and I do not receive the personal data behind them. What I see is aggregate performance, nothing more."
            ]
          },
          {
            heading: "How to turn personalised ads off",
            body: [
              "You are not stuck with them. Any of these work, and none of them require going through me:"
            ],
            bullets: [
              <>Turn off personalised advertising from Google directly at <a className={link} href="https://www.google.com/settings/ads" target="_blank" rel="noreferrer noopener">google.com/settings/ads</a>.</>,
              <>Opt out of many third-party ad vendors at once via the Digital Advertising Alliance at <a className={link} href="https://www.aboutads.info/choices/" target="_blank" rel="noreferrer noopener">aboutads.info/choices</a>, or the European equivalent at <a className={link} href="https://www.youronlinechoices.eu/" target="_blank" rel="noreferrer noopener">youronlinechoices.eu</a>.</>,
              <>See the full list of vendors and their own policies at <a className={link} href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer noopener">Google&apos;s partner sites page</a>.</>,
              "Or block cookies in your browser settings. The site still works — you will just see less relevant ads."
            ]
          },
          {
            heading: "Cookies in plain terms",
            body: [
              "Cookies here fall into three groups. Essential ones keep the site functioning, such as remembering whether you chose light or dark mode. Analytics ones count visits. Advertising ones are the Google and third-party vendor cookies described above.",
              "Only the first group is genuinely necessary. Clearing or blocking the other two costs you nothing on this site."
            ]
          },
          {
            heading: "How long I keep things",
            body: [
              "Enquiry emails stay in my inbox for up to 24 months, because a project conversation often restarts months later and it helps to have the history. If we end up working together, project correspondence is kept for as long as the business relationship requires, plus whatever UK company law obliges me to retain.",
              "Analytics data follows Google's own retention settings, currently 14 months. Advertising cookie lifetimes are set by Google and the vendors, not by me.",
              "If you ask me to delete your enquiry, I delete it. No retention argument, no forms to fill in."
            ]
          },
          {
            heading: "Your rights",
            body: [
              "I serve clients in the UK and EU from the UAE, so both frameworks apply to how I handle this.",
              "Under the UK GDPR and EU GDPR you can ask for a copy of the data I hold on you, ask me to correct it, ask me to delete it, object to how it is being used, or ask for it in a portable format. Under the UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021) you have broadly equivalent rights of access, correction, deletion and objection.",
              <>In practice all of these go to the same place: email <a className={link} href="mailto:info@anastanveer.com">info@anastanveer.com</a> and tell me what you want. I will respond within 30 days, and usually much sooner. There is no charge.</>
            ]
          },
          {
            heading: "Security, and an honest limit",
            body: [
              "This site is served over HTTPS, form submissions are transmitted encrypted, and I keep the software behind it patched. I do not store your enquiry in a public database.",
              "That said, no method of transmission over the internet is completely secure, and I am not going to claim otherwise. I take reasonable technical measures; I cannot promise the impossible."
            ]
          },
          {
            heading: "Links to other sites",
            body: [
              "Articles here link out to documentation, tools and other people's writing. Once you follow one of those links you are on someone else's site under someone else's privacy policy. I have no control over what they collect and I would encourage you to check before handing over anything sensitive."
            ]
          },
          {
            heading: "Changes to this policy",
            body: [
              "When the tools on this site change, this page changes with them. The date at the top always reflects the last revision. If a change is significant — a new category of data, a new advertising partner — the date moving is your signal to re-read it."
            ]
          }
        ]}
        footNote={
          <>
            Questions about any of this, or want your data removed? Email{" "}
            <a className={link} href="mailto:info@anastanveer.com">info@anastanveer.com</a> or message{" "}
            <a className={link} href="https://wa.me/971542435418" target="_blank" rel="noreferrer noopener">+971 54 243 5418</a> on WhatsApp. A real person reads it.
          </>
        }
      />
      <CTASection
        title="Prefer to just talk it through?"
        text="If you have a project in mind — Laravel, WordPress, Shopify, a dashboard or an integration — send me the problem and I&apos;ll reply with a clear direction."
      />
    </>
  );
}
