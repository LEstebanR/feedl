import { render } from 'preact'
import { Widget } from './widget'

function init(config?: { apiKey?: string }) {
  const script =
    document.currentScript as HTMLScriptElement | null
  const apiKey = config?.apiKey ?? script?.dataset.apiKey ?? ''

  if (!apiKey) {
    console.warn('[LESFeedback] No apiKey provided. Widget will not load.')
    return
  }

  const container = document.createElement('div')
  container.id = 'lesfeedback-root'
  document.body.appendChild(container)

  render(Widget({ apiKey }), container)
}

// Auto-init if script has data-api-key
const script = document.currentScript as HTMLScriptElement | null
if (script?.dataset.apiKey) {
  init({ apiKey: script.dataset.apiKey })
}

// Expose manual init
;(window as Window & { LESFeedback?: { init: typeof init } }).LESFeedback = {
  init,
}
