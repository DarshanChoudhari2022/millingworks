import type { JSX } from 'react'
import { useRoutes } from 'react-router-dom'

import { appRoutes } from './routes'

export function App(): JSX.Element {
  return <>{useRoutes(appRoutes)}</>
}
