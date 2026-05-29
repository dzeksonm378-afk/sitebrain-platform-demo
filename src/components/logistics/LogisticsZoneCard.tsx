import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { formatStatus } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { LogisticsZone, ProductType } from "@/types/sitebrain";

type LogisticsZoneCardProps = {
  zone: LogisticsZone;
};

function getProductTone(productType?: ProductType) {
  if (productType === "water") {
    return "info";
  }

  if (productType === "juice") {
    return "warning";
  }

  return "neutral";
}

export function LogisticsZoneCard({ zone }: LogisticsZoneCardProps) {
  const isOccupied = zone.status === "OCCUPIED";
  const isLongStay = zone.dwellTimeMinutes >= 30;

  return (
    <Card
      className={cn(
        "min-h-64 overflow-hidden",
        isOccupied
          ? "border-amber-300/15 bg-amber-300/[0.035]"
          : "border-emerald-300/10 bg-emerald-300/[0.025]",
        isLongStay && "shadow-[0_0_34px_rgba(251,191,36,0.12)]",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Warehouse zone
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-normal text-white">
            {zone.name}
          </h3>
        </div>
        <Badge tone={isOccupied ? "warning" : "online"}>
          {formatStatus(zone.status)}
        </Badge>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {zone.productType ? (
          <Badge tone={getProductTone(zone.productType)}>
            {zone.productType}
          </Badge>
        ) : (
          <Badge tone="neutral">no product</Badge>
        )}
        {isLongStay ? <Badge tone="warning">long dwell</Badge> : null}
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
            <dt className="text-slate-500">Pallet</dt>
            <dd className="mt-1 font-medium text-slate-100">
              {zone.palletId ?? "No pallet"}
            </dd>
          </div>
          <div>
            <dt className="text-slate-500">Dwell time</dt>
            <dd
              className={cn(
                "mt-1 font-semibold",
                isLongStay ? "text-amber-100" : "text-slate-100",
              )}
            >
              {zone.dwellTimeMinutes} min
            </dd>
          </div>
        </div>
        <div>
          <dt className="text-slate-500">Last event</dt>
          <dd className="mt-1 font-medium text-slate-100">
            {formatStatus(zone.lastEvent)}
          </dd>
        </div>
      </dl>

      <div className="mt-5 flex items-center gap-2 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-300">
        <span className="size-2 rounded-full bg-emerald-300" />
        <span className="min-w-0 truncate">{zone.cameraName}</span>
      </div>
    </Card>
  );
}
