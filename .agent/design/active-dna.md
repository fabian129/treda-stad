# Active DNA — Treda Städ

This is the **single source of truth** for the current project's visual identity. All skills and components should reference this file.

---

## 🎨 Color Palette

### Primary Colors
| Token | Hex | Usage |
|:------|:----|:------|
| `--primary` | `#22C55E` | Buttons, accents, icons |
| `--primary-foreground` | `#FFFFFF` | Text on primary |

### Background Colors
| Token | Hex | Usage |
|:------|:----|:------|
| `--background` | `#FAFAF9` | Page background (warm white) |
| `--card` | `#FFFFFF` | Card surfaces |
| `--muted` | `#F5F5F4` | Subtle backgrounds |

### Text Colors
| Token | Hex | Usage |
|:------|:----|:------|
| `--foreground` | `#1C1917` | Headings, primary text |
| `--secondary` | `#78716C` | Body text, captions |
| `--muted-foreground` | `#A8A29E` | Placeholder, disabled |

### Border & Dividers
| Token | Hex | Usage |
|:------|:----|:------|
| `--border` | `#E7E5E4` | Card borders, dividers |

---

## 📝 Typography

### Font Family
- **Primary**: `DM Sans` (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 700 (Bold)

### Type Scale
| Level | Size | Weight | Usage |
|:------|:-----|:-------|:------|
| Display | 72px / 4.5rem | Bold | Hero headlines |
| H1 | 48px / 3rem | Bold | Page titles |
| H2 | 36px / 2.25rem | Bold | Section headers |
| H3 | 24px / 1.5rem | Bold | Card titles |
| Body | 16px / 1rem | Regular | Paragraphs |
| Small | 14px / 0.875rem | Regular | Captions, labels |

---

## 📐 Spacing

### Section Padding
- **Vertical**: `py-24` (96px) standard, `py-32` (128px) for hero
- **Horizontal**: `px-6` (24px) with `max-w-6xl` or `max-w-7xl`

### Element Gaps
- **Grid items**: `gap-8` (32px)
- **Related items**: `gap-4` (16px)
- **Tight groups**: `gap-2` (8px)

---

## ✨ Visual Effects

### Shadows
```css
--shadow-card: 0 4px 20px rgba(0, 0, 0, 0.08);
--shadow-hover: 0 10px 40px rgba(0, 0, 0, 0.12);
--shadow-glow: 0 0 30px rgba(34, 197, 94, 0.3);
```

### Border Radius
| Element | Radius |
|:--------|:-------|
| Buttons | `rounded-full` or `rounded-xl` |
| Cards | `rounded-3xl` (24px) |
| Images | `rounded-2xl` or `rounded-3xl` |
| Badges | `rounded-full` |

### Glassmorphism
```css
background: rgba(255, 255, 255, 0.8);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
```

---

## 🎭 Motion

### Entrance Animations
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

### Stagger Children
```tsx
staggerChildren: 0.1
```

### Hover Effects
- **Cards**: Lift (`-translate-y-1`) + shadow grow
- **Buttons**: Scale (`scale-105`) + glow
- **Links**: Color transition (`duration-300`)

### Scroll
- **Library**: Lenis
- **Duration**: 1.0s
- **Feel**: Smooth but responsive

---

## 🖼️ Imagery

### Style
- **Tone**: Warm, inviting, lifestyle
- **Subject**: Clean homes, happy families, professional staff
- **Filter**: Slight warmth, avoid cold/clinical

### Technical
- **Format**: WebP preferred, JPEG fallback
- **Max size**: 500KB after optimization
- **Component**: Always use `next/image`

---

## 🎯 Signature Elements

### Organic Blobs
- Soft green gradients (`rgba(34, 197, 94, 0.2)`)
- Blurred edges (`blur-[60px]`)
- Positioned as decorative backgrounds

### Cards
- White background with subtle border
- Rounded 3xl corners
- Soft shadow on hover

### CTAs
- Primary: Green button with white text
- Hover: Shadow glow + slight scale
- Icon: Arrow right on primary CTAs

---

## 📱 Responsive Behavior

### Breakpoints
| Name | Width | Usage |
|:-----|:------|:------|
| Mobile | < 768px | Stack layouts, smaller text |
| Tablet | 768px - 1024px | 2-column grids |
| Desktop | > 1024px | Full layouts |

### Mobile Adjustments
- Hero text: 80% of desktop size
- Section padding: `py-16` instead of `py-24`
- Grid: Single column

---

*Last Updated: 2026-02-03*
