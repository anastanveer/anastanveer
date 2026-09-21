/**
 * Section headings for the service+city pages, derived from what each page is
 * actually about.
 *
 * Every one of these ~90 pages used to carry the same five headings, word for
 * word: "Problem-solving service", "Problems this service solves", "Features
 * delivered", "Best fit for", "Practical full-stack delivery with business
 * context." Open three of them side by side and only the city name moved. That
 * is the shape Google calls scaled content, and it is what AdSense rejected the
 * site for twice.
 *
 * Swapping a noun into a fixed sentence would be the same fault in new clothes,
 * so the *sentence* changes too: pages are grouped by what kind of thing they
 * sell — a platform, a capability, a role, or a fix — and each group phrases its
 * sections differently. Within a group the subject and the place still vary, so
 * no two pages read alike.
 */

export type ServiceKind = "platform" | "capability" | "role" | "fix";

export interface ServiceHeadings {
  eyebrow: string;
  problems: string;
  features: string;
  bestFor: string;
  delivery: string;
}

/** Trailing place name in a nav label, e.g. "PHP Developer Dubai" → "Dubai". */
const PLACES = [
  "Abu Dhabi", "Dubai", "Sharjah", "Ajman", "UAE",
  "London", "Manchester", "Birmingham", "Leeds", "Glasgow", "Edinburgh", "Bristol", "Sheffield", "UK",
  "Toronto", "Vancouver", "Calgary", "Ottawa", "Montreal", "Edmonton", "Canada",
  "Sydney", "Melbourne", "Brisbane", "Adelaide", "Perth", "Australia"
];

export function splitLabel(navLabel: string): { subject: string; place: string } {
  const place = PLACES.find((p) => navLabel.endsWith(` ${p}`)) ?? "";
  const subject = place ? navLabel.slice(0, -(place.length + 1)).trim() : navLabel.trim();
  return { subject, place };
}

/**
 * A page sells one of four things, and each wants different questions answered.
 * Someone searching a platform wants to know where that platform goes wrong;
 * someone searching a capability wants to know what it has to do; someone
 * searching a role wants to know how the person works.
 */
/**
 * Which market a page targets. The "role" pages — web developer in {city} — are the
 * hardest to tell apart, because on the surface they sell the same thing everywhere.
 * What genuinely differs is the market: a Dubai build hits Telr/PayTabs and Arabic
 * because Shopify Payments is not available in the UAE; a UK one hits VAT and GDPR;
 * a Canadian one hits CASL and bilingual requirements. Heading by region says
 * something true instead of swapping a city name into a fixed sentence.
 */
export type Region = "uae" | "uk" | "canada" | "australia" | "none";

export function regionOf(slug: string): Region {
  if (/(dubai|uae|sharjah|abu-dhabi|ajman|fujairah|ras-al-khaimah|umm-al-quwain|deira|jlt|marina|business-bay|al-furjan|al-rashidiya|downtown)/.test(slug)) return "uae";
  if (/(^|-)(uk|london|manchester|birmingham|leeds|glasgow|edinburgh|bristol|sheffield)$/.test(slug) || /-(uk|london|manchester|birmingham|leeds|glasgow|edinburgh|bristol|sheffield)$/.test(slug)) return "uk";
  if (/-(canada|toronto|vancouver|calgary|ottawa|montreal|edmonton)$/.test(slug)) return "canada";
  if (/-(australia|sydney|melbourne|brisbane|adelaide|perth)$/.test(slug)) return "australia";
  return "none";
}

export function serviceKind(slug: string): ServiceKind {
  if (/(speed|optimization|optimisation|migration|fix|maintenance|audit|seo)/.test(slug)) return "fix";
  if (/(developer|programmer|engineer|freelance)/.test(slug)) {
    return /(web-developer|fullstack|full-stack|freelance)/.test(slug) ? "role" : "platform";
  }
  if (/(development|services|integration|solutions)/.test(slug)) return "capability";
  return "capability";
}

export function serviceHeadings(navLabel: string, slug: string): ServiceHeadings {
  const { subject, place } = splitLabel(navLabel);
  const kind = serviceKind(slug);
  const where = place ? ` in ${place}` : "";
  // "PHP Developer" → "PHP"; "Dashboard Development" → "Dashboard"
  const thing = subject.replace(/\s+(Developer|Development|Programmer|Engineer|Services|Solutions)$/i, "").trim() || subject;

  switch (kind) {
    case "platform":
      return {
        eyebrow: place ? `${thing} work${where}` : `${thing} work`,
        problems: `Where ${thing} projects go wrong`,
        features: `What a ${thing} build includes`,
        bestFor: `Teams this suits`,
        delivery: `How ${thing} work gets done here`
      };
    case "capability":
      return {
        eyebrow: place ? `${thing}${where}` : thing,
        problems: `What businesses come to me with`,
        features: `What a ${thing.toLowerCase()} has to do`,
        bestFor: `Where this pays for itself`,
        delivery: `From first call to live`
      };
    case "role": {
      // Same job, genuinely different constraints per market — so the sections ask
      // the question that market actually asks.
      const byRegion: Record<string, Omit<ServiceHeadings, "eyebrow">> = {
        uae: {
          problems: `What usually breaks on UAE websites`,
          features: `Built for the UAE from the start`,
          bestFor: `Who I build for here`,
          delivery: `Payments, Arabic and hosting, handled`
        },
        uk: {
          problems: `Where UK business sites fall short`,
          features: `What a UK build has to cover`,
          bestFor: `Who this suits`,
          delivery: `VAT, GDPR and going live`
        },
        canada: {
          problems: `What Canadian businesses run into`,
          features: `What is included`,
          bestFor: `Best fit`,
          delivery: `CASL, bilingual and launch`
        },
        australia: {
          problems: `Common faults on Australian sites`,
          features: `What the build covers`,
          bestFor: `Suited to`,
          delivery: `GST, hosting and timezone`
        },
        none: {
          problems: `Why the last build did not work`,
          features: `What you get`,
          bestFor: `Who this is for`,
          delivery: `How I work with you`
        }
      };
      return { eyebrow: place ? `Hiring${where}` : "Hiring", ...byRegion[regionOf(slug)] };
    }
    case "fix":
    default:
      return {
        eyebrow: place ? `Fixing what is already live${where}` : "Fixing what is already live",
        problems: `What is costing you now`,
        features: `What gets changed`,
        bestFor: `Worth doing when`,
        delivery: `What happens after the fix`
      };
  }
}
