import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES, RECRUITMENT_URL } from '../data'

// Górny pasek w stylu waybara: obszary robocze 1–4 = zakładki strony.
export default function TopBar() {
  const [time, setTime] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 15000)
    return () => clearInterval(id)
  }, [])

  return (
    <nav className="topbar" aria-label="Nawigacja główna">
      <div className="workspaces">
        {ROUTES.map((r) => (
          <NavLink key={r.path} to={r.path} end className="ws" title={`${r.label} (klawisz ${r.key})`}>
            <span className="ws-num">{r.key}</span>
            <span className="ws-label">{r.label}</span>
          </NavLink>
        ))}
      </div>
      <div className="bar-right">
        <a className="bar-cta" href={RECRUITMENT_URL} target="_blank" rel="noreferrer">
          Dołącz do nas
        </a>
        <span className="bar-clock">
          {time.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </nav>
  )
}
