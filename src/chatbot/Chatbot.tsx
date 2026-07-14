import { ChatCircleDots, EnvelopeSimple, Minus, PaperPlaneTilt, WhatsappLogo, X } from '@phosphor-icons/react'
import { type FormEvent, type JSX, type KeyboardEvent, useEffect, useId, useReducer, useRef, useState } from 'react'

import { company } from '../content/company'
import { services } from '../content/services'
import { createEmailUrl, createWhatsAppUrl } from '../lib/handoffs'
import { chatbotMenu, chatbotTopics } from './chatbotData'
import { chatReducer, initialChatState } from './chatbotMachine'

const stepProgress = {
  'lead-name': 'Step 1 of 4',
  'lead-contact': 'Step 2 of 4',
  'lead-service': 'Step 3 of 4',
  'lead-message': 'Step 4 of 4',
} as const

interface ChatMessage {
  id: number
  sender: 'assistant' | 'user'
  text: string
}

const openingMessage = 'How can we help? Choose a topic, or prepare an enquiry for our team.'

export function Chatbot(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const [hasOpened, setHasOpened] = useState(false)
  const [state, dispatch] = useReducer(chatReducer, initialChatState)
  const [draft, setDraft] = useState('')
  const [liveMessage, setLiveMessage] = useState('')
  const [history, setHistory] = useState<ChatMessage[]>([
    { id: 0, sender: 'assistant', text: openingMessage },
  ])
  const nextMessageId = useRef(1)
  const launcherRef = useRef<HTMLButtonElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const headingId = useId()

  useEffect(() => {
    if (isOpen) headingRef.current?.focus()
  }, [isOpen])

  const announce = (message: string) => {
    setLiveMessage('')
    window.setTimeout(() => setLiveMessage(message), 0)
  }

  const appendHistory = (...messages: Omit<ChatMessage, 'id'>[]) => {
    setHistory((current) => [
      ...current,
      ...messages.map((message) => ({ ...message, id: nextMessageId.current++ })),
    ])
  }

  const open = () => {
    setHasOpened(true)
    setIsOpen(true)
  }

  const dismiss = () => {
    setIsOpen(false)
    launcherRef.current?.focus()
  }

  const reset = () => {
    dispatch({ type: 'reset' })
    setDraft('')
    nextMessageId.current = 1
    setHistory([{ id: 0, sender: 'assistant', text: openingMessage }])
    announce(openingMessage)
  }

  const handleDialogKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      dismiss()
    }
  }

  const selectTopic = (topicId: (typeof chatbotMenu)[number]['id']) => {
    dispatch({ type: 'select-topic', topicId })
    appendHistory(
      { sender: 'user', text: chatbotTopics[topicId].label },
      { sender: 'assistant', text: chatbotTopics[topicId].answer },
    )
    announce(chatbotTopics[topicId].answer)
  }

  const startLead = () => {
    setDraft(state.lead.name)
    dispatch({ type: 'start-lead' })
    appendHistory(
      { sender: 'user', text: 'Talk to a person' },
      { sender: 'assistant', text: 'First, what is your name?' },
    )
    announce('First, what is your name?')
  }

  const submitLeadStep = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!draft.trim()) return

    if (state.step === 'lead-name') {
      dispatch({ type: 'set-name', value: draft.trim() })
      setDraft(state.lead.contact)
      appendHistory(
        { sender: 'user', text: draft.trim() },
        { sender: 'assistant', text: 'What phone number or email address should the team use?' },
      )
      announce('What phone number or email address should the team use?')
    } else if (state.step === 'lead-contact') {
      dispatch({ type: 'set-contact', value: draft.trim() })
      setDraft(state.lead.service)
      appendHistory(
        { sender: 'user', text: draft.trim() },
        { sender: 'assistant', text: 'Which service are you interested in?' },
      )
      announce('Which service are you interested in?')
    } else if (state.step === 'lead-service') {
      dispatch({ type: 'set-service', value: draft })
      setDraft(state.lead.message)
      appendHistory(
        { sender: 'user', text: draft },
        { sender: 'assistant', text: 'How can the team help?' },
      )
      announce('How can the team help?')
    } else if (state.step === 'lead-message') {
      dispatch({ type: 'set-message', value: draft.trim() })
      dispatch({ type: 'complete-lead' })
      appendHistory(
        { sender: 'user', text: draft.trim() },
        { sender: 'assistant', text: 'Your enquiry is ready. Choose WhatsApp or email to send it yourself.' },
      )
      announce('Your enquiry is ready. Choose WhatsApp or email to send it yourself.')
    }
  }

  const handoffLead = state.step === 'handoff' ? { ...state.lead, message: state.lead.message || draft.trim() } : state.lead
  const handoffMessage = [
    `Milling Works enquiry from ${handoffLead.name}`,
    `Contact: ${handoffLead.contact}`,
    `Service: ${handoffLead.service}`,
    `Message: ${handoffLead.message}`,
  ].join('\n')

  return (
    <div className="chatbot">
      <button
        aria-hidden={isOpen}
        aria-label={hasOpened ? 'Resume Milling Works assistant' : 'Open Milling Works assistant'}
        className={`chatbot__launcher${isOpen ? ' chatbot__launcher--hidden' : ''}`}
        onClick={open}
        ref={launcherRef}
        tabIndex={isOpen ? -1 : 0}
        type="button"
      >
        <ChatCircleDots aria-hidden size={28} weight="fill" />
      </button>

      {isOpen && (
        <div
          aria-labelledby={headingId}
          className="chatbot__dialog"
          onKeyDown={handleDialogKeyDown}
          role="dialog"
        >
          <header className="chatbot__header">
            <div>
              <p className="chatbot__eyebrow">Guided help</p>
              <h2 id={headingId} ref={headingRef} tabIndex={-1}>Milling Works assistant</h2>
            </div>
            <div className="chatbot__window-actions">
              <button aria-label="Minimize assistant" onClick={dismiss} type="button"><Minus aria-hidden size={20} /></button>
              <button aria-label="Close assistant" onClick={dismiss} type="button"><X aria-hidden size={20} /></button>
            </div>
          </header>

          <div className="chatbot__body">
            <div aria-label="Conversation history" className="chatbot__history">
              {history.map((message) => (
                <div className={`chatbot__message chatbot__message--${message.sender}`} key={message.id}>
                  <p>{message.text}</p>
                </div>
              ))}
            </div>

            {state.step === 'menu' && (
              <div aria-label="Assistant topics" className="chatbot__replies" role="group">
                  {chatbotMenu.map((topic) => (
                    <button key={topic.id} onClick={() => selectTopic(topic.id)} type="button">{topic.label}</button>
                  ))}
                  <button className="chatbot__primary-reply" onClick={startLead} type="button">Talk to a person</button>
              </div>
            )}

            {state.step === 'answer' && state.topicId && (
              <div className="chatbot__replies">
                  <button onClick={() => {
                    dispatch({ type: 'back' })
                    appendHistory(
                      { sender: 'user', text: 'Back to menu' },
                      { sender: 'assistant', text: 'Choose another topic or talk to a person.' },
                    )
                    announce('Choose another topic or talk to a person.')
                  }} type="button">Back to menu</button>
                  <button className="chatbot__primary-reply" onClick={startLead} type="button">Talk to a person</button>
              </div>
            )}

            {state.step.startsWith('lead-') && (
              <form className="chatbot__lead-form" onSubmit={submitLeadStep}>
                <p aria-live="off" className="chatbot__progress">{stepProgress[state.step as keyof typeof stepProgress]}</p>
                {state.step === 'lead-name' && <LeadInput autoFocus label="Your name" onChange={setDraft} value={draft} />}
                {state.step === 'lead-contact' && <LeadInput autoFocus label="Phone or email" onChange={setDraft} value={draft} />}
                {state.step === 'lead-service' && (
                  <label>Service
                    <select autoFocus onChange={(event) => setDraft(event.target.value)} required value={draft}>
                      <option value="">Choose a service</option>
                      {services.map((service) => <option key={service.id} value={service.title}>{service.title}</option>)}
                    </select>
                  </label>
                )}
                {state.step === 'lead-message' && (
                  <label>How can we help?
                    <textarea autoFocus onChange={(event) => setDraft(event.target.value)} required rows={4} value={draft} />
                  </label>
                )}
                <div className="chatbot__form-actions">
                  <button onClick={() => {
                    dispatch({ type: 'back' })
                    setDraft('')
                    appendHistory(
                      { sender: 'user', text: 'Back to menu' },
                      { sender: 'assistant', text: 'Choose a topic or talk to a person.' },
                    )
                    announce('Choose a topic or talk to a person.')
                  }} type="button">Back to menu</button>
                  <button className="chatbot__submit" type="submit">{state.step === 'lead-message' ? 'Prepare handoff' : 'Continue'}<PaperPlaneTilt aria-hidden size={18} /></button>
                </div>
              </form>
            )}

            {state.step === 'handoff' && (
              <div className="chatbot__handoff">
                <div className="chatbot__message">
                  <h3>Your enquiry is ready</h3>
                  <p>Nothing has been sent. Choose an option below to review and send it in WhatsApp or your email app.</p>
                </div>
                <a href={createWhatsAppUrl(handoffMessage)} rel="noreferrer" target="_blank"><WhatsappLogo aria-hidden size={20} weight="fill" />Continue on WhatsApp</a>
                <a href={createEmailUrl(`Enquiry from ${handoffLead.name}`, handoffMessage)}><EnvelopeSimple aria-hidden size={20} />Open email</a>
                <button onClick={reset} type="button">Start over</button>
              </div>
            )}
          </div>

          <div aria-atomic="true" aria-live="polite" className="chatbot__live-region">{liveMessage}</div>
        </div>
      )}
    </div>
  )
}

interface LeadInputProps {
  autoFocus?: boolean
  label: string
  onChange: (value: string) => void
  value: string
}

function LeadInput({ autoFocus, label, onChange, value }: LeadInputProps): JSX.Element {
  return (
    <label>{label}
      <input autoFocus={autoFocus} onChange={(event) => onChange(event.target.value)} required type="text" value={value} />
    </label>
  )
}
