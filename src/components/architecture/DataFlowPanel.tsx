import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  formatAgentType,
  formatConfidence,
  formatEventType,
  formatSeverity,
  formatStatus,
} from "@/lib/format";

const eventPayload = [
  { label: "eventType", value: formatEventType("NO_HELMET") },
  { label: "agentType", value: formatAgentType("SAFETY") },
  { label: "cameraName", value: "Safety Camera 01" },
  { label: "severity", value: formatSeverity("HIGH") },
  { label: "confidence", value: formatConfidence(0.92) },
  { label: "status", value: formatStatus("NEW") },
  { label: "assignedTo", value: "Site manager" },
] as const;

export function DataFlowPanel() {
  return (
    <Card className="border-emerald-300/15 bg-emerald-300/[0.035]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium text-emerald-200">
            Structured event payload
          </p>
          <h2 className="mt-2 text-xl font-semibold tracking-normal text-white">
            AI detection becomes operational data
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            SiteBrain does not stop at a frame. The detection is normalized into
            event type, severity, confidence, status and ownership.
          </p>
        </div>
        <Badge tone="online">Typed event</Badge>
      </div>

      <dl className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {eventPayload.map((item) => (
          <div
            className="rounded-lg border border-white/10 bg-black/20 p-3"
            key={item.label}
          >
            <dt className="text-xs font-medium text-slate-500">
              {item.label}
            </dt>
            <dd className="mt-2 text-sm font-semibold text-slate-100">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
