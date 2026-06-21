// Content helpers - single source of truth for the knowledge base.
// All page queries and graph data flow through here.

import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

export const COLLECTIONS = [
  'notes',
  'articles',
  'concepts',
  'people',
  'projects',
  'books',
  'research',
  'timeline',
  'sources',
] as const;

export type CollectionName = typeof COLLECTIONS[number];

export type AnyEntry =
  | CollectionEntry<'notes'>
  | CollectionEntry<'articles'>
  | CollectionEntry<'concepts'>
  | CollectionEntry<'people'>
  | CollectionEntry<'projects'>
  | CollectionEntry<'books'>
  | CollectionEntry<'research'>
  | CollectionEntry<'timeline'>
  | CollectionEntry<'sources'>;

// Pretty labels for the 9 collection types.
export const COLLECTION_LABELS: Record<CollectionName, string> = {
  notes: 'Notes',
  articles: 'Articles',
  concepts: 'Concepts',
  people: 'People',
  projects: 'Projects',
  books: 'Books',
  research: 'Research',
  timeline: 'Timeline',
  sources: 'Sources',
};

export const COLLECTION_DESCRIPTIONS: Record<CollectionName, string> = {
  notes: 'Quick observations, ideas, fragments.',
  articles: 'Long-form essays and tutorials.',
  concepts: 'Definitions, explanations, mental models.',
  people: 'Notable figures worth remembering.',
  projects: 'Active work, side projects, abandoned experiments.',
  books: 'Books read, in progress, or to-read.',
  research: 'Research questions, methodologies, findings.',
  timeline: 'Events, milestones, releases.',
  sources: 'External references: articles, papers, videos.',
};

/**
 * Get all entries across all collections, normalized to a common shape.
 * Filters out drafts in production.
 */
export async function getAllEntries(): Promise<{
  collection: CollectionName;
  entry: AnyEntry;
}[]> {
  const isProd = import.meta.env.PROD;
  const results: { collection: CollectionName; entry: AnyEntry }[] = [];

  for (const collection of COLLECTIONS) {
    const entries = await getCollection(collection);
    for (const entry of entries) {
      if (isProd && entry.data.draft) continue;
      results.push({ collection, entry });
    }
  }

  return results;
}

/**
 * Get all entries for a single collection (drafts filtered in production).
 * Returns the typed CollectionEntry directly (not wrapped).
 */
export async function getEntriesByCollection(collection: CollectionName): Promise<AnyEntry[]> {
  const isProd = import.meta.env.PROD;
  const entries = await getCollection(collection);
  return entries.filter((e) => !(isProd && e.data.draft));
}

/**
 * Get the URL for an entry. URL reflects the collection (e.g. /concepts/llm).
 */
export function getEntryUrl(collection: CollectionName, slug: string): string {
  return `/${collection}/${slug}`;
}

/**
 * Get entry by collection + slug. Returns null if not found.
 */
export async function findEntry(
  collection: CollectionName,
  slug: string,
): Promise<AnyEntry | null> {
  try {
    return (await getEntry(collection, slug)) as AnyEntry;
  } catch {
    return null;
  }
}

/**
 * Get all unique tags across all entries, with counts.
 */
