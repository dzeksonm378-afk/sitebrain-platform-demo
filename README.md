# SiteBrain Platform Demo

SiteBrain Platform Demo is a public web demo for an AI camera and computer vision platform.

The demo explains the product flow:

```text
Camera / Video
-> Python AI Worker
-> YOLO / Computer Vision
-> Event
-> SiteBrain Platform
-> Notification / Report
```

This is not a production SaaS. It is a polished stage demo based on mock data, designed to be opened by QR code and shown to experts.

## Demo Directions

- SiteBrain Safety Camera - helmets, vests, dangerous zones, safety violations.
- SiteBrain Logistics Camera - warehouse zones, pallets, water, juice, beer, movement, long stay.
- SiteBrain Progress Camera - scheduled snapshots, timelapse, progress reports, activity by zones.

## Planned Routes

- `/` - dashboard
- `/cameras` - cameras
- `/safety` - safety agent
- `/logistics` - logistics agent
- `/progress` - progress camera
- `/events` - global event log
- `/architecture` - system explanation
- `/settings` - demo settings

## Local Development

Stage 0 created project instructions and documentation. Stage 1 adds the minimal Next.js App Router foundation. Stage 2 adds the base platform shell, dark navigation, and placeholder routes. Stage 3 prepares the typed mock data layer for future UI stages. Stage 4 connects mock data to the main dashboard. Stage 5 adds the Cameras and Events pages. Stage 6 adds the Safety Agent page. Stage 7 adds the Logistics Agent page. Stage 8 adds the Progress Agent page. Stage 9 adds the Architecture page. Stage 10 adds safe client-side demo event simulation. Stage 12 prepares the demo for Vercel deployment and QR-code readiness.

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Run checks:

```bash
npm run lint
npm run build
```

## What Is Not Included

The demo does not include:

- PostgreSQL;
- Prisma;
- production authentication;
- payments;
- complex backend;
- real Python Worker;
- real YOLO API;
- real camera processing;
- mobile app;
- real personal data;
- face recognition.

## Deployment

The planned deployment target is Vercel:

1. Run `npm run build`.
2. Commit and push to GitHub.
3. Import the project to Vercel.
4. Get the public URL.
5. Generate and test a QR code.

See `docs/DEPLOYMENT_PLAN.md` for the full checklist.

## Deploy to Vercel

Option A: push the project to GitHub, import it in Vercel, keep the framework preset as Next.js, use `npm install` and `npm run build`, then copy the production URL.

Option B: use the Vercel CLI:

```bash
npm i -g vercel
vercel login
vercel
vercel --prod
```

Generate the QR code only after the final production URL is available, then test it on a phone before the presentation.
