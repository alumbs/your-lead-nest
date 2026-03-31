/**
 * DataForSEO integration barrel export.
 *
 * Usage:
 *   import { createDataForSEOClient, serpSearch, keywordSearchVolume } from "@/lib/dataforseo";
 */

export { createDataForSEOClient } from "./client";
export type { DataForSEOClient } from "./client";
export { serpSearch } from "./serp";
export type { SerpSearchOptions } from "./serp";
export { keywordSearchVolume, keywordSuggestions } from "./keywords";
export type { KeywordVolumeOptions, KeywordSuggestionsOptions } from "./keywords";
export { backlinksSummary } from "./backlinks";
export type {
  DataForSEOConfig,
  DataForSEOResponse,
  DataForSEOTask,
  SerpOrganicItem,
  SerpRegularResult,
  KeywordSearchVolumeResult,
  KeywordSuggestionResult,
  BacklinksSummaryResult,
} from "./types";
