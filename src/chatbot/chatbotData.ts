import { company } from '../content/company'
import { services } from '../content/services'

export type ChatTopicId =
  | 'dental-lab'
  | 'record-auditing'
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

const serviceById = new Map(services.map((service) => [service.id, service]))

export const chatbotTopics: Record<ChatTopicId, ChatTopic> = {
  'dental-lab': {
    id: 'dental-lab',
    label: 'Dental lab services',
    answer: serviceById.get('dental-lab')?.summary ?? 'We provide digital and conventional dental laboratory support.',
    actions: ['menu', 'human'],
  },
  'record-auditing': {
    id: 'record-auditing',
    label: 'Record auditing',
    answer: serviceById.get('record-auditing')?.summary ?? 'We provide structured reviews of dental records and X-rays.',
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
    answer: 'Timing and delivery options depend on the case, materials, review needs, and destination. Share the case details and requested date so our team can discuss what is feasible.',
    actions: ['menu', 'human'],
  },
  'pricing-quotations': {
    id: 'pricing-quotations',
    label: 'Pricing and quotations',
    answer: 'Pricing depends on the service and case requirements. Share the service, case details, and preferred contact method to prepare an enquiry for our team.',
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
