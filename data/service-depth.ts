/**
 * Substantive, page-specific writing for the service pages that were running thin.
 *
 * Every service page was built from the same shape — a ~90-word intro, a ~50-word
 * delivery note, four problems, eight features, nine "best for" bullets, four FAQs —
 * which left them at 539-589 words and reading like variations of one document. That
 * is both why AdSense called the site low value and why a page like
 * /dashboard-development-dubai sits at position 6.5 and still takes no clicks: there
 * is not enough on it to be worth landing on.
 *
 * What follows is the part that could not be templated: what actually goes wrong in
 * each of these jobs, and what doing it properly involves. It is written per service,
 * from the technical and market realities of that service — UAE payment gateways,
 * Core Web Vitals thresholds, API retry semantics — rather than assembled from
 * interchangeable sentences.
 */

export interface DepthSection {
  heading: string;
  body: string[];
}

export const serviceDepth: Record<string, DepthSection[]> = {

  "laravel-developer-dubai": [
    {
      heading: "What Laravel is actually the right answer for",
      body: [
        "Laravel earns its place when a business has rules of its own. Approval chains, pricing that depends on customer and quantity, jobs that move through stages, permissions that differ by role, integrations with accounting or a payment gateway — these are the things that turn into a fight against a page builder and a straightforward afternoon in a framework.",
        "It is the wrong answer for a five-page brochure site, and saying so costs a project but saves a client money. If the requirement is a homepage, an about page and a contact form, WordPress will do it faster and cheaper, and the honest recommendation is to use it."
      ]
    },
    {
      heading: "What a Laravel project in Dubai costs, and why quotes differ so widely",
      body: [
        "The spread on the same brief here is wide enough to be confusing — a system quoted at AED 12,000 by one developer and AED 60,000 by another is normal, and the difference is rarely quality of code. It is scope, and specifically who is absorbing the unknowns.",
        "The low quote usually excludes the integrations, assumes content is supplied, counts one round of changes, and prices the happy path. The higher one has priced error handling, a staging environment, data migration from whatever the business runs today, and the two weeks at the end that every project has. Neither is dishonest; they are answering different questions. Ask any quote what happens when the payment gateway returns an error, and the gap explains itself."
      ]
    },
    {
      heading: "How to judge a Laravel developer before you commit",
      body: [
        "Ask to see a system, not a website — something with a login, roles, and data that changes. Anyone can show a landing page. Ask how they handle database migrations, because a developer who edits the live database by hand will eventually lose you data. Ask what happens when an external API is down, and listen for whether they have thought about it at all.",
        "Ask about the Laravel version they build on and how upgrades are handled. A system built on a version that left support two years ago is a security liability that grows quietly. And ask who holds the code: a private repository you own, or a folder on their laptop."
      ]
    },
    {
      heading: "Building for the UAE specifically",
      body: [
        "Shopify Payments is unavailable here, so ecommerce and checkout flows run through Telr, PayTabs, Network International or Stripe depending on the entity — each with its own onboarding and settlement behaviour that has to be built around rather than assumed.",
        "Then VAT at five per cent with compliant tax invoices carrying the TRN, Arabic alongside English where the audience expects it — which reverses the entire layout rather than translating strings — and hosting close enough to the region that the latency does not undo the work. None of it is difficult, but a system built on European defaults needs all of it retrofitted."
      ]
    },
    {
      heading: "Working with a developer rather than an agency",
      body: [
        "An agency gives you a process, a project manager and cover when someone is unavailable, and you pay for that structure. Working directly means the person writing the code is the person on the call, which removes a translation layer that is usually where requirements get lost.",
        "The honest trade is capacity. One developer cannot run four projects at the pace four developers can, so timelines are longer on large builds, and that should be in the plan rather than discovered in month two. For most single systems in the range these projects sit in, the direct route is faster in practice because the decisions are made by the person who will implement them."
      ]
    }
  ],

  "php-developer-dubai": [
    {
      heading: "PHP in 2026 is not the PHP people remember",
      body: [
        "The objection to PHP is usually a memory of PHP 5 — loose typing, functions with inconsistent argument order, code that grew rather than was designed. PHP 8 has typed properties, enums, match expressions, named arguments, fibers and a JIT compiler, and it is meaningfully faster than the version most of those opinions were formed on.",
        "What matters commercially is that it runs almost everywhere, hosting is cheap and available regionally, and the pool of people who can maintain it is large. A system nobody local can pick up is a liability regardless of how fashionable the language is."
      ]
    },
    {
      heading: "Inheriting somebody else's PHP",
      body: [
        "A good share of this work is not new builds. It is a system that runs the business, was written by someone no longer reachable, has no tests, and cannot be touched without something breaking elsewhere. The first job is not to rewrite it — it is to make it safe to change.",
        "That means getting it into version control if it is not already, standing up a staging copy so changes are not tested in production, adding logging where things fail silently, and getting the dependencies to a supported version. Only then does feature work become predictable rather than a gamble. A developer who opens with \"it needs a full rebuild\" before reading the code is quoting the expensive answer first."
      ]
    },
    {
      heading: "Where PHP applications actually go wrong",
      body: [
        "Almost always the database, and almost always the same way: a query inside a loop. A page that runs one query to fetch fifty records and then one more per record to fetch its details issues fifty-one queries where two would do, and it degrades exactly as the business grows. It is the single most common cause of a system that was fine last year and is slow now.",
        "After that: no indexes on the columns people actually filter by, sessions and cache on the filesystem so nothing can scale beyond one server, and secrets committed to the repository. None of these are exotic, and all of them are cheaper to fix than to live with."
      ]
    },
    {
      heading: "Security, and the parts that matter in practice",
      body: [
        "Prepared statements everywhere, so user input cannot become SQL. Output escaped by the template engine rather than by hand. CSRF tokens on every state-changing form. File uploads validated by actual content rather than by the extension in the filename. Password hashing with the language's own functions, never a home-made scheme.",
        "For most small-business systems in this region, the realistic threat is not a targeted attacker — it is an automated scanner finding an abandoned dependency with a published vulnerability. Keeping the stack current is the single highest-value security measure available, and it is a maintenance decision rather than a technical one."
      ]
    },
    {
      heading: "Knowing when PHP is the wrong tool",
      body: [
        "It is a poor fit for anything that needs to hold thousands of open connections at once — live chat, real-time collaboration, streaming telemetry. Node or Go suits that shape better, and pretending otherwise produces a system that fights its runtime.",
        "It is also not the answer when the requirement is genuinely a spreadsheet, which happens more often than software people like to admit. A business running comfortably on a shared sheet does not always need an application, and the useful advice is sometimes to fix the sheet."
      ]
    }
  ],

  "wordpress-developer-dubai": [
    {
      heading: "WordPress is a good answer until it suddenly is not",
      body: [
        "For a brochure site, a blog, a small catalogue or anything where the client needs to edit content without calling a developer, WordPress is hard to beat: fast to build, cheap to host, and a system most people already understand.",
        "The line is crossed when the business logic gets specific. Multi-step approvals, pricing that depends on who is logged in, stock synchronised with another system, role permissions that do not map to WordPress's own — each is possible with enough plugins, and each plugin adds a dependency, a subscription and a way for an update to break the site. Around the fourth such requirement, a framework is cheaper."
      ]
    },
    {
      heading: "Plugins are the thing that goes wrong",
      body: [
        "Almost every compromised or broken WordPress site traces back to a plugin — abandoned by its author, updated with a breaking change, or simply one of thirty each loading assets on every page. A site running forty plugins is not forty times more capable; it is forty separate things that can fail on someone else's schedule.",
        "So each one has to earn its place: is it actively maintained, when was it last updated, how many sites depend on it, and could twenty lines in the theme do the same job without a subscription. Most page-builder installations can drop half their plugins and get measurably faster without losing anything a visitor sees."
      ]
    },
    {
      heading: "Speed, which on WordPress is mostly self-inflicted",
      body: [
        "Sites here routinely ship four megabytes of images to a phone because a photograph was uploaded at camera resolution and displayed at 400 pixels. Add a page builder that loads its entire framework on every page, a slider nobody scrolls past, three analytics tags and a chat widget, and the result is a site that takes eight seconds on a mobile connection.",
        "Fixing it rarely requires a rebuild. Correctly sized images in a modern format, caching and compression configured properly, a hosting account in or near the region, and an audit of what is loading on pages that do not need it usually gets a site into acceptable Core Web Vitals without touching the design."
      ]
    },
    {
      heading: "Keeping it alive after launch",
      body: [
        "WordPress core, themes and plugins publish security updates constantly, and a site nobody updates is a site waiting to be defaced by a scanner. But updating blindly on a live site is how a business discovers its checkout is broken on a Saturday.",
        "Maintenance that works looks like this: a staging copy where updates are applied and checked first, backups that are actually restored occasionally to prove they work, uptime monitoring so you hear about an outage before a customer does, and a record of what changed and when. It is unglamorous and it is the difference between a site that runs for five years and one that is rebuilt every eighteen months."
      ]
    },
    {
      heading: "WooCommerce in the UAE",
      body: [
        "WooCommerce is viable here and gives more control than Shopify over checkout and pricing logic, at the cost of owning the hosting, security, PCI scope and updates yourself. That trade is fine for a business with someone responsible for it and poor for one without.",
        "Practically it means a local payment gateway — Telr, PayTabs or Stripe — rather than the defaults the plugin assumes, VAT at five per cent configured to produce compliant invoices, and hosting sized for a real catalogue rather than the cheapest shared plan. A WooCommerce store on a two-dollar host is the most common version of a store that does not work."
      ]
    }
  ],
  "dashboard-development-dubai": [
    {
      heading: "Most dashboards fail before a line of code is written",
      body: [
        "The failure is almost always the same: the dashboard is specified as a list of charts rather than a list of decisions. Someone asks for revenue, orders, users and a map, gets all four, and then nobody opens it after the second week — because none of those numbers told anyone what to do differently on a Tuesday morning.",
        "So the first conversation is not about charts. It is about the three or four decisions the business actually makes on a recurring basis — which jobs are at risk of missing their deadline, which customers have stopped ordering, whether this month covers payroll — and what a person would need to see to make each one in under a minute. Everything on the screen has to earn its place against that list."
      ]
    },
    {
      heading: "Where the data really lives",
      body: [
        "In most UAE SMEs the numbers are spread across an accounting package, a spreadsheet somebody maintains by hand, a payment gateway, WhatsApp, and the operations manager's memory. A dashboard that only reads the database tells a partial truth, and a partial truth people can catch out is worse than no dashboard at all.",
        "The build therefore starts by mapping every source, deciding which one is authoritative when two disagree, and being explicit about how fresh each figure is. A number that is four hours old is fine if it is labelled as four hours old. The same number presented as live, when it is not, is how a dashboard loses the room."
      ]
    },
    {
      heading: "Roles, and who is allowed to see what",
      body: [
        "Payroll, margin and individual performance are the three things that cause trouble when the wrong person can see them. Role-based access is not a feature to add later — it shapes the data model, because permissions applied at the interface while the API still returns everything is a leak waiting to be found.",
        "Typically that means an owner view with the full financial picture, a manager view scoped to their own team or branch, and a staff view limited to their own work. Each one is built as a genuinely separate query path rather than the same response with parts hidden in the browser."
      ]
    },
    {
      heading: "Keeping it fast as the data grows",
      body: [
        "A dashboard that is quick against six months of data and unusable against three years is a common outcome, and the cause is usually the same: totals recalculated across the full history on every page load. Aggregates that are rolled up on a schedule, indexes that match the filters people actually use, and pagination on anything that can grow without limit keep it responsive as the business does.",
        "Exports matter more than they look. The first thing many owners do with a dashboard is export it to Excel, and a CSV that breaks on Arabic text or mangles dates undoes the work. Exports are built and tested as a first-class feature, not bolted on."
      ]
    }
  ],

  "api-integration-services": [
    {
      heading: "The integration is the easy half",
      body: [
        "Connecting two systems on a good day is straightforward: read the documentation, send the request, parse the response. What separates an integration that runs for years from one that quietly breaks is everything around that happy path — what happens when the other service is down, slow, rate-limited, or returns something the documentation never mentioned.",
        "Assume every external call will fail eventually, because it will. The question a build has to answer is what the business does in that minute: queue and retry, fall back to a cached value, or stop and tell someone. That decision is different for a payment than it is for a shipping rate, and it belongs in the specification rather than in an exception handler written under pressure."
      ]
    },
    {
      heading: "Retries, and the duplicate charge problem",
      body: [
        "A request that times out has not necessarily failed. It may have succeeded on the other end while the response was lost in transit, and a naive retry then charges the customer twice or creates the order twice. This is the single most common serious bug in integration work.",
        "The fix is idempotency: every outgoing request that changes something carries a key the receiving system uses to recognise a repeat, so retrying is safe. Where a provider does not support idempotency keys, the same protection is built locally — recording the attempt before it is sent and reconciling afterwards, rather than trusting the response alone."
      ]
    },
    {
      heading: "Webhooks over polling, where the provider allows it",
      body: [
        "Polling an API every minute to see whether anything changed burns rate limit, costs money on metered plans, and still delivers the news up to a minute late. A webhook does the opposite: the provider tells you the moment something happens.",
        "The trade is that webhooks arrive out of order, arrive twice, and arrive when the server happens to be restarting. So they are accepted quickly, stored, and processed separately, with a signature check on every one — an unauthenticated webhook endpoint is a public API for changing your data, and it does get found."
      ]
    },
    {
      heading: "Credentials, sandboxes and the day the token expires",
      body: [
        "Keys live in environment configuration, never in the repository, and are separated so that a test environment cannot touch live data. Every provider worth integrating offers a sandbox; the ones that do not get a test double so the integration can be exercised without moving real money.",
        "Tokens expire, certificates lapse and providers deprecate versions on their own schedule. The build includes refresh handling and an alert when a credential is close to expiry, because the alternative is discovering it from a customer on a Sunday."
      ]
    }
  ],

  "freelance-web-developer-dubai": [
    {
      heading: "What actually goes wrong with freelance projects",
      body: [
        "Rarely the code. Far more often it is that nobody wrote down what was being built, the work drifted, the developer and the client each assumed the other was handling content, and the last twenty per cent took as long as the first eighty. Everything below exists to prevent that specific sequence.",
        "The other recurring failure is ownership. A site is built on the developer's hosting, under the developer's domain registrar account, with the developer's Google account attached — and when the relationship ends, the business discovers it does not control its own website. That is not a technical problem, it is an arrangement problem, and it is avoidable on day one."
      ]
    },
    {
      heading: "How the engagement is structured",
      body: [
        "Scope is written down before anything starts: the pages, the functionality, what the client supplies, what happens to requests that arrive later. Work is split into milestones with a payment against each, so neither side is ever far out of pocket, and progress is visible rather than asserted.",
        "Revisions are bounded and named — typically one round after the first preview — because unlimited revisions are unpriceable and end in resentment. Anything beyond that is quoted separately, which keeps it an easy conversation rather than an awkward one."
      ]
    },
    {
      heading: "What to check before hiring anyone, including me",
      body: [
        "Ask to see work that is live, not screenshots, and open it on a phone. Ask who will own the domain, the hosting and the analytics — the answer should be you, in your own accounts. Ask what happens if you need a change six months after launch, and what that costs.",
        "Ask how the site will be handed over: source files, credentials, a written note of what runs where. A developer who cannot describe the handover has not thought past invoice day, and the handover is the part you will care about most in a year."
      ]
    },
    {
      heading: "Working across time zones from Dubai",
      body: [
        "Being in the UAE means a working day that overlaps the UK in the morning and stays open for Gulf clients through the afternoon; Canada catches the early part of the day. For clients elsewhere that means most questions are answered inside one working day rather than bouncing across a week.",
        "It also means understanding the market a Dubai site actually sells into: buyers who message on WhatsApp rather than filling a form, Arabic alongside English where the audience expects it, and payment gateways that work here rather than ones that assume a US merchant account."
      ]
    }
  ],

  "seo-friendly-website-development": [
    {
      heading: "SEO-ready is a build decision, not a later purchase",
      body: [
        "Most of what makes a site rankable is decided while it is being built: whether pages can be crawled, whether each one has a distinct purpose, how fast it renders, and whether the internal links let search engines reach everything. Retrofitting that afterwards costs more than doing it correctly the first time and usually means rebuilding the templates anyway.",
        "The word \"SEO\" then gets sold twice — once as a build feature and again as a monthly retainer. What is actually being sold the second time is content and links, which is genuine work. The technical foundation should already be in place and should not need paying for again."
      ]
    },
    {
      heading: "What is checked before launch",
      body: [
        "Indexability first: robots directives, canonical tags, and whether the sitemap and the pages it lists agree with each other. A sitemap that advertises pages which redirect or return noindex teaches search engines to trust it less.",
        "Then titles and descriptions — distinct per page, within the length that actually displays in results, and describing the page rather than the company. Then structured data, matched to what is visible on the page, because markup describing something a visitor cannot see is ignored at best and penalised at worst."
      ]
    },
    {
      heading: "Internal links decide what gets found",
      body: [
        "A page with no links pointing at it from your own site is the last thing a crawler reaches and the first thing it stops revisiting. On sites with a few dozen articles this is the single most common structural fault: everything links to the homepage and the contact page, and the content nobody links to quietly falls out of the index.",
        "So the link graph is designed rather than left to chance — related content that genuinely relates, category and hub pages that carry real weight, and a check that every published page has more than one route in."
      ]
    },
    {
      heading: "Speed is part of it, and it is measurable",
      body: [
        "Core Web Vitals put numbers on the reader's experience: Largest Contentful Paint for how long before the main thing appears, Cumulative Layout Shift for content that jumps while loading, Interaction to Next Paint for whether the page responds when tapped. Google uses them, and more importantly people leave when they are bad.",
        "They are measured, not estimated — on a real device over a normal connection, not on a fast laptop on office Wi-Fi. What usually costs the most is images shipped far larger than they display, render-blocking scripts in the head, and third-party tags accumulated over years that nobody has audited."
      ]
    }
  ],

  "ecommerce-website-development-dubai": [
    {
      heading: "Payments are the first UAE-specific decision",
      body: [
        "Shopify Payments is not available in the United Arab Emirates, which surprises a lot of first-time store owners and changes the build. A local gateway is required — Telr and PayTabs are the usual choices, Network International and Stripe are viable depending on the entity — and each has its own onboarding, documentation requirements and settlement timing.",
        "Buy-now-pay-later through Tabby or Tamara lifts average order value noticeably in this market and is close to expected in some categories. Cash on delivery is still requested widely in the Gulf, and supporting it properly means order verification and a way to handle refusal at the door, not simply an extra radio button at checkout."
      ]
    },
    {
      heading: "Arabic, and what it actually costs to do properly",
      body: [
        "Arabic is not a translation layer added at the end. It reverses the entire layout — navigation, product grids, form fields, icons that imply direction — and fonts that look right in Latin script frequently do not in Arabic. Product data needs both languages from the start, including variant names and shipping copy, or the store ends up half-translated at the exact moment the customer is deciding.",
        "Whether it is worth doing depends on the audience. For a store selling to UAE nationals and the wider Gulf it usually is. For one selling to the expatriate professional market it is often not, and saying so saves a budget that is better spent on product photography."
      ]
    },
    {
      heading: "Where UAE stores lose the sale",
      body: [
        "Delivery cost and timing shown too late is the most common cause, and it is easily fixed by putting both on the product page rather than three steps into checkout. Sizing is the second, especially in fashion, where a customer who likes the item still will not risk an order they cannot exchange easily.",
        "Then returns. A visible, plainly-worded returns policy near the buy button converts better than the same policy in the footer, because the hesitation happens at the button, not at the footer."
      ]
    },
    {
      heading: "VAT, invoicing and the parts that are not design",
      body: [
        "UAE VAT is five per cent, and a registered business has to issue a compliant tax invoice — TRN, correct breakdown, the right currency. Getting this wrong is a bookkeeping problem that surfaces months later, so the store is configured to produce proper invoices from the first order rather than the first audit.",
        "Shipping integrations with the local carriers, tracking that actually updates, and stock that stays accurate across channels are the difference between a store that runs and one that generates a daily list of things to fix by hand."
      ]
    }
  ],

  "web-developer-uae": [
    {
      heading: "What is different about building for this market",
      body: [
        "The UAE audience is mobile-first to a degree that still surprises people arriving from European markets, and it is WhatsApp-first for enquiries. A site whose only route to contact is a form with eight fields will lose to a competitor with a WhatsApp button, regardless of which looks better.",
        "It is also a market where the buyer may read English, Arabic or both, where the business may need to display a trade licence number, and where payment infrastructure differs from the assumptions most templates are built on. None of this is difficult, but all of it has to be decided rather than inherited from a theme."
      ]
    },
    {
      heading: "Hosting, speed and where the server sits",
      body: [
        "Physical distance costs real milliseconds. A site hosted in the United States and served to Dubai carries a round-trip penalty on every request, and it compounds across the dozens of requests a normal page makes. Regional hosting or a CDN with Gulf presence is the cheapest speed improvement available to most sites here.",
        "That matters commercially because mobile connections in the region vary widely between a fibre-backed office and a phone in a basement car park. Pages are built to be usable on the second, which mostly means being honest about image sizes and about how much JavaScript has to run before anything is readable."
      ]
    },
    {
      heading: "Being found locally",
      body: [
        "For most UAE service businesses, a complete Google Business Profile does more for enquiries than any single change to the website. It carries the map result, the reviews and the call button, and it is free. The website's job is to support it — consistent name, address and phone, service pages that match what the profile claims, and location detail that is real.",
        "Where a business genuinely operates across several emirates, that is worth saying on one well-built page. A separate near-identical page for every emirate is a pattern search engines now discount, and it dilutes the one page that could have ranked."
      ]
    },
    {
      heading: "Compliance and the boring essentials",
      body: [
        "A business site here should carry the legal entity name and trade licence where relevant, a privacy policy that reflects what the site actually collects, and cookie handling that matches the tracking installed. These are not decorative: they are checked by payment providers during onboarding and by clients doing due diligence.",
        "HTTPS everywhere, security headers, no configuration files or logs reachable from the browser, and a platform that is actually kept updated. Most compromised small-business sites in this region are running an abandoned plugin, not facing a sophisticated attacker."
      ]
    }
  ],

  "website-speed-optimization-dubai": [
    {
      heading: "Measured, not guessed at",
      body: [
        "Speed work that starts with opinions ends with a site that feels the same. It starts instead with numbers: Largest Contentful Paint, which is how long before the visitor sees the thing they came for; Cumulative Layout Shift, which catches content jumping while the page loads and causing mis-taps; and Interaction to Next Paint, which is whether the page responds when touched.",
        "Those are measured on a mid-range phone over a normal mobile connection, because that is the visitor. A site that scores well on a laptop on office Wi-Fi and badly in the field has not been tested, it has been flattered."
      ]
    },
    {
      heading: "What is usually actually wrong",
      body: [
        "Images, almost always, and by a wide margin. A photograph exported at full camera resolution and displayed at 400 pixels wide is shipping twenty times the data it needs. Hero images stored as lossless PNG when the content is photographic are routinely ten to thirty times larger than the equivalent WebP at quality no one can distinguish.",
        "Then render-blocking CSS and JavaScript in the head, which hold up the first paint. Then fonts that hide text while they load. Then third-party tags — analytics, chat widgets, pixels — added one at a time over years, each small, collectively dominant. And finally caching headers that are missing, so returning visitors download everything again."
      ]
    },
    {
      heading: "The fixes, in the order that pays",
      body: [
        "Re-encode and correctly size images first, because it is the largest gain for the least risk and it changes nothing about how the site looks. Then caching and compression, which are configuration rather than code. Then defer what is not needed for the first screen, and give fonts a display strategy so text is readable immediately.",
        "Only after those does it become worth restructuring code. Most sites reach acceptable Core Web Vitals without a rebuild, and any proposal that starts with a rebuild before measuring is selling the expensive answer first."
      ]
    },
    {
      heading: "What it is worth",
      body: [
        "Speed is a ranking factor, but the direct commercial effect is larger: people abandon slow pages, and they abandon slow checkouts at a higher rate again. On an ecommerce store the same traffic converting slightly better usually outweighs anything the ranking change delivers.",
        "The work is reported with before-and-after numbers on the same pages and the same conditions, so the result can be checked rather than taken on trust. If a change does not move a number, it does not get claimed."
      ]
    }
  ],

  "shopify-developer-dubai": [
    {
      heading: "Shopify in the UAE, and the payments question",
      body: [
        "Shopify Payments is not available in the United Arab Emirates. Every UAE store therefore runs a third-party gateway — Telr, PayTabs, Network International or Stripe depending on the entity — which means an extra transaction fee on top of Shopify's, a separate onboarding process, and settlement timing that differs from the platform default.",
        "It is worth knowing before choosing the platform, not after. Shopify is still the right answer for most brands here because hosting, security, PCI compliance and updates stop being your problem. But the payment arrangement is a real cost and should be in the numbers from the start."
      ]
    },
    {
      heading: "Theme work, apps, and which to reach for",
      body: [
        "The instinct is to install an app for every requirement, and thirty apps later the store loads in eight seconds because each one injects its own scripts on every page. Many common needs — size guides, badges, bundles, custom fields — are a modest amount of theme code that costs nothing per month and nothing in speed.",
        "Apps earn their place where the logic is genuinely complex or needs maintaining against a moving target: reviews, subscriptions, multi-warehouse inventory, serious ERP integration. The test is whether you would rather own that code or rent it."
      ]
    },
    {
      heading: "The product page decides the sale",
      body: [
        "Most Shopify stores do not have a traffic problem, they have a product-page problem. Variants that are ambiguous, sizing that cannot be checked, delivery cost revealed three steps later, and returns terms hidden in the footer all produce the same outcome: a customer who liked the item and did not buy it.",
        "Fixing that is usually worth more than any increase in visitors, and it is measurable — the drop-off between product view, add to cart and checkout tells you exactly which step is losing people before a single change is made."
      ]
    },
    {
      heading: "Speed on a platform you do not host",
      body: [
        "Shopify runs the infrastructure, so what remains under your control is the theme and what has been added to it. That is where almost all Shopify slowness lives: images at desktop dimensions served to phones, apps still loading scripts for features that were removed months ago, and sliders carrying several megabytes above the fold.",
        "An audit that names specific bytes on specific pages usually finds enough to work on without touching the platform. Where a rebuild is genuinely warranted — normally when a theme has been modified so heavily that changes have become risky — that is said plainly rather than proposed by default."
      ]
    }
  ]
};
