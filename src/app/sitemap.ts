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
        url: "https://whiimsy.in/shop",
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
    },
    {
        url: "https://whiimsy.in/services",
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
    },
    {
      url: "https://whiimsy.in/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://whiimsy.in/contact-us",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://whiimsy.in/free-candle",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://whiimsy.in/giveaway",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://whiimsy.in/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://whiimsy.in/cookies",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://whiimsy.in/terms-and-conditions",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://whiimsy.in/return-and-shipping",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    
  ];
}