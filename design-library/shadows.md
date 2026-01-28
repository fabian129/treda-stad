# Zaitex Shadow System
## Named Shadow Presets

**Purpose:** Consistent, premium shadow system across all components  
**Usage:** Reference shadow names instead of random values

---

## Shadow Categories

### 1. Soft Shadows (Minimal/Clean Aesthetic)

#### `shadow-soft-sm`
**Use:** Subtle elevation, cards, buttons
```css
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
```

#### `shadow-soft-md`
**Use:** Moderate elevation, dropdowns, modals
```css
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
```

#### `shadow-soft-lg`
**Use:** High elevation, popovers, tooltips
```css
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
```

---

### 2. Medium Shadows (Balanced Aesthetic)

#### `shadow-medium-sm`
**Use:** Standard cards, panels
```css
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
```

#### `shadow-medium-md`
**Use:** Elevated cards, floating elements
```css
box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.15),
            0 4px 8px -2px rgba(0, 0, 0, 0.1);
```

#### `shadow-medium-lg`
**Use:** Modals, overlays
```css
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15),
            0 10px 10px -5px rgba(0, 0, 0, 0.08);
```

---

### 3. Deep Shadows (Tech Dark Aesthetic)

#### `shadow-deep-sm`
**Use:** Dark mode cards, subtle depth
```css
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
```

#### `shadow-deep-md`
**Use:** Dark mode elevated elements
```css
box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.4),
            0 6px 12px -4px rgba(0, 0, 0, 0.3);
```

#### `shadow-deep-lg`
**Use:** Dark mode modals, major elevation
```css
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5),
            0 12px 24px -6px rgba(0, 0, 0, 0.4);
```

---

### 4. Multi-Layer Shadows (Premium/Luxury)

#### `shadow-multi-sm`
**Use:** Glassmorphic cards, premium feel
```css
box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05),
            0 2px 2px rgba(0, 0, 0, 0.05),
            0 4px 4px rgba(0, 0, 0, 0.05),
            0 8px 8px rgba(0, 0, 0, 0.05);
```

#### `shadow-multi-md`
**Use:** Floating dashboards, 3D elements
```css
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08),
            0 4px 8px rgba(0, 0, 0, 0.08),
            0 8px 16px rgba(0, 0, 0, 0.08),
            0 16px 32px rgba(0, 0, 0, 0.08);
```

#### `shadow-multi-lg`
**Use:** Hero dashboards, major 3D elements
```css
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1),
            0 8px 16px rgba(0, 0, 0, 0.1),
            0 16px 32px rgba(0, 0, 0, 0.1),
            0 32px 64px rgba(0, 0, 0, 0.1);
```

---

### 5. Colored Shadows (Brand Accent)

#### `shadow-primary` (Indigo/Blue)
**Use:** Primary buttons, CTAs
```css
box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
```

#### `shadow-accent` (Purple/Pink)
**Use:** Accent elements, highlights
```css
box-shadow: 0 4px 12px rgba(192, 132, 252, 0.4);
```

#### `shadow-success` (Green)
**Use:** Success states, positive actions
```css
box-shadow: 0 4px 12px rgba(34, 197, 94, 0.4);
```

#### `shadow-warning` (Orange)
**Use:** Warning states, attention
```css
box-shadow: 0 4px 12px rgba(249, 115, 22, 0.4);
```

#### `shadow-error` (Red)
**Use:** Error states, destructive actions
```css
box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
```

---

### 6. Glow Effects (Atmospheric)

#### `shadow-glow-sm`
**Use:** Subtle glow, ambient light
```css
box-shadow: 0 0 20px rgba(99, 102, 241, 0.15);
```

#### `shadow-glow-md`
**Use:** Moderate glow, aurora effects
```css
box-shadow: 0 0 40px rgba(99, 102, 241, 0.2),
            0 0 80px rgba(99, 102, 241, 0.1);
```

#### `shadow-glow-lg`
**Use:** Strong glow, spotlight effects
```css
box-shadow: 0 0 60px rgba(99, 102, 241, 0.3),
            0 0 120px rgba(99, 102, 241, 0.2),
            0 0 180px rgba(99, 102, 241, 0.1);
```

---

### 7. Inner Shadows (Inset/Depth)

#### `shadow-inner-sm`
**Use:** Pressed buttons, input fields
```css
box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.1);
```

