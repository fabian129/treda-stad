---
description: Comprehensive guide for optimizing Next.js applications for mobile devices and varying screen sizes, covering layout, typography, touch targets, images, performance, and testing.
---

# Mobile & Responsive Design Skill

This skill provides a production-ready guide for building fully responsive Next.js (App Router) applications that work seamlessly across all devices — from small phones (320px) to large desktops (1536px+). All examples use Tailwind CSS and Next.js conventions.

---

## 1. Core Principles

**Mobile-First**: Always write base styles for the smallest screen, then use breakpoints (`sm:`, `md:`, `lg:`) to progressively enhance for larger screens. Never write desktop styles first and try to override them down.

**Fluidity over Fixed Widths**: Use `%`, `vw/vh`, `flex`, or `grid` instead of hardcoded `px` widths. Fixed widths are the most common cause of broken mobile layouts.

**Touch-First Interaction**: Assume the user is using a finger, not a mouse. This affects button sizes, spacing, hover states, and scroll behavior.

**Performance = SEO**: Google ranks faster sites higher. On mobile, performance matters even more due to slower network connections. Every optimization below also improves your Lighthouse score.

---

## 2. Breakpoint Strategy (Tailwind CSS)

Use this breakpoint system consistently throughout the project. When in doubt, only use `md:` and `lg:` — adding too many breakpoints creates unmaintainable code.

| Breakpoint | Min Width | Primary Use Case |
| :--- | :--- | :--- |
| **Default** | 0px | Mobile portrait — all base styles go here |
| `sm:` | 640px | Mobile landscape / small tablets — use sparingly |
| `md:` | 768px | Tablets — **the main layout switch point** |
| `lg:` | 1024px | Laptops / large tablets |
| `xl:` | 1280px | Desktops |
| `2xl:` | 1536px | Large / wide screens |

**Rule of thumb**: If a component only needs two states (mobile and desktop), only use `md:`. Avoid adding `sm:` unless you genuinely need a third breakpoint.

---

## 3. Layout Patterns

### Stack-to-Row (Most Common Pattern)
Elements stack vertically on mobile and sit side-by-side on desktop.

```tsx
<div className="flex flex-col md:flex-row gap-4">
  <div className="w-full md:w-1/2">Left Content</div>
  <div className="w-full md:w-1/2">Right Content</div>
</div>
```

### Responsive Grid
Use for card grids, feature lists, and team sections.

```tsx
{/* 1 column mobile → 2 tablet → 3 desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

### Page Container
Constrain max width on large screens while keeping full width on mobile. Use this wrapper on every page.

```tsx
<div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
  {/* Content */}
</div>
```

### Mobile Navigation (Hamburger Menu)
Hide the desktop nav on mobile. Show a toggle button that opens a drawer or full-screen overlay.

```tsx
"use client";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-4 py-3 flex items-center justify-between">
      <a href="/" className="font-bold text-xl">Logo</a>

      {/* Mobile toggle — hidden on desktop */}
      <button
        className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Desktop nav — hidden on mobile */}
      <nav className="hidden md:flex gap-6">
        <a href="/about" className="hover:underline">About</a>
        <a href="/services" className="hover:underline">Services</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col p-4 gap-4 md:hidden z-50">
          <a href="/about" className="py-3 text-lg" onClick={() => setIsOpen(false)}>About</a>
          <a href="/services" className="py-3 text-lg" onClick={() => setIsOpen(false)}>Services</a>
          <a href="/contact" className="py-3 text-lg" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}
```

### Hiding Elements Per Breakpoint

```tsx
{/* Only visible on mobile */}
<div className="block md:hidden">Mobile Only</div>

{/* Only visible on desktop */}
<div className="hidden md:block">Desktop Only</div>
```

---

## 4. Typography & Scaling

### Responsive Headings
Scale headings significantly between mobile and desktop. Large headings on mobile waste space and wrap poorly.

```tsx
<h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">
  Hero Headline
