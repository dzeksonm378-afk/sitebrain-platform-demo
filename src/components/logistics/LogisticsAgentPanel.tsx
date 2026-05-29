import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { formatStatus } from "@/lib/format";
import type { AIAgent, SystemStatus } from "@/types/sitebrain";

type LogisticsAgentPanelProps = {
  agent: AIAgent;
};

const monitoredObjects = ["pallet", "box", "product", "zone"];
const products = ["water", "juice", "beer"];

function getStatusTone(status: SystemStatus) {
  if (status === "ONLINE") {
    return "online";
  }

  if (status === "WARNING") {
    return "warning";
  }

  return "critical";
}

export function LogisticsAgentPanel({ agent }: LogisticsAgentPanelProps) {
  return (
    <Card className="border-cyan-300/15 bg-cyan-300/[0.035]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium text-cyan-200">Logistics agent</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-normal text-white">
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

      <div className="mt-6 space-y-3">
        <div className="flex flex-wrap gap-2">
          {monitoredObjects.map((objectName) => (
            <Badge key={objectName} tone="neutral">
              {objectName}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {products.map((product) => (
            <Badge key={product} tone="info">
              {product}
            </Badge>
          ))}
          <Badge tone="neutral">mock data</Badge>
        </div>
      </div>
    </Card>
  );
}
