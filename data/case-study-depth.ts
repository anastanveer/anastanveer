/**
 * The engineering half of each case study.
 *
 * The case studies carried the client's side of the story — requirement, challenge,
 * goal, outcome — and stopped at around 300 words, which made them the thinnest
 * indexed pages on the site and the least convincing part of a portfolio.
 *
 * What was missing was the part a technical reader actually wants: how the thing was
 * built, and which decisions were load-bearing. That is written here from each
 * project's real stack. Nothing about clients, figures or outcomes is added — those
 * belong to the client and are already recorded above on the page. This is only the
 * engineering, which is mine to describe.
 */

export interface CaseDepth {
  heading: string;
  body: string[];
}

export const caseStudyDepth: Record<string, CaseDepth[]> = {
  "trading-platform-prop-firm-dubai": [
    {
      heading: "Money arithmetic never touches a float",
      body: [
        "The first rule on anything that calculates funding, drawdown or payout is that binary floating point is not allowed near it. In PHP, as in most languages, 0.1 + 0.2 does not equal 0.3, and on a platform where a trader checks the number against their own spreadsheet, a rounding artefact in the fourth decimal destroys trust faster than an outage.",
        "Values are held as integers in the smallest unit, or as fixed-precision decimals, with rounding applied once at the point of display and stated explicitly rather than inherited from whatever the template engine happens to do."
      ]
    },
    {
      heading: "The calculator runs on the server, and is mirrored in the browser",
      body: [
        "A calculator implemented only in JavaScript is a calculator anyone can change with the developer console, which matters the moment a figure it produces is used in a decision. The authoritative implementation lives in Laravel; the browser gets a copy so the interface stays instant as inputs change.",
        "Two implementations means they can drift, so the server version is the one of record and the client result is checked against it before anything is submitted. Where they disagree, the server wins and the mismatch is logged — a silent disagreement is worse than a visible error."
      ]
    },
    {
      heading: "Built so the dashboard could arrive later",
      body: [
        "The brief was a conversion-focused platform with dashboards, accounts and payments expected afterwards. That makes the structure the real deliverable: domain logic kept out of controllers, calculation rules in their own service so they can be called by a future API as easily as by a page, and a MySQL schema modelled on the business objects rather than on the current screens.",
        "It is the difference between a site that gets rebuilt when the dashboard is commissioned and one where the dashboard is added on top of what already exists. The second costs more in week one and considerably less in month six."
      ]
    }
  ],

  "business-finance-dashboard-analytics": [
    {
      heading: "Aggregates, not live sums over the full history",
      body: [
        "A finance dashboard that recalculates totals across every transaction on each page load is fast in month one and unusable in year two. Figures that do not change once a period closes are rolled up on a schedule and read from summary tables; only the current open period is computed live.",
        "That keeps response times flat as the data grows, and it makes the numbers reproducible — a closed month shows the same total tomorrow as it does today, which is the whole point of a finance report."
      ]
    },
    {
      heading: "Role-based access enforced in the query, not the view",
      body: [
        "Payroll, margin and individual performance are exactly the figures that cause trouble when the wrong person sees them. Hiding elements in the interface while the API still returns the full payload is not access control; it is a leak with a cosmetic lid.",
        "Each role therefore has its own query path — an owner view with the full picture, a manager view scoped to their branch or team, a staff view limited to their own records. The scope is applied where the data is fetched, so a request that should not see a number never receives it."
      ]
    },
    {
      heading: "Filters and exports treated as real features",
      body: [
        "Report filters are where dashboards become slow, because a filter the schema was not indexed for turns every query into a full scan. The filters people actually use were decided before the indexes were written, rather than added afterwards and patched around.",
        "Export matters more than it looks: the first thing many finance users do is take the report into Excel. A CSV that mangles dates, loses leading zeros on account codes or breaks on Arabic text undoes the work, so exports were built and tested as a deliverable rather than generated as an afterthought."
      ]
    }
  ],

  "shopify-conversion-optimization-size-mapping": [
    {
      heading: "Size data belongs in metafields, not in the description",
      body: [
        "Sizing written into the product description cannot be queried, cannot be reused across a collection and has to be edited by hand on every product. Holding it in Shopify metafields makes it structured data attached to the product: per-variant measurements that the theme can render consistently and the merchant can maintain in bulk.",
        "It also survives a theme change, which a block of HTML pasted into a description does not."
      ]
    },
    {
      heading: "Theme code rather than another app",
      body: [
        "There is an app for size guides, and installing one would have been quicker. It would also have added another script on every page of the store for a feature used on one template — the compounding cost that leaves Shopify stores loading in eight seconds with thirty apps installed.",
        "Implemented as a theme section in Liquid with a small amount of JavaScript, it loads only where it is used, carries no monthly fee, and leaves the merchant owning the code."
      ]
    },
    {
      heading: "Measured at the point where people were leaving",
      body: [
        "Sizing friction shows up in a specific place: strong product-page views, weak add-to-cart, and a return rate concentrated in fit. That is measurable before any change is made, which means the work could be aimed rather than guessed.",
        "The same measurement is what makes the result checkable afterwards. A conversion change claimed without a before-and-after on the same funnel step is an opinion, not a result."
      ]
    },
    {
      heading: "Keeping it fast, because the product page is the one that has to be",
      body: [
        "Anything added to a product template is paid for on the page that decides the sale, so the size logic renders with the page rather than fetching after load — no spinner between a customer wanting a measurement and seeing it.",
        "Measurements come through as metafields in the initial Liquid render, and the interactive part is a small amount of JavaScript that enhances what is already on screen. With the script blocked or still loading, the numbers are visible and the page still works; the interaction is the improvement, not the requirement."
      ]
    },
    {
      heading: "Handed over so the merchant can maintain it",
      body: [
        "A size guide the merchant cannot update is a size guide that is wrong within a season. Measurements live in metafield definitions they can edit from the Shopify admin, in bulk, without touching code or paying anyone to change a number.",
        "The theme code is commented where the mapping logic is non-obvious, and it survives a theme update because it lives in sections rather than in edits scattered through a vendor template."
      ]
    }
  ],

  "erp-operations-workflow-system-dubai": [
    {
      heading: "Workflow as explicit states, not a status column",
      body: [
        "Operations software drifts into chaos when status is a free-text field and any value can follow any other. Each record moves through a defined set of states with defined transitions, so an order cannot be marked delivered before it has been dispatched, and the system can answer what is allowed to happen next.",
        "Enforced in the domain layer rather than in the interface, because the same records are touched by imports, scheduled jobs and eventually an API — all of which bypass the screen a rule was written on."
      ]
    },
    {
      heading: "Who changed what, and when",
      body: [
        "The question an operations system is asked at its worst moment is always the same: who changed this, and when. Every state change records the actor, the timestamp, the previous value and the new one, kept append-only so the history cannot be quietly tidied.",
        "It costs very little to build in from the start and is close to impossible to reconstruct afterwards, which is why it is not treated as a phase-two feature."
      ]
    },
    {
      heading: "Reports that match how the business counts",
      body: [
        "Most reporting disputes are definitional rather than technical — whether a job counts on the day it was booked or the day it was completed, whether cancelled work stays in the total. Those definitions were settled with the business and written into the queries, so two reports of the same period agree.",
        "Built on the same aggregate approach as the rest of the system: periods that have closed are summarised and read back, so month-end reporting does not slow down as the years accumulate."
      ]
    }
  ]
};
