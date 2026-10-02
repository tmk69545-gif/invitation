// Closing / final blessing section
import { OrnamentalDivider, Label, ScriptAccent, ScrollReveal, FloralCorner } from '../layout'
import InvitationScene from '../webgl/InvitationScene'

export default function Closing({ data }) {
  return (
    <footer
      id="closing"
      className="relative overflow-hidden pt-16 pb-8 md:pt-28 md:pb-12"
      style={{ background: 'var(--color-emerald-deep)', color: 'var(--color-white)' }}
    >
      {/* WebGL atmosphere on closing section */}
      <InvitationScene />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 md:px-8 text-center">
        {/* Corner florals */}
        <div className="relative inline-block w-full">
          <FloralCorner position="top-left" size={54} className="md:w-16 md:h-16 opacity-45" />
          <FloralCorner position="top-right" size={54} className="md:w-16 md:h-16 opacity-45" />

          {/* Sacred Benediction */}
          <ScrollReveal>
            <p
              className="font-arabic text-3xl sm:text-4xl md:text-6xl mb-3 md:mb-4 leading-[1.8] select-none"
              dir="rtl"
              style={{ color: 'var(--color-gold-light)' }}
            >
              جَزَاكُمُ اللّٰهُ خَيْرًا
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <p className="font-cinzel text-[0.68rem] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.26em] text-[var(--color-gold-light)] mb-4 md:mb-6 font-medium">
              May Allah bless you with abundant goodness
            </p>
          </ScrollReveal>

          <OrnamentalDivider className="[&>*]:bg-[var(--color-gold-light)]/50 [&>svg]:text-[var(--color-gold-light)] my-4 md:my-6" />

          {/* Closing prayer */}
          <ScrollReveal delay={240}>
            <p
              className="font-display text-[clamp(0.95rem,2.5vw,1.3rem)] italic leading-[1.8] sm:leading-[2] mb-5 md:mb-7 text-[var(--color-white)] opacity-85 font-normal max-w-xl mx-auto"
            >
              We are deeply humbled and grateful for your love, prayers, and presence.
              May the Almighty bestow His eternal harmony, prosperity, and barakah upon
              this blessed union and all our cherished families.
            </p>
          </ScrollReveal>

          <OrnamentalDivider className="[&>*]:bg-[var(--color-gold-light)]/50 [&>svg]:text-[var(--color-gold-light)] my-4 md:my-6" />

          {/* Couple names signature */}
          <ScrollReveal delay={360}>
            <div className="space-y-2.5 md:space-y-4 mb-5 md:mb-7">
              {data.couples.map((couple, i) => (
                <div key={i} className="flex items-center justify-center gap-2 sm:gap-3">
                  <span
                    className="font-display text-[clamp(1.2rem,3.4vw,2.2rem)] italic text-[var(--color-gold-light)]"
                  >
                    {couple.personA}
                  </span>
                  <ScriptAccent className="text-xl sm:text-2xl md:text-3xl text-[var(--color-gold)]">
                    &amp;
                  </ScriptAccent>
                  <span
                    className="font-display text-[clamp(1.2rem,3.4vw,2.2rem)] italic text-[var(--color-gold-light)]"
                  >
                    {couple.personB}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={440}>
            <p className="font-cinzel text-[0.64rem] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.28em] text-[var(--color-gold-light)] opacity-60">
              {data.headlineDate} · {data.headlineDay} · {data.city}
            </p>
          </ScrollReveal>

          <FloralCorner position="bottom-left" size={54} className="md:w-16 md:h-16 opacity-45" />
          <FloralCorner position="bottom-right" size={54} className="md:w-16 md:h-16 opacity-45" />
        </div>

        {/* Crafted by Ezzyone attribution */}
        <div className="mt-8 pt-4 border-t border-[var(--color-gold-light)]/20">
          <p className="font-cinzel text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.22em] text-[var(--color-gold-light)]/85">
            Crafted by{' '}
            <a
              href="https://ezzyone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-gold-light)] font-semibold underline underline-offset-4 decoration-[var(--color-gold)]/60 hover:text-[var(--color-white)] hover:decoration-[var(--color-white)] transition-all duration-200"
            >
              Ezzyone
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
