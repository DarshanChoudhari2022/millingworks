export type FaqGroup = 'General'

export interface FaqItem {
  group: FaqGroup
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    group: 'General',
    question: 'What does NVistas do?',
    answer:
      'NVistas provides specialist support services for dental teams, including dental record auditing, clinical governance support, compliance-focused training, and advisory support designed to improve documentation quality and patient safety processes.',
  },
  {
    group: 'General',
    question: 'Who can use NVistas services?',
    answer:
      'Our services are designed for dental practices, dental groups, and professionals looking to strengthen record quality, compliance readiness, and operational governance in day-to-day workflows.',
  },
  {
    group: 'General',
    question: 'What is included in a dental record audit?',
    answer:
      'A typical audit includes a structured review of selected dental records against agreed criteria, identification of documentation gaps, trend analysis, and a practical report with recommendations for improvement.',
  },
  {
    group: 'General',
    question: 'How often should dental records be audited?',
    answer:
      'Audit frequency depends on your clinic size, risk profile, and regulatory expectations. Many practices choose periodic audits to maintain consistency and identify issues early, but the schedule should fit your governance plan.',
  },
  {
    group: 'General',
    question: 'Do you provide compliance support for CQC and HIQA standards?',
    answer:
      'Yes. NVistas supports dental organisations with documentation and governance reviews aligned to relevant standards, including CQC and HIQA-focused expectations where applicable.',
  },
  {
    group: 'General',
    question: 'Can NVistas help with staff training needs?',
    answer:
      'Yes. Audit findings can highlight recurring documentation issues, and we provide guidance that helps teams target training where it is likely to have the greatest operational impact.',
  },
  {
    group: 'General',
    question: 'How do you keep dental data secure?',
    answer:
      'We use agreed secure transfer and handling routes, limit access based on role, and follow documented information-governance processes to protect sensitive data throughout the review workflow.',
  },
  {
    group: 'General',
    question: 'Do your services replace legal or clinical advice?',
    answer:
      'No. Our services provide operational and documentation-focused support. They do not replace legal advice, regulatory interpretation, diagnosis, or independent clinical judgement.',
  },
  {
    group: 'General',
    question: 'Can small practices request support, or is it only for large groups?',
    answer:
      'Both can engage. We work with independent practices as well as larger groups, and the scope can be tailored to your size, priorities, and current governance maturity.',
  },
  {
    group: 'General',
    question: 'How do we get started with NVistas?',
    answer:
      'You can start by contacting the team with your current requirements. We will discuss your objectives, agree scope, and define a practical delivery plan for your audit or governance support needs.',
  },
]