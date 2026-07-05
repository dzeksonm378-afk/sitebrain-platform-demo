import { timingSafeEqual } from "node:crypto";
import { getDataMode } from "@/lib/data-mode";
import {
  mapIngestionLogPayload,
  mapIngestionPayloadToEventCreateInput,
} from "@/lib/db/event-mappers";
import { prisma } from "@/lib/prisma";
import { validateEventIngestionPayload } from "@/lib/validation/event-ingestion";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 64 * 1024;

type ErrorResponse = {
  ok: false;
  error: string;
  details?: string[];
};

function jsonError(
  status: number,
  error: string,
  details?: string[],
): Response {
  const body: ErrorResponse = { ok: false, error };

  if (details && details.length > 0) {
    body.details = details;
  }

  return Response.json(body, { status });
}

function isDatabaseConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL?.trim());
}

function getConfiguredIngestToken(): string | null {
  const token = process.env.SITEBRAIN_INGEST_TOKEN?.trim();
  return token && token.length > 0 ? token : null;
}

function secureTokenEquals(receivedToken: string, expectedToken: string): boolean {
  const received = Buffer.from(receivedToken);
  const expected = Buffer.from(expectedToken);

  if (received.length !== expected.length) {
    return false;
  }

  return timingSafeEqual(received, expected);
}

function isAuthorized(request: Request, expectedToken: string): boolean {
  const authorization = request.headers.get("authorization");

  if (!authorization?.startsWith("Bearer ")) {
    return false;
  }

  const receivedToken = authorization.slice("Bearer ".length).trim();

  if (!receivedToken) {
    return false;
  }

  return secureTokenEquals(receivedToken, expectedToken);
}

export async function GET() {
  return Response.json({
    ok: true,
    endpoint: "/api/events/ingest",
    method: "POST",
    dataMode: getDataMode(),
    requiresToken: true,
    databaseConfigured: isDatabaseConfigured(),
  });
}

export async function POST(request: Request) {
  const configuredToken = getConfiguredIngestToken();

  if (!configuredToken) {
    return jsonError(503, "INGEST_TOKEN_NOT_CONFIGURED", [
      "Set SITEBRAIN_INGEST_TOKEN before accepting ingestion writes.",
    ]);
  }

  if (!isAuthorized(request, configuredToken)) {
    return jsonError(401, "UNAUTHORIZED_INGEST_REQUEST");
  }

  const contentLength = Number(request.headers.get("content-length") ?? "0");

  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return jsonError(413, "INGEST_PAYLOAD_TOO_LARGE", [
      `Payload must be ${MAX_BODY_BYTES} bytes or less.`,
    ]);
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return jsonError(400, "INVALID_JSON_BODY");
  }

  const validation = validateEventIngestionPayload(body);

  if (!validation.ok) {
    return jsonError(400, "INVALID_INGESTION_PAYLOAD", validation.errors);
  }

  if (!isDatabaseConfigured()) {
    return jsonError(503, "DATABASE_NOT_CONFIGURED", [
      "Set DATABASE_URL before writing ingested events.",
    ]);
  }

  const payload = validation.data;
  const source = payload.source ?? "python-worker";

  try {
    const result = await prisma.$transaction(async (tx) => {
      const camera = await tx.camera.findUnique({
        where: { externalId: payload.cameraExternalId },
      });

      const cameraLinked = Boolean(camera);
      const eventData = mapIngestionPayloadToEventCreateInput(payload);

      const event = await tx.event.create({
        data: camera
          ? {
              ...eventData,
              camera: {
                connect: { id: camera.id },
              },
            }
          : eventData,
      });

      if (camera) {
        await tx.camera.update({
          where: { id: camera.id },
          data: {
            lastActivityAt: new Date(payload.occurredAt),
            status: "ONLINE",
          },
        });
      }

      await tx.ingestionLog.create({
        data: {
          source,
          level: cameraLinked ? "INFO" : "WARN",
          message: cameraLinked
            ? "Event ingested"
            : "Event ingested without registered camera",
          payload: mapIngestionLogPayload(payload, cameraLinked),
        },
      });

      return {
        eventId: event.id,
        cameraLinked,
        receivedAt: event.receivedAt.toISOString(),
      };
    });

    return Response.json({
      ok: true,
      eventId: result.eventId,
      cameraLinked: result.cameraLinked,
      receivedAt: result.receivedAt,
    });
  } catch (error) {
    console.error(
      "[sitebrain-ingest] DATABASE_WRITE_FAILED",
      error instanceof Error ? error.message : "Unknown database error",
    );

    return jsonError(500, "DATABASE_WRITE_FAILED");
  }
}
