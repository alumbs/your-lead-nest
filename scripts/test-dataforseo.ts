/**
 * Verification script for DataForSEO API integration.
 *
 * Usage:
 *   DATAFORSEO_LOGIN=... DATAFORSEO_PASSWORD=... npx tsx scripts/test-dataforseo.ts
 */

import { createDataForSEOClient } from "../lib/dataforseo/client";
import { serpSearch } from "../lib/dataforseo/serp";
import { keywordSearchVolume } from "../lib/dataforseo/keywords";
import { backlinksSummary } from "../lib/dataforseo/backlinks";

const LOGIN = process.env.DATAFORSEO_LOGIN ?? "sam@yourleadnest.com";
const PASSWORD = process.env.DATAFORSEO_PASSWORD ?? "467781010def5862";

async function main() {
  const client = createDataForSEOClient({ login: LOGIN, password: PASSWORD });

  console.log("\n=== 1. SERP API Test: 'plumber winnipeg' ===\n");
  try {
    const serp = await serpSearch(client, { keyword: "plumber winnipeg" });
    if (serp) {
      console.log(`  Keyword: ${serp.keyword}`);
      console.log(`  Items: ${serp.items_count}`);
      console.log(`  Top 5 results:`);
      const organicItems = (serp.items || []).filter((i: any) => i.type === "organic").slice(0, 5);
      for (const item of organicItems) {
        console.log(`    #${item.rank_group} ${item.domain} — ${item.title}`);
      }
    } else {
      console.log("  No SERP result returned.");
    }
  } catch (err) {
    console.error("  SERP test failed:", err);
  }

  console.log("\n=== 2. Keywords Data API Test: search volume ===\n");
  try {
    const volumes = await keywordSearchVolume(client, {
      keywords: ["plumber winnipeg", "hvac winnipeg", "electrician winnipeg"],
    });
    for (const kw of volumes) {
      console.log(
        `  "${kw.keyword}" — vol: ${kw.search_volume}, cpc: $${kw.cpc?.toFixed(2)}, competition: ${kw.competition}`,
      );
    }
    if (volumes.length === 0) console.log("  No keyword volume data returned.");
  } catch (err) {
    console.error("  Keyword volume test failed:", err);
  }

  console.log("\n=== 3. Backlinks API Test: yourleadnest.com ===\n");
  try {
    const bl = await backlinksSummary(client, "yourleadnest.com");
    if (bl) {
      console.log(`  Target: ${bl.target}`);
      console.log(`  Total backlinks: ${bl.total_backlinks}`);
      console.log(`  Referring domains: ${bl.total_referring_domains}`);
      console.log(`  Rank: ${bl.rank}`);
    } else {
      console.log("  No backlinks data returned (domain may be too new).");
    }
  } catch (err) {
    console.error("  Backlinks test failed:", err);
  }

  console.log("\n=== All tests complete ===\n");
}

main().catch(console.error);
