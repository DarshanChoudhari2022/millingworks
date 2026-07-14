import type { JSX } from 'react'
import { Link } from 'react-router-dom'

export function NotFoundPage(): JSX.Element {
  return (
    <main>
      <h1>Page not found</h1>
      <Link to="/">Back to home</Link>
    </main>
  )
}
