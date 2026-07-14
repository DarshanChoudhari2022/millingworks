import type { JSX } from 'react'

interface PlaceholderPageProps {
  title: string
}

export function PlaceholderPage({ title }: PlaceholderPageProps): JSX.Element {
  return (
    <div className="placeholder-page">
      <h1>{title}</h1>
    </div>
  )
}
