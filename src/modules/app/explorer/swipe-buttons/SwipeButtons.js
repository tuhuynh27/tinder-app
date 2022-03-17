import React from 'react'
import './SwipeButtons.scss'

function SwipeButtons({ canSwipe, canGoBack, swipeLeft, swipeUp, swipeRight, goBack }) {
  return (
    <div className={`swipe-buttons ${canSwipe ? 'active' : 'deactivate' }`}>
      <button className="back" onClick={() => goBack()} style={{ pointerEvent: canGoBack ? 'auto' : 'none' }}>
        <div style={{ width: '46px', height: '46px' }}>
            <svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="24px" height="24px"
                 className="Scale(.6) Expand">
              <path
                d="M12.119 4.599V3.307c0-1.216-.76-1.672-1.824-.988l-.608.304L6.04 5.13l-.456.304c-1.064.76-1.064 1.748 0 2.28l.38.38c.987.76 2.66 1.824 3.647 2.432l.532.304c.912.76 1.748.228 1.748-.912V8.246a5.125 5.125 0 0 1 5.167 5.167c0 2.888-2.28 5.092-5.167 5.092-3.04 0-5.32-2.28-5.32-5.168 0-.912-.76-1.671-1.747-1.671-1.064 0-1.824.76-1.824 1.671C3 18.125 6.951 22 11.815 22c4.787 0 8.738-3.8 8.738-8.663.076-4.711-3.875-8.51-8.662-8.51l.228-.228z"/>
            </svg>
        </div>
      </button>
      <button className="left" onClick={() => swipeLeft()}>
        <div>
          <svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="29px"
               height="29px" className="Scale(.5) Expand">
            <path
              d="M14.926 12.56v-1.14l5.282 5.288c1.056.977 1.056 2.441 0 3.499-.813 1.057-2.438 1.057-3.413 0L11.512 15h1.138l-5.363 5.125c-.975 1.058-2.438 1.058-3.495 0-1.056-.813-1.056-2.44 0-3.417l5.201-5.288v1.14L3.873 7.27c-1.137-.976-1.137-2.44 0-3.417a1.973 1.973 0 0 1 3.251 0l5.282 5.207H11.27l5.444-5.207c.975-1.139 2.438-1.139 3.413 0 1.057.814 1.057 2.44 0 3.417l-5.2 5.288z"/>
          </svg>
        </div>
      </button>
      <button className="super" onClick={() => swipeUp()}>
        <div style={{ width: '46px', height: '46px' }}>
          <svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="24px"
               height="24px" className="Scale(.6) Expand">
            <path
              d="M21.06 9.06l-5.47-.66c-.15 0-.39-.25-.47-.41l-2.34-5.25c-.47-.99-1.17-.99-1.56 0L8.87 7.99c0 .16-.23.4-.47.4l-5.47.66c-1.01 0-1.25.83-.46 1.65l4.06 3.77c.15.16.23.5.15.66L5.6 20.87c-.16.98.4 1.48 1.33.82l4.69-2.79h.78l4.69 2.87c.78.58 1.56 0 1.25-.98l-1.02-5.75s0-.4.23-.57l3.91-3.86c.78-.82.78-1.64-.39-1.64v.08z"/>
          </svg>
        </div>
      </button>
      <button className="right" onClick={() => swipeRight()}>
        <div>
          <svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="29"
               height="29px" className="Scale(.5) Expand">
            <path
              d="M21.994 10.225c0-3.598-2.395-6.212-5.72-6.212-1.78 0-2.737.647-4.27 2.135C10.463 4.66 9.505 4 7.732 4 4.407 4 2 6.62 2 10.231c0 1.52.537 2.95 1.533 4.076l8.024 7.357c.246.22.647.22.886 0l7.247-6.58.44-.401.162-.182.168-.174a6.152 6.152 0 0 0 1.54-4.09"/>
          </svg>
        </div>
      </button>
      <button className="boost">
        <div style={{ width: '46px', height: '46px' }}>
          <svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="24px" height="24px"
               className="Scale(.6) Expand">
            <path
              d="M15.979 14.018c.637-.638.51-1.275-.192-1.722l-1.275-.765c-.638-.383-1.148-1.275-.956-2.104L15.15 2.73c.191-.765-.128-.956-.765-.446L6.414 9.937c-.638.638-.51 1.275.19 1.722l1.276.765c.638.382 1.148 1.275.957 2.168l-1.658 6.632c-.191.829.191 1.02.765.446l8.035-7.652z"/>
          </svg>
        </div>
      </button>
    </div>
  )
}

export default SwipeButtons
