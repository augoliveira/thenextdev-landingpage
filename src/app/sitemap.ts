import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://glazingdesign.com.br",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1
    },
    {
      url: "https://glazingdesign.com.br/quem-somos",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: "https://glazingdesign.com.br/servicos",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5
    }
  ];
}
