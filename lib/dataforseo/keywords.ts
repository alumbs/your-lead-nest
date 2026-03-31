/**
 * Keywords Data API helpers for DataForSEO.
 *
 * Docs: https://docs.dataforseo.com/v3/keywords_data/google_ads/search_volume/live/
 */

import type { DataForSEOClient } from "./client";
import type { KeywordSearchVolumeResult, KeywordSuggestionResult } from "./types";

export interface KeywordVolumeOptions {
  keywords: string[];
  locationCode?: number;
  locationName?: string;
  languageCode?: string;
}

/** Get search volume data for a list of keywords. */
export async function keywordSearchVolume(
  client: DataForSEOClient,
  options: KeywordVolumeOptions,
): Promise<KeywordSearchVolumeResult[]> {
  const {
    keywords,
    locationCode,
    locationName = "Winnipeg,Manitoba,Canada",
    languageCode = "en",
  } = options;

  const task: Record<string, unknown> = {
    keywords,
    language_code: languageCode,
  };

  if (locationCode) {
    task.location_code = locationCode;
  } else {
    task.location_name = locationName;
  }

  const response = await client.post<KeywordSearchVolumeResult>(
    "/v3/keywords_data/google_ads/search_volume/live",
    [task],
  );

  return response.tasks?.[0]?.result ?? [];
}

export interface KeywordSuggestionsOptions {
  keyword: string;
  locationCode?: number;
  locationName?: string;
  languageCode?: string;
}

/** Get keyword suggestions (related keywords) for a seed keyword. */
export async function keywordSuggestions(
  client: DataForSEOClient,
  options: KeywordSuggestionsOptions,
): Promise<KeywordSuggestionResult[]> {
  const {
    keyword,
    locationCode,
    locationName = "Winnipeg,Manitoba,Canada",
    languageCode = "en",
  } = options;

  const task: Record<string, unknown> = {
    keyword,
    language_code: languageCode,
  };

  if (locationCode) {
    task.location_code = locationCode;
  } else {
    task.location_name = locationName;
  }

  const response = await client.post<KeywordSuggestionResult>(
    "/v3/keywords_data/google_ads/keywords_for_keywords/live",
    [task],
  );

  return response.tasks?.[0]?.result ?? [];
}
