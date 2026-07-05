import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const nextProductionItems = [
  "Event Ingestion API",
  "PostgreSQL Event Storage",
  "Python Worker integration",
  "Camera registry",
] as const;

export function NextProductionStep() {
  return (
    <Card className="border-white/20 bg-white/[0.06]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-normal text-white">
            Next production step
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-400">
            The public QR demo stays on mock data. The next product foundation
            step is to accept structured events from a Python AI Worker and
            persist them for dashboard and agent pages.
          </p>
        </div>
        <Badge tone="info">Camera-ready foundation</Badge>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {nextProductionItems.map((item) => (
          <div
            className="rounded-md border border-white/[0.14] bg-black/30 px-3 py-3 text-sm font-semibold text-zinc-100"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </Card>
  );
}

