import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const overviewItems = [
  {
    title: "Input Layer",
    description: "Cameras, video files and scheduled snapshots.",
    badge: "Sources",
  },
  {
    title: "AI Processing Layer",
    description: "Python Worker, YOLO models and business rules.",
    badge: "Vision",
  },
  {
    title: "Product Layer",
    description: "Dashboard, events, agent pages, reports and notifications.",
    badge: "Platform",
  },
] as const;

export function ArchitectureOverview() {
  return (
    <section
      aria-label="Architecture layer overview"
      className="grid gap-4 lg:grid-cols-3"
    >
      {overviewItems.map((item) => (
        <Card className="min-h-44" key={item.title}>
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-xl font-semibold tracking-normal text-white">
              {item.title}
            </h2>
            <Badge tone="info">{item.badge}</Badge>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            {item.description}
          </p>
        </Card>
      ))}
    </section>
  );
}
