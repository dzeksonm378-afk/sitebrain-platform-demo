import { Badge } from "@/components/ui/Badge";
import type { ArchitectureStep } from "@/types/sitebrain";

type ArchitectureStepCardProps = {
  step: ArchitectureStep;
  index: number;
};

const roleLabels = [
  "Input",
  "Worker",
  "Vision",
  "Payload",
  "Platform",
  "Output",
] as const;

export function ArchitectureStepCard({
  step,
  index,
}: ArchitectureStepCardProps) {
  const roleLabel = roleLabels[index] ?? "Step";

  return (
    <article className="relative min-h-56 rounded-lg border border-white/10 bg-white/[0.035] p-5">
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-9 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
          {index + 1}
        </span>
        <Badge tone={index === 0 || index === 5 ? "online" : "info"}>
          {roleLabel}
        </Badge>
      </div>

      <h3 className="mt-5 text-lg font-semibold tracking-normal text-white">
        {step.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">
        {step.description}
      </p>

      <div className="mt-5 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs font-medium text-slate-300">
        {step.technicalLabel}
      </div>
    </article>
  );
}
