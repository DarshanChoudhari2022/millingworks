export interface TrustStat {
  id: string
  value: number
  suffix: string
  label: string
}

export const trustStats: TrustStat[] = [
  {
    id: 'experience',
    value: 15,
    suffix: '+',
    label: 'Years Experience',
  },
  {
    id: 'cases',
    value: 25000,
    suffix: '+',
    label: 'Cases Delivered',
  },
  {
    id: 'accuracy',
    value: 98,
    suffix: '%',
    label: 'Case Accuracy',
  },
  {
    id: 'on-time',
    value: 99,
    suffix: '%',
    label: 'On-Time Delivery',
  },
  {
    id: 'coverage',
    value: 12,
    suffix: '+',
    label: 'Countries Served',
  },
]
