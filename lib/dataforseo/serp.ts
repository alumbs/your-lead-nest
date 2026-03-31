/**
 * SERP API helpers for DataForSEO.
 *
 * Docs: https://docs.dataforseo.com/v3/serp/google/organic/live/advanced/
 */

import type { DataForSEOClient } from "./client";
import type { SerpRegularResult } from "./types";

export interface SerpSearchOptions {
  keyword: string;
  /** DataForSEO location code. 2124 = Canada. Use location_name for convenience. */
  locationCode?: number;
  locationName?: string;
  languageCode?: string;
  /** Number of results to fetch (default 10). */
  depth?: number;
}

/** Run a live SERP query and return the result. */
export async function serpSearch(
  client: DataForSEOClient,
  options: SerpSearchOptions,
): Promise<SerpRegularResult | null> {
  const {
    keyword,
    locationCode,
    locationName = "Winnipeg,Manitoba,Canada",
    languageCode = "en",
    depth = 10,
  } = options;

  const task: Record<string, unknown> = {
    keyword,
    language_code: languageCode,
    depth,
  };

  if (locationCode) {
    task.location_code = locationCode;
  } else {
    task.location_name = locationName;
  }

  const response = await client.post<SerpRegularResult>(
    "/v3/serp/google/organic/live/advanced",
    [task],
  );

  return response.tasks?.[0]?.result?.[0] ?? null;
}
