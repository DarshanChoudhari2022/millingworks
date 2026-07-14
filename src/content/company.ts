export interface CompanyDetails {
  name: string
  contacts: readonly string[]
  phoneDisplay: string
  phoneDigits: string
  email: string
  address: string
}

export const company = {
  name: 'Milling Works',
  contacts: ['Akash Gaurav', 'Arjun Rana'],
  phoneDisplay: '+91 83909 98088',
  phoneDigits: '918390998088',
  email: 'sales@millingworks.com',
  address:
    'Building B, Office 317, Suratwalla Mark Plazzo, S. No. 27, Mulshi, Hinjawadi, Pune 411057, India',
} as const satisfies CompanyDetails
