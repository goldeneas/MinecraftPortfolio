/** Prepends Astro's `base` (needed on GitHub Pages for project repos). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

export const linkLabels: Record<string, string> = {
  github: 'GitHub',
  modrinth: 'Modrinth',
  spigot: 'SpigotMC',
  hangar: 'Hangar',
  curseforge: 'CurseForge',
  download: 'Download',
  docs: 'Documentation',
};
