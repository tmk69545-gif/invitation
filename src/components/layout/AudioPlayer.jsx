import { useState, useEffect, useRef } from 'react'
import { Volume2, VolumeX, Music } from 'lucide-react'

export default function AudioPlayer() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Set standard ceremonial volume
    audio.volume = 0.75

    // Function to start playback
    const startAudio = () => {
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
          })
          .catch(() => {
            // Browser autoplay policy blocked unmuted sound; gesture listener will handle it
            setIsPlaying(false)
          })
      }
    }

    // Try playing immediately
    startAudio()

    // Global listener on document and window with capture to ensure any touch/tap starts audio
    const handleGesture = () => {
      if (audio && audio.paused) {
        audio
          .play()
          .then(() => {
            setIsPlaying(true)
            removeGestureListeners()
          })
          .catch(() => {})
      }
    }

    const events = ['pointerdown', 'touchstart', 'touchend', 'click', 'keydown']

    const addGestureListeners = () => {
      events.forEach((evt) => {
        document.addEventListener(evt, handleGesture, { capture: true, once: true, passive: true })
        window.addEventListener(evt, handleGesture, { capture: true, once: true, passive: true })
      })
    }

    const removeGestureListeners = () => {
      events.forEach((evt) => {
        document.removeEventListener(evt, handleGesture, { capture: true })
        window.removeEventListener(evt, handleGesture, { capture: true })
      })
    }

    addGestureListeners()

    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)

    return () => {
      removeGestureListeners()
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
    }
  }, [])

  const togglePlay = (e) => {
    if (e) e.stopPropagation()
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch(() => {})
    }
  }

  return (
    <>
      {/* Audio element with fallback sources */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        playsInline
      >
        <source src="/nasheed.mp3" type="audio/mpeg" />
        <source src="/nasheed.m4a" type="audio/mp4" />
        <source src="/nasheed.mp4" type="audio/mp4" />
      </audio>

      {/* Floating ceremonial music controller at bottom-right */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 sm:gap-3">
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause background nasheed' : 'Play background nasheed'}
          className={`group flex items-center justify-center gap-2 sm:gap-2.5 rounded-full border border-[var(--color-gold)] bg-[var(--color-paper)]/95 w-11 h-11 sm:w-auto sm:h-auto p-0 sm:px-4 sm:py-2.5 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[var(--color-gold-dark)] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-[var(--color-gold)] focus-visible:outline-offset-4 ${
            !isPlaying ? 'ring-2 ring-[var(--color-gold)]/50 ring-offset-1' : ''
          }`}
        >
          {/* Mobile compact view: circular icon badge */}
          <div className="flex sm:hidden items-center justify-center w-full h-full">
            {isPlaying ? (
              <div className="flex items-center gap-0.5 h-4 w-4 justify-center">
                <span className="w-0.5 bg-[var(--color-gold-dark)] rounded-full animate-wave-1" />
                <span className="w-0.5 bg-[var(--color-emerald)] rounded-full animate-wave-2" />
                <span className="w-0.5 bg-[var(--color-gold)] rounded-full animate-wave-3" />
                <span className="w-0.5 bg-[var(--color-emerald-deep)] rounded-full animate-wave-4" />
              </div>
            ) : (
              <VolumeX size={16} className="text-[var(--color-ink-soft)]" />
            )}
          </div>

          {/* Tablet & Desktop expanded view: equalizer + text + icon */}
          <div className="hidden sm:flex items-center gap-2.5">
            <div className="flex items-center gap-0.5 h-4 w-4 justify-center">
              {isPlaying ? (
                <>
                  <span className="w-0.5 bg-[var(--color-gold-dark)] rounded-full animate-wave-1" />
                  <span className="w-0.5 bg-[var(--color-emerald)] rounded-full animate-wave-2" />
                  <span className="w-0.5 bg-[var(--color-gold)] rounded-full animate-wave-3" />
                  <span className="w-0.5 bg-[var(--color-emerald-deep)] rounded-full animate-wave-4" />
                </>
              ) : (
                <VolumeX size={15} className="text-[var(--color-ink-soft)] opacity-70" />
              )}
            </div>

            <div className="flex flex-col text-left">
              <span className="font-cinzel text-[0.62rem] md:text-[0.68rem] uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[var(--color-emerald)] font-semibold leading-tight">
                {isPlaying ? 'Nasheed' : 'Play Music'}
              </span>
              <span className="font-sans-ui text-[0.52rem] sm:text-[0.58rem] tracking-wider uppercase text-[var(--color-ink-soft)] opacity-60 leading-tight">
                {isPlaying ? 'Playing' : 'Tap to start'}
              </span>
            </div>

            <div
              className={`flex items-center justify-center w-6 h-6 rounded-full border border-[var(--color-gold)]/40 transition-colors ${
                isPlaying ? 'bg-[var(--color-emerald)] text-[var(--color-white)]' : 'bg-[var(--color-gold)]/20 text-[var(--color-emerald)]'
              }`}
            >
              {isPlaying ? <Volume2 size={12} /> : <Music size={11} />}
            </div>
          </div>
        </button>
      </div>
    </>
  )
}
