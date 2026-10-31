import Window from '../components/Window'
import { RECRUITMENT_URL } from '../data'

const AREAS = [
  {
    id: '01',
    title: 'Projektowanie agentów AI',
    text: 'Budujemy agentów, którzy samodzielnie planują, korzystają z narzędzi i wykonują zadania — od asystentów do nauki po automatyzację codziennych, żmudnych czynności.',
    tags: ['tool use', 'MCP', 'multi-agent', 'RAG'],
  },
  {
    id: '02',
    title: 'Machine Learning',
    text: 'Od danych do działającego modelu: przygotowanie zbiorów, trening, ewaluacja i wdrożenie. Uczymy się na realnych problemach, a nie tylko na tutorialach.',
    tags: ['PyTorch', 'scikit-learn', 'computer vision', 'MLOps'],
  },
  {
    id: '03',
    title: 'Duże modele językowe (LLM)',
    text: 'Prompt engineering, fine-tuning, ewaluacja i bezpieczeństwo modeli. Sprawdzamy, gdzie LLM-y realnie pomagają, a gdzie jeszcze zawodzą.',
    tags: ['fine-tuning', 'ewaluacja', 'embeddingi', 'open-source LLM'],
  },
]

export default function AboutPage() {
  return (
    <div className="page">
      <Window title="about.md — nvim" cmd="cat about.md">
        <h1 className="h1">
          <span className="hash">#</span> O nas
        </h1>
        <p className="lead">
          <strong>KN Noxus</strong> to studenckie koło naukowe działające na AGH w Krakowie. Naszą misją jest
          wdrażanie sztucznej inteligencji w <em>codzienne życie</em> — tak, żeby AI była narzędziem, które
          naprawdę oszczędza czas, a nie tylko ciekawostką z konferencji.
        </p>
        <p>
          Koło wyrosło ze społeczności zajmującej się technologiami rozproszonymi, blockchainem i Web3. Dziś
          stawiamy na nowy kierunek: praktyczne zastosowania AI. Łączymy doświadczenie w budowaniu prototypów z
          tym, co obecnie dzieje się najszybciej w informatyce.
        </p>
      </Window>

      <div className="grid-3">
        {AREAS.map((a) => (
          <Window key={a.id} title={`~/obszary/${a.id}`} className="card">
            <p className="card-id">{a.id}</p>
            <h2 className="h2">{a.title}</h2>
            <p>{a.text}</p>
            <ul className="tags">
              {a.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Window>
        ))}
      </div>

      <Window title="~/jak-działamy">
        <h2 className="h2">
          <span className="hash">##</span> Jak działamy
        </h2>
        <ul className="list">
          <li>projekty w małych zespołach, od pomysłu do działającego prototypu,</li>
          <li>warsztaty i wewnętrzne prezentacje — każdy uczy się od każdego,</li>
          <li>udział w hackathonach i konferencjach,</li>
          <li>otwartość na wszystkie kierunki — liczy się ciekawość, nie staż.</li>
        </ul>
        <a className="btn" href={RECRUITMENT_URL} target="_blank" rel="noreferrer">
          Dołącz do nas →
        </a>
      </Window>
    </div>
  )
}
