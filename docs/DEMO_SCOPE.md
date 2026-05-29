# Demo Scope

## What Is Included

The demo should include:

- a polished public web interface;
- dark B2B SaaS dashboard style;
- mock cameras;
- mock AI events;
- safety camera scenario;
- logistics camera scenario;
- progress camera scenario;
- global event log;
- architecture explanation page;
- demo-mode interaction for simulating an AI event;
- responsive layout for laptop, projector, and phone;
- Vercel deployment readiness.

## What Is Not Included

The demo does not include:

- real PostgreSQL database;
- Prisma;
- production authentication;
- payments;
- complex backend;
- real Python Worker integration;
- real YOLO API integration;
- real camera stream processing;
- mobile app;
- real personal data;
- face recognition.

## Why Mock Data Is Acceptable

The purpose of the stage demo is to communicate the product logic and user experience:

```text
Camera -> AI Worker -> Event -> Dashboard
```

Mock data is acceptable because the audience needs to understand the platform concept, event lifecycle, and demo scenarios. The live demo should be stable and visually convincing. Real AI integration is a later production concern.

## Stage Demo Objective

The demo must make the product understandable in seconds:

- what the system sees;
- what event was detected;
- where the event happened;
- how severe it is;
- what action the user can take;
- how SiteBrain connects safety, logistics, and progress monitoring.
