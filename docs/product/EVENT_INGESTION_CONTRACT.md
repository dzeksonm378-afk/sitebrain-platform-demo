# Event Ingestion Contract

Stage 14 documents the future HTTP contract. The API route is not implemented yet.

## Endpoint

```http
POST /api/events/ingest
```

The endpoint will receive structured events from the Python AI Worker after video analysis and business-rule normalization.

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
  "imageLabel": "frame_2026_07_05_12_30_00.jpg",
  "occurredAt": "2026-07-05T12:30:00.000Z"
}
```

## Example Response

```json
{
  "ok": true,
  "eventId": "evt_..."
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

## Security Later

Production ingestion must not allow anonymous public writes.

Future security should include:

- API token or HMAC signature from worker to platform;
- token rotation;
- rate limiting;
- request size limits;
- basic payload audit logs;
- separation between public demo mode and production ingestion mode.

## Stage 14 Boundary

No API route is implemented in Stage 14. This contract exists so Stage 16 can add the route without changing the product model.

