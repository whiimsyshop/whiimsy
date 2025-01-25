import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
        url: "https://whiimsy.in/",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
      },
    {
      url: "https://whiimsy.in/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },npn
    {
      url: "https://whiimsy.in/contact-us",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    
  ];
}