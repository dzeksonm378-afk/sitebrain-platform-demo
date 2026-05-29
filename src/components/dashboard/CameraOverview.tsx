import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { formatAgentType, formatStatus } from "@/lib/format";
import type { CameraStatus, SiteBrainCamera } from "@/types/sitebrain";

type CameraOverviewProps = {
  cameras: SiteBrainCamera[];
};

function formatTime(value: string) {
  return value.split("T")[1]?.slice(0, 5) ?? value;
}

function getCameraTone(status: CameraStatus) {
  if (status === "ONLINE") {
    return "online";
  }

  if (status === "WARNING") {
    return "warning";
  }

  return "critical";
}

export function CameraOverview({ cameras }: CameraOverviewProps) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-cyan-200">Camera overview</p>
          <h2 className="mt-2 text-xl font-semibold tracking-normal text-white">
            Connected demo cameras
          </h2>
        </div>
        <Badge tone="neutral">{cameras.length} cameras</Badge>
      </div>

      <div className="mt-5 grid gap-3">
        {cameras.map((camera) => (
          <article
            className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
            key={camera.id}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold text-white">
                    {camera.name}
                  </h3>
                  <Badge tone="neutral">
                    {formatAgentType(camera.agentType)}
                  </Badge>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {camera.objectName} / {camera.zone}
                </p>
              </div>
              <Badge tone={getCameraTone(camera.status)}>
                {formatStatus(camera.status)}
              </Badge>
            </div>
            <p className="mt-3 text-xs font-medium text-slate-500">
              Last activity {formatTime(camera.lastActivity)}
            </p>
          </article>
        ))}
      </div>
    </Card>
  );
}
