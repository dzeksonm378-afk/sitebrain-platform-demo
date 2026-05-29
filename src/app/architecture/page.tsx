import { ArchitectureFlow } from "@/components/architecture/ArchitectureFlow";
import { ArchitectureOverview } from "@/components/architecture/ArchitectureOverview";
import { DataFlowPanel } from "@/components/architecture/DataFlowPanel";
import { DemoArchitectureNote } from "@/components/architecture/DemoArchitectureNote";
import { IntegrationBoundaries } from "@/components/architecture/IntegrationBoundaries";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { mockArchitectureSteps } from "@/data/mock";

export default function ArchitecturePage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        description="How SiteBrain turns camera streams into AI events"
        eyebrow="Architecture"
        title="Architecture"
      >
        <div className="flex flex-wrap gap-2">
          <Badge tone="info">Demo architecture</Badge>
          <Badge tone="online">System status: Online</Badge>
        </div>
      </SectionHeader>

      <DemoArchitectureNote />

      <ArchitectureOverview />

      <ArchitectureFlow steps={mockArchitectureSteps} />

      <DataFlowPanel />

      <IntegrationBoundaries />
    </div>
  );
}
