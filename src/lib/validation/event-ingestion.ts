import { z } from "zod";
import type { EventIngestionPayload, JsonValue } from "@/types/sitebrain";

const agentTypes = ["SAFETY", "LOGISTICS", "PROGRESS"] as const;

const eventTypes = [
  "NO_HELMET",
  "NO_VEST",
  "DANGER_ZONE_ENTRY",
  "PALLET_ARRIVED",
  "PALLET_REMOVED",
  "ZONE_OCCUPIED",
  "LONG_STAY",
  "PROGRESS_SNAPSHOT_CREATED",
  "DAILY_REPORT_CREATED",
  "ZONE_IDLE_DETECTED",
] as const;

const severityLevels = ["LOW", "MEDIUM", "HIGH", "CRITICAL"] as const;

const nonEmptyString = z.string().trim().min(1).max(500);

const jsonValueSchema: z.ZodType<JsonValue> = z.lazy(() =>
  z.union([
    z.string(),
    z.number(),
    z.boolean(),
    z.null(),
    z.array(jsonValueSchema),
    z.record(z.string(), jsonValueSchema),
  ]),
);

export const eventIngestionPayloadSchema = z
  .object({
    cameraExternalId: nonEmptyString.max(120),
    agentType: z.enum(agentTypes),
    eventType: z.enum(eventTypes),
    severity: z.enum(severityLevels),
    confidence: z.number().min(0).max(1),
    objectName: nonEmptyString.max(200),
    zone: nonEmptyString.max(200),
    description: nonEmptyString.max(1200),
    assignedTo: nonEmptyString.max(160).optional(),
    imageLabel: nonEmptyString.max(240).optional(),
    imageUrl: z.string().trim().url().max(1200).optional(),
    occurredAt: z.string().trim().datetime({ offset: true }),
    source: nonEmptyString.max(120).optional(),
    rawPayload: jsonValueSchema.optional(),
  })
  .strict();

export type EventIngestionValidationResult =
  | {
      ok: true;
      data: EventIngestionPayload;
    }
  | {
      ok: false;
      errors: string[];
    };

export function validateEventIngestionPayload(
  input: unknown,
): EventIngestionValidationResult {
  const result = eventIngestionPayloadSchema.safeParse(input);

  if (result.success) {
    return {
      ok: true,
      data: result.data,
    };
  }

  return {
    ok: false,
    errors: result.error.issues.map((issue) => {
      const path = issue.path.length > 0 ? issue.path.join(".") : "payload";
      return `${path}: ${issue.message}`;
    }),
  };
}
