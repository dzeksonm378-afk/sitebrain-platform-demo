"use client";

import type { ReactNode } from "react";
import { AgentStatusCard } from "@/components/dashboard/AgentStatusCard";
import { DemoModePanel } from "@/components/dashboard/DemoModePanel";
import { LatestEvents } from "@/components/dashboard/LatestEvents";
import { SystemFlow } from "@/components/dashboard/SystemFlow";
import { generateDemoEvent } from "@/lib/demo-event-generator";
import type {
  AIAgent,
  ArchitectureStep,
  SiteBrainEvent,
} from "@/types/sitebrain";
import { useState } from "react";

type DashboardClientProps = {
  agents: AIAgent[];
  children: ReactNode;
  initialEvents: SiteBrainEvent[];
  steps: ArchitectureStep[];
};

function getLatestEvents(events: SiteBrainEvent[]) {
  return [...events]
    .sort(
      (first, second) =>
        new Date(second.time).getTime() - new Date(first.time).getTime(),
    )
    .slice(0, 7);
}

export function DashboardClient({
  agents,
  children,
  initialEvents,
  steps,
}: DashboardClientProps) {
  const [events, setEvents] = useState(initialEvents);
  const [generatedCount, setGeneratedCount] = useState(0);
  const [lastGeneratedEvent, setLastGeneratedEvent] =
    useState<SiteBrainEvent | null>(null);

  function handleSimulate() {
    const demoEvent = generateDemoEvent(events);

    setEvents([demoEvent, ...events]);
    setGeneratedCount((count) => count + 1);
    setLastGeneratedEvent(demoEvent);
  }

  return (
    <>
      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <DemoModePanel
            generatedCount={generatedCount}
            lastGeneratedEvent={lastGeneratedEvent}
            onSimulate={handleSimulate}
          />
          <SystemFlow steps={steps} />
          <AgentStatusCard agents={agents} />
        </div>

        <div className="space-y-6">{children}</div>
      </section>

      <LatestEvents events={getLatestEvents(events)} />
    </>
  );
}
