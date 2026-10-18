---
title: "NexaGens"
tagline: "Tiered generators, minions and automation: a complete gens/tycoon engine for Spigot, Paper and Purpur."
version: "0.1.0"
platforms: [Spigot, Paper, Purpur]
mcVersions: "1.19.4 – 26.x"
tags: [generators, tycoon, minions, economy, automation, skyblock]
accent: "#b088f0"
order: 1
featured: true
links:
  github: https://github.com/goldeneas/nexagens
---

## What is it

NexaGens is a complete gens/tycoon engine for Spigot, Paper and Purpur servers. Players place generators, upgrade them through **20 configurable tiers**, and let **minions** mine and sell for them. Nothing drops on the ground, so there are no item entities and no lag. One jar works on every supported Minecraft version, and no extra plugin is required on Spigot.

## Features

- **20 generator tiers**, fully configurable: block, drop, speed, sell price, buy and upgrade cost. Upgrade with money (Vault), built-in tokens or sacrificed items.
- **Virtual storage:** generators keep their production inside, up to a cap that grows with each tier. Left click takes 8 items; the menu has Collect, Upgrade and Pick up.
- **Minions (5 levels):** they mine your generators in range. Each level is faster, reaches farther, mines more per cycle and holds more.
- **Minion addons:** Vacuum (mine every generator in range), Compactor (compress items, e.g. 9 iron ingots into a block) and Auto-Sell (sell on every cycle, needs Vault).
- **Overclock fuel:** Radiant Coal (x2 speed for 5 min) and Stardust (x3 speed for 2 min).
- **Chunk Loader:** keeps generators and minions working when nobody is nearby.
- **Limits by permission** (default, vip, vip+, mvp or unlimited), plus extra slots you can sell through Tebex/CraftingStore with `/gens slots`.
- **Leaderboards:** top players, plus top islands and factions (SuperiorSkyblock2, BentoBox, Factions), with optional seasons and rewards.
- **Server-side animations:** holograms, particles, flying items and "+$" popups. No resource pack needed, and every effect can be turned off.
- **PlaceholderAPI** placeholders, SQLite or MySQL storage, and fully editable messages (MiniMessage).

**Requirements:** Spigot, Paper or Purpur 1.19.4 – 26.x. Folia is not supported. Optional: Vault (money and selling), PlaceholderAPI, SuperiorSkyblock2, BentoBox, Factions. The MySQL, SuperiorSkyblock2 and Factions hooks have not been tested live yet.

## Installation

1. Download the `.jar` file from the Download section.
2. Drop it into your server's `plugins/` folder.
3. Restart the server.
4. Optionally install Vault (needed for money and selling) and any other supported plugin.
5. Edit `config.yml`, `tiers.yml` and `messages.yml` in `plugins/NexaGens/`, then run `/gens reload`.

## Commands & permissions

The main command is `/gens` (aliases `/nexagens`, `/gen`, `/generators`).

| Command | Permission | Description |
| --- | --- | --- |
| `/gens shop` | `nexagens.shop` | Open the shop to buy generators (default: everyone) |
| `/gens list` (or `info`) | `nexagens.use` | Show your placed generators/machines and your limits (default: everyone) |
| `/gens balance` (or `bal`) | `nexagens.use` | Show your tokens (default: everyone) |
| `/gens top [page]` | `nexagens.top` | Player leaderboard by generator value (default: everyone) |
| `/gens top island\|faction [page]` | `nexagens.top` | Island (SuperiorSkyblock2/BentoBox) or faction leaderboard (default: everyone) |
| `/gens give <player> <tier> [amount]` | `nexagens.admin.give` | Give generators (OP) |
| `/gens givefuel <player> <fuel> [amount]` | `nexagens.admin.give` | Give fuel: `radiant-coal`, `stardust` (OP) |
| `/gens givemachine <player> <machine> [amount] [level]` | `nexagens.admin.give` | Give `minion`, `chunk-loader`, `vacuum-hopper`, `chest-compressor` or `auto-sell-chest` (OP) |
| `/gens slots <give\|take\|set> <player> <n>` | `nexagens.admin.slots` | Manage extra generator slots, e.g. from a store (OP) |
| `/gens tokens <give\|take\|set\|balance> <player> [n]` | `nexagens.admin.tokens` | Manage tokens (OP) |
| `/gens season end` | `nexagens.admin.season` | End the season and hand out the configured rewards (OP) |
| `/gens reload` | `nexagens.admin.reload` | Reload the configuration files (OP) |
| – | `nexagens.admin` | Grants all `nexagens.admin.*` permissions (OP) |
| – | `nexagens.admin.bypass` | Break, upgrade and refuel other players' generators, and ignore limits (OP) |
| – | `nexagens.limit.<number\|group\|unlimited>` | Generator limit; the highest one applies (default: 10, vip 25, vip+ 40, mvp 60) |
| – | `nexagens.chunkloaders.<number\|group\|unlimited>` | Chunk loader limit (default: 1) |

## Changelog

### 0.1.0
- Initial release.
- 20 configurable generator tiers with virtual storage, upgrades and overclock fuels.
- Minions (5 levels) with Vacuum, Compactor and Auto-Sell addons.
- Chunk loader, permission-based limits and purchasable extra slots.
- Player, island and faction leaderboards with seasons.
- Server-side animations, PlaceholderAPI support, SQLite and MySQL storage.
