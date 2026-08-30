# Percent Player

An offline music player featuring a WebUI, powered by a local server and packaged as a SEA

## Prerequisites

- **Node.js**: v25.5.0 or higher (required for `--build-sea` flag)
- **pnpm**: package manager

## Documentation

- `server/` - Express Server & SEA ([Documentation](./server/README.md))
- `client/` - React WebUI ([Documentation](./client/README.md))

## Technologies

- **TypeScript 7** - Typing
- **Oxlint** - Linter
- **Oxfmt** - Formatter

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
