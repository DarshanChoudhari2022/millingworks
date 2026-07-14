import { useEffect, type JSX } from 'react'
import { company } from '../../content/company'
import type { ServiceMetadata } from '../../content/routeMetadata'

const SITE_URL = 'https://millingworks.vercel.app'

interface ManagedMeta {
  element: HTMLMetaElement
  existed: boolean
  previousContent: string
}

function setMeta(selector: string, attributes: Record<string, string>, content: string): ManagedMeta {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  const existed = Boolean(element)
  const previousContent = element?.content ?? ''
  if (!element) {
    element = document.createElement('meta')
    Object.entries(attributes).forEach(([name, value]) => element?.setAttribute(name, value))
    document.head.append(element)
  }
  element.content = content
  return { element, existed, previousContent }
}

export function RouteMetadata({ metadata }: { metadata: ServiceMetadata }): JSX.Element | null {
  useEffect(() => {
    const previousTitle = document.title
    const canonicalUrl = `${SITE_URL}${metadata.canonicalPath}`
    document.title = metadata.title

    const managed = [
      setMeta('meta[name="description"]', { name: 'description' }, metadata.description),
      setMeta('meta[name="keywords"]', { name: 'keywords' }, metadata.keywords),
      setMeta('meta[property="og:title"]', { property: 'og:title' }, metadata.title),
      setMeta('meta[property="og:description"]', { property: 'og:description' }, metadata.description),
      setMeta('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl),
    ]

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    const canonicalExisted = Boolean(canonical)
    const previousCanonical = canonical?.href ?? ''
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = canonicalUrl

    const schema = document.createElement('script')
    schema.type = 'application/ld+json'
    schema.dataset.routeMetadata = 'true'
    schema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: metadata.serviceType,
      description: metadata.description,
      url: canonicalUrl,
      provider: { '@type': 'Organization', name: company.name, email: company.email, telephone: company.phoneDisplay },
      areaServed: ['United Kingdom', 'Europe'],
    })
    document.head.append(schema)

    return () => {
      document.title = previousTitle
      managed.forEach(({ element, existed, previousContent }) => {
        if (existed) element.content = previousContent
        else element.remove()
      })
      if (canonicalExisted && canonical) canonical.href = previousCanonical
      else canonical?.remove()
      schema.remove()
    }
  }, [metadata])

  return null
}
