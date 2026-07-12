## 2026-07-04 - Global Keyboard Focus Indicators
**Learning:** Native browser focus indicators are often suppressed or insufficient in custom-styled static sites, making keyboard navigation difficult for accessibility.
**Action:** Always verify keyboard navigation and add a global `:focus-visible` CSS rule using existing theme colors to ensure accessible focus states without impacting mouse users.

## 2026-07-04 - Semantic Navigation State for Screen Readers
**Learning:** Static HTML sites without client-side routers often lack semantic indicators for active links, which can disorient screen reader users navigating site menus. Using just CSS classes like `.active` is not enough.
**Action:** Always ensure that visually highlighted active navigation links include `aria-current="page"` and that the container `<nav>` has a descriptive `aria-label` to provide the same navigational context to assistive technologies.

## 2026-07-04 - Contextual labels for generic links
**Learning:** Using generic link text like "Privacy Policy" multiple times across different product cards can be confusing for screen reader users who navigate by links out of context.
**Action:** Always add descriptive `aria-label` attributes to repetitive action links to provide full context (e.g., `aria-label="[Product Name] Privacy Policy"`).

## 2026-07-04 - Skip-to-Content Links
**Learning:** Repetitive navigation headers can be tedious for keyboard and screen reader users to tab through on every page load.
**Action:** Always include a hidden skip-to-content link at the very top of the DOM (right after the `<body>` tag) that becomes visible on focus and jumps to the main `<main id="main-content">` content area.

## 2026-07-08 - WCAG 1.4.1 Color as State
**Learning:** Relying solely on a color change (like changing text color to cyan) to indicate active state fails WCAG 1.4.1 for users with color vision deficiencies.
**Action:** Always include a secondary visual indicator, such as an underline (`text-decoration: underline`) or a border, alongside color changes for state indicators like active navigation links.

## 2026-07-09 - Respecting prefers-reduced-motion for Smooth Scrolling
**Learning:** Global CSS rules like `scroll-behavior: smooth` can trigger motion sickness or discomfort for users with vestibular disorders when navigating via in-page links (like skip-to-content or hash links).
**Action:** Always wrap global motion or animation CSS rules, specifically `scroll-behavior: smooth`, in a `@media (prefers-reduced-motion: no-preference)` query to respect user OS preferences.

## 2026-07-11 - Accessibility Warnings for External and Email Links
**Learning:** Links that open in new tabs (`target="_blank"`) or trigger external applications (`mailto:`) can be extremely disorienting for screen reader users and users with cognitive disabilities if they happen unexpectedly without prior warning. Furthermore, just adding a title isn't enough; `aria-label` should also contain the link's text content to remain compliant with WCAG 2.5.3 (Label in Name).
**Action:** Always add warnings to such links using both `title` and `aria-label`. Ensure the `aria-label` includes the exact visible text of the link followed by the warning (e.g., `aria-label="[Visible Link Text] (opens in a new tab)"` or `aria-label="[Visible Email] (opens email client)"`).
## 2026-07-12 - Skip-to-content focus management
**Learning:** Adding a "skip to main content" link is not enough if the `<main>` element cannot receive programmatic focus.
**Action:** Always add `tabindex="-1"` to the target of a skip link (e.g., `<main id="main-content" tabindex="-1">`) so the browser can move focus to it. Additionally, add `outline: none;` on focus for that element to prevent unwanted visual focus rings on layout elements.
