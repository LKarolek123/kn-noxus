import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PixelLogo from '../components/PixelLogo'
import Typewriter from '../components/Typewriter'
import { ROUTES, RECRUITMENT_URL } from '../data'

const MENU = ROUTES.slice(1)

export default function MainPage() {
  const [active, setActive] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest('input, textarea')) return
      if (e.key === 'ArrowDown' || e.key === 'j') setActive((a) => (a + 1) % MENU.length)
      else if (e.key === 'ArrowUp' || e.key === 'k') setActive((a) => (a + MENU.length - 1) % MENU.length)
      else if (e.key === 'Enter' && document.activeElement === document.body) navigate(MENU[active].path)
      else return
      e.preventDefault()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, navigate])

  return (
    <div className="home">
      <p className="home-kicker">
        <span className="dim">[</span> koło naukowe · AGH Kraków <span className="dim">]</span>
      </p>
      <h1 className="home-logo">
        <PixelLogo text="NOXUS" />
      </h1>
      <p className="home-tagline">Sztuczna inteligencja w codziennym życiu.</p>
      <p className="home-sub">
        <Typewriter text="Projektujemy agentów AI, trenujemy modele, oswajamy LLM-y." speed={28} delay={400} />
        <span className="caret" aria-hidden="true" />
      </p>

      <div className="launcher" role="menu" aria-label="Wybierz zakładkę">
        <div className="launcher-head">
          <span className="ps1">noxus@agh</span>
          <span className="dim">:~$ </span>
          <span>menu --select</span>
        </div>
        {MENU.map((r, i) => (
          <Link
            key={r.path}
            to={r.path}
            role="menuitem"
            className={`launcher-item ${i === active ? 'is-active' : ''}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
          >
            <span className="li-arrow">{i === active ? '▶' : ' '}</span>
            <span className="li-key">[{r.key}]</span>
            <span className="li-label">{r.label}</span>
            <span className="li-cmd">$ {r.cmd}</span>
          </Link>
        ))}
        <a className="launcher-item launcher-cta" href={RECRUITMENT_URL} target="_blank" rel="noreferrer">
          <span className="li-arrow">★</span>
          <span className="li-key">[↵]</span>
          <span className="li-label">Dołącz do nas</span>
          <span className="li-cmd">$ ./rekrutacja.sh</span>
        </a>
        <p className="launcher-hint">
          <kbd>↑</kbd> <kbd>↓</kbd> wybór · <kbd>Enter</kbd> otwórz · <kbd>1</kbd>–<kbd>4</kbd> skok do zakładki
        </p>
      </div>
    </div>
  )
}
