export const trustSignals = [
  { value: '15+', label: 'Years of experience' },
  { value: '25,000+', label: 'Cases delivered' },
  { value: '98%', label: 'Accuracy rate' },
  { value: '99%', label: 'On-time delivery' },
  { value: 'UK & Europe', label: 'Coverage' },
  { value: 'ISO', label: 'Certified laboratory' },
] as const

export const whyMillingWorks = [
  { title: 'Digital-first workflow', description: 'A structured route from digital case intake and technical review through production and handoff.' },
  { title: 'UK-focused communication', description: 'Clear, responsive communication shaped around the expectations of UK and European laboratory partners.' },
  { title: 'Experienced technicians', description: 'Skilled dental technicians bring production knowledge and careful judgement to every reviewed case.' },
  { title: 'Strict quality control', description: 'Cases follow defined production checks before they are prepared for dispatch.' },
  { title: 'Fast, agreed turnaround', description: 'Timing is reviewed with the case requirements and confirmed before production begins.' },
  { title: 'Implant expertise', description: 'Focused production support for individual, multi-unit and more complex implant restoration requirements.' },
  { title: 'Secure data handling', description: 'Case information and auditing records are handled through agreed, compliance-aware workflows.' },
  { title: 'Clear production support', description: 'Questions are raised early and the route forward stays visible to your team.' },
] as const

interface LabCapability {
  number: string
  title: string
  summary: string
  items: readonly string[]
  href?: string
}

export const labCapabilities: readonly LabCapability[] = [
  { number: '01', title: 'Custom restorations', summary: 'Crowns, bridges, inlays and onlays produced around the supplied prescription and records.', items: ['Crowns and bridges', 'Inlays and onlays'], href: '/crowns-bridges' },
  { number: '02', title: 'Implant solutions', summary: 'Production support for individual and multi-unit implant restorations, reviewed case by case.', items: ['Implant-supported restorations', 'Multi-unit restorative work'], href: '/dental-implants' },
  { number: '03', title: 'Aesthetic restorations', summary: 'Restorative production where form, surface character and the supplied shade information matter.', items: ['Veneers', 'Aesthetic restorative work'] },
  { number: '04', title: 'Orthodontic appliances', summary: 'Laboratory production support for retained and functional appliance requirements.', items: ['Retainers', 'Functional appliances'] },
  { number: '05', title: 'Digital dentistry', summary: 'Digital case intake and CAD/CAM-led workflows built for efficient collaboration between teams.', items: ['Digital case intake', 'CAD/CAM-led production'] },
  { number: '06', title: 'Removable prosthetics', summary: 'Case-led support for full and partial removable prosthetic requirements.', items: ['Full dentures', 'Partial dentures'] },
  { number: '07', title: 'Surgical and oral appliances', summary: 'Case-specific production support for guides and oral appliance requirements.', items: ['Surgical guides', 'Oral appliances'] },
  { number: '08', title: 'Quality assurance and support', summary: 'Production checks, technical questions and direct communication remain part of the handoff.', items: ['Quality control', 'Technical case support'] },
] as const

export const productionWorkflow = [
  { number: '01', title: 'Share the requirement', description: 'Send the prescription, available records and production priorities.' },
  { number: '02', title: 'Technical review', description: 'Our team reviews the supplied information and raises necessary questions.' },
  { number: '03', title: 'Confirm scope and timing', description: 'The production route and expected timing are agreed before work begins.' },
  { number: '04', title: 'Produce and check', description: 'The case moves through the appropriate production and quality-control stages.' },
  { number: '05', title: 'Dispatch and handoff', description: 'Completed work and relevant communication return to your team.' },
] as const

export const auditBenefits = [
  { title: 'More consistent documentation', description: 'Structured review highlights where records can be made clearer and more complete.' },
  { title: 'Reduced record gaps', description: 'Missing or inconsistent information is surfaced for review before it creates avoidable operational risk.' },
  { title: 'Stronger compliance visibility', description: 'Findings help teams see how their documentation aligns with the agreed audit framework.' },
  { title: 'Better internal communication', description: 'Clear records support more coordinated handoffs between clinicians and practice teams.' },
  { title: 'Training-needs identification', description: 'Repeated themes can reveal where guidance or team training would be useful.' },
  { title: 'Trend identification', description: 'Structured findings make recurring documentation patterns easier to recognise.' },
  { title: 'Operational efficiency', description: 'A consistent audit process can reduce time lost to unclear or incomplete records.' },
] as const

export const auditWorkflow = [
  { number: '01', title: 'Define the scope', description: 'Agree the records, review objectives and reporting requirements.' },
  { number: '02', title: 'Agree secure transfer', description: 'Confirm the approved route for sharing the required information.' },
  { number: '03', title: 'Review the records', description: 'The supplied records and documentation are assessed against the agreed framework.' },
  { number: '04', title: 'Report findings', description: 'Receive structured findings, recurring themes and areas requiring attention.' },
  { number: '05', title: 'Discuss follow-up', description: 'Review priorities and agree any next-stage support with the team.' },
] as const

export const expansionNavigation = [
  ['Home', '/'],
  ['About', '/about'],
  ['Full-Service Dental Lab', '/full-service-dental-lab'],
  ['Dental Record Auditing', '/record-auditing'],
  ['FAQs', '/faqs'],
] as const
