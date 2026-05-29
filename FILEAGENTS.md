# SiteBrain File Guide For AI Agents

This file explains the intended project structure and ownership rules for future Codex/AI-agent work.

## Current Foundation Files

- `AGENTS.md` - primary instructions for all AI agents.
- `FILEAGENTS.md` - file-level project map and editing rules.
- `README.md` - human-readable project overview.
- `docs/` - planning and operating documents for the demo.

## Planned Application Structure

When Stage 1 starts, prefer a standard Next.js App Router structure:

```text
app/
  layout.tsx
  page.tsx
  cameras/page.tsx
  safety/page.tsx
  logistics/page.tsx
  progress/page.tsx
  events/page.tsx
  architecture/page.tsx
  settings/page.tsx
components/
  layout/
  dashboard/
  cameras/
  events/
  demo/
lib/
  mock-data/
  utils/
types/
  sitebrain.ts
```

Adjust this only when the actual generated framework structure requires it.

## Editing Rules

- Read existing files before editing them.
- Keep changes scoped to the requested stage.
- Do not remove documentation, components, routes, or mock data unless the user explicitly asks.
- Prefer updating existing utilities and components over creating duplicate concepts.
- Keep mock data deterministic and presentation-friendly.
- Do not introduce real personal data, face recognition, production auth, or real AI service calls.
- Do not move files only for tidiness during a feature task.

## Documentation Ownership

- `docs/PROJECT_BRIEF.md` owns the product explanation.
- `docs/DEMO_SCOPE.md` owns demo boundaries.
- `docs/DEVELOPMENT_WORKFLOW.md` owns agent workflow and verification.
- `docs/UI_PRODUCT_REQUIREMENTS.md` owns interface expectations.
- `docs/MOCK_DATA_PLAN.md` owns future demo data shape.
- `docs/ROUTES_PLAN.md` owns route-level product intent.
- `docs/QA_CHECKLIST.md` owns pre-demo checks.
- `docs/DEPLOYMENT_PLAN.md` owns QR/Vercel release steps.

If implementation changes contradict these docs, update the relevant doc in the same task.

## Future Code Ownership Guidance

- `types/` should contain shared TypeScript domain types.
- `lib/mock-data/` should contain mock cameras, events, zones, reports, and demo helper functions.
- `components/layout/` should contain shell, sidebar, topbar, navigation, and responsive layout pieces.
- `components/dashboard/` should contain dashboard-specific cards and summaries.
- `components/events/` should contain event list, event status, severity, and action UI.
- `components/demo/` should contain demo-mode controls and simulation helpers.

Prefer small, named components with clear props. Keep visual primitives consistent.

## Verification Notes

When a runnable app exists:

- run `npm run lint` if configured;
- run `npm run build` before handoff when practical;
- visually check the app in browser after UI changes;
- smoke-test the main routes before demo deployment.
