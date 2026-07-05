import type { MetadataRoute } from "next";

const BASE = "https://krivatech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE,                    lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/data`,          lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/ai`,            lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/software`,      lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/operations`,    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/staffing`,      lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/contact`,       lastModified: now, changeFrequency: "yearly",  priority: 0.8 },
  ];
}
