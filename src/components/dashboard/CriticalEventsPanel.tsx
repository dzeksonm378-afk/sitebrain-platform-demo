import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  formatAgentType,
  formatEventType,
  formatSeverity,
  formatStatus,
} from "@/lib/format";
import type { Severity, SiteBrainEvent } from "@/types/sitebrain";

type CriticalEventsPanelProps = {
  events: SiteBrainEvent[];
};

function getSeverityTone(severity: Severity) {
  return severity === "CRITICAL" ? "critical" : "warning";
}

export function CriticalEventsPanel({ events }: CriticalEventsPanelProps) {
  return (
    <Card className="border-red-300/15 bg-red-300/[0.035]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-red-200">Critical watch</p>
          <h2 className="mt-2 text-xl font-black uppercase tracking-normal text-white">
            Highest priority events
          </h2>
        </div>
        <Badge tone="critical">{events.length} flagged</Badge>
      </div>

      <div className="mt-5 space-y-3">
        {events.map((event) => (
          <article
            className="rounded-md border border-white/[0.14] bg-black/30 p-4"
            key={event.id}
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone={getSeverityTone(event.severity)}>
                {formatSeverity(event.severity)}
              </Badge>
              <Badge tone="neutral">{formatAgentType(event.agentType)}</Badge>
              <Badge tone={event.status === "NEW" ? "info" : "warning"}>
                {formatStatus(event.status)}
              </Badge>
            </div>
            <h3 className="mt-3 text-base font-black uppercase text-white">
              {formatEventType(event.eventType)}
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              {event.description}
            </p>
            <p className="mt-3 text-xs font-medium text-zinc-600">
              {event.cameraName} / {event.zone}
            </p>
          </article>
        ))}
      </div>
    </Card>
  );
}
