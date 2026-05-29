import { Badge } from "@/components/ui/Badge";
import type { ProgressZone } from "@/types/sitebrain";
import { ProgressZoneCard } from "./ProgressZoneCard";

type ProgressZoneGridProps = {
  zones: ProgressZone[];
};

export function ProgressZoneGrid({ zones }: ProgressZoneGridProps) {
  return (
    <section className="space-y-4" aria-label="Construction progress zones">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-normal text-zinc-500">
            Progress zones
          </p>
          <h2 className="mt-2 text-2xl font-black uppercase tracking-normal text-white">
            Activity, idle state and completion by zone
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
            Demo progress zones show scheduled snapshot state, activity signals
            and daily summaries.
          </p>
        </div>
        <Badge tone="info">{zones.length} monitored zones</Badge>
      </div>

      <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
        {zones.map((zone) => (
          <ProgressZoneCard key={zone.id} zone={zone} />
        ))}
      </div>
    </section>
  );
}
