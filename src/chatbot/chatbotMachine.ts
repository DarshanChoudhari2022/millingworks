import type { ChatTopicId } from './chatbotData'

export type ChatStep =
  | 'menu'
  | 'answer'
  | 'lead-name'
  | 'lead-contact'
  | 'lead-service'
  | 'lead-message'
  | 'handoff'

export interface ChatLead {
  name: string
  contact: string
  service: string
  message: string
}

export interface ChatState {
  step: ChatStep
  topicId: ChatTopicId | null
  lead: ChatLead
}

export type ChatAction =
  | { type: 'select-topic'; topicId: ChatTopicId }
  | { type: 'back' }
  | { type: 'start-lead' }
  | { type: 'set-name'; value: string }
  | { type: 'set-contact'; value: string }
  | { type: 'set-service'; value: string }
  | { type: 'set-message'; value: string }
  | { type: 'complete-lead' }
  | { type: 'reset' }

export const initialChatState: ChatState = {
  step: 'menu',
  topicId: null,
  lead: { name: '', contact: '', service: '', message: '' },
}

export function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case 'select-topic':
      return { ...state, step: 'answer', topicId: action.topicId }
    case 'back':
      return { ...state, step: 'menu', topicId: null }
    case 'start-lead':
      return { ...state, step: 'lead-name' }
    case 'set-name':
      return { ...state, step: 'lead-contact', lead: { ...state.lead, name: action.value } }
    case 'set-contact':
      return { ...state, step: 'lead-service', lead: { ...state.lead, contact: action.value } }
    case 'set-service':
      return { ...state, step: 'lead-message', lead: { ...state.lead, service: action.value } }
    case 'set-message':
      return { ...state, lead: { ...state.lead, message: action.value } }
    case 'complete-lead':
      return { ...state, step: 'handoff' }
    case 'reset':
      return initialChatState
  }
}
