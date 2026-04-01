import { MetadataRoute } from "next";

const baseUrl = "https://fondspara.se";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: "daily" as const },
    { url: `${baseUrl}/fonder`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/fonder/basta-indexfonder`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/isk`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/jamforelser`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/jamforelser/avanza-vs-nordnet`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/guider`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/guider/borja-fondspara`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/om-oss`, priority: 0.5, changeFrequency: "yearly" as const },
  ];

  return staticPages.map(({ url, priority, changeFrequency }) => ({
    url,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
