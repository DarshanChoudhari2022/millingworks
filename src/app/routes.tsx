import { Navigate, type RouteObject } from 'react-router-dom'

import { SiteLayout } from '../components/layout/SiteLayout'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { AboutPage } from '../pages/AboutPage'
import { ContactPage } from '../pages/ContactPage'
import { DentalLabPage } from '../pages/DentalLabPage'
import { FaqPage } from '../pages/FaqPage'

export const appRoutes: RouteObject[] = [
  {
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/dental-lab', element: <DentalLabPage /> },
      { path: '/faqs', element: <FaqPage /> },
      { path: '/contact', element: <ContactPage /> },
      /* Redirects for removed pages */
      { path: '/services', element: <Navigate to="/dental-lab" replace /> },
      { path: '/record-auditing', element: <Navigate to="/dental-lab" replace /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]
