/// <reference types="vite/client" />
import { useState } from 'preact/hooks'

const API_URL = (import.meta.env['VITE_API_URL'] as string | undefined) ?? 'https://app.lesfeedback.com'

const STYLES = `
  #lf-btn {
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #1a1a1a;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 20px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 99998;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.15s ease;
  }
  #lf-btn:hover { transform: scale(1.08); }
  #lf-panel {
    position: fixed;
    bottom: 84px;
    right: 24px;
    width: 320px;
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    z-index: 99999;
    font-family: system-ui, sans-serif;
  }
  #lf-panel h3 { margin: 0 0 12px; font-size: 15px; font-weight: 600; color: #111; }
  #lf-stars { display: flex; gap: 6px; margin-bottom: 12px; }
  #lf-stars button {
    background: none; border: none; cursor: pointer;
    font-size: 22px; padding: 0; line-height: 1;
    transition: transform 0.1s;
  }
  #lf-stars button:hover { transform: scale(1.2); }
  #lf-textarea {
    width: 100%; box-sizing: border-box;
    border: 1px solid #d1d5db; border-radius: 8px;
    padding: 10px; font-size: 14px; resize: vertical;
    min-height: 80px; font-family: inherit; color: #111;
  }
  #lf-textarea:focus { outline: none; border-color: #1a1a1a; }
  #lf-submit {
    margin-top: 10px; width: 100%;
    background: #1a1a1a; color: #fff; border: none;
    border-radius: 8px; padding: 10px; font-size: 14px;
    cursor: pointer; font-weight: 500;
    transition: opacity 0.15s;
  }
  #lf-submit:disabled { opacity: 0.5; cursor: not-allowed; }
  #lf-msg { margin-top: 10px; font-size: 13px; text-align: center; }
  #lf-msg.success { color: #16a34a; }
  #lf-msg.error { color: #dc2626; }
`

interface Props {
  apiKey: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

export function Widget({ apiKey }: Props) {
  const [open, setOpen] = useState(false)
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [text, setText] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function submit() {
    if (!rating && !text.trim()) return
    setStatus('loading')
    try {
      const res = await fetch(`${API_URL}/api/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          apiKey,
          rating: rating || undefined,
          text: text.trim() || undefined,
          metadata: { url: window.location.href },
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setTimeout(() => {
        setOpen(false)
        setRating(0)
        setText('')
        setStatus('idle')
      }, 2000)
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <style>{STYLES}</style>

      {open && (
        <div id="lf-panel">
          <h3>Share your feedback</h3>

          <div id="lf-stars">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                onMouseEnter={() => setHovered(n)}
                onMouseLeave={() => setHovered(0)}
                onClick={() => setRating(n)}
                aria-label={`Rate ${n} stars`}
              >
                {n <= (hovered || rating) ? '★' : '☆'}
              </button>
            ))}
          </div>

          <textarea
            id="lf-textarea"
            placeholder="Tell us what you think..."
            value={text}
            onInput={(e) => setText((e.target as HTMLTextAreaElement).value)}
          />

          <button
            id="lf-submit"
            onClick={submit}
            disabled={status === 'loading' || status === 'success'}
          >
            {status === 'loading' ? 'Sending…' : status === 'success' ? 'Sent!' : 'Send feedback'}
          </button>

          {status === 'success' && (
            <p id="lf-msg" class="success">Thanks for your feedback!</p>
          )}
          {status === 'error' && (
            <p id="lf-msg" class="error">Something went wrong. Please try again.</p>
          )}
        </div>
      )}

      <button id="lf-btn" onClick={() => setOpen((v: boolean) => !v)} aria-label="Feedback">
        {open ? '✕' : '💬'}
      </button>
    </>
  )
}