</h1>

<h2 className="text-2xl md:text-4xl font-semibold">
  Section Title
</h2>

<p className="text-base md:text-lg leading-relaxed">
  Body text — never go below text-base (16px) on mobile.
</p>
```

### Minimum Font Sizes — Critical for Mobile SEO
- **Body text**: minimum `text-base` (16px). Google flags smaller text as a usability issue.
- **Input fields**: minimum `text-base` (16px). Going below 16px causes iOS Safari to auto-zoom on focus, breaking the layout.
- **Small labels / captions**: minimum `text-sm` (14px) — never smaller.

### Fluid Typography with Clamp
For smooth scaling between breakpoints without layout jumps, use CSS `clamp()`:

```tsx
{/* Scales smoothly from 2rem (mobile) to 4rem (desktop) */}
<h1 className="text-[clamp(2rem,5vw,4rem)] font-bold">
  Fluid Headline
</h1>
```

### Line Length (Readability)
Long lines of text are hard to read on wide screens. Constrain prose with `max-w-prose`:

```tsx
<p className="max-w-prose mx-auto text-base leading-relaxed">
  Long body copy that stays readable on all screen sizes.
</p>
```

---

## 5. Touch Targets & Interaction

Fingers are imprecise. Small or densely packed elements frustrate users and hurt your Google Mobile Usability score.

### Minimum Size: 44×44px
All interactive elements must meet the Apple / Google minimum of 44×44px.

```tsx
{/* ✅ Good — tall enough to tap comfortably */}
<button className="min-h-[44px] px-6 text-base rounded-md bg-blue-600 text-white">
  Submit
</button>

{/* ✅ Good — icon button with invisible tap area */}
<button className="min-h-[44px] min-w-[44px] flex items-center justify-center">
  <svg className="w-5 h-5">...</svg>
</button>

{/* ❌ Bad — too small, hard to tap */}
<button className="p-1 text-xs">×</button>
```

### Spacing Between Tap Targets
Ensure at least 8px of space between adjacent interactive elements.

```tsx
<div className="flex gap-2 flex-wrap">
  <button className="min-h-[44px] px-4">Option A</button>
  <button className="min-h-[44px] px-4">Option B</button>
  <button className="min-h-[44px] px-4">Option C</button>
</div>
```

### Input Fields
Always set `text-base` on inputs to prevent the iOS auto-zoom bug.

```tsx
<input
  type="email"
  className="w-full text-base border rounded-md px-4 py-3 min-h-[44px]"
  placeholder="your@email.com"
/>
```

---

## 6. Images & Media

### Always Use `next/image`
Never use a plain `<img>` tag. `next/image` automatically serves correctly sized images per device, converts to WebP, and lazy-loads by default.

```tsx
import Image from "next/image";

{/* Hero / full-width image */}
<div className="relative w-full h-[300px] md:h-[500px]">
  <Image
    src="/hero.jpg"
    alt="Descriptive alt text — always required"
    fill
    sizes="100vw"
    priority              // Only use on the first visible image (improves LCP)
    className="object-cover"
  />
</div>

{/* Content image — fixed proportions */}
<Image
  src="/feature.jpg"
  alt="Feature description"
  width={800}
  height={450}
  sizes="(max-width: 768px) 100vw, 50vw"
  className="w-full h-auto rounded-lg"
/>

{/* Logo / icon — never scaled */}
<Image
  src="/logo.png"
  alt="Company Logo"
  width={120}
  height={40}
/>
```

**`sizes` guide** — tell the browser what size the image will be rendered at:
- Full width on all devices: `sizes="100vw"`
- Full width mobile, half on desktop: `sizes="(max-width: 768px) 100vw, 50vw"`
- Full width mobile, one-third on desktop: `sizes="(max-width: 768px) 100vw, 33vw"`

### Preventing Overflow from Media
Videos and iframes can break mobile layouts if not constrained:

```tsx
{/* Responsive video embed */}
<div className="relative w-full aspect-video">
  <iframe
    src="https://www.youtube.com/embed/..."
    className="absolute inset-0 w-full h-full"
    allowFullScreen
  />
