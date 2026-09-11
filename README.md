# POBU Company

Original dark editorial website built in React 19, TypeScript and the Sites Vinext/Next-compatible runtime. No live AI API or fictional project results are included.

## Content
- `lib/pobu.ts`: replace `siteConfig.logo` with the original logo asset path, add verified contact URLs, and replace the four explicitly illustrative archive slots with approved project records.
- `lib/metadata.ts`: update the canonical origin when a domain is connected.
- `public/favicon.svg`: temporary typographic P favicon; replace using the approved original identity.
- All console interactions are local conceptual demonstrations, not project telemetry.

## Development
Use the project package manager (pnpm) and the existing `dev` and `build` scripts. Sites uses the managed execution profile. No environment secrets are required.

## Discoverability
Metadata, canonical, social text metadata, sitemap, robots and web manifest are included. Once the official domain is public, update the origin, verify ownership in Google Search Console and Naver Search Advisor, and submit `/sitemap.xml`. Private previews cannot be indexed by the public search engines. Search placement is not guaranteed.

## Design
Linear's current public website was studied for hierarchy, restrained surfaces, navigation and working interface demonstrations. POBU's composition, copy and diagrams are original. No Linear assets were copied. The official POBU logo was not attached; the temporary text wordmark is not a final replacement logo.

## Editing the site

Most content can be changed in two files:

- `lib/pobu.ts`: logo path, contact links, fields and project descriptions
- `app/page.tsx`: page sections and visible copy
- `app/globals.css`: colors, typography, spacing and responsive design
- `lib/metadata.ts`: search title, descriptions and the public domain

After editing, run `pnpm build` to verify the project.
