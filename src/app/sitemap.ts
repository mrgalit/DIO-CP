import type { MetadataRoute } from "next";
import { releases, siteUrl } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    ...releases.map((r) => ({ url: `${siteUrl}/news/${r.slug}`, changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