</div>
```

---

## 7. Preventing Horizontal Scroll

Horizontal scroll on mobile is one of the most common layout bugs and a direct SEO penalty. Fix it globally and defensively.

### Global Fix (`globals.css`)

```css
html,
body {
  overflow-x: hidden;
  max-width: 100%;
}

* {
  box-sizing: border-box; /* Prevents padding from expanding element width */
}
```

### In Tailwind (root layout body tag)

```tsx
<body className="overflow-x-hidden">
  ...
</body>
```

### Common Causes to Watch For
- Fixed-width elements wider than the viewport (e.g. `w-[500px]` on mobile)
- Negative margins that push content off-screen
- `white-space: nowrap` on text without overflow handling
- Long unbroken words or URLs — fix with `break-words`:

```tsx
<p className="break-words">https://very-long-url-that-could-overflow.com/some/path</p>
```

---

## 8. Viewport & Device Meta Tags

Next.js App Router handles the viewport meta tag automatically when you define `metadata` in `layout.tsx`. Be explicit to ensure correct behavior:

```typescript
// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5, // Allow pinch-to-zoom (important for accessibility)
  },
};
```

**Do not** set `user-scalable=no` or `maximum-scale=1`. This blocks users from zooming and is both an accessibility violation and a negative SEO signal.

---

## 9. 100vh Bug on Mobile Browsers

Mobile browsers (especially iOS Safari) include the browser chrome (address bar) in `100vh`, causing content to be cut off. Use this workaround:

```css
/* globals.css */
.full-height {
  height: 100vh;
  height: 100dvh; /* dvh = "dynamic viewport height" — fixes the iOS Safari bug */
}
```

```tsx
{/* Tailwind arbitrary value */}
<section className="h-[100dvh]">
  Full screen hero section
</section>
```

---

## 10. Verification Checklist

Work through this list before shipping any page.

**Layout**
- [ ] No horizontal scroll at 320px width (iPhone SE — the smallest common device)
- [ ] Content has left/right padding on mobile — minimum `px-4`
- [ ] No fixed-width elements that break on narrow screens
- [ ] Max-width container centers content on wide screens

**Typography**
- [ ] All body text is at least 16px (`text-base`)
- [ ] All input fields are at least 16px to prevent iOS zoom
- [ ] Headings scale down reasonably on mobile and don't overflow

**Touch & Interaction**
- [ ] All buttons and links are at least 44×44px
- [ ] Tappable elements have enough spacing between them
- [ ] Mobile navigation opens and closes correctly

**Images & Media**
- [ ] All images use `next/image` with proper `alt` text
- [ ] Hero image uses `priority` prop
- [ ] `sizes` attribute is set correctly on content images
- [ ] Video embeds use `aspect-video` wrapper

**Cross-Browser**
- [ ] Tested in Chrome DevTools Device Mode
- [ ] Tested on a real iOS device (Safari quirks)
- [ ] Tested on a real Android device
- [ ] Full-height sections use `100dvh` instead of `100vh`

---

## 11. Development Workflow

1. **Start narrow**: Begin development at 375px width (iPhone 14 size). Build the mobile layout first.
2. **Chrome DevTools Device Mode**: Use the responsive toolbar to test different widths. Test at 320px, 375px, 768px, 1024px, and 1280px as a minimum.
3. **Real Device Testing**: Always test on a physical phone before shipping. Emulators miss scroll behavior, font rendering, and touch quirks.
4. **Lighthouse Audit**: Run `Lighthouse → Mobile` in Chrome DevTools. Aim for 90+ on Performance, Accessibility, and SEO.
5. **Google Search Console**: After deploying, check the **Mobile Usability** report under *Experience* for any flagged issues.
