# Wedding Invitation Website - Project Brief

A premium digital wedding invitation inspired by the supplied printed invitation. The reference uses a mostly monochrome composition, ornamental borders, floral motifs, ornate calligraphic names, centered ceremony information, and bilingual/Urdu content.

## Recommended visual direction

**Editorial Islamic wedding luxury**: ivory paper background, deep emerald accents, antique-gold detailing, black/ink typography, ornamental borders, and restrained WebGL decoration.

The goal is to feel like a high-end printed invitation brought to life rather than a generic wedding landing page.

## Source-derived content structure

The reference invitation presents:

- Couple names: **Jawed Akhtar & Nikhat Parween** and **Gulnaz Anjum & Hafiz Md Firdaus**.
- A headline wedding ceremony date/time of **October 25, 2026, Sunday, 09:00 p.m.**
- A detailed programme with **1st Nikah, 2nd Nikah, Dawate Walima, and Sunnat** entries.
- Invitation wording from **Mrs. & Mr. Md. Junaid Alam**.
- Family/address/RSVP information.
- Urdu content and decorative Islamic/floral motifs.

Keep the website content editable in one data file so the same UI can be reused for other invitations.

## Tech stack

- Vite + React
- Tailwind CSS v4
- Three.js + React Three Fiber + Drei for lightweight WebGL decoration
- Lucide React for utility icons
- CSS custom properties for the design tokens

Current setup references:

- Vite supports a React template through Create Vite.
- Tailwind CSS v4 provides an official Vite plugin (`@tailwindcss/vite`).
- React Three Fiber works directly with a Vite app and pairs with the matching React major version.

## Start the project

```bash
npm create vite@latest wedding-invitation -- --template react
cd wedding-invitation
npm install
npm install tailwindcss @tailwindcss/vite three @react-three/fiber @react-three/drei lucide-react
npm run dev
```

Then use the configuration in `IMPLEMENTATION.md`.

## Site map

1. Hero / invitation cover
2. Couple reveal
3. Invitation message
4. Programme timeline
5. Venue / location card
6. Family + RSVP
7. Gallery or decorative memory section
8. Final blessing / closing section

## UX principles

- The invitation message should be readable before decorative effects appear.
- Important date/time information should never be hidden inside WebGL.
- Use animation as atmosphere, not as navigation.
- Keep one clear action per section.
- Use generous whitespace and a narrow reading measure.
- Support English and Urdu without forcing either language into an overly dense layout.
- Preserve the visual language of the reference: framed edges, centered hierarchy, florals, calligraphy, and ceremonial labels.

## Suggested folder structure

```text
src/
  components/
    layout/
      SiteHeader.jsx
      SectionFrame.jsx
      OrnamentalDivider.jsx
    invitation/
      Hero.jsx
      CoupleReveal.jsx
      InvitationNote.jsx
      Programme.jsx
      VenueCard.jsx
      FamilyRsvp.jsx
      Closing.jsx
    webgl/
      InvitationScene.jsx
      GoldDust.jsx
      HaloOrb.jsx
  data/
    invitation.js
  styles/
    tokens.css
  App.jsx
  main.jsx
```

## Design files

- `DESIGN-SYSTEM.md` - palette, typography, spacing, components
- `PAGE-STRUCTURE.md` - page-by-page UX and responsive behavior
- `IMPLEMENTATION.md` - Vite/Tailwind/R3F setup and starter code
- `CONTENT-DATA.md` - source-derived invitation data structure
