export interface ServiceMetadata {
  title: string
  description: string
  canonicalPath: string
  keywords: string
  serviceType: string
}

export const fullServiceMetadata: ServiceMetadata = {
  title: 'Full-Service Dental Lab for UK & Europe | Milling Works',
  description: 'Milling Works is an ISO-certified full-service dental laboratory supporting UK and European partners with digital workflows, restorations, implants and strict quality control.',
  canonicalPath: '/full-service-dental-lab',
  keywords: 'full-service dental lab, dental laboratory services UK, dental lab partner Europe, digital dental laboratory, crown and bridge laboratory, implant restoration laboratory, dental lab quality control, dental laboratory outsourcing',
  serviceType: 'Full-service dental laboratory production',
}

export const auditingMetadata: ServiceMetadata = {
  title: 'Dental Record Auditing & Compliance Support | Milling Works',
  description: 'Structured dental record and X-ray auditing support with GDPR, HIQA and CQC-compliant workflows for dental businesses in the UK and Europe.',
  canonicalPath: '/record-auditing',
  keywords: 'dental record auditing, dental records audit UK, dental compliance audit, dental X-ray record review, GDPR dental records, CQC dental audit support, HIQA dental record auditing, outsourced dental record audit',
  serviceType: 'Dental record auditing',
}
