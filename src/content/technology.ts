export type TechCategory = 'Software' | 'Scanner' | 'Process'

export interface TechItem {
  id: string
  name: string
  category: TechCategory
  description: string
}

export const technologies: TechItem[] = [
  {
    id: 'exocad',
    name: 'Exocad',
    category: 'Software',
    description: 'Full-spectrum CAD design platform for crowns, bridges, implant prosthetics and smile design.',
  },
  {
    id: '3shape',
    name: '3Shape',
    category: 'Software',
    description: 'Industry-standard dental CAD software for digital impressions and prosthetic design.',
  },
  {
    id: 'medit',
    name: 'Medit',
    category: 'Scanner',
    description: 'High-accuracy intraoral scanner producing precision STL files for seamless digital workflows.',
  },
  {
    id: 'itero',
    name: 'iTero',
    category: 'Scanner',
    description: 'Align Technology\'s intraoral scanner with direct integration for restorative and orthodontic cases.',
  },
  {
    id: 'sirona',
    name: 'Sirona (CEREC)',
    category: 'Scanner',
    description: 'Dentsply Sirona\'s digital impression and chairside milling system with open STL export.',
  },
  {
    id: 'stl-workflow',
    name: 'STL Workflow',
    category: 'Process',
    description: 'Universal file format accepted from any compatible scanner or CAD system for maximum flexibility.',
  },
  {
    id: 'cad-cam',
    name: 'CAD/CAM',
    category: 'Process',
    description: 'Computer-aided design and manufacturing for precise, repeatable dental restorations.',
  },
  {
    id: '5-axis-milling',
    name: '5-Axis Milling',
    category: 'Process',
    description: 'Advanced multi-axis CNC milling for complex geometries, undercuts and implant components.',
  },
]

export const techCategories: TechCategory[] = ['Software', 'Scanner', 'Process']
