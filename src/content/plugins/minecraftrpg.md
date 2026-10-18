---
title: "MinecraftRPG"
tagline: "A Wynncraft-inspired RPG for Spigot and Paper: 5 classes, combo-based spells, 106 levels, generated loot, parties and zero client mods."
version: "0.1.0"
platforms: [Spigot, Paper]
mcVersions: "1.21 – 1.21.11"
tags: [rpg, classes, combat, loot, party]
accent: "#9b7bff"
order: 1
featured: true
links:
  github: https://github.com/goldeneas
---

## What is it

MinecraftRPG turns your server into a full action-RPG in the style of Wynncraft. Players pick one of five classes, fight level-scaled mobs with a click-combo spell system, grow through 106 levels, and gear up with randomly generated, identifiable equipment.

Everything is built on modern Minecraft features: holograms and floating damage numbers use **display entities**, effects use particles and sounds, and menus are plain inventory GUIs. The plugin is compiled against the Spigot API, so the same jar runs on **Spigot and Paper** with no Paper-only APIs. A resource pack is optional and only adds a custom HUD and weapon icons.

## Features

- **5 classes, 5 weapon types**: Warrior (spear), Archer (bow), Mage (wand), Assassin (dagger) and Shaman (relik), each with its own basic attack and 4 spells (20 in total).
- **Click-combo casting**: cast spells with a 3-click combo (left/right). Spells use mana and cooldowns, and show animated effects and sounds.
- **Levels 1–106**: configurable XP curve, animated level-up, vanilla XP bar used as the RPG progress bar.
- **Skill points**: Strength, Dexterity, Intelligence, Defense and Agility affect damage, critical hits, mana cost and regeneration, damage taken, dodge and speed. Free respec is configurable.
- **Ability Tree**: 16 nodes per class with archetypes, passives and spell upgrades (`abilities.yml`), plus a tabbed menu.
- **RPG mobs**: 27 mob types with level, custom HP, animated nameplates, elemental affinities and abilities. Configurable spawn zones with an activation range.
- **Generated equipment**: item tiers from Normal to Mythic, unidentified items, an Item Identifier, re-rolls, accessories, level/skill requirements and mob drops.
- **6 item sets** with bonuses based on pieces worn.
- **Economy**: virtual emerald wallet, deposit/withdraw, bank, 5 rotating-stock merchant shops, health and mana potions, and Merchant / Identifier / Banker NPCs.
- **Regions**: discovery titles, recommended levels, safe zones and discovery XP.
- **Parties** (up to 6 players): invites, party chat, shared XP with a group bonus, shared health bars, and support spells that also affect allies.
- **Animated HUD**: mana and health display, floating damage numbers, hit feedback and gradient-styled chat messages.
- **World protection**: no block breaking/placing, no hunger and no vanilla crafting in RPG worlds (configurable per world, bypassed by `mcrpg.admin`).
- **Highly configurable**: balance and content live in `config.yml`, `items.yml`, `mobs.yml`, `abilities.yml`, `sets.yml`, `shops.yml` and `messages.yml`; reload with `/rpg reload`.
- **Optional resource pack** (client 1.21.4+): hides vanilla hearts and hunger, adds a custom HUD and weapon icons. Automatic send on join, optional forced acceptance, and the plugin works without it.

## Installation

1. Download the `.jar` file from the Download section.
2. Make sure your server runs **Java 21** and **Spigot or Paper 1.21 or newer**.
3. Drop it into your server's `plugins/` folder.
4. Restart the server. The default configuration files are created in `plugins/MinecraftRPG/`.
5. *(Optional)* In `config.yml`, set `world.rpg-worlds` to the worlds where the RPG rules apply (an empty list means all worlds) and configure the `resource-pack` section with your own pack URL and SHA-1, or set `resource-pack.enabled: false` to run without it.
6. Run `/rpg reload` after any configuration change.

Note: Folia is not supported.

## Commands & permissions

Player commands need no permission node. Administrative commands and the building bypass require `mcrpg.admin` (default: operators).

| Command | Permission | Description |
| --- | --- | --- |
| `/rpg` (alias `/mrpg`) | none | Opens your character sheet |
| `/rpg class` | none | Opens the class selection menu |
| `/rpg skills` | none | Opens the skill points menu |
| `/rpg abilities [reset]` | none | Opens the Ability Tree, or resets it and refunds the points |
| `/rpg identify` | none | Opens the item identifier (admins only if `identifier.require-npc` is true) |
| `/rpg wallet` | none | Shows your emerald wallet |
| `/rpg withdraw <amount\|all>` | none | Turns wallet emeralds into items |
| `/rpg deposit <amount\|all>` | none | Deposits emeralds into your wallet |
| `/rpg pack` | none | Sends the resource pack again |
| `/party` (alias `/pt`) `<invite\|accept\|decline\|leave\|kick\|promote\|disband\|list\|chat>` | none | Party management |
| `/pc <message>` | none | Party chat |
| `/rpg reload` | `mcrpg.admin` | Reloads the configuration (also works from the console) |
| `/rpg setclass <class>` | `mcrpg.admin` | Sets a player's class and gives the starter weapon |
| `/rpg level <n>` / `/rpg xp <n>` | `mcrpg.admin` | Sets level or adds XP |
| `/rpg points <n>` / `/rpg ap <n>` / `/rpg skill <skill> <n>` | `mcrpg.admin` | Edits skill points, ability points and skills |
| `/rpg emeralds <n>` / `/rpg mana [amount]` | `mcrpg.admin` | Edits emeralds or restores mana |
| `/rpg give <weapon> [level]` | `mcrpg.admin` | Gives a weapon |
| `/rpg item ...` / `/rpg itemset <set>` | `mcrpg.admin` | Generates gear or a full item set |
| `/rpg potion <type> [amount]` | `mcrpg.admin` | Gives health or mana potions |
| `/rpg spawn <mob> [level]` | `mcrpg.admin` | Spawns an RPG mob |
| `/rpg zone ...` / `/rpg region ...` / `/rpg npc ...` | `mcrpg.admin` | Manage spawn zones, regions and NPCs |
| `/rpg shop <id>` / `/rpg bank` | `mcrpg.admin` | Opens a shop or the bank directly |
| `mcrpg.admin` | n/a | Gives access to all admin commands and lets the player build/break blocks in RPG worlds (default: op) |

## Changelog

### 0.1.0
- Initial release.
- 5 classes with 20 spells, click-combo casting, levels 1–106, skill points and the Ability Tree.
- 27 RPG mobs, spawn zones, regions and discovery XP.
- Generated equipment with tiers, identification, accessories, 6 item sets and mob drops.
- Emerald wallet, bank, merchant shops and NPCs, potions.
- Parties with party chat, shared XP and shared health bars.
- Optional resource pack for the HUD and weapon icons.
- Tested on Paper 1.21.8 and 1.21.11, and Spigot 1.21.8.
