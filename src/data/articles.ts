export type Article = {
  title: string;
  href: string;
  publishedAt: string | null;
  teaser: string;
  category?: string;
  source?: string;
};

// Update each href to the real LinkedIn article URL.
// Add publishedAt in ISO format: "2025-03-15".
export const articles: Article[] = [
  {
    title: "The Domain Multiplier: Building Impactful Digital Products Through Deep Collaboration",
    href: "https://www.linkedin.com/pulse/domain-multiplier-building-impactful-digital-products-skj%25C3%25B8nberg-f7ohe/?trackingId=lkuAknmkRCeuwrzNkakOIA%3D%3D",
    teaser: "Enterprises have powerful tech, but real value comes from aligning technical innovation with domain expertise through close collaboration, shared accountability, and product-focused teams.",
    publishedAt: "2026-06-10",
    category: "Digital Transformation",
    source: 'LinkedIn',
  },
];
