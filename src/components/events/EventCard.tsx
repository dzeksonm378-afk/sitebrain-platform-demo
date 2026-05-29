import { Badge } from "@/components/ui/Badge";
import {
  formatAgentType,
  formatConfidence,
  formatEventType,
  formatSeverity,
  formatStatus,
} from "@/lib/format";
import type { EventStatus, Severity, SiteBrainEvent } from "@/types/sitebrain";

type EventCardProps = {
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

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md border border-white/10 bg-black/20 px-2 py-1 text-xs font-medium text-slate-300">
              {formatTime(event.time)}
            </span>
            <Badge tone="neutral">{formatAgentType(event.agentType)}</Badge>
            <Badge tone={getSeverityTone(event.severity)}>
              {formatSeverity(event.severity)}
            </Badge>
            <Badge tone={getStatusTone(event.status)}>
              {formatStatus(event.status)}
            </Badge>
          </div>

          <h2 className="mt-4 text-lg font-semibold tracking-normal text-white">
            {formatEventType(event.eventType)}
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            {event.description}
          </p>
        </div>

        <div className="shrink-0 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm">
          <span className="text-slate-500">Confidence </span>
          <span className="font-semibold text-slate-100">
            {formatConfidence(event.confidence)}
          </span>
        </div>
      </div>

      <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2 xl:grid-cols-4">
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
        <div>
          <dt className="text-slate-500">Image label</dt>
          <dd className="mt-1 font-medium text-slate-100">
            {event.imageLabel}
          </dd>
        </div>
      </dl>
    </article>
  );
}
