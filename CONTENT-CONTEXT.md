# Zombas site content context

Internal handoff for the agent that creates, reviews, or edits player-facing content in this site.
This file records the **current editorial state**: what the site already covers, what we learned while
researching it, which claims remain uncertain, and what the next content run should verify.

It is not public copy and it is not a chronological work log. Keep it reconciled and current.

**Last substantive refresh:** 2026-08-26  
**Refresh scope:** current React portal, the player-guide refresh runbook, site decisions, the legacy
guide-review task, and current repository documentation.

## Maintenance contract

Every run that creates, reviews, or edits site content must:

1. Read this file before proposing changes.
2. Check the current source and rendered pages before treating an item here as still true.
3. Update this file in the same change when the work produces a durable observation, inference,
   unresolved question, or correction that should survive into the next run.
4. Reconcile old entries instead of appending a diary. Remove resolved items, move settled rationale
   to `DECISIONS.md`, and replace stale observations with the newly verified state.
5. Label evidence honestly:
   - **Confirmed:** directly observed in current source, rendered output, live configuration, or the
     relevant game/mod files.
   - **Inference:** supported by evidence but not directly tested or observed.
   - **Open:** missing evidence or a decision from Kauê is still required.
   - **Superseded:** useful history only; move it to an archive if retaining it still has value.
6. Never record credentials, join or RCON passwords, private chat excerpts, internal IP addresses,
   raw configuration, or other details that should not be published.

Use the repository's existing documents for their intended jobs:

| Document | Owns |
|---|---|
| `docs/runbooks/refresh-player-guide.md` | Research, writing, voice, QA, build, export, and publication process |
| `docs/players/site/DECISIONS.md` | Settled structural, design, voice, and repository decisions with rationale |
| This file | Current coverage, durable editorial learnings, evidence caveats, and the open content queue |
| `docs/server-facts.md`, `docs/decisions.md`, `docs/reference/mod-inventory.md` | Current server facts, gameplay decisions, and installed-mod inventory |
| `CHANGELOG.md` | Changes to the live server, not ordinary site-copy edits |

Do not copy volatile server values here merely for convenience. Link to the canonical source and
verify it when the value matters to player-facing text.

## Mandatory startup sequence

1. Read the root `AGENTS.md`.
2. Run `./tools/Test-DocDrift.ps1` from the root repository. Resolve documentation drift before
   trusting server-specific claims.
3. Read `docs/runbooks/refresh-player-guide.md`.
4. Read `docs/players/site/DECISIONS.md` and this file.
5. Inspect the current pages in `app/` and, when presentation or discoverability matters, render the
   site. A source-code search alone is not proof that a player can find or understand something.
6. Read only the canonical server/mod sources relevant to the claim being changed.
7. Check both Git repositories before editing. `docs/players/site` is a nested repository; preserve
   unrelated work in the root and site worktrees.

## Current product snapshot

The current product is the React portal in `docs/players/site`, not the older single HTML/PDF guide.
Legacy guide documents can contain useful research leads, but they are not a current backlog and do
not prove that content is missing from the portal.

| Route | Primary job | Coverage observed on 2026-08-26 |
|---|---|---|
| `/` | Route players to the right material | Entry points for newcomers, veterans, rules, and mods |
| `/novatos/` | First-session and early-survival guidance | Joining, the K-key conflict, combat, Bound Journal, first base and utilities, food/cooking, cars/fuel, factions/safehouses/map, mechanic surprises, and FAQ |
| `/veteranos/` | Campaign planning after the first days | Timeline, defense, journal strategy, infrastructure, fuel/vehicles, group coordination, and FAQ |
| `/regras/` | Rules and expectations | Joining, coexistence, PvP, bases/map/sleep, bans, and admin boundaries |
| `/mods/` | Explain the active mod set | Player-facing mod inventory, including This Is Your Life |

