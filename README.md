# Create Mark's App Boilerplate

This is is a template repository for my new projects.

I used to call this "the outputs of [Create T3 App](https://create.t3.gg/) with minor tweaks", but it has changed so much that it's it's own thing now, soo let's say it's heavily inspired by it.

## Running & Building

### Prerequisites

- Bun (v1.x)
- pnpm (v10.x)
- Docker

### Database setup

1. Initialize the database
```bash
pnpm db:dev:init # creates a postgres docker container for the db
```
2. Push schema to the (empty) database
```bash
pnpm db:push # pushes the schema to the db
```

### Development mode

Follow the database setup instructions above.

1. Start the development server
```bash
pnpm dev # starts the dev server for the website (builds pages as needed => slow)
```

### Production mode

Follow the database setup instructions above.

1. Build the production server
```bash
pnpm build # builds the website in an optimized manner for prod
```
2. Start the production server
```bash
pnpm start # starts the built bundle
```

## Tech stack

| Name        | Purpose                                                                                      | Docs                      |
| ----------- | -------------------------------------------------------------------------------------------- | ------------------------- |
| Next.js     | An all-in-one framework, basically Node.js or equivelent JS runtime + React on the frontend. | https://nextjs.org/       |
| Drizzle ORM | A type-safe SQL ORM for TypeScript with zero-overhead abstractions.                          | https://orm.drizzle.team/ |
| tRPC        | An end-to-end typesafe API helper library.                                                   | https://trpc.io/          |