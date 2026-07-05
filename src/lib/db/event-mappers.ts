import type { Prisma } from "@prisma/client";
import type { EventIngestionPayload, JsonValue } from "@/types/sitebrain";

type EventCreateInput = Prisma.EventCreateInput;

function payloadToJson(payload: EventIngestionPayload): Prisma.InputJsonObject {
  return {
    agentType: payload.agentType,
    ...(payload.assignedTo ? { assignedTo: payload.assignedTo } : {}),
    cameraExternalId: payload.cameraExternalId,
    confidence: payload.confidence,
    description: payload.description,
    eventType: payload.eventType,
    ...(payload.imageLabel ? { imageLabel: payload.imageLabel } : {}),
    ...(payload.imageUrl ? { imageUrl: payload.imageUrl } : {}),
    objectName: payload.objectName,
    occurredAt: payload.occurredAt,
    severity: payload.severity,
    ...(payload.source ? { source: payload.source } : {}),
    zone: payload.zone,
  } satisfies Prisma.InputJsonObject;
}

function toPrismaJsonValue(
  value: Exclude<JsonValue, null>,
): Prisma.InputJsonValue {
  return value;
}

export function mapIngestionPayloadToEventCreateInput(
  payload: EventIngestionPayload,
): EventCreateInput {
  const rawPayload =
    payload.rawPayload === undefined || payload.rawPayload === null
      ? payloadToJson(payload)
      : toPrismaJsonValue(payload.rawPayload);

  return {
    agentType: payload.agentType,
    cameraExternalId: payload.cameraExternalId,
    confidence: payload.confidence,
    description: payload.description,
    eventType: payload.eventType,
    assignedTo: payload.assignedTo,
    imageLabel: payload.imageLabel,
    imageUrl: payload.imageUrl,
    isDemo: false,
    objectName: payload.objectName,
    occurredAt: new Date(payload.occurredAt),
    rawPayload,
    severity: payload.severity,
    source: payload.source ?? "python-worker",
    status: "NEW",
    zone: payload.zone,
  };
}

export function mapIngestionLogPayload(
  payload: EventIngestionPayload,
  cameraLinked: boolean,
): Prisma.InputJsonObject {
  return {
    agentType: payload.agentType,
    cameraExternalId: payload.cameraExternalId,
    cameraLinked,
    confidence: payload.confidence,
    eventType: payload.eventType,
    occurredAt: payload.occurredAt,
    severity: payload.severity,
    source: payload.source ?? "python-worker",
    zone: payload.zone,
  };
}
