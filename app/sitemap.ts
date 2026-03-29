import { MetadataRoute } from "next";

const BASE_URL = "https://alfasis-expo.com";
const locales = ["en", "tr", "ar", "ru"] as const;

function url(path: string, locale?: string) {
  if (!locale || locale === "en") return `${BASE_URL}${path}`;
  return `${BASE_URL}/${locale}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: url("/", locale),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  }));
}
