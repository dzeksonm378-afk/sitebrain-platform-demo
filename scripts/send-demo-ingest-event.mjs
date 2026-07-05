const ingestUrl =
  process.env.SITEBRAIN_INGEST_URL ??
  "http://localhost:3000/api/events/ingest";
const ingestToken = process.env.SITEBRAIN_INGEST_TOKEN;

if (!ingestToken) {
  console.error("SITEBRAIN_INGEST_TOKEN is required.");
  process.exit(1);
}

const payload = {
  cameraExternalId: "safety-camera-01",
  agentType: "SAFETY",
  eventType: "NO_HELMET",
  severity: "HIGH",
  confidence: 0.92,
  objectName: "Строительный объект №1",
  zone: "Кровля / монтажная зона",
  description: "Demo worker detected person without helmet.",
  assignedTo: "Site manager",
  imageLabel: "frame_demo_no_helmet.jpg",
  occurredAt: new Date().toISOString(),
  source: "demo-script",
  rawPayload: {
    detector: "demo-yolo-worker",
    frameId: "frame_demo_no_helmet",
  },
};

const response = await fetch(ingestUrl, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${ingestToken}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
});

const responseBody = await response.json().catch(() => null);

console.log(`Status: ${response.status}`);
console.log(JSON.stringify(responseBody, null, 2));
