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
    <div className="relative min-h-56 overflow-hidden rounded-md border border-white/[0.14] bg-[linear-gradient(135deg,rgba(24,24,27,0.96),rgba(7,7,7,0.98))]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.14),transparent_30%),radial-gradient(circle_at_78%_75%,rgba(248,113,113,0.16),transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 flex flex-wrap gap-2 p-3">
        <Badge tone="info">AI Detection</Badge>
        <Badge tone="neutral">Demo Frame</Badge>
        <Badge tone="online">{formatConfidence(confidence)}</Badge>
      </div>

      <div className="absolute left-[18%] top-[30%] h-[46%] w-[28%] rounded-md border border-white/70 bg-white/10" />
      <div className="absolute right-[18%] top-[38%] h-[34%] w-[26%] rounded-md border border-red-300/70 bg-red-300/10" />

      <div className="relative flex min-h-56 flex-col items-center justify-center px-5 pt-14 text-center">
        <p className="text-sm font-black uppercase tracking-normal text-white">
          Camera frame placeholder
        </p>
        <p className="mt-2 max-w-xs text-sm leading-6 text-zinc-500">
          {imageLabel}
        </p>
      </div>
    </div>
  );
}
