import { CaretDown } from '@phosphor-icons/react'
import { useId, useState, type JSX } from 'react'

interface AccordionProps {
  items: readonly { question: string; answer: string }[]
}

export function Accordion({ items }: AccordionProps): JSX.Element {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `${baseId}-panel-${index}`
        const buttonId = `${baseId}-button-${index}`

        return (
          <article className="accordion__item" key={item.question}>
            <h2>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <CaretDown aria-hidden size={22} weight="bold" />
              </button>
            </h2>
            <div
              id={panelId}
              className="accordion__panel"
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
            >
              <p>{item.answer}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}
