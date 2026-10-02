# Page Structure & UX Flow

## 01 - Hero / Cover

**Purpose:** immediate ceremonial reveal.

Content:

- small blessing / opening line
- `Wedding Ceremony`
- date / time
- couple names
- one CTA: `View Invitation`

Visual:

- ivory paper background
- framed card
- slow gold particle field behind the frame
- floral ornaments at top-left / bottom-right

Interaction:

`View Invitation` smoothly scrolls to the invitation message.

---

## 02 - Couple Reveal

Present the main couple pairing using the same hierarchy found in the source:

```text
Jawed Akhtar
weds
Nikhat Parween

and

Gulnaz Anjum
weds
Hafiz Md Firdaus
```

Use large calligraphic English names and smaller supporting text.

On mobile, use a single column. On desktop, use two balanced columns.

---

## 03 - Invitation Message

A centered reading section based on the formal invitation language in the source.

Structure:

- opening invocation
- host / parents
- invitation sentence
- decorative divider
- short Urdu/English passage

Keep line length below roughly 65-75 characters where possible.

---

## 04 - Programme Timeline

Convert the printed programme box into a responsive timeline.

Source-derived entries:

| Event | Date | Time |
|---|---|---|
| 1st Nikah | Fri. 23 Oct. 2026 | 09:00 PM |
| 2nd Nikah | Sun. 25 Oct. 2026 | 09:00 PM |
| Dawate Walima | same programme section | 10:00 PM |
| Sunnat | Thu. 29 Oct. 2026 | 10:00 AM |

Do not hide date/time behind hover.

Desktop layout:

```text
left card ---- timeline ---- right card
```

Mobile layout:

```text
timeline line
   |
 event card
   |
 event card
   |
 event card
```

---

## 05 - Venue / Location

Use a quiet content block for:

- venue name
- address
- location note
- `Open in Maps` CTA

A photo or decorative map illustration can sit behind the text, but the address must remain readable HTML text.

---

## 06 - Family / RSVP

Use the formal family and RSVP material from the printed invitation.

Recommended UI:

```text
R.S.V.P.
Names / contact

[ Confirm attendance ]
[ Contact host ]
```

For a simple version, keep the RSVP button as a mailto/tel action. Add a form only when a backend is available.

---

## 07 - Closing Blessing

End with:

- floral ornament
- short blessing / thank-you
- couple names again
- subtle gold WebGL glow

Optional audio control can be added later, but keep it opt-in and muted by default.

---

# Navigation

For a single-page invitation, use a very small floating nav:

```text
Invite   Programme   RSVP
```

On mobile, collapse to a compact menu button.

The invitation should also work naturally without navigation: users can simply scroll from top to bottom.

# Scroll behavior

- smooth scrolling
- section IDs for deep linking
- active section indicator only on desktop
- avoid scroll-jacking

# Accessibility

- all text is real HTML, not canvas text
- buttons have visible focus states
- sufficient contrast for body copy
- motion honors `prefers-reduced-motion`
- `aria-label` on icon-only controls
- decorative SVG/WebGL layers marked `aria-hidden="true"`
