import { useState } from 'react'

type Props = {
  src?: string
  alt: string
  ratio?: 'wide' | 'tall' | 'square'
}

export function Screenshot({ src, alt, ratio = 'wide' }: Props) {
  const [errored, setErrored] = useState(false)
  const showPlaceholder = !src || errored

  return (
    <div className={`screenshot screenshot--${ratio}`}>
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
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setErrored(true)}
        />
      )}
    </div>
  )
}
