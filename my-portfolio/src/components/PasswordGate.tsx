import { type FormEvent, type ReactNode, useState } from 'react'

const SESSION_KEY = 'portfolio-authenticated'
const PORTFOLIO_PASSWORD = import.meta.env.VITE_PORTFOLIO_PASSWORD

export default function PasswordGate({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === 'true',
  )
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!PORTFOLIO_PASSWORD) {
      setError('サイトのパスワードが設定されていません。')
      return
    }

    if (password !== PORTFOLIO_PASSWORD) {
      setError('パスワードが違います。')
      setPassword('')
      return
    }

    sessionStorage.setItem(SESSION_KEY, 'true')
    setAuthenticated(true)
  }

  if (authenticated) return children

  return (
    <main className="password-gate">
      <form className="password-gate-card" onSubmit={handleSubmit}>
        <p className="password-gate-eyebrow">Private Portfolio</p>
        <h1>パスワードを入力</h1>
        <p className="password-gate-description">
          このポートフォリオを閲覧するにはパスワードが必要です。
        </p>

        <label htmlFor="portfolio-password">パスワード</label>
        <input
          id="portfolio-password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
            setError('')
          }}
          autoComplete="current-password"
          autoFocus
          required
        />

        {error && (
          <p className="password-gate-error" role="alert">
            {error}
          </p>
        )}

        <button className="btn btn-primary" type="submit">
          ポートフォリオを見る
        </button>
      </form>
    </main>
  )
}
