# Social Share Logo Metadata Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the existing Milling Works logo preview load reliably when deployed links are shared.

**Architecture:** Keep the current static Open Graph image and correct the absolute deployment URLs in the HTML and route metadata. Add explicit secure-image metadata and verify the built output contains the live-domain image URL.

**Tech Stack:** Vite, React, TypeScript, static Open Graph metadata

## Global Constraints

- Reuse `public/og-image.png`.
- Use `https://millingworks-lovat.vercel.app` as the deployed origin.
- Do not change visible page UI.

---

### Task 1: Correct social-preview metadata

**Files:**
- Modify: `index.html`
- Modify: `src/components/seo/RouteMetadata.tsx`

**Interfaces:**
- Consumes: static `public/og-image.png`
- Produces: absolute canonical and Open Graph URLs for the live deployment

- [ ] **Step 1: Update the static metadata**

Change canonical, Open Graph, Twitter image, and URL values to the live deployment origin. Add `og:image:secure_url` and `og:image:type`.

- [ ] **Step 2: Update route metadata origin**

Set `SITE_URL` in `RouteMetadata.tsx` to `https://millingworks-lovat.vercel.app`.

- [ ] **Step 3: Verify the production output**

Run: `npm run build`

Expected: build succeeds and `dist/index.html` contains `https://millingworks-lovat.vercel.app/og-image.png?v=2`.

- [ ] **Step 4: Commit and push**

Run:

```bash
git add index.html src/components/seo/RouteMetadata.tsx docs/superpowers
git commit -m "fix: show logo in shared link previews"
git push
```