Source content belongs under `app/`. Do not hand-edit generated output such as `.next/` or
`.github-pages-dist/`.

This snapshot describes the local source as inspected. It does **not** prove that the same revision
is currently deployed. Publication and live verification are separate, approval-gated steps.

## Durable editorial learnings

### Read before diagnosing a gap

- Several subjects once listed as missing in `docs/players/TASK-revisar-guia.md` are now covered in
  the React portal. Treat that file as historical research and review input, not as an unchecked
  to-do list.
- Search every route and inspect the rendered hierarchy before adding a new explanation. If a topic
  already has a canonical home, improve it there or cross-link to it instead of duplicating prose.
- Presence is not discoverability. A paragraph buried in a long page may still be a real content
  problem, but the fix may be navigation, a callout, or a cross-link rather than more copy.

### Separate literal help from atmosphere

- Controls, recipes, troubleshooting, warnings, and sequential actions must stay literal and
  scannable. A player may read them on a phone while the game is open.
- The site's personality belongs in framing and short atmospheric passages. The full voice rules and
  banned patterns live in the refresh runbook; do not create a competing voice guide here.
- Residente Ivo is a framing device, not a continuity-heavy character. Do not make factual mechanics
  depend on a joke or invented lore.

### Treat server and mod mechanics as versioned evidence

- Build 42 point releases and mod updates can invalidate otherwise accurate copy. Record which source
  was checked and when; distinguish “verified on our server” from a generic wiki claim.
- Steam descriptions and mod names are discovery aids, not proof of behavior. For Zombas-specific
  mechanics, inspect the installed mod files and active settings named by the runbook.
- Bound Journal and This Is Your Life are separate systems. Never collapse their effects into one
  description. The player guide currently describes a 50% journal recovery setting; verify the live
  setting before changing that number.
- The K-key conflict is high-value onboarding information: This Is Your Life and smoking-related
  behavior have historically competed for that input through different binding paths. If editing the
  instructions, verify the current installed versions and the in-game key-binding path first.
- **Vanilla key-binding claims drift silently across Build 42 revisions.** The novato checklist said
  Tab opened inventory and I opened the unified crafting panel; both were wrong for the current
  client — B42 moved inventory to I and crafting to B. Verified 2026-08-26 by triangulating a live
  Steam Community troubleshooting thread (a player confirming B still opens crafting), a WebSearch
  aggregate independently agreeing on the Tab→I inventory move, and decoding this machine's own
  `C:\Users\kauem\Zomboid\Lua\keysB42.ini` scancodes against the standard LWJGL/DirectInput table
  (cross-checked against two mods' own source, Aegis Panel's F6/F7 and Gunworks' U, which matched
  exactly and validated the decode). Do not trust a single AI-summarized wiki fetch for key names —
  one such fetch confidently asserted the wrong crafting key. Corrected in `app/novatos/page.tsx`.
- **`keysB42.ini` on this machine is Kauê's personal profile, not a clean-defaults reference.**
  Commonly-remapped actions (crouch, sprint/run) can't be trusted from it alone — only bindings a
  player is unlikely to have touched (mod-added panel toggles) were used as corroboration here.
  Confirming a true default beyond doubt would need a fresh/never-remapped profile or the in-game
  "reset to default" bindings screen.
- **A second real key conflict exists between loaded combat mods, confirmed from mod source, not
  guesswork:** Gunworks (the Guns of Marz framework) binds "Toggle underbarrel" to U
  (`GunworksKeybinds.lua`), and Lethal Stealth binds its prone toggle to the same U
  (`RET_LTS.DefaultProneKey = Keyboard.KEY_U` in `LTSOptions.lua`). Documented in the novato guide's
  combat section alongside the existing K conflict. Worth rechecking after either mod updates.
- Avoid definitive claims about zombie respawn or loot permanence while server policy/mechanics are
  unsettled. State only what the current canonical decisions and live configuration support.

