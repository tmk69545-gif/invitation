// Programme / timeline section
import { Label, OrnamentalDivider, ScrollReveal } from '../layout'
import { Clock, Calendar } from 'lucide-react'

const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI']

function ProgrammeCard({ item, index }) {
  return (
    <ScrollReveal delay={index * 120}>
      <article
        className="relative border border-[var(--color-gold)]/60 p-4 sm:p-6 md:p-8 text-center shadow-xs transition-transform duration-300 hover:-translate-y-1"
        style={{ background: 'rgba(255,253,248,0.7)' }}
      >
        {/* Roman index pill */}
        <div className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[var(--color-gold)]/40 text-[var(--color-gold-dark)] font-cinzel text-[0.64rem] sm:text-[0.7rem] font-semibold mb-2 sm:mb-3">
          {romanNumerals[index] || index + 1}
        </div>

        <p className="font-cinzel text-[0.6rem] sm:text-[0.66rem] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-[var(--color-emerald)] font-medium mb-1">
          Ceremony
        </p>

        <h3
          className="font-display text-[clamp(1.28rem,3vw,2rem)] italic font-medium text-[var(--color-ink)] mb-3 sm:mb-4 leading-tight"
        >
          {item.title}
        </h3>

        <div className="pt-2.5 sm:pt-3 border-t border-[var(--color-gold)]/20 space-y-1">
          {item.date ? (
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[0.74rem] sm:text-xs md:text-sm text-[var(--color-ink-soft)] font-sans-ui">
              <Calendar size={12} className="text-[var(--color-gold-dark)] shrink-0" />
              <span className="tracking-wide font-normal">{item.date}</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[0.74rem] sm:text-xs md:text-sm text-[var(--color-ink-soft)] font-display italic">
              <span>Following the Nikah ceremony</span>
            </div>
          )}

          <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[0.74rem] sm:text-xs md:text-sm text-[var(--color-emerald)] font-sans-ui font-medium">
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
      <div className="mx-auto max-w-5xl px-4 sm:px-5 md:px-8">
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

        {/* Timeline structure */}
        <div className="relative">
          {/* Central spine on desktop */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--color-gold)]/40 to-transparent"
          />

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 sm:gap-6 md:gap-8">
            {data.programme.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] col-span-full gap-4 md:gap-0 items-center"
                >
                  {/* Left slot */}
                  <div className={isLeft ? 'md:pr-12' : 'md:pr-12 hidden md:block'}>
                    {isLeft ? <ProgrammeCard item={item} index={i} /> : null}
                  </div>

                  {/* Central Timeline node */}
                  <div className="hidden md:flex flex-col items-center gap-0">
                    <div
                      className="w-3.5 h-3.5 rounded-full border-2 border-[var(--color-gold)] bg-[var(--color-paper)] shadow-xs shrink-0"
                    />
                  </div>

                  {/* Right slot */}
                  <div className={!isLeft ? 'md:pl-12' : 'md:pl-12 hidden md:block'}>
                    {!isLeft ? <ProgrammeCard item={item} index={i} /> : null}
                  </div>

                  {/* Mobile always visible card */}
                  <div className="md:hidden col-span-full">
                    <ProgrammeCard item={item} index={i} />
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
