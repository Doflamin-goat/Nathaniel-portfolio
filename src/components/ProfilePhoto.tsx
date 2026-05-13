import { useState } from 'react'

type Props = {
  src?: string
  alt?: string
}

export function ProfilePhoto({
  src = '/profile/nathaniel-profile.png',
  alt = 'Nathaniel Philip T. Cruz',
}: Props) {
  const [errored, setErrored] = useState(false)
  const showPlaceholder = !src || errored

  return (
    <div className="profile-card">
      <div className="profile-card__glow" aria-hidden="true" />
      <div className="profile-card__frame">
        {showPlaceholder ? (
          <div className="profile-card__placeholder" role="img" aria-label={alt}>
            <svg
              className="profile-card__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              aria-hidden="true"
            >
              <circle cx="12" cy="9" r="3.6" />
              <path d="M4.5 20c1.6-3.2 4.4-4.8 7.5-4.8s5.9 1.6 7.5 4.8" strokeLinecap="round" />
            </svg>
            <span className="profile-card__title">Profile Photo Coming Soon</span>
            <span className="profile-card__subtitle">/profile/nathaniel-profile.png</span>
          </div>
        ) : (
          <img src={src} alt={alt} onError={() => setErrored(true)} />
        )}
      </div>
      <div className="profile-card__meta">
        <span className="profile-card__label">Online</span>
        <span className="profile-card__name">Nathaniel Philip T. Cruz</span>
        <span className="profile-card__role">IT Specialist · Automation Dev</span>
      </div>
    </div>
  )
}
