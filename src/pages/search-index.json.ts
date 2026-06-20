import type { APIRoute } from 'astro';
import { getAllEntries, getEntryUrl } from '../utils/content';

export const GET: APIRoute = async () => {
  const all = await getAllEntries();

  const index = all.map(({ collection, entry }) => {
    const rawBody = (entry as any).body ?? '';
    const stripped = rawBody
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/`[^`\n]*`/g, ' ')
      .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[#*_>~|-]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    return {
      id: `${collection}/${entry.id}`,
      title: entry.data.title,
      description: entry.data.description ?? '',
      body: stripped.slice(0, 2000),
      tags: entry.data.tags ?? [],
      category: entry.data.category ?? 'uncategorized',
      collection,
      url: getEntryUrl(collection, entry.id),
    };
  });

  return new Response(JSON.stringify(index), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=300',
    },
  });
};
