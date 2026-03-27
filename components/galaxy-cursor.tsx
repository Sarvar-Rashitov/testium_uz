'use client'

import { useEffect } from 'react'

export function GalaxyCursor() {
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      html {
        cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="8" fill="none" stroke="rgb(59, 130, 246)" stroke-width="2" opacity="0.6"/><circle cx="16" cy="16" r="4" fill="rgb(59, 130, 246)" opacity="0.8"/><circle cx="16" cy="16" r="2" fill="rgb(129, 140, 248)"/></svg>') 16 16, auto;
      }
      
      a, button, input, textarea, select, [role="button"] {
        cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="10" fill="none" stroke="rgb(99, 102, 241)" stroke-width="2" opacity="0.7"/><circle cx="16" cy="16" r="5" fill="rgb(99, 102, 241)" opacity="0.9"/><circle cx="16" cy="16" r="2" fill="rgb(139, 92, 246)"/></svg>') 16 16, pointer;
      }

      @keyframes galaxyGlow {
        0% {
          box-shadow: 0 0 10px rgba(59, 130, 246, 0);
        }
        50% {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
        100% {
          box-shadow: 0 0 10px rgba(59, 130, 246, 0);
        }
      }

      @keyframes galaxyRotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes galaxyPulse {
        0%, 100% {
          opacity: 0.5;
          transform: scale(1);
        }
        50% {
          opacity: 1;
          transform: scale(1.2);
        }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return null
}
