# Development Workflow

## Working Mode

Codex and AI agents should work stage by stage. Each task should preserve the project foundation and move the demo toward a public QR-ready experience.

Before changing files:

- inspect the current folder structure;
- read relevant existing files;
- identify the current stage;
- keep the requested scope narrow;
- avoid rewrites unless explicitly requested.

## Implementation Rules

- Prefer Next.js App Router patterns.
- Use TypeScript for domain types and mock data.
- Use Tailwind CSS for layout and visual styling.
- Use shadcn/ui only if it speeds up implementation.
- Keep state management simple.
- Keep mock data deterministic.
- Do not introduce production services unless requested.
- Keep the UI responsive from the beginning.

## Verification

When the project has scripts configured, run:

```bash
npm run lint
npm run build
```

When UI exists, also verify:

- page loads in browser;
- no critical console errors;
- desktop layout is readable;
- mobile layout is usable;
- key routes render.

If a command fails, document the exact reason and whether the issue was fixed.

## Protecting Previous Work

- Do not remove existing files without a clear reason.
- Do not revert user changes.
- Do not change architecture sharply without explaining the reason.
- Do not add dependencies for convenience when simple local code is enough.
- When editing shared components, check the pages that use them.

## Report Format After Each Task

Each handoff should include:

- created files;
- changed files;
- checks run;
- errors encountered;
- fixes applied;
- what is ready now;
- recommended next step.

The report should be concise and practical.
