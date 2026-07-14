import type { JSX } from 'react'

interface WorkflowItem { number: string; title: string; description: string }

export function ServiceWorkflow({ items }: { items: readonly WorkflowItem[] }): JSX.Element {
  return <ol className="service-workflow">{items.map((item) => (
    <li key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></li>
  ))}</ol>
}
