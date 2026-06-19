import fs from 'node:fs/promises';

const DATA_PATH = new URL('../src/data/articles.json', import.meta.url);

function extractMetaContent(html, attr, value) {
  const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const patterns = [
    new RegExp(`<meta[^>]*${attr}=["']${escaped}["'][^>]*content=["']([^"']+)["'][^>]*>`, 'i'),
    new RegExp(`<meta[^>]*content=["']([^"']+)["'][^>]*${attr}=["']${escaped}["'][^>]*>`, 'i'),
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) return match[1];
  }
  return '';
}

function extractJsonLdDate(html) {
  const blocks = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  for (const [, block] of blocks) {
    try {
      const json = JSON.parse(block.trim());
      const items = Array.isArray(json) ? json : [json];
      for (const item of items) {
        if (item && typeof item === 'object' && item.datePublished) {
          return String(item.datePublished);
        }
      }
    } catch {
      // Ignore invalid JSON-LD blocks.
    }
  }
  return '';
}

function toIsoDate(value) {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toISOString().slice(0, 10);
}

function decodeHtmlEntities(value) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>');
}

async function syncArticles() {
  const raw = await fs.readFile(DATA_PATH, 'utf8');
  const articles = JSON.parse(raw.replace(/^\uFEFF/, ''));

  for (const article of articles) {
    const response = await fetch(article.url, {
      headers: { 'user-agent': 'Mozilla/5.0' },
      redirect: 'follow',
    });

    if (!response.ok) {
      console.warn(`Skip date update (${response.status}): ${article.title}`);
      continue;
    }

    const html = await response.text();

    const publishedRaw =
      extractMetaContent(html, 'property', 'article:published_time') ||
      extractMetaContent(html, 'name', 'article:published_time') ||
      extractMetaContent(html, 'name', 'publish_date') ||
      extractJsonLdDate(html);

    const publishedDate = toIsoDate(decodeHtmlEntities(publishedRaw));
    if (publishedDate) {
      article.date = publishedDate;
    }

    const imageRaw =
      extractMetaContent(html, 'property', 'og:image') ||
      extractMetaContent(html, 'name', 'og:image');

    if (imageRaw) {
      article.image = decodeHtmlEntities(imageRaw);
    }

    console.log(`${article.title} -> ${article.date}`);
  }

  await fs.writeFile(DATA_PATH, `${JSON.stringify(articles, null, 2)}\n`, 'utf8');
  console.log('Article metadata synced.');
}

syncArticles().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
