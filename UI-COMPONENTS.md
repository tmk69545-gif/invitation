# UI Component Checklist

## Global

- `SiteShell`
- `SectionFrame`
- `OrnamentalDivider`
- `FloralCorner`
- `ScrollReveal`
- `InvitationScene`

## Hero

- `HeroDate`
- `HeroTitle`
- `HeroCoupleNames`
- `PrimaryCTA`

## Ceremony

- `CoupleBlock`
- `ProgrammeTimeline`
- `ProgrammeCard`
- `VenueCard`

## Information

- `HostNote`
- `FamilyList`
- `RsvpCard`

## Footer

- `ClosingBlessing`
- `ContactActions`

## Reusable Tailwind patterns

### Section spacing

```text
py-20 md:py-28 lg:py-36
```

### Reading width

```text
mx-auto max-w-3xl
```

### Decorative divider

```text
flex items-center justify-center gap-3
```

### Framed card

```text
border border-[var(--color-gold)]/70 bg-white/20
```

### Primary button

```text
inline-flex items-center justify-center rounded-full
border border-[var(--color-gold)]
bg-[var(--color-emerald)]
px-6 py-3 text-sm font-medium text-[var(--color-white)]
transition-transform duration-300 hover:-translate-y-0.5
focus-visible:outline-2 focus-visible:outline-offset-4
```
