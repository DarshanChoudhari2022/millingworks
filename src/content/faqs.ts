export type FaqGroup = 'Services' | 'Case Submission' | 'Process' | 'Delivery' | 'Pricing' | 'Privacy'

export interface FaqItem { group: FaqGroup; question: string; answer: string }

export const faqs: FaqItem[] = [
  { group: 'Services', question: 'What does Milling Works do?', answer: 'Milling Works is a dental laboratory focused on crowns, bridges and implant restorations for dental practices and partner laboratories.' },
  { group: 'Services', question: 'Can you review an implant case before production?', answer: 'Yes. Share the prescription and available case records so the laboratory can review the information and identify questions before work begins.' },
  { group: 'Case Submission', question: 'How do I send a case?', answer: 'Start with the contact form, email or WhatsApp handoff. Tell us which records you have and a team member can confirm the appropriate submission route.' },
  { group: 'Case Submission', question: 'Which records should I include?', answer: 'Requirements depend on the restoration. Share the prescription and the records already available; the laboratory will confirm if anything else is needed for review.' },
  { group: 'Process', question: 'What happens after a case is received?', answer: 'The case information is reviewed first. Questions are resolved before the restoration moves through production, finishing, quality review and dispatch.' },
  { group: 'Delivery', question: 'How long will my case take?', answer: 'Timing depends on the restoration, records and case requirements. The expected schedule is discussed once the laboratory has reviewed the case.' },
  { group: 'Pricing', question: 'How do I request pricing?', answer: 'Share the case type and requirements. Milling Works will review the scope and prepare the appropriate quotation.' },
  { group: 'Privacy', question: 'How should patient information be handled?', answer: 'Only share information needed for the laboratory work through an agreed route. Contact the team before sending sensitive records if you need guidance.' },
]
