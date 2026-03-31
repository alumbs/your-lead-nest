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

/** Configuration for running an Apify Actor. */
export interface ActorRunConfig {
  actorId: string;
  input: Record<string, unknown>;
  /** Optional memory limit in MB (default: 4096). */
  memoryMbytes?: number;
  /** Optional timeout in seconds (default: 300). */
  timeoutSecs?: number;
}
