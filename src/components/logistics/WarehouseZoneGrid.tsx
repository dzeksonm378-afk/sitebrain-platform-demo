import { Badge } from "@/components/ui/Badge";
import type { LogisticsZone } from "@/types/sitebrain";
import { LogisticsZoneCard } from "./LogisticsZoneCard";

type WarehouseZoneGridProps = {
  zones: LogisticsZone[];
};

export function WarehouseZoneGrid({ zones }: WarehouseZoneGridProps) {
  return (
    <section className="space-y-4" aria-label="Warehouse zone control map">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-cyan-200">
            Warehouse control map
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-normal text-white">
            Zones, pallets and product state
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            Demo map of warehouse zones with occupied/free state, product
            badges, dwell time and camera coverage.
          </p>
        </div>
        <Badge tone="info">{zones.length} monitored zones</Badge>
      </div>

      <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
        {zones.map((zone) => (
          <LogisticsZoneCard key={zone.id} zone={zone} />
        ))}
      </div>
    </section>
  );
}
