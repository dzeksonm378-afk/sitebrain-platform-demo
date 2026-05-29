import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const markers = ["08:00", "12:00", "16:00", "Daily"] as const;

export function TimelapsePreview() {
  return (
    <Card className="overflow-hidden border-white/15 bg-white/[0.04]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-normal text-zinc-500">
            Timelapse preview
          </p>
          <h2 className="mt-2 text-xl font-black uppercase tracking-normal text-white">
            Scheduled snapshots over the work day
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge tone="info">Demo Timelapse</Badge>
          <Badge tone="online">Scheduled Snapshots</Badge>
          <Badge tone="neutral">No real camera feed</Badge>
        </div>
      </div>

      <div className="relative mt-5 min-h-72 overflow-hidden rounded-md border border-white/[0.14] bg-[linear-gradient(135deg,rgba(24,24,27,0.96),rgba(7,7,7,0.98))]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_80%_72%,rgba(110,231,183,0.12),transparent_30%)]" />
        <div className="absolute inset-x-6 top-6 grid grid-cols-4 gap-2">
          {markers.map((marker) => (
            <div
              className="rounded-md border border-white/[0.14] bg-black/30 px-2 py-2 text-center text-xs font-medium text-zinc-300"
              key={marker}
            >
              {marker}
            </div>
          ))}
        </div>

        <div className="absolute left-[12%] top-[35%] h-[34%] w-[18%] rounded-md border border-white/50 bg-white/10" />
        <div className="absolute left-[37%] top-[28%] h-[42%] w-[20%] rounded-lg border border-emerald-300/50 bg-emerald-300/10" />
        <div className="absolute right-[15%] top-[42%] h-[28%] w-[18%] rounded-lg border border-amber-300/60 bg-amber-300/10" />

        <div className="relative flex min-h-72 flex-col items-center justify-center px-5 pt-16 text-center">
          <p className="text-sm font-black uppercase tracking-normal text-white">
            Timelapse preview placeholder
          </p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500">
            Visual demo frame for daily construction progress, zone activity
            and idle-state changes.
          </p>
        </div>

        <div className="absolute inset-x-6 bottom-6">
          <div className="h-1.5 rounded-full bg-white/10">
            <div className="h-1.5 w-3/4 rounded-full bg-white" />
          </div>
          <div className="mt-3 flex justify-between text-xs text-slate-500">
            {markers.map((marker) => (
              <span key={marker}>{marker}</span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
