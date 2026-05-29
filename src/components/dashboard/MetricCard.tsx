import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

type MetricAccent = "online" | "warning" | "critical" | "info" | "neutral";

type MetricCardProps = {
  label: string;
  value: string | number;
  helper: string;
  accent?: MetricAccent;
};

const accentStyles: Record<
  MetricAccent,
  { dot: string; value: string; glow: string }
> = {
  online: {
    dot: "bg-emerald-300",
    value: "text-emerald-100",
    glow: "",
  },
  warning: {
    dot: "bg-amber-300",
    value: "text-amber-100",
    glow: "",
  },
  critical: {
    dot: "bg-red-300",
    value: "text-red-100",
    glow: "",
  },
  info: {
    dot: "bg-white",
    value: "text-white",
    glow: "",
  },
  neutral: {
    dot: "bg-zinc-300",
    value: "text-white",
    glow: "",
  },
};

export function MetricCard({
  label,
  value,
  helper,
  accent = "neutral",
}: MetricCardProps) {
  const styles = accentStyles[accent];

  return (
    <Card className={cn("min-h-36", styles.glow)}>
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold uppercase tracking-normal text-zinc-500">
          {label}
        </p>
        <span className={cn("size-2.5 rounded-full", styles.dot)} />
      </div>
      <p className={cn("mt-5 text-4xl font-black tracking-normal", styles.value)}>
        {value}
      </p>
      <p className="mt-3 text-sm leading-6 text-zinc-500">{helper}</p>
    </Card>
  );
}
