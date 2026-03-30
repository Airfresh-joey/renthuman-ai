import type { MetadataRoute } from "next";
import cities from "@/data/cities.json";
import services from "@/data/services.json";
import states from "@/data/states.json";
import industries from "@/data/industries.json";
import venues from "@/data/venues.json";
import blogs from "@/data/blogs.json";

const BASE_URL = "https://renthuman.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/venues`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/for-clients`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/for-talent`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // City pages
  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${BASE_URL}/city/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // State pages
  const statePages: MetadataRoute.Sitemap = states.map((s) => ({
    url: `${BASE_URL}/state/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Industry pages
  const industryPages: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${BASE_URL}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Venue pages
  const venuePages: MetadataRoute.Sitemap = venues.map((v) => ({
    url: `${BASE_URL}/venue/${v.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Blog pages
  const blogPages: MetadataRoute.Sitemap = blogs.map((b) => ({
    url: `${BASE_URL}/blog/${b.slug}`,
    lastModified: b.date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Service + City combo pages (the big one!)
  const serviceCityPages: MetadataRoute.Sitemap = [];
  for (const service of services) {
    for (const city of cities) {
      serviceCityPages.push({
        url: `${BASE_URL}/${service.slug}/${city.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      });
    }
  }

  return [
    ...staticPages,
    ...servicePages,
    ...cityPages,
    ...statePages,
    ...industryPages,
    ...venuePages,
    ...blogPages,
    ...serviceCityPages,
  ];
}
