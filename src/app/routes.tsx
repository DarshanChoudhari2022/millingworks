import { Navigate, type RouteObject } from 'react-router-dom'

import { SiteLayout } from '../components/layout/SiteLayout'
import { HomePage } from '../pages/HomePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { AboutPage } from '../pages/AboutPage'
import { ContactPage } from '../pages/ContactPage'
import { FaqPage } from '../pages/FaqPage'
import { CrownsBridgesPage } from '../pages/CrownsBridgesPage'
import { DentalImplantsPage } from '../pages/DentalImplantsPage'
import { FullServiceDentalLabPage } from '../pages/FullServiceDentalLabPage'


export const appRoutes: RouteObject[] = [
  {
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/crowns-bridges', element: <CrownsBridgesPage /> },
      { path: '/dental-implants', element: <DentalImplantsPage /> },
      { path: '/full-service-dental-lab', element: <FullServiceDentalLabPage /> },
      { path: '/record-auditing', element: <DentalRecordAuditingPage /> },
      { path: '/faqs', element: <FaqPage /> },
      { path: '/contact', element: <ContactPage /> },
      /* Redirects for removed pages */
      { path: '/dental-lab', element: <Navigate to="/full-service-dental-lab" replace /> },
      { path: '/services', element: <Navigate to="/full-service-dental-lab" replace /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]
