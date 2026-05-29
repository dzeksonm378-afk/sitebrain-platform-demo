import { Card } from "@/components/ui/Card";
import type { SiteBrainEvent } from "@/types/sitebrain";

type EventSummaryProps = {
  events: SiteBrainEvent[];
};

const summaryItems = [
  {
    key: "total",
    label: "Total events",
    dotClassName: "bg-cyan-300",
  },
  {
    key: "NEW",
    label: "New",
    dotClassName: "bg-cyan-300",
  },
  {
    key: "CONFIRMED",
    label: "Confirmed",
    dotClassName: "bg-amber-300",
  },
  {
    key: "priority",
    label: "Critical / High",
    dotClassName: "bg-red-300",
  },
] as const;

export function EventSummary({ events }: EventSummaryProps) {
  const counts = {
    total: events.length,
    NEW: events.filter((event) => event.status === "NEW").length,
    CONFIRMED: events.filter((event) => event.status === "CONFIRMED").length,
    priority: events.filter(
      (event) => event.severity === "CRITICAL" || event.severity === "HIGH",
    ).length,
  };

  return (
    <section
      aria-label="Event status summary"
      className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      {summaryItems.map((item) => (
        <Card className="min-h-32" key={item.key}>
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-slate-400">{item.label}</p>
            <span className={`size-2.5 rounded-full ${item.dotClassName}`} />
          </div>
          <p className="mt-5 text-4xl font-semibold tracking-normal text-white">
            {counts[item.key]}
          </p>
          <p className="mt-3 text-sm text-slate-500">Unified event journal</p>
        </Card>
      ))}
    </section>
  );
}
