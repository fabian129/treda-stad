# Design System

This document defines the visual language and design system for your project. Update this as you discover new patterns and styles you want to maintain.

---

## 🎨 Color Palette

### Primary Colors
```
Brand Primary: #[hex code]
Brand Secondary: #[hex code]
Accent: #[hex code]
```

### Neutral Colors
```
Background Dark: #[hex code]
Background Light: #[hex code]
Text Primary: #[hex code]
Text Secondary: #[hex code]
Border/Divider: #[hex code]
```

### Semantic Colors
```
Success: #[hex code]
Warning: #[hex code]
Error: #[hex code]
Info: #[hex code]
```

---

## 📝 Typography

### Font Families
```
Heading: [Font Name from Google Fonts or System]
Body: [Font Name]
Mono/Code: [Font Name]
```

### Type Scale
```
Display: 72px / 4.5rem
H1: 48px / 3rem
H2: 36px / 2.25rem
H3: 30px / 1.875rem
H4: 24px / 1.5rem
H5: 20px / 1.25rem
H6: 18px / 1.125rem
Body Large: 18px / 1.125rem
Body: 16px / 1rem
Body Small: 14px / 0.875rem
Caption: 12px / 0.75rem
```

### Font Weights
```
Light: 300
Regular: 400
Medium: 500
Semibold: 600
Bold: 700
```

---

## 📐 Spacing System

Use a consistent spacing scale based on 4px increments:

```
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
4xl: 96px
```

---

## ✨ Visual Effects

### Shadows
```css
/* Subtle elevation */
shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)

/* Card elevation */
shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1)

/* Prominent elevation */
shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1)

/* Glow effects */
glow: 0 0 20px rgba([color], 0.5)
```

### Glassmorphism
```css
backdrop-filter: blur(10px)
background: rgba(255, 255, 255, 0.05)
border: 1px solid rgba(255, 255, 255, 0.1)
```

### Gradients
```css
/* Add your favorite gradient patterns */
gradient-1: linear-gradient(135deg, #[color1] 0%, #[color2] 100%)
gradient-2: linear-gradient(to right, #[color1], #[color2])
```

---

## 🎭 Animation Principles

### Duration
```
Fast: 150ms (hover states, toggles)
Normal: 300ms (most transitions)
Slow: 500ms (page transitions, complex animations)
```

### Easing
```
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
ease-out: cubic-bezier(0, 0, 0.2, 1)
spring: cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

---

## 📱 Breakpoints

```
mobile: 640px
tablet: 768px
desktop: 1024px
wide: 1280px
ultra-wide: 1536px
```

---

## 🖼️ Design References

### Hero Sections
> Add screenshots of hero sections you like here

<!-- Example: -->
<!-- ![Modern Hero Example](../references/hero-examples/example1.png) -->

### Pricing Sections
> Add screenshots of pricing layouts you like here

### Component Examples
> Add screenshots of interesting components (buttons, cards, forms, etc.)

### General Inspiration
> Add any other design references, full pages, or style inspirations

---

## 🎯 Design Principles

1. **Premium & Modern**: Every element should feel polished and contemporary
2. **Dynamic & Alive**: Use micro-animations and hover effects to create engagement
3. **Consistent Spacing**: Follow the spacing system religiously
4. **Accessible**: Maintain proper contrast ratios and readable font sizes
5. **Performance**: Optimize animations and effects for smooth 60fps experiences
