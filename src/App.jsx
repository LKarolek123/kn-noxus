import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import MatrixRain from './components/MatrixRain'
import TopBar from './components/TopBar'
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import { ROUTES, SUPERVISOR } from './data'

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    window.scrollTo(0, 0)
    const route = ROUTES.find((r) => r.path === location.pathname)
    document.title = route && !isHome ? `${route.label} · KN Noxus` : 'KN Noxus · AGH'
  }, [location.pathname, isHome])

  // Klawisze 1–4 przełączają zakładki jak obszary robocze w Hyprland.
  useEffect(() => {
    const onKey = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey || e.target.closest('input, textarea')) return
      const route = ROUTES.find((r) => r.key === e.key)
      if (route) navigate(route.path)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate])

  return (
    <>
      <MatrixRain intensity={isHome ? 1 : 0.35} />
      <div className={`veil ${isHome ? 'veil-home' : ''}`} aria-hidden="true" />
      <TopBar />
      <main className="main" key={location.pathname}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path="/projekty" element={<ProjectsPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="footer">
        <span>© {new Date().getFullYear()} KN Noxus · AGH Kraków</span>
        <span className="dim">opiekun: {SUPERVISOR}</span>
      </footer>
    </>
  )
}
