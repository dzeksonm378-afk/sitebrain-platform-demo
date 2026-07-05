# Next Stages Product Roadmap

Stage 14 creates the camera-ready platform foundation. The next logical stages are:

## Stage 15 - Prisma + PostgreSQL Schema - done

Add database models for cameras, events, agents and ingestion logs. The UI still uses mock data.

## Stage 16 - Event Ingestion API - current/done

Implement `POST /api/events/ingest` using the documented payload contract. Keep the UI in mock mode.

## Stage 17 - Hybrid Data Layer

Create selectors that can read from database-backed events and fall back to mock data.

## Stage 18 - DB-Powered Events Page

Move `/events` to database-backed event data in hybrid/live modes.

## Stage 19 - DB-Powered Dashboard

Move dashboard metrics and latest events to database-backed data.

## Stage 20 - Camera Registry Page

Introduce real camera external IDs and camera source metadata.

## Stage 21 - Fake Worker Smoke Test

Create a local script that posts synthetic events to the ingestion API.

## Stage 22 - Real Camera / Python Worker Integration

Connect a real Python Worker and camera/video input to the platform ingestion flow.

