export interface Service {
  id: string
  title: string
  summary: string
  features: readonly string[]
  href: string
}

export const services: Service[] = [
  {
    id: 'crowns-bridges',
    title: 'Crowns & Bridges',
    summary:
      'Precision-milled single crowns and multi-unit bridges in zirconia, lithium disilicate (E.max), PFM, and hybrid ceramic — designed for accurate fit, shade match, and long-term durability.',
    features: [
      'Full-contour and layered zirconia options available',
      'Digital shade-matching for consistent aesthetic results',
    ],
    href: '/dental-lab',
  },
  {
    id: 'implant-restorations',
    title: 'Implant Restorations',
    summary:
      'Custom abutments, screw-retained crowns, implant bridges, and full arch prosthetics across all major implant systems — engineered for precise seating and clinical predictability.',
    features: [
      'Compatible with Nobel, Straumann, Zimmer, BioHorizons & more',
      'Ti-base, hybrid, and custom abutment workflows supported',
    ],
    href: '/dental-lab',
  },
  {
    id: 'veneers-inlays',
    title: 'Veneers & Inlays/Onlays',
    summary:
      'Ultra-thin E.max veneers and precision-milled inlays and onlays for conservative, high-aesthetics restorations — minimal prep, maximum result.',
    features: [
      'E.max and zirconia material options for every clinical need',
      'Consistent marginal fit with digital design verification',
    ],
    href: '/dental-lab',
  },
  {
    id: 'full-arch-prosthetics',
    title: 'Full Arch & Prosthetics',
    summary:
      'All-on-4, All-on-6, hybrid dentures, and PEEK frameworks — complete arch solutions milled to exacting tolerances for implant-supported and removable prosthetics.',
    features: [
      'PEEK, titanium, and zirconia framework options',
      'Digital try-in verification before final production',
    ],
    href: '/dental-lab',
  },
]
