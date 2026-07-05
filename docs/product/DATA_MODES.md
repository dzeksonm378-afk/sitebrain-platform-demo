# Data Modes

SiteBrain should support three data modes as it moves from public demo to camera-ready product.

## 1. Mock Mode

Current default mode.

- Uses TypeScript mock data.
- Requires no database.
- Works on Vercel preview and public QR demo.
- Useful as a backup if live infrastructure is unavailable during presentation.

Default environment behavior:

```text
NEXT_PUBLIC_SITEBRAIN_DATA_MODE unset -> mock
```

## 2. Hybrid Mode

Transition mode for Stage 17.

- UI can read database events when available.
- UI falls back to mock data when the database is empty or unavailable.
- Useful while API ingestion, DB schema and dashboards are being connected.

## 3. Live Mode

Future production-like mode.

- UI reads real events from the database.
- Python AI Worker sends events through `POST /api/events/ingest`.
- Mock data is no longer the primary source.

## Recommended Rollout

1. Keep `mock` as the default for public demo stability.
2. Add database schema and ingestion API.
3. Enable `hybrid` mode for internal tests.
4. Move selected pages to DB-backed data.
5. Use `live` mode only after ingestion, persistence and review flows are stable.

