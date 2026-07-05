## 2026-07-04 - Global Keyboard Focus Indicators
**Learning:** Native browser focus indicators are often suppressed or insufficient in custom-styled static sites, making keyboard navigation difficult for accessibility.
**Action:** Always verify keyboard navigation and add a global `:focus-visible` CSS rule using existing theme colors to ensure accessible focus states without impacting mouse users.

## 2026-07-04 - Semantic Navigation State for Screen Readers
**Learning:** Static HTML sites without client-side routers often lack semantic indicators for active links, which can disorient screen reader users navigating site menus. Using just CSS classes like `.active` is not enough.
**Action:** Always ensure that visually highlighted active navigation links include `aria-current="page"` and that the container `<nav>` has a descriptive `aria-label` to provide the same navigational context to assistive technologies.
