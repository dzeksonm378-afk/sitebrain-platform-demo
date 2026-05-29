import { Card } from "@/components/ui/Card";
import type { SiteBrainCamera } from "@/types/sitebrain";

type CameraStatusSummaryProps = {
  cameras: SiteBrainCamera[];
};

const summaryItems = [
  {
    key: "total",
    label: "Total cameras",
    dotClassName: "bg-white",
  },
  {
    key: "ONLINE",
    label: "Online",
    dotClassName: "bg-emerald-300",
  },
  {
    key: "WARNING",
    label: "Warning",
    dotClassName: "bg-amber-300",
  },
  {
    key: "OFFLINE",
    label: "Offline",
    dotClassName: "bg-red-300",
  },
] as const;

export function CameraStatusSummary({ cameras }: CameraStatusSummaryProps) {
  const counts = {
    total: cameras.length,
    ONLINE: cameras.filter((camera) => camera.status === "ONLINE").length,
    WARNING: cameras.filter((camera) => camera.status === "WARNING").length,
    OFFLINE: cameras.filter((camera) => camera.status === "OFFLINE").length,
  };

  return (
    <section
      aria-label="Camera status summary"
      className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      {summaryItems.map((item) => (
        <Card className="min-h-32" key={item.key}>
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold uppercase tracking-normal text-zinc-500">
              {item.label}
            </p>
            <span className={`size-2.5 rounded-full ${item.dotClassName}`} />
          </div>
          <p className="mt-5 text-4xl font-black tracking-normal text-white">
            {counts[item.key]}
          </p>
          <p className="mt-3 text-sm text-zinc-600">
            Demo camera source registry
          </p>
        </Card>
      ))}
    </section>
  );
}
