# Minecraft Plugins — Portfolio

Static site (Astro) published on GitHub Pages.

## Adding a plugin

Create a file in `src/content/plugins/plugin-name.md` by copying an existing one. The front matter
(title, version, platforms, links, colour…) is validated by `src/content.config.ts`; the Markdown
body becomes the detail page. The home page and filters update automatically.

Images (icon, screenshots): put them in `public/plugins/<name>/` and reference them as
`/plugins/<name>/icon.png`.

## Development

```sh
npm install
npm run dev      # http://localhost:4321/MinecraftPortfolio
npm run build
```

## Deploy

1. Repo → *Settings → Pages → Source: **GitHub Actions***.
2. Every push to `main` rebuilds and publishes the site (`.github/workflows/deploy.yml`).

The site will be at `https://goldeneas.github.io/MinecraftPortfolio/`. If you rename the repo, or use
`goldeneas.github.io`, update `base` in `astro.config.mjs`.
