/**
 * Reusable Apify client wrapper.
 *
 * Usage:
 *   import { createApifyClient, runActor } from "@/lib/apify/client";
 *
 *   const client = createApifyClient(process.env.APIFY_API_TOKEN!);
 *   const items  = await runActor(client, { actorId: "compass/crawler-google-places", input: { ... } });
 *
 * Adding a new Actor:
 *   1. Define its raw result type in types.ts
 *   2. Create a domain-specific module (like google-maps.ts) that calls runActor and maps raw results to Lead[]
 */

import { ApifyClient } from "apify-client";
import type { ActorRunConfig } from "./types";

/** Create an authenticated Apify client. */
export function createApifyClient(token: string): ApifyClient {
  if (!token) {
    throw new Error("APIFY_API_TOKEN is required. Set it in your environment variables.");
  }
  return new ApifyClient({ token });
}

/**
 * Run an Apify Actor and return the dataset items.
 *
 * This is the core primitive all Actor integrations should use.
 * It handles: starting the run, waiting for completion, and fetching results.
 */
export async function runActor<T = Record<string, unknown>>(
  client: ApifyClient,
  config: ActorRunConfig,
): Promise<T[]> {
  const { actorId, input, memoryMbytes = 4096, timeoutSecs = 300 } = config;

  console.log(`[apify] Starting actor "${actorId}"...`);

  const run = await client.actor(actorId).call(input, {
    memory: memoryMbytes,
    timeout: timeoutSecs,
    waitSecs: timeoutSecs,
  });

  if (!run.defaultDatasetId) {
    throw new Error(`[apify] Actor "${actorId}" completed but produced no dataset.`);
  }

  console.log(`[apify] Actor "${actorId}" finished (run ${run.id}). Fetching dataset...`);

  const { items } = await client.dataset(run.defaultDatasetId).listItems();

  console.log(`[apify] Retrieved ${items.length} items from dataset.`);

  return items as T[];
}
