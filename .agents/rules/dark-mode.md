---
trigger: always_on
---

import os

# Define the content for the Markdown file
markdown_content = """# Resona Dark Mode Protocol: The "Zero-Regression" Framework

## 1. THE GOLDEN RULE: BAN HARDCODED UTILITIES
**Strict Prohibition:** You are forbidden from using hardcoded color utilities in components. 
* **Bad:** `<div className="bg-white text-navy-900 border-gray-200">`
* **Good:** `<div className="bg-surface text-primary-text border-divider">`

If a color utility is used without a semantic token, it is a **regression** and must be rejected.

---

## 2. THE SEMANTIC TOKEN SYSTEM (CSS Variables)
All colors must be defined in `globals.css` using CSS variables. We define tokens based on **intent**.

### Layer 1: The Root (Light Mode)
```css
:root {
  /* BACKGROUNDS */
  --background: 255 255 255;      /* Main Page BG */
  --surface: 249 250 251;         /* Card/Section BG */
  --surface-alt: 243 244 246;     /* Sidebar/Recessed BG */
  
  /* TEXT */
  --text-primary: 0 31 63;        /* Main Navy Headlines */
  --text-secondary: 71 85 105;    /* Muted Slate Body */
  --text-inverse: 255 255 255;    /* Text on Navy backgrounds */
  
  /* BORDERS & ACCENTS */
  --border: 229 231 235;
  --brand-coral: 255 127 80;      /* Primary Action Color */
  --brand-navy: 0 31 63;          /* Secondary Action Color */
  
  /* SHADOWS (Soft for light mode) */
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
}

