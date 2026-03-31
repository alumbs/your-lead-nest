/**
 * Shared types for DataForSEO API integrations.
 */

/** Client configuration. */
export interface DataForSEOConfig {
  login: string;
  password: string;
}

/** Generic API response wrapper. */
export interface DataForSEOResponse<T = unknown> {
  version: string;
  status_code: number;
  status_message: string;
  time: string;
  cost: number;
  tasks_count: number;
  tasks_error: number;
  tasks: DataForSEOTask<T>[];
}

export interface DataForSEOTask<T = unknown> {
  id: string;
  status_code: number;
  status_message: string;
  time: string;
  cost: number;
  result_count: number;
  path: string[];
  data: Record<string, unknown>;
  result: T[] | null;
}

/** SERP API result item (Google Organic). */
export interface SerpOrganicItem {
  type: "organic";
  rank_group: number;
  rank_absolute: number;
  domain: string;
  title: string;
  url: string;
  description: string;
  breadcrumb: string;
}

/** SERP API result for a regular search. */
export interface SerpRegularResult {
  keyword: string;
  type: string;
  se_domain: string;
  location_code: number;
  language_code: string;
  check_url: string;
  datetime: string;
  spell: unknown;
  item_types: string[];
  items_count: number;
  items: SerpOrganicItem[];
}

/** Keywords Data API - Search Volume result. */
export interface KeywordSearchVolumeResult {
  keyword: string;
  location_code: number;
  language_code: string;
  search_partners: boolean;
  competition: string;
  competition_index: number;
  search_volume: number;
  low_top_of_page_bid: number;
  high_top_of_page_bid: number;
  cpc: number;
  monthly_searches: { year: number; month: number; search_volume: number }[];
}

/** Keywords Data API - Keyword Suggestions result. */
export interface KeywordSuggestionResult {
  keyword: string;
  location_code: number;
  language_code: string;
  search_partners: boolean;
  competition: string;
  competition_index: number;
  search_volume: number;
  cpc: number;
}

/** Backlinks Summary result. */
export interface BacklinksSummaryResult {
  target: string;
  total_backlinks: number;
  total_referring_domains: number;
  total_referring_pages: number;
  rank: number;
  backlinks_spam_score: number;
}
