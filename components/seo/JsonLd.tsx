// Native <script> (not next/script) so JSON-LD embeds directly in static HTML.
// AI crawlers (GPTBot, ClaudeBot, PerplexityBot) do not execute JS — they need
// schema in the raw HTML response, not injected client-side.
export function JsonLd({ data, id = "page-json-ld" }: { data: unknown; id?: string }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
