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
 * Nodes: every entry. Edges: every `related` link + every internal wikilink in body.
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
    description: entry.data.description || '',
    date: entry.data.date,
    updated: entry.data.updated,
  }));

  // Build slug → id map (without collection prefix) for wikilink resolution
  const slugOnlyMap = new Map<string, string>();
  for (const { collection, entry } of all) {
    slugOnlyMap.set(entry.id, `${collection}/${entry.id}`);
  }

  const edges: { source: string; target: string }[] = [];
  const seen = new Set<string>();
  const addEdge = (a: string, b: string) => {
    if (a === b) return;
    const key = [a, b].sort().join('|');
    if (seen.has(key)) return;
    seen.add(key);
    edges.push({ source: a, target: b });
  };

  for (const { collection: srcCollection, entry: srcEntry } of all) {
    const srcId = `${srcCollection}/${srcEntry.id}`;

    // 1. Explicit `related` frontmatter links
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
      if (targetId) addEdge(srcId, targetId);
    }

    // 2. Wikilinks in body: [label](/collection/slug) or [label](/slug)
    if (srcEntry.body) {
      const wikilinkRe = /\]\((\/[a-z][a-z0-9-]*(?:\/[a-z0-9-]+)?)\)/g;
      let m: RegExpExecArray | null;
      while ((m = wikilinkRe.exec(srcEntry.body)) !== null) {
        const path = m[1];
        const parts = path.split('/').filter(Boolean);
        if (parts.length < 2) continue;
        const [first, second] = parts;
        // Skip non-collection paths
        if (['graph', 'az', 'random', 'about', 'all', 'timeline', 'recent', 'archive', 'search'].includes(first)) continue;
        let targetId: string | null = null;
        if (COLLECTIONS.includes(first as CollectionName)) {
          // /collection/slug
          const e = await findEntry(first as CollectionName, second);
          if (e) targetId = `${first}/${e.id}`;
        } else {
          // /slug → find across collections
          for (const c of COLLECTIONS) {
            const e = await findEntry(c, first);
            if (e) {
              targetId = `${c}/${e.id}`;
              break;
            }
          }
        }
        if (targetId) addEdge(srcId, targetId);
      }
    }
  }

  // Compute degree (connection count) per node — useful for sizing
  const degree: Record<string, number> = {};
  for (const n of nodes) degree[n.id] = 0;
  for (const e of edges) {
    degree[e.source] = (degree[e.source] || 0) + 1;
    degree[e.target] = (degree[e.target] || 0) + 1;
  }
  const nodesWithDegree = nodes.map(n => ({ ...n, degree: degree[n.id] || 0 }));

  // Pre-compute layout (cluster by collection) — runs once at build time.
  // Use a generous canvas size so all clusters have room; the client will
  // fitToView on initial render to scale appropriately.
  const layout = computeClusterLayout(nodesWithDegree, 1400, 900);
  nodesWithDegree.forEach((n, i) => {
    n.x = layout.positions[i].x;
    n.y = layout.positions[i].y;
  });

  return { nodes: nodesWithDegree, edges, regions: layout.regions };
}

/**
 * Compute a stable cluster-by-collection layout.
 * Each collection gets a region in a 3×3 grid (sized by node count),
 * and nodes are placed in concentric circles within their region.
 * Returns pre-computed positions + region centers (in graph coords).
 */
function computeClusterLayout(
  nodes: { id: string; collection: string; degree: number }[],
  width: number,
  height: number
): { positions: { x: number; y: number }[]; regions: Record<string, { cx: number; cy: number; r: number; count: number }> } {
  const collections = Array.from(new Set(nodes.map(n => n.collection)));

  // Group nodes by collection
  const byCollection: Record<string, typeof nodes> = {};
  for (const n of nodes) {
    if (!byCollection[n.collection]) byCollection[n.collection] = [];
    byCollection[n.collection].push(n);
  }
  for (const c of collections) {
    byCollection[c].sort((a, b) => b.degree - a.degree);
  }

  const counts = collections.map(c => byCollection[c].length);
  const maxCount = Math.max(...counts);
  const minCount = Math.min(...counts);

  // Layout: 3x3 grid, larger spacing for better fit
  const layoutW = width * 0.9;
  const layoutH = height * 0.9;
  const startX = (width - layoutW) / 2;
  const startY = (height - layoutH) / 2;

  const cols = Math.min(3, Math.ceil(Math.sqrt(collections.length)));
  const rows = Math.ceil(collections.length / cols);
  const cellW = layoutW / cols;
  const cellH = layoutH / rows;
  // Larger base radius so smaller clusters still have room
  const cellMaxR = Math.min(cellW, cellH) * 0.45;

  // Compute region size per collection (sqrt scaling for proportional feel)
  const sizeFor = (count: number) => {
    if (maxCount === minCount) return cellMaxR;
    // Use sqrt scaling so larger collections don't dominate too much
    const t = Math.sqrt(count / maxCount);
    return cellMaxR * (0.55 + 0.45 * t);
  };

  // Position cluster centers
  const regions: Record<string, { cx: number; cy: number; r: number; count: number }> = {};
  collections.forEach((col, i) => {
    const r = Math.floor(i / cols);
    const c = i % cols;
    regions[col] = {
      cx: startX + cellW * c + cellW / 2,
      cy: startY + cellH * r + cellH / 2,
      r: sizeFor(byCollection[col].length),
      count: byCollection[col].length,
    };
  });

  // Position nodes within each cluster using concentric circles
  const positions: { x: number; y: number }[] = new Array(nodes.length);
  const nodeIndexById = new Map();
  for (let i = 0; i < nodes.length; i++) nodeIndexById.set(nodes[i].id, i);

  for (const col of collections) {
    const list = byCollection[col];
    const region = regions[col];
    const N = list.length;
    if (N === 0) continue;

    // Most-connected node at center
    positions[nodeIndexById.get(list[0].id)] = { x: region.cx, y: region.cy };

    // Others in concentric rings (6 per ring)
    for (let i = 1; i < N; i++) {
      const ringIndex = i - 1;
      let ring = 0;
      let cumulative = 0;
      const perRing = 6;
      while (cumulative + perRing <= ringIndex) {
        ring++;
        cumulative += perRing;
      }
      const posInRing = ringIndex - cumulative;
      const totalRings = Math.ceil((N - 1) / perRing);
      // Ring radius grows outward but capped at 0.9 * region.r
      const ringRadius = (region.r * 0.85) * (ring + 1) / Math.max(1, totalRings);
      const angle = (posInRing / perRing) * Math.PI * 2 + ring * 0.4;
      positions[nodeIndexById.get(list[i].id)] = {
        x: region.cx + Math.cos(angle) * ringRadius,
        y: region.cy + Math.sin(angle) * ringRadius,
      };
    }
  }

  return { positions, regions };
}
