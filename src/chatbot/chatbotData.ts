import { company } from '../content/company'

export type ChatTopicId =
  | 'dental-lab'
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
  'dental-lab': {
    id: 'dental-lab',
    label: 'Dental lab services',
    answer: 'We produce crowns, bridges, veneers, implant restorations, and full arch prosthetics using advanced 5-axis CNC milling. Every case is digitally designed and quality-checked before dispatch.',
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
