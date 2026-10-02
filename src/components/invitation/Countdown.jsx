import { useState, useEffect } from 'react'
import { Label, ScriptAccent, ScrollReveal } from '../layout'

// Target date: October 25, 2026 at 09:00 PM IST (Indian Standard Time UTC+05:30)
const WEDDING_TIMESTAMP = new Date('2026-10-25T21:00:00+05:30').getTime()

function calculateTimeLeft() {
  const now = new Date().getTime()
  const difference = WEDDING_TIMESTAMP - now

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: true }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isFinished: false,
  }
}

function TimeUnit({ value, label, isSeconds = false }) {
  const formatted = String(value).padStart(2, '0')

  return (
    <div className="flex flex-col items-center">
      {/* Box */}
      <div
        className="w-13 h-15 sm:w-18 sm:h-20 md:w-22 md:h-24 flex flex-col items-center justify-center rounded-sm border border-[var(--color-gold)]/60 p-1 sm:p-2 shadow-xs transition-transform duration-300 hover:-translate-y-0.5"
        style={{
          background: 'rgba(255, 253, 248, 0.8)',
          backdropFilter: 'blur(4px)',
        }}
      >
        <span
          className={`font-cinzel text-lg sm:text-2xl md:text-3.5xl font-semibold tracking-wider text-[var(--color-emerald)] leading-none ${
            isSeconds ? 'transition-opacity duration-200' : ''
          }`}
        >
          {formatted}
        </span>
        <span className="font-cinzel text-[0.5rem] sm:text-[0.62rem] md:text-[0.68rem] uppercase tracking-[0.16em] sm:tracking-[0.22em] text-[var(--color-gold-dark)] font-medium mt-1 sm:mt-2">
          {label}
        </span>
      </div>
    </div>
  )
}

export default function Countdown({ variant = 'hero' }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (timeLeft.isFinished) {
    return (
      <div className="text-center py-4">
        <p className="font-script text-2xl sm:text-3xl text-[var(--color-gold-dark)]">
          The Blessed Celebration Has Commenced
        </p>
        <p className="font-cinzel text-[0.68rem] uppercase tracking-[0.2em] text-[var(--color-emerald)] mt-1">
          Alhamdulillah
        </p>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className="my-5 md:my-6">
        <p className="font-cinzel text-[0.58rem] sm:text-[0.64rem] uppercase tracking-[0.2em] sm:tracking-[0.26em] text-[var(--color-gold-dark)] font-medium text-center mb-2.5 sm:mb-3">
          Countdown to the Auspicious Hour
        </p>
        <div className="flex items-center justify-center gap-1.5 sm:gap-3 md:gap-4">
          <TimeUnit value={timeLeft.days} label="Days" />
          <span className="text-[var(--color-gold)] font-cinzel text-sm sm:text-lg md:text-xl -mt-3 sm:-mt-4">:</span>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <span className="text-[var(--color-gold)] font-cinzel text-sm sm:text-lg md:text-xl -mt-3 sm:-mt-4">:</span>
          <TimeUnit value={timeLeft.minutes} label="Mins" />
          <span className="text-[var(--color-gold)] font-cinzel text-sm sm:text-lg md:text-xl -mt-3 sm:-mt-4">:</span>
          <TimeUnit value={timeLeft.seconds} label="Secs" isSeconds />
        </div>
      </div>
    )
  }

  // Full section variant
  return (
    <section
      id="countdown"
      className="py-14 md:py-24"
      style={{ background: 'var(--color-paper-2)' }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-5 text-center">
        <ScrollReveal>
          <Label className="mb-2">Cherished Anticipation</Label>
          <h2 className="font-cinzel text-[clamp(1.4rem,3.8vw,2.6rem)] font-medium uppercase tracking-[0.14em] sm:tracking-[0.16em] text-[var(--color-ink)]">
            Counting Down to Matrimony
          </h2>
          <p className="font-script text-xl sm:text-2xl md:text-3xl text-[var(--color-gold-dark)] mt-0.5 mb-6 md:mb-8">
            every second brings us closer to union
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="inline-flex items-center justify-center gap-2 sm:gap-4 md:gap-6 p-3 sm:p-5 md:p-6 rounded-sm border border-[var(--color-gold)]/40 bg-[var(--color-paper)]/70 shadow-sm">
            <TimeUnit value={timeLeft.days} label="Days" />
            <span className="text-[var(--color-gold)] font-cinzel text-base sm:text-xl md:text-2xl -mt-4 sm:-mt-5">·</span>
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <span className="text-[var(--color-gold)] font-cinzel text-base sm:text-xl md:text-2xl -mt-4 sm:-mt-5">·</span>
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <span className="text-[var(--color-gold)] font-cinzel text-base sm:text-xl md:text-2xl -mt-4 sm:-mt-5">·</span>
            <TimeUnit value={timeLeft.seconds} label="Seconds" isSeconds />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <p className="font-display text-xs sm:text-sm md:text-base text-[var(--color-ink-soft)] italic mt-4 md:mt-6">
            October 25, 2026 · 09:00 PM · Insha'Allah
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
