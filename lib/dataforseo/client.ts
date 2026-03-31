/**
 * Reusable DataForSEO API client wrapper.
 *
 * Usage:
 *   import { createDataForSEOClient } from "@/lib/dataforseo/client";
 *
 *   const client = createDataForSEOClient({
 *     login: process.env.DATAFORSEO_LOGIN!,
 *     password: process.env.DATAFORSEO_PASSWORD!,
 *   });
 *
 *   const results = await client.post("/v3/serp/google/organic/live/advanced", [{ keyword: "plumber winnipeg", location_code: 2124 }]);
 */

import type { DataForSEOConfig, DataForSEOResponse } from "./types";

const BASE_URL = "https://api.dataforseo.com";

export interface DataForSEOClient {
  /** POST request to any DataForSEO endpoint. Body is the task array. */
  post<T = unknown>(path: string, body: unknown[]): Promise<DataForSEOResponse<T>>;
  /** GET request to any DataForSEO endpoint. */
  get<T = unknown>(path: string): Promise<DataForSEOResponse<T>>;
}

/** Create an authenticated DataForSEO client. */
export function createDataForSEOClient(config: DataForSEOConfig): DataForSEOClient {
  const { login, password } = config;
  if (!login || !password) {
    throw new Error(
      "DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD are required. Set them in your environment variables.",
    );
  }

  const authHeader = "Basic " + Buffer.from(`${login}:${password}`).toString("base64");

  async function request<T>(method: string, path: string, body?: unknown): Promise<DataForSEOResponse<T>> {
    const url = `${BASE_URL}${path}`;
    console.log(`[dataforseo] ${method} ${path}`);

    const res = await fetch(url, {
      method,
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`[dataforseo] HTTP ${res.status}: ${text}`);
    }

    const data = (await res.json()) as DataForSEOResponse<T>;

    if (data.status_code !== 20000) {
      throw new Error(`[dataforseo] API error ${data.status_code}: ${data.status_message}`);
    }

    console.log(
      `[dataforseo] OK — ${data.tasks_count} task(s), cost: $${data.cost.toFixed(4)}, time: ${data.time}`,
    );

    return data;
  }

  return {
    post: <T>(path: string, body: unknown[]) => request<T>("POST", path, body),
    get: <T>(path: string) => request<T>("GET", path),
  };
}
