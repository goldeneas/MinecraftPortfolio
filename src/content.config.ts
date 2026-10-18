import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const plugins = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/plugins' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    version: z.string(),
    // Platform/loader: Paper, Spigot, Fabric, Forge, NeoForge, Velocity...
    platforms: z.array(z.string()),
    // Supported Minecraft versions, e.g. "1.20 – 1.21"
    mcVersions: z.string(),
    tags: z.array(z.string()).default([]),
    // Card accent colour (hex)
    accent: z.string().default('#3ddc84'),
    // Optional: images inside /public (e.g. "/plugins/name/icon.png")
    icon: z.string().optional(),
    screenshots: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
    featured: z.boolean().default(false),
    // Lower = first
    order: z.number().default(100),
    links: z
      .object({
        github: z.string().url().optional(),
        modrinth: z.string().url().optional(),
        spigot: z.string().url().optional(),
        hangar: z.string().url().optional(),
        curseforge: z.string().url().optional(),
        download: z.string().url().optional(),
        docs: z.string().url().optional(),
      })
      .default({}),
  }),
});

export const collections = { plugins };
