# mothblank.github.io

## Search discovery and project pages

The bilingual portfolio uses Jekyll page metadata, application data in `_data/apps.json`, and project data in `_data/projects.json`.

- `sitemap.xml` is generated from all language-marked pages (including project details and policy pages); `robots.txt` links to it.
- The default layout emits `MobileApplication` JSON-LD only for Android overview pages, with verified Google Play links when a listing exists. Do not add ratings, offers, download statistics, or release availability without evidence.
- Curated project cards point to bilingual detail pages under `/projects/` and `/pt-BR/projects/`. When adding a new project, add the two small front-matter pages as well as its data record.

## Real media assets

Project screenshots are intentionally absent until an actual product capture is available. Put optimized screenshots under `assets/screenshots/` (WebP or AVIF), then set the corresponding `screenshot` field in `_data/projects.json`:

```json
"screenshot": {
  "src": "/assets/screenshots/project-name.webp",
  "width": 1280,
  "height": 720,
  "alt": {
    "en": "Actual screen showing ...",
    "pt-BR": "Tela real mostrando ..."
  }
}
```

For Android product pages, add a `screenshots` array in `_data/apps.json` using the same structure; the gallery renders only when authentic images are provided. All screenshots load lazily and include explicit dimensions.

For a product-specific social card, create a **PNG or JPEG** with real app imagery (ideally 1200×630) and set `social_image` on the corresponding app record. Avoid naming an external social asset unless it exists at the exact committed path. The layout uses `/home.png` as fallback until then. Do not use decorative or fabricated UI images as though they were screenshots. The `social_image` entry is shared by both languages; use a language-neutral visual or specify page-level `social_image` for localized versions.
