# Database Schema

Stage 15 adds the Prisma + PostgreSQL foundation for future camera-ready product work. The public UI still uses mock data until later hybrid/live stages.

## Camera

Represents a camera source or demo source.

Important fields:

- `externalId` maps worker payloads to platform cameras.
- `agentType` links the camera to Safety, Logistics or Progress.
- `status`, `isActive` and `lastActivityAt` support operational views.
- `dataSourceType` distinguishes mock sources, RTSP, video files and snapshots.
- `streamUrl` is optional and should not be exposed publicly without access control.

Relationship:

- one `Camera` can have many `Event` records.

## Event

Represents a normalized AI event created from camera/video analysis.

Important fields:

- `cameraId` optionally links to a registered camera.
- `cameraExternalId` preserves the worker-provided camera identifier.
- `agentType`, `eventType`, `severity`, `status` and `confidence` drive dashboards and filters.
- `occurredAt` is when the worker says the event happened.
- `receivedAt` is when the platform accepted it.
- `rawPayload` stores the original JSON for debugging and ingestion audits.
- `source` identifies whether the event came from `python-worker`, `manual-demo` or `seed`.

Relationship:

- an `Event` may belong to a `Camera`.
- the relation uses `onDelete: SetNull` so deleting a camera does not destroy historical events.

## AIAgent

Represents the configured AI agents shown in the product.

Current agent types:

- `SAFETY`
- `LOGISTICS`
- `PROGRESS`

The model keeps product-facing labels such as `modelLabel`, `accuracyLabel`, status and description.

## IngestionLog

Stores future ingestion diagnostics.

Use cases:

- rejected payload;
- validation error;
- worker health message;
- debug record for synthetic worker tests.

## Python Worker Connection

The Python Worker should not send raw video to Next.js.

Expected future flow:

```text
Python Worker
-> POST /api/events/ingest
-> validate payload
-> find Camera by externalId
-> create Event
-> write IngestionLog when needed
-> dashboard/events/agent pages read persisted events
```

## Stage 15 Boundary

This schema is not connected to the UI yet. Stage 16 should add the Event Ingestion API, and Stage 17 should add a hybrid data layer that can fall back to mock data.

