import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { formatAgentType, formatStatus } from "@/lib/format";
import type { CameraStatus, SiteBrainCamera } from "@/types/sitebrain";

type CameraCardProps = {
  camera: SiteBrainCamera;
};

function getStatusTone(status: CameraStatus) {
  if (status === "ONLINE") {
    return "online";
  }

  if (status === "WARNING") {
    return "warning";
  }

  return "critical";
}

function formatTime(value: string) {
  return value.split("T")[1]?.slice(0, 5) ?? value;
}

export function CameraCard({ camera }: CameraCardProps) {
  return (
    <Card className="flex min-h-full flex-col">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-semibold tracking-normal text-white">
              {camera.name}
            </h2>
            <Badge tone="neutral">{formatAgentType(camera.agentType)}</Badge>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            {camera.objectName} / {camera.zone}
          </p>
        </div>
        <Badge tone={getStatusTone(camera.status)}>
          {formatStatus(camera.status)}
        </Badge>
      </div>

      <div className="mt-5 rounded-lg border border-white/10 bg-black/20 p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
              Stream
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-100">
              {camera.streamLabel}
            </p>
          </div>
          {camera.isDemo ? <Badge tone="info">Demo</Badge> : null}
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          {camera.locationLabel}
        </p>
      </div>

      <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
        <div>
          <dt className="text-slate-500">Last activity</dt>
          <dd className="mt-1 font-semibold text-slate-100">
            {formatTime(camera.lastActivity)}
          </dd>
        </div>
        <div>
          <dt className="text-slate-500">FPS</dt>
          <dd className="mt-1 font-semibold text-slate-100">{camera.fps}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Resolution</dt>
          <dd className="mt-1 font-semibold text-slate-100">
            {camera.resolution}
          </dd>
        </div>
        <div>
          <dt className="text-slate-500">Uptime</dt>
          <dd className="mt-1 font-semibold text-slate-100">
            {camera.uptimePercent.toFixed(1)}%
          </dd>
        </div>
      </dl>
    </Card>
  );
}
