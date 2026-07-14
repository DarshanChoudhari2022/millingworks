const markUrl = new URL('../assets/milling-works-mark.png', import.meta.url).href

export interface MillingWorksLogoProps {
  compact?: boolean
  decorative?: boolean
  inverse?: boolean
}

export function MillingWorksLogo({
  compact = false,
  decorative = false,
  inverse = false,
}: MillingWorksLogoProps) {
  const className = [
    'brand-logo',
    compact && 'brand-logo--compact',
    inverse && 'brand-logo--inverse',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : 'Milling Works home'}
      className={className}
      data-inverse={inverse ? 'true' : undefined}
      role={decorative ? undefined : 'img'}
    >
      <img
        alt=""
        className="brand-logo__mark"
        src={markUrl}
        title={decorative ? undefined : 'Milling Works MW tooth mark'}
      />
      {!compact && <span className="brand-logo__wordmark">Milling Works</span>}
    </span>
  )
}