### Keep public material sanitized

- Never publish the join password, RCON/admin details, internal addresses, raw logs/configuration, or
  private group conversations. “Peça no grupo” is sufficient when access instructions need a password
  handoff.
- Do not turn an internal operational detail into player advice unless it changes what the player
  should do. Explain the action and expected symptom, not the infrastructure behind it.

## Evidence ledger

Keep this table small. It holds cross-run evidence that is useful to future writing but does not yet
belong in a settled decision.

| Status | Observation | Editorial implication | Next verification |
|---|---|---|---|
| Confirmed 2026-08-26 | The current React source already covers most of the old “missing basics” list, including combat, food, vehicles, Bound Journal, factions, and safehouses. | Do not rebuild the legacy guide checklist as new sections. Diagnose clarity and findability in the current routes. | Re-scan current routes at the start of the next broad review. |
| Confirmed 2026-08-26 | The legacy HTML/PDF guide and the React portal have diverged in structure and coverage. | Evidence from the legacy review task is a lead to validate, not current-site truth. | Check current source and rendered portal before carrying any legacy issue forward. |
| Confirmed 2026-08-26 | The current source distinguishes Bound Journal from This Is Your Life and contains the K-key warning. | Preserve those distinctions when reorganizing onboarding or mod copy. | Recheck mod files/key bindings after relevant mod updates. |
| Inference 2026-08-26 | Connection/mod-mismatch troubleshooting appears underrepresented in the current route scan. | A short, findable troubleshooting block may prevent destructive client-side “fixes.” | Inspect rendered pages and current incident/mod-update runbooks, then decide the correct route and wording. |
| Open | The exact current in-game path for faction/safehouse management may have changed across Build 42 or UI/mod updates. | Do not promise a button path from memory. | Verify in the current client or the relevant UI files before revising those steps. |
| Open | Historical code reading suggested profession/trait starting XP may affect Bound Journal recovery independently of an exposed toggle, but this was not validated as a player-visible scenario. | Do not teach optimization around this behavior yet. | Re-read the current mod calculation and test a controlled character case if the guide needs the claim. |

## Open editorial queue

These are investigation prompts, not pre-approved copy changes. Validate the need before implementing
and remove or rewrite an item when resolved.

1. **Connection and mod mismatch help.** Determine whether the portal gives players a findable answer
   for a server/client Workshop mismatch. Cross-check the current mod-update and cannot-connect
   runbooks. Likely useful actions include waiting for the server's update cycle and retrying; do not
   tell players to unsubscribe, reinstall, or delete Workshop files unless current evidence supports
   that specific recovery path. Keep base-game build mismatch separate from mod mismatch. Avoid
   promising an exact wait time unless the active automation guarantees it.
2. **Faction and safehouse UI accuracy.** Revalidate the current UI path and any BetterSafehouse
   behavior before polishing the onboarding steps.
3. **Bound Journal edge cases.** Keep the public explanation at the level verified by current settings
   and code. Profession/trait recovery behavior remains an evidence task, not a settled tip.
4. **High-impact mod discoverability.** On a future mods-page audit, prioritize mechanics that change
   what players should do, especially dependencies, conflicts, save risk, or multiplayer behavior.
   Verify each claim from installed files/settings rather than expanding every Workshop description.

## End-of-run update

Before handing content work back, reconcile this file using the following compact record. Integrate
the result into the sections above; do not leave a growing stack of completed templates.

```text
Review date and scope:
Current routes inspected:
Canonical/live evidence checked:
Confirmed durable learning:
Inference and why:
Open question and next decisive check:
Resolved or superseded context removed/moved:
Build/export verification:
Publication status: not requested / approved but pending / published and live-verified
```

A local build or export proves only the artifact tested. A successful push proves only repository
state. Declare the public site current only after deployment propagation and cache-busted live checks,
and never publish without Kauê's explicit authorization.
