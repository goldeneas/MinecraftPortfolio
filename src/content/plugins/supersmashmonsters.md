---
title: "SuperSmashMobs"
tagline: "Arena PvP where you play as iconic Minecraft mobs, inspired by Mineplex's Super Smash Mobs."
version: "0.1.0-SNAPSHOT"
platforms: [Paper, Spigot]
mcVersions: "1.21+"
tags: [minigame, pvp, arena, kits]
accent: "#7C5CFF"
order: 1
featured: true
links:
  github: https://github.com/goldeneas/SuperSmashMonsters
---
## What is it
SuperSmashMobs is a last-one-standing arena minigame for Paper 1.21+, inspired by Super Smash Mobs from Mineplex. Pick a mob kit, jump into an arena and use its abilities to knock rivals off the map. The more damage a player takes, the farther they fly. Every player has a limited number of lives, and the last one standing wins.

## Features
- **14 mob kits**: Blaze, Chicken, Creeper, Enderman, Guardian, Iron Golem, Magma Cube, Skeleton, Slime, Snowman, Spider, Witch, Wither Skeleton and Wolf. Each kit has its own health, speed and active abilities.
- **Free and unlockable kits**: Skeleton, Iron Golem, Spider and Slime are free. The other ten are bought with in-game coins, and prices are set per kit.
- **Smash-style physics**: knockback grows with accumulated damage, health regenerates slowly, and every player gets a double jump. Falling into the void, water or lava costs a life. Values are tunable in `config.yml`.
- **Multiple arenas**: set up as many arenas as you like and run one game per arena in parallel. Admins configure lobby, spawns, crystal points, void height, lives and player limits with in-game commands.
- **Full game flow**: lobby, animated countdown, match and ending, with lives, respawn and a win condition. Defaults are 2-8 players, 3 lives and a 15-second countdown.
- **Smash Crystals**: an animated crystal (Display Entity) spawns periodically in the arena. Whoever grabs it unlocks a timed Ultimate. The Skeleton has a dedicated Ultimate, Bone Storm. The other kits use a generic "Smash Fury" Ultimate for now.
- **Kit selection menu**: a GUI with purchase confirmation, showing your coin balance.
- **Profiles and economy**: coins, games, wins and kills are saved per player. Coins are awarded for participation, kills and wins, with a reward summary at the end of each match. Storage is SQLite by default (zero setup) with optional MySQL.
- **Per-player scoreboard**: shows arena, game state, player count and lives.
- **Fully customisable messages**: everything lives in `messages.yml` and uses MiniMessage, so gradients and colours are yours to change. Missing keys are restored from the defaults.
- **Optional disguises**: if LibsDisguises is installed, players are disguised as their mob. Without it, the plugin works with no disguise.

## Installation
1. Download the `.jar` file from the Download section.
2. Drop it into your server's `plugins/` folder.
3. Restart the server.
4. Optional: install [LibsDisguises](https://www.spigotmc.org/resources/libs-disguises.81/) for mob disguises. It is a soft dependency and not required.
5. Create an arena in game: `/smash arena create <id>`, then `setlobby`, `addspawn` (at least one spawn, more is better) and optionally `addcrystal`.

Requires Paper 1.21+ and Java 21.

## Commands & permissions
The main command is `/smash`, with the alias `/ssm`.

| Command | Permission | Description |
| --- | --- | --- |
| `/smash join [arena]` | `supersmashmobs.play` (default: everyone) | Join a game, in a specific arena or the first available one. |
| `/smash leave` | `supersmashmobs.play` (default: everyone) | Leave your current game. |
| `/smash kit` | `supersmashmobs.play` (default: everyone) | Open the kit menu. |
| `/smash stats` | `supersmashmobs.play` (default: everyone) | Show your coins, games, wins and kills. |
| `/smash coins` | `supersmashmobs.play` (default: everyone) | Show your coin balance. |
| `/smash coins add <amount>` | `supersmashmobs.admin` (default: op) | Add coins to yourself. |
| `/smash unlock <kit\|all>` | `supersmashmobs.admin` (default: op) | Unlock a kit, or all kits, for yourself. |
| `/smash test` | `supersmashmobs.admin` (default: op) | Toggle the physics sandbox (double jump and dynamic knockback). |
| `/smash arena list` | `supersmashmobs.admin` (default: op) | List arenas and whether they are ready. |
| `/smash arena create <id>` / `delete <id>` | `supersmashmobs.admin` (default: op) | Create or delete an arena. |
| `/smash arena setlobby <id>` | `supersmashmobs.admin` (default: op) | Set the arena lobby at your position. |
| `/smash arena addspawn <id>` | `supersmashmobs.admin` (default: op) | Add a spawn point at your position. |
| `/smash arena addcrystal <id>` | `supersmashmobs.admin` (default: op) | Add a Smash Crystal spawn point at your position. |
| `/smash arena clearspawns <id>` | `supersmashmobs.admin` (default: op) | Remove all spawn and crystal points. |
| `/smash arena setvoid <id> <y>` | `supersmashmobs.admin` (default: op) | Set the void Y level. |
| `/smash arena setlives <id> <n>` | `supersmashmobs.admin` (default: op) | Set the number of lives. |
| `/smash arena setplayers <id> <min> [max]` | `supersmashmobs.admin` (default: op) | Set the player limits. |

## Changelog
### 0.1.0-SNAPSHOT
- First development build: 14 mob kits, multi-arena games, damage-based knockback with double jump, Smash Crystals and Ultimates, kit menu, coin economy with SQLite/MySQL storage, scoreboard and MiniMessage messages.
