import type { JSX } from 'react'
import { ServiceDetailPage } from '../components/ui/ServiceDetailPage'
import { servicePages } from '../content/servicePages'
export function CrownsBridgesPage(): JSX.Element { return <ServiceDetailPage content={servicePages['crowns-bridges']} /> }
