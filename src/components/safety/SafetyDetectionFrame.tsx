import { Badge } from "@/components/ui/Badge";
import { formatConfidence } from "@/lib/format";

type SafetyDetectionFrameProps = {
  imageLabel: string;
  confidence: number;
};

export function SafetyDetectionFrame({
  imageLabel,
  confidence,
}: SafetyDetectionFrameProps) {
  return (
    <div className="relative min-h-56 overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(2,6,23,0.98))]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.2),transparent_30%),radial-gradient(circle_at_78%_75%,rgba(248,113,113,0.16),transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 flex flex-wrap gap-2 p-3">
        <Badge tone="info">AI Detection</Badge>
        <Badge tone="neutral">Demo Frame</Badge>
        <Badge tone="online">{formatConfidence(confidence)}</Badge>
      </div>

      <div className="absolute left-[18%] top-[30%] h-[46%] w-[28%] rounded-lg border border-cyan-300/70 bg-cyan-300/10 shadow-[0_0_24px_rgba(34,211,238,0.2)]" />
      <div className="absolute right-[18%] top-[38%] h-[34%] w-[26%] rounded-lg border border-red-300/70 bg-red-300/10 shadow-[0_0_24px_rgba(248,113,113,0.2)]" />

      <div className="relative flex min-h-56 flex-col items-center justify-center px-5 pt-14 text-center">
        <p className="text-sm font-semibold text-white">
          Camera frame placeholder
        </p>
        <p className="mt-2 max-w-xs text-sm leading-6 text-slate-400">
          {imageLabel}
        </p>
      </div>
    </div>
  );
}