#### `shadow-inner-md`
**Use:** Recessed panels, wells
```css
box-shadow: inset 0 4px 8px 0 rgba(0, 0, 0, 0.15);
```

#### `shadow-inner-glow`
**Use:** Glassmorphic rim light
```css
box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.2);
```

---

### 8. Atmospheric Shadows (Background Effects)

#### `shadow-atmospheric-top`
**Use:** Eclipse effect, top glow
```css
box-shadow: 0 -20px 50px -10px rgba(249, 115, 22, 0.15);
```

#### `shadow-atmospheric-bottom`
**Use:** Rising console, bottom glow
```css
box-shadow: 0 20px 50px -10px rgba(99, 102, 241, 0.15);
```

#### `shadow-atmospheric-radial`
**Use:** Spotlight, radial glow
```css
box-shadow: 0 0 150px 40px rgba(249, 115, 22, 0.15);
```

---

## Tailwind Integration

Add to `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        // Soft
        'soft-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'soft-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        
        // Medium
        'medium-sm': '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        'medium-md': '0 8px 16px -4px rgba(0, 0, 0, 0.15), 0 4px 8px -2px rgba(0, 0, 0, 0.1)',
        'medium-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)',
        
        // Deep
        'deep-sm': '0 4px 8px 0 rgba(0, 0, 0, 0.3)',
        'deep-md': '0 12px 24px -8px rgba(0, 0, 0, 0.4), 0 6px 12px -4px rgba(0, 0, 0, 0.3)',
        'deep-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 12px 24px -6px rgba(0, 0, 0, 0.4)',
        
        // Multi-layer
        'multi-sm': '0 1px 1px rgba(0,0,0,0.05), 0 2px 2px rgba(0,0,0,0.05), 0 4px 4px rgba(0,0,0,0.05), 0 8px 8px rgba(0,0,0,0.05)',
        'multi-md': '0 2px 4px rgba(0,0,0,0.08), 0 4px 8px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.08), 0 16px 32px rgba(0,0,0,0.08)',
        'multi-lg': '0 4px 8px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1), 0 16px 32px rgba(0,0,0,0.1), 0 32px 64px rgba(0,0,0,0.1)',
        
        // Colored
        'primary': '0 4px 12px rgba(79, 70, 229, 0.4)',
        'accent': '0 4px 12px rgba(192, 132, 252, 0.4)',
        'success': '0 4px 12px rgba(34, 197, 94, 0.4)',
        'warning': '0 4px 12px rgba(249, 115, 22, 0.4)',
        'error': '0 4px 12px rgba(239, 68, 68, 0.4)',
        
        // Glow
        'glow-sm': '0 0 20px rgba(99, 102, 241, 0.15)',
        'glow-md': '0 0 40px rgba(99, 102, 241, 0.2), 0 0 80px rgba(99, 102, 241, 0.1)',
        'glow-lg': '0 0 60px rgba(99, 102, 241, 0.3), 0 0 120px rgba(99, 102, 241, 0.2), 0 0 180px rgba(99, 102, 241, 0.1)',
        
        // Inner
        'inner-sm': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        'inner-md': 'inset 0 4px 8px 0 rgba(0, 0, 0, 0.15)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.2)',
        
        // Atmospheric
        'atmospheric-top': '0 -20px 50px -10px rgba(249, 115, 22, 0.15)',
        'atmospheric-bottom': '0 20px 50px -10px rgba(99, 102, 241, 0.15)',
        'atmospheric-radial': '0 0 150px 40px rgba(249, 115, 22, 0.15)',
      }
    }
  }
}
```

---

## Usage by Aesthetic

### Tech Dark
- Cards: `shadow-deep-md`
- Modals: `shadow-deep-lg`
- Dashboards: `shadow-multi-lg` + `shadow-atmospheric-bottom`
- Buttons: `shadow-primary`

### Minimal Clean
- Cards: `shadow-soft-md`
- Modals: `shadow-soft-lg`
- Buttons: `shadow-soft-sm`

### Glassmorphic Luxury
- Cards: `shadow-multi-md` + `shadow-inner-glow`
- Floating elements: `shadow-multi-lg`
- Glows: `shadow-glow-md`

### Brutalist Bold
- Cards: `shadow-medium-lg` (hard edges)
- No glow effects
- High contrast

---

**Total Presets:** 30+  
**Categories:** 8  
**Integration:** Tailwind-ready
