import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  formatAgentType,
  formatConfidence,
  formatEventType,
  formatSeverity,
  formatStatus,
} from "@/lib/format";
import { getLatestEvents } from "@/lib/demo-selectors";
import type { EventStatus, Severity, SiteBrainEvent } from "@/types/sitebrain";

type LatestEventsProps = {
  events?: SiteBrainEvent[];
};

function formatTime(value: string) {
  return value.split("T")[1]?.slice(0, 5) ?? value;
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

export function LatestEvents({ events }: LatestEventsProps) {
  const shownEvents = events ?? getLatestEvents(7);

  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-normal text-zinc-500">
            Latest AI events
          </p>
          <h2 className="mt-2 text-xl font-black uppercase tracking-normal text-white">
            Event stream
          </h2>
        </div>
        <Badge tone="info">{shownEvents.length} shown</Badge>
      </div>

      <div className="mt-5 divide-y divide-white/10">
        {shownEvents.map((event) => (
          <article className="py-4 first:pt-0 last:pb-0" key={event.id}>
            <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md border border-white/15 bg-black/30 px-2 py-1 text-xs font-medium text-zinc-300">
                    {formatTime(event.time)}
                  </span>
                  <Badge tone="neutral">{formatAgentType(event.agentType)}</Badge>
                  <Badge tone={getSeverityTone(event.severity)}>
                    {formatSeverity(event.severity)}
                  </Badge>
                  <Badge tone={getStatusTone(event.status)}>
                    {formatStatus(event.status)}
                  </Badge>
                  {event.id.startsWith("evt-demo") ? (
                    <Badge tone="online">Simulated now</Badge>
                  ) : null}
                </div>
                <h3 className="mt-3 text-base font-black uppercase text-white">
                  {formatEventType(event.eventType)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {event.description}
                </p>
                <p className="mt-2 text-xs font-medium leading-5 text-zinc-600">
                  {event.cameraName} / {event.objectName} / {event.zone}
                </p>
              </div>
              <div className="shrink-0 rounded-md border border-white/[0.14] bg-white/[0.04] px-3 py-2 text-sm">
                <span className="text-zinc-600">Confidence </span>
                <span className="font-semibold text-zinc-100">
                  {formatConfidence(event.confidence)}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Card>
  );
}
