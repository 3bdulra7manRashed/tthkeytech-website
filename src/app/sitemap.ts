import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

const routes = ["", "/services", "/about", "/portfolio", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
