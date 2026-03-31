# Apify Integration

## Architecture

```
lib/apify/
  client.ts        — Reusable ApifyClient wrapper + runActor() primitive
  types.ts         — Shared types (Lead, ActorRunConfig, raw result interfaces)
  google-maps.ts   — Google Maps scraper (compass/crawler-google-places)
  pipeline.ts      — Lead filtering + JSON/CSV export
  index.ts         — Barrel exports

scripts/
  scrape-winnipeg-leads.ts — CLI runner for Winnipeg lead generation
```

## Setup

```bash
# Set your Apify API token
export APIFY_API_TOKEN=apify_api_xxxxx

# Run the Winnipeg lead scraper
npm run scrape:winnipeg
```

Output lands in `data/` (gitignored).

## Adding a New Actor

1. **Define the raw result type** in `types.ts`:
   ```ts
   export interface YelpRawResult {
     name?: string;
     phone?: string;
     // ... fields from the Actor's output
   }
   ```

2. **Create a domain module** (e.g. `yelp.ts`):
   ```ts
   import { runActor } from "./client";
   import type { YelpRawResult, Lead } from "./types";

   function toLead(raw: YelpRawResult): Lead { /* map fields */ }

   export async function scrapeYelp(client, options): Promise<Lead[]> {
     const raw = await runActor<YelpRawResult>(client, {
       actorId: "actor-id/yelp-scraper",
       input: { /* actor-specific input */ },
     });
     return raw.map(toLead);
   }
   ```

3. **Export** from `index.ts`.

4. **Create a runner script** in `scripts/` if needed.

All Actor integrations share the same `Lead` type and pipeline utilities (`filterActionableLeads`, `exportToJson`, `exportToCsv`).
