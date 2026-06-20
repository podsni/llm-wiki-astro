import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getAllEntries, getEntryUrl } from '../utils/content';

export const GET: APIRoute = async (context) => {
  const all = await getAllEntries();
  all.sort((a, b) => new Date(b.entry.data.updated ?? b.entry.data.date).valueOf() - new Date(a.entry.data.updated ?? a.entry.data.date).valueOf());
  const recent = all.slice(0, 30);

  return rss({
    title: 'LLM Wiki',
    description: 'A personal knowledge base — articles, concepts, research, and digital gardening.',
    site: context.site ?? 'https://llm-wiki.pages.dev',
    items: recent.map(({ collection, entry }) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: new Date(entry.data.updated ?? entry.data.date),
      link: getEntryUrl(collection, entry.id),
      categories: [collection, entry.data.category, ...(entry.data.tags ?? [])],
    })),
    customData: '<language>en-us</language>',
  });
};
