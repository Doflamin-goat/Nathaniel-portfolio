import { useEffect, useState } from 'react'

type Props = {
  src?: string
  alt: string
  ratio?: 'wide' | 'tall' | 'square'
}

export function Screenshot({ src, alt, ratio = 'wide' }: Props) {
  const [errored, setErrored] = useState(false)
  const [open, setOpen] = useState(false)
  const showPlaceholder = !src || errored

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  return (
    <>
      <div
        className={`screenshot screenshot--${ratio}${
          showPlaceholder ? '' : ' screenshot--clickable'
        }`}
      >
        {showPlaceholder ? (
          <div className="screenshot__placeholder" role="img" aria-label={alt}>
            <svg
              className="screenshot__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <circle cx="12" cy="12" r="3.5" />
              <path d="M8 5l1.5-2h5L16 5" />
            </svg>
            <span className="screenshot__title">Screenshot Coming Soon</span>
            <span className="screenshot__subtitle">{alt}</span>
          </div>
        ) : (
          <button
            type="button"
            className="screenshot__open"
            onClick={() => setOpen(true)}
            aria-label={`Open larger preview of ${alt}`}
          >
            <img
              src={src}
              alt={alt}
              loading="lazy"
              onError={() => setErrored(true)}
            />
            <span className="screenshot__zoom" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
                <path d="M11 8v6M8 11h6" strokeLinecap="round" />
              </svg>
            </span>
          </button>
        )}
      </div>

      {open && !showPlaceholder && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={() => setOpen(false)}
            aria-label="Close preview"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
            </svg>
          </button>
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img src={src} alt={alt} />
            <figcaption className="lightbox__caption">{alt}</figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
