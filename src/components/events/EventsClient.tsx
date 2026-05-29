"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { SiteBrainEvent } from "@/types/sitebrain";
import {
  type AgentFilter,
  EventFilters,
  type SeverityFilter,
  type StatusFilter,
} from "./EventFilters";
import { EventsList } from "./EventsList";

type EventsClientProps = {
  events: SiteBrainEvent[];
};

export function EventsClient({ events }: EventsClientProps) {
  const [agentFilter, setAgentFilter] = useState<AgentFilter>("ALL");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("ALL");
  const [severityFilter, setSeverityFilter] = useState<SeverityFilter>("ALL");

  const filteredEvents = useMemo(
    () =>
      events.filter((event) => {
        const agentMatches =
          agentFilter === "ALL" || event.agentType === agentFilter;
        const statusMatches =
          statusFilter === "ALL" || event.status === statusFilter;
        const severityMatches =
          severityFilter === "ALL" || event.severity === severityFilter;

        return agentMatches && statusMatches && severityMatches;
      }),
    [agentFilter, events, severityFilter, statusFilter],
  );

  return (
    <div className="space-y-5">
      <Card>
        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <p className="text-sm font-medium text-cyan-200">Filters</p>
            <h2 className="mt-2 text-xl font-semibold tracking-normal text-white">
              Event journal controls
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Filter mock events by AI agent, lifecycle status, and severity.
            </p>
          </div>
          <Badge tone="info">
            {filteredEvents.length} of {events.length} events
          </Badge>
        </div>

        <div className="mt-5">
          <EventFilters
            agentFilter={agentFilter}
            onAgentFilterChange={setAgentFilter}
            onSeverityFilterChange={setSeverityFilter}
            onStatusFilterChange={setStatusFilter}
            severityFilter={severityFilter}
            statusFilter={statusFilter}
          />
        </div>
      </Card>

      <EventsList events={filteredEvents} />
    </div>
  );
}
