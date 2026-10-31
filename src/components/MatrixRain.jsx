import { useEffect, useRef } from 'react'

const GLYPHS =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン0123456789NOXUS<>{}[]/=+*AIML'
const PALETTE = ['#fcd9c8', '#f8c0a6', '#f2a587', '#e08a6b', '#b8664c']

// Kod spadający jak w Matrixie, w ciepłej palecie Omarchy, plus dryfujące "piksele".
export default function MatrixRain({ intensity = 1 }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const size = 16
    let w, h, columns, drops, pixels, raf, last = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      columns = Math.ceil(w / size)
      drops = Array.from({ length: columns }, () => ({
        y: Math.random() * -h / size,
        speed: 0.35 + Math.random() * 0.65,
        active: Math.random() < 0.55 * intensity,
      }))
      pixels = Array.from({ length: Math.round((w * h) / 26000) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        s: 4 + Math.floor(Math.random() * 3) * 3,
        vy: -(0.05 + Math.random() * 0.25),
        c: PALETTE[2 + Math.floor(Math.random() * 3)],
        a: 0.25 + Math.random() * 0.6,
      }))
      ctx.fillStyle = '#161211'
      ctx.fillRect(0, 0, w, h)
    }

    const frame = (t) => {
      raf = requestAnimationFrame(frame)
      if (t - last < 50) return
      last = t

      ctx.fillStyle = 'rgba(22, 18, 17, 0.14)'
      ctx.fillRect(0, 0, w, h)
      ctx.font = `${size - 2}px "JetBrains Mono", monospace`

      drops.forEach((d, i) => {
        if (!d.active) {
          if (Math.random() < 0.002 * intensity) d.active = true
          return
        }
        const ch = GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        const y = d.y * size
        ctx.fillStyle = '#fff1e8'
        ctx.fillText(ch, i * size, y)
        ctx.fillStyle = PALETTE[(i + Math.floor(d.y)) % PALETTE.length]
        ctx.globalAlpha = 0.7
        ctx.fillText(GLYPHS[(i * 7 + Math.floor(d.y)) % GLYPHS.length], i * size, y - size)
        ctx.globalAlpha = 1
        d.y += d.speed
        if (y > h && Math.random() > 0.975) {
          d.y = 0
          d.active = Math.random() < 0.6 * intensity
        }
      })

      pixels.forEach((p) => {
        p.y += p.vy * 8
        if (p.y < -10) p.y = h + 10
        ctx.globalAlpha = p.a
        ctx.fillStyle = p.c
        ctx.fillRect(Math.round(p.x), Math.round(p.y), p.s, p.s)
      })
      ctx.globalAlpha = 1
    }

    resize()
    window.addEventListener('resize', resize)
    if (reduced) {
      for (let i = 0; i < 40; i++) frame(i * 60)
      cancelAnimationFrame(raf)
    } else {
      raf = requestAnimationFrame(frame)
    }
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [intensity])

  return <canvas ref={ref} className="matrix" aria-hidden="true" />
}
