// Shared layout primitives
import { useEffect, useRef } from 'react'

/**
 * Ornamental double-border frame — outer gold, inner ink/10
 */
export function SectionFrame({ children, className = '' }) {
  return (
    <div className={`relative mx-auto max-w-5xl px-3 sm:px-5 md:px-8 ${className}`}>
      <div className="border border-[var(--color-gold)]/70 p-1.5 sm:p-2 md:p-3">
        <div className="border border-[var(--color-ink)]/10 p-4 sm:p-6 md:p-10">
          {children}
        </div>
      </div>
    </div>
  )
}

/**
 * Horizontal ornamental divider with a central flourish
 */
export function OrnamentalDivider({ className = '' }) {
  return (
    <div aria-hidden="true" className={`flex items-center justify-center gap-3 my-8 ${className}`}>
      <span className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-[var(--color-gold)]/60" />
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-[var(--color-gold)] shrink-0">
        <path
          d="M11 1 C11 1 14 5 11 11 C8 5 11 1 11 1Z M11 21 C11 21 8 17 11 11 C14 17 11 21 11 21Z M1 11 C1 11 5 8 11 11 C5 14 1 11 1 11Z M21 11 C21 11 17 14 11 11 C17 8 21 11 21 11Z"
          fill="currentColor"
          opacity="0.8"
        />
        <circle cx="11" cy="11" r="2.2" fill="currentColor" />
      </svg>
      <span className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-[var(--color-gold)]/60" />
    </div>
  )
}

/**
 * Utility label — small uppercase tracked text with imperial Roman character
 */
export function Label({ children, className = '' }) {
  return (
    <p
      className={`font-cinzel text-[0.68rem] md:text-[0.74rem] uppercase tracking-[0.26em] text-[var(--color-emerald)] font-medium ${className}`}
    >
      {children}
    </p>
  )
}

/**
 * Calligraphic Script Accent for romantic wedding phrasing
 */
export function ScriptAccent({ children, className = '' }) {
  return (
    <span
      className={`font-script text-3xl md:text-4xl text-[var(--color-gold-dark)] normal-case inline-block leading-none ${className}`}
    >
      {children}
    </span>
  )
}

/**
 * Primary CTA button with refined luxury typography
 */
export function PrimaryButton({ children, href, onClick, className = '' }) {
  const base =
    'font-cinzel inline-flex items-center justify-center gap-2.5 rounded-full border border-[var(--color-gold)] bg-[var(--color-emerald)] px-8 py-3.5 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-white)] shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:-translate-y-0.5 hover:bg-[var(--color-emerald-deep)] focus-visible:outline-2 focus-visible:outline-[var(--color-gold)] focus-visible:outline-offset-4'

  if (href) {
    return (
      <a href={href} className={`${base} ${className}`}>
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={`${base} ${className}`}>
      {children}
    </button>
  )
}

/**
 * Secondary ghost button with refined typography
 */
export function SecondaryButton({ children, href, onClick, className = '' }) {
  const base =
    'font-cinzel inline-flex items-center justify-center gap-2.5 rounded-full border border-[var(--color-ink)]/25 bg-transparent px-8 py-3.5 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-ink)] transition-all duration-300 hover:border-[var(--color-gold)] hover:text-[var(--color-emerald)] hover:bg-[var(--color-gold)]/5 focus-visible:outline-2 focus-visible:outline-[var(--color-gold)] focus-visible:outline-offset-4'

  if (href) {
    return (
      <a href={href} className={`${base} ${className}`}>
        {children}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={`${base} ${className}`}>
      {children}
    </button>
  )
}

/**
 * SVG floral corner decorations
 */
export function FloralCorner({ position = 'top-left', size = 80, className = '' }) {
  const posClass = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 scale-x-[-1]',
    'bottom-left': 'bottom-0 left-0 scale-y-[-1]',
    'bottom-right': 'bottom-0 right-0 scale-[-1]',
  }[position]

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      className={`absolute ${posClass} pointer-events-none ${className}`}
    >
      <path
        d="M2 2 Q20 2 20 20"
        stroke="var(--color-gold)"
        strokeWidth="1.2"
        strokeOpacity="0.7"
        fill="none"
      />
      <path
        d="M2 2 Q2 20 20 20"
        stroke="var(--color-gold)"
        strokeWidth="1.2"
        strokeOpacity="0.5"
        fill="none"
      />
      <circle cx="20" cy="20" r="2.2" fill="var(--color-gold)" opacity="0.6" />
      <path
        d="M5 2 Q14 5 12 14"
        stroke="var(--color-gold)"
        strokeWidth="0.9"
        strokeOpacity="0.5"
        fill="none"
      />
      <path
        d="M2 5 Q5 14 14 12"
        stroke="var(--color-gold)"
        strokeWidth="0.9"
        strokeOpacity="0.5"
        fill="none"
      />
      <circle cx="12" cy="12" r="1.6" fill="var(--color-gold)" opacity="0.5" />
      <circle cx="6" cy="4" r="1.2" fill="var(--color-gold)" opacity="0.4" />
      <circle cx="4" cy="6" r="1.2" fill="var(--color-gold)" opacity="0.4" />
      <path
        d="M22 2 Q30 6 28 16"
        stroke="var(--color-gold)"
        strokeWidth="0.8"
        strokeOpacity="0.35"
        fill="none"
      />
      <path
        d="M2 22 Q6 30 16 28"
        stroke="var(--color-gold)"
        strokeWidth="0.8"
        strokeOpacity="0.35"
        fill="none"
      />
    </svg>
  )
}

/**
 * Scroll reveal wrapper — adds reveal class on intersection
 */
export function ScrollReveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.transitionDelay = `${delay}ms`
            el.classList.add('visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}
