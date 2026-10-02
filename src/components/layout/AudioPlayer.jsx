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

    // Helper to safely unlock Web Audio API on iOS / WebKit
    const unlockWebAudio = () => {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext
        if (AudioCtx) {
          const ctx = new AudioCtx()
          if (ctx.state === 'suspended') {
            ctx.resume().then(() => ctx.close()).catch(() => {})
          } else {
            ctx.close().catch(() => {})
          }
        }
      } catch (e) {}
    }

    // Function to unmute and ensure sound is actively playing
    const enableSoundAndPlay = () => {
      if (!audio) return
      unlockWebAudio()
      audio.muted = false
      audio.volume = 0.75

      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
            removeGestureListeners()
          })
          .catch(() => {
            // Still waiting on eligible user gesture
          })
      }
    }

    // Attempt 1: Try unmuted autoplay directly
    audio.muted = false
    const directPlayPromise = audio.play()
    if (directPlayPromise !== undefined) {
      directPlayPromise
        .then(() => {
          setIsPlaying(true)
        })
        .catch(() => {
          // Attempt 2: Autoplay with sound blocked by browser policy.
          // Start playing MUTED so media stream is buffered and playing immediately:
          audio.muted = true
          audio
            .play()
            .then(() => {
              // Playing in background muted, ready to instantly unmute on first gesture
            })
            .catch(() => {})
        })
    }

    // Global gesture listener: unmutes as soon as user touches, scrolls, or clicks anything
    const handleGesture = () => {
      enableSoundAndPlay()
    }

    const events = [
      'pointerdown',
      'touchstart',
      'touchend',
      'click',
      'scroll',
      'wheel',
      'keydown',
    ]

    const addGestureListeners = () => {
      events.forEach((evt) => {
        window.addEventListener(evt, handleGesture, { capture: true, passive: true })
        document.addEventListener(evt, handleGesture, { capture: true, passive: true })
      })
    }

    const removeGestureListeners = () => {
      events.forEach((evt) => {
        window.removeEventListener(evt, handleGesture, { capture: true })
        document.removeEventListener(evt, handleGesture, { capture: true })
      })
    }

    addGestureListeners()

    const onPlay = () => {
      if (!audio.muted) setIsPlaying(true)
    }
    const onPause = () => setIsPlaying(false)
    const onVolumeChange = () => {
      if (audio.muted || audio.volume === 0) {
        setIsPlaying(false)
      } else if (!audio.paused) {
        setIsPlaying(true)
      }
    }

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)
    audio.addEventListener('volumechange', onVolumeChange)

    return () => {
      removeGestureListeners()
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audio.removeEventListener('volumechange', onVolumeChange)
    }
  }, [])

  const togglePlay = (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    const audio = audioRef.current
    if (!audio) return

    // Explicit user tap: always unmute and set volume
    audio.muted = false
    audio.volume = 0.75

    if (isPlaying && !audio.paused) {
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
      {/* Audio element with fallback sources: lightweight m4a first, then mp3 */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        playsInline
        autoPlay
      >
        <source src="/nasheed.m4a" type="audio/mp4" />
        <source src="/nasheed.mp3" type="audio/mpeg" />
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
