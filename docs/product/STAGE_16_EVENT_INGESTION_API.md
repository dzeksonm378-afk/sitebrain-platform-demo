# Stage 16 - Event Ingestion API

Stage 16 adds the first safe ingestion endpoint for future Python AI Worker
integration.

## What Was Added

- `GET /api/events/ingest` for endpoint health/info.
- `POST /api/events/ingest` for validated AI event writes.
- Bearer token check using `SITEBRAIN_INGEST_TOKEN`.
- Zod validation for `EventIngestionPayload`.
- Prisma write flow for `Event`, optional `Camera` link, camera activity update
  and `IngestionLog`.
- A local script for sending a demo `NO_HELMET` event.

## How To Check GET

```bash
curl http://localhost:3000/api/events/ingest
```

Expected response includes:

```json
{
  "ok": true,
  "endpoint": "/api/events/ingest",
  "method": "POST",
  "requiresToken": true,
  "databaseConfigured": false
}
```

## How To Check POST

PowerShell example:

```powershell
$env:SITEBRAIN_INGEST_URL="http://localhost:3000/api/events/ingest"
$env:SITEBRAIN_INGEST_TOKEN="dev-token"
node scripts/send-demo-ingest-event.mjs
```

The local Next.js server must be started with matching env values:

```powershell
$env:SITEBRAIN_INGEST_TOKEN="dev-token"
$env:DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
npm run dev
```

Without `DATABASE_URL`, authenticated POST requests intentionally return
`DATABASE_NOT_CONFIGURED`.

## Why UI Still Uses Mock Data

The public demo must remain stable and QR-ready. Stage 16 only prepares writes
from the future worker. Dashboard, `/events` and agent pages still use typed mock
data until Stage 17 introduces a hybrid data layer.

## Stage 17 Needs

- A real safe PostgreSQL development database.
- Optional seed data for registered cameras and agents.
- Hybrid selectors that read DB events when available and fall back to mock data.
- Clear rollback behavior if DB is unavailable during the demo.
