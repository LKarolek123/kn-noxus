import Typewriter from './Typewriter'

// Okno terminala w stylu kafelka Hyprland/Omarchy.
export default function Window({ title, cmd, children, className = '' }) {
  return (
    <section className={`window ${className}`}>
      <header className="window-bar">
        <span className="window-title">{title}</span>
        <span className="window-dots" aria-hidden="true">
          <i /> <i /> <i />
        </span>
      </header>
      <div className="window-body">
        {cmd && (
          <p className="prompt">
            <span className="ps1">noxus@agh</span>
            <span className="dim">:~$ </span>
            <Typewriter text={cmd} speed={30} />
            <span className="caret" aria-hidden="true" />
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
