import { ProgressAgentPanel } from "@/components/progress/ProgressAgentPanel";
import { ProgressEventCard } from "@/components/progress/ProgressEventCard";
import { ProgressSummary } from "@/components/progress/ProgressSummary";
import { ProgressTimeline } from "@/components/progress/ProgressTimeline";
import { ProgressWorkflow } from "@/components/progress/ProgressWorkflow";
import { ProgressZoneGrid } from "@/components/progress/ProgressZoneGrid";
import { TimelapsePreview } from "@/components/progress/TimelapsePreview";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { mockAgents, mockProgressZones } from "@/data/mock";
import { getProgressEvents, getProgressSummary } from "@/lib/demo-selectors";

const progressEvents = getProgressEvents();
const progressSummary = getProgressSummary();
const progressAgent =
  mockAgents.find((agent) => agent.agentType === "PROGRESS") ?? mockAgents[0];

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        description="AI construction progress monitoring"
        eyebrow="Progress"
        title="Progress Agent"
      >
        <div className="flex flex-wrap gap-2">
          <Badge tone="info">Demo data</Badge>
          <Badge tone="online">System status: Online</Badge>
        </div>
      </SectionHeader>

      <Card className="border-white/20 bg-white/[0.06]">
        <p className="text-sm leading-6 text-zinc-300">
          Progress Camera Agent captures scheduled snapshots, detects activity
          by zones and helps prepare daily progress reports. This public demo
          uses mock data.
        </p>
      </Card>

      <ProgressSummary summary={progressSummary} />

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <ProgressAgentPanel agent={progressAgent} />
        <ProgressTimeline />
      </div>

      <TimelapsePreview />

      <ProgressWorkflow />

      <ProgressZoneGrid zones={mockProgressZones} />

      <section className="space-y-4" aria-label="Progress event cards">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-normal text-zinc-500">
              Progress events
            </p>
            <h2 className="mt-2 text-2xl font-black uppercase tracking-normal text-white">
              Snapshots, daily reports and idle-zone signals
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Progress detections from scheduled construction cameras and daily
              report automation.
            </p>
          </div>
          <Badge tone="warning">{progressEvents.length} mock events</Badge>
        </div>

        <div className="grid gap-4">
          {progressEvents.map((event) => (
            <ProgressEventCard event={event} key={event.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
