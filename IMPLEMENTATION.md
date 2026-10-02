# Implementation Guide

## 1. Install

```bash
npm create vite@latest wedding-invitation -- --template react
cd wedding-invitation
npm install
npm install tailwindcss @tailwindcss/vite three @react-three/fiber @react-three/drei lucide-react
```

Tailwind CSS currently documents the Vite plugin approach using `tailwindcss` + `@tailwindcss/vite`, then `@import "tailwindcss"` in the CSS entry file. React Three Fiber documents direct Vite setup with `three` and `@react-three/fiber`; its major version must match the React major version.

## 2. Vite config

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

## 3. CSS entry

```css
/* src/index.css */
@import "tailwindcss";

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

  font-family: Georgia, 'Times New Roman', serif;
  color: var(--color-ink);
  background: var(--color-paper);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  background: var(--color-paper);
}

::selection {
  background: var(--color-gold);
  color: var(--color-ink);
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 4. Invitation data

```js
// src/data/invitation.js
export const invitation = {
  title: 'Wedding Ceremony',
  headlineDate: '25 October 2026',
  headlineDay: 'Sunday',
  headlineTime: '09:00 PM',

  couples: [
    {
      personA: 'Jawed Akhtar',
      personB: 'Nikhat Parween',
    },
    {
      personA: 'Gulnaz Anjum',
      personB: 'Hafiz Md Firdaus',
    },
  ],

  programme: [
    { title: '1st Nikah', date: '23 October 2026', time: '09:00 PM' },
    { title: '2nd Nikah', date: '25 October 2026', time: '09:00 PM' },
    { title: 'Dawate Walima', date: '', time: '10:00 PM' },
    { title: 'Sunnat', date: '29 October 2026', time: '10:00 AM' },
  ],

  host: 'Mrs. & Mr. Md. Junaid Alam',
  city: 'Aurangabad (Bihar)',
}
```

## 5. Decorative WebGL scene

Keep this scene intentionally simple.

```jsx
// src/components/webgl/InvitationScene.jsx
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import { useRef } from 'react'

function HaloOrb() {
  const mesh = useRef()

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.z = state.clock.elapsedTime * 0.05
    mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.08
  })

  return (
    <Float speed={0.4} rotationIntensity={0.12} floatIntensity={0.25}>
      <mesh ref={mesh} scale={2.4}>
        <torusGeometry args={[1, 0.025, 16, 96]} />
        <meshBasicMaterial color="#C4A05A" transparent opacity={0.28} />
      </mesh>
    </Float>
  )
}

export default function InvitationScene() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <Sparkles count={32} scale={[8, 5, 3]} size={1.2} speed={0.18} color="#E1C98F" />
        <HaloOrb />
      </Canvas>
    </div>
  )
}
```

Use it only in the hero or closing section:

```jsx
<section className="relative min-h-[100svh] overflow-hidden">
  <InvitationScene />

  <div className="relative z-10">
    {/* Invitation content */}
  </div>
</section>
```

## 6. Ornamental section frame

```jsx
export function SectionFrame({ children, className = '' }) {
  return (
    <div className={`relative mx-auto max-w-6xl p-2 md:p-3 ${className}`}>
      <div className="border border-[var(--color-gold)]/80 p-5 md:p-8">
        <div className="border border-black/10 p-5 md:p-10">
          {children}
        </div>
      </div>
    </div>
  )
}
```

## 7. Couple reveal example

```jsx
function CoupleBlock({ personA, personB }) {
  return (
    <div className="text-center">
      <h2 className="font-serif text-5xl italic leading-none tracking-tight md:text-7xl">
        {personA}
      </h2>
      <div className="my-4 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--color-emerald)]">
        <span className="h-px w-10 bg-[var(--color-gold)]" />
        weds
        <span className="h-px w-10 bg-[var(--color-gold)]" />
      </div>
      <h3 className="font-serif text-4xl italic md:text-6xl">{personB}</h3>
    </div>
  )
}
```

## 8. Programme card

```jsx
function ProgrammeCard({ item }) {
  return (
    <article className="border border-[var(--color-gold)]/70 bg-white/20 p-5 md:p-6">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-emerald)]">
        Ceremony
      </p>
      <h3 className="mt-2 font-serif text-3xl italic">{item.title}</h3>
      <p className="mt-3 text-sm text-[var(--color-ink-soft)]">
        {[item.date, item.time].filter(Boolean).join(' · ')}
      </p>
    </article>
  )
}
```

## 9. WebGL performance rules

- Keep particle counts low.
- Do not load GLTF/large textures for a simple invitation.
- Keep WebGL decorative, never essential.
- Prefer one canvas per page, not one canvas per section.
- Use `dpr={[1, 1.5]}` rather than unconstrained device pixel ratios.
- Consider disabling the canvas on devices that report low capability.
- Honor reduced-motion preferences.

## 10. Deployment

The site is suitable for static hosting after:

```bash
npm run build
npm run preview
```

Deploy the `dist/` output to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or another static host.

## 11. Content safety / accuracy

Treat the invitation data as source content. Do not silently rewrite names, dates, family relationships, or programme timings. Because the source has both a headline ceremony date and a multi-event programme, surface those fields exactly where provided rather than attempting to reconcile them automatically.
