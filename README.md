# Minecraft Plugins — Portfolio

Sito statico (Astro) pubblicato su GitHub Pages.

## Aggiungere un plugin

Crea un file in `src/content/plugins/nome-plugin.md` copiando uno esistente. Il front matter
(titolo, versione, piattaforme, link, colore…) è validato da `src/content.config.ts`; il corpo
Markdown diventa la pagina di dettaglio. Home e filtri si aggiornano da soli.

Immagini (icona, screenshot): mettile in `public/plugins/<nome>/` e referenziale come
`/plugins/<nome>/icon.png`.

## Sviluppo

```sh
npm install
npm run dev      # http://localhost:4321/MinecraftPortfolio
npm run build
```

## Deploy

1. Repo → *Settings → Pages → Source: **GitHub Actions***.
2. Ogni push su `main` ricostruisce e pubblica il sito (`.github/workflows/deploy.yml`).

Il sito sarà su `https://goldeneas.github.io/MinecraftPortfolio/`. Se rinomini il repo, o usi
`goldeneas.github.io`, aggiorna `base` in `astro.config.mjs`.
