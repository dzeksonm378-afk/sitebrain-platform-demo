import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  formatConfidence,
  formatEventType,
  formatSeverity,
  formatStatus,
} from "@/lib/format";
import type { EventStatus, Severity, SiteBrainEvent } from "@/types/sitebrain";
import { SafetyDetectionFrame } from "./SafetyDetectionFrame";

type SafetyEventCardProps = {
  event: SiteBrainEvent;
};

function formatTime(value: string) {
  return value.replace("T", " ").slice(0, 16);
}

function getSeverityTone(severity: Severity) {
  if (severity === "CRITICAL") {
    return "critical";
  }

  if (severity === "HIGH" || severity === "MEDIUM") {
    return "warning";
  }

  return "neutral";
}

function getStatusTone(status: EventStatus) {
  if (status === "NEW") {
    return "info";
  }

  if (status === "CONFIRMED") {
    return "warning";
  }

  if (status === "RESOLVED") {
    return "online";
  }

  return "neutral";
}

export function SafetyEventCard({ event }: SafetyEventCardProps) {
  return (
    <Card className="grid gap-5 xl:grid-cols-[0.92fr_1.08fr]">
      <SafetyDetectionFrame
        confidence={event.confidence}
        imageLabel={event.imageLabel}
      />

      <div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone={getSeverityTone(event.severity)}>
            {formatSeverity(event.severity)}
          </Badge>
          <Badge tone={getStatusTone(event.status)}>
            {formatStatus(event.status)}
          </Badge>
          <Badge tone="info">{formatConfidence(event.confidence)}</Badge>
        </div>

        <h2 className="mt-4 text-xl font-semibold tracking-normal text-white">
          {formatEventType(event.eventType)}
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          {event.description}
        </p>

        <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-slate-500">Time</dt>
            <dd className="mt-1 font-medium text-slate-100">
              {formatTime(event.time)}
            </dd>
          </div>
          <div>
            <dt className="text-slate-500">Camera</dt>
            <dd className="mt-1 font-medium text-slate-100">
              {event.cameraName}
            </dd>
          </div>
          <div>
            <dt className="text-slate-500">Object / zone</dt>
            <dd className="mt-1 font-medium text-slate-100">
              {event.objectName} / {event.zone}
            </dd>
          </div>
          <div>
            <dt className="text-slate-500">Assigned to</dt>
            <dd className="mt-1 font-medium text-slate-100">
              {event.assignedTo}
            </dd>
          </div>
        </dl>
      </div>
    </Card>
  );
}
