/**
 * Backlinks API helpers for DataForSEO.
 *
 * Docs: https://docs.dataforseo.com/v3/backlinks/summary/live/
 */

import type { DataForSEOClient } from "./client";
import type { BacklinksSummaryResult } from "./types";

/** Get backlink summary for a target domain. */
export async function backlinksSummary(
  client: DataForSEOClient,
  target: string,
): Promise<BacklinksSummaryResult | null> {
  const response = await client.post<BacklinksSummaryResult>(
    "/v3/backlinks/summary/live",
    [{ target }],
  );

  return response.tasks?.[0]?.result?.[0] ?? null;
}
