# Hello, I'm Ellem 👋

Agile Coach and Software Architect passionate about building scalable systems and helping teams deliver value.

## 🚀 About Me

- Agile Coach leading transformation across multiple teams
- Background in software development and system architecture
- Focused on .NET, Cloud and distributed systems
- Passionate about high-performing engineering teams

## 🛠 Tech Stack

- .NET
- Azure
- Microservices
- Docker
- Kubernetes
- GitHub Actions
- Agile / Scrum

## 📂 Current Focus

- Agile transformation
- Software architecture
- Engineering productivity
- AI tools for development teams

## 🌎 Connect with me

LinkedIn  
https://linkedin.com/in/ellemmatos

---

⭐ Always learning. Always improving systems and teams.
## Topic Registry

Blog topics are now centrally defined in `docs/_data/topics.yml`.
This registry is the source of truth for navigation labels and topic paths.

Topics are now used by:
- header navigation
- homepage topic cards

This prepares the blog for modular rendering and future integration with
`ai-content-factory`.

## Post Metadata

Posts can now define richer editorial metadata in frontmatter:
- `topic`
- `project`
- `series`
- `episode`
- `summary`
- `tags`

These fields are optional and extend the basic `layout`, `title`, `date`, and
`categories` structure without breaking older posts.

## Post Series

Posts can define series navigation using:
- `series`
- `episode`

When multiple posts share the same `series`, the post layout can render a
series navigation block with all episodes ordered by `episode`.

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

## Project Pages

Project pages aggregate posts that share the same `project` metadata field.

- Project registry: `docs/_data/projects.yml`
- Project pages: `docs/projects/`
- Post list include: `docs/_includes/project-post-list.html`

When a post defines `project`, the post metadata automatically links to the
matching project page when the project exists in the registry.
