---
description: Guide for optimizing websites for mobile devices, covering layout, performance, and common pitfalls.
---

# Mobile Optimization Skill

This skill provides a comprehensive guide and checklist for optimizing web applications for mobile and tablet devices.

## 1. Core Principles

-   **Mobile-First Thinking:** Design for the smallest screen first, then enhance for larger screens using `md:`, `lg:`, `xl:` breakpoints.
-   **Touch-Friendly:** Intefaces must be tappable. Hover states don't exist on mobile.
-   **Speed is Critical:** Mobile networks can be slow. Optimize assets and code delivery.

## 2. Layout & Structure

### Viewport Configuration
Ensure the viewport meta tag is correctly set in your `layout.tsx` or `index.html`:
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```

### Flexible Layouts
-   **Avoid Fixed Widths:** Never use fixed pixel widths (e.g., `w-[800px]`) for main containers. Use percentages (`w-full`) or `max-w` constraints.
-   **Grid & Flexbox:**
    -   Use `flex-col` on mobile and `md:flex-row` on desktop.
    -   Use `grid-cols-1` on mobile and `md:grid-cols-2` or `lg:grid-cols-3` on larger screens.
    -   **Gap Management:** Reduce `gap` in grids/flex containers on mobile to save space.
-   **Spacing:** Reduce padding and margins on mobile.
    -   Example: `p-6 md:p-12 lg:p-24`
-   **Vertical Space:** Reduce height of decorative elements (e.g., section dividers) to prevent excessive scrolling.

### Handling Overflow
Horizontal scrolling is a common bug on mobile.
-   **Global Fix:** Add `overflow-x-hidden` to the `body` tag in `layout.tsx`.
-   **Container Clipping:** If using absolute positioning or animations (like sliders), ensure the parent container has `overflow-hidden`.

## 3. Content Adaptation & Visibility

-   **Hide Complex Elements:** Some desktop features (complex timelines, heavy "Trust Pillar" grids) may be too cluttered for mobile.
    -   **Strategy:** Use `hidden md:block` to hide them on mobile and show only on desktop.
    -   **Alternative:** Replace with a simplified version for mobile (e.g., a simple list instead of a complex graphic).
-   **Prioritize Content:** Ensure the most important call-to-action (CTA) is visible without excessive scrolling.

## 4. Typography & Readability

-   **Responsive Font Sizes:** Scale down large headings significantly.
    -   Example: `text-4xl` on mobile vs `text-6xl` or `text-7xl` on desktop.
-   **Line Height:** Ensure sufficient line height (`leading-relaxed`) for readability.
-   **Contrast:** Ensure text has sufficient contrast against background, especially outdoors (sunlight).

## 5. Images & Media

-   **Use `next/image`:** Always use the Next.js Image component for automatic optimization (WebP/AVIF, resizing).
-   **Responsive Sizing:**
    -   Use `sizes` prop to tell the browser how large the image will be.
    -   Example: `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"`
-   **Aspect Ratios:** Use `aspect-square` or `aspect-video` to prevent layout shifts (CLS).

## 6. Navigation

-   **Hamburger Menu:** Implement a collapsible menu for mobile.
-   **Touch Targets:** Ensure buttons and links are at least 44x44px. Increase padding if needed.
-   **Sticky Headers:** Consider a sticky header for easy access to navigation, but ensure it doesn't take up too much screen real estate.

## 7. Testing & Debugging

-   **Real Devices:** Always test on a physical phone if possible.
-   **DevTools:** Use Chrome/Safari DevTools Device Mode.
-   **Rotations:** Test landscape mode on mobile.
-   **Smallest Screens:** Test on devices like iPhone SE (320px-375px width) to catch edge cases.
-   **Visual Check:** Look for "squashed" text or overlapping elements.

## Checklist for Optimization

1.  [ ] **No Horizontal Scroll:** Check entire page for side-scrolling.
2.  [ ] **Readable Text:** Is text legible without zooming?
3.  [ ] **Tappable Targets:** Are buttons easy to press?
4.  [ ] **Content Adaptation:** Are complex/cluttering elements hidden or simplified?
5.  [ ] **Images Load Fast:** Are images optimized and lazy-loaded?
6.  [ ] **Navigation Works:** Does the menu open/close smoothly?
7.  [ ] **Content Visibility:** Is all important content visible (not hidden behind other elements)?
