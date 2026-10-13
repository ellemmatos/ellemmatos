# Blog — Technical Notes

Technical documentation for the Jekyll blog published from `docs/` (GitHub Pages).

## Topic Registry

Blog topics are now centrally defined in `docs/_data/topics.yml`.
This registry is the source of truth for navigation labels and topic paths.

Each post sets `topic:` to one of the ids in that file (`ai-delivery`, `ai-news`,
`leadership`, `career`). Topic pages live in `docs/topics/` and list the posts
with that topic.

## Post Metadata

Posts define in frontmatter: `layout`, `title`, `date`, `topic`, `summary`,
`image`, `tags` and `categories` (always `ai`, which keeps the `/ai/YYYY/MM/DD/slug.html`
permalinks stable).

## SEO & Distribution

The blog now includes a basic SEO and distribution layer for public sharing.

- Open Graph metadata for rich previews on LinkedIn and other platforms
- Twitter Card metadata for social sharing
- RSS feed generation via `jekyll-feed`
- Sitemap generation via `jekyll-sitemap`

With the current configuration, GitHub Pages should expose:
- `/feed.xml`
- `/sitemap.xml`

## Social Sharing Metadata

Posts can also define social sharing metadata fields:
- `summary`
- `image`

`summary` is used for description metadata and rich previews.
`image` can override the default social image for a specific post.

## Projects

`docs/_data/projects.yml` lists the public projects shown on the homepage and on
`/projects/`. Each entry links straight to the project (`url`); there are no
per-project pages.

## Post Template

Posts are written by the weekly routine of `ellemmatos/ai-content-factory`,
from its `editorial/templates/blog-post.md` and following
`editorial/content-guidelines.md`. Every published piece is logged in
`content/LOG.md`.
