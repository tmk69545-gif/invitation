// Hero section — cover of the invitation
import { MapPin } from 'lucide-react'
import {
  SectionFrame,
  OrnamentalDivider,
  Label,
  ScriptAccent,
  PrimaryButton,
  FloralCorner,
  ScrollReveal,
} from '../layout'
import InvitationScene from '../webgl/InvitationScene'
import Countdown from './Countdown'

export default function Hero({ data }) {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden py-12 md:py-24"
      style={{ background: 'var(--color-paper)' }}
    >
      {/* WebGL atmospheric layer */}
      <InvitationScene />

      {/* Content */}
      <div className="relative z-10 w-full">
        <SectionFrame>
          {/* Corner florals on the outer frame */}
          <div className="relative">
            <FloralCorner position="top-left" size={56} className="md:w-20 md:h-20" />
            <FloralCorner position="top-right" size={56} className="md:w-20 md:h-20" />
            <FloralCorner position="bottom-left" size={56} className="md:w-20 md:h-20" />
            <FloralCorner position="bottom-right" size={56} className="md:w-20 md:h-20" />

            <div className="text-center px-2 sm:px-4 py-6 md:py-12">
              {/* Sacred Invocational Blessing */}
              <ScrollReveal>
                <p
                  className="font-arabic text-2xl sm:text-3xl md:text-5xl text-[var(--color-ink)] mb-2 md:mb-3 leading-[1.8] select-none"
                  dir="rtl"
                >
                  بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                </p>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <Label className="mb-4 md:mb-5">In the Name of Allah, the Most Gracious, the Most Merciful</Label>
              </ScrollReveal>

              {/* Ceremony Title */}
              <ScrollReveal delay={240}>
                <div className="mb-2">
                  <h1
                    className="font-cinzel text-[clamp(1.4rem,4.6vw,3.2rem)] font-medium uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[var(--color-ink)]"
                  >
                    Wedding Ceremony
                  </h1>
                  <p className="font-script text-xl sm:text-2xl md:text-3xl text-[var(--color-gold-dark)] mt-0.5">
                    invitation
                  </p>
                </div>
              </ScrollReveal>

              <OrnamentalDivider className="my-5 md:my-8" />

              {/* Couple names on cover */}
              <ScrollReveal delay={360}>
                <div className="space-y-4 md:space-y-6 my-4 md:my-6">
                  {data.couples.map((couple, i) => (
                    <div key={i} className="group">
                      {i > 0 && (
                        <div className="my-2 md:my-3 flex items-center justify-center gap-3">
                          <span className="h-px w-6 sm:w-8 bg-[var(--color-gold)]/40" />
                          <ScriptAccent className="text-xl sm:text-2xl text-[var(--color-gold-dark)]">
                            and
                          </ScriptAccent>
                          <span className="h-px w-6 sm:w-8 bg-[var(--color-gold)]/40" />
                        </div>
                      )}
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4">
                        <span
                          className="font-display text-[clamp(1.4rem,3.8vw,2.6rem)] italic font-normal text-[var(--color-ink)] leading-tight"
                        >
                          {couple.personA}
                        </span>
                        <span className="font-script text-xl sm:text-2xl md:text-3xl text-[var(--color-gold-dark)] leading-none px-1">
                          weds
                        </span>
                        <span
                          className="font-display text-[clamp(1.4rem,3.8vw,2.6rem)] italic font-normal text-[var(--color-ink)] leading-tight"
                        >
                          {couple.personB}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <OrnamentalDivider className="my-5 md:my-8" />

              {/* Date / Time */}
              <ScrollReveal delay={480}>
                <div className="mb-6 md:mb-8">
                  <p className="font-script text-2xl sm:text-3xl md:text-4xl text-[var(--color-gold-dark)] mb-0.5">
                    {data.headlineDay}
                  </p>
                  <p
                    className="font-cinzel text-[clamp(1.35rem,4vw,2.8rem)] font-medium text-[var(--color-emerald)] tracking-[0.1em] sm:tracking-[0.14em] uppercase"
                  >
                    {data.headlineDate}
                  </p>
                  <p className="font-sans-ui text-[0.68rem] sm:text-xs md:text-sm uppercase tracking-[0.18em] sm:tracking-[0.24em] text-[var(--color-ink-soft)] font-medium mt-1">
                    Ceremony commences at {data.headlineTime}
                  </p>
                </div>
              </ScrollReveal>

              {/* Auspicious Countdown */}
              <ScrollReveal delay={520}>
                <Countdown variant="compact" />
              </ScrollReveal>

              {/* Location Badge */}
              <ScrollReveal delay={560}>
                <div className="inline-flex items-center justify-center gap-2 mb-6 md:mb-8 px-3.5 py-1 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/5 text-[var(--color-ink-soft)]">
                  <MapPin size={12} className="text-[var(--color-gold)] shrink-0" />
                  <span className="font-sans-ui text-[0.66rem] sm:text-xs tracking-[0.12em] uppercase font-medium">
                    {data.city}
                  </span>
                </div>
              </ScrollReveal>

              {/* CTA */}
              <ScrollReveal delay={640}>
                <div>
                  <PrimaryButton href="#invitation">View Invitation</PrimaryButton>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </SectionFrame>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50"
      >
        <span className="font-cinzel text-[0.58rem] sm:text-[0.62rem] uppercase tracking-[0.24em] text-[var(--color-ink-soft)]">
          Scroll
        </span>
        <span className="w-px h-6 sm:h-7 bg-gradient-to-b from-[var(--color-gold)] to-transparent animate-pulse" />
      </div>
    </section>
  )
}
