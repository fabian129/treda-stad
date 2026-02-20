---
description: Comprehensive guide for optimizing Next.js applications for search engines (SEO), including metadata, sitemaps, structured data, analytics, and mobile/device optimization.
---

# SEO Optimization Skill

This skill provides a reusable blueprint for implementing production-grade SEO in Next.js (App Router) projects. It follows Google's best practices and uses modern Next.js features.

## 1. Metadata Strategy

Next.js 13+ uses the Metadata API for managing `<head>` elements.

### Root Layout (`app/layout.tsx`)
Set a strong default base for the entire application.

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Your Site Name | Keywords",
    template: "%s | Your Site Name", // Adds suffix to child pages
  },
  description: "A compelling, 150-160 character description of your site/service.",
  metadataBase: new URL("https://your-domain.com"), // Base URL for OG images/links
  keywords: ["keyword1", "keyword2", "keyword3"],
  openGraph: {
    type: "website",
    locale: "sv_SE", // Adjust for your language
    url: "https://your-domain.com",
    title: "Your Site Name",
    description: "A compelling description.",
    siteName: "Your Site Name",
    images: [
      {
        url: "/og-image.jpg", // Place in public/ folder
        width: 1200,
        height: 630,
        alt: "Your Site Name",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Site Name",
    description: "A compelling description.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

### Page-Specific Metadata
Override defaults in individual pages (`page.tsx`).

```typescript
export const metadata = {
  title: "Service Name", // Becomes "Service Name | Your Site Name"
  description: "Specific description for this service page.",
};
```

## 2. Technical SEO Files

Create these files in the `app/` directory (root level) to automatically generate essential SEO files.

### Sitemap (`app/sitemap.ts`)
Generates `sitemap.xml` for search engines to crawl your pages.

```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://your-domain.com';

  // Static routes
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic routes (Example: fetch from DB/CMS)
  // const posts = await getPosts();
  // const postRoutes = posts.map(...)

  return [...routes];
}
```

### Robots.txt (`app/robots.ts`)
Controls where search engines are allowed to go.

```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/', // Exclude private routes
    },
    sitemap: 'https://your-domain.com/sitemap.xml',
  };
}
```

## 3. Structured Data (JSON-LD)

Help Google understand your content (Business info, Products, FAQs) by injecting JSON-LD schema.

**Component: `components/seo/StructuredData.tsx`**

```typescript
import Script from "next/script";

export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness", // Or 'Organization', 'ProfessionalService'
    "name": "Your Business Name",
    "image": "https://your-domain.com/logo.png",
    "url": "https://your-domain.com",
    "telephone": "+46-123-456-78",
    "email": "info@your-domain.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Street 1",
      "addressLocality": "City",
      "postalCode": "123 45",
      "addressCountry": "SE"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "priceRange": "$$" // Optional
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```
*Usage: Import and add `<StructuredData />` in `app/layout.tsx` (inside `<body>`).*

## 4. Google Analytics 4 (GA4)

Integrate GA4 without blocking the main thread using `next/script`.

**Component: `components/GoogleAnalytics.tsx`**

```typescript
"use client";

import Script from "next/script";

export function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
```
*Usage: Add `<GoogleAnalytics />` in `app/layout.tsx`. Ensure `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set in your `.env`.*

## 5. Semantic HTML & Accessibility

SEO is also about structure and accessibility.
-   **One `<h1>` per page**: The main title.
-   **Sequential Headings**: `<h2>` follows `<h1>`, `<h3>` follows `<h2>`. Don't skip levels.
-   **Semantic Tags**: Use `<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>` instead of just `<div>`.
-   **Alt Text**: All images must have meaningful `alt` text.

## 6. Mobile & Device Optimization

Google uses **mobile-first indexing**, vilket means the mobile version of your site is what Google primarily uses to rank your pages. This section covers everything needed to be production-ready on all devices.

### 6.1 Viewport Meta Tag

The viewport tag tells browsers how to scale the page on mobile devices. Next.js App Router handles this automatically when you export `metadata` from `layout.tsx`, but you can be explicit:

```typescript
// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  // ... your other metadata
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5, // Allow users to zoom (important for accessibility)
  },
};
```

### 6.2 Responsive Images with `next/image`

Always use Next.js's built-in `<Image>` component instead of a plain `<img>` tag. It handles resizing, lazy loading, and format conversion (WebP) automatically — all of which improve mobile performance and SEO scores.

```typescript
import Image from "next/image";

// ✅ Correct — responsive by default
<Image
  src="/hero.jpg"
  alt="Descriptive text about the image"
  fill             // Makes the image fill its parent container
  sizes="(max-width: 768px) 100vw, 50vw" // Tells browser what size to expect
  priority         // Add this ONLY for above-the-fold images (improves LCP)
  className="object-cover"
/>

// ✅ Fixed size image (e.g. a logo or icon)
<Image
  src="/logo.png"
  alt="Company Logo"
  width={120}
  height={40}
/>
```

**Key rules:**
- Always provide `alt` text.
- Use `priority` only on the first visible image (hero image) — not on images below the fold.
- Use `sizes` to help the browser pick the right image file for the device.

### 6.3 Touch-Friendly Tap Targets

Google penalizes pages where buttons and links are too small or too close together on mobile. Follow these rules in your Tailwind CSS:

```typescript
// ✅ Minimum 44x44px tap target (Apple & Google standard)
<button className="min-h-[44px] min-w-[44px] px-4 py-3">
  Click Me
</button>

// ✅ Links in navigation — add padding so they're easy to tap
<a href="/about" className="py-3 px-2 block">
  About
</a>

// ❌ Avoid — too small, hard to tap on mobile
<button className="p-1 text-xs">X</button>
```

### 6.4 Mobile-Friendly Font Sizes

Text that is too small forces users to pinch-zoom, which Google flags as a mobile usability issue.

```css
/* globals.css — set a solid base */
html {
  font-size: 16px; /* Never go below 16px for body text */
}

/* Or in Tailwind — use text-base (16px) as your minimum body size */
```

```typescript
// ✅ Correct Tailwind usage
<p className="text-base leading-relaxed">Body text here</p>  {/* 16px */}
<h1 className="text-3xl md:text-5xl font-bold">Heading</h1> {/* Scales up on desktop */}

// ❌ Avoid for body text
<p className="text-xs">Important content</p> {/* 12px — too small */}
```

### 6.5 Responsive Layout Patterns

Structure your layouts mobile-first using Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`). This means writing the mobile style first, then overriding for larger screens.

