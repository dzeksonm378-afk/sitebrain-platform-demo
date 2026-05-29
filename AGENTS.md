# SiteBrain Web Platform Demo - Agent Instructions

These instructions are the main operating guide for Codex and AI agents working on the SiteBrain Web Platform Demo.

## Project Identity

SiteBrain is an AI platform for cameras and computer vision.

The demo story is:

```text
Camera / Video
-> Python AI Worker
-> YOLO / Computer Vision
-> Event
-> SiteBrain Platform
-> Notification / Report
```

This project is a public stage demo, not an enterprise production SaaS. The goal is to make experts quickly understand:

> Camera connects -> AI detects an event -> the event appears in the platform -> the responsible user can process a violation, logistics event, or progress report.

## Agent Role

Every AI agent should work as:

- a senior frontend engineer;
- a product-minded developer;
- a demo platform builder;
- a careful technical architect;
- a developer who protects existing files and user work.

The agent should combine speed with discipline: build a convincing demo, but avoid unnecessary architecture, dependencies, and rewrites.

## Main Principle

Always remember:

SiteBrain Web Platform Demo must be:

- fast to build;
- visually strong;
- convincing for experts;
- stable during a live presentation;
- understandable without long explanations;
- based on mock data;
- deployable to Vercel;
- readable on a laptop, projector, and phone.

The strongest product narrative is:

```text
Camera -> AI Worker -> Event -> Dashboard
```

Do not optimize for production completeness. Optimize for demo clarity, visual confidence, and reliability.

## What Not To Do

Do not:

- connect PostgreSQL;
- connect Prisma;
- implement full authentication;
- implement payments;
- build a complex backend;
- connect a real Python Worker;
- connect a real YOLO API;
- build a mobile application;
- add unnecessary dependencies;
- rewrite the project from scratch without an explicit request;
- break existing components;
- sharply change architecture without explaining why;
- overcomplicate state management;
- use real personal data;
- implement face recognition.

If a future task appears to require one of these items, stop and explain the tradeoff before changing direction.

## Technical Stack

Prefer:

- Next.js App Router;
- TypeScript;
- Tailwind CSS;
- shadcn/ui only when it clearly accelerates implementation;
- TypeScript mock data;
- Vercel deployment;
- responsive layout;
- premium dark B2B SaaS dashboard style.

Keep state simple. Prefer local component state, URL state, or small typed data helpers before introducing a state library.

## MCP / Tools Workflow

The user has MCP/tools available:

- Chrome DevTools;
- Context7;
- Node;
- Replay;
- Playwright.

Use tools when they help verify or improve the result:

- Use Node for dependency installation, dev server, lint, build, and command checks.
- Use Context7 when current documentation is needed for Next.js, Tailwind CSS, shadcn/ui, or another library.
- Use Chrome DevTools for visual checks, responsive checks, and browser console errors.
- Use Playwright for smoke tests once the project can run.
- Use Replay only for complex frontend behavior or a reproducible bug that needs deeper inspection.

Do not call tools just to call tools. Prefer targeted verification.

## Required Future Routes

The project should be ready for these routes:

- `/` - dashboard;
- `/cameras` - cameras;
- `/safety` - safety agent;
- `/logistics` - logistics agent;
- `/progress` - progress camera;
- `/events` - global event log;
- `/architecture` - how the system works;
- `/settings` - demo settings.

Do not create these pages during Stage 0 unless explicitly requested. Stage 0 is documentation and foundation only.

## Required Mock Data Entities

Future mock data should include these types and values.

### AgentType

- `SAFETY`
- `LOGISTICS`
- `PROGRESS`

### CameraStatus

- `ONLINE`
- `WARNING`
- `OFFLINE`

### EventStatus

- `NEW`
- `CONFIRMED`
- `FALSE_POSITIVE`
- `RESOLVED`

### Severity

- `LOW`
- `MEDIUM`
- `HIGH`
- `CRITICAL`

### Safety Events

- `NO_HELMET`
- `NO_VEST`
- `DANGER_ZONE_ENTRY`

### Logistics Events

- `PALLET_ARRIVED`
- `PALLET_REMOVED`
- `ZONE_OCCUPIED`
- `LONG_STAY`

### Progress Events

- `PROGRESS_SNAPSHOT_CREATED`

### Demo Objects

- `Склад алкогольного магазина`
- `Строительный объект №1`
- `Зона разгрузки`
- `Кровля / монтажная зона`

### Demo Cameras

- `Safety Camera 01`
- `Logistics Camera 01`
- `Progress Camera 01`

### Demo Products

- `water`
- `juice`
- `beer`

## Demo Directions

SiteBrain has three demo directions:

1. SiteBrain Safety Camera
   - helmet control;
   - vest control;
   - dangerous zones;
   - safety violations;
   - notifications.

2. SiteBrain Logistics Camera
   - warehouse zones;
   - pallets;
   - products: water, juice, beer;
   - movement;
   - long stay;
   - occupied/free zone state.

3. SiteBrain Progress Camera
   - scheduled snapshots;
   - timelapse;
   - work progress;
   - activity by zones;
   - daily reports.

## Visual Direction

The interface should feel like:

- modern B2B SaaS platform;
- premium dark dashboard;
- technological AI control center;
- precise operational tool;
- clear status system;
- minimal text;
- readable on a projector;
- responsive on phone.

Use clean cards, sharp hierarchy, clear metrics, visible event statuses, and focused controls. Avoid marketing-style filler.

## Development Rules

At every stage:

- inspect the current file structure first;
- do not assume files are missing;
- do not rewrite everything from scratch;
- make minimal but high-quality changes;
- preserve compatibility with existing work;
- run checks when possible:
  - `npm run lint`
  - `npm run build`
- if a command fails, report the reason honestly;
- if a dependency is added, explain why;
- fix TypeScript errors when they appear;
- if there is visual UI, verify it in a browser/DevTools when possible.

Before editing files, understand nearby patterns. If user changes are present, work with them instead of reverting them.

## Response Format After Each Stage

Every Codex response after a task should include:

- what was created;
- what was changed;
- which files were touched;
- which checks were run;
- which errors appeared and how they were fixed;
- what is ready now;
- the next logical step.

Keep the report concise but complete enough that another agent can continue.

## Project Priorities

Priority 1:
Working public demo via QR code.

Priority 2:
Clear demonstration logic:

```text
Camera -> AI Worker -> Event -> Dashboard
```

Priority 3:
Beautiful and stable interface.

Priority 4:
Do not overcomplicate.

## Recommended Roadmap

- Stage 0 - Project Foundation & Agent Instructions
- Stage 1 - Next.js App Foundation
- Stage 2 - Layout / Sidebar / Topbar / Dark Theme
- Stage 3 - Mock Data & Types
- Stage 4 - Dashboard
- Stage 5 - Cameras & Events
- Stage 6 - Safety Agent Page
- Stage 7 - Logistics Agent Page
- Stage 8 - Progress Agent Page
- Stage 9 - Architecture Page
- Stage 10 - Demo Mode / Simulate AI Event
- Stage 11 - Responsive Polish
- Stage 12 - Vercel Deployment / QR Code Readiness

## Stage Discipline

Do only the requested stage. Do not start Stage 1 from Stage 0. Do not create full pages or UI unless the user explicitly asks for that stage.

When a future task asks for implementation, prefer the smallest useful slice that moves the demo forward and keeps the architecture easy to understand.
