import type { RouteObject } from 'react-router-dom'

import { NotFoundPage } from '../pages/NotFoundPage'
import { PlaceholderPage } from '../pages/PlaceholderPage'

export const appRoutes: RouteObject[] = [
  { path: '/', element: <PlaceholderPage title="Milling Works" /> },
  { path: '/about', element: <PlaceholderPage title="About Milling Works" /> },
  { path: '/services', element: <PlaceholderPage title="Services" /> },
  { path: '/dental-lab', element: <PlaceholderPage title="Dental Lab" /> },
  {
    path: '/record-auditing',
    element: <PlaceholderPage title="Record Auditing" />,
  },
  { path: '/faqs', element: <PlaceholderPage title="FAQs" /> },
  { path: '/contact', element: <PlaceholderPage title="Contact" /> },
  { path: '*', element: <NotFoundPage /> },
]
