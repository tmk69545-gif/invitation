// Family & RSVP section
import { Phone, Mail, Users } from 'lucide-react'
import {
  OrnamentalDivider,
  Label,
  PrimaryButton,
  SecondaryButton,
  ScrollReveal,
} from '../layout'

export default function FamilyRsvp({ data }) {
  return (
    <section
      id="rsvp"
      className="py-16 md:py-32 lg:py-40"
      style={{ background: 'var(--color-paper-2)' }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-5 md:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-10 md:mb-16">
          <Label className="mb-2 md:mb-3">Kindly Respond</Label>
          <h2
            className="font-cinzel text-[clamp(1.5rem,4.8vw,3.2rem)] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.24em] text-[var(--color-ink)]"
          >
            R . S . V . P .
          </h2>
          <p className="font-script text-xl sm:text-2xl md:text-3xl text-[var(--color-gold-dark)] mt-0.5 md:mt-1">
            your presence honors our family
          </p>
          <OrnamentalDivider className="my-5 md:my-8" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Contact names card */}
          <ScrollReveal delay={100}>
            <div
              className="border border-[var(--color-gold)]/60 p-5 sm:p-7 md:p-9 shadow-xs"
              style={{ background: 'rgba(255,253,248,0.7)' }}
            >
              <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-[var(--color-gold)]/30">
                <Users size={16} className="text-[var(--color-gold-dark)] shrink-0" />
                <span className="font-cinzel text-[0.68rem] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[var(--color-emerald)] font-semibold">
                  RSVP Contacts
                </span>
              </div>

              <ul className="space-y-2.5 sm:space-y-3.5 mb-4 sm:mb-6">
                {data.rsvp.map((name, i) => (
                  <li key={i} className="flex items-center gap-2.5 sm:gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: 'var(--color-gold)' }}
                    />
                    <span className="font-display text-[0.98rem] sm:text-[1.12rem] italic text-[var(--color-ink)] font-normal">
                      {name}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 sm:pt-5 border-t border-[var(--color-gold)]/30 space-y-1">
                <p className="font-sans-ui text-[0.66rem] sm:text-[0.72rem] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[var(--color-ink-soft)] font-medium">
                  All Relatives &amp; Family
                </p>
                <p className="font-cinzel text-[0.68rem] sm:text-[0.74rem] uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[var(--color-emerald)] font-semibold">
                  W.B.C.F. — <span className="font-display normal-case italic text-sm sm:text-base">{data.wbcf}</span>
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* RSVP actions and cordial invitation */}
          <ScrollReveal delay={200}>
            <div className="flex flex-col gap-4 sm:gap-6 pt-1 sm:pt-2">
              <p className="font-display text-[clamp(0.92rem,2.4vw,1.25rem)] text-[var(--color-ink-soft)] leading-[1.8] sm:leading-[1.9] italic font-normal">
                Your presence is our highest honor. We look forward to welcoming you
                and sharing these precious moments together with our beloved family.
              </p>

              <div className="py-2 border-y border-[var(--color-gold)]/20">
                <p
                  className="font-urdu text-xl sm:text-2xl md:text-3xl text-[var(--color-ink)] leading-[2.4] sm:leading-[2.5]"
                  dir="rtl"
                >
                  آپ کی شرکت کا دل سے منتظر
                </p>
                <p className="font-cinzel text-[0.6rem] sm:text-[0.66rem] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-[var(--color-gold-dark)] font-medium">
                  Awaiting your presence with open hearts
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-1 sm:mt-2">
                <PrimaryButton href="mailto:rsvp@example.com" className="gap-2 sm:gap-2.5 text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5">
                  <Mail size={14} />
                  Confirm Attendance
                </PrimaryButton>
                <SecondaryButton href="tel:+910000000000" className="gap-2 sm:gap-2.5 text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5">
                  <Phone size={14} />
                  Contact Host
                </SecondaryButton>
              </div>

              <p className="font-sans-ui text-[0.68rem] sm:text-xs text-[var(--color-ink-soft)] opacity-70 leading-relaxed">
                For inquiries regarding directions, accommodations, or program updates,
                kindly reach out at your convenience.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
