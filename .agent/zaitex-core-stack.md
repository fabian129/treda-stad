# Zaitex Engine — Core Stack & Standards
**Version:** 1.1 (Build-Verified)

This document defines the mandatory environment configuration for any project using the "Zaitex Engine" design system.

## 📦 Mandatory Dependencies
To support the standard "Monospace DNA" visual effects (Glassmorphism, 3D Grids, Digital Rain), the following packages **MUST** be installed during initialization:

```bash
# Core UI & Motion
npm install framer-motion lenis lucide-react class-variance-authority clsx tailwind-merge

# 3D Experience (Three.js + Drei Helpers)
npm install three @react-three/fiber @react-three/drei
npm install -D @types/three

# Advanced Scrolly-telling (GSAP)
npm install gsap @gsap/react
```

## 🛡️ Robust Component Patterns

### 1. Canvas & Ref Handling (`DigitalRain`)
*Problem:* TypeScript strict mode often flags `canvas` access inside classes/effects as "possibly null" in production builds.
*Standard Pattern:*
- Do not rely on closure capture of `ref.current` inside generic classes.
- Explicitly pass `width`, `height`, and `context` to update/draw methods.
- Ensure `useEffect` cleanup handles listener removal.

### 2. Polymorphic Components (`TextScramble`)
*Problem:* Dynamic `as` props (e.g., rendering as `h1` or `span`) can cause "Type 'string' is not assignable to type 'never'" errors during build.
*Standard Pattern:*
- Use `const Comp = as as any;` casting inside the component body if generic typing becomes overly restrictive for simple text wrappers.

## 🏗️ Build Verification
Always run the following check before confirming a feature complete:
`npm run build`
*Reason:* Dev server (Turbopack) is permissive; Production build is strict.
