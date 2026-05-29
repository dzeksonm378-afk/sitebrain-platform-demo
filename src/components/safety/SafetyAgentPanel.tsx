import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { formatStatus } from "@/lib/format";
import type { AIAgent, SystemStatus } from "@/types/sitebrain";

type SafetyAgentPanelProps = {
  agent: AIAgent;
};

const monitoredClasses = ["person", "helmet", "vest", "danger zone"];

function getStatusTone(status: SystemStatus) {
  if (status === "ONLINE") {
    return "online";
  }

  if (status === "WARNING") {
    return "warning";
  }

  return "critical";
}

export function SafetyAgentPanel({ agent }: SafetyAgentPanelProps) {
  return (
    <Card className="border-amber-300/15 bg-amber-300/[0.035]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-normal text-amber-200">
            Safety agent
          </p>
          <h2 className="mt-2 text-2xl font-black uppercase tracking-normal text-white">
            {agent.name}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            {agent.description}
          </p>
        </div>
        <Badge tone={getStatusTone(agent.status)}>
          {formatStatus(agent.status)}
        </Badge>
      </div>

      <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2 xl:grid-cols-4">
        <div>
          <dt className="text-slate-500">Model</dt>
          <dd className="mt-1 font-semibold text-slate-100">
            {agent.modelLabel}
          </dd>
        </div>
        <div>
          <dt className="text-slate-500">Accuracy</dt>
          <dd className="mt-1 font-semibold text-slate-100">
            {agent.accuracyLabel}
          </dd>
        </div>
        <div>
          <dt className="text-slate-500">Events today</dt>
          <dd className="mt-1 font-semibold text-slate-100">
            {agent.eventsToday}
          </dd>
        </div>
        <div>
          <dt className="text-slate-500">Active issues</dt>
          <dd className="mt-1 font-semibold text-slate-100">
            {agent.activeIssues}
          </dd>
        </div>
      </dl>

      <div className="mt-6 flex flex-wrap gap-2">
        {monitoredClasses.map((className) => (
          <Badge key={className} tone="neutral">
            {className}
          </Badge>
        ))}
        <Badge tone="info">mock data</Badge>
      </div>
    </Card>
  );
}
