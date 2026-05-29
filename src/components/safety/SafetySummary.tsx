import { Card } from "@/components/ui/Card";
import { formatConfidence } from "@/lib/format";

type SafetySummaryProps = {
  summary: {
    activeViolations: number;
    noHelmetEvents: number;
    noVestEvents: number;
    dangerZoneEntries: number;
    criticalOrHighSeverity: number;
    averageConfidence: number;
  };
};

const summaryItems = [
  {
    key: "activeViolations",
    label: "Active Violations",
    helper: "New or confirmed PPE and zone issues.",
    dotClassName: "bg-amber-300",
    valueClassName: "text-amber-100",
  },
  {
    key: "noHelmetEvents",
    label: "NO_HELMET events",
    helper: "Helmet compliance detections.",
    dotClassName: "bg-red-300",
    valueClassName: "text-red-100",
  },
  {
    key: "noVestEvents",
    label: "NO_VEST events",
    helper: "Hi-vis vest detections.",
    dotClassName: "bg-amber-300",
    valueClassName: "text-amber-100",
  },
  {
    key: "dangerZoneEntries",
    label: "Danger Zone Entries",
    helper: "Restricted area entry detections.",
    dotClassName: "bg-red-300",
    valueClassName: "text-red-100",
  },
  {
    key: "criticalOrHighSeverity",
    label: "Critical / High",
    helper: "Highest priority safety signals.",
    dotClassName: "bg-red-300",
    valueClassName: "text-red-100",
  },
] as const;

export function SafetySummary({ summary }: SafetySummaryProps) {
  return (
    <section
      aria-label="Safety summary metrics"
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

      <Card className="min-h-34 border-emerald-300/15 bg-emerald-300/[0.04]">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-slate-400">
            Average Confidence
          </p>
          <span className="size-2.5 rounded-full bg-emerald-300" />
        </div>
        <p className="mt-5 text-4xl font-semibold tracking-normal text-emerald-100">
          {formatConfidence(summary.averageConfidence)}
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          Mean confidence across safety events.
        </p>
      </Card>
    </section>
  );
}
