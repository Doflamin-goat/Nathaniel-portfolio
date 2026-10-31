import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { ProjectMedia } from '../media2026'

type Props = {
  src?: string
  alt: string
  caption?: string
  ratio?: 'wide' | 'tall' | 'square'
  gallery?: ProjectMedia[]
}

export function Screenshot({ src, alt, caption, ratio = 'wide', gallery }: Props) {
  const [errored, setErrored] = useState(false)
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [zoomed, setZoomed] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const images = gallery?.filter(image => image.approved) ?? (src ? [{ src, alt, caption: caption ?? alt, approved: true }] : [])
  const current = images[index] ?? images[0]

  useEffect(() => {
    if (!open) return
    const modal = dialog.current
    const button = trigger.current
    const previousOverflow = document.body.style.overflow
    modal?.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      modal?.close()
      document.body.style.overflow = previousOverflow
      button?.focus({ preventScroll: true })
    }
  }, [open])

  const navigate = (direction: number) => {
    setIndex(value => (value + direction + images.length) % images.length)
    setZoomed(false)
  }

  return (
    <figure className="project-media">
      <div className={`screenshot screenshot--${ratio}`}>
        {!src || errored ? (
          <div className="screenshot__placeholder" role="img" aria-label={alt}>
            <span className="screenshot__title">Preview unavailable</span>
            <span className="screenshot__subtitle">{alt}</span>
          </div>
        ) : (
          <button ref={trigger} type="button" className="screenshot__open" aria-label={`Open larger preview of ${alt}`}
            onClick={() => { setIndex(Math.max(0, images.findIndex(image => image.src === src))); setZoomed(false); setOpen(true) }}>
            <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setErrored(true)} />
            <span className="screenshot__hint" aria-hidden="true">Enlarge ↗</span>
          </button>
        )}
      </div>
      {caption && <figcaption className="project-media__caption">{caption}</figcaption>}
      {open && current && createPortal(
        <dialog ref={dialog} className="image-dialog" aria-label={`Image preview: ${current.caption}`}
          onCancel={() => setOpen(false)} onClose={() => setOpen(false)}
          onClick={event => { if (event.target === event.currentTarget) setOpen(false) }}
          onKeyDown={event => {
            if (images.length > 1 && !zoomed && (event.key === 'ArrowRight' || event.key === 'ArrowLeft')) {
              event.preventDefault()
              navigate(event.key === 'ArrowRight' ? 1 : -1)
            }
          }}>
          <div className="image-dialog__panel">
            <div className="image-dialog__toolbar">
              <span>{index + 1} / {images.length}</span>
              <button type="button" className="btn btn--ghost" aria-pressed={zoomed} onClick={() => setZoomed(value => !value)}>{zoomed ? 'Fit image' : 'Actual size'}</button>
              <button type="button" className="btn btn--ghost" onClick={() => setOpen(false)} aria-label="Close preview">Close ×</button>
            </div>
            <div className={`image-dialog__viewport${zoomed ? ' image-dialog__viewport--zoomed' : ''}`} tabIndex={0} aria-label="Screenshot; scroll to inspect at actual size">
              <img src={current.src} alt={current.alt} />
            </div>
            <p className="lightbox__caption" aria-live="polite">{current.caption}</p>
            {images.length > 1 && <div className="image-dialog__navigation">
              <button type="button" className="btn btn--ghost" onClick={() => navigate(-1)}>← Previous</button>
              <span>Use ← / → to browse</span>
              <button type="button" className="btn btn--ghost" onClick={() => navigate(1)}>Next →</button>
            </div>}
          </div>
        </dialog>, document.body,
      )}
    </figure>
  )
}
