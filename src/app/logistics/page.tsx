import { LogisticsAgentPanel } from "@/components/logistics/LogisticsAgentPanel";
import { LogisticsEventCard } from "@/components/logistics/LogisticsEventCard";
import { LogisticsSummary } from "@/components/logistics/LogisticsSummary";
import { LogisticsWorkflow } from "@/components/logistics/LogisticsWorkflow";
import { WarehouseZoneGrid } from "@/components/logistics/WarehouseZoneGrid";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { mockAgents, mockLogisticsZones } from "@/data/mock";
import {
  getLogisticsEvents,
  getLogisticsSummary,
} from "@/lib/demo-selectors";

const logisticsEvents = getLogisticsEvents();
const logisticsSummary = getLogisticsSummary();
const logisticsAgent =
  mockAgents.find((agent) => agent.agentType === "LOGISTICS") ?? mockAgents[0];

export default function LogisticsPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        description="AI warehouse zone monitoring"
        eyebrow="Logistics"
        title="Logistics Agent"
      >
        <div className="flex flex-wrap gap-2">
          <Badge tone="info">Demo data</Badge>
          <Badge tone="online">System status: Online</Badge>
        </div>
      </SectionHeader>

      <Card className="border-cyan-300/15 bg-cyan-300/[0.04]">
        <p className="text-sm leading-6 text-slate-300">
          Logistics Camera Agent tracks warehouse zones, pallets, products and
          long-stay events from camera streams. This public demo uses mock
          events.
        </p>
      </Card>

      <LogisticsSummary summary={logisticsSummary} />

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <LogisticsAgentPanel agent={logisticsAgent} />
        <LogisticsWorkflow />
      </div>

      <WarehouseZoneGrid zones={mockLogisticsZones} />

      <section className="space-y-4" aria-label="Logistics event cards">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-cyan-200">
              Logistics events
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-normal text-white">
              Pallets, occupancy and long-stay alerts
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Unified logistics detections from warehouse and unloading cameras.
            </p>
          </div>
          <Badge tone="warning">{logisticsEvents.length} mock events</Badge>
        </div>

        <div className="grid gap-4">
          {logisticsEvents.map((event) => (
            <LogisticsEventCard event={event} key={event.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
