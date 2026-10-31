import Window from '../components/Window'
import { EMAILS, PHONE, RECRUITMENT_URL, SUPERVISOR } from '../data'

export default function ContactPage() {
  return (
    <div className="page">
      <div className="cta-block cta-top">
        <p className="cta-title">Chcesz tworzyć z nami AI?</p>
        <p>Wypełnij krótki formularz rekrutacyjny — odezwiemy się do Ciebie.</p>
        <a className="btn btn-big" href={RECRUITMENT_URL} target="_blank" rel="noreferrer">
          Dołącz do nas → formularz rekrutacyjny
        </a>
      </div>

      <Window title="~/kontakt — zsh" cmd="contact --all">
        <h1 className="h1">
          <span className="hash">#</span> Kontakt
        </h1>
        <dl className="kv">
          <dt>email</dt>
          <dd>
            {EMAILS.map((e, i) => (
              <span key={e}>
                {i > 0 && <span className="dim"> | </span>}
                <a href={`mailto:${e}`}>{e}</a>
              </span>
            ))}
          </dd>
          <dt>telefon</dt>
          <dd>
            <a href={PHONE.href}>{PHONE.display}</a>
          </dd>
          <dt>rekrutacja</dt>
          <dd>
            <a href={RECRUITMENT_URL} target="_blank" rel="noreferrer">
              formularz rekrutacyjny ↗
            </a>
          </dd>
          <dt>opiekun</dt>
          <dd>{SUPERVISOR}</dd>
          <dt>gdzie</dt>
          <dd>AGH, Kraków</dd>
        </dl>
      </Window>
    </div>
  )
}
