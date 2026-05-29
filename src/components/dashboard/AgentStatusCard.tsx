import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { formatAgentType, formatStatus } from "@/lib/format";
import type { AIAgent, SystemStatus } from "@/types/sitebrain";

type AgentStatusCardProps = {
  agents: AIAgent[];
};

function getStatusTone(status: SystemStatus) {
  if (status === "ONLINE") {
    return "online";
  }

  if (status === "WARNING") {
    return "warning";
  }

  return "critical";
}

export function AgentStatusCard({ agents }: AgentStatusCardProps) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-cyan-200">AI agents</p>
          <h2 className="mt-2 text-xl font-semibold tracking-normal text-white">
            Computer vision workers
          </h2>
        </div>
        <Badge tone="info">{agents.length} active</Badge>
      </div>

      <div className="mt-5 grid gap-3">
        {agents.map((agent) => (
          <article
            className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
            key={agent.id}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold text-white">
                    {agent.name}
                  </h3>
                  <Badge tone="neutral">{formatAgentType(agent.agentType)}</Badge>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {agent.description}
                </p>
              </div>
              <Badge tone={getStatusTone(agent.status)}>
                {formatStatus(agent.status)}
              </Badge>
            </div>

            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
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
              <div>
                <dt className="text-slate-500">Accuracy</dt>
                <dd className="mt-1 font-semibold text-slate-100">
                  {agent.accuracyLabel}
                </dd>
              </div>
              <div>
                <dt className="text-slate-500">Model</dt>
                <dd className="mt-1 font-semibold text-slate-100">
                  {agent.modelLabel}
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Card>
  );
}
