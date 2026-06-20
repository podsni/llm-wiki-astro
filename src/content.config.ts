import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// All collections share most frontmatter fields. Define the common shape once
// and extend per-collection to add collection-specific fields.
const baseFields = {
  title: z.string().min(1),
  description: z.string().default(''),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  category: z.string().default('uncategorized'),
  tags: z.array(z.string()).default([]),
  image: z.string().optional(),
  draft: z.boolean().default(false),
  aliases: z.array(z.string()).default([]),
  related: z.array(z.string()).default([]),
  references: z.array(z.object({
    title: z.string(),
    url: z.string().url().optional(),
    author: z.string().optional(),
    date: z.coerce.date().optional(),
    note: z.string().optional(),
  })).default([]),
};

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object(baseFields),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object(baseFields),
});

const concepts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/concepts' }),
  schema: z.object(baseFields),
});

const people = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/people' }),
  schema: z.object({
    ...baseFields,
    role: z.string().optional(),
    affiliation: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    ...baseFields,
    status: z.enum(['active', 'paused', 'completed', 'archived']).default('active'),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/books' }),
  schema: z.object({
    ...baseFields,
    author: z.string().optional(),
    isbn: z.string().optional(),
    year: z.number().int().optional(),
    rating: z.number().min(0).max(5).optional(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    ...baseFields,
    status: z.enum(['idea', 'in-progress', 'completed', 'paused']).default('idea'),
    methodology: z.string().optional(),
  }),
});

const timeline = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/timeline' }),
  schema: z.object({
    ...baseFields,
    eventDate: z.coerce.date(),
    eventType: z.enum(['milestone', 'release', 'discovery', 'project', 'personal']).default('milestone'),
  }),
});

const sources = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/sources' }),
  schema: z.object({
    ...baseFields,
    sourceType: z.enum(['article', 'paper', 'video', 'podcast', 'book', 'tweet', 'other']).default('article'),
    sourceUrl: z.string().url().optional(),
  }),
});

export const collections = {
  notes,
  articles,
  concepts,
  people,
  projects,
  books,
  research,
  timeline,
  sources,
};
