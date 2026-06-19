export type Article = {
  title: string;
  href: string;
  publishedAt: string | null;
  teaser: string;
  category?: string;
  source?: string;
};

// Local article source.
// Update each `href` to the real LinkedIn article URL once you have them.
// The `publishedAt` field can be added in ISO date format: "2025-03-15".
export const articles: Article[] = [
  {
    title: 'The Domain Multiplier: Building Impactful Digital Products Through Deep Collaboration',
    href: '/articles/the-domain-multiplier',
    teaser: 'We are living in an era of unprecedented technological capability, from advanced automation to enterprise generative AI.',
    publishedAt: null,
    category: 'Digital Transformation',
    source: 'LinkedIn',
  },
  {
    title: 'Beyond the Expert: Navigating Complexity in the Age of AI',
    href: '/articles/beyond-the-expert',
    teaser: 'Reflections from applying the Cynefin framework to modern professional challenges in an increasingly complex AI-driven world.',
    publishedAt: null,
    category: 'AI',
    source: 'LinkedIn',
  },
  {
    title: 'The Convergence Storm: Why Playing it Safe is the Greatest Risk to Our Energy Future',
    href: '/articles/the-convergence-storm',
    teaser: 'Insights from SXSW 2026 on why traditional thinking is no longer sufficient in a rapidly shifting energy landscape.',
    publishedAt: null,
    category: 'Energy / Innovation',
    source: 'LinkedIn',
  },
  {
    title: 'The Habits That Shape Leadership Teams',
    href: '/articles/leadership-team-habits',
    teaser: 'Exploring how visible and invisible habits shape decisions, culture, and results within management teams.',
    publishedAt: null,
    category: 'Leadership',
    source: 'LinkedIn',
  },
  {
    title: 'The Power of Mattering: Why Being a "Small Piece" is the Biggest Job We Have',
    href: '/articles/the-power-of-mattering',
    teaser: 'Reflections on contribution, purpose, and the importance of individuals in complex systems and organizations.',
    publishedAt: null,
    category: 'Leadership',
    source: 'LinkedIn',
  },
  {
    title: 'The Words We Choose: Notes from a Technologist on the Continuous Path to Better Communication',
    href: '/articles/the-words-we-choose',
    teaser: 'In a world where language increasingly drives technology, words have become a critical interface for impact.',
    publishedAt: null,
    category: 'Communication',
    source: 'LinkedIn',
  },
  {
    title: 'The Shift from Doing to Leading: Reflections on a Year of Growth',
    href: '/articles/shift-from-doing-to-leading',
    teaser: 'A personal reflection on moving from individual contributor to leadership and what that transformation requires.',
    publishedAt: null,
    category: 'Leadership',
    source: 'LinkedIn',
  },
  {
    title: 'The Curious Explorer: Navigating the Future of Energy and AI with Grit and Patience',
    href: '/articles/the-curious-explorer',
    teaser: 'Exploring emerging digital technologies requires curiosity, patience, and a willingness to embrace uncertainty.',
    publishedAt: null,
    category: 'AI',
    source: 'LinkedIn',
  },
  {
    title: 'Playing the Long Game in Tech: An Infinite Mindset for a World of Endless Solutions',
    href: '/articles/playing-the-long-game',
    teaser: 'Why adopting an infinite mindset is critical in a fast-moving world of emerging digital technologies.',
    publishedAt: null,
    category: 'Technology Strategy',
    source: 'LinkedIn',
  },
];