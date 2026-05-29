import { Card } from "@/components/ui/Card";

type LogisticsSummaryProps = {
  summary: {
    totalZones: number;
    occupiedZones: number;
    freeZones: number;
    palletEventsToday: number;
    longStayAlerts: number;
    activeLogisticsEvents: number;
  };
};

const summaryItems = [
  {
    key: "totalZones",
    label: "Total Zones",
    helper: "Demo warehouse areas monitored by AI.",
    dotClassName: "bg-cyan-300",
    valueClassName: "text-cyan-100",
  },
  {
    key: "occupiedZones",
    label: "Occupied Zones",
    helper: "Zones currently holding pallets or products.",
    dotClassName: "bg-amber-300",
    valueClassName: "text-amber-100",
  },
  {
    key: "freeZones",
    label: "Free Zones",
    helper: "Clear zones ready for the next operation.",
    dotClassName: "bg-emerald-300",
    valueClassName: "text-emerald-100",
  },
  {
    key: "palletEventsToday",
    label: "Pallet Events Today",
    helper: "Arrivals and removals detected today.",
    dotClassName: "bg-cyan-300",
    valueClassName: "text-cyan-100",
  },
  {
    key: "longStayAlerts",
    label: "Long Stay Alerts",
    helper: "Active dwell-time alerts from camera zones.",
    dotClassName: "bg-red-300",
    valueClassName: "text-red-100",
  },
  {
    key: "activeLogisticsEvents",
    label: "Active Logistics Events",
    helper: "New or confirmed logistics signals.",
    dotClassName: "bg-amber-300",
    valueClassName: "text-amber-100",
  },
] as const;

export function LogisticsSummary({ summary }: LogisticsSummaryProps) {
  return (
    <section
      aria-label="Logistics summary metrics"
      className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
    >
      {summaryItems.map((item) => (
        <Card className="min-h-34" key={item.key}>
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-slate-400">{item.label}</p>
            <span className={`size-2.5 rounded-full ${item.dotClassName}`} />
          </div>
          <p
            className={`mt-5 text-4xl font-semibold tracking-normal ${item.valueClassName}`}
          >
            {summary[item.key]}
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            {item.helper}
          </p>
        </Card>
      ))}
    </section>
  );
}
