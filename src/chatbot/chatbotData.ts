import { company } from '../content/company'

export type ChatTopicId =
  | 'crowns-bridges'
  | 'dental-implants'
  | 'digital-case-submission'
  | 'turnaround-delivery'
  | 'pricing-quotations'
  | 'direct-contact'

export interface ChatTopic {
  id: ChatTopicId
  label: string
  answer: string
  actions: readonly ('menu' | 'human')[]
}

export const chatbotTopics: Record<ChatTopicId, ChatTopic> = {
  'crowns-bridges': {
    id: 'crowns-bridges',
    label: 'Crowns and bridges',
    answer: 'Milling Works supports crown and bridge cases through record review, laboratory production, finishing and a final check against the agreed case information.',
    actions: ['menu', 'human'],
  },
  'dental-implants': {
    id: 'dental-implants',
    label: 'Dental implants',
    answer: 'For implant cases, share the prescription and available records. The laboratory can review the case information and clarify the proposed workflow before production begins.',
    actions: ['menu', 'human'],
  },
  'digital-case-submission': {
    id: 'digital-case-submission',
    label: 'Digital case submission',
    answer: 'Tell us which files and case details you have. A team member can confirm the appropriate submission route and any information needed for review.',
    actions: ['menu', 'human'],
  },
  'turnaround-delivery': {
    id: 'turnaround-delivery',
    label: 'Turnaround and delivery',
    answer: 'Timing and delivery options depend on the case, materials, and destination. Share the case details and requested date so our team can discuss what is feasible.',
    actions: ['menu', 'human'],
  },
  'pricing-quotations': {
    id: 'pricing-quotations',
    label: 'Pricing and quotations',
    answer: 'Pricing depends on the case type and requirements. Share the case details and preferred contact method to prepare an enquiry for our team.',
    actions: ['menu', 'human'],
  },
  'direct-contact': {
    id: 'direct-contact',
    label: 'Direct contact details',
    answer: `You can prepare an enquiry here, or contact ${company.name} at ${company.phoneDisplay} or ${company.email}. Nothing is sent until you choose WhatsApp or email.`,
    actions: ['menu', 'human'],
  },
}

export const chatbotMenu = Object.values(chatbotTopics)
