# Contributing to Treda Städ

## 🌳 Branch Workflow

We use **feature branches** to keep `main` stable. Never push directly to `main`.

### Starting New Work

```bash
# Get latest code
git checkout main
git pull origin main

# Create your feature branch
git checkout -b feature/your-feature-name
```

### Branch Naming

| Type | Pattern | Example |
|------|---------|---------|
| New feature | `feature/description` | `feature/add-booking-form` |
| Bug fix | `fix/description` | `fix/navbar-scroll` |
| Refactor | `refactor/description` | `refactor/cleanup-components` |

### Saving Your Work

```bash
# Stage all changes
git add .

# Commit with a descriptive message
git commit -m "Add booking form with validation"

# Push to GitHub
git push origin feature/your-feature-name
```

### Creating a Pull Request

1. Go to [github.com/fabian129/treda-stad](https://github.com/fabian129/treda-stad)
2. Click the "Compare & pull request" banner
3. Fill in the PR description
4. Request review from your teammate
5. After approval, merge the PR

## 🤖 Using the AI Agent

You can ask the agent to handle git for you:

- *"Create a feature branch for [your task]"*
- *"Commit my changes with message: [your message]"*
- *"Push my branch to GitHub"*
- *"Show me what files I've changed"*

## ✅ Before Merging Checklist

- [ ] Code works locally (`npm run dev`)
- [ ] No console errors
- [ ] Reviewed by teammate
- [ ] Branch is up to date with main
