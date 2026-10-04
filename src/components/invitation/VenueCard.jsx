// Venue / location card
import { MapPin, ExternalLink } from 'lucide-react'
import {
  SectionFrame,
  OrnamentalDivider,
  Label,
  PrimaryButton,
  ScrollReveal,
} from '../layout'

export default function VenueCard({ data }) {
  const mapsUrl =
    data.mapsUrl ||
    `https://maps.google.com/?q=${encodeURIComponent(
      `${data.address.join(', ')}, ${data.city}`
    )}`

  return (
    <section
      id="venue"
      className="py-16 md:py-32 lg:py-36"
      style={{ background: 'var(--color-paper)' }}
    >
      <SectionFrame>
        <div className="text-center max-w-xl mx-auto py-1 sm:py-2">
          <ScrollReveal>
            <Label className="mb-2 md:mb-3">Where to Find Us</Label>
            <h2
              className="font-cinzel text-[clamp(1.35rem,4.2vw,3rem)] font-medium uppercase tracking-[0.12em] sm:tracking-[0.16em] text-[var(--color-ink)]"
            >
              Venue &amp; Location
            </h2>
            <p className="font-script text-xl sm:text-2xl md:text-3xl text-[var(--color-gold-dark)] mt-0.5 md:mt-1">
              honored destination
            </p>
          </ScrollReveal>

          <OrnamentalDivider className="my-5 md:my-8" />

          <ScrollReveal delay={200}>
            <div className="my-4 md:my-6">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open venue location in Google Maps"
                className="inline-flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full border border-[var(--color-gold)]/60 mb-3 md:mb-5 shadow-xs transition-transform duration-300 hover:scale-110 hover:border-[var(--color-gold)]"
                style={{ background: 'rgba(196,160,90,0.08)' }}
              >
                <MapPin size={18} className="text-[var(--color-gold-dark)] md:scale-110" />
              </a>

              {data.address.map((line, i) => (
                <p
                  key={i}
                  className="font-display text-[clamp(0.95rem,2.6vw,1.3rem)] text-[var(--color-ink)] leading-[1.7] font-normal"
                >
                  {line}
                </p>
              ))}

              <div className="mt-2.5 sm:mt-3">
                <span className="font-cinzel text-[0.66rem] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[var(--color-emerald)] font-semibold border-b border-[var(--color-gold)]/40 pb-0.5">
                  {data.city}
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="my-4 md:my-6">
              <PrimaryButton
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2 sm:gap-2.5 text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5"
              >
                <ExternalLink size={13} />
                Open in Google Maps
              </PrimaryButton>
            </div>
          </ScrollReveal>

          <OrnamentalDivider className="my-5 md:my-8" />

          <ScrollReveal delay={400}>
            <p className="font-display text-xs sm:text-sm md:text-base text-[var(--color-ink-soft)] leading-relaxed italic">
              Kindly arrive with time to spare. Ample parking is arranged for all guests.
            </p>
          </ScrollReveal>
        </div>
      </SectionFrame>
    </section>
  )
}
