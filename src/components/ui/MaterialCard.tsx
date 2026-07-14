import type { JSX } from 'react'

import type { Material } from '../../content/materials'

export function MaterialCard({ material }: { material: Material }): JSX.Element {
  return (
    <article className="material-card">
      <div className="material-card__header">
        <span className="material-card__badge">{material.shortName}</span>
        <h3 className="material-card__name">{material.name}</h3>
      </div>
      <p className="material-card__desc">{material.description}</p>
      <div className="material-card__apps">
        {material.applications.map((app) => (
          <span key={app} className="material-card__tag">
            {app}
          </span>
        ))}
      </div>
    </article>
  )
}
