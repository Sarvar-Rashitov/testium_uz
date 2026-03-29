'use client'

import { useEffect, useRef } from 'react'

export function GalaxyCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      html {
        cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="8" fill="none" stroke="rgb(59, 130, 246)" stroke-width="2" opacity="0.6"/><circle cx="16" cy="16" r="4" fill="rgb(59, 130, 246)" opacity="0.8"/><circle cx="16" cy="16" r="2" fill="rgb(129, 140, 248)"/></svg>') 16 16, auto;
      }
      
      a, button, input, textarea, select, [role="button"] {
        cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="10" fill="none" stroke="rgb(99, 102, 241)" stroke-width="2" opacity="0.7"/><circle cx="16" cy="16" r="5" fill="rgb(99, 102, 241)" opacity="0.9"/><circle cx="16" cy="16" r="2" fill="rgb(139, 92, 246)"/></svg>') 16 16, pointer;
      }

      #galaxy-cursor {
        pointer-events: none;
        position: fixed;
        width: 40px;
        height: 40px;
        z-index: 9999;
        mix-blend-mode: screen;
      }

      #galaxy-cursor-inner {
        position: relative;
        width: 100%;
        height: 100%;
      }

      #galaxy-cursor-glow {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 2px solid rgba(59, 130, 246, 0.6);
        animation: galaxyGlow 3s ease-in-out infinite;
      }

      #galaxy-cursor-rotate {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px dashed rgba(99, 102, 241, 0.4);
        animation: galaxyRotate 4s linear infinite;
      }

      #galaxy-cursor-center {
        position: absolute;
        width: 8px;
        height: 8px;
        background: radial-gradient(circle, rgba(139, 92, 246, 1), rgba(99, 102, 241, 0.8));
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: galaxyPulse 2s ease-in-out infinite;
        box-shadow: 0 0 10px rgba(139, 92, 246, 0.8);
      }

      @keyframes galaxyGlow {
        0% {
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
          opacity: 0.5;
        }
        50% {
          box-shadow: 0 0 25px rgba(59, 130, 246, 0.8);
          opacity: 1;
        }
        100% {
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
          opacity: 0.5;
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
          opacity: 0.6;
          transform: translate(-50%, -50%) scale(1);
        }
        50% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1.3);
        }
      }
    `
    document.head.appendChild(style)

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX - 20 + 'px'
        cursorRef.current.style.top = e.clientY - 20 + 'px'
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      id="galaxy-cursor"
    >
      <div id="galaxy-cursor-inner">
        <div id="galaxy-cursor-rotate" />
        <div id="galaxy-cursor-glow" />
        <div id="galaxy-cursor-center" />
      </div>
    </div>
  )
}
