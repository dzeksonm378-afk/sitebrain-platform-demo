import { EventsClient } from "@/components/events/EventsClient";
import { EventSummary } from "@/components/events/EventSummary";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { mockEvents } from "@/data/mock";

export default function EventsPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        description="Unified AI event journal across Safety, Logistics and Progress cameras."
        eyebrow="Events"
        title="Events"
      >
        <div className="flex flex-wrap gap-2">
          <Badge tone="info">Demo data</Badge>
          <Badge tone="warning">Client filters</Badge>
        </div>
      </SectionHeader>

      <Card className="border-cyan-300/15 bg-cyan-300/[0.04]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-cyan-100">Demo data</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              No real cameras connected in this public demo. The page shows how
              SiteBrain will organize camera sources and AI events.
            </p>
          </div>
          <Badge tone="neutral">Mock event journal</Badge>
        </div>
      </Card>

      <EventSummary events={mockEvents} />
      <EventsClient events={mockEvents} />
    </div>
  );
}