```typescript
// ✅ Mobile-first grid — 1 column on mobile, 3 on desktop
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>

// ✅ Stack vertically on mobile, side-by-side on desktop
<div className="flex flex-col md:flex-row gap-4">
  <aside className="w-full md:w-1/3">Sidebar</aside>
  <main className="w-full md:w-2/3">Content</main>
</div>
```

### 6.6 Preventing Horizontal Scroll

Horizontal scrolling on mobile is a common issue that hurts UX and SEO. Add this to your root layout to prevent it globally:

```css
/* globals.css */
html,
body {
  overflow-x: hidden;
  max-width: 100%;
}
```

And in Tailwind on your top-level wrappers:

```typescript
<body className="overflow-x-hidden">
  ...
</body>
```

### 6.7 Apple & PWA Meta Tags (Bonus)

These tags improve how your site looks when saved to a home screen on iOS and Android:

```typescript
// app/layout.tsx — add to metadata
export const metadata: Metadata = {
  // ... existing metadata
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Your Site Name",
  },
  formatDetection: {
    telephone: true, // Makes phone numbers tappable on iOS
  },
};
```

And add a favicon set in `app/` for all device sizes:

```
app/
  favicon.ico         ← Standard browser favicon
  icon.png            ← Android home screen icon (512x512px recommended)
  apple-icon.png      ← iOS home screen icon (180x180px recommended)
```

Next.js will automatically pick these up and generate the correct `<link>` tags in `<head>`.

### 6.8 Mobile Optimization Summary

| What | Why it matters | How |
|---|---|---|
| Viewport meta tag | Prevents zoomed-out mobile view | Handled via `metadata` in layout.tsx |
| `next/image` | Serves correct image size per device | Replace all `<img>` tags |
| Tap targets ≥ 44px | Prevents "clickable elements too close" warning | Tailwind: `min-h-[44px]` |
| Font size ≥ 16px | Prevents "text too small to read" warning | Tailwind: `text-base` minimum |
| Mobile-first layouts | Google indexes mobile version first | Tailwind: `grid-cols-1 md:grid-cols-3` |
| No horizontal scroll | Broken layout on mobile hurts ranking | `overflow-x-hidden` on body |
| Apple/PWA tags | Better home screen experience | `appleWebApp` in metadata |

## 7. Verification Checklist

1.  **Run Build**: Ensure `npm run build` succeeds (generates sitemaps/robots).
2.  **View Source**: Check `<head>` for title, description, and canonical tags.
3.  **Robots/Sitemap**: Visit `/robots.txt` and `/sitemap.xml` in browser.
4.  **Rich Results Test**: Paste your local host code or deployed URL into [Google's Rich Results Test](https://search.google.com/test/rich-results) to validate JSON-LD.
5.  **Lighthouse**: Run a Lighthouse audit in Chrome DevTools. Check **SEO**, **Accessibility**, and **Performance** scores. Aim for 90+ on all.
6.  **Mobile Usability**: In Google Search Console, check the **Mobile Usability** report for any flagged issues.
7.  **Responsive Check**: Resize your browser from ~320px (small phone) up to 1440px (large desktop) and verify nothing breaks or overflows.
