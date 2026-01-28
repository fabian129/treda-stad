# Zaitex Animation Presets
## Framer Motion Configuration Library

**Purpose:** Reusable, premium animation configs  
**Usage:** Import presets instead of writing custom animations

---

## Entrance Animations

### 1. Slide Up (Cinematic)
**Use:** Hero sections, major elements  
**Feel:** Heavy, deliberate, impactful

```tsx
export const slideUpCinematic = {
  initial: { opacity: 0, y: 60, rotateX: 15 },
  animate: { opacity: 1, y: 0, rotateX: 0 },
  transition: { 
    duration: 1.2, 
    ease: [0.16, 1, 0.3, 1], // Custom ease-out
    delay: 0.2 
  }
}

// Usage
<motion.div {...slideUpCinematic}>
```

### 2. Slide Up (Snappy)
**Use:** Cards, list items, quick reveals  
**Feel:** Fast, responsive, modern

```tsx
export const slideUpSnappy = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.4, 
    ease: "easeOut" 
  }
}
```

### 3. Fade In
**Use:** Subtle reveals, text, backgrounds  
**Feel:** Soft, gentle, minimal

```tsx
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 }
}
```

### 4. Scale In
**Use:** Modals, popovers, tooltips  
**Feel:** Popping, attention-grabbing

```tsx
export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { 
    duration: 0.3, 
    ease: [0.16, 1, 0.3, 1] 
  }
}
```

### 5. Slide From Left
**Use:** Sidebars, navigation, panels  
**Feel:** Directional, spatial

```tsx
export const slideFromLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { 
    duration: 0.5, 
    ease: "easeOut" 
  }
}
```

---

## Stagger Animations

### 6. Stagger Children (Fast)
**Use:** Lists, grids, multiple cards  
**Feel:** Sequential, organized

```tsx
export const staggerFast = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  }
}

// Usage
<motion.div variants={staggerFast.container} initial="initial" animate="animate">
  <motion.div variants={staggerFast.item} />
  <motion.div variants={staggerFast.item} />
</motion.div>
```

### 7. Stagger Children (Slow)
**Use:** Hero content, major sections  
**Feel:** Deliberate, cinematic

```tsx
export const staggerSlow = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  },
  item: {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }
}
```

---

## Continuous Animations

### 8. Floating (Slow)
**Use:** Dashboards, 3D elements, hero visuals  
**Feel:** Weightless, premium

```tsx
export const floatingSlow = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
}
```

### 9. Floating (Fast)
**Use:** Icons, small elements  
**Feel:** Playful, active

```tsx
export const floatingFast = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
}
```

### 10. Pulse
**Use:** Notifications, status indicators  
**Feel:** Attention, alive

```tsx
export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
}
```

### 11. Rotate (Slow)
**Use:** Loading states, decorative elements  
**Feel:** Continuous, processing

```tsx
export const rotateSlow = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity
    }
  }
}
```

---

## Scroll-Linked Animations

### 12. Parallax (Slow)
**Use:** Background elements, atmosphere  
**Feel:** Depth, 3D

```tsx
import { useScroll, useTransform } from "framer-motion"

export const useParallaxSlow = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -200])
  return { y }
}

// Usage
const { y } = useParallaxSlow()
<motion.div style={{ y }}>
```

### 13. Parallax (Fast)
**Use:** Foreground elements, content  
**Feel:** Speed, motion

```tsx
export const useParallaxFast = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -400])
  return { y }
}
```

### 14. Fade On Scroll
**Use:** Sections, reveals  
**Feel:** Progressive disclosure

```tsx
export const useFadeOnScroll = () => {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  return { opacity }
}
```

---

## Hover Animations

### 15. Lift On Hover
**Use:** Cards, buttons, interactive elements  
**Feel:** Responsive, tactile

```tsx
export const liftOnHover = {
  whileHover: { 
    y: -4, 
    transition: { duration: 0.2 } 
  }
}
```

### 16. Scale On Hover
**Use:** Images, icons, clickable elements  
**Feel:** Zoom, focus

```tsx
export const scaleOnHover = {
  whileHover: { 
    scale: 1.05, 
    transition: { duration: 0.3 } 
  }
}
```

