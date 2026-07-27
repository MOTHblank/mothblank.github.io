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

## 2026-07-13 - Inline Styles Breaking CSS Pseudo-Classes
**Learning:** Using inline styles for attributes like `background` and `color` to dynamically theme a component directly overrides the component's CSS pseudo-classes (e.g., `:hover`), breaking essential interactive feedback.
**Action:** Always use CSS custom properties (variables) mapped in the base CSS class (e.g., `background: var(--btn-bg)`) and override the variable value via inline styles (e.g., `style="--btn-bg: var(--accent-amber)"`). This approach safely themes the element while preserving interactive CSS pseudo-class states.

## 2026-07-14 - Theming Focus Indicators with CSS Custom Properties
**Learning:** Hardcoding a color for `:focus-visible` outlines breaks component-specific theming. If a card or component uses a different accent color, a hardcoded focus ring will look out of place and break the visual harmony.
**Action:** Use CSS custom properties for focus indicators with a fallback (e.g., `outline: 2px solid var(--focus-ring, var(--default-color))`). This allows specific components to override the `--focus-ring` variable, ensuring accessibility states remain on-theme and visually integrated.

## 2026-07-28 - Persistent Visual Indicators for Links (WCAG 1.4.1)
**Learning:** Relying purely on a color difference to distinguish inline links (or footer links) from surrounding text fails WCAG 1.4.1 (Use of Color). Furthermore, sighted users are not warned about links opening in a new tab if it's only defined in `aria-label`.
**Action:** Always provide a secondary persistent visual indicator for inline links, such as an underline. For external links opening in new tabs, add a visual indicator like an arrow (↗) using CSS pseudo-elements so sighted users receive the same expectation as screen reader users.
## 2026-07-15 - [Screen Reader Context for Logo Links]
**Learning:** In projects without a templating engine, structural elements like navigation logos are duplicated across all HTML files. These are often missing descriptive ARIA labels, causing screen readers to announce the link text verbatim (e.g., "MOTHBLANK") without clarifying its function as a "Home" button.
**Action:** Always check the primary logo link in navigation bars for an `aria-label` (e.g., "BrandName - Home") and ensure the fix is propagated across all static HTML files to maintain consistent accessibility.

## 2026-07-17 - Visual Warnings for Context Switches (mailto:)
**Learning:** While screen readers get context from `aria-label` about external links and mailto triggers, sighted keyboard and mobile users do not see `title` attribute tooltips. This means they lack a visual warning before a major context switch, like launching an external email app.
**Action:** Always provide a persistent visual indicator (like an envelope icon `✉` via CSS `::after`) for `mailto:` links, similarly to how `target="_blank"` links should have an external link icon (`↗`).

## 2026-07-18 - Keyboard Focus UX Parity (Hover == Focus)
**Learning:** Only providing basic focus outlines (`:focus-visible`) while reserving rich visual interactions (like colors, transforms, or border highlights) exclusively for mouse users (`:hover`) creates an unequal and less intuitive experience for keyboard users.
**Action:** Always verify that interactive elements provide UX parity. Combine `:hover` and `:focus-visible` selectors (or `:focus-within` for parent containers) so keyboard users receive the same visual feedback and context cues as mouse users.

## 2026-07-29 - Scroll Margin for Sticky Headers
**Learning:** When using sticky headers, navigating to anchor links (like "Skip to main content") can cause the target element to be scrolled to the top of the viewport and hidden beneath the header.
**Action:** Always add `scroll-margin-top` to target elements (like `<main>`) matching or slightly exceeding the height of the sticky header to ensure they remain visible when focused.

## 2024-06-25 - Interactive elevation and contextual icon scaling
**Learning:** Combining parent container interactive feedback (elevation/box-shadow via `:focus-within` and `:hover`) with playful, synchronized scaling of internal visual anchors (icons) provides a cohesive and delightful context cue that is universally available to both mouse and keyboard users.
**Action:** Always link primary container interactions with appropriate visual feedback on distinct child elements, utilizing `:focus-within` for containers with focusable children to ensure equivalent UX across interaction modalities.

## 2026-07-03 - Dark Theme Print Legibility
**Learning:** Browsers strip CSS background colors by default during printing but keep explicitly set text colors. For dark-themed sites, this results in illegible "white-on-white" printed pages, which is especially critical for legal documents like Privacy Policies and EULAs.
**Action:** Always include a `@media print` stylesheet for dark themes that resets CSS custom properties to light values (white background, black text) and hides unnecessary interactive UI elements (headers, footers, buttons) for optimal document legibility.
## 2026-07-23 - [Consolidated UI Polish in Dark Themes]
**Learning:** Consolidating multiple micro-UX improvements (prefers-reduced-motion, transparent underline transitions, dark-mode scrollbars, and selection styling) into a single pass can provide an immediate holistic polish, but violates the strict "ONE micro-UX improvement" constraint of this agent persona.
**Action:** When acting as Palette, strictly isolate only ONE specific visual or accessibility enhancement per task to align with the prompt, even if multiple improvements fit easily within a 50-line limit.
## 2024-07-24 - [Anchor Link Offset for Sticky Headers]
**Learning:** In projects with a fixed/sticky header, assigning `scroll-margin-top` exclusively to semantic elements like `<main>` isn't sufficient for nested anchor links (`<section id="features">`, etc.). When users click jump links, the target scrolls completely to the top of the viewport and becomes obscured behind the sticky header.
**Action:** Always apply the scroll-margin offset to all potential anchor targets globally using the universal id selector `[id] { scroll-margin-top: [header_height]px; }`. This solves the issue cleanly without JavaScript and ensures deep linking is consistently accessible.

## 2026-07-30 - Robust Skip Link Hiding
**Learning:** Hardcoding a negative `top` value (like `top: -40px`) to hide a "Skip to main content" link is fragile and can cause a visual sliver of the link's border or outline to bleed into the top of the viewport depending on device scaling, padding, or browser rendering.
**Action:** Always use `transform: translateY(-100%)` along with `top: 0` to robustly hide skip links completely out of the viewport. Ensure focus transitions target `transform` to slide the link smoothly into view.

## 2026-07-31 - Edge-Aligned Focus Rings (WCAG 2.4.11)
**Learning:** For elements positioned flush against the viewport edges (like a sticky "Skip to main content" link at `top: 0; left: 0;`), standard focus rings with positive `outline-offset` values will be cropped or entirely hidden by the browser window.
**Action:** Always apply a negative `outline-offset` (e.g., `-2px` or `-4px`) to edge-aligned elements on `:focus-visible` so the focus ring is drawn inset, remaining 100% visible and compliant with focus appearance requirements.
