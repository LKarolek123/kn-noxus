import { Link } from 'react-router-dom'
import Window from '../components/Window'
import { RECRUITMENT_URL } from '../data'

const QUEUE = [
  { name: 'agent-asystent-studenta', area: 'Agenci AI', desc: 'agent, który ogarnia plan zajęć, terminy i materiały' },
  { name: 'ml-w-praktyce', area: 'Machine Learning', desc: 'modele rozwiązujące konkretne, codzienne problemy' },
  { name: 'llm-lab', area: 'LLM', desc: 'eksperymenty z fine-tuningiem i ewaluacją modeli językowych' },
]

export default function ProjectsPage() {
  return (
    <div className="page">
      <Window title="~/projekty — zsh" cmd="ls ./projekty">
        <p className="dim mono">total 0</p>
        <h1 className="h1">
          <span className="hash">#</span> Nasze projekty
        </h1>
        <p className="lead">
          Już wkrótce startujemy z realizacją projektów z zakresu <strong>agentów AI</strong>,{' '}
          <strong>machine learningu</strong> i <strong>dużych modeli językowych</strong> — wszystko z myślą o
          wdrażaniu AI w codzienne życie.
        </p>

        <div className="progress" aria-label="Przygotowania do startu projektów">
          <span className="progress-label">booting projects…</span>
          <span className="progress-track">
            <span className="progress-fill" />
          </span>
        </div>
      </Window>

      <Window title="~/projekty/kolejka">
        <h2 className="h2">
          <span className="hash">##</span> W kolejce
        </h2>
        <ul className="queue">
          {QUEUE.map((q) => (
            <li key={q.name}>
              <span className="queue-status">[ PENDING ]</span>
              <span className="queue-name">{q.name}/</span>
              <span className="queue-area">{q.area}</span>
              <span className="queue-desc"># {q.desc}</span>
            </li>
          ))}
        </ul>
        <p className="dim">Ostateczny zakres projektów ustalimy razem z nowymi członkami.</p>
      </Window>

      <div className="cta-block">
        <p className="cta-title">Dołącz do nas, by wspólnie je tworzyć!</p>
        <div className="cta-row">
          <a className="btn btn-big" href={RECRUITMENT_URL} target="_blank" rel="noreferrer">
            Dołącz do nas →
          </a>
          <Link className="btn btn-ghost" to="/kontakt">
            Napisz do nas
          </Link>
        </div>
      </div>
    </div>
  )
}
