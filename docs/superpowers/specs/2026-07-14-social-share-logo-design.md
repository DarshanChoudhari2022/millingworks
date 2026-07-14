# Social Share Logo Metadata Design

## Goal

Ensure WhatsApp and other link-preview clients can display the existing Milling Works branded preview image when a deployed page is shared.

## Approved design

- Keep `public/og-image.png` as the social preview asset because it already contains the approved Milling Works tooth mark, wordmark, and dental-laboratory positioning.
- Use the live deployment origin `https://millingworks-lovat.vercel.app` for canonical and Open Graph URLs.
- Add `og:image:secure_url` and `og:image:type` so preview clients receive an explicit HTTPS PNG declaration.
- Add a version query to the image URL to bypass stale WhatsApp preview caches after deployment.
- Apply the same deployment origin in route-level metadata so service pages do not publish conflicting URLs.

## Scope

Only `index.html`, route metadata configuration, and metadata verification are in scope. No visible page design or content changes are required.

