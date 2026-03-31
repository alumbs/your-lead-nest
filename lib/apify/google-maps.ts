/**
 * Google Maps Scraper integration using the compass/crawler-google-places Actor.
 *
 * Scrapes local businesses from Google Maps and outputs structured Lead data.
 */

import { ApifyClient } from "apify-client";
import { runActor } from "./client";
import type { GoogleMapsRawResult, Lead } from "./types";

const GOOGLE_MAPS_ACTOR = "compass/crawler-google-places";

export interface GoogleMapsSearchOptions {
  /** Search queries, e.g. ["plumbers in Winnipeg", "restaurants Winnipeg MB"]. */
  queries: string[];
  /** Max results per query (default: 50). */
  maxResultsPerQuery?: number;
  /** Language for results (default: "en"). */
  language?: string;
  /** Max concurrency for crawling (default: 5). */
  maxConcurrency?: number;
}

/** Transform a raw Google Maps result into a normalized Lead. */
function toFloat(val: unknown): number | null {
  if (val == null) return null;
  const n = Number(val);
  return Number.isFinite(n) ? n : null;
}

function toLead(raw: GoogleMapsRawResult): Lead {
  return {
    businessName: raw.title ?? "Unknown",
    phone: raw.phone ?? null,
    website: raw.website ?? null,
    category: raw.categoryName ?? null,
    address: raw.address ?? null,
    city: raw.city ?? null,
    province: raw.state ?? null,
    postalCode: raw.postalCode ?? null,
    latitude: toFloat(raw.location?.lat),
    longitude: toFloat(raw.location?.lng),
    rating: toFloat(raw.totalScore),
    reviewCount: toFloat(raw.reviewsCount),
    placeId: raw.placeId ?? null,
  };
}

/**
 * Scrape Winnipeg (or any) local businesses from Google Maps.
 *
 * Returns normalized Lead[] ready for downstream use.
 */
export async function scrapeGoogleMaps(
  client: ApifyClient,
  options: GoogleMapsSearchOptions,
): Promise<Lead[]> {
  const {
    queries,
    maxResultsPerQuery = 50,
    language = "en",
    maxConcurrency = 5,
  } = options;

  const searchQueries = queries.map((q) => ({ term: q, maxCrawledPlaces: maxResultsPerQuery }));

  const rawResults = await runActor<GoogleMapsRawResult>(client, {
    actorId: GOOGLE_MAPS_ACTOR,
    input: {
      searchStringsArray: queries,
      maxCrawledPlaces: maxResultsPerQuery,
      language,
      maxConcurrency,
    },
    timeoutSecs: 600,
  });

  const leads = rawResults.map(toLead);

  // Deduplicate by placeId
  const seen = new Set<string>();
  const unique = leads.filter((lead) => {
    const key = lead.placeId ?? `${lead.businessName}|${lead.address}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  console.log(`[google-maps] ${rawResults.length} raw results -> ${unique.length} unique leads`);

  return unique;
}
