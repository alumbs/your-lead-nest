/**
 * Shared types for Apify integrations and lead data pipeline.
 */

/** Structured lead data output from any scraper Actor. */
export interface Lead {
  businessName: string;
  phone: string | null;
  website: string | null;
  category: string | null;
  address: string | null;
  city: string | null;
  province: string | null;
  postalCode: string | null;
  latitude: number | null;
  longitude: number | null;
  rating: number | null;
  reviewCount: number | null;
  placeId: string | null;
}

/** Raw result shape from the compass/crawler-google-places Actor. */
export interface GoogleMapsRawResult {
  title?: string;
  phone?: string;
  website?: string;
  categoryName?: string;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  location?: { lat?: number; lng?: number };
  totalScore?: number;
  reviewsCount?: number;
  placeId?: string;
  [key: string]: unknown;
}

/** Raw result shape from the apify/google-search-scraper Actor. */
export interface GoogleSerpRawResult {
  searchQuery?: { term?: string };
  organicResults?: Array<{
    title?: string;
    url?: string;
    description?: string;
    position?: number;
  }>;
  paidResults?: Array<{
    title?: string;
    url?: string;
    description?: string;
    position?: number;
  }>;
  featuredSnippet?: {
    title?: string;
    description?: string;
    url?: string;
  } | null;
  [key: string]: unknown;
}

/** A single SERP ranking row. */
export interface SerpRow {
  query: string;
  position: number;
  url: string;
  title: string;
  featuredSnippet: boolean;
  featuredSnippetContent: string | null;
  organicOrPaid: "organic" | "paid";
}

/** Configuration for running an Apify Actor. */
export interface ActorRunConfig {
  actorId: string;
  input: Record<string, unknown>;
  /** Optional memory limit in MB (default: 4096). */
  memoryMbytes?: number;
  /** Optional timeout in seconds (default: 300). */
  timeoutSecs?: number;
}
