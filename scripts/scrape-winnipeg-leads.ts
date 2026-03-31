/**
 * Scrape Winnipeg local businesses from Google Maps via Apify.
 *
 * Usage:
 *   APIFY_API_TOKEN=your_token npx tsx scripts/scrape-winnipeg-leads.ts
 *
 * Output:
 *   data/leads-<timestamp>.json
 *   data/leads-<timestamp>.csv
 */

import { createApifyClient, scrapeGoogleMaps } from "../lib/apify";
import { filterActionableLeads, exportToJson, exportToCsv } from "../lib/apify/pipeline";

const WINNIPEG_QUERIES = [
  "plumbers in Winnipeg MB",
  "electricians in Winnipeg MB",
  "HVAC services Winnipeg MB",
  "roofing contractors Winnipeg MB",
  "landscaping companies Winnipeg MB",
  "auto repair shops Winnipeg MB",
  "dental clinics Winnipeg MB",
  "restaurants Winnipeg MB",
  "real estate agents Winnipeg MB",
  "cleaning services Winnipeg MB",
];

async function main() {
  const token = process.env.APIFY_API_TOKEN;
  if (!token) {
    console.error("Error: Set APIFY_API_TOKEN environment variable.");
    console.error("  APIFY_API_TOKEN=apify_api_xxx npx tsx scripts/scrape-winnipeg-leads.ts");
    process.exit(1);
  }

  const client = createApifyClient(token);

  console.log(`Scraping ${WINNIPEG_QUERIES.length} categories in Winnipeg...\n`);

  const allLeads = await scrapeGoogleMaps(client, {
    queries: WINNIPEG_QUERIES,
    maxResultsPerQuery: 30,
  });

  const actionable = filterActionableLeads(allLeads);

  console.log(`\nTotal leads: ${allLeads.length}`);
  console.log(`Actionable leads (have phone or website): ${actionable.length}\n`);

  const ts = new Date().toISOString().replace(/[:.]/g, "-");
  const outputDir = "data";

  exportToJson(actionable, outputDir, `leads-${ts}.json`);
  exportToCsv(actionable, outputDir, `leads-${ts}.csv`);

  console.log("\nDone! Check the data/ directory for output files.");
}

main().catch((err) => {
  console.error("Scraping failed:", err);
  process.exit(1);
});
