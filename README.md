# Milling Works website

This repository contains the responsive Milling Works marketing website. It presents the company, dental laboratory, record-auditing, design-support, and practice-outsourcing services, with guided enquiry handoffs for prospective clients.

## Confirmed contact details

- Contacts: Akash Gaurav and Arjun Rana
- Phone / WhatsApp: +91 83909 98058
- Email: sales@millingworks.com
- Address: Building B, Office 317, Surawalla Mark Plazzo, S. No. 27, Mulshi, Hinjawadi, Pune 411057, India

## Local development

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Run the unit and component tests:

```bash
npm run test:run
```

Install Chromium once, then run the browser tests:

```bash
npx playwright install chromium
npm run test:e2e
```

Create a production build:

```bash
npm run build
```

## Enquiry handling

The contact form and guided assistant prepare reviewable WhatsApp and email links. The visitor chooses an app and sends the enquiry themselves. This project includes no backend, does not store form submissions, and never claims that an enquiry was sent or delivered.
