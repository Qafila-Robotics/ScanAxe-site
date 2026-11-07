# ScanAxe-site

## What this repo is
The ScanAxe marketing site: Nuxt 4, statically generated (`nuxt generate`), English and Arabic with
full RTL, deployed to GitHub Pages by Actions. It has no backend of its own; the waitlist form posts
to the ScanAxe API. Product plan, decisions and issues live in `Qafila-Robotics/ScanAxe`
(`PLAN.md`, `PROGRESS.md`, `knowledge/`); this repo's work is the issues labelled `area:site` there.

## Read first
- `Qafila-Robotics/ScanAxe`: `PLAN.md`, `knowledge/decisions.md` (DEC-P004: static Nuxt on Pages),
  `knowledge/01-design/` (brand tokens, screen briefs `L-S-xx`).
- Batta Brain (local machine only): `20-Skills/web-nuxt/SKILL.md`.

## Commands
- Install: `npm ci` · Dev: `npm run dev` · Checks: `npm run tokens:check && npm run lint && npm run typecheck`
- Build: `npm run generate` (output `.output/public`, what Pages serves)

## Rules
- Static only: no server routes, no runtime secrets. Anything secret belongs in the API.
- All text in `i18n/locales/en.json` and `ar.json`; logical CSS (start/end) only.
- Brand: navy `#112245`, blue `#1A82F7` (large text/graphics only), `#1469DC` for buttons and small
  text (contrast). Fonts IBM Plex Sans / Plex Sans Arabic.
- Git: branch `feat/F-xxx-name`, commits start with `F-xxx: `, never mention AI/assistants or add
  Co-Authored-By (`git config core.hooksPath .githooks`). PR body: `Closes Qafila-Robotics/ScanAxe#<n>`.
  Squash merge; the owner merges.

## When stuck
Stop after three failed attempts; comment on the issue with the error, attempts and hypothesis.
