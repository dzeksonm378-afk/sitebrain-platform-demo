# Python Worker Integration

The Python AI Worker is the future bridge between camera/video input and the SiteBrain Platform.

## Worker Responsibilities

The worker should:

- read RTSP streams, uploaded videos or scheduled snapshots;
- extract frames;
- run YOLO / computer vision inference;
- apply business rules for safety, logistics or progress scenarios;
- normalize detections into a JSON event;
- send the event to `POST /api/events/ingest`;
- avoid sending raw video to the Next.js platform.

## Example Worker Pseudo-Code

```python
import requests

payload = {
    "cameraExternalId": "safety-camera-01",
    "agentType": "SAFETY",
    "eventType": "NO_HELMET",
    "severity": "HIGH",
    "confidence": 0.92,
    "objectName": "Строительный объект №1",
    "zone": "Кровля / монтажная зона",
    "description": "Worker detected person without helmet.",
    "imageLabel": "frame_2026_07_05_12_30_00.jpg",
    "occurredAt": "2026-07-05T12:30:00.000Z",
}

requests.post(
    "https://sitebrain-platform-demo.vercel.app/api/events/ingest",
    json=payload,
    headers={"Authorization": "Bearer <token>"},
    timeout=5,
)
```

## Display Path

After the platform accepts an event, it should become visible in:

- Dashboard latest events;
- `/events` unified event journal;
- agent pages such as `/safety`, `/logistics` and `/progress`;
- future notifications and reports.

## Stage 14 Boundary

This document is a preparation artifact. Stage 14 does not connect a real worker, camera or YOLO model.

