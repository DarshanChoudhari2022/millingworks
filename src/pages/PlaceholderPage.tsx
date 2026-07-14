import type { JSX } from 'react'

interface PlaceholderPageProps {
  title: string
}

export function PlaceholderPage({ title }: PlaceholderPageProps): JSX.Element {
  return (
    <main>
      <h1>{title}</h1>
    </main>
  )
}
