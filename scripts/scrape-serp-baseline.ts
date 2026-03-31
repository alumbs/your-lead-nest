/**
 * Run Google SERP scraper for Winnipeg keyword ranking baseline.
 *
 * Usage:
 *   APIFY_API_TOKEN=your_token npx tsx scripts/scrape-serp-baseline.ts
 *
 * Output:
 *   data/serp-baseline-<timestamp>.json
 *   data/serp-baseline-<timestamp>.csv
 */

import * as fs from "fs";
import * as path from "path";
import { createApifyClient } from "../lib/apify";
import { scrapeGoogleSerp } from "../lib/apify/serp";
import type { SerpRow } from "../lib/apify/types";

const WINNIPEG_SEO_QUERIES = [
  // Service + Location
  "AI consulting Winnipeg",
  "business automation Winnipeg",
  "lead response software Winnipeg",
  "speed to lead Winnipeg",
  "CRM automation Winnipeg",
  "small business automation Winnipeg",
  // Intent-based
  "how to follow up leads faster Winnipeg",
  "automated lead follow up small business",
  "AI lead response service Canada",
  "Winnipeg marketing automation agency",
  // Competitor/Category
  "GoHighLevel consultant Winnipeg",
  "lead management software Winnipeg",
  "missed call text back Winnipeg",
  "AI sales assistant Winnipeg",
  "business automation software Manitoba",
];

function exportSerpToCsv(rows: SerpRow[], outputDir: string, filename: string): string {
  fs.mkdirSync(outputDir, { recursive: true });
  const filePath = path.join(outputDir, filename);

  const headers = [
    "query",
    "position",
    "url",
    "title",
    "featuredSnippet",
    "featuredSnippetContent",
    "organicOrPaid",
  ];

  const csvRows = [headers.join(",")];

  for (const row of rows) {
    const values = headers.map((h) => {
      const val = row[h as keyof SerpRow];
      if (val == null) return "";
      const str = String(val);
      return str.includes(",") || str.includes('"') || str.includes("\n")
        ? `"${str.replace(/"/g, '""')}"`
        : str;
    });
    csvRows.push(values.join(","));
  }

  fs.writeFileSync(filePath, csvRows.join("\n"), "utf-8");
  console.log(`[serp] Exported ${rows.length} rows to ${filePath}`);
  return filePath;
}

function exportSerpToJson(rows: SerpRow[], outputDir: string, filename: string): string {
  fs.mkdirSync(outputDir, { recursive: true });
  const filePath = path.join(outputDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(rows, null, 2), "utf-8");
  console.log(`[serp] Exported ${rows.length} rows to ${filePath}`);
  return filePath;
}

async function main() {
  const token = process.env.APIFY_API_TOKEN;
  if (!token) {
    console.error("Error: Set APIFY_API_TOKEN environment variable.");
    console.error("  APIFY_API_TOKEN=apify_api_xxx npx tsx scripts/scrape-serp-baseline.ts");
    process.exit(1);
  }

  const client = createApifyClient(token);

  console.log(`Running SERP baseline for ${WINNIPEG_SEO_QUERIES.length} keywords...\n`);

  const rows = await scrapeGoogleSerp(client, {
    queries: WINNIPEG_SEO_QUERIES,
    maxResultsPerQuery: 10,
    countryCode: "ca",
    languageCode: "en",
  });

  console.log(`\nTotal SERP rows: ${rows.length}`);

  const ts = new Date().toISOString().replace(/[:.]/g, "-");
  const outputDir = "data";

  exportSerpToJson(rows, outputDir, `serp-baseline-${ts}.json`);
  exportSerpToCsv(rows, outputDir, `serp-baseline-${ts}.csv`);

  // Print summary
  const queryStats = new Map<string, number>();
  for (const row of rows) {
    queryStats.set(row.query, (queryStats.get(row.query) ?? 0) + 1);
  }
  console.log("\n--- Summary ---");
  queryStats.forEach((count, q) => {
    console.log(`  ${q}: ${count} results`);
  });

  console.log("\nDone! Check the data/ directory for output files.");
}

main().catch((err) => {
  console.error("SERP scraping failed:", err);
  process.exit(1);
});
