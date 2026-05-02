import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://syllogle.com',
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://syllogle.com/daily',
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://syllogle.com/practice',
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];
}
