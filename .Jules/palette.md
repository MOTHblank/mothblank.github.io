## 2026-07-04 - Global Keyboard Focus Indicators
**Learning:** Native browser focus indicators are often suppressed or insufficient in custom-styled static sites, making keyboard navigation difficult for accessibility.
**Action:** Always verify keyboard navigation and add a global `:focus-visible` CSS rule using existing theme colors to ensure accessible focus states without impacting mouse users.

## 2026-07-04 - Semantic Navigation State for Screen Readers
**Learning:** Static HTML sites without client-side routers often lack semantic indicators for active links, which can disorient screen reader users navigating site menus. Using just CSS classes like `.active` is not enough.
**Action:** Always ensure that visually highlighted active navigation links include `aria-current="page"` and that the container `<nav>` has a descriptive `aria-label` to provide the same navigational context to assistive technologies.

## 2026-07-04 - Contextual labels for generic links
**Learning:** Using generic link text like "Privacy Policy" multiple times across different product cards can be confusing for screen reader users who navigate by links out of context.
**Action:** Always add descriptive `aria-label` attributes to repetitive action links to provide full context (e.g., `aria-label="[Product Name] Privacy Policy"`).
