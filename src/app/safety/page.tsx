import { SafetyAgentPanel } from "@/components/safety/SafetyAgentPanel";
import { SafetyEventCard } from "@/components/safety/SafetyEventCard";
import { SafetySummary } from "@/components/safety/SafetySummary";
import { SafetyWorkflow } from "@/components/safety/SafetyWorkflow";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { mockAgents } from "@/data/mock";
import { getSafetyEvents, getSafetySummary } from "@/lib/demo-selectors";

const safetyEvents = getSafetyEvents();
const safetySummary = getSafetySummary();
const safetyAgent =
  mockAgents.find((agent) => agent.agentType === "SAFETY") ?? mockAgents[0];

export default function SafetyPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        description="AI PPE & danger zone monitoring"
        eyebrow="Safety"
        title="Safety Agent"
      >
        <div className="flex flex-wrap gap-2">
          <Badge tone="info">Demo data</Badge>
          <Badge tone="online">System status: Online</Badge>
        </div>
      </SectionHeader>

      <Card className="border-cyan-300/15 bg-cyan-300/[0.04]">
        <p className="text-sm leading-6 text-slate-300">
          Safety Camera Agent detects PPE violations and dangerous zone entries
          from camera streams. This public demo uses mock events.
        </p>
      </Card>

      <SafetySummary summary={safetySummary} />

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <SafetyAgentPanel agent={safetyAgent} />
        <SafetyWorkflow />
      </div>

      <section className="space-y-4" aria-label="Safety event cards">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-cyan-200">
              Safety detections
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-normal text-white">
              PPE violations and danger zone entries
            </h2>
          </div>
          <Badge tone="warning">{safetyEvents.length} mock events</Badge>
        </div>

        <div className="grid gap-4">
          {safetyEvents.map((event) => (
            <SafetyEventCard event={event} key={event.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
