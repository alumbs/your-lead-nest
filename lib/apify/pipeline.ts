/**
 * Lead data pipeline — transforms, filters, and exports scraped leads.
 *
 * Currently outputs to JSON and CSV. Easy to extend with database writes,
 * CRM pushes (e.g. GoHighLevel), or webhook notifications.
 */

import * as fs from "fs";
import * as path from "path";
import type { Lead } from "./types";

/** Filter leads that have at minimum a business name and phone or website. */
export function filterActionableLeads(leads: Lead[]): Lead[] {
  return leads.filter((lead) => {
    if (!lead.businessName || lead.businessName === "Unknown") return false;
    return lead.phone || lead.website;
  });
}

/** Export leads to a JSON file. Returns the file path. */
export function exportToJson(leads: Lead[], outputDir: string, filename?: string): string {
  fs.mkdirSync(outputDir, { recursive: true });
  const filePath = path.join(outputDir, filename ?? `leads-${Date.now()}.json`);
  fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), "utf-8");
  console.log(`[pipeline] Exported ${leads.length} leads to ${filePath}`);
  return filePath;
}

/** Export leads to a CSV file. Returns the file path. */
export function exportToCsv(leads: Lead[], outputDir: string, filename?: string): string {
  fs.mkdirSync(outputDir, { recursive: true });
  const filePath = path.join(outputDir, filename ?? `leads-${Date.now()}.csv`);

  const headers = [
    "businessName",
    "phone",
    "website",
    "category",
    "address",
    "city",
    "province",
    "postalCode",
    "rating",
    "reviewCount",
  ];

  const csvRows = [headers.join(",")];

  for (const lead of leads) {
    const row = headers.map((h) => {
      const val = lead[h as keyof Lead];
      if (val == null) return "";
      const str = String(val);
      return str.includes(",") || str.includes('"') ? `"${str.replace(/"/g, '""')}"` : str;
    });
    csvRows.push(row.join(","));
  }

  fs.writeFileSync(filePath, csvRows.join("\n"), "utf-8");
  console.log(`[pipeline] Exported ${leads.length} leads to ${filePath}`);
  return filePath;
}
