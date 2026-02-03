# Zaitex Agent System

Welcome to the Zaitex Engine — a premium website building system.

---

## 📚 Quick Start

### 1. Understand the Structure
```
.agent/
├── core/                  # UNIVERSAL (shared across projects)
│   ├── 00-philosophy.md   # Core mindset & standards
│   ├── 01-core-stack.md   # Required dependencies
│   ├── skills/            # The agent skills (numbered by pipeline order)
│   ├── section-templates/ # Reusable section blueprints
│   └── workflows/         # Automation scripts
│
├── design/                # PROJECT-SPECIFIC
│   ├── active-dna.md      # Current project's visual identity
│   ├── design-system.md   # Detailed design tokens
│   ├── component-library.md
│   └── references/        # Screenshots & inspiration
│
└── project/               # PROJECT-SPECIFIC content
    ├── page-plan.md       # Section flow
    └── copy.md            # Written content
```

### 2. The Pipeline
Skills are numbered for reading order:

1. `01-design-director` → Research & extract DNA
2. `02-page-planner` → Plan sections
3. `03-layout-architect` → Decide layouts
4. `04-component-selector` → Pick components
5. `05-component-architect` → Build custom components
6. `06-motion-choreographer` → Add animations
7. `07-copywriter` → Write content
8. `08-performance-guardian` → Optimize (NEW)
9. `09-style-propagator` → Ensure consistency (NEW)
10. `10-accessibility-auditor` → Check a11y
11. `11-browser-validator` → Visual QA
12. `12-deployment-packager` → Deploy

### 3. Key Files to Update

| When | Update |
|:-----|:-------|
| Starting a new project | `.agent/design/active-dna.md` with colors, fonts, motion |
| Building a new page | `.agent/project/page-plan.md` with section flow |
| Making a global style change | `.agent/design/active-dna.md` + `lib/style-config.ts` |
| Adding a new reusable pattern | `.agent/core/section-templates/` |

---

## 🚀 Common Commands

```bash
# Start development
npm run dev

# Check for build errors
npm run build

# Deploy to Vercel
npx vercel
```

---

## 📖 Full Documentation

- **Philosophy & Standards**: [00-philosophy.md](./core/00-philosophy.md)
- **Core Stack**: [01-core-stack.md](./core/01-core-stack.md)
- **Skills**: [./core/skills/](./core/skills/)
- **Section Templates**: [./core/section-templates/](./core/section-templates/)
- **Current DNA**: [active-dna.md](./design/active-dna.md)
