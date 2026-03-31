# DataForSEO Integration

## Authentication

DataForSEO uses HTTP Basic Auth. Set these environment variables:

```
DATAFORSEO_LOGIN=sam@yourleadnest.com
DATAFORSEO_PASSWORD=467781010def5862
```

## Usage

```ts
import { createDataForSEOClient, serpSearch, keywordSearchVolume, backlinksSummary } from "@/lib/dataforseo";

const client = createDataForSEOClient({
  login: process.env.DATAFORSEO_LOGIN!,
  password: process.env.DATAFORSEO_PASSWORD!,
});
```

## Available Endpoints (Wrapped)

### 1. SERP API — `serpSearch()`

Live Google organic search results for any keyword + location.

```ts
const result = await serpSearch(client, {
  keyword: "plumber winnipeg",
  locationName: "Winnipeg,Manitoba,Canada", // default
});
// result.items[] → ranked organic results with domain, title, url, description
```

**Use cases:** Rank tracking, competitor position monitoring, SERP feature analysis.
**Cost:** ~$0.002 per task.

### 2. Keywords Data API — `keywordSearchVolume()` / `keywordSuggestions()`

Search volume, CPC, and competition data from Google Ads.

```ts
const volumes = await keywordSearchVolume(client, {
  keywords: ["plumber winnipeg", "hvac winnipeg"],
});
// volumes[] → search_volume, cpc, competition, monthly_searches[]
```

**Use cases:** Keyword research, content planning, identifying high-value local queries.
**Cost:** ~$0.075 per task (batch of keywords).

### 3. Backlinks API — `backlinksSummary()`

Backlink profile summary for any domain.

```ts
const bl = await backlinksSummary(client, "competitor.com");
// bl → total_backlinks, total_referring_domains, rank, spam_score
```

**Use cases:** Competitor backlink analysis, link-building opportunity identification.
**Cost:** Varies by domain size.

### 4. On-Page API (not yet wrapped)

Technical SEO audits — crawl a site and get issues. Available at:
- `POST /v3/on_page/task_post` — start a crawl
- `GET /v3/on_page/summary/{taskId}` — get crawl results

Can be added when needed using `client.post()` directly.

## Rate Limits & Billing

- Pay-per-use model (no monthly minimum)
- Rate limit: 2,000 requests per minute
- All costs are logged to console on each request
- SERP is cheapest (~$0.002/query), Keywords Data is moderate (~$0.075/batch)
- Monitor spend at https://app.dataforseo.com/

## Test Script

```bash
npx tsx scripts/test-dataforseo.ts
```

Runs a SERP query, keyword volume lookup, and backlinks summary to verify connectivity.
