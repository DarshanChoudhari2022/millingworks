export interface Material {
  id: string
  name: string
  shortName: string
  description: string
  applications: readonly string[]
}

export const materials: Material[] = [
  {
    id: 'zirconia',
    name: 'Zirconia',
    shortName: 'ZrO₂',
    description:
      'Ultra-strong, biocompatible ceramic ideal for posterior crowns and bridges. Exceptional fracture resistance with natural translucency for lifelike aesthetics.',
    applications: ['Crowns', 'Bridges', 'Implant Abutments', 'Full Arch'],
  },
  {
    id: 'pmma',
    name: 'PMMA',
    shortName: 'PMMA',
    description:
      'Lightweight acrylic resin used for long-term temporaries and implant-supported provisionals. Easy to adjust chairside with excellent patient comfort.',
    applications: ['Provisional Crowns', 'Temporary Bridges', 'Implant Provisionals'],
  },
  {
    id: 'lithium-disilicate',
    name: 'Lithium Disilicate',
    shortName: 'E.max',
    description:
      'Premium glass-ceramic delivering outstanding translucency and strength. The gold standard for anterior restorations where aesthetics are critical.',
    applications: ['Anterior Crowns', 'Veneers', 'Inlays', 'Onlays'],
  },
  {
    id: 'titanium',
    name: 'Titanium',
    shortName: 'Ti',
    description:
      'Medical-grade titanium for implant frameworks and custom abutments. Unmatched biocompatibility and corrosion resistance for long-term implant success.',
    applications: ['Custom Abutments', 'Implant Bars', 'Frameworks'],
  },
  {
    id: 'cocr',
    name: 'Cobalt-Chrome',
    shortName: 'CoCr',
    description:
      'High-strength metal alloy for partial denture frameworks and implant structures. Excellent rigidity and thin-section casting for patient comfort.',
    applications: ['Partial Frameworks', 'Implant Bars', 'Metal Copings'],
  },
  {
    id: 'peek',
    name: 'PEEK',
    shortName: 'PEEK',
    description:
      'Biocompatible high-performance polymer with metal-free flexibility. Shock-absorbing properties reduce stress on implants and natural teeth.',
    applications: ['Frameworks', 'Implant Superstructures', 'Partial Dentures'],
  },
  {
    id: 'hybrid-ceramic',
    name: 'Hybrid Ceramic',
    shortName: 'HC',
    description:
      'Polymer-infiltrated ceramic combining the aesthetics of ceramic with the resilience of composite. Ideal for conservative, minimally-invasive restorations.',
    applications: ['Inlays', 'Onlays', 'Veneers', 'Single Crowns'],
  },
]
