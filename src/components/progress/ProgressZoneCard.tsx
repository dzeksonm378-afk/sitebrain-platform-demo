import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { formatStatus } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { ProgressZone, ProgressZoneStatus } from "@/types/sitebrain";

type ProgressZoneCardProps = {
  zone: ProgressZone;
};

function formatTime(value: string) {
  return value.replace("T", " ").slice(0, 16);
}

function getStatusTone(status: ProgressZoneStatus) {
  if (status === "COMPLETED") {
    return "online";
  }

  if (status === "IDLE") {
    return "warning";
  }

  return "info";
}

function getZoneStyle(status: ProgressZoneStatus) {
  if (status === "COMPLETED") {
    return "border-emerald-300/15 bg-emerald-300/[0.035]";
  }

  if (status === "IDLE") {
    return "border-amber-300/15 bg-amber-300/[0.035]";
  }

  return "border-white/15 bg-white/[0.04]";
}

export function ProgressZoneCard({ zone }: ProgressZoneCardProps) {
  return (
    <Card className={cn("min-h-64", getZoneStyle(zone.status))}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-normal text-zinc-600">
            Progress zone
          </p>
          <h3 className="mt-2 text-xl font-black uppercase tracking-normal text-white">
            {zone.name}
          </h3>
        </div>
        <Badge tone={getStatusTone(zone.status)}>
          {formatStatus(zone.status)}
        </Badge>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between gap-4 text-sm">
          <span className="text-slate-400">Progress</span>
          <span className="font-semibold text-slate-100">
            {zone.progressPercent}%
          </span>
        </div>
        <div
          aria-label={`${zone.name} progress ${zone.progressPercent}%`}
          className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/10"
          role="meter"
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={zone.progressPercent}
        >
          <div
            className={cn(
              "h-full rounded-full",
              zone.status === "IDLE"
                ? "bg-amber-300"
                : "bg-white",
            )}
            style={{ width: `${zone.progressPercent}%` }}
          />
        </div>
      </div>

      <dl className="mt-5 grid gap-4 text-sm">
        <div>
          <dt className="text-slate-500">Object</dt>
          <dd className="mt-1 font-medium text-slate-100">
            {zone.objectName}
          </dd>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-slate-500">Last snapshot</dt>
            <dd className="mt-1 font-medium text-slate-100">
              {formatTime(zone.lastSnapshot)}
            </dd>
          </div>
          <div>
            <dt className="text-slate-500">Activity</dt>
            <dd className="mt-1 font-medium text-slate-100">
              {zone.activityLabel}
            </dd>
          </div>
        </div>
      </dl>

      <p className="mt-5 text-sm leading-6 text-slate-400">
        {zone.dailySummary}
      </p>
    </Card>
  );
}
