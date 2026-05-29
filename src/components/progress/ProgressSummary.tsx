import { Card } from "@/components/ui/Card";

type ProgressSummaryProps = {
  summary: {
    overallProgress: number;
    activeZones: number;
    idleZones: number;
    completedZones: number;
    snapshotsToday: number;
    dailyReports: number;
  };
};

const summaryItems = [
  {
    key: "overallProgress",
    label: "Overall Progress",
    helper: "Average progress across monitored zones.",
    dotClassName: "bg-cyan-300",
    valueClassName: "text-cyan-100",
    suffix: "%",
  },
  {
    key: "activeZones",
    label: "Active Zones",
    helper: "Zones with visible work activity.",
    dotClassName: "bg-emerald-300",
    valueClassName: "text-emerald-100",
    suffix: "",
  },
  {
    key: "idleZones",
    label: "Idle Zones",
    helper: "Zones with low or no visible activity.",
    dotClassName: "bg-amber-300",
    valueClassName: "text-amber-100",
    suffix: "",
  },
  {
    key: "completedZones",
    label: "Completed Zones",
    helper: "Zones marked complete in the demo scope.",
    dotClassName: "bg-emerald-300",
    valueClassName: "text-emerald-100",
    suffix: "",
  },
  {
    key: "snapshotsToday",
    label: "Snapshots Today",
    helper: "Scheduled progress snapshots created today.",
    dotClassName: "bg-cyan-300",
    valueClassName: "text-cyan-100",
    suffix: "",
  },
  {
    key: "dailyReports",
    label: "Daily Reports",
    helper: "Generated daily report events.",
    dotClassName: "bg-emerald-300",
    valueClassName: "text-emerald-100",
    suffix: "",
  },
] as const;

export function ProgressSummary({ summary }: ProgressSummaryProps) {
  return (
    <section
      aria-label="Progress summary metrics"
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
            {item.suffix}
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            {item.helper}
          </p>
        </Card>
      ))}
    </section>
  );
}
