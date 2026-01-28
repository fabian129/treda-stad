# Zaitex Font Library
## Premium Typography System

**Purpose:** Curated font pairings for different aesthetics  
**Usage:** Reference this when building sections to ensure premium typography

---

## Tech Dark / Modern SaaS

### 1. Geist + JetBrains Mono
**Aesthetic:** Linear, Vercel, modern dev tools  
**Headline:** Geist (800-900 weight)  
**Body:** Geist (400-500 weight)  
**Code:** JetBrains Mono

```tsx
import { Geist, JetBrains_Mono } from 'next/font/google'

const geist = Geist({ subsets: ['latin'], weight: ['400', '500', '800', '900'] })
const jetbrains = JetBrains_Mono({ subsets: ['latin'] })
```

**When to use:** Dev tools, SaaS platforms, technical products

---

### 2. Inter + Fira Code
**Aesthetic:** GitHub, Stripe, clean tech  
**Headline:** Inter (700-900 weight)  
**Body:** Inter (400-500 weight)  
**Code:** Fira Code

```tsx
import { Inter, Fira_Code } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const firaCode = Fira_Code({ subsets: ['latin'] })
```

**When to use:** Dashboards, analytics, data-heavy apps

---

### 3. Space Grotesk + IBM Plex Mono
**Aesthetic:** Geometric, technical, precise  
**Headline:** Space Grotesk (700-900 weight)  
**Body:** Space Grotesk (400-500 weight)  
**Code:** IBM Plex Mono

```tsx
import { Space_Grotesk, IBM_Plex_Mono } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
const ibmPlex = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'] })
```

**When to use:** Crypto, blockchain, fintech

---

## Minimal Clean

### 4. SF Pro Display + SF Mono (System Fonts)
**Aesthetic:** Apple, iOS, macOS  
**Headline:** SF Pro Display (600-800 weight)  
**Body:** SF Pro Text (400-500 weight)  
**Code:** SF Mono

```tsx
// Use system font stack
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif
```

**When to use:** Consumer apps, lifestyle, premium products

---

### 5. Helvetica Neue + Courier New (System)
**Aesthetic:** Classic, timeless, Swiss design  
**Headline:** Helvetica Neue (700 weight)  
**Body:** Helvetica Neue (400 weight)  
**Code:** Courier New

```tsx
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif
```

**When to use:** Corporate, professional services, finance

---

### 6. Sohne + Sohne Mono (Custom - Fallback: Inter)
**Aesthetic:** Stripe-like, sophisticated  
**Headline:** Sohne (600-700 weight)  
**Body:** Sohne (400 weight)  
**Code:** Sohne Mono

```tsx
// Fallback to Inter if Sohne not available
import { Inter } from 'next/font/google'
```

**When to use:** Payment platforms, financial services

---

## Glassmorphic Luxury

### 7. Satoshi + Commit Mono (Custom - Fallback: DM Sans)
**Aesthetic:** Web3, modern luxury  
**Headline:** Satoshi (700-900 weight)  
**Body:** Satoshi (400-500 weight)  
**Code:** Commit Mono

```tsx
import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({ subsets: ['latin'] })
```

**When to use:** NFT platforms, luxury brands, premium products

---

### 8. Clash Display + Inconsolata
**Aesthetic:** Bold, editorial, high-fashion  
**Headline:** Clash Display (600-700 weight)  
**Body:** Inter (400 weight)  
**Code:** Inconsolata

```tsx
import { Inter, Inconsolata } from 'next/font/google'
```

**When to use:** Fashion, creative agencies, portfolios

---

### 9. Cabinet Grotesk + Source Code Pro (Fallback: Work Sans)
**Aesthetic:** Sophisticated, editorial  
**Headline:** Cabinet Grotesk (800 weight)  
**Body:** Cabinet Grotesk (400 weight)  
**Code:** Source Code Pro

```tsx
import { Work_Sans, Source_Code_Pro } from 'next/font/google'
```

**When to use:** Design studios, architecture, high-end services

---

## Brutalist Bold

### 10. Bebas Neue + Roboto Mono
**Aesthetic:** Impact, bold, streetwear  
**Headline:** Bebas Neue (400 weight - already bold)  
**Body:** Roboto (400-500 weight)  
**Code:** Roboto Mono

```tsx
import { Bebas_Neue, Roboto, Roboto_Mono } from 'next/font/google'
```

**When to use:** Fashion, music, events, bold brands

---

### 11. Oswald + Courier Prime
**Aesthetic:** Industrial, strong, masculine  
**Headline:** Oswald (600-700 weight)  
**Body:** Roboto (400 weight)  
**Code:** Courier Prime

```tsx
import { Oswald, Roboto, Courier_Prime } from 'next/font/google'
```

**When to use:** Construction, automotive, industrial

---

