// Programme / timeline section
import { Label, OrnamentalDivider, ScrollReveal } from '../layout'
import { Clock, Calendar } from 'lucide-react'

const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI']

function ProgrammeCard({ item, index, isMobile = false }) {
  return (
    <ScrollReveal delay={index * 100}>
      <article
        className="relative border border-[var(--color-gold)]/60 p-4 sm:p-5 md:p-8 text-center shadow-xs transition-transform duration-300 hover:-translate-y-1"
        style={{ background: 'rgba(255,253,248,0.85)' }}
      >
        {/* Roman index pill only shown on desktop, as mobile has node on the timeline line */}
        {!isMobile && (
          <div className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[var(--color-gold)]/40 text-[var(--color-gold-dark)] font-cinzel text-[0.64rem] sm:text-[0.7rem] font-semibold mb-2 sm:mb-3">
            {romanNumerals[index] || index + 1}
          </div>
        )}

        <div className="flex items-center justify-center gap-1.5 mb-1">
          {isMobile && (
            <span className="font-cinzel text-[0.62rem] text-[var(--color-gold-dark)] tracking-wider font-semibold">
              Step {index + 1} •
            </span>
          )}
          <p className="font-cinzel text-[0.62rem] sm:text-[0.66rem] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-[var(--color-emerald)] font-medium">
            Ceremony
          </p>
        </div>

        <h3
          className="font-display text-[clamp(1.22rem,3vw,1.95rem)] italic font-medium text-[var(--color-ink)] mb-2.5 sm:mb-4 leading-tight"
        >
          {item.title}
        </h3>

        <div className="pt-2 sm:pt-3 border-t border-[var(--color-gold)]/20 space-y-1">
          {item.date ? (
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[0.75rem] sm:text-xs md:text-sm text-[var(--color-ink-soft)] font-sans-ui">
              <Calendar size={12} className="text-[var(--color-gold-dark)] shrink-0" />
              <span className="tracking-wide font-normal">{item.date}</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[0.75rem] sm:text-xs md:text-sm text-[var(--color-ink-soft)] font-display italic">
              <span>Following the Nikah ceremony</span>
            </div>
          )}

          <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[0.75rem] sm:text-xs md:text-sm text-[var(--color-emerald)] font-sans-ui font-medium">
            <Clock size={12} className="text-[var(--color-gold-dark)] shrink-0" />
            <span className="tracking-wider uppercase">{item.time}</span>
          </div>
        </div>
      </article>
    </ScrollReveal>
  )
}

export default function Programme({ data }) {
  return (
    <section
      id="programme"
      className="py-16 md:py-32 lg:py-40"
      style={{ background: 'var(--color-paper-2)' }}
    >
      <div className="mx-auto max-w-5xl px-3 sm:px-5 md:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-10 md:mb-16">
          <Label className="mb-2 md:mb-3">Sequence of Auspicious Events</Label>
          <h2
            className="font-cinzel text-[clamp(1.35rem,4.2vw,3rem)] font-medium uppercase tracking-[0.12em] sm:tracking-[0.16em] text-[var(--color-ink)]"
          >
            Programme
          </h2>
          <p className="font-script text-xl sm:text-2xl md:text-3xl text-[var(--color-gold-dark)] mt-0.5 md:mt-1">
            ceremony &amp; reception timings
          </p>
          <OrnamentalDivider className="my-5 md:my-8" />
        </ScrollReveal>

        {/* MOBILE TIMELINE: Connected step-by-step with vertical line and nodes (< md) */}
        <div className="md:hidden relative">
          <div className="flex flex-col">
            {data.programme.map((item, i) => {
              const isLast = i === data.programme.length - 1
              return (
                <div key={i} className="relative flex items-stretch gap-3 sm:gap-4">
                  {/* Left Timeline Node & Connecting Line Column */}
                  <div className="flex flex-col items-center shrink-0 w-8 sm:w-10">
                    {/* Step Node */}
                    <div className="z-10 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[var(--color-gold)] bg-[var(--color-paper)] text-[var(--color-gold-dark)] shadow-sm font-cinzel text-[0.68rem] sm:text-xs font-bold ring-4 ring-[var(--color-paper-2)]">
                      {romanNumerals[i] || i + 1}
                    </div>

                    {/* Connecting Vertical Line to the next step */}
                    {!isLast ? (
                      <div
                        aria-hidden="true"
                        className="w-[2px] flex-1 my-1.5 bg-gradient-to-b from-[var(--color-gold)] via-[var(--color-gold-dark)]/70 to-[var(--color-gold)]"
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="w-[2px] h-6 my-1.5 bg-gradient-to-b from-[var(--color-gold)] to-transparent"
                      />
                    )}
                  </div>

                  {/* Right Ceremony Card */}
                  <div className="flex-1 pb-6 sm:pb-8">
                    <ProgrammeCard item={item} index={i} isMobile />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* DESKTOP TIMELINE: Central spine with alternating left/right layout (>= md) */}
        <div className="hidden md:block relative">
          {/* Central spine on desktop */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-1/2 top-4 bottom-6 w-px bg-gradient-to-b from-transparent via-[var(--color-gold)]/50 to-transparent"
          />

          <div className="space-y-10 lg:space-y-12">
            {data.programme.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={i}
                  className="grid grid-cols-[1fr_auto_1fr] items-center gap-0"
                >
                  {/* Left slot */}
                  <div className="pr-8 lg:pr-12">
                    {isLeft ? <ProgrammeCard item={item} index={i} /> : <div />}
                  </div>

                  {/* Central Timeline node */}
                  <div className="flex flex-col items-center justify-center z-10">
                    <div
                      className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[var(--color-gold)] bg-[var(--color-paper)] text-[var(--color-gold-dark)] font-cinzel text-xs font-semibold shadow-xs ring-4 ring-[var(--color-paper-2)]"
                    >
                      {romanNumerals[i] || i + 1}
                    </div>
                  </div>

                  {/* Right slot */}
                  <div className="pl-8 lg:pl-12">
                    {!isLeft ? <ProgrammeCard item={item} index={i} /> : <div />}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
