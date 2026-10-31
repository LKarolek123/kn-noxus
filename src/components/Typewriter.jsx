import { useEffect, useState } from 'react'

export default function Typewriter({ text, speed = 35, delay = 0, onDone }) {
  const [n, setN] = useState(0)

  useEffect(() => {
    setN(0)
    let i = 0
    let timer
    const start = setTimeout(function tick() {
      i++
      setN(i)
      if (i < text.length) timer = setTimeout(tick, speed)
      else onDone?.()
    }, delay)
    return () => {
      clearTimeout(start)
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, speed, delay])

  return (
    <span aria-label={text}>
      <span aria-hidden="true">{text.slice(0, n)}</span>
    </span>
  )
}
