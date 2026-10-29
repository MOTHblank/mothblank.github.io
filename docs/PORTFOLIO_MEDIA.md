# Portfolio catalog and media

The app release/legal-information manifest stays in `_data/apps.json`. Public development projects live separately in `_data/projects.json`. Only add projects that you are comfortable disclosing publicly; many repositories are private, and unapproved private repository links must not be published.

The shared overview includes render localized copy from `_data/product_pages.json` while retaining project-specific themes, intro text, sections, and feature icons.

## Authentic screenshots and videos

The initial `_data/media.json` entries are empty because this repository does not provide verified product screenshots. A gallery appears only after genuine assets are added.

1. Export real application screenshots as compressed WebP/JPEG at a suitable resolution to `assets/media/<app-id>/`.
2. Add images to the corresponding array in `_data/media.json`. Include `kind: "image"`, the existing local `src`, numerical `width` and `height`, and bilingual `alt` and `caption` values.
3. For video, include `kind: "video"`, `src`, `mime` (e.g. `video/mp4`), bilingual `alt` and `caption`; optional `poster` and `captions` paths map `en`/`pt-BR` to WebVTT files.
4. Never present mockups or conceptual artwork as currently implemented features.

Example **only after** `assets/media/phosphor-archive/campaign.webp` is added:

```json
{
  "phosphor-archive": [{
    "kind": "image",
    "src": "/assets/media/phosphor-archive/campaign.webp",
    "width": 1280,
    "height": 720,
    "alt": {
      "en": "Phosphor Archive campaign screenshot",
      "pt-BR": "Captura da campanha do Phosphor Archive"
    },
    "caption": {
      "en": "Campaign combat",
      "pt-BR": "Combate na campanha"
    }
  }]
}
```

Gallery images can be opened directly by keyboard-accessible links; video uses native controls. The catalog filter is progressively enhanced: with JavaScript disabled all project cards remain visible.
