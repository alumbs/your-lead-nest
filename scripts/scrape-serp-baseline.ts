/**
 * Run Google SERP baseline via DataForSEO for Winnipeg keyword rankings.
 *
 * Usage:
 *   DATAFORSEO_LOGIN=... DATAFORSEO_PASSWORD=... npx tsx scripts/scrape-serp-baseline.ts
 *
 * Output:
 *   data/serp-baseline-<timestamp>.json
 *   data/serp-baseline-<timestamp>.csv
 */

import * as fs from "fs";
import * as path from "path";
import { createDataForSEOClient } from "../lib/dataforseo/client";
import { serpSearch } from "../lib/dataforseo/serp";

const LOGIN = process.env.DATAFORSEO_LOGIN ?? "sam@yourleadnest.com";
const PASSWORD = process.env.DATAFORSEO_PASSWORD ?? "467781010def5862";

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

interface SerpBaselineRow {
  query: string;
  position: number;
  url: string;
  title: string;
  featuredSnippet: string;
  featuredSnippetContent: string;
  organicOrPaid: string;
}

function exportToCsv(rows: SerpBaselineRow[], outputDir: string, filename: string): string {
  fs.mkdirSync(outputDir, { recursive: true });
  const filePath = path.join(outputDir, filename);

  const headers: (keyof SerpBaselineRow)[] = [
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
      const val = row[h];
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

function exportToJson(rows: SerpBaselineRow[], outputDir: string, filename: string): string {
  fs.mkdirSync(outputDir, { recursive: true });
  const filePath = path.join(outputDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(rows, null, 2), "utf-8");
  console.log(`[serp] Exported ${rows.length} rows to ${filePath}`);
  return filePath;
}

async function main() {
  const client = createDataForSEOClient({ login: LOGIN, password: PASSWORD });

  console.log(`Running SERP baseline via DataForSEO for ${WINNIPEG_SEO_QUERIES.length} keywords...\n`);

  const allRows: SerpBaselineRow[] = [];
  let totalCost = 0;

  for (const keyword of WINNIPEG_SEO_QUERIES) {
    console.log(`  Querying: "${keyword}"`);
    try {
      const result = await serpSearch(client, {
        keyword,
        locationName: "Winnipeg,Manitoba,Canada",
        languageCode: "en",
        depth: 10,
      });

      if (!result || !result.items) {
        console.log(`    No results for "${keyword}"`);
        continue;
      }

      // Check for featured snippet
      const featuredSnippetItem = (result.items as any[]).find(
        (item) => item.type === "featured_snippet",
      );

      for (const item of result.items as any[]) {
        const isOrganic = item.type === "organic";
        const isPaid = item.type === "paid";
        const isFeaturedSnippet = item.type === "featured_snippet";

        if (!isOrganic && !isPaid && !isFeaturedSnippet) continue;

        allRows.push({
          query: keyword,
          position: item.rank_group ?? item.rank_absolute ?? 0,
          url: item.url ?? "",
          title: item.title ?? "",
          featuredSnippet: isFeaturedSnippet ? "yes" : featuredSnippetItem ? "yes (other result)" : "no",
          featuredSnippetContent: isFeaturedSnippet ? (item.description ?? "") : "",
          organicOrPaid: isPaid ? "paid" : "organic",
        });
      }

      console.log(`    Found ${result.items_count} items`);
    } catch (err) {
      console.error(`    Error for "${keyword}":`, err);
    }
  }

  console.log(`\nTotal rows: ${allRows.length}`);

  const ts = new Date().toISOString().replace(/[:.]/g, "-");
  const outputDir = "data";

  exportToJson(allRows, outputDir, `serp-baseline-${ts}.json`);
  exportToCsv(allRows, outputDir, `serp-baseline-${ts}.csv`);

  // Print summary
  const queryStats = new Map<string, number>();
  for (const row of allRows) {
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
