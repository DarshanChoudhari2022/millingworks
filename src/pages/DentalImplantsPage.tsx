import type { JSX } from 'react'
import { ServiceDetailPage } from '../components/ui/ServiceDetailPage'
import { servicePages } from '../content/servicePages'
export function DentalImplantsPage(): JSX.Element { return <ServiceDetailPage content={servicePages['dental-implants']} /> }
