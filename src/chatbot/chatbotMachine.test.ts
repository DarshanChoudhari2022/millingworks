import { describe, expect, it } from 'vitest'

import { chatbotTopics } from './chatbotData'
import { chatReducer, initialChatState } from './chatbotMachine'

describe('chatReducer', () => {
  it('starts at the guided menu', () => {
    expect(initialChatState).toMatchObject({ step: 'menu', topicId: null })
  })

  it('selects the dental lab prepared answer and its recovery actions', () => {
    const state = chatReducer(initialChatState, { type: 'select-topic', topicId: 'dental-lab' })

    expect(state).toMatchObject({ step: 'answer', topicId: 'dental-lab' })
    expect(chatbotTopics['dental-lab'].answer).toMatch(/crowns.*bridges.*veneers/i)
    expect(chatbotTopics['dental-lab'].actions).toEqual(expect.arrayContaining(['menu', 'human']))
  })

  it('returns to the menu', () => {
    const answer = chatReducer(initialChatState, { type: 'select-topic', topicId: 'dental-lab' })

    expect(chatReducer(answer, { type: 'back' })).toMatchObject({ step: 'menu', topicId: null })
  })

  it('captures each lead value without dropping earlier values', () => {
    let state = chatReducer(initialChatState, { type: 'start-lead' })
    expect(state.step).toBe('lead-name')

    state = chatReducer(state, { type: 'set-name', value: 'Priya Shah' })
    state = chatReducer(state, { type: 'set-contact', value: 'priya@example.com' })
    state = chatReducer(state, { type: 'set-service', value: 'Full-Service Dental Lab' })
    state = chatReducer(state, { type: 'set-message', value: 'Please review a crown case.' })

    expect(state.lead).toEqual({
      name: 'Priya Shah',
      contact: 'priya@example.com',
      service: 'Full-Service Dental Lab',
      message: 'Please review a crown case.',
    })
    expect(state.step).toBe('lead-message')
  })

  it('completes lead capture at the explicit handoff step', () => {
    const state = chatReducer(
      { ...initialChatState, step: 'lead-message' },
      { type: 'complete-lead' },
    )

    expect(state.step).toBe('handoff')
  })

  it('resets the conversation and clears personal data', () => {
    const populated = {
      ...initialChatState,
      step: 'handoff' as const,
      topicId: 'dental-lab' as const,
      lead: {
        name: 'Priya Shah',
        contact: 'priya@example.com',
        service: 'Full-Service Dental Lab',
        message: 'Please call me.',
      },
    }

    expect(chatReducer(populated, { type: 'reset' })).toEqual(initialChatState)
  })
})