### 12. Druk Wide + Mono (Custom - Fallback: Anton)
**Aesthetic:** Ultra-bold, condensed, impactful  
**Headline:** Druk Wide (Heavy)  
**Body:** Inter (400 weight)  
**Code:** Roboto Mono

```tsx
import { Anton, Inter, Roboto_Mono } from 'next/font/google'
```

**When to use:** Sports, energy drinks, extreme brands

---

## Organic Soft

### 13. Fraunces + Lora
**Aesthetic:** Warm, editorial, literary  
**Headline:** Fraunces (700-900 weight)  
**Body:** Lora (400-500 weight)  
**Code:** Source Code Pro

```tsx
import { Fraunces, Lora, Source_Code_Pro } from 'next/font/google'
```

**When to use:** Publishing, blogs, storytelling

---

### 14. Playfair Display + Source Serif Pro
**Aesthetic:** Elegant, classic, refined  
**Headline:** Playfair Display (700-900 weight)  
**Body:** Source Serif Pro (400 weight)  
**Code:** Fira Code

```tsx
import { Playfair_Display, Source_Serif_Pro, Fira_Code } from 'next/font/google'
```

**When to use:** Luxury goods, wine, hospitality

---

### 15. Crimson Pro + Crimson Text
**Aesthetic:** Bookish, academic, traditional  
**Headline:** Crimson Pro (600-700 weight)  
**Body:** Crimson Text (400 weight)  
**Code:** Courier Prime

```tsx
import { Crimson_Pro, Crimson_Text, Courier_Prime } from 'next/font/google'
```

**When to use:** Education, law, traditional institutions

---

## Retro Futurism

### 16. Orbitron + Share Tech Mono
**Aesthetic:** Sci-fi, futuristic, tech  
**Headline:** Orbitron (700-900 weight)  
**Body:** Rajdhani (400-500 weight)  
**Code:** Share Tech Mono

```tsx
import { Orbitron, Rajdhani, Share_Tech_Mono } from 'next/font/google'
```

**When to use:** Gaming, sci-fi, tech startups

---

### 17. Audiowide + VT323
**Aesthetic:** 80s, neon, synthwave  
**Headline:** Audiowide (400 weight)  
**Body:** Exo 2 (400 weight)  
**Code:** VT323

```tsx
import { Audiowide, Exo_2, VT323 } from 'next/font/google'
```

**When to use:** Gaming, music, retro brands

---

### 18. Michroma + Electrolize
**Aesthetic:** Chrome, metallic, futuristic  
**Headline:** Michroma (400 weight)  
**Body:** Electrolize (400 weight)  
**Code:** Share Tech Mono

```tsx
import { Michroma, Electrolize, Share_Tech_Mono } from 'next/font/google'
```

**When to use:** Automotive, tech, futuristic products

---

## Experimental / Artistic

### 19. Righteous + Quicksand
**Aesthetic:** Playful, friendly, approachable  
**Headline:** Righteous (400 weight)  
**Body:** Quicksand (400-500 weight)  
**Code:** Inconsolata

```tsx
import { Righteous, Quicksand, Inconsolata } from 'next/font/google'
```

**When to use:** Kids products, creative apps, fun brands

---

### 20. Monoton + Raleway
**Aesthetic:** Art deco, vintage, elegant  
**Headline:** Monoton (400 weight)  
**Body:** Raleway (400-500 weight)  
**Code:** Courier Prime

```tsx
import { Monoton, Raleway, Courier_Prime } from 'next/font/google'
```

**When to use:** Vintage brands, art galleries, boutiques

---

## Typography Scale

**Use with any pairing:**

```tsx
// Tailwind config
fontSize: {
  'xs': '0.75rem',     // 12px
  'sm': '0.875rem',    // 14px
  'base': '1rem',      // 16px
  'lg': '1.125rem',    // 18px
  'xl': '1.25rem',     // 20px
  '2xl': '1.5rem',     // 24px
  '3xl': '1.875rem',   // 30px
  '4xl': '2.25rem',    // 36px
  '5xl': '3rem',       // 48px
  '6xl': '3.75rem',    // 60px
  '7xl': '4.5rem',     // 72px
  '8xl': '6rem',       // 96px
  '9xl': '8rem',       // 128px
}
```

---

## Usage Guidelines

### Headline Best Practices
- Use 700-900 weight for impact
- Tight tracking (-0.02em to -0.04em)
- Tight line height (1.1 to 1.2)
- Large sizes (text-6xl to text-9xl)

### Body Best Practices
- Use 400-500 weight for readability
- Normal tracking (0em)
- Relaxed line height (1.6 to 1.8)
- Readable sizes (text-base to text-lg)

### Code Best Practices
- Always use monospace
- Medium weight (400-500)
- Slightly larger than body (text-sm to text-base)
- Normal line height (1.5)

---

**Total Pairings:** 20  
**Coverage:** 6 aesthetic categories  
**All fonts:** Available via Google Fonts or system fonts
