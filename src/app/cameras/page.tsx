import { CameraCard } from "@/components/cameras/CameraCard";
import { CameraStatusSummary } from "@/components/cameras/CameraStatusSummary";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { mockCameras } from "@/data/mock";

export default function CamerasPage() {
  return (
    <div className="space-y-6">
      <SectionHeader
        description="Connected demo camera sources for Safety, Logistics and Progress agents."
        eyebrow="Cameras"
        title="Cameras"
      >
        <div className="flex flex-wrap gap-2">
          <Badge tone="info">Demo data</Badge>
          <Badge tone="online">Camera registry</Badge>
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
          <Badge tone="neutral">Mock camera sources</Badge>
        </div>
      </Card>

      <CameraStatusSummary cameras={mockCameras} />

      <section
        aria-label="Camera source list"
        className="grid gap-4 xl:grid-cols-2"
      >
        {mockCameras.map((camera) => (
          <CameraCard camera={camera} key={camera.id} />
        ))}
      </section>
    </div>
  );
}
