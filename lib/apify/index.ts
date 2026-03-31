/**
 * Apify integration barrel export.
 *
 * Usage:
 *   import { createApifyClient, scrapeGoogleMaps } from "@/lib/apify";
 */

export { createApifyClient, runActor } from "./client";
export { scrapeGoogleMaps } from "./google-maps";
export { scrapeGoogleSerp } from "./serp";
export { filterActionableLeads, exportToJson, exportToCsv } from "./pipeline";
export type {
  ActorRunConfig,
  GoogleMapsRawResult,
  GoogleSerpRawResult,
  SerpRow,
  Lead,
} from "./types";
export type { GoogleMapsSearchOptions } from "./google-maps";
export type { SerpSearchOptions } from "./serp";