### 17. Glow On Hover
**Use:** Buttons, CTAs, premium elements  
**Feel:** Highlight, premium

```tsx
export const glowOnHover = {
  whileHover: { 
    boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
    transition: { duration: 0.3 } 
  }
}
```

---

## Spring Physics

### 18. Bouncy Spring
**Use:** Playful interactions, fun brands  
**Feel:** Elastic, energetic

```tsx
export const bouncySpring = {
  type: "spring",
  stiffness: 400,
  damping: 10
}

// Usage
<motion.div 
  animate={{ scale: 1 }}
  transition={bouncySpring}
>
```

### 19. Smooth Spring
**Use:** Professional interactions, smooth UX  
**Feel:** Polished, refined

```tsx
export const smoothSpring = {
  type: "spring",
  stiffness: 200,
  damping: 20
}
```

### 20. Heavy Spring
**Use:** Large elements, dashboards, 3D  
**Feel:** Weighty, substantial

```tsx
export const heavySpring = {
  type: "spring",
  stiffness: 50,
  damping: 15
}
```

---

## Easing Curves

### 21. Custom Ease Out (Smooth)
**Use:** Most animations, default choice  
**Feel:** Natural, polished

```tsx
export const easeOutSmooth = [0.16, 1, 0.3, 1]

// Usage
transition: { ease: easeOutSmooth }
```

### 22. Custom Ease Out (Sharp)
**Use:** Quick interactions, snappy UX  
**Feel:** Responsive, immediate

```tsx
export const easeOutSharp = [0.4, 0, 0.2, 1]
```

### 23. Custom Ease In Out (Balanced)
**Use:** Symmetrical animations  
**Feel:** Balanced, controlled

```tsx
export const easeInOutBalanced = [0.65, 0, 0.35, 1]
```

---

## Exit Animations

### 24. Slide Down Exit
**Use:** Modals, overlays closing  
**Feel:** Dismissive, clean

```tsx
export const slideDownExit = {
  exit: { 
    opacity: 0, 
    y: 40,
    transition: { duration: 0.3 }
  }
}
```

### 25. Scale Out Exit
**Use:** Popovers, tooltips closing  
**Feel:** Shrinking, disappearing

```tsx
export const scaleOutExit = {
  exit: { 
    opacity: 0, 
    scale: 0.9,
    transition: { duration: 0.2 }
  }
}
```

---

## Complete Preset Library File

```tsx
// animations.ts
import { Variants } from "framer-motion"

// Entrance
export const slideUpCinematic: Variants = {
  initial: { opacity: 0, y: 60, rotateX: 15 },
  animate: { opacity: 1, y: 0, rotateX: 0 },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
}

export const slideUpSnappy: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" }
}

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 }
}

// ... (all other presets)

// Easing curves
export const easeOutSmooth = [0.16, 1, 0.3, 1]
export const easeOutSharp = [0.4, 0, 0.2, 1]
export const easeInOutBalanced = [0.65, 0, 0.35, 1]

// Spring configs
export const bouncySpring = { type: "spring", stiffness: 400, damping: 10 }
export const smoothSpring = { type: "spring", stiffness: 200, damping: 20 }
export const heavySpring = { type: "spring", stiffness: 50, damping: 15 }
```

---

## Usage by Aesthetic

### Tech Dark
- Entrance: `slideUpCinematic`
- Continuous: `floatingSlow`
- Spring: `heavySpring`
- Easing: `easeOutSmooth`

### Minimal Clean
- Entrance: `fadeIn`
- Hover: `liftOnHover`
- Spring: `smoothSpring`
- Easing: `easeOutSharp`

### Glassmorphic Luxury
- Entrance: `scaleIn`
- Continuous: `floatingSlow`
- Hover: `glowOnHover`
- Spring: `smoothSpring`

### Brutalist Bold
- Entrance: `slideUpSnappy`
- No continuous animations
- Spring: `bouncySpring`
- Easing: `easeOutSharp`

---

**Total Presets:** 25  
**Categories:** Entrance, Stagger, Continuous, Scroll, Hover, Spring, Easing, Exit  
**Framework:** Framer Motion
