# Design System

## 1. Core concept

The supplied invitation is visually dominated by monochrome ink, ornate calligraphy, double-line frames, floral ornaments, and formal centered typography. The website should modernize that structure without losing its ceremonial character.

### Style keywords

**Elegant / Islamic / editorial / ceremonial / handcrafted / restrained / luminous**

Avoid:

- neon gradients
- glassmorphism-heavy cards
- oversized app-like UI controls
- excessive confetti or wedding clichés
- high-contrast animated backgrounds competing with the invitation text

---

## 2. Recommended palette - Emerald & Antique Gold

| Token | Hex | Use |
|---|---|---|
| `paper` | `#F7F1E5` | page background |
| `paper-2` | `#EFE6D4` | alternate section background |
| `ink` | `#151515` | primary text |
| `ink-soft` | `#3E3A34` | secondary text |
| `emerald` | `#164C3B` | buttons, labels, section accents |
| `emerald-deep` | `#0D3025` | dark hero/closing section |
| `gold` | `#C4A05A` | borders, dividers, highlights |
| `gold-light` | `#E1C98F` | subtle glow / WebGL accents |
| `rose-muted` | `#B9847A` | optional floral accent |
| `white` | `#FFFDF8` | text on dark surfaces |

### CSS variables

```css
:root {
  --color-paper: #F7F1E5;
  --color-paper-2: #EFE6D4;
  --color-ink: #151515;
  --color-ink-soft: #3E3A34;
  --color-emerald: #164C3B;
  --color-emerald-deep: #0D3025;
  --color-gold: #C4A05A;
  --color-gold-light: #E1C98F;
  --color-rose-muted: #B9847A;
  --color-white: #FFFDF8;
}
```

## 3. Alternative palettes

### A. Ivory + Burgundy + Gold

```text
Paper       #FBF7EF
Ink         #171515
Burgundy    #5B1E2D
AntiqueGold #B99A5A
Rose        #C88B8F
```

This feels more traditional and intimate.

### B. Cream + Midnight + Champagne

```text
Paper       #F5F0E6
Ink         #141414
Midnight    #18232F
Champagne   #D7BB7A
Sage        #76866F
```

This feels quieter and more contemporary.

---

## 4. Typography

Use three roles:

### Display / names

Recommended web fonts:

- `Cormorant Garamond` for English display names
- `Noto Nastaliq Urdu` for Urdu copy

Fallbacks:

```css
font-family: Georgia, 'Times New Roman', serif;
```

Display style:

```text
font-size: clamp(3rem, 9vw, 8rem)
font-weight: 500
line-height: 0.92
letter-spacing: -0.03em
```

### Body

Use a refined serif or humanist sans-serif for long-form readability.

```text
font-size: 1rem - 1.125rem
line-height: 1.7
```

### Utility / ceremony labels

Small uppercase labels with tracking:

```text
font-size: 0.7rem - 0.8rem
letter-spacing: 0.18em
text-transform: uppercase
```

---

## 5. Borders and ornaments

The printed invitation uses rectangular framing. Translate it into the web using:

- outer 1px gold border
- inner 1px low-opacity ink border
- corner flourishes using SVG
- horizontal ornamental dividers
- floral line art placed outside the main reading column

Example:

```jsx
<div className="relative border border-[var(--color-gold)] p-3">
  <div className="border border-black/15 p-6 md:p-10">
    {children}
  </div>
</div>
```

Keep decorative elements `pointer-events-none`.

---

## 6. Buttons

Primary CTA:

```text
Background: emerald
Text: warm white
Border: gold
Radius: full
Height: 44-48px
```

Secondary CTA:

```text
Background: transparent
Text: ink
Border: ink/25%
```

Avoid pill-shaped UI everywhere; reserve pills for RSVP/action controls.

---

## 7. Motion

Motion should feel like paper, silk, or floating light.

Recommended:

- 700-1200ms reveal transitions
- 12-20px vertical translation
- subtle fade + blur removal
- slow orbital WebGL movement
- occasional petal/particle drift

Do not animate the couple's names continuously.

Respect:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 8. WebGL art direction

Use Three.js only for a background atmosphere:

- 1 soft gold orb / halo
- 20-40 small dust particles
- very slow rotation
- pointer-responsive drift at low strength
- no 3D text
- no spinning wedding rings
- no full-screen heavy scene on every section

The actual invitation text remains DOM/HTML for accessibility and crisp rendering.

---

## 9. Responsive rules

### Mobile

- 20-24px page gutters
- single-column couple presentation
- programme cards stack vertically
- ornamental borders become lighter
- hide non-essential WebGL on very low-power/mobile devices

### Tablet

- 32-48px gutters
- couple names can sit in two columns
- programme uses a central vertical line

### Desktop

- max content width: `1100px`
- reading column: `720-820px`
- couple reveal: two-column composition
- florals can extend outside the reading measure

---

## 10. Component visual language

Every major section should feel like a page from the same invitation suite.

Use consistent:

- section title treatment
- ornament divider
- frame border
- serif display typography
- spacing rhythm

The website should never feel like separate templates stitched together.
