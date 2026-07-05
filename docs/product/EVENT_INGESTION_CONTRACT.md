# Event Ingestion Contract

Stage 16 implements the first secure ingestion endpoint foundation. The UI still
uses mock data until the hybrid data layer is introduced.

## Endpoint

```http
GET /api/events/ingest
POST /api/events/ingest
```

`POST` receives structured events from the Python AI Worker after video analysis
and business-rule normalization.

`GET` returns endpoint health/info without writing to the database.

## Authorization

`POST` requires:

```http
Authorization: Bearer <SITEBRAIN_INGEST_TOKEN>
Content-Type: application/json
```

If `SITEBRAIN_INGEST_TOKEN` is not configured, the endpoint returns `503` with
`INGEST_TOKEN_NOT_CONFIGURED`.

If the header is missing or invalid, the endpoint returns `401` with
`UNAUTHORIZED_INGEST_REQUEST`.

## Example Payload

```json
{
  "cameraExternalId": "safety-camera-01",
  "agentType": "SAFETY",
  "eventType": "NO_HELMET",
  "severity": "HIGH",
  "confidence": 0.92,
  "objectName": "Строительный объект №1",
  "zone": "Кровля / монтажная зона",
  "description": "Worker detected person without helmet.",
  "assignedTo": "Site manager",
  "imageLabel": "frame_2026_07_05_12_30_00.jpg",
  "imageUrl": "https://example.com/sitebrain/frame.jpg",
  "occurredAt": "2026-07-05T12:30:00.000Z",
  "source": "python-worker",
  "rawPayload": {
    "model": "demo-yolo",
    "frameId": "frame_2026_07_05_12_30_00"
  }
}
```

## Example Success Response

```json
{
  "ok": true,
  "eventId": "cm_event_id",
  "cameraLinked": true,
  "receivedAt": "2026-07-05T12:30:01.000Z"
}
```

If no camera is registered for `cameraExternalId`, the event can still be stored
with `cameraLinked: false`.

## Example Validation Error

```json
{
  "ok": false,
  "error": "INVALID_INGESTION_PAYLOAD",
  "details": [
    "confidence: Too big: expected number to be <=1",
    "occurredAt: Invalid ISO datetime"
  ]
}
```

## Example Unauthorized Error

```json
{
  "ok": false,
  "error": "UNAUTHORIZED_INGEST_REQUEST"
}
```

## Database Not Configured Behavior

If `DATABASE_URL` is not configured, authenticated `POST` requests return:

```json
{
  "ok": false,
  "error": "DATABASE_NOT_CONFIGURED",
  "details": ["Set DATABASE_URL before writing ingested events."]
}
```

## Validation Rules

- `cameraExternalId` is required.
- `agentType` is required and must match the platform enum.
- `eventType` is required and must match the platform enum.
- `severity` is required and must match the platform enum.
- `confidence` must be a number between `0` and `1`.
- `occurredAt` must be an ISO date string.
- `objectName`, `zone` and `description` should be present for useful dashboard display.
- `imageUrl`, when present, must be a valid URL.
- `rawPayload`, when present, must be JSON-compatible.

## Current Security Boundary

Stage 16 blocks anonymous writes with a bearer ingest token and validates payloads
before DB access. It does not yet implement token rotation, per-camera
authorization, request signatures, or rate limiting.

Future security should include:

- HMAC signatures from worker to platform;
- token rotation;
- rate limiting;
- request size limits;
- basic payload audit logs;
- separation between public demo mode and production ingestion mode.

## Stage 16 Boundary

The ingestion API is implemented, but dashboard/events/agent pages still read
mock data. Stage 17 should add the hybrid data layer.

