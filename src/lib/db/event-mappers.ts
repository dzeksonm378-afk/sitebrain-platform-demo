import type { Prisma } from "@prisma/client";
import type { EventIngestionPayload } from "@/types/sitebrain";

type EventCreateInput = Prisma.EventCreateInput;

export function mapIngestionPayloadToEventCreateInput(
  payload: EventIngestionPayload,
): EventCreateInput {
  const rawPayload: Prisma.InputJsonObject = {
    agentType: payload.agentType,
    cameraExternalId: payload.cameraExternalId,
    confidence: payload.confidence,
    description: payload.description,
    eventType: payload.eventType,
    imageLabel: payload.imageLabel ?? null,
    objectName: payload.objectName,
    occurredAt: payload.occurredAt,
    severity: payload.severity,
    zone: payload.zone,
  };

  return {
    agentType: payload.agentType,
    cameraExternalId: payload.cameraExternalId,
    confidence: payload.confidence,
    description: payload.description,
    eventType: payload.eventType,
    imageLabel: payload.imageLabel,
    isDemo: false,
    objectName: payload.objectName,
    occurredAt: new Date(payload.occurredAt),
    rawPayload,
    severity: payload.severity,
    source: "python-worker",
    zone: payload.zone,
  };
}
