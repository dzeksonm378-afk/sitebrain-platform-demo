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
    glow: "shadow-[0_0_28px_rgba(110,231,183,0.14)]",
  },
  warning: {
    dot: "bg-amber-300",
    value: "text-amber-100",
    glow: "shadow-[0_0_28px_rgba(251,191,36,0.12)]",
  },
  critical: {
    dot: "bg-red-300",
    value: "text-red-100",
    glow: "shadow-[0_0_28px_rgba(248,113,113,0.14)]",
  },
  info: {
    dot: "bg-cyan-300",
    value: "text-cyan-100",
    glow: "shadow-[0_0_28px_rgba(34,211,238,0.12)]",
  },
  neutral: {
    dot: "bg-slate-300",
    value: "text-white",
    glow: "shadow-[0_0_28px_rgba(148,163,184,0.08)]",
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
        <p className="text-sm font-medium text-slate-400">{label}</p>
        <span className={cn("size-2.5 rounded-full", styles.dot)} />
      </div>
      <p className={cn("mt-5 text-4xl font-semibold tracking-normal", styles.value)}>
        {value}
      </p>
      <p className="mt-3 text-sm leading-6 text-slate-400">{helper}</p>
    </Card>
  );
}
