// Floating navigation
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Invitation', href: '#invitation' },
  { label: 'The Union', href: '#couple' },
  { label: 'Programme', href: '#programme' },
  { label: 'Venue', href: '#venue' },
  { label: 'RSVP', href: '#rsvp' },
]

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-[var(--color-paper)]/92 backdrop-blur-md shadow-xs border-b border-[var(--color-gold)]/25'
          : 'bg-transparent'
        }`}
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8 flex items-center justify-between h-16">
        {/* Brand mark */}
        <a
          href="#home"
          className="font-cinzel text-xs md:text-sm uppercase tracking-[0.22em] text-[var(--color-emerald)] font-semibold flex items-center gap-2 group"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] group-hover:scale-125 transition-transform" />
          <span>Wedding Ceremony</span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-cinzel text-[0.72rem] uppercase tracking-[0.22em] text-[var(--color-ink-soft)] hover:text-[var(--color-emerald)] transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((p) => !p)}
          className="md:hidden flex items-center justify-center w-10 h-10 text-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-[var(--color-gold)]"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {open && (
        <div
          className="md:hidden border-t border-[var(--color-gold)]/20 bg-[var(--color-paper)]/98 backdrop-blur-lg"
        >
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col py-5 px-6 space-y-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 font-cinzel text-xs uppercase tracking-[0.24em] text-[var(--color-ink-soft)] hover:text-[var(--color-emerald)] border-b border-[var(--color-gold)]/10 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 mt-2">
              <p className="font-cinzel text-[0.62rem] uppercase tracking-[0.22em] text-[var(--color-ink-soft)]/70">
                Crafted by{' '}
                <a
                  href="https://ezzyone.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-emerald)] font-semibold underline underline-offset-2 hover:opacity-100"
                >
                  Ezzyone
                </a>
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
