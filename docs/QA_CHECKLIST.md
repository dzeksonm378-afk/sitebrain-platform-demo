# QA Checklist

Use this checklist before a live presentation or QR-code demo.

## Build And Code Checks

- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] No TypeScript errors.
- [ ] No missing routes.
- [ ] No broken imports.
- [ ] No unnecessary production dependencies were added.

## Browser Checks

- [ ] Main page opens.
- [ ] All planned routes open:
  - [ ] `/`
  - [ ] `/cameras`
  - [ ] `/safety`
  - [ ] `/logistics`
  - [ ] `/progress`
  - [ ] `/events`
  - [ ] `/architecture`
  - [ ] `/settings`
- [ ] No critical console errors.
- [ ] Navigation works.
- [ ] Event statuses are visible.
- [ ] Demo mode is visible.
- [ ] Architecture page explains the product clearly.

## Presentation Checks

- [ ] Interface is readable on a laptop.
- [ ] Interface is readable on a projector.
- [ ] Interface is usable on a phone.
- [ ] Critical statuses are easy to understand.
- [ ] The Camera -> AI Worker -> Event -> Dashboard story is obvious.
- [ ] QR link opens on a phone.
- [ ] Public Vercel URL works without login.

## Content Checks

- [ ] No real personal data.
- [ ] No face recognition claims.
- [ ] Mock data looks realistic.
- [ ] Safety, logistics, and progress scenarios are represented.
- [ ] The demo does not imply unavailable production integrations.
