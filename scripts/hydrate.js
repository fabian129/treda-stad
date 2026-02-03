const fs = require('fs');
const path = require('path');

/**
 * ZAITEX HYDRATOR (v3.0 - Enhanced)
 * 
 * This script reads design_dna.json and generates globals.css
 * Run via: npm run hydrate
 */

// Detect project root
let projectRoot = process.cwd();
if (fs.existsSync(path.join(projectRoot, 'zaitex-web'))) {
  projectRoot = path.join(projectRoot, 'zaitex-web');
}

// DNA file locations (check multiple paths for flexibility)
const DNA_PATHS = [
  path.join(process.cwd(), '.agent', 'design', 'design_dna.json'),  // New location
  path.join(process.cwd(), 'design_dna.json'),                       // Legacy location
];

const CSS_PATH = path.join(projectRoot, 'app', 'globals.css');
const BACKUP_PATH = path.join(projectRoot, 'app', 'globals.css.backup');

// Find DNA file
function findDnaFile() {
  for (const dnaPath of DNA_PATHS) {
    if (fs.existsSync(dnaPath)) {
      return dnaPath;
    }
  }
  return null;
}

// Hex to HSL converter
function hexToHsl(hex) {
  let c = hex.substring(1).split('');
  if (c.length === 3) c = [c[0], c[0], c[1], c[1], c[2], c[2]];
  c = '0x' + c.join('');
  let r = (c >> 16) & 255;
  let g = (c >> 8) & 255;
  let b = c & 255;
  r /= 255; g /= 255; b /= 255;
  let cmin = Math.min(r, g, b), cmax = Math.max(r, g, b), delta = cmax - cmin, h = 0, s = 0, l = 0;
  if (delta === 0) h = 0;
  else if (cmax === r) h = ((g - b) / delta) % 6;
  else if (cmax === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;
  h = Math.round(h * 60);
  if (h < 0) h += 360;
  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  return `${h} ${(s * 100).toFixed(1)}% ${(l * 100).toFixed(1)}%`;
}

function hydrate() {
  console.log('');
  console.log('💧 ZAITEX HYDRATOR v3.0');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📂 Project Root: ${projectRoot}`);

  // Find DNA file
  const dnaPath = findDnaFile();
  if (!dnaPath) {
    console.error('');
    console.error('❌ Error: design_dna.json not found.');
    console.error('   Looked in:');
    DNA_PATHS.forEach(p => console.error(`   - ${p}`));
    console.error('');
    console.error('💡 Tip: Copy a template from .agent/core/design-templates/');
    process.exit(1);
  }
  console.log(`🎨 DNA Found: ${dnaPath}`);

  // Parse DNA
  let dna;
  try {
    dna = JSON.parse(fs.readFileSync(dnaPath, 'utf8'));
  } catch (e) {
    console.error('❌ Error: Invalid JSON in design_dna.json');
    console.error(e.message);
    process.exit(1);
  }

  // Extract values with defaults
  const vars = dna.theme_injection?.root_vars || {};
  const background = hexToHsl(vars['--background'] || '#ffffff');
  const foreground = hexToHsl(vars['--foreground'] || '#0a0a0a');
  const primary = hexToHsl(vars['--primary'] || '#18181b');
  const primaryFg = hexToHsl(vars['--primary-foreground'] || '#ffffff');
  const secondary = hexToHsl(vars['--secondary'] || '#71717a');
  const secondaryFg = hexToHsl(vars['--secondary-foreground'] || '#fafafa');
  const muted = hexToHsl(vars['--muted'] || '#f4f4f5');
  const mutedFg = hexToHsl(vars['--muted-foreground'] || '#71717a');
  const accent = hexToHsl(vars['--accent'] || '#18181b');
  const accentFg = hexToHsl(vars['--accent-foreground'] || '#fafafa');
  const border = hexToHsl(vars['--border'] || '#e5e7eb');
  const radius = vars['--radius'] || '0.5rem';

  console.log('');
  console.log('📊 Extracted Values:');
  console.log(`   Primary: ${vars['--primary'] || '#18181b'} → ${primary}`);
  console.log(`   Background: ${vars['--background'] || '#ffffff'} → ${background}`);
  console.log(`   Radius: ${radius}`);

  // Backup existing CSS
  if (fs.existsSync(CSS_PATH)) {
    fs.copyFileSync(CSS_PATH, BACKUP_PATH);
    console.log('');
    console.log(`💾 Backup created: ${BACKUP_PATH}`);
  }

  // Generate CSS
  const cssContent = `@import "tailwindcss";

@theme {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));
  --color-popover: hsl(var(--popover));
  --color-popover-foreground: hsl(var(--popover-foreground));
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));

  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  /* Zaitex Animations */
  --animate-grain: grain 8s steps(10) infinite;
  --animate-border-beam: border-beam calc(var(--duration)*1s) infinite linear;

  @keyframes grain {
    0%, 100% { transform: translate(0, 0); }
    10% { transform: translate(-5%, -10%); }
    20% { transform: translate(-15%, 5%); }
    30% { transform: translate(7%, -25%); }
    40% { transform: translate(-5%, 25%); }
    50% { transform: translate(-15%, 10%); }
    60% { transform: translate(15%, 0%); }
    70% { transform: translate(0%, 15%); }
    80% { transform: translate(3%, 35%); }
    90% { transform: translate(-10%, 10%); }
  }

  @keyframes border-beam {
    100% { offset-distance: 100%; }
  }
}

@layer base {
  :root {
    --background: ${background};
    --foreground: ${foreground};
    --card: ${background};
    --card-foreground: ${foreground};
    --popover: ${background};
    --popover-foreground: ${foreground};
    --primary: ${primary};
    --primary-foreground: ${primaryFg};
    --secondary: ${secondary};
    --secondary-foreground: ${secondaryFg};
    --muted: ${muted};
    --muted-foreground: ${mutedFg};
    --accent: ${accent};
    --accent-foreground: ${accentFg};
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: ${border};
    --input: ${border};
    --ring: ${primary};
    --radius: ${radius};
  }
}

@layer base {
  * {
    border-color: hsl(var(--border));
  }
  body {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
  }
}`;

  // Ensure directory exists
  const dir = path.dirname(CSS_PATH);
  if (!fs.existsSync(dir)) {
    console.error(`❌ Error: Directory not found: ${dir}`);
    process.exit(1);
  }

  // Write CSS
  fs.writeFileSync(CSS_PATH, cssContent);

  console.log('');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('✅ HYDRATION COMPLETE');
  console.log(`   ${CSS_PATH} updated with DNA values`);
  console.log('');
}

hydrate();
