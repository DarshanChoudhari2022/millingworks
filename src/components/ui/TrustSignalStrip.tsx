import type { JSX } from 'react'
import { trustSignals } from '../../content/expansion'

export function TrustSignalStrip(): JSX.Element {
  return <dl className="trust-signal-strip">{trustSignals.map((signal) => (
    <div key={signal.label}><dt>{signal.value}</dt><dd>{signal.label}</dd></div>
  ))}</dl>
}
