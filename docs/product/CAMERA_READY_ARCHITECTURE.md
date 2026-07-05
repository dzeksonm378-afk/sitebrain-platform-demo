# Camera-Ready Architecture

Stage 14 prepares SiteBrain Platform Demo for a future real camera pipeline while keeping the current public demo stable.

## Target Flow

```text
Camera / Video
-> Python AI Worker
-> YOLO / Computer Vision
-> Event Normalizer
-> SiteBrain Event Ingestion API
-> Database
-> Dashboard / Events / Agent Pages
```

## Product Boundary

The Next.js platform should not process raw video streams.

Raw camera/video processing belongs outside the web platform:

- RTSP streams, uploaded videos, or scheduled snapshots are read by a Python AI Worker.
- YOLO / computer vision models run inside the worker environment.
- Business rules convert detections into structured events.
- The platform receives only normalized event payloads.

This keeps the web demo simple today and keeps the future product architecture clean.

## Future Platform Responsibilities

The SiteBrain Platform should eventually handle:

- camera registry and camera external IDs;
- event ingestion API;
- event validation and normalization;
- database persistence;
- dashboard, events, agent pages, reports and notifications;
- operational review statuses such as `NEW`, `CONFIRMED`, `FALSE_POSITIVE` and `RESOLVED`.

## Current Stage 14 Scope

Included:

- product architecture documentation;
- future ingestion payload types;
- data mode helper;
- lightweight UI notes on Settings and Architecture pages.

Not included:

- real camera integration;
- Python Worker connection;
- YOLO inference;
- API route implementation;
- PostgreSQL / Prisma;
- authentication or API security enforcement.

