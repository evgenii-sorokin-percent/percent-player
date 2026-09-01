# Percent Player

<p align="center">
    <img src="./media/logo.avif" alt="Percent player logo" width="200"/>
</p>


[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white&style=for-the-badge)](https://conventionalcommits.org)
![CI](https://img.shields.io/github/actions/workflow/status/evgenii-sorokin-percent/percent-player/ci.yml?branch=main&label=CI&style=for-the-badge)
![GitHub License](https://img.shields.io/github/license/evgenii-sorokin-percent/percent-player?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/evgenii-sorokin-percent/percent-player?style=for-the-badge&logo=github)
![TypeScript](https://img.shields.io/badge/TypeScript-7-3178C6?logo=typescript&logoColor=white&style=for-the-badge)
![pnpm](https://img.shields.io/badge/pnpm-11.24.0-F69220?logo=pnpm&logoColor=white&style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D26.0.0-339933?logo=nodedotjs&logoColor=white&style=for-the-badge)
![code style](https://img.shields.io/badge/code%20style-oxfmt-orange?style=for-the-badge)
![lint](https://img.shields.io/badge/lint-oxlint-blue?style=for-the-badge)


An offline music player featuring a WebUI, powered by a local server and packaged as a SEA

## Prerequisites

- **Node.js**: v26.0.0 or higher (required for `--build-sea` flag and esm support)
- **pnpm**: package manager

## Documentation

- `server/` - Express Server & SEA ([Documentation](./server/README.md))
- `client/` - React WebUI ([Documentation](./client/README.md))

## General Technologies

- **TypeScript 7** - Typing
- **Oxlint** - Linter
- **Oxfmt** - Formatter
- **Husky 9** - Git hooks
- **Commitlint 21** - Conventional commits validation

## Commands

### Development

```bash
pnpm dev # Run dev servers for client and server
pnpm dev:server # Run server dev server only
pnpm dev:client # Run client dev server only
```

### Build & Package

```bash
pnpm build # Build client, server, and single executable
pnpm build:server # Build server only
pnpm build:client # Build client only
pnpm build:sea-config # Generate sea-config.json
pnpm build:sea # Build SEA from generated config
```

### Linting

```bash
pnpm lint # Lint entire project
pnpm lint:server # Lint server only
pnpm lint:client # Lint client only
pnpm lint:fix # Lint and fix entire project
pnpm lint:fix:server # Lint and fix server only
pnpm lint:fix:client # Lint and fix client only
```

### Formatting

```bash
pnpm format # Format entire project
pnpm format:server # Format server only
pnpm format:client # Format client only
pnpm format:check # Check formatting for entire project
pnpm format:check:server # Check formatting for server only
pnpm format:check:client # Check formating for client only
```

### Typecheck

```bash
pnpm typecheck # Check types entire project
pnpm typecheck:server # Check types server only
pnpm typecheck:client # Check types client only
```