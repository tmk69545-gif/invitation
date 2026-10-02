// Couple reveal section
import { OrnamentalDivider, Label, ScriptAccent, ScrollReveal } from '../layout'

function CoupleBlock({ couple, initials, index }) {
  return (
    <ScrollReveal delay={index * 160} className="text-center relative">
      {/* Decorative monogram crest */}
      <div className="mx-auto w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 rounded-full border border-[var(--color-gold)]/50 flex items-center justify-center bg-[var(--color-paper)] shadow-xs">
        <span className="font-cinzel text-[0.68rem] md:text-xs tracking-wider text-[var(--color-gold-dark)] font-medium">
          {initials}
        </span>
      </div>

      <div className="py-1 md:py-2">
        <h2 className="editorial-names text-[var(--color-ink)]">
          {couple.personA}
        </h2>

        <div className="my-3 md:my-5 flex items-center justify-center gap-3">
          <span className="h-px w-10 md:w-14 bg-gradient-to-r from-transparent to-[var(--color-gold)]" />
          <ScriptAccent className="text-2xl sm:text-3xl md:text-5xl text-[var(--color-gold-dark)] px-2">
            weds
          </ScriptAccent>
          <span className="h-px w-10 md:w-14 bg-gradient-to-l from-transparent to-[var(--color-gold)]" />
        </div>

        <h3 className="editorial-names text-[var(--color-ink-soft)]">
          {couple.personB}
        </h3>
      </div>
    </ScrollReveal>
  )
}

export default function CoupleReveal({ data }) {
  return (
    <section
      id="couple"
      className="py-16 md:py-32 lg:py-40"
      style={{ background: 'var(--color-paper-2)' }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-5 md:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-10 md:mb-16">
          <Label className="mb-2 md:mb-3">The Blessed Union</Label>
          <h2
            className="font-cinzel text-[clamp(1.35rem,3.6vw,2.8rem)] font-medium uppercase tracking-[0.12em] sm:tracking-[0.14em] text-[var(--color-ink)]"
          >
            Two Families, One Celebration
          </h2>
          <p className="font-script text-xl sm:text-2xl md:text-3xl text-[var(--color-gold-dark)] mt-0.5 md:mt-1">
            united in holy matrimony
          </p>
        </ScrollReveal>

        {/* Couples Composition */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-12">
          <CoupleBlock
            couple={data.couples[0]}
            initials="J · N"
            index={0}
          />

          {/* Desktop central separator */}
          <ScrollReveal delay={100} className="hidden md:flex flex-col items-center gap-4 py-8">
            <span className="h-24 w-px bg-gradient-to-b from-transparent via-[var(--color-gold)]/60 to-transparent" />
            <ScriptAccent className="text-4xl text-[var(--color-gold-dark)]">
              &amp;
            </ScriptAccent>
            <span className="h-24 w-px bg-gradient-to-b from-transparent via-[var(--color-gold)]/60 to-transparent" />
          </ScrollReveal>

          {/* Mobile separator */}
          <div className="flex md:hidden items-center justify-center gap-3 my-2">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent to-[var(--color-gold)]/50" />
            <ScriptAccent className="text-2xl text-[var(--color-gold-dark)] px-2">
              and
            </ScriptAccent>
            <span className="flex-1 h-px bg-gradient-to-l from-transparent to-[var(--color-gold)]/50" />
          </div>

          <CoupleBlock
            couple={data.couples[1]}
            initials="G · F"
            index={1}
          />
        </div>

        <OrnamentalDivider className="mt-10 md:mt-16" />

        <ScrollReveal delay={200} className="text-center">
          <p className="font-display text-sm sm:text-base md:text-lg text-[var(--color-ink-soft)] leading-relaxed italic">
            Lovingly hosted by{' '}
            <strong className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.12em] text-[var(--color-ink)] not-italic font-semibold ml-1">
              {data.host}
            </strong>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
