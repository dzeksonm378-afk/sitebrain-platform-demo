import { CameraOverview } from "@/components/dashboard/CameraOverview";
import { CriticalEventsPanel } from "@/components/dashboard/CriticalEventsPanel";
import { DashboardClient } from "@/components/dashboard/DashboardClient";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { PortfolioPreviewSection } from "@/components/portfolio/PortfolioPreviewSection";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  mockAgents,
  mockArchitectureSteps,
  mockCameras,
  mockDashboardMetrics,
  mockEvents,
} from "@/data/mock";
import {
  getActiveSafetyViolations,
  getEventsTodayCount,
  getOnlineCamerasCount,
} from "@/lib/demo-selectors";
import { formatStatus } from "@/lib/format";
import type { SiteBrainEvent } from "@/types/sitebrain";

function isOpenPriorityEvent(event: SiteBrainEvent) {
  return (
    (event.severity === "CRITICAL" || event.severity === "HIGH") &&
    (event.status === "NEW" || event.status === "CONFIRMED")
  );
}

const criticalEvents = mockEvents.filter(isOpenPriorityEvent).slice(0, 5);

const primaryCameras = mockCameras.slice(0, 6);

const metrics = [
  {
    label: "Total Cameras",
    value: mockDashboardMetrics.totalCameras,
    helper: "Demo camera network across safety, logistics, and progress.",
    accent: "info",
  },
  {
    label: "Online Cameras",
    value: getOnlineCamerasCount(),
    helper: "Live demo feeds available for the control center.",
    accent: "online",
  },
  {
    label: "Events Today",
    value: getEventsTodayCount(),
    helper: "AI-generated events prepared from mock data.",
    accent: "neutral",
  },
  {
    label: "Active Violations",
    value: getActiveSafetyViolations().length,
    helper: "Open safety signals that need responsible action.",
    accent: "warning",
  },
  {
    label: "Critical Events",
    value: mockDashboardMetrics.criticalEvents,
    helper: "Highest severity events visible for the stage demo.",
    accent: "critical",
  },
  {
    label: "System Status",
    value: formatStatus(mockDashboardMetrics.systemStatus),
    helper: "Mock platform status for QR presentation.",
    accent: "online",
  },
] as const;

export default function Home() {
  return (
    <div className="space-y-6">
      <SectionHeader
        description="AI camera intelligence dashboard for safety, logistics, and construction progress demo scenarios."
        eyebrow="Dashboard"
        title="SiteBrain Platform"
      >
        <div className="flex flex-wrap gap-2">
          <Badge tone="online">System Online</Badge>
          <Badge tone="info">Demo Stand</Badge>
          <Badge tone="neutral">Mock Data</Badge>
        </div>
      </SectionHeader>

      <section
        aria-label="Dashboard metrics"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
      >
        {metrics.map((metric) => (
          <MetricCard
            accent={metric.accent}
            helper={metric.helper}
            key={metric.label}
            label={metric.label}
            value={metric.value}
          />
        ))}
      </section>

      <DashboardClient
        agents={mockAgents}
        initialEvents={mockEvents}
        steps={mockArchitectureSteps}
      >
        <CriticalEventsPanel events={criticalEvents} />
        <CameraOverview cameras={primaryCameras} />
      </DashboardClient>

      <PortfolioPreviewSection />
    </div>
  );
}
