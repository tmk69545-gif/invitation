// Formal invitation message / note section
import {
  SectionFrame,
  OrnamentalDivider,
  Label,
  ScriptAccent,
  ScrollReveal,
} from '../layout'

export default function InvitationNote({ data }) {
  return (
    <section
      id="invitation"
      className="py-16 md:py-32 lg:py-36"
      style={{ background: 'var(--color-paper)' }}
    >
      <SectionFrame>
        <div className="text-center max-w-2xl mx-auto py-1 sm:py-2">
          {/* Sacred Opening */}
          <ScrollReveal>
            <p
              className="font-arabic text-2xl sm:text-3xl md:text-5xl text-[var(--color-ink)] mb-2 md:mb-3 leading-[1.8]"
              dir="rtl"
            >
              بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Label className="mb-4 md:mb-6">
              In the Name of Allah, the Most Beneficent, the Most Merciful
            </Label>
          </ScrollReveal>

          <OrnamentalDivider className="my-5 md:my-8" />

          {/* Host Invitation */}
          <ScrollReveal delay={200}>
            <p className="font-display text-base sm:text-lg md:text-xl text-[var(--color-ink-soft)] italic leading-relaxed mb-1.5 md:mb-2">
              With hearts full of gratitude and joyous anticipation,
            </p>
            <p
              className="font-cinzel text-lg sm:text-2xl md:text-3xl uppercase tracking-[0.12em] sm:tracking-[0.14em] font-semibold text-[var(--color-ink)] leading-snug my-2 md:my-3"
            >
              {data.host}
            </p>
            <p className="font-script text-xl sm:text-2xl md:text-3xl text-[var(--color-gold-dark)] mb-4 md:mb-6">
              together with their honored families
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="font-display text-[clamp(0.92rem,2.4vw,1.25rem)] leading-[1.85] sm:leading-[2] text-[var(--color-ink-soft)] max-w-xl mx-auto mb-6 md:mb-8 font-normal">
              cordially request the honor of your gracious presence and heartfelt prayers
              at the auspicious Wedding Ceremony of their beloved children, as they unite in
              love and faith under the divine blessings of the Almighty.
            </p>
          </ScrollReveal>

          <OrnamentalDivider className="my-5 md:my-8" />

          {/* Urdu passage */}
          <ScrollReveal delay={400}>
            <div
              className="inline-block border border-[var(--color-gold)]/40 px-4 py-3 sm:px-8 sm:py-6 my-2 sm:my-4 rounded-sm shadow-xs max-w-full"
              style={{ background: 'rgba(196,160,90,0.05)' }}
            >
              <p
                className="font-urdu text-xl sm:text-2xl md:text-3xl text-[var(--color-ink)] leading-[2.4] sm:leading-[2.6]"
                dir="rtl"
              >
                آپ کی شرکت ہماری خوشی کو دوبالا کر دے گی
              </p>
              <p className="font-cinzel text-[0.62rem] sm:text-[0.74rem] uppercase tracking-[0.18em] sm:tracking-[0.24em] text-[var(--color-emerald)] font-medium mt-2 sm:mt-3">
                Your gracious presence will double our delight
              </p>
            </div>
          </ScrollReveal>

          <OrnamentalDivider className="my-5 md:my-8" />

          {/* Date / time call-out */}
          <ScrollReveal delay={500}>
            <div className="pt-1 sm:pt-2">
              <Label className="mb-1.5 md:mb-2">Ceremonial Date</Label>
              <p
                className="font-cinzel text-[clamp(1.35rem,4.2vw,3rem)] font-medium uppercase text-[var(--color-emerald)] tracking-[0.1em] sm:tracking-[0.12em] leading-tight"
              >
                {data.headlineDate}
              </p>
              <p className="font-sans-ui text-[0.68rem] sm:text-xs md:text-sm uppercase tracking-[0.18em] sm:tracking-[0.24em] text-[var(--color-ink-soft)] font-medium mt-1">
                {data.headlineDay} · {data.headlineTime}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </SectionFrame>
    </section>
  )
}
