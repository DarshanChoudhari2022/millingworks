import crownsHero from '../assets/hero-crowns.webp'
import implantsHero from '../assets/hero-implant.webp'

export interface ServicePageContent {
  slug: 'crowns-bridges' | 'dental-implants'
  eyebrow: string
  title: string
  introduction: string
  heroImage: string
  heroAlt: string
  offerings: readonly { title: string; description: string }[]
  workflow: readonly { title: string; description: string }[]
  ctaLabel: string
}

export const servicePages: Record<ServicePageContent['slug'], ServicePageContent> = {
  'crowns-bridges': {
    slug: 'crowns-bridges', eyebrow: 'Crown and bridge laboratory',
    title: 'Crowns and bridges, made with intent',
    introduction: 'A clear laboratory workflow for restorations that demand careful review, consistent communication and a considered finish.',
    heroImage: crownsHero, heroAlt: 'A precisely finished dental crown restoration',
    offerings: [
      { title: 'Single crowns', description: 'Case-led production with attention to prescription, fit and finish.' },
      { title: 'Bridge work', description: 'A structured review process for multi-unit restorative cases.' },
      { title: 'Aesthetic restorations', description: 'Laboratory support for cases where shape, shade and surface character matter.' },
    ],
    workflow: [
      { title: 'Send the case', description: 'Share the prescription, records and any case-specific priorities.' },
      { title: 'Technical review', description: 'The laboratory reviews the information and raises questions before production.' },
      { title: 'Laboratory production', description: 'The restoration moves through the appropriate production and finishing stages.' },
      { title: 'Quality check', description: 'The completed work is checked against the agreed case information before dispatch.' },
    ], ctaLabel: 'Send a crown or bridge case',
  },
  'dental-implants': {
    slug: 'dental-implants', eyebrow: 'Implant laboratory support',
    title: 'Implant restorations, carefully resolved',
    introduction: 'A collaborative route for implant cases, from the first record review to a restoration prepared around the prescription.',
    heroImage: implantsHero, heroAlt: 'A dental implant restoration shown in precise detail',
    offerings: [
      { title: 'Single-unit restorations', description: 'Focused laboratory support for individual implant cases.' },
      { title: 'Multi-unit cases', description: 'A measured workflow for cases involving several connected units.' },
      { title: 'Case consultation', description: 'Early technical discussion when records or restoration choices need review.' },
    ],
    workflow: [
      { title: 'Share the records', description: 'Provide the prescription, scan or impression information and relevant case records.' },
      { title: 'Confirm the approach', description: 'Questions and requirements are resolved before laboratory work begins.' },
      { title: 'Produce and finish', description: 'The restoration follows the agreed laboratory and finishing workflow.' },
      { title: 'Review and dispatch', description: 'The case is checked against the supplied information before it leaves the laboratory.' },
    ], ctaLabel: 'Discuss an implant case',
  },
}
