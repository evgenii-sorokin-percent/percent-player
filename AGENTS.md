# AGENTS.md

Percent Player: offline music player — React WebUI (`client/`) + Express server packaged as a single Node SEA executable. pnpm monorepo; workspace only has `server` + `client`.

## Requirements

- **Node >= 26** (required for `--build-sea` and native ESM / `node:sea`).
- **pnpm 11.24.0** (pinned via `packageManager` / `devEngines`).

## Commands (run from repo root)

- Dev: `pnpm dev` (both), `pnpm dev:server`, `pnpm dev:client`
- Lint: `pnpm lint` (oxlint) · Format: `pnpm format` / `pnpm format:check` (oxfmt)
- **No typecheck script exists.** CI runs only `format:check` → `lint` → `build`.
- Build: `pnpm build` = rolldown build server (`server/dist/server.js`) + vite build client + generate `sea-config.json` + build SEA → `dist/percent-player`.

## Architecture gotchas

- ESM with `nodenext` + `verbatimModuleSyntax`: **relative imports must use explicit `.js` extensions** (e.g. `./config/index.js`). Root `tsconfig.json` excludes `client/` and `server/`; each package has its own tsconfig.
- Server loads `.env` from `server/` (gitignored) via `loadEnvFile()`. `NODE_ENV` is zod-validated and uses `"dev" | "production"` (not `"development"`).
- `server/src/main.ts` serves web assets two ways: packaged as SEA via `getAsset()` from the blob; otherwise in production it serves `client/dist`. Both `dist/` and `server/.env` are gitignored — build before relying on baked-in asset paths.
- `sea-config.json` is **generated** by `sea-config-build.ts` (walks `client/dist`), but it's committed and rebuilt by `pnpm build`.

## Workflow

- Conventional Commits enforced by commitlint via Husky. Hooks: pre-commit = `format:check` + `lint`; pre-push = `build`. CI mirrors this (format:check → lint → build) on push to `main`.
- No tests exist in the repo.
- Linting/formatter configs (`.oxlintrc.json`, `.oxfmtrc.json`) exist at root, `server/`, and `client/`, ignoring `dist`/`node_modules`.
