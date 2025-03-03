# which-media-queries

A simple web app to tell which media queries are active for you. Useful for when you're debugging or when you're collaborating with someone non-technical and you need to know their setup.

E.g.

Stakeholder: "Why am I not seeing any animations? Fix it now."

Developer: "I can see from which-media-queries that you seem to have animations disabled. `prefers-reduced-motion` is showing as `reduce`."

Stakeholder: _Enables animations on local machine._

Stakeholder: "Fixed, thanks for sorting so quickly."

Developer: 😎

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm run dev
```

### Compile and Minify for Production

```sh
pnpm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm run test
```