export async function getAllTags(): Promise<{ tag: string; count: number }[]> {
  const all = await getAllEntries();
  const counts = new Map<string, number>();
  for (const { entry } of all) {
    for (const tag of entry.data.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

/**
 * Get all tags for a single collection.
 */
export async function getAllTagsForCollection(collection: CollectionName): Promise<{ tag: string; count: number }[]> {
  const all = await getEntriesByCollection(collection);
  const counts = new Map<string, number>();
  for (const entry of all) {
    for (const tag of (entry.data.tags ?? [])) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

/**
 * Get all unique categories across all entries, with counts.
 */
export async function getAllCategories(): Promise<{ category: string; count: number }[]> {
  const all = await getAllEntries();
  const counts = new Map<string, number>();
  for (const { entry } of all) {
    const cat = entry.data.category;
    counts.set(cat, (counts.get(cat) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count || a.category.localeCompare(b.category));
}

/**
 * Get all categories for a single collection.
 */
export async function getAllCategoriesForCollection(collection: CollectionName): Promise<{ category: string; count: number }[]> {
  const all = await getEntriesByCollection(collection);
  const counts = new Map<string, number>();
  for (const entry of all) {
    const cat = entry.data.category || 'uncategorized';
    counts.set(cat, (counts.get(cat) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count || a.category.localeCompare(b.category));
}

/**
 * Get all entries sorted by date descending.
 */
export async function getRecentEntries(limit?: number) {
  const all = await getAllEntries();
  all.sort(
    (a, b) =>
      new Date(b.entry.data.updated ?? b.entry.data.date).valueOf() -
      new Date(a.entry.data.updated ?? a.entry.data.date).valueOf(),
  );
  return limit ? all.slice(0, limit) : all;
}

/**
 * Compute backlinks: for each entry, find all entries that reference it via `related`.
 * Returns Map<targetSlug, sourceEntries[]>.
 */
export async function computeBacklinks(): Promise<
  Map<string, { collection: CollectionName; entry: AnyEntry }[]>
> {
  const all = await getAllEntries();
  const backlinks = new Map<string, { collection: CollectionName; entry: AnyEntry }[]>();

  for (const { collection: srcCollection, entry: srcEntry } of all) {
    const related = srcEntry.data.related ?? [];
    for (const target of related) {
      // target may be in form "collection/slug" or just "slug"
      const [targetCollection, targetSlug] = target.includes('/')
        ? (target.split('/') as [CollectionName, string])
        : [null, target];

      // Try to find the target entry. If collection hint given, use it; else search all.
      let found: { collection: CollectionName; entry: AnyEntry } | null = null;
      if (targetCollection) {
        const e = await findEntry(targetCollection, targetSlug);
        if (e) found = { collection: targetCollection, entry: e };
      } else {
        for (const c of COLLECTIONS) {
          const e = await findEntry(c, targetSlug);
          if (e) {
            found = { collection: c, entry: e };
            break;
          }
        }
      }

      if (found) {
        const key = `${found.collection}/${found.entry.id}`;
        const list = backlinks.get(key) ?? [];
        list.push({ collection: srcCollection, entry: srcEntry });
        backlinks.set(key, list);
      }
    }
  }

  return backlinks;
}

/**
 * Build graph data (nodes + edges) for visualization.
 * Nodes: every entry. Edges: every `related` link between entries.
 */
export async function getGraphData() {
  const all = await getAllEntries();
  const slugMap = new Map<string, { collection: CollectionName; entry: AnyEntry }>();
  for (const { collection, entry } of all) {
    slugMap.set(`${collection}/${entry.id}`, { collection, entry });
  }

  const nodes = all.map(({ collection, entry }) => ({
    id: `${collection}/${entry.id}`,
    title: entry.data.title,
    collection,
    url: getEntryUrl(collection, entry.id),
    description: entry.data.description,
  }));

  const edges: { source: string; target: string }[] = [];
  for (const { collection: srcCollection, entry: srcEntry } of all) {
    const srcId = `${srcCollection}/${srcEntry.id}`;
    const related = srcEntry.data.related ?? [];
    for (const target of related) {
      const [targetCollection, targetSlug] = target.includes('/')
        ? (target.split('/') as [CollectionName, string])
        : [null, target];

      let targetId: string | null = null;
      if (targetCollection) {
        const e = await findEntry(targetCollection, targetSlug);
        if (e) targetId = `${targetCollection}/${e.id}`;
      } else {
        for (const c of COLLECTIONS) {
          const e = await findEntry(c, targetSlug);
          if (e) {
            targetId = `${c}/${e.id}`;
            break;
          }
        }
      }
      if (targetId) {
        // Dedupe edges (A->B same as B->A)
        const key = [srcId, targetId].sort().join('|');
        if (!edges.some((e) => `${[e.source, e.target].sort().join('|')}` === key)) {
          edges.push({ source: srcId, target: targetId });
        }
      }
    }
  }

  return { nodes, edges };
}
