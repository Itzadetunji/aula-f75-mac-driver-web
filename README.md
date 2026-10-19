# AULA F75 Mac Driver — Website

The landing page for the [AULA F75 Mac Driver](https://github.com/Itzadetunji/aula-f75-mac-driver), a free, open-source macOS app that replaces the Windows-only vendor software for the AULA F75 keyboard.

**Live site:** [aula-f75.itzadetunji.com](https://aula-f75.itzadetunji.com)

> Looking for the app itself? Head to the [driver repo](https://github.com/Itzadetunji/aula-f75-mac-driver) or [download the latest release](https://github.com/Itzadetunji/aula-f75-mac-driver/releases/latest).

## What the site does

- Embeds the demo video and links straight to the latest `.dmg` release and the source code.
- Ships SEO metadata: Open Graph and Twitter cards, JSON-LD structured data (`WebSite`, `SoftwareApplication`, `VideoObject`), a video sitemap, `robots.txt` and `llms.txt`.
- Shows a visit count in the footer using [`@itzadetunji/counter`](https://www.npmjs.com/package/@itzadetunji/counter). Visits are only recorded in production builds.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing, SSR via Nitro)
- [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com) with [shadcn/ui](https://ui.shadcn.com) components and [Phosphor Icons](https://phosphoricons.com)
- [Biome](https://biomejs.dev) for linting and formatting
- [Bun](https://bun.sh) as the package manager
- Deployed on [Vercel](https://vercel.com)

## Getting started

Requires [Bun](https://bun.sh) (or Node.js 20+ with npm).

```bash
bun install
bun run dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command             | What it does                          |
| ------------------- | ------------------------------------- |
| `bun run dev`       | Start the dev server on port 3000     |
| `bun run build`     | Build for production into `.output/`  |
| `bun run preview`   | Preview the production build locally  |
| `bun run typecheck` | Type-check with TypeScript            |
| `bun run lint`      | Lint with Biome                       |
| `bun run check`     | Lint and check formatting with Biome  |

## Project structure

```text
public/              Static files served from the site root
  sitemap.xml        Video sitemap submitted to Google Search Console
  robots.txt
  llms.txt           Plain-text summary of the project for AI crawlers
  manifest.webmanifest, og-image.png, logo.png, icons
src/
  routes/
    __root.tsx       HTML shell, <head> metadata, header and footer
    index.tsx        Home page
  components/        Header, Footer and shadcn/ui components
  lib/
    links.ts         Repo, download, author and YouTube links
    seo.ts           Site URL, titles, descriptions and JSON-LD
```

## Updating content

- **Links** (GitHub repo, download, YouTube video): edit `src/lib/links.ts`.
- **SEO copy and structured data**: edit `src/lib/seo.ts`.
- **New demo video**: update `YOUTUBE_VIDEO_ID` in `src/lib/links.ts`, the `VideoObject` in `src/lib/seo.ts`, and the `<video:video>` entry in `public/sitemap.xml`.
- **New pages**: add a route under `src/routes/` and a matching `<url>` entry in `public/sitemap.xml`.

## Related

- [AULA F75 Mac Driver](https://github.com/Itzadetunji/aula-f75-mac-driver): the macOS app
- [Demo video](https://www.youtube.com/watch?v=Qc0JmPmlfGw)

## Author

Built by [Adetunji Adeyinka](https://itzadetunji.com) · [GitHub](https://github.com/Itzadetunji) · [YouTube](https://www.youtube.com/@itzadetunji)
