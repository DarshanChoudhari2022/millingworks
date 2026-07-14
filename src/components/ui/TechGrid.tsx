import { Desktop, DeviceMobile, Gear } from '@phosphor-icons/react'
import type { ComponentType, JSX } from 'react'

import { technologies, techCategories, type TechCategory } from '../../content/technology'

const categoryIcons: Record<TechCategory, ComponentType<{ size?: number; 'aria-hidden'?: boolean }>> = {
  Software: Desktop,
  Scanner: DeviceMobile,
  Process: Gear,
}

export function TechGrid(): JSX.Element {
  return (
    <div className="tech-grid">
      {techCategories.map((category) => {
        const items = technologies.filter((t) => t.category === category)
        const Icon = categoryIcons[category]
        return (
          <div key={category} className="tech-grid__group">
            <div className="tech-grid__category">
              <Icon size={16} aria-hidden />
              <span>{category}</span>
            </div>
            <div className="tech-grid__items">
              {items.map((item) => (
                <div key={item.id} className="tech-item">
                  <h4 className="tech-item__name">{item.name}</h4>
                  <p className="tech-item__desc">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
