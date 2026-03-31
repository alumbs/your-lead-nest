/**
 * Google SERP scraper integration via Apify.
 *
 * Uses the "apify/google-search-scraper" Actor to capture Google search
 * result rankings for a set of keyword queries.
 */

import type { ApifyClient } from "apify-client";
import { runActor } from "./client";
import type { GoogleSerpRawResult, SerpRow } from "./types";

export interface SerpSearchOptions {
  queries: string[];
  maxResultsPerQuery?: number;
  countryCode?: string;
  languageCode?: string;
}

function toSerpRows(raw: GoogleSerpRawResult): SerpRow[] {
  const query = raw.searchQuery?.term ?? "unknown";
  const rows: SerpRow[] = [];

  const hasFeaturedSnippet = !!raw.featuredSnippet;
  const snippetUrl = raw.featuredSnippet?.url ?? null;
  const snippetContent = raw.featuredSnippet?.description ?? null;

  for (const item of raw.organicResults ?? []) {
    rows.push({
      query,
      position: item.position ?? rows.length + 1,
      url: item.url ?? "",
      title: item.title ?? "",
      featuredSnippet: hasFeaturedSnippet && item.url === snippetUrl,
      featuredSnippetContent:
        hasFeaturedSnippet && item.url === snippetUrl ? snippetContent : null,
      organicOrPaid: "organic",
    });
  }

  for (const item of raw.paidResults ?? []) {
    rows.push({
      query,
      position: item.position ?? rows.length + 1,
      url: item.url ?? "",
      title: item.title ?? "",
      featuredSnippet: false,
      featuredSnippetContent: null,
      organicOrPaid: "paid",
    });
  }

  return rows;
}

export async function scrapeGoogleSerp(
  client: ApifyClient,
  options: SerpSearchOptions,
): Promise<SerpRow[]> {
  const {
    queries,
    maxResultsPerQuery = 10,
    countryCode = "ca",
    languageCode = "en",
  } = options;

  const rawResults = await runActor<GoogleSerpRawResult>(client, {
    actorId: "apify/google-search-scraper",
    input: {
      queries: queries.join("\n"),
      maxPagesPerQuery: 1,
      resultsPerPage: maxResultsPerQuery,
      countryCode,
      languageCode,
      mobileResults: false,
      saveHtml: false,
      saveHtmlToKeyValueStore: false,
    },
    memoryMbytes: 4096,
    timeoutSecs: 600,
  });

  const allRows: SerpRow[] = [];
  for (const raw of rawResults) {
    allRows.push(...toSerpRows(raw));
  }

  console.log(
    `[serp] Collected ${allRows.length} SERP rows across ${queries.length} queries.`,
  );

  return allRows;
}
