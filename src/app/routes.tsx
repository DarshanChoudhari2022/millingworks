import type { RouteObject } from 'react-router-dom'

import { SiteLayout } from '../components/layout/SiteLayout'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { AboutPage } from '../pages/AboutPage'
import { ContactPage } from '../pages/ContactPage'
import { DentalLabPage } from '../pages/DentalLabPage'
import { FaqPage } from '../pages/FaqPage'
import { RecordAuditingPage } from '../pages/RecordAuditingPage'
import { ServicesPage } from '../pages/ServicesPage'

export const appRoutes: RouteObject[] = [
  {
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/services', element: <ServicesPage /> },
      { path: '/dental-lab', element: <DentalLabPage /> },
      { path: '/record-auditing', element: <RecordAuditingPage /> },
      { path: '/faqs', element: <FaqPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]
